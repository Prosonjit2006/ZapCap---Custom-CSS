

let toggler=document.querySelector("#navtogglar");
let navlist=document.querySelector(".navlist");

// console.log(toggler, navlist)

toggler.addEventListener("click", listDisplay);

function listDisplay() {
    //   alert('cicked')
    navlist.classList.toggle("showList");
}