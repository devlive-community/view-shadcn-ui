<template>
  <div class="p-32 space-y-2">
    {{workflowState.data}}
    <ShadcnWorkflowEditor v-model="workflowState" :categories="categories" :nodes="nodes" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  {
    "value": "source",
    "label": "Input",
    "supportExecutors": [
      "SeatunnelExecutor"
    ]
  },
  {
    "value": "transform",
    "label": "Transform",
    "supportExecutors": [
      "SeatunnelExecutor"
    ]
  },
  {
    "value": "sink",
    "label": "Output",
    "supportExecutors": [
      "SeatunnelExecutor"
    ]
  }
]
const workflowState = ref({"categories":[],"nodes":[{"id":"a281d22f-d861-423b-a321-f3913ec7c6ac","tid":"clickhouse-source","category":"source","position":{"x":120,"y":110},"data":{"host":"127.0.0.1:8123","database":"datacap","sql":"S","username":"default","password":"1234678"}},{"id":"17d4f77b-40ff-4172-9144-42c077ff624d","tid":"replace-transform","category":"transform","position":{"x":222,"y":330},"data":{"replace_field":"nmw","pattern":"dd","replacement":"ddd","is_regex":false,"replace_first":false}},{"id":"6619fa6b-d312-4893-8bae-ac98ce26be3b","tid":"clickhouse-sink","category":"sink","position":{"x":321,"y":555},"data":{"host":"127.0.0.1","database":"databac","table":"d","username":"d","password":"d","bulk_size":20000,"split_mode":false,"support_upsert":false,"allow_experimental_lightweight_delete":false}}],"connections":[{"id":"8f20cdc8-9741-45ad-a887-e3f2406ae745","source":"a281d22f-d861-423b-a321-f3913ec7c6ac-output","target":"17d4f77b-40ff-4172-9144-42c077ff624d-input"},{"id":"c7fc25b8-836b-4972-8e68-ce2396127b02","source":"17d4f77b-40ff-4172-9144-42c077ff624d-output","target":"6619fa6b-d312-4893-8bae-ac98ce26be3b-input"}]})


