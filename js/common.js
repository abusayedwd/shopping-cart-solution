
function getElementValueById(elementId) {
        const totalElement = document.getElementById(elementId);
        const totalCaseElementString = totalElement.innerText;
        CurrentTotalElement = parseInt(totalCaseElementString);
        return CurrentTotalElement;
}

function setElementValueById(elementId, value){
        const subTotalElement = document.getElementById(elementId);
         subTotalElement.innerText =  value;
}

function calculateSubTotal(){
         //       calculate total
         const CurrentTotalPhone = getElementValueById('total-phone')
         const CurrentCaseTotal = getElementValueById('total-case')
         const CurrentSubTotal = CurrentTotalPhone + CurrentCaseTotal;
         setElementValueById('sub-total', CurrentSubTotal);

         const textAmountString =  (CurrentSubTotal * 0.1).toFixed(2);
         const discountAmount = parseFloat(textAmountString);
         setElementValueById('discount-amount', discountAmount);

         const finalAmount = CurrentSubTotal -  discountAmount;
         setElementValueById('final-total', finalAmount);

 
         
}