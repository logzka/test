import { createStore } from 'vuex'

export const store = createStore({
    namespaced: true,
    state: {
        userItems: null,
        items: null,

        selectedUserItems: null,
        selectedItem: null,
    },

    getters: {},

    actions: {
        /**
         * Set User Items
         * @param {[Object]} items
         */
        setUserItems({ commit }, items) {
            commit('SET_USER_ITEMS', items || null);
        },

        /**
         * Set Items
         * @param {[Object]} items
         */
        setItems({ commit }, items) {
            commit('SET_ITEMS', items || null);
        },

        /**
         * Set Selected User Items
         * @param {[Object]} items
         */
        setSelectedUserItems({ commit }, items) {
            commit('SET_SELECTED_USER_ITEMS', items || null);
        },

        /**
         * Set Selected User Item
         * @param {Object} item
         */
        setSelectedUserItem({ commit }, item) {
            commit('SET_SELECTED_USER_ITEM', item);
        },

        /**
         * Set Selected User Item
         * @param {Object} item
         */
        removeSelectedUserItem({ commit }, item) {
            commit('REMOVE_SELECTED_USER_ITEM', item);
        },

        /**
         * Set Selected Item
         * @param {Object} item
         */
        setSelectedItem({ commit }, item) {
            commit('SET_SELECTED_ITEM', item || null);
        },

        /**
         * Clear User Items
         */
        clearUserItems() {
            this.commit('CLEAR_USER_ITEMS');
        },

        /**
         * Clear Items
         */
        clearItems() {
            this.commit('CLEAR_ITEMS');
        },
    },

    mutations: {
        SET_USER_ITEMS(state, items) {
            state.userItems = items;
        },

        SET_ITEMS(state, items) {
            state.items = items;
        },

        SET_SELECTED_ITEM(state, item) {
            state.selectedItem = item;
        },

        SET_SELECTED_USER_ITEMS(state, items) {
            state.selectedUserItems = items;
        },

        SET_SELECTED_USER_ITEM(state, item) {
            state.selectedUserItems.push(item);
        },

        REMOVE_SELECTED_USER_ITEM(state, item) {
            state.selectedUserItems = state.selectedUserItems
                .filter((userItem) => userItem.id !== item.id) || [];
        },

        CLEAR_USER_ITEMS(state) {
            state.userItems = null;
            state.selectedUserItems = null;
        },

        CLEAR_ITEMS(state) {
            state.items = null;
            state.selectedItem = null;
        },
    },
})