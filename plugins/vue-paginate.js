import Vue from 'vue'
import Paginate from 'vuejs-paginate'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading)
Vue.component('paginate', Paginate)

Vue.mixin({
    mounted () {
      this.$store.commit('sidebar',false)
    }
})
