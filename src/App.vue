<template>
  <ShadcnWorkflowEditor v-model="workflowState"
                        :categories="categories"
                        :nodes="nodes"
                        :connections="[]"
                        :search-text="searchText">
    <template #configure-input="{ item, onChange }">
      <ShadcnInput v-model="item.value" type="textarea" @on-change="onChange"/>
    </template>
  </ShadcnWorkflowEditor>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  {
    label: 'Input Node',
    value: 'source'
  },
  {
    label: 'Output Node',
    value: 'sink'
  },
  {
    label: 'Transform Node',
    value: 'transform'
  }
]
const searchText = ref('')
const workflowState = ref({
  nodes: [],
  connections: []
})

const nodes: any[] = [
  {
    'id': 'clickhouse-sink',
    'label': 'Clickhouse',
    'category': 'sink',
    'position': null,
    'configure': [
      {
        'field': 'host',
        'label': 'Host',
        'type': 'input',
        'description': 'ClickHouse cluster address, the format is host:port , allowing multiple hosts to be specified. Such as "host1:8123,host2:8123" .',
        'required': true,
        'placeholder': 'ClickHouse address, the format is host:port.'
      },
      {
        'field': 'database',
        'label': 'Database',
        'type': 'input',
        'description': 'The ClickHouse database.',
        'required': true,
        'placeholder': 'The ClickHouse database.'
      },
      {
        'field': 'table',
        'label': 'Table',
        'type': 'input',
        'description': 'The table name.',
        'required': true,
        'placeholder': 'The table name.'
      },
      {
        'field': 'username',
        'label': 'Username',
        'type': 'input',
        'description': 'ClickHouse user username.',
        'required': true,
        'placeholder': 'ClickHouse user username.'
      },
      {
        'field': 'password',
        'label': 'Password',
        'type': 'password',
        'description': 'ClickHouse user password.',
        'required': true,
        'placeholder': 'ClickHouse user password.'
      },
      {
        'field': 'bulk_size',
        'label': 'Bulk size',
        'type': 'number',
        'description': 'The number of rows written through Clickhouse-jdbc each time, the default is 20000.',
        'required': false,
        'placeholder': 'Bulk size, the default is 20000.',
        'value': 20000
      },
      {
        'field': 'split_mode',
        'label': 'Split mode',
        'type': 'switch',
        'description': 'This mode only support clickhouse table which engine is \'Distributed\'.And internal_replication option-should be true.They will split distributed table data in seatunnel and perform write directly on each shard. The shard weight define is clickhouse will counted.',
        'required': false,
        'placeholder': 'Split mode.',
        'value': false
      },
      {
        'field': 'sharding_key',
        'label': 'Sharding key',
        'type': 'input',
        'description': 'When use split_mode, which node to send data to is a problem, the default is random selection, but the \'sharding_key\' parameter can be used to specify the field for the sharding algorithm. This option only worked when \'split_mode\' is true.',
        'required': false,
        'placeholder': 'Sharding key.'
      },
      {
        'field': 'primary_key',
        'label': 'Primary key',
        'type': 'input',
        'description': 'Mark the primary key column from clickhouse table, and based on primary key execute INSERT/UPDATE/DELETE to clickhouse table.',
        'required': false,
        'placeholder': 'Primary key.'
      },
      {
        'field': 'support_upsert',
        'label': 'Support upsert',
        'type': 'switch',
        'description': 'Support upsert, the default is true.',
        'required': false,
        'placeholder': 'Support upsert.',
        'value': false
      },
      {
        'field': 'allow_experimental_lightweight_delete',
        'label': 'Allow experimental lightweight delete',
        'type': 'switch',
        'description': 'Allow experimental lightweight delete based on *MergeTree table engine.',
        'required': false,
        'placeholder': 'Allow experimental lightweight delete.',
        'value': false
      }
    ],
    'description': 'Clickhouse sink connector',
    'ports': [
      {
        'id': 'input',
        'type': 'input',
        'label': 'Input',
        'required': true,
        'message': 'Input is required'
      }
    ]
  }
]
</script>
