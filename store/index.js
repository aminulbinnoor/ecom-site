// import lodasFindIndex from "lodash.findindex"

var lodasFindIndex = require('lodash.findindex');


export const state = () => ({
  name: 'p2p',
  activeHoverIndex: 1,
  user: {},
  auth: false,
  sidebarMobile: false,
  totalProduct: 0,
  acl: [],
  categories: [],
  breadcrumbs: [
      {name: 'Home',link: '/'},
      {name: 'Role',link: '/role'}
  ]
})


export const mutations = {

  login(state,data){
    state.user = data
    state.auth = true

    this.$cookies.set('auth', state.auth, {
        path: '/',
        maxAge: 60 * 60 * 24 * 90
      })

  },

  logout (state,data) {
     this.$cookies.set('auth',false)
  },

  sidebar (state,data){
      state.sidebarMobile = data
  },

  initUserData (state,data) {
    state.user = data
  },

  setBreadcrumbs (state,data){
      state.breadcrumbs = data
  },

  acl (state,data){
      state.acl = data
  },
  setTotalProduct(state,data) {
      state.totalProduct = data
  },

  setActiveMenu(state,data){
      state.activeHoverIndex = data
  },

  setCategories(state,data){
      state.categories = data
  }
}


export const actions = {
    addCart({ commit, state },data) {
        let theCartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
        let addedProductIndex =  lodasFindIndex(theCartItems, {'id': data.id, 'variations': data.variations})
        if(addedProductIndex >= 0) {
            theCartItems[addedProductIndex].quantity = theCartItems[addedProductIndex].quantity + 1
        }else{
            theCartItems.push(data)
        }

        localStorage.setItem('cartItems', JSON.stringify(theCartItems))
        let count = 0
        theCartItems.forEach((item, i) => {
            count = count + item.quantity
        });
        commit('setTotalProduct',count)
    }
}
