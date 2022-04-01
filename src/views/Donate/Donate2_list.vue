<template>
  <div id="product">
    <item v-for="item in items" v-bind:item_data="item"></item>
  </div>
  <div id="cart">
    <div id="head">
      <h3>Shopping Cart</h3>
      <div id="price">Price</div>
      <div id="quantity">Quantity</div>
      <div id="total">Total</div>
    </div>
    <buyitem v-for="buyitem in buyitems" v-bind:buy_data="buyitem"></buyitem>
    <h5 v-if="total()">Sum: $ {{total()}}</h5>
  </div>
</template>


<script>
import Navbar from '@/components/NavbarBox.vue'
import Check from '@/components/CheckBox.vue'


export default {
    components;{
        Navbar,
        Donate,
        Check
    },
    data() {
        return{
            items: [
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/product/6435073/LINEStorePC/main.png",
        title: "成犬飼料",
        price: "500",
        id: "1"
      },
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/product/10975299/LINEStorePC/main.png;compress=true",
        title: "幼犬飼料",
        price: "400",
        id: "2"
      },
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/product/1296978/LINEStorePC/main.png;compress=true",
        title: "成貓飼料",
        price: "500",
        id: "4"
      },
      {
        img: "https://stickershop.line-scdn.net/stickershop/v1/sticker/146390443/android/sticker.png",
        title: "成貓飼料",
        price: "400",
        id: "4"
      }
    ],
    buyitems: []
            ]
        },
    },
   
   methods: {
    total: function(){
      var sum = 0;
      this.buyitems.forEach(function(buyitem){
            sum += parseInt(buyitem.total);
      });
      return sum;
    }
  };


var dogClick = 0;
var poppyClick = 0;
var catClick = 0;

.component("item", {
  template: "#product-box",
  props: ["item_data", "buyitems"],
  methods: {
    addItem: function(item_data) {
      if (item_data.id == "beer") {
        beerClick += 1;
        if (beerClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "beer");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
          console.log(i);
        }
      } else if (item_data.id == "eco-bag") {
        ecoClick += 1;
        if (ecoClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "eco-bag");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total =this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      } else {
        paperClick += 1;
        if (paperClick <= 1) {
          this.pushData();
        } else {
          var i = this.findIndex(this.$parent.buyitems, "id", "paper-bag");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty*this.$parent.buyitems[i].price;
        }
      }
      console.log(beerClick, ecoClick, paperClick);
    },
    pushData: function() {
      this.$parent.buyitems.push({
        img: this.item_data.img,
        title: this.item_data.title,
        price: this.item_data.price,
        qty: 1,
        total: this.item_data.price,
        id: this.item_data.id
      });
    },
    findIndex: function(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    },
  }
});

</script>




<style>
body {
  background-color: #eee;
  font-family: calibri, sans-serif;
}

#app {
  width: 760px;
  margin: 20px auto;
  #product {
    .box {
      width: 230px;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      display: inline-block;
      margin: 0 10px;
      position: relative;
      img {
        width: 230px;
      }
      i {
        width: 50px;
        height: 50px;
        background: #ED277F;
        color: #ffffff;
        border-radius: 25px;
        text-align: center;
        line-height: 50px;
        font-size: 1.4rem;
        position: absolute;
        right: 20px;
        top: 150px;
        box-shadow: 0 0 4px 2px rgba(80, 80, 80, 0.1);
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          transform: scale(1.05);
        }
      }
      h2 {
        margin-left: 20px;
      }
      p {
        margin-left: 20px;
      }
    }
  }
  #cart {
    margin-top: 50px;
    overflow: hidden;
    #head {
      width: 100%;
      border-bottom: 1px solid #BFBFBF;
      height: 40px;
      display: block;
      h3 {
        display: inline-block;
        line-height: 40px;
        margin: 0;
      }
      #price {
        display: inline-block;
        color: #777777;
        margin-left: 200px;
        line-height: 40px;
      }
      #quantity {
        display: inline-block;
        color: #777777;
        margin-left: 100px;
        line-height: 40px;
      }
      #total {
        display: inline-block;
        color: #777777;
        line-height: 40px;
        float: right;
      }
    }
    .row {
      width: 100%;
      border-bottom: 1px solid #BFBFBF;
      overflow: hidden;
      padding: 10px 0;
      display: block;
      flaot: left;
      img {
        height: 100px;
        float: left;
      }
      h4 {
        float: left;
        margin: 0;
        line-height: 100px;
        margin-left: 20px;
        width: 100px;
      }
      p {
        float: left;
        margin: 0;
        width: 80px;
        line-height: 100px;
        margin-left: 35px;
        text-align: center;
      }
      .qty-minus {
        float: left;
        width: 20px;
        line-height: 100px;
        margin-left: 60px;
        text-align: center;
        cursor: pointer;
      }
      .qty {
        float: left;
        width: 20px;
        line-height: 100px;
        margin-left: 20px;
        text-align: center;
      }
      .qty-plus {
        float: left;
        width: 20px;
        line-height: 100px;
        margin-left: 20px;
        text-align: center;
        cursor: pointer;
      }
      .del {
        float: left;
        width: 80px;
        line-height: 100px;
        margin-left: 60px;
        cursor: pointer;
        text-decoration: underline;
        color: #ED277F;
      }
      .totalprice {
        float: left;
        width: 80px;
        line-height: 100px;
        margin-left: 10px;
        text-align: right;
      }
      .row p::before, .box p::before, .totalprice::before {
        content: "$";
      }
    }
    h5 {
      font-size: 1.2rem;
      text-align : right;
    }
  }
}

</style>
