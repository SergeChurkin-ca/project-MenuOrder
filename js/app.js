const flipCardBack = document.querySelector('.flip-card-back');
const flipCardFront = document.querySelector('.flip-card-inner');
const resetButton = document.getElementById('reset');
const deliveryButton = document.getElementById('delivery');

const checkBoxes = document.querySelectorAll('input[type="checkbox"]')

// check is checkbox is checked and totals
function orderTotal() {
    var input = document.getElementsByName("product");

    var total = 0;

    for (var i = 0; i < input.length; i++) {

        if (input[i].checked) {
            input[i].checked = true;
            total += parseFloat(input[i].value);
            flipCardBack.style = 'transform: none'
            flipCardFront.style = 'transition: none; transform: none'
        }
    }

    deliveryButton.addEventListener('click', () => {
        document.getElementsByName("delivery")[0].value = "$" + 5;
    })

    document.getElementsByName("total")[0].value = "$" + total.toFixed(2);
    document.getElementsByName("taxes")[0].value = "$" + total.toFixed() * 0.13;
    document.getElementsByName("grandtotal")[0].value = "$" + total.toFixed() * 1.13;
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
})