var circle2 = document.getElementById('circle2');
var step1 = document.getElementById('step1');
var step2 = document.getElementById('step2');
var step3 = document.getElementById('step3');
var step4 = document.getElementById('step4');
var step5 = document.getElementById('step5');
var main = document.getElementById('main');
var user1 = document.getElementById('user1');
var user2 = document.getElementById('user2');
var user3 = document.getElementById('user3');
var user4 = document.getElementById('user4');
var user5 = document.getElementById('user5');
var user = document.getElementById('user');


    step1.addEventListener('click', () => {
    circle2.style.strokeDashoffset = "1004";
    main.style.backgroundImage = "url(1.jpg)";
    user1.style.display = "block";
    user2.style.display = "none"
    user3.style.display = "none"
    user4.style.display = "none"
    user5.style.display = "none"
    user.style.display = "none";

});

step2.addEventListener('click', () => {
    circle2.style.strokeDashoffset = "753";
    main.style.backgroundImage = "url(2.jpg)";
    user1.style.display = "none";
    user2.style.display = "block";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "none";

});

step3.addEventListener('click', () => {
    circle2.style.strokeDashoffset = "502";
    main.style.backgroundImage = "url(3.jpg)";
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "block";
    user4.style.display = "none";
    user5.style.display = "none";
});

step4.addEventListener('click', () => {
    circle2.style.strokeDashoffset = "201";
    main.style.backgroundImage = "url(4.jpg)";
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "block";
    user5.style.display = "none";
});

step5.addEventListener('click', () => {
    circle2.style.strokeDashoffset = "0";
    main.style.backgroundImage = "url(5.jpg)";
    user1.style.display = "none";
    user2.style.display = "none";
    user3.style.display = "none";
    user4.style.display = "none";
    user5.style.display = "block";
});