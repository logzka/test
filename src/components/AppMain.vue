<template>
  <div
    class="common-layout"
    >
    <el-container>
      <el-header>
        <h3>User items</h3>

        <el-button
          plain
          type="success"
          :loading="loadingUserItems"
          @click="getUserItems"
          >
          <span
            v-if="!userItems"
          >Get</span>
          <span
            v-else
          >Refresh</span>
          &nbsp;user&nbsp;items
        </el-button>

        <el-button
          plain
          type="success"
          :loading="loadingItems"
          @click="getItems"
          >
          <span
            v-if="!items"
          >Get</span>
          <span
            v-else
          >Refresh</span>
          &nbsp;items
        </el-button>
      </el-header>

      <el-main>
        <div class="flex align-start space-between">
          <div class="user-items-table__wrapper w-100">
            <UserItemsTable
              v-if="(userItems || []).length"
            />
          </div>

          <div class="items-table__wrapper w-100">
            <ItemsTable
              v-if="(items || []).length"
            />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/** API */
import userItems from '@/api/mocks/user-items';
import items from '@/api/mocks/items';

/** Components */
import UserItemsTable from '@/components/app-main/UserItemsTable.vue';
import ItemsTable from '@/components/app-main/ItemsTable.vue';

import { store } from '@/store';

export default {
  name: 'AppMain',
  props: {
  },

  components: {
    UserItemsTable,
    ItemsTable,
  },

  computed: {
    userItems() {
      return store.state.userItems || null;
    },

    items() {
      return store.state.items || null;
    }
  },

  data: () => ({
    loadingUserItems: false,
    loadingItems: false,

    store,
  }),

  methods: {
    async getItems() {
      this.loadingItems = true;

      if (this.items) store.dispatch('clearItems');

      await setTimeout(() => {
        store.dispatch('setItems', items);

        this.loadingItems = false;
      }, 1000);
    },

    async getUserItems() {
      this.loadingUserItems = true;

      if (this.userItems) store.dispatch('clearUserItems');

      await setTimeout(() => {
        store.dispatch('setUserItems', userItems);

        this.loadingUserItems = false;
      }, 1000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.el-header > h3 {
  margin-right: 15px;
}
</style>
