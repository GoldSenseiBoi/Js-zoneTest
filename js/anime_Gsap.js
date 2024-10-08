gsap.to(".circle", {
     y : 300,
    duration : 5,
delay: 2,
ease : "elastic",
repeat :  2,
yoyo : true,
onUpdate : () => {
    document.querySelector(".circle img").setAttribute("src", "images/eggs.png")
}
})