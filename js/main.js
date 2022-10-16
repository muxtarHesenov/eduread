const next = document.getElementById('next');
const prev = document.getElementById('prev');
const sliderBox = document.getElementById('slider-box');

let left = 0

next.addEventListener("click", () => {
    if (left === 0) {
        sliderBox.style.left = left - 360 + "px";
        left = left - 360;
    } else if (left === -360) {
        sliderBox.style.left = left - 360 + "px";
        left = left - 360;
    } else if (left === -720) {
        sliderBox.style.left = left + 720 + "px";
        left = 0
    }
});

prev.addEventListener("click", () => {
    if (left < 0) {
        sliderBox.style.left = left + 360 + "px"
        left = left + 360
    } else if (left === 0) {
        sliderBox.style.left = left - 720 + "px"
        left = left - 720
    }
});




// Navbar js


const open = document.getElementById('open-mobile');
const close = document.getElementById('close-mobile');
const mobilList = document.getElementById('mobil-list');

open.addEventListener('click', () => {
    open.style.display = "none";
    close.style.display = "block";
    mobilList.style.display = "block";
});

close.addEventListener('click', () => {
    open.style.display = "block";
    close.style.display = "none";
    mobilList.style.display = "none";
});



// DROPDOWNS

const homePlus = document.getElementById('home-plus');
const homeList = document.getElementById('home-list');

const coursePlus = document.getElementById('course-plus');
const courseList = document.getElementById('course-list');

const coursePlus2 = document.getElementById('course-plus-2');
const courseList2 = document.getElementById('course-list-2');

const coursePlus3 = document.getElementById('course-plus-3');
const courseList3 = document.getElementById('course-list-3');

const eventPlus = document.getElementById('event-plus');
const eventList = document.getElementById('event-list');

const pagesPlus = document.getElementById('pages-plus');
const pagesList = document.getElementById('pages-list');

const pagesPlus2 = document.getElementById('pages-plus-2');
const pagesList2 = document.getElementById('pages-list-2');

const pagesPlus3 = document.getElementById('pages-plus-3');
const pagesList3 = document.getElementById('pages-list-3');

const teachersPlus = document.getElementById('teachers-plus');
const teachersList = document.getElementById('teachers-list');

const blogPlus = document.getElementById('blog-plus');
const blogList = document.getElementById('blog-list');





homePlus.addEventListener('click',() => {
    if (homeList.style.display == 'none') {
        homeList.style.transition = 500 + 'ms'
        homeList.style.display = 'block';
        homePlus.innerHTML = '-';
    } else {
        homeList.style.display = 'none';
        homePlus.innerHTML = '+';
    }
});

coursePlus.addEventListener('click',() => {
    if (courseList.style.display == 'none') {
        courseList.style.display = 'block';
        coursePlus.innerHTML = '-';
    } else {
        courseList.style.display = 'none';
        coursePlus.innerHTML = '+';
    }
});

coursePlus2.addEventListener('click',() => {
    if (courseList2.style.display == 'none') {
        courseList2.style.display = 'block';
        coursePlus2.innerHTML = '-';
    } else {
        courseList2.style.display = 'none';
        coursePlus2.innerHTML = '+';
    }
});

coursePlus3.addEventListener('click',() => {
    if (courseList3.style.display == 'none') {
        courseList3.style.display = 'block';
        coursePlus3.innerHTML = '-';
    } else {
        courseList3.style.display = 'none';
        coursePlus3.innerHTML = '+';
    }
});

eventPlus.addEventListener('click',() => {
    if (eventList.style.display == 'none') {
        eventList.style.display = 'block';
        eventPlus.innerHTML = '-';
    } else {
        eventList.style.display = 'none';
        eventPlus.innerHTML = '+';
    }
});

pagesPlus.addEventListener('click',() => {
    if (pagesList.style.display == 'none') {
        pagesList.style.display = 'block';
        pagesPlus.innerHTML = '-';
    } else {
        pagesList.style.display = 'none';
        pagesPlus.innerHTML = '+';
    }
});

pagesPlus2.addEventListener('click',() => {
    if (pagesList2.style.display == 'none') {
        pagesList2.style.display = 'block';
        pagesPlus2.innerHTML = '-';
    } else {
        pagesList2.style.display = 'none';
        pagesPlus2.innerHTML = '+';
    }
});

pagesPlus3.addEventListener('click',() => {
    if (pagesList3.style.display == 'none') {
        pagesList3.style.display = 'block';
        pagesPlus3.innerHTML = '-';
    } else {
        pagesList3.style.display = 'none';
        pagesPlus3.innerHTML = '+';
    }
});

teachersPlus.addEventListener('click',() => {
    if (teachersList.style.display == 'none') {
        teachersList.style.display = 'block';
        teachersPlus.innerHTML = '-';
    } else {
        teachersList.style.display = 'none';
        teachersPlus.innerHTML = '+';
    }
});

blogPlus.addEventListener('click',() => {
    if (blogList.style.display == 'none') {
        blogList.style.display = 'block';
        blogPlus.innerHTML = '-';
    } else {
        blogList.style.display = 'none';
        blogPlus.innerHTML = '+';
    }
});



let body = document.getElementsByTagName('body')[0];
let navHeader = document.getElementById('nav-header');
let meanBar = document.getElementsByClassName('mean-bar')[0] ;

let fullPage = document.getElementById('fullPage');


window.addEventListener('scroll', () => {

    if(window.scrollY > 100) {
        navHeader.style.backgroundColor = 'white';
        navHeader.style.color = 'black';
        navHeader.style.position = 'fixed';
        navHeader.style.top = '0';
    }
});

window.addEventListener('scroll', () => {

    if(window.scrollY < 100) {
        navHeader.style.backgroundColor = 'transparent';
        navHeader.style.color = 'white';
        navHeader.style.position = 'relative';
        navHeader.style.top = '0';
    }
});