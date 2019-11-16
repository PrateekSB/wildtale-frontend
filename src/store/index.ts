import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import { AuthStore } from '@/store/auth';
import { DashboardStore } from "@/store/dashboard";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(AuthStore),
    ...extractVuexModule(DashboardStore),
  },
});

export const storeProxy = {
  auth: createProxy(store, AuthStore),
  dashboard: createProxy(store, DashboardStore),
};

