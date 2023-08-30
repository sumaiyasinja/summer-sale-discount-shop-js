

function getDiscount(){
  let total = document.getElementById("total-price").textContent;
  let totalNumber = parseFloat(total);
  

  let couponCode = document.getElementById("couponCode").textContent;
  let couponInput = document.getElementById("couponInput").value;
  if (couponCode === couponInput) { 
      let discountAmount = totalNumber * 0.2; 
      let discountedTotal = totalNumber - discountAmount;
      

      document.getElementById("discount-amount").innerText = discountAmount.toFixed(2); 
      document.getElementById("discounted-total").innerText = discountedTotal.toFixed(2)
    }
    document.getElementById("couponInput").value =''
}

document.getElementById('go-home').addEventListener('click', function(){
    
  window.location.href='index.html' 
})
  


