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
        Fullname: '',
        email: '',
        Street: '',
        HouseNumber: 0,
        selected: 'Klarna',
        gender: 'other',
        arr:[],
        checkedBurger: ['Your order:']
    },
    methods:{
        addInfo: function(){
            this.arr.push(this.Fullname + " " +this.email+" "+this.Street+" "+this.HouseNumber +" "+this.selected +" "+this.gender )
            for(let i = 0; i < this.checkedBurger.length; i++){
                this.arr.push(this.checkedBurger[i])
            }

        }
    }
})