const nodes: any[] = [
  {
    "id": "clickhouse-sink",
    "key": "Clickhouse",
    "label": "Clickhouse",
    "category": "sink",
    "configure": [
      {
        "field": "host",
        "label": "Host",
        "type": "input",
        "description": "ClickHouse cluster address, the format is host:port , allowing multiple hosts to be specified. Such as \"host1:8123,host2:8123\" .",
        "required": true,
        "placeholder": "ClickHouse address, the format is host:port."
      },
      {
        "field": "database",
        "label": "Database",
        "type": "input",
        "description": "The ClickHouse database.",
        "required": true,
        "placeholder": "The ClickHouse database."
      },
      {
        "field": "table",
        "label": "Table",
        "type": "input",
        "description": "The table name.",
        "required": true,
        "placeholder": "The table name."
      },
      {
        "field": "username",
        "label": "Username",
        "type": "input",
        "description": "ClickHouse user username.",
        "required": true,
        "placeholder": "ClickHouse user username."
      },
      {
        "field": "password",
        "label": "Password",
        "type": "password",
        "description": "ClickHouse user password.",
        "required": true,
        "placeholder": "ClickHouse user password."
      },
      {
        "field": "bulk_size",
        "label": "Bulk size",
        "type": "number",
        "description": "The number of rows written through Clickhouse-jdbc each time, the default is 20000.",
        "required": false,
        "placeholder": "Bulk size, the default is 20000.",
        "value": 20000
      },
      {
        "field": "split_mode",
        "label": "Split mode",
        "type": "switch",
        "description": "This mode only support clickhouse table which engine is 'Distributed'.And internal_replication option-should be true.They will split distributed table data in seatunnel and perform write directly on each shard. The shard weight define is clickhouse will counted.",
        "required": false,
        "placeholder": "Split mode.",
        "value": false
      },
      {
        "field": "sharding_key",
        "label": "Sharding key",
        "type": "input",
        "description": "When use split_mode, which node to send data to is a problem, the default is random selection, but the 'sharding_key' parameter can be used to specify the field for the sharding algorithm. This option only worked when 'split_mode' is true.",
        "required": false,
        "placeholder": "Sharding key."
      },
      {
        "field": "primary_key",
        "label": "Primary key",
        "type": "input",
        "description": "Mark the primary key column from clickhouse table, and based on primary key execute INSERT/UPDATE/DELETE to clickhouse table.",
        "required": false,
        "placeholder": "Primary key."
      },
      {
        "field": "support_upsert",
        "label": "Support upsert",
        "type": "switch",
        "description": "Support upsert, the default is true.",
        "required": false,
        "placeholder": "Support upsert.",
        "value": false
      },
      {
        "field": "allow_experimental_lightweight_delete",
        "label": "Allow experimental lightweight delete",
        "type": "switch",
        "description": "Allow experimental lightweight delete based on *MergeTree table engine.",
        "required": false,
        "placeholder": "Allow experimental lightweight delete.",
        "value": false
      }
    ],
    "description": "Clickhouse sink connector",
    "ports": [
      {
        "id": "input",
        "type": "input",
        "label": "Input",
        "required": true,
        "message": "Input is required"
      }
    ]
  },
  {
    "id": "jdbc-sink",
    "key": "Jdbc",
    "label": "Jdbc",
    "category": "sink",
    "configure": [
      {
        "field": "url",
        "label": "Url",
        "type": "input",
        "required": true,
        "placeholder": "jdbc:driver://host:port/database"
      },
      {
        "field": "driver",
        "label": "Driver",
        "type": "select",
        "required": true,
        "placeholder": "Please select a driver",
        "options": [
          {
            "label": "MySQL",
            "value": "com.mysql.jdbc.Driver"
          },
          {
            "label": "PostgreSQL",
            "value": "org.postgresql.Driver"
          },
          {
            "label": "DM",
            "value": "dm.jdbc.driver.DmDriver"
          },
          {
            "label": "Phoenix",
            "value": "org.apache.phoenix.queryserver.client.Driver"
          },
          {
            "label": "SqlServer",
            "value": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
          },
          {
            "label": "Oracle",
            "value": "oracle.jdbc.OracleDriver"
          },
          {
            "label": "Sqlite",
            "value": "org.sqlite.JDBC"
          },
          {
            "label": "Gbase8a",
            "value": "com.gbase.jdbc.Driver"
          },
          {
            "label": "StarRocks",
            "value": "com.mysql.cj.jdbc.Driver"
          },
          {
            "label": "DB2",
            "value": "com.ibm.db2.jcc.DB2Driver"
          },
          {
            "label": "TableStore",
            "value": "com.alicloud.openservices.tablestore.jdbc.OTSDriver"
          },
          {
            "label": "Saphana",
            "value": "com.sap.db.jdbc.Driver"
          },
          {
            "label": "Doris",
            "value": "com.mysql.cj.jdbc.Driver"
          },
          {
            "label": "Teradata",
            "value": "com.teradata.jdbc.TeraDriver"
          },
          {
            "label": "Snowflake",
            "value": "net.snowflake.client.jdbc.SnowflakeDriver"
          },
          {
            "label": "Redshift",
            "value": "com.amazon.redshift.jdbc42.Driver"
          },
          {
            "label": "Vertica",
            "value": "com.vertica.jdbc.Driver"
          },
          {
            "label": "Kingbase",
            "value": "com.kingbase8.Driver"
          },
          {
            "label": "OceanBase",
            "value": "com.oceanbase.jdbc.Driver"
          },
          {
            "label": "Hive",
            "value": "org.apache.hive.jdbc.HiveDriver"
          }
        ]
      },
      {
        "field": "user",
        "label": "Username",
        "type": "input",
        "required": false
      },
      {
        "field": "password",
        "label": "Password",
        "type": "password",
        "required": false
      },
      {
        "field": "query",
        "label": "Query",
        "type": "textarea",
        "required": false,
        "placeholder": "Please input query"
      },
      {
        "field": "compatible_mode",
        "label": "Compatible mode",
        "type": "input",
        "required": false,
        "placeholder": "Please input compatible mode"
      },
      {
        "field": "database",
        "label": "Database",
        "type": "input",
        "required": false,
        "placeholder": "Please input database"
      },
      {
        "field": "table",
        "label": "Table",
        "type": "input",
        "required": false,
        "placeholder": "Please input table"
      },
      {
        "field": "primary_keys",
        "label": "Primary keys",
        "type": "array",
        "required": false,
        "placeholder": "Please input primary keys"
      },
      {
        "field": "support_upsert_by_query_primary_key_exist",
        "label": "Support upsert by query primary key exist",
        "type": "switch",
        "required": false,
        "value": false
      },
      {
        "field": "connection_check_timeout_sec",
        "label": "Connection check timeout",
        "type": "number",
        "required": false,
        "placeholder": "Please input connection check timeout",
        "value": 30
      },
      {
        "field": "max_retries",
        "label": "Max retries",
        "type": "number",
        "required": false,
        "placeholder": "Please input max retries",
        "value": 0
      },
      {
        "field": "batch_size",
        "label": "Batch size",
        "type": "number",
        "required": false,
        "placeholder": "Please input batch size",
        "value": 1000
      },
      {
        "field": "is_exactly_once",
        "label": "Is exactly once",
        "type": "switch",
        "required": false,
        "value": false
      },
      {
        "field": "generate_sink_sql",
        "label": "Generate sink sql",
        "type": "switch",
        "required": false,
        "value": false
      },
      {
        "field": "xa_data_source_class_name",
        "label": "Xa data source class name",
        "type": "input",
        "required": false,
        "placeholder": "Please input xa data source class name"
      },
      {
        "field": "max_commit_attempts",
        "label": "Max commit attempts",
        "type": "number",
        "required": false,
        "placeholder": "Please input max commit attempts",
        "value": 3
      },
      {
        "field": "transaction_timeout_sec",
        "label": "Transaction timeout",
        "type": "number",
        "required": false,
        "value": -1
      },
      {
        "field": "auto_commit",
        "label": "Auto commit",
        "type": "switch",
        "required": false,
        "value": true
      },
      {
        "field": "field_ide",
        "label": "Field ide",
        "type": "input",
        "required": false,
        "placeholder": "Please input field ide"
      },
      {
        "field": "properties",
        "label": "Properties",
        "type": "map",
        "required": false,
        "placeholder": "Please input properties"
      },
      {
        "field": "schema_save_mode",
        "label": "Schema save mode",
        "type": "select",
        "required": false,
        "placeholder": "Please select a schema save mode",
        "value": "CREATE_SCHEMA_WHEN_NOT_EXIST",
        "options": [
          {
            "label": "RECREATE_SCHEMA",
            "value": "RECREATE_SCHEMA"
          },
          {
            "label": "CREATE_SCHEMA_WHEN_NOT_EXIST",
            "value": "CREATE_SCHEMA_WHEN_NOT_EXIST"
          },
          {
            "label": "ERROR_WHEN_SCHEMA_NOT_EXIST",
            "value": "ERROR_WHEN_SCHEMA_NOT_EXIST"
          }
        ]
      },
      {
        "field": "data_save_mode",
        "label": "Data save mode",
        "type": "select",
        "required": false,
        "placeholder": "Please select a data save mode",
        "value": "APPEND_DATA",
        "options": [
          {
            "label": "DROP_DATA",
            "value": "DROP_DATA"
          },
          {
            "label": "APPEND_DATA",
            "value": "APPEND_DATA"
          },
          {
            "label": "CUSTOM_PROCESSING",
            "value": "CUSTOM_PROCESSING"
          },
          {
            "label": "ERROR_WHEN_DATA_EXISTS",
            "value": "ERROR_WHEN_DATA_EXISTS"
          }
        ]
      },
      {
        "field": "custom_sql",
        "label": "Custom sql",
        "type": "textarea",
        "required": false,
        "placeholder": "Please input custom sql"
      },
      {
        "field": "enable_upsert",
        "label": "Enable upsert",
        "type": "switch",
        "required": false,
        "value": true
      }
    ],
    "description": "JDBC sink connector",
    "ports": [
      {
        "id": "input",
        "type": "input",
        "label": "Input",
        "required": true,
        "message": "Input is required"
      }
    ]
  },
  {
    "id": "clickhouse-source",
    "key": "Clickhouse",
    "label": "Clickhouse",
    "category": "source",
    "configure": [
      {
        "field": "host",
        "label": "Host",
        "type": "input",
        "description": "ClickHouse cluster address, the format is host:port , allowing multiple hosts to be specified. Such as \"host1:8123,host2:8123\" .",
        "required": true,
        "placeholder": "ClickHouse address, the format is host:port."
      },
      {
        "field": "database",
        "label": "Database",
        "type": "input",
        "description": "The ClickHouse database.",
        "required": true,
        "placeholder": "The ClickHouse database."
      },
      {
        "field": "sql",
        "label": "SQL",
        "type": "textarea",
        "description": "The query sql used to search data though Clickhouse server.",
        "required": true,
        "placeholder": "The query sql used to search data though Clickhouse server."
      },
      {
        "field": "username",
        "label": "Username",
        "type": "input",
        "description": "ClickHouse user username.",
        "required": true,
        "placeholder": "ClickHouse user username."
      },
      {
        "field": "password",
        "label": "Password",
        "type": "password",
        "description": "ClickHouse user password.",
        "required": true,
        "placeholder": "ClickHouse user password."
      },
      {
        "field": "result_table_name",
        "label": "Result table name",
        "type": "input",
        "description": "Result table name.",
        "required": false,
        "placeholder": "Result table name"
      }
    ],
    "description": "Clickhouse source connector",
    "ports": [
      {
        "id": "output",
        "type": "output",
        "label": "Output",
        "required": true,
        "message": "Output is required"
      }
    ]
  },
  {
    "id": "replace-transform",
    "label": "Replace",
    "category": "transform",
    "configure": [
      {
        "field": "replace_field",
        "label": "Replace field",
        "type": "input",
        "description": "The field you want to replace",
        "required": true,
        "placeholder": "Please input replace field"
      },
      {
        "field": "pattern",
        "label": "Pattern",
        "type": "input",
        "description": "The old string that will be replaced",
        "required": true,
        "placeholder": "Please input pattern"
      },
      {
        "field": "replacement",
        "label": "Replacement",
        "type": "input",
        "description": "The new string that will be replaced",
        "required": true,
        "placeholder": "Please input replacement"
      },
      {
        "field": "is_regex",
        "label": "Is regex",
        "type": "switch",
        "required": false,
        "value": false
      },
      {
        "field": "replace_first",
        "label": "Replace first",
        "type": "switch",
        "required": false,
        "value": false
      }
    ],
    "description": "Replace transform",
    "ports": [
      {
        "id": "input",
        "type": "input",
        "label": "Input",
        "required": true,
        "message": "Input is required"
      },
      {
        "id": "output",
        "type": "output",
        "label": "Output",
        "required": true,
        "message": "Output is required"
      }
    ]
  },
  {
    "id": "sql-transform",
    "label": "Sql",
    "category": "transform",
    "configure": [
      {
        "field": "source_table_name",
        "label": "Source table name",
        "type": "input",
        "description": "The source table name, the query SQL table name must match this field.",
        "required": true,
        "placeholder": "Please input source table name"
      },
      {
        "field": "result_table_name",
        "label": "Result table name",
        "type": "input",
        "required": true,
        "placeholder": "Please input result table name"
      },
      {
        "field": "query",
        "label": "Query",
        "type": "textarea",
        "description": "The query SQL, it's a simple SQL supported base function and criteria filter operation. But the complex SQL unsupported yet, include: multi source table/rows JOIN and AGGREGATE operation and the like.\n",
        "required": true,
        "placeholder": "Please input query"
      }
    ],
    "description": "SQL transform",
    "ports": [
      {
        "id": "input",
        "type": "input",
        "label": "Input",
        "required": true,
        "message": "Input is required"
      },
      {
        "id": "output",
        "type": "output",
        "label": "Output",
        "required": true,
        "message": "Output is required"
      }
    ]
  },
  {
    "id": "split-transform",
    "label": "Split",
    "category": "transform",
    "configure": [
      {
        "field": "separator",
        "label": "Separator",
        "type": "input",
        "description": "The list of fields that need to be kept. Fields not in the list will be deleted",
        "required": true,
        "placeholder": "Please input source table name"
      },
      {
        "field": "split_field",
        "label": "Split field",
        "type": "input",
        "required": true,
        "placeholder": "Please input split field"
      },
      {
        "field": "output_fields",
        "label": "Output fields",
        "type": "array",
        "required": true,
        "placeholder": "The result fields after split"
      }
    ],
    "description": "Split transform",
    "ports": [
      {
        "id": "input",
        "type": "input",
        "label": "Input",
        "required": true,
        "message": "Input is required"
      },
      {
        "id": "output",
        "type": "output",
        "label": "Output",
        "required": true,
        "message": "Output is required"
      }
    ]
  },
  {
    "id": "jdbc-source",
    "key": "Jdbc",
    "label": "Jdbc",
    "category": "source",
    "configure": [
      {
        "field": "url",
        "label": "Url",
        "type": "input",
        "required": true,
        "placeholder": "jdbc:driver://host:port/database"
      },
      {
        "field": "driver",
        "label": "Driver",
        "type": "select",
        "required": true,
        "placeholder": "Please select a driver",
        "options": [
          {
            "label": "MySQL",
            "value": "com.mysql.jdbc.Driver"
          },
          {
            "label": "PostgreSQL",
            "value": "org.postgresql.Driver"
          },
          {
            "label": "DM",
            "value": "dm.jdbc.driver.DmDriver"
          },
          {
            "label": "Phoenix",
            "value": "org.apache.phoenix.queryserver.client.Driver"
          },
          {
            "label": "SqlServer",
            "value": "com.microsoft.sqlserver.jdbc.SQLServerDriver"
          },
          {
            "label": "Oracle",
            "value": "oracle.jdbc.OracleDriver"
          },
          {
            "label": "Sqlite",
            "value": "org.sqlite.JDBC"
          },
          {
            "label": "Gbase8a",
            "value": "com.gbase.jdbc.Driver"
          },
          {
            "label": "StarRocks",
            "value": "com.mysql.cj.jdbc.Driver"
          },
          {
            "label": "DB2",
            "value": "com.ibm.db2.jcc.DB2Driver"
          },
          {
            "label": "TableStore",
            "value": "com.alicloud.openservices.tablestore.jdbc.OTSDriver"
          },
          {
            "label": "Saphana",
            "value": "com.sap.db.jdbc.Driver"
          },
          {
            "label": "Doris",
            "value": "com.mysql.cj.jdbc.Driver"
          },
          {
            "label": "Teradata",
            "value": "com.teradata.jdbc.TeraDriver"
          },
          {
            "label": "Snowflake",
            "value": "net.snowflake.client.jdbc.SnowflakeDriver"
          },
          {
            "label": "Redshift",
            "value": "com.amazon.redshift.jdbc42.Driver"
          },
          {
            "label": "Vertica",
            "value": "com.vertica.jdbc.Driver"
          },
          {
            "label": "Kingbase",
            "value": "com.kingbase8.Driver"
          },
          {
            "label": "OceanBase",
            "value": "com.oceanbase.jdbc.Driver"
          },
          {
            "label": "Hive",
            "value": "org.apache.hive.jdbc.HiveDriver"
          }
        ]
      },
      {
        "field": "user",
        "label": "Username",
        "type": "input",
        "required": false
      },
      {
        "field": "password",
        "label": "Password",
        "type": "password",
        "required": false
      },
      {
        "field": "query",
        "label": "Query",
        "type": "textarea",
        "required": false,
        "placeholder": "Please input query"
      },
      {
        "field": "compatible_mode",
        "label": "Compatible mode",
        "type": "input",
        "required": false,
        "placeholder": "Please input compatible mode"
      },
      {
        "field": "connection_check_timeout_sec",
        "label": "Connection check timeout",
        "type": "number",
        "required": false,
        "placeholder": "Please input connection check timeout",
        "value": 30
      },
      {
        "field": "partition_column",
        "label": "Partition column",
        "type": "input",
        "required": false,
        "placeholder": "Please input partition column"
      },
      {
        "field": "partition_upper_bound",
        "label": "Partition upper bound",
        "type": "input",
        "required": false,
        "placeholder": "Please input partition upper bound"
      },
      {
        "field": "partition_lower_bound",
        "label": "Partition lower bound",
        "type": "input",
        "required": false,
        "placeholder": "Please input partition lower bound"
      },
      {
        "field": "partition_num",
        "label": "Partition num",
        "type": "input",
        "required": false,
        "placeholder": "Please input partition num"
      },
      {
        "field": "fetch_size",
        "label": "Fetch size",
        "type": "input",
        "required": false,
        "placeholder": "Please input fetch size",
        "value": 0
      },
      {
        "field": "properties",
        "label": "Properties",
        "type": "map",
        "required": false
      },
      {
        "field": "table_path",
        "label": "Table path",
        "type": "input",
        "required": false,
        "placeholder": "Please input table path"
      },
      {
        "field": "table_list",
        "label": "Table list",
        "type": "array",
        "required": false,
        "placeholder": "Please input table list"
      },
      {
        "field": "where_condition",
        "label": "Where condition",
        "type": "textarea",
        "required": false,
        "placeholder": "Please input where condition"
      },
      {
        "field": "split.size",
        "label": "Split size",
        "type": "number",
        "required": false,
        "placeholder": "Please input split size",
        "value": 8096
      },
      {
        "field": "split.even-distribution.factor.lower-bound",
        "label": "Even distribution factor lower bound",
        "type": "number",
        "required": false,
        "placeholder": "Please input even distribution factor lower bound",
        "value": 0.05
      },
      {
        "field": "split.even-distribution.factor.upper-bound",
        "label": "Even distribution factor upper bound",
        "type": "number",
        "required": false,
        "placeholder": "Please input even distribution factor upper bound",
        "value": 100
      },
      {
        "field": "split.sample-sharding.threshold",
        "label": "Sample sharding threshold",
        "type": "number",
        "required": false,
        "placeholder": "Please input sample sharding threshold",
        "value": 1000
      },
      {
        "field": "split.inverse-sampling.rate",
        "label": "Inverse sampling rate",
        "type": "number",
        "required": false,
        "placeholder": "Please input inverse sampling rate",
        "value": 1000
      }
    ],
    "description": "JDBC source connector",
    "ports": [
      {
        "id": "output",
        "type": "output",
        "label": "Output",
        "required": true,
        "message": "Output is required"
      }
    ]
  }
]
</script>
