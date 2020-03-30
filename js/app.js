//const flipCardBack = document.querySelector('.flip-card-back');



const flipCardFront = document.querySelector('.flip-card-inner');
const resetButton = document.getElementById('reset');
const deliveryButton = document.getElementById('delivery');

const checkBoxes = document.querySelectorAll('input[type="checkbox"]')

const input = document.getElementsByName("product");




// check is checkbox is checked and totals
function orderTotal() {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            //  input[i].checked = true;
            total += parseFloat(input[i].value);
            // var x = input[i].parentNode;

        }
        this.parentElement.style = 'transform: none';
        this.parentElement.style = 'transform: none';
    }
    document.getElementsByName("total")[0].value = "$" + total.toFixed(2);
    document.getElementsByName("taxes")[0].value = "$" + total.toFixed(0) * 0.13;
    document.getElementsByName("grandtotal")[0].value = "$" + total * 1.13;

}

checkBoxes.forEach(function(check) {
    check.addEventListener('change', orderTotal)
});



// reset button resets position and total
resetButton.addEventListener('click', () => {
    checkBoxes.forEach(function(check) {

        check.checked = false;

        document.getElementsByName("total")[0].value = "$" + '0.00';
        document.getElementsByName("taxes")[0].value = "$" + '0.00';
        document.getElementsByName("grandtotal")[0].value = "$" + '0.00';
    })
    window.location.reload()
})