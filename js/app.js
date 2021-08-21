




function totalPrice() {
    const bestPrice = document.getElementById("bestPrice").innerText;
    const memoryCost = document.getElementById("memoryCost").innerText;
    const storageCost = document.getElementById("storageCost").innerText;
    const deliveryCost = document.getElementById("deliveryCost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    console.log(totalPrice)

    const totalCost = document.getElementById("totalCost").innerText = totalPrice;
    const finalPrice = document.getElementById("finalPrice").innerText = totalPrice;

}

function updatePrice(itemId, price) {
    const memoryCost = document.getElementById(itemId).innerText = price;
    totalPrice()
}

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