import Vue from 'vue'
import Vuex from 'vuex'
import { VXETable } from 'vxe-table'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: '',
    serveTY: new Date().getFullYear(),
    packName: process.env.VUE_APP_PACKAGE_NAME,
    baseApiUrl: process.env.VUE_APP_MAIN_URL,
    pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/table/`,
    pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
    serveApiUrl: 'https://api.vxetable.cn/demo',
    showSupportQQ: false
  },
  mutations: {
    setTheme (state, name) {
      state.theme = name
      VXETable.setConfig({
        theme: name
      })
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_THEME', name)
    },
    setSupportQQ (state, visible) {
      state.showSupportQQ = !!visible
    }
  },
  actions: {
  },
  modules: {
  }
})
