/*function menuItem(name, kcal, alergies) {

  this.name = name;
  this.kcal = kcal;
  this.alergies = alergies;
  this.path = function(p) {
    this.path = p;
  }
    this.getInfo() = function() {
       return this.name +" " +this.kcal + " " +this.alergies;
  }

}

let halloumi = new menuItem("Halloumi", 987, "lactose");
halloumi.path("https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg");

let plant = new menuItem("Planty Burger", 679, "None");
plant.path("https://www.max.se/contentassets/359fcb7f236247a7a4a41cdf2ddf36b0/product_delifresh-signature-plant-beef.jpg");

let meat = new menuItem("Meaty Burger", 1050, "lactose and gluten");
meat.path("https://www.max.se/contentassets/96a590c660f54c8b83bc5080b036fecf/product_gdl-umami-bacon-burger2.jpg");

let nasty = new menuItem("JustNasty", 1250, "Burnt burger");
nasty.path("https://bloody-disgusting.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-11-at-9.23.59-AM.jpg");

let candy = new menuItem("Candy Burger", 999999, "SWEEEET");
candy.path("https://www.cooperscandy.com/cache/e3/600x600-prod_24558.jpg");

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
let p5 = document.createElement('p');

let b1 = document.createTextNode(halloumi.name + " " + halloumi.kcal + " " + halloumi.alergies);
let b2 = document.createTextNode(plant.name + " " + plant.kcal + " " + plant.alergies);
let b3 = document.createTextNode(meat.name + " " + meat.kcal + " " + meat.alergies);
let b4 = document.createTextNode(nasty.name + " " + nasty.kcal + " " + nasty.alergies);
let b5 = document.createTextNode(candy.name + " " + candy.kcal + " " + candy.alergies);


p1.appendChild(b1);
p2.appendChild(b2);
p3.appendChild(b3);
p4.appendChild(b4);
p5.appendChild(b5);

let div1 = document.createElement('div');
let img1 = document.createElement('img');

div1.style.gridColumn="1";
img1.src=halloumi.path;
div1.appendChild(img1);
div1.appendChild(p1);

let div2 = document.createElement('div');
let img2 = document.createElement('img');

div2.style.gridColumn="2";
img2.src=plant.path;
div2.appendChild(img2);
div2.appendChild(p2);

let div3 = document.createElement('div');
let img3 = document.createElement('img');
div3.style.gridColumn="3";
img3.src=meat.path;
div3.appendChild(img3);
div3.appendChild(p3);

let div4 = document.createElement('div');
let img4 = document.createElement('img');
img4.id="img4";
div4.style.gridColumn="4";
img4.src=nasty.path;
div4.appendChild(img4);
div4.appendChild(p4);

let div5 = document.createElement('div');
let img5 = document.createElement('img');
img5.id="img5";
div5.style.gridColumn="5";
img5.src=candy.path;
div5.appendChild(img5);
div5.appendChild(p5);

let menu = [div1,div2,div3,div4,div5];

let target = document.getElementById("grid");
for (let x of menu) {
target.appendChild(x);
}

*/
/*
        <div class="wrapper">
          <div class="a">
            <h2>Halloumi Burger!</h2>
            <img src="https://www.max.se/contentassets/00848003f52b4c8d8dcf139ecdb3fc1e/product_gdl-umami-halloumi2.jpg" alt = "Delicious halloumi burger" width="150">
            <ul>
              <li>Vegetarian </li>
              <li>contains <span class="alergies">lactose</span></li>
              <li>987 kcal</li>
            </ul>


          </div>
          <div class="b">
            <h2>Planty Burger!</h2>
            <img src="https://www.max.se/contentassets/359fcb7f236247a7a4a41cdf2ddf36b0/product_delifresh-signature-plant-beef.jpg" alt="Plant burger" width="150" >
            <!-- PLANT BURGER INFO-->
            <ul>
              <li>Vegan</li>
              <li>Soy burger</li>
              <li>679 kcal</li>
            </ul>
          </div>
          <div class="c">
            <h2>Meaty Burger!</h2>
            <img src="https://www.max.se/contentassets/96a590c660f54c8b83bc5080b036fecf/product_gdl-umami-bacon-burger2.jpg" alt="delicious beef burger" width="150"  >
            <!--BEEF BURGER INFO-->
            <ul>

              <li>Animal based burger</li>
              <li>Contains <span class="alergies">gluten</span></li>
              <li>1050 kcal</li>
            </ul>
          </div>

        </div>*/
