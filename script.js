let fontLink = document.createElement('link');
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap";
document.head.appendChild(fontLink);

document.querySelectorAll('*').forEach(el => {
    el.style.margin = "0";
    el.style.padding = "0";
    el.style.boxSizing = "border-box";
    el.style.listStyle = "none";
    el.style.fontFamily = '"Quantico", sans-serif';
});

let nav = document.querySelector('.nav');
nav.style.display = "flex";
nav.style.alignItems = "center";
nav.style.justifyContent = "space-between";
nav.style.backgroundColor = "#272c3d";
nav.style.width = "100%";
nav.style.height = "70px";
nav.style.padding = "21px 25px";

document.querySelectorAll('.nav ul li').forEach(li => {
    li.style.fontSize = "20px";
    li.style.color = "white";
});

let navUl = document.querySelector('.nav ul');
navUl.style.display = "flex";
navUl.style.gap = "25px";

let navInput = document.querySelector('.nav input');
navInput.style.backgroundColor = "#404864";
navInput.style.width = "241px";
navInput.style.height = "30px";
navInput.style.border = "none";

let navImg = document.querySelector('.nav img');
navImg.style.width = "28px";
navImg.style.height = "36px";

let navSelect = document.querySelector('.nav select');
navSelect.style.backgroundColor = "#00000080";
navSelect.style.color = "white";
navSelect.style.width = "165px";
navSelect.style.height = "30px";
navSelect.style.border = "none";

let headerContent = document.querySelector('.hedaer-content');
headerContent.style.backgroundImage = 'url("95254beaaafd285b4e172b29b2bb169b461afa6d.jpg")';
headerContent.style.backgroundPosition = "center";
headerContent.style.backgroundSize = "cover";
headerContent.style.backgroundRepeat = "no-repeat";
headerContent.style.height = "70vh";

let section = document.querySelector('.section');
section.style.backgroundColor = "#000000";
section.style.width = "100%";
section.style.paddingBottom = "80px";

let sectionH1 = document.querySelector('.section h1');
sectionH1.style.fontSize = "32px";
sectionH1.style.textAlign = "center";
sectionH1.style.color = "white";
sectionH1.style.padding = "45px 0";

let wrapper = document.querySelector('.wrapper');
wrapper.style.display = "flex";
wrapper.style.justifyContent = "center";
wrapper.style.gap = "41px";
wrapper.style.marginTop = "30px";

document.querySelectorAll('.wrapper img').forEach(img => {
    img.style.width = "297px";
    img.style.height = "221px";
});

let intro = document.querySelector('.intro');
intro.style.width = "1189px";
intro.style.backgroundColor = "#1b1e27";
intro.style.margin = "50px auto";
intro.style.display = "flex";
intro.style.flexDirection = "column";
intro.style.gap = "70px";
intro.style.padding = "40px";

let introH3 = document.querySelector('.intro h3');
introH3.style.color = "white";
introH3.style.fontSize = "24px";
introH3.style.textAlign = "center";
introH3.style.marginBottom = "20px";

let doda = document.querySelector('.doda');
doda.style.display = "flex";
doda.style.flexDirection = "column";
doda.style.alignItems = "center";
doda.style.gap = "20px";

document.querySelectorAll('.doda img').forEach(img => {
    img.style.width = "600px";
    img.style.height = "300px";
});

document.querySelectorAll('.doda p').forEach(p => {
    p.style.width = "80%";
    p.style.color = "white";
    p.style.fontSize = "14px";
});

let buvi = document.querySelector('.buvi');
buvi.style.display = "flex";
buvi.style.flexDirection = "column";
buvi.style.alignItems = "center";
buvi.style.gap = "20px";

document.querySelectorAll('.buvi img').forEach(img => {
    img.style.width = "600px";
    img.style.height = "300px";
});

document.querySelectorAll('.buvi p').forEach(p => {
    p.style.width = "80%";
    p.style.color = "white";
    p.style.fontSize = "14px";
});

let footer = document.querySelector('.footer');
footer.style.width = "100%";
footer.style.height = "70px";
footer.style.padding = "47px 22px";
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.justifyContent = "space-between";
footer.style.backgroundColor = "#272c3d";

document.querySelectorAll('.footer img').forEach(img => {
    img.style.width = "38px";
    img.style.height = "38px";
});

let footerUl = document.querySelector('.footer ul');
footerUl.style.display = "flex";
footerUl.style.gap = "25px";

document.querySelectorAll('.footer ul li').forEach(li => {
    li.style.fontSize = "20px";
    li.style.color = "white";
});
