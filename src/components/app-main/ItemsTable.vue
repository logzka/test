<template>
  <div class="items-table">
    <div class="flex align-center">
      <h3>Selected Item:&nbsp;</h3>{{ selectedItem || '-' }}
    </div>
    <el-table
      :data="items"

      highlight-current-row

      @current-change="handleCurrentChange"
    >
      <el-table-column property="id" label="Id" />
      <el-table-column property="name" label="Name" />
    </el-table>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'ItemsTable',
  props: {},

  computed: {
    items() {
      return store.state.items || null;
    },

    selectedItem() {
      return store.state.selectedItem || null
    },
  },

  data: () => ({
    store,
  }),

  methods: {
    handleCurrentChange(currentRow) {
      store.dispatch('setSelectedItem', currentRow);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items-table {
  margin-left: 1em;
}
</style>
  