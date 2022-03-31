<script>
import Navbar from '@/components/NavbarBox.vue'
import Donate from '@/components/DonateBox.vue'

export default {
    components:{
        Donate
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
        }
    }}
    // mounted()
            
    //     },
    // methods:{
    //     addCart: function(product){
            
    //     }
    // }

</script>
