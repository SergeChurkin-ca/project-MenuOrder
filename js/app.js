const resetButton = document.getElementById('reset');
const deliveryButton = document.getElementById('delivery');
const nodeliveryButton = document.getElementById('nodelivery');

const checkBoxes = document.querySelectorAll('input[type="checkbox"]')

const input = document.getElementsByName("product");


// check if checkbox is checked, get total and stop card rotation if was checked
function orderTotal() {
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
            input[i].checked = true;
            total += parseFloat(input[i].value);

        }
        this.parentElement.style = 'transform: none; transition: none';
        this.parentElement.parentElement.style = 'transform: none; transition: none';


    }

    document.getElementsByName("total")[0].value = "$" + total.toFixed(2);
    document.getElementsByName("taxes")[0].value = "$" + (total * 0.13).toFixed(2);
    document.getElementsByName("grandtotal")[0].value = "$" + (total * 1.13).toFixed(2);
}

checkBoxes.forEach(function(check) {
    check.addEventListener('change', orderTotal)
});


// reset button resets order total and checkboxes
resetButton.addEventListener('click', () => {
    checkBoxes.forEach(function(check) {

        check.checked = false;

        document.getElementsByName("total")[0].value = "$" + '0.00';
        document.getElementsByName("taxes")[0].value = "$" + '0.00';
        document.getElementsByName("grandtotal")[0].value = "$" + '0.00';
    })
    window.location.reload()
})




// Modal
var modal = document.getElementById("Mymodal");

var confirmButton = document.getElementById("confirm");
var span = document.getElementsByClassName("close")[0];

confirmButton.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none"
}
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';

    }
}



resetButton.addEventListener('click', () => {
    checkBoxes.forEach(function(check) {

        check.checked = false;

        document.getElementsByName("total")[0].value = "$" + '0.00';
        document.getElementsByName("taxes")[0].value = "$" + '0.00';
        document.getElementsByName("grandtotal")[0].value = "$" + '0.00';
    })
    window.location.reload()
})