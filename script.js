// add in first cart
const firstPlusBtn = document.getElementById("firstPlusBtn");
firstPlusBtn.addEventListener("click", function () {
   const firstCartInput = document.getElementById("firstCartInput").value;
   const firstCartNumber = parseFloat(firstCartInput);
   document.getElementById("firstCartInput").value = firstCartNumber + 1;
   const firstCartPrice = document.getElementById("firstCartPrice").innerText;
   const firstCartPriceNum = parseFloat(firstCartPrice);
   document.getElementById("firstCartPrice").innerText = firstCartPriceNum + 1219; //price option
   const subTotal = document.getElementById("subTotal").innerText;
   const subTotalNum = parseFloat(subTotal);
   document.getElementById("subTotal").innerText = firstCartPriceNum + 1278; //subtotal price option
   const firstSubTotalNum = firstCartPriceNum + 1278;
   const tax = document.getElementById("tax").innerText;
   const taxNumber = parseFloat(tax);
   document.getElementById("tax").innerText = taxNumber + 3;
   const TaxNum = taxNumber + 3;
   const total = document.getElementById("total").innerText;
   const totalNumber = parseFloat(total);
   if (total)
      document.getElementById("total").innerText = totalNumber + 1281;
})




// minus in first cart
const firstMinusBtn = document.getElementById("firstMinusBtn");
firstMinusBtn.addEventListener("click", function () {
   const firstCartInput = document.getElementById("firstCartInput").value;
   const firstCartNumber = parseFloat(firstCartInput);
   if (firstCartNumber > 1) {
      document.getElementById("firstCartInput").value = firstCartInput - 1;

      const firstCartPrice = document.getElementById("firstCartPrice").innerText
      const  firstCartPriceNum = parseFloat(firstCartPrice);
      document.getElementById("firstCartPrice").innerText = firstCartPriceNum - 1219

      const subTotal = document.getElementById("subTotal").innerText
      const subTotalNum = parseFloat(subTotal)
      document.getElementById("subTotal").innerText = subTotalNum - 1278;

      const tax = document.getElementById("tax").innerText
      const taxNum = parseFloat(tax)
      document.getElementById("tax").innerText = taxNum - 3

      const total = document.getElementById("total").innerText;
const totalNumber = parseFloat(total);
document.getElementById("total").innerText = totalNumber - 1281;
   }
})

