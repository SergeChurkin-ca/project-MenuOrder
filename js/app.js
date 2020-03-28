function orderTotal(check) {
    var input = document.getElementsByName("product");

    var total = 0;

    for (var i = 0; i < input.length; i++) {
        if (check) {
            input[i].checked = true;
            total += parseFloat(input[i].value);

        } else {
            input[i].checked = false;
        }

    }


    document.getElementsByName("total")[0].value = "$" + total.toFixed(2);

}