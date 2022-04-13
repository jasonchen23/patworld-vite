import { createStore } from 'vuex';
// import {createPersistedState} from 'vuex-persistedstate'
export default createStore({
    state:{ 
        cart:[],
        userId:[],
        isLogin: false,
        amount:[]
    },
    mutations: {
      //登入狀態
    setLoginState(state, userId){
      state.isLogin = true;
      state.userId = userId;
      console.log(state.userId)
    },
        //登出狀態
        setLogoutState(state){
          state.isLogin = false;
          state.userId = 0;
        },
        
      addCart(state,data) {
            const product = state.cart.find(
                (item) => item.id === data[1]
              );
              if (product){ 
                product.amount ++;
                product.total += product.price;
              }
              else {
                const newProduct = {
                  id: data[1],
                  title:data[0],
                  price:data[2],
                  amount: 1,
                  total:data[2]*1,
                };
                state.cart.push(newProduct);
                state.cart.map(item=> state.amount.push(item.amount));
              } 
        },removeCart(state,data) {
          // const product = state.cart.find(
          //     (item) => item.id === data
          //   );
          //   console.log(product);
          console.log(data);
          state.cart.splice(state.cart.findIndex(v => v.id === data), 1);
            // state.cart.filter(item => (item.id !== data));
            console.log(state.cart)
            } 
    },
    actions: {
      async setLogin({commit, dispatch}, userId){
        commit('setLoginState', userId);
      },
      async setLogout({commit}) {
        commit('setLogoutState');
      },
      async addCart( {commit} ,data) {
            commit('addCart', data)
        },
      removeCart( {commit},data){
        commit('removeCart', data)
    },
    }
}) 