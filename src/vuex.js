import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default  (axios)=> 
  createStore({
  state: {
    cart: [],
    userId:0,
    isLogin:false,
  },
  // getters: {
  //   currentQuantity(state){
  //     let total = 0;
  //     for(var i = 0; i < state.cart.length; i++){
  //       total += state.cart[i].number
  //     }
  //     return total
  //   }
  // },
  mutations: {
    //登入狀態
    setLoginState(state, userId){
      state.isLogin = true;
      state.userId = userId;
    },
        //登出狀態
        setLogoutState(state){
          state.isLogin = false;
          state.userId = 0;
        },
              //清空購物車
      clearCart(state) {
        state.cart = [];
      },
    addCart(state, data){
      let isNewProduct = true
      state.cart.map(function(product){
        if(product.id === data.product.id){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })
      if(isNewProduct){
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }
    }
  },
  actions: {
    async setLogin({commit, dispatch}, userId){
      commit('setLoginState', userId);
    },
    async setLogout({commit}) {
      commit('setLogoutState');
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState({ paths: ['cart', 'userId'] })
  ]
})
