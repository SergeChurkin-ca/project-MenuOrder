const flipCardBack = document.querySelector('.flip-card-back');
const flipCardFront = document.querySelector('.flip-card-inner');
const resetButton = document.getElementById('reset');


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
    document.getElementsByName("total")[0].value = "$" + total.toFixed(2);

    // button has to be fixed : uncheck checkboxes and update total - this is temporary fix
    resetButton.addEventListener('click', () => {
        window.location.reload();
    })
}