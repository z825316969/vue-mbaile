import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './styles/index.scss'

//vant组件引入
import { Button, Search, Skeleton, Panel, Tag, Cell, CellGroup, Collapse, CollapseItem, NavBar, Toast } from 'vant'

Vue.config.productionTip = false

Vue.use(Button).use(Search).use(Skeleton).use(Panel).use(Tag).use(Cell).use(CellGroup).use(Collapse).use(CollapseItem).use(NavBar).use(Toast)

//设置rem

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
