<template>
  <div class="px-36 py-36">


    <div class="w-24">
      <ShadcnEllipsis line="4" text="Steve Jobs (English: Steve Jobs) is an American entrepreneur, marketer and inventor. He is one of the co-founders of Apple and has served as chairman and CEO. He is also the founder and CEO of NeXT and the founder and former CEO of Pixar Animation. He was a member of the board of directors of the Walt Disney Company in 2006. The place where Apple's press conference was held in September 2017 was named Steve Jobs Theater after him." />

    </div>





    <ShadcnTable :columns="columns"
                 :data="data"
                 stripe
                 border
                 width="800"
                 height="150"
                 @on-row-click="onRowClick">
    </ShadcnTable>
  </div>
</template>

<script lang="ts">
export default {
  data()
  {
    return {
      columns,
      data
    }
  },
  methods: {
    onRowClick(row: any, index: number) {
      (this as any).$Message.info({
        content: `Click [ ${ row.name } ] - [ ${ index } ]`
      });
    }
  }
}

const columns = [
  { 'label': 'Name', 'key': 'name', 'width': 100 },
  { 'label': 'Age', 'key': 'age', 'width': 100 },
  { 'label': 'Province', 'key': 'province', 'width': 100 },
  { 'label': 'City', 'key': 'city', 'width': 100, 'fixed': 'left' },
  { 'label': 'Address', 'key': 'address', 'width': 200, 'fixed': 'left' },
  { 'label': 'Postcode', 'key': 'zip', 'width': 100, 'fixed': 'right' },
  { 'label': 'Action', 'key': 'action', 'width': 160, 'fixed': 'right' }
]
const data = [
  { 'name': 'John Brown', 'age': 18, 'address': 'New York No. 1 Lake Park', 'province': 'America', 'city': 'New York', 'zip': 100000 },
  { 'name': 'Jim Green', 'age': 24, 'address': 'Washington, D.C. No. 1 Lake Park', 'province': 'America', 'city': 'Washington, D.C.', 'zip': 100000 },
  { 'name': 'Joe Black', 'age': 30, 'address': 'Sydney No. 1 Lake Park', 'province': 'Australian', 'city': 'Sydney', 'zip': 100000 },
  { 'name': 'Jon Snow', 'age': 26, 'address': 'Ottawa No. 2 Lake Park', 'province': 'Canada', 'city': 'Ottawa', 'zip': 100000 }
]
</script>
