const random = (Math.floor(Math.random()*6)+1);
console.log(random)
const random1 = (Math.floor(Math.random()*6)+1);
console.log(random1)

if(random>random1){
    document.querySelectorAll("h1")[1].style.display="none"
}else
    document.querySelectorAll("h1")[0].style.display="none"
     



function game(){
    document.querySelectorAll("img")[0].setAttribute("src","dice"+random+".png")
    document.querySelectorAll("img")[1].setAttribute("src","dice"+random1+".png")
}
