 
function updateCaseNumber(isIncrease){
        const caseNumberField = document.getElementById('case-number-field');
        const caseNumberString = caseNumberField.value ;
        const previousCaseNumber = parseInt(caseNumberString);
         
        let newNumber;

        if(isIncrease){
                newNumber = previousCaseNumber +1;
        }else{
                newNumber = previousCaseNumber -1;
        }

        caseNumberField.value = newNumber;
        return newNumber;
}
        function updateTotalPrice(newNumber){
                const totalCaseNumber = newNumber * 59;
                const totalCaseElement = document.getElementById('total-case');
                totalCaseElement.innerText = totalCaseNumber;
        }


 document.getElementById('btn-case-plus').addEventListener('click', function(){
       
      const newNumber = updateCaseNumber(true);
      
      updateTotalPrice(newNumber);
      calculateSubTotal();
 })

 document.getElementById('btn-case-minus').addEventListener('click', function(){
         
        const newNumber = updateCaseNumber(false);
         
        updateTotalPrice(newNumber);
        calculateSubTotal();
      
 })
