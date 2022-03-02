// when we change language on large screens:

let lang_text = document.querySelector(".header .head-top .lang-type");

let langs_options = document.querySelectorAll(".header .head-top .langs-list p");

console.log(langs_options.length);

window.onload = function(){
    lang_text.innerHTML= localStorage.getItem("has");
}


langs_options.forEach((el)=>{
    el.addEventListener("click",function(){
        lang_text.innerHTML = el.getAttribute("data-lang");
        localStorage.setItem("has" , lang_text.innerHTML)
    })
})

// open and close menu in head bottom:

let menu_btn = document.querySelector(".head-bottom .menu");
let depars_btn = document.querySelector(".head-bottom .departs");

depars_btn.addEventListener("click",()=>{
    menu_btn.classList.toggle("open-menu");
})

// open and close aside menu;

let aside_menu = document.querySelector(".header .aside");
let close_aside = document.querySelector(".header .aside .close");
let burger_btn = document.querySelector(".header .burger");

burger_btn.onclick = function(){
    aside_menu.classList.remove("close-aside");
}

close_aside.onclick = function(){
    aside_menu.classList.add("close-aside");
}

// when we change language on small screens:

let lang2_text = document.querySelector(".header .aside .lang-type");

let langs2_options = document.querySelectorAll(".header .aside .langs-list p");

console.log(langs_options.length);

window.onload = function(){
    lang2_text.innerHTML= localStorage.getItem("has");
}


langs2_options.forEach((el)=>{
    el.addEventListener("click",function(){
        lang2_text.innerHTML = el.getAttribute("data-lang");
        localStorage.setItem("has" , lang2_text.innerHTML)
    })
})

// open and close login menu:

let login_btn = document.querySelector(".header .head-top .login");
let login_btn_aside = document.querySelector(".header .aside .login");
let login_menu = document.querySelector(".cont .login");
let login_parent = document.querySelector(".cont");
let close_login_btn = document.querySelector(".cont .login .close");

login_btn.onclick =()=>{
    login_parent.classList.remove("close-cont");
    login_menu.classList.remove("close-login");
}
login_btn_aside.onclick =()=>{
    login_parent.classList.remove("close-cont");
    login_menu.classList.remove("close-login");
}
close_login_btn.onclick =()=>{
    login_parent.classList.add("close-cont");
    login_menu.classList.add("close-login");
}

// for owl carousel:
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})

// to change type of foods;

let food_type_btn = document.querySelectorAll(".featured-products .types span");
let food_type = document.querySelectorAll(".featured-products .products >div");

for (let i = 0; i < food_type_btn.length ; i++){
     
    food_type_btn[i].addEventListener("click",function(){
        food_type_btn.forEach((el)=>{
            el.classList.remove("active");
        })
        this.classList.add("active")
         
        food_type.forEach((fo)=>{
            if (fo.getAttribute("data-food") == food_type_btn[i].getAttribute("data-food")){
                fo.classList.remove("close");
            }else{
                fo.classList.add("close")
            }
        })
    })

    food_type_btn[0].onclick = function(){
        food_type.forEach((el)=>{
            el.classList.remove("close");
        })
    }

}

// to see alll of products in shop page;

let ul_bullets = document.querySelector(".all-products .bullets");
let all_products = document.querySelectorAll(".all-products .products");

for (let i = 0 ; i < all_products.length ; i++){
    let li_created = document.createElement("li");
    let text_created = document.createTextNode(i+1);
    
    li_created.appendChild(text_created);
    ul_bullets.appendChild(li_created);
    
    li_created.addEventListener("click",()=>{
        all_products.forEach((el)=>{
            el.classList.add("close-products");
        })
        all_products[i].classList.remove("close-products");
    })


}

let li_bullets = document.querySelectorAll(".all-products .bullets li");

for (let i = 0;i<li_bullets.length;i++){
    li_bullets[0].classList.add("active");
    li_bullets[i].addEventListener("click",function(){
        li_bullets.forEach((x)=>{
            x.classList.remove("active");
        })
        li_bullets[i].classList.add("active");
    })
}

// to choose your product in shop details page;

let your_choosen_product = document.querySelector(".vegetables-packages .imgs .main-img img");
let products_options = document.querySelectorAll(".vegetables-packages .products-options img");

for (let i =0;i<products_options.length;i++){
    products_options[i].onclick = function(){
        your_choosen_product.src = products_options[i].src;
    }
}

let mins_btn = document.querySelectorAll(" .mins");
let plus_btn = document.querySelectorAll(".plus");
let num_of_products = document.querySelectorAll(".num");
let total_price = document.querySelectorAll("table .total");
let price_one = document.querySelectorAll("table .price");

 for (let i =0;i<num_of_products.length;i++){
    plus_btn[i].onclick = function(){
         num_of_products[i].innerHTML = Number(num_of_products[i].innerHTML) + 1;
         for(let x = 0;x < total_price.length;x++){
            total_price[x].innerHTML =  Number(num_of_products[x].innerHTML) * parseInt(price_one[x].innerHTML) +".00$";
        }
       
     }
     mins_btn[i].onclick = function(){
         if (num_of_products[i].innerHTML == 1){
             return false;
         }else{
            num_of_products[i].innerHTML =  Number(num_of_products[i].innerHTML) - 1;
         }
         for(let x = 0;x < total_price.length;x++){
            total_price[x].innerHTML = Number(num_of_products[x].innerHTML) * parseInt(price_one[x].innerHTML)+".00$";
        }
       
     }
 }
 
// to choose your country on checkout page;

let select_el = document.querySelector(".billing .form .form-select");
let countries_list = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
];

for (let i =0;i<countries_list.length;i++){
    let created_options = document.createElement("option");
    let country_name = document.createTextNode(countries_list[i]);

    created_options.appendChild(country_name);
    select_el.appendChild(created_options);
}
 

  
