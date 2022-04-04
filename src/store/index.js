import { createStore } from 'vuex';

export default createStore({
    state:{

    },
    mutations: {
        addCart(state) {
            state.count++
        },
    },
}) 