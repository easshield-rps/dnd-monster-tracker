/* ==========================================================
   Hunter's Ledger
   Version 0.1
========================================================== */

const openButton = document.getElementById("openBook");
const cover = document.getElementById("bookCover");
const ledger = document.getElementById("ledger");

openButton.addEventListener("click", () => {

    cover.style.opacity = "0";
    cover.style.pointerEvents = "none";

    setTimeout(() => {

        cover.style.display = "none";

        ledger.classList.remove("hidden");

        animateCounter();

        animateCards();

    }, 900);

});


/* ==========================================================
   Dashboard Data
========================================================== */

const categories = [

    { name:"Aberration", total:18, done:9 },

    { name:"Beast", total:94, done:28 },

    { name:"Celestial", total:7, done:1 },

    { name:"Construct", total:16, done:9 },

    { name:"Dragon", total:45, done:11 },

    { name:"Elemental", total:23, done:7 },

    { name:"Fey", total:7, done:3 },

    { name:"Fiend", total:37, done:7 },

    { name:"Giant", total:13, done:4 },

    { name:"Humanoid", total:74, done:25 },

    { name:"Monstrosity", total:51, done:8 },

    { name:"Ooze", total:4, done:2 },

    { name:"Plant", total:14, done:5 },

    { name:"Undead", total:31, done:11 }

];

const overallDone = 130;
const overallTotal = 434;


/* ==========================================================
   Animated Percentage
========================================================== */

function animateCounter(){

    const percent = document.getElementById("overallPercent");

    let value = 0;

    const target = ((overallDone / overallTotal) * 100);

    const timer = setInterval(()=>{

        value += 0.5;

        if(value >= target){

            value = target;

            clearInterval(timer);

        }

        percent.textContent = value.toFixed(1) + "%";

    },15);

}


/* ==========================================================
   Card Animation
========================================================== */

function animateCards(){

    const cards = document.querySelectorAll(".categoryCard");

    cards.forEach((card,index)=>{

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(()=>{

            card.style.transition = ".45s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        },index*70);

    });

}


/* ==========================================================
   Search Placeholder
========================================================== */

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup",()=>{

    const search = searchBox.value.toLowerCase();

    const cards = document.querySelectorAll(".categoryCard");

    cards.forEach(card=>{

        const name = card.querySelector("h3").textContent.toLowerCase();

        if(name.includes(search)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

});


/* ==========================================================
   Card Clicks
========================================================== */

document.querySelectorAll(".categoryCard").forEach(card=>{

    card.addEventListener("click",()=>{

        const title = card.querySelector("h3").textContent;

        alert(title + " page coming in Version 0.2!");

    });

});


/* ==========================================================
   Future Expansion
========================================================== */

/*

Stage 2

Monster Database

Monster Cards

Filters

Search by Name

Search by CR

AI Artwork

Achievements

Settings

GitHub Sync

*/
