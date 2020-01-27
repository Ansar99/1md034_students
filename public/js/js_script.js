function menuItem(name,kcal,alergies){


    this.name = name;
    this.kcal=kcal;
    this.alergies=alergies;
    this.path = function(p){
        this.path=p;
    }
    this.getNK = function(){
        return[this.name, this.kcal];
    }

}

let halloumi = new menuItem("Halloumi",987,"lactose");

let plant = new menuItem("Planty Burger",679,"None");

let meat = new menuItem("Meaty Burger",1050,"lactose and gluten");

let bacon = new menuItem("Bacony Burger",1250,"MEATY MEAT");

let onion = new menuItem("OnionDeath", 1100, "None");
