import { createStore } from 'vuex';

export default createStore({
    state:{ 
        cart:[],
        userId:1,
        amount:[]
    },
    mutations: {
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
                  total:data[2]*1
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
      addCart( {commit} ,data) {
            commit('addCart', data)
        },
      removeCart( {commit},data){
        commit('removeCart', data)
    },
    }
}) 