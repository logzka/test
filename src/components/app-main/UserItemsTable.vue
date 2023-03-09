<template>
  <div class="user-items-table">
    <div class="flex align-center">
      <h3>Selected User Items:&nbsp;</h3>
      <span style="font-size: 12px;">{{ selectedUserItems || '-' }}</span>
    </div>
    <el-table
      ref="multipleTableRef"
      :data="userItems"

      highlight-current-row

      @selection-change="handleSelectionChange"
      @current-change="handleCurrentChange"
    >
      <el-table-column
        v-if="useElUiSel"
        type="selection"
        width="55"
        :selectable="selectable"
      />
      <el-table-column property="id" label="Id" />
      <el-table-column property="name" label="Name" />
    </el-table>

    <div style="margin-top: 20px">
      <el-checkbox v-model="useElUiSel" label="Исп. Element-Ui selection row" />
    </div>
  </div>
</template>

<script>
import { store } from '@/store';

export default {
  name: 'UserItemsTable',
  props: {},

  computed: {
    userItems() {
      return store.state.userItems || null;
    },

    selectedUserItems() {
      return store.state.selectedUserItems || null;
    },

    denySelection() {
      const selectedUserItemsLength = (this.selectedUserItems || []).length;

      return selectedUserItemsLength >= this.selectedUserItemsMaxLength;
    },
  },

  data: () => ({
    store,

    selectedUserItemsMaxLength: 6,
    useElUiSel: true,
  }),

  watch: {
    useElUiSel() {
      store.dispatch('setSelectedUserItems', []);

      /** Clear Table Selection */
      this.$refs.multipleTableRef.clearSelection()
    },
  },

  methods: {
    handleSelectionChange(selected) {
      store.dispatch('setSelectedUserItems', selected);
    },

    handleCurrentChange(currentRow) {
      if (this.useElUiSel) return;

      if (this.hasItem(currentRow)) {
        store.dispatch('removeSelectedUserItem', currentRow);
        return;
      }

      if (this.denySelection) return;

      if (!this.selectedUserItems) store.dispatch('setSelectedUserItems', []);

      store.dispatch('setSelectedUserItem', currentRow);
    },

    hasItem(item) {
      return (this.selectedUserItems || [])
        .some((userItem) => userItem.id === item.id) || false;
    },

    selectable(row) {
      if (
        this.denySelection
        && !this.hasItem(row)
      ) return false;

      return true;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-items-table {
  margin-right: 1em;
}

.disabled-row {
  background-color: blueviolet;
}
</style>
  