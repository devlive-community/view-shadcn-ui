<template>
  Current Workflow: {{ workflowState.data }}
  <ShadcnWorkflowEditor v-model="workflowState"
                        :categories="categories"
                        :nodes="nodes"
                        :connections="[]"
                        :search-text="searchText">
  </ShadcnWorkflowEditor>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  {
    label: 'Input Node',
    value: 'input'
  },
  {
    label: 'Output Node',
    value: 'output'
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
    id: 'start',
    label: 'Start',
    category: 'input',
    position: { x: 0, y: 0 },
    configure: [
      {
        field: 'name',
        label: 'Name',
        type: 'input',
        description: 'This is a long description, this is a long description, this is a long description, this is a long description',
        required: true
      },
      {
        field: 'name1',
        label: 'Password',
        type: 'password',
        rules: [
          { required: true, message: 'Please input password!' }
        ],
        required: true
      }
    ],
    description: 'Job start node',
    ports: [
      { id: 'out1', type: 'output', label: 'Output', required: true, message: 'Input is required' }
    ]
  },
  {
    id: 'end',
    label: 'End',
    category: 'output',
    description: 'Job end node',
    position: { x: 0, y: 0 },
    ports: [
      { id: 'in1', type: 'input', label: 'Input', required: true }
    ]
  },
  {
    id: 'process',
    label: 'Process',
    category: 'transform',
    description: 'Job transform node',
    position: { x: 0, y: 0 },
    ports: [
      { id: 'in12', type: 'input', label: 'Input 1', required: true },
      { id: 'in22', type: 'input', label: 'Input 2', required: true },
      { id: 'out1', type: 'output', label: 'Output 1' },
      { id: 'out2', type: 'output', label: 'Output 2' }
    ]
  },
  {
    'id': 'jdbc-source',
    'label': 'Jdbc',
    'description': 'JDBC source connector',
    'category': 'input',
    'configure': [
      {
        'field': 'url',
        'label': 'Url',
        'type': 'input',
        'placeholder': 'jdbc:driver://host:port/database',
        'required': true,
        'message': 'Url is required'
      },
      {
        'field': 'driver',
        'label': 'Driver',
        'type': 'select',
        'required': true,
        'placeholder': 'Please select a driver',
        'message': 'Driver is required',
        'options': [
          {
            'label': 'MySQL',
            'value': 'com.mysql.jdbc.Driver'
          },
          {
            'label': 'PostgreSQL',
            'value': 'org.postgresql.Driver'
          },
          {
            'label': 'DM',
            'value': 'dm.jdbc.driver.DmDriver'
          },
          {
            'label': 'Phoenix',
            'value': 'org.apache.phoenix.queryserver.client.Driver'
          },
          {
            'label': 'SqlServer',
            'value': 'com.microsoft.sqlserver.jdbc.SQLServerDriver'
          },
          {
            'label': 'Oracle',
            'value': 'oracle.jdbc.OracleDriver'
          },
          {
            'label': 'Sqlite',
            'value': 'org.sqlite.JDBC'
          },
          {
            'label': 'Gbase8a',
            'value': 'com.gbase.jdbc.Driver'
          },
          {
            'label': 'StarRocks',
            'value': 'com.mysql.cj.jdbc.Driver'
          },
          {
            'label': 'DB2',
            'value': 'com.ibm.db2.jcc.DB2Driver'
          },
          {
            'label': 'TableStore',
            'value': 'com.alicloud.openservices.tablestore.jdbc.OTSDriver'
          },
          {
            'label': 'Saphana',
            'value': 'com.sap.db.jdbc.Driver'
          },
          {
            'label': 'Doris',
            'value': 'com.mysql.cj.jdbc.Driver'
          },
          {
            'label': 'Teradata',
            'value': 'com.teradata.jdbc.TeraDriver'
          },
          {
            'label': 'Snowflake',
            'value': 'net.snowflake.client.jdbc.SnowflakeDriver'
          },
          {
            'label': 'Redshift',
            'value': 'com.amazon.redshift.jdbc42.Driver'
          },
          {
            'label': 'Vertica',
            'value': 'com.vertica.jdbc.Driver'
          },
          {
            'label': 'Kingbase',
            'value': 'com.kingbase8.Driver'
          },
          {
            'label': 'OceanBase',
            'value': 'com.oceanbase.jdbc.Driver'
          },
          {
            'label': 'Hive',
            'value': 'org.apache.hive.jdbc.HiveDriver'
          }
        ]
      },
      {
        'field': 'username',
        'label': 'Username',
        'type': 'input'
      },
      {
        'field': 'query',
        'label': 'Query',
        'type': 'textarea',
        'placeholder': 'Please input query'
      },
      {
        'field': 'array',
        'label': 'Array',
        'type': 'array',
        'required': true,
        'placeholder': 'Please input compatible mode'
      },
      {
        'field': 'map',
        'label': 'Map',
        'type': 'map',
        'required': true,
        'placeholder': 'Please input connection check timeout'
      }
    ],
    'ports': [
      {
        'id': 'output',
        'label': 'Output',
        'type': 'output',
        'required': true,
        'message': 'Output is required'
      }
    ]
  }
]
</script>
