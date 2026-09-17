/* ==========================================================
   Hunter's Ledger
   Version 0.2
========================================================== */

const openButton = document.getElementById("openBook");
const cover = document.getElementById("bookCover");
const ledger = document.getElementById("ledger");

const categories = [
    { name: "Aberration", total: 18, done: 9, icon: "👁️" },
    { name: "Beast", total: 94, done: 28, icon: "🐺" },
    { name: "Celestial", total: 7, done: 1, icon: "⭐" },
    { name: "Construct", total: 16, done: 9, icon: "⚙️" },
    { name: "Dragon", total: 45, done: 11, icon: "🐉" },
    { name: "Elemental", total: 23, done: 7, icon: "🔥" },
    { name: "Fey", total: 7, done: 3, icon: "🍃" },
    { name: "Fiend", total: 37, done: 7, icon: "😈" },
    { name: "Giant", total: 13, done: 4, icon: "🪓" },
    { name: "Humanoid", total: 74, done: 25, icon: "⚔️" },
    { name: "Monstrosity", total: 51, done: 8, icon: "🦴" },
    { name: "Ooze", total: 4, done: 2, icon: "💧" },
    { name: "Plant", total: 14, done: 5, icon: "🌿" },
    { name: "Undead", total: 31, done: 11, icon: "💀" }
];

const overallDone = 130;
const overallTotal = 434;

/* ============================
   Open the Ledger
============================ */

openButton.addEventListener("click", () => {

    cover.style.opacity = "0";
    cover.style.pointerEvents = "none";

    setTimeout(() => {

        cover.style.display = "none";
        ledger.classList.remove("hidden");

        animateCounter();
        buildCategoryCards();

    }, 700);

});

/* ============================
   Overall Percentage
============================ */

function animateCounter() {

    const percent = document.getElementById("overallPercent");

    let current = 0;

    const target = (overallDone / overallTotal) * 100;

    const timer = setInterval(() => {

        current += 0.5;

        if (current >= target) {

            current = target;
            clearInterval(timer);

        }

        percent.textContent = current.toFixed(1) + "%";

    }, 15);

}

/* ============================
   Build Dashboard
============================ */

function buildCategoryCards() {

    const grid = document.querySelector(".categoryGrid");

    grid.innerHTML = "";

    categories.forEach((cat, index) => {

        const percent = ((cat.done / cat.total) * 100).toFixed(0);

        const card = document.createElement("div");

        card.className = "categoryCard";

card.innerHTML = `
<div class="miniShield">

<svg viewBox="0 0 120 140" class="shieldSVG">

<path
class="shieldBody"
d="M60 5
L110 25
L100 90
Q60 135
20 90
L10 25
Z"/>

<text
x="60"
y="72"
text-anchor="middle"
font-size="34">

${cat.icon}

</text>

</svg>

</div>

<h3>${cat.name}</h3>

<p>${cat.done} / ${cat.total}</p>

<small>${percent}% Complete</small>
`;

        card.style.opacity = 0;
        card.style.transform = "translateY(25px)";

        setTimeout(() => {

            card.style.transition = ".35s";
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";

        }, index * 60);

        card.addEventListener("click", () => {

            alert(`${cat.name} Bestiary coming in Version 0.3`);

        });

        grid.appendChild(card);

    });

}

/* ============================
   Search
============================ */

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {

    const search = searchBox.value.toLowerCase();

    document.querySelectorAll(".categoryCard").forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(search)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});
