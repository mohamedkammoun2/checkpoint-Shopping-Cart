// console.log(document)
// var total=document.getElementById("total");
// // console.log(total);
// var deletebtn=document.getElementsByClassName("delete");
// console.log(deletebtn);
// const quentity=document.getElementsByTagName("p");
// console.log(quentity);
// const btnPlus=document.querySelectorAll(".plus");
// console.log(btnPlus);
// const checkBoxinput=document.querySelector("input");
// console.log(checkBoxinput);
const btnPlus=document.getElementsByClassName("plus");
const checkboxes=document.querySelectorAll(".check");
console.log(checkboxes);
console.log(btnPlus);
for ( let i = 0; i < btnPlus.length; i++){
    btnPlus[i].addEventListener("click",increment)
    checkboxes[i].addEventListener("click",totalprice);
}

function increment(e){
//  console.log(e)
 const btn=e.target;
//  console.log(btn)
const divElt = btn.parentElement;
// console.log(divElt);
var qunatitytag = divElt.querySelector("p");
// console.log(qunatitytag);
var qunatityvalue = Number(qunatitytag.innerHTML);
qunatityvalue++;
// console.log(qunatityvalue);
qunatitytag.innerHTML = qunatityvalue;
const tdElt = divElt.parentElement;
// console.log(tdElt);
const trElt= tdElt.parentElement;
// console.log(trElt)
const unitPrice = parseInt(trElt.querySelector(".unitPrice").innerHTML);
// console.log(unitPrice);
var pricetag=trElt.queryselector(".price");
// console.log(pricetag);
var pricevalue=Number(pricetag.innerHTML)
// console.log(pricevalue)
pricevalue=qunatityValue*unitprice;
pricetag.innerHTML=pricevalue

}





function totalprice(event){
// console.log(event);
const checkbox = event.target;
// console.log(checkbox);
const priceValue = Number(
    checkbox.parentElement.parentElement.querySelector(".price").innerHTML);
// console.log(priceValue);

var totalTag = document.queryselector("#total");
// console.log(totalTag)
var totalValue = parseInt(totalTag.innerHTML);
const btnPlus=checkbox.parentElement.parentElement.querySelector(".plus");
// console.log(btnPlus)
if (checkbox.checked === true) {
    totalvalue =totalvalue+ pricevalue;
    btnPlus.setattribute("disabled",true)
}
else {
    totalValue-=priceValue
    btnPlus.removeAttribute("disable")
}
   
 totalTag.innerHTML = totalValue;

}
































