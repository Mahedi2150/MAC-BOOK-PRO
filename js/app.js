
// total price update 
function totalPrice() {
    const bestPrice = document.getElementById("bestPrice").innerText;
    const memoryCost = document.getElementById("memoryCost").innerText;
    const storageCost = document.getElementById("storageCost").innerText;
    const deliveryCost = document.getElementById("deliveryCost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);

    const totalCost = document.getElementById("totalCost").innerText = totalPrice;
    const finalPrice = document.getElementById("finalPrice").innerText = totalPrice;
    return totalCost;

}
// price update 
function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId).innerText = price;
    totalPrice()
}

// promo code 
function promoCode(Code, totalFloat) {
    const discount = totalFloat * .2
   const finalPrice = totalFloat - discount;
   if (Code == "stevekaku") {
       
       document.getElementById("finalPrice").innerText = finalPrice;
   } else {
       document.getElementById("finalPrice").innerText = totalFloat;
    }
   
   }
   
   document.getElementById("codeButton").addEventListener("click", function () {
       const total = document.getElementById("totalCost").innerText;
       const totalFloat = parseFloat(total)
       const Code = document.getElementById("code").value;
       document.getElementById("code").value = "";
      promoCode(Code,totalFloat)
       
   })

// memory price update 
document.getElementById("extraMemory8GB").addEventListener("click", function () {
    updatePrice("memoryCost", 0)
});
document.getElementById("extraMemory16GB").addEventListener("click", function () {
    updatePrice("memoryCost", 180)
});

// storage price update 
document.getElementById("extraStorage256GB").addEventListener("click", function () {
    updatePrice("storageCost", 0)
});
document.getElementById("extraStorage512GB").addEventListener("click", function () {
    updatePrice("storageCost", 100)
});
document.getElementById("extraStorage1TB").addEventListener("click", function () {
    updatePrice("storageCost", 180)
});

// delivery Cost update 
document.getElementById("deliveryCost$0").addEventListener("click", function () {
    updatePrice("deliveryCost", 0)
});
document.getElementById("deliveryCost$20").addEventListener("click", function () {
    updatePrice("deliveryCost", 20)
});