const button = document.getElementById('button')

const images = [
    {  image: 'https://placekitten.com/451/451' },
    {  image: 'https://placekitten.com/450/451' },
    {  image: 'https://placekitten.com/454/452' },
    {  image: 'https://placekitten.com/454/453' },
  ];



  function getRandomImage() {

    let randomImage;
  for (let i = 0; i < images.length; i++) {
    randomImage = images[Math.floor(Math.random() * images.length)];
  }


  document.getElementById('outputdiv').innerHTML = 

//  "bla" + randomImage.image + "bla"

  `<a href="${randomImage.image}" target="_blank"><img src="${randomImage.image}""/></a>`

}

button.addEventListener('click', getRandomImage);





/*
const button = document.getElementById("button");
const outputdiv = document.getElementById("outputdiv");

button.addEventListener("click", modifyText);




//const test = document.getElementsByClassName("button") {0};       this code if we used class  
// console.log(test);
var photos = [
    "http://placekitten.com/200/300",
    'http://placekitten.com/200/380',
    'http://placekitten.com/200/360',
    'http://placekitten.com/200/390'
];


*/


