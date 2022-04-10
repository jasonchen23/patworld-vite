import { createStore } from 'vuex';

export default createStore({
    state:{ 
        cart:[],
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
              } 
        },
    },
    actions: {
      addCart( {commit} ,data) {
            commit('addCart', data)
        }
    }
}) 