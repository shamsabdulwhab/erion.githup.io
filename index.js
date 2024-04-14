/*  Start first page the tabs */
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
// console.log(ele);

let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
   ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
        ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
        div.style.display = 'none';
    });
    // console.log(e.currentTarget.dataset.cont)
    document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
   });
});

/*  End first page the tabs */



let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 90){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";   
    }
    
}, 53);


let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 80){
        clearInterval();
    }else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";   
    }
    
}, 53);


let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 55){
        clearInterval();
    }else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";   
    }
    
}, 53);


