import glob
import os
import random
import re
from typing import List, Dict, Tuple


def convert_to_kebab_case(name: str) -> str:
    """Convert a camelCase or PascalCase string to kebab-case."""
    name = re.sub('(.)([A-Z][a-z]+)', r'\1-\2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1-\2', name).lower()


def parse_default_values(vue_file: str) -> Dict[str, str]:
    """Parse default values from Vue component's withDefaults."""
    defaults = {}
    with open(vue_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find withDefaults section
    defaults_match = re.search(r'withDefaults\(defineProps<\w+>\(\),\s*({[^}]+})', content, re.DOTALL)
    if defaults_match:
        defaults_content = defaults_match.group(1)
        # Parse each default value
        for line in defaults_content.split('\n'):
            line = line.strip()
            if line and ':' in line:
                # Remove trailing comma if exists
                line = line.rstrip(',')
                # Split by first colon
                parts = line.split(':', 1)
                if len(parts) == 2:
                    prop_name = parts[0].strip()
                    prop_value = parts[1].strip()
                    defaults[prop_name] = prop_value

    return defaults


def parse_types_file(file_path: str) -> Tuple[List[Dict], List[Dict], List[Dict]]:
    """
    Parse the types.ts file to extract props, emits, and slots information.

    Returns:
        Tuple containing lists of dictionaries for props, emits, and slots
    """
    props = []
    emits = []
    slots = []

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract Props interface content
    props_match = re.search(r'export\s+interface\s+(\w+Props)\s*{([^}]+)}', content, re.DOTALL)
    if props_match:
        props_content = props_match.group(2)
        # Parse each prop line
        for line in props_content.split('\n'):
            line = line.strip()
            if line:
                # Match property name, optional marker, and type
                prop_match = re.match(r'(\w+)(\?)?:\s*([^/\n]+?)(?:\s*//\s*(.+))?$', line)
                if prop_match:
                    name, optional, type_def, description = prop_match.groups()
                    type_def = type_def.strip()

                    # Handle union types
                    if '|' in type_def:
                        type_values = [t.strip().replace("'", "") for t in type_def.split('|')]
                        type_str = ' | '.join(type_values)
                        list_str = ', '.join(type_values)
                    else:
                        type_str = type_def
                        list_str = '-'

                    props.append({
                        'name': name,
                        'type': type_str,
                        'description': description.strip() if description else f'{name} value',
                        'default': '-' if not optional else 'undefined',
                        'list': list_str if list_str != '-' else '-'
                    })

    # Extract Emits type content
    emits_match = re.search(r'export\s+type\s+(\w+Emits)\s*=\s*{([^}]+)}', content, re.DOTALL)
    if emits_match:
        emits_content = emits_match.group(2)
        # Parse each emit line
        for line in emits_content.split('\n'):
            line = line.strip()
            if line:
                # Match event name
                emit_match = re.match(r"\(e:\s*'([\w-]+)'\):\s*void", line)
                if emit_match:
                    event_name = emit_match.group(1)
                    emits.append({
                        'name': event_name,
                        'description': f'Triggered when {event_name.replace("-", " ")}',
                        'params': '-'
                    })

    # Extract Slots interface content
    slots_match = re.search(r'export\s+interface\s+(\w+Slots)\s*{([^}]+)}', content, re.DOTALL)
    if slots_match:
        slots_content = slots_match.group(2)
        # Parse each slot line
        for line in slots_content.split('\n'):
            line = line.strip()
            if line:
                # Match slot name, optional marker, and return type
                slot_match = re.match(r'(\w+)(\?)?:\s*\(\)\s*=>\s*([^/\n]+?)(?:\s*//\s*(.+))?$', line)
                if slot_match:
                    name, optional, return_type, description = slot_match.groups()
                    slots.append({
                        'name': name,
                        'description': description.strip() if description else f'Slot for {name}',
                        'type': return_type.strip(),
                        'optional': bool(optional)
                    })

    return props, emits, slots


def format_default_value(value: str) -> str:
    """Format default value for documentation."""
    # Remove quotes from string literals
    value = value.strip('"\'')
    # Convert boolean and numeric values
    if value.lower() == 'true':
        return 'true'
    if value.lower() == 'false':
        return 'false'
    try:
        float(value)
        return value
    except ValueError:
        # If it's a string and contains special characters, wrap in quotes
        if any(c in value for c in ' #'):
            return f"{value}"
        return value


def format_prop_name(prop: str) -> str:
    """
    将属性名首字母大写，并在驼峰命名的单词之间插入空格。

    :param prop: 原始属性名（字符串）
    :return: 格式化后的属性名
    """
    # 在驼峰命名的单词之间插入空格
    spaced_prop = re.sub(r'(?<!^)(?=[A-Z])', ' ', prop)
    # 首字母大写
    return spaced_prop.capitalize()


def generate_random_color():
    """
    Generate a random 6-character hexadecimal color code, starting with '#'.
    """
    return f"#{''.join(random.choices('0123456789abcdef', k=6))}"


def generate_random_with_default(prop_default):
    """
    Generate a random value based on the prop type.
    - If the type is 'number', generate a random integer.
    - If the type is 'string' and the default value is a color code, generate a random color.
    """
    if isinstance(prop_default, str) and prop_default.startswith('#'):
        return generate_random_color()  # If it's a color code, generate a new random color
    try:
        max_value = int(prop_default)  # Convert default to integer for number type
        if max_value == 0:  # If the default is 0, use 100 as the max value
            max_value = 100
        return random.randint(1, max_value)  # Generate a random number
    except (ValueError, TypeError):
        return prop_default  # Return the original default if it's not a valid number


def is_enum_type(type_string):
    """
    判断一个字符串是否表示枚举类型的集合
    假设字符串是类似于 "L | M | Q | H" 的格式。
    """
    # 使用 '|' 分割字符串，去除空格
    enum_values = [value.strip() for value in type_string.split('|')]

    # 判断枚举值集合的长度是否大于 1
    if len(enum_values) > 1:
        return True, enum_values  # 返回 True 和枚举值列表
    return False, []


def generate_random_default(prop):
    if prop["type"] == "number":
        value = int(prop["default"]) == 0 and 100 or int(prop["default"])
        return random.randint(1, value)
    elif prop["type"] == "string" and prop["default"].startswith('#'):  # Color
        return generate_random_with_default(prop["default"])
    return prop["default"]


def generate_markdown(component_name: str, props: List[Dict], emits: List[Dict], slots: List[Dict]) -> str:
    """Generate markdown documentation for the component."""
    # markdown = f"{component_name}\n\n"
    markdown = f"""---
title: {component_name.replace('Shadcn', 'Shadcn ')}
---

# Introduction

This document describes the features and usage of the {component_name} component.
"""

    has_model_value = False

    # Generate Usage section
    if props:
        for prop in props:
            has_model_value = prop['name'] == 'modelValue' or has_model_value
            if prop['name'] == 'modelValue':
                markdown += \
                    f"""
## Usage

::: raw

<CodeRunner title="Usage">
    <{component_name} {has_model_value and 'v-model="value"'} />
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <{component_name} {has_model_value and 'v-model="value"'} />
</template>
```

:::
"""
            else:
                default = generate_random_default(prop)
                is_enum, enum_values = is_enum_type(prop['type'])
                markdown += f"""
## {format_prop_name(prop['name'])}

::: raw

<CodeRunner title="{format_prop_name(prop['name'])}">"""

                if is_enum:
                    for enum_value in enum_values:
                        markdown += f"""
    <{component_name}{has_model_value and ' v-model="value" ' or ' '}{prop['name']}="{enum_value.strip("'\"")}" />"""
                else:
                    markdown += f"""
    <{component_name}{has_model_value and ' v-model="value" ' or ' '}{prop['type'] == 'number' and ':' or ''}{prop['name']}="{default}" />"""

                markdown += """
</CodeRunner>

:::

::: details Show code

```vue
<template>"""

                if is_enum:
                    for enum_value in enum_values:
                        markdown += f"""
    <{component_name}{has_model_value and ' v-model="value" ' or ' '}{prop['name']}="{enum_value.strip("'\"")}" />"""
                else:
                    markdown += f"""
    <{component_name}{has_model_value and ' v-model="value" ' or ' '}{prop['type'] == 'number' and ':' or ''}{prop['name']}="{default}" />"""

                markdown += """
</template>
```

:::
"""

    # Generate Props table
    if props:
        markdown += f"## {component_name.replace('Shadcn', '')} Props\n\n"
        markdown += "<ApiTable title=\"Props\"\n"
        markdown += "    :headers=\"['Attribute', 'Description', 'Type', 'Default Value', 'List']\"\n"
        markdown += "    :columns=\"[\n"

        prop_rows = []
        for p in props:
            row = f"        ['{p['name']}', '{p['description']}', '{p['type']}', '{p['default']}', '{p['list']}']"
            prop_rows.append(row)

        markdown += ",\n".join(prop_rows)
        markdown += "\n    ]\">\n</ApiTable>\n\n"

    # Generate Events table
    if emits:
        markdown += f"## {component_name.replace('Shadcn', '')} Events\n\n"
        markdown += "<ApiTable title=\"Events\"\n"
        markdown += "    :headers=\"['Event', 'Description', 'Callback Parameters']\"\n"
        markdown += "    :columns=\"[\n"

        emit_rows = []
        for e in emits:
            row = f"        ['{e['name']}', '{e['description']}', '{e['params']}']"
            emit_rows.append(row)

        markdown += ",\n".join(emit_rows)
        markdown += "\n    ]\">\n</ApiTable>\n\n"

    # Generate Slots table
    if slots:
        markdown += f"## {component_name.replace('Shadcn', '')} Slots\n\n"
        markdown += "<ApiTable title=\"Slots\"\n"
        markdown += "    :headers=\"['Slot', 'Description']\"\n"
        markdown += "    :columns=\"[\n"

        slot_rows = []
        for s in slots:
            row = f"        ['{s['name']}', '{s['description']}']"
            slot_rows.append(row)

        markdown += ",\n".join(slot_rows)
        markdown += "\n    ]\">\n</ApiTable>\n"

    if has_model_value:
        markdown += \
            f"""
<script setup lang="ts">
import {{ ref }} from 'vue';

const value = ref('Hello View Shadcn UI')
</script>
"""

    return markdown


def main(src_dir: str, output_dir: str):
    """Main function to process Vue components and generate documentation."""
    os.makedirs(output_dir, exist_ok=True)

    # Find all Shadcn*.vue files
    vue_files = glob.glob(os.path.join(src_dir, 'Shadcn*.vue'))

    # Find types.ts file
    types_file = os.path.join(src_dir, 'types.ts')
    if not os.path.exists(types_file):
        print(f"Error: types.ts not found in {src_dir}")
        return

    # Parse types.ts file
    props, emits, slots = parse_types_file(types_file)

    # Process each Vue component
    for vue_file in vue_files:
        # Extract component name
        component_name = os.path.basename(vue_file)[:-4]  # Remove .vue extension

        # Parse default values from Vue component
        default_values = parse_default_values(vue_file)

        # Update props with default values from component
        for prop in props:
            if prop['name'] in default_values:
                prop['default'] = format_default_value(default_values[prop['name']])

        # Generate markdown filename
        markdown_filename = f"{convert_to_kebab_case(component_name).removeprefix('shadcn-')}.md"
        output_path = os.path.join(output_dir, markdown_filename)

        # Generate markdown content
        markdown_content = generate_markdown(component_name, props, emits, slots)

        # Write markdown file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(markdown_content)

        print(f"Generated documentation for {component_name} -> {markdown_filename}")


if __name__ == "__main__":
    import sys

    if len(sys.argv) != 3:
        print("Usage: python script.py <src_directory> <output_directory>")
        sys.exit(1)

    src_dir = sys.argv[1]
    output_dir = sys.argv[2]
    main(src_dir, output_dir)
