#!/bin/bash
echo "========== Running setup script =========="

components=(
  collapsible
  command
  dropdown-menu
  form
  label
  popover
  resizable
  tooltip
  context-menu
)

component_dir="src/components/ui"

for component in "${components[@]}"; do
  if [ -d "$component_dir/$component" ]; then
    echo "Component [ $component ] is already installed"
  else
    echo "Installing component [ $component ]"
    yes | npx shadcn-vue@latest add "$component"
  fi
done

echo "========== Done setup script =========="
