'use strict';
const socket = io();

const vm = new Vue({
    el: '#grid',
    data: {
        v1: food[0],
        v2: food[1],
        v3: food[2],
        v4: food[3],
        v5: food[4],
    }
})
const form = new Vue({
    el: '#main',
    data: {
        orders: {},
        Fullname: '',
        email: '',
        Street: '',
        HouseNumber: 0,
        selected: 'Klarna',
        gender: 'other',
        arr:[],
        checkedBurger: ['Your order:']
    },

    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));

        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods:{
        addInfo: function(){
            this.arr.push(this.Fullname + " " +this.email+" "+this.Street+" "+this.HouseNumber +" "+this.selected +" "+this.gender )
            for(let i = 0; i < this.checkedBurger.length; i++){
                this.arr.push(this.checkedBurger[i])
            }

        },
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: ['Beans', 'Curry'],
            });
        }
    }
})


/*function menuItem(name, kcal, alergies,img) {

  this.name = name;
  this.kcal = kcal;
  this.alergies = alergies;
  this.img = img;
  this.getImg = function(){
  return this.img;
  }
  this.info = function(){
  return this.name + " "+ this.kcal + " " + this.alergies;
  }

  }

  let halloumi = new menuItem("Halloumi", 987, "lactose", "https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg");

  let plant = new menuItem("Planty Burger", 679, "None", "https://www.max.se/contentassets/359fcb7f236247a7a4a41cdf2ddf36b0/product_delifresh-signature-plant-beef.jpg");

  let meat = new menuItem("Meaty Burger", 1050, "lactose and gluten", "https://www.max.se/contentassets/96a590c660f54c8b83bc5080b036fecf/product_gdl-umami-bacon-burger2.jpg");

  let nasty = new menuItem("JustNasty", 1250, "Burnt burger","https://bloody-disgusting.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-11-at-9.23.59-AM.jpg");

  let candy = new menuItem("Candy Burger", 99999, "SWEEEET", "https://www.cooperscandy.com/cache/e3/600x600-prod_24558.jpg");*/
