
function updatePhoneNumber(isIncrease) {
        const phoneNumberField = document.getElementById('phone-number-field');
        const phoneNumberFieldString = phoneNumberField.value;
        const previousPhoneNumer = parseInt(phoneNumberFieldString);

        let newPhoneNumber;
        if (isIncrease == true) {
                newPhoneNumber = previousPhoneNumer + 1;
        } else {
                newPhoneNumber = previousPhoneNumer - 1;
        }
        phoneNumberField.value = newPhoneNumber;
        return newPhoneNumber;
}
function updatePhonePrice(newPhoneNumber) {
        const phonePrice = newPhoneNumber * 1219;
        const priceElement = document.getElementById('total-phone');
        priceElement.innerText = phonePrice;
}




document.getElementById('btn-phone-plus').addEventListener('click', function () {

        newPhoneNumber = updatePhoneNumber(true);
        updatePhonePrice(newPhoneNumber)
        calculateSubTotal();

       
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
        newPhoneNumber = updatePhoneNumber(false);

        updatePhonePrice(newPhoneNumber)
        calculateSubTotal();

})