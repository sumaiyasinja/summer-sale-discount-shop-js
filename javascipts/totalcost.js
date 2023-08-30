// Kitchen Catergory
document.getElementById("kitchen-product-1").addEventListener("click", function() {  
    addItemList('Kprod1Name')
    let prodcutPrice= findCost('span1')
    totalCostFinder(prodcutPrice)
})
document.getElementById("kitchen-product-2").addEventListener("click", function() {
    addItemList('Kprod2Name')
    let prodcutPrice= findCost('span2')
    totalCostFinder(prodcutPrice)
})
document.getElementById("kitchen-product-3").addEventListener("click", function() {
    addItemList('Kprod3Name')
    let prodcutPrice= findCost('span3')
    totalCostFinder(prodcutPrice)
})

// Sports Category
document.getElementById('Sportswear-product-1').addEventListener("click", function() {
    addItemList('sportproduct1')
    let prodcutPrice= findCost('span4')
    totalCostFinder(prodcutPrice)
})
document.getElementById('Sportswear-product-2').addEventListener("click", function() {
    addItemList('sportproduct2')
    let prodcutPrice= findCost('span5')
    totalCostFinder(prodcutPrice)
})
document.getElementById('Sportswear-product-3').addEventListener("click", function() {
    addItemList('sportproduct3')
    let prodcutPrice= findCost('span6')
    totalCostFinder(prodcutPrice)
})
// Furniture Category
document.getElementById('Furniture-product-1').addEventListener("click", function() {
    addItemList('furnitureproduct1')
    let prodcutPrice= findCost('span7')
    totalCostFinder(prodcutPrice)
    
})
document.getElementById('Furniture-product-2').addEventListener("click", function() {
    addItemList('furnitureproduct2')
    let prodcutPrice= findCost('span8')
    totalCostFinder(prodcutPrice)
    
})
document.getElementById('Furniture-product-3').addEventListener("click", function() {
    addItemList('furnitureproduct3')
    let prodcutPrice= findCost('span9')
    totalCostFinder(prodcutPrice)
   
})


function addItemList(elementId) {
    let productNAme = document.getElementById(elementId).textContent
    let ol = document.getElementById('ol')
    let li = document.createElement('li')
    li.textContent = productNAme
    ol.appendChild(li)
}
function findCost(elementId){
    let priceString = document.getElementById(elementId).textContent;
    let priceFloat = parseFloat(priceString);
    let price = priceFloat.toFixed(2);
    
    return parseFloat(price); 
}


function totalCostFinder(prodcutPrice){
const totalCost= findCost("total-price")
const newTotal= totalCost + prodcutPrice

if(newTotal > 0){
    document.getElementById("make-purchase-btn").removeAttribute("disabled")
}
if(newTotal >=200){
    document.getElementById("applyButton").removeAttribute("disabled")
}
document.getElementById("total-price").innerText = newTotal
document.getElementById("discounted-total").innerText = newTotal

}


