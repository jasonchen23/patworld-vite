<template>
 <div class="card">
       <div class="card-content">
           <div class="content">
               <h4>{{ productItem.title }}</h4>
               <a class="button is-rounded is-pulled-left" @click="addCartItem(productItem)">
                   <strong>Add to Cart</strong>
               </a>
               <br />
               <p class="mt-4">{{ productItem.description }}</p>
           </div>
           <div class="media">
               <div class="media-content">
                   <p class="title is-6">{{ productItem.owner }}</p>
                   <p class="subtitle is-7">{{ productItem.email }}</p>
               </div>
               <div class="media-right">
                   <a class="button is-primary is-light">
                       <strong>$ {{ productItem.price }}</strong>
                   </a>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
import Navbar from '@/components/NavbarBox.vue'
import Donate from '@/components/DonateBox.vue'

export default {
    components;{
        DonateBox
    },
    data() {
        return{
            products:[
                {
                    id: 'dog',
                    name: '成犬飼料',
                    price: '500'
                },
                 {
                    id: 'poppy',
                    name: '幼犬飼料',
                    price: '400'
                },
                 {
                    id: 'cat',
                    name: '成貓飼料',
                    price: '500'
                },
                 {
                    id: 'kitty',
                    name: '幼貓飼料',
                    price: '400'
                },
            ]
        },
    }
    mounted()
            
        },
    methods:{
        addCart: function(product){
            
        }
    }

</script>
