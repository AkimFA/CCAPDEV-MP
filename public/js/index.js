$(document).ready(function () {

    /*
    TODO:   The code below attaches a `keyup` event to `#refno` text field.
            The code checks if the current reference number entered by the user
            in the text field does not exist in the database.

            If the current reference number exists in the database:
            - `#refno` text field background color turns to red
            - `#error` displays an error message `Reference number already in
            the database`
            - `#submit` is disabled

            else if the current reference number does not exist in the
            database:
            - `#refno` text field background color turns back to `#E3E3E3`
            - `#error` displays no error message
            - `#submit` is enabled
    */
    $('#refno').keyup(function () {
        var iRefNo = $('#refno').val();
        // console.log(iRefNo);

        // $.get('/getCheckRefNo', {refno: iRefNo}, function(result){
        //     if(result.refno == iRefNo) {
        //         $('#refno').css('background-color', 'red');
        //         $('#error').text('Reference number already in the database');
        //         $('#submit').prop('disabled', true);
        //     }
    
        //     else {
        //         $('#refno').css('background-color', '#E3E3E3');
        //         $('#error').text('');
        //         $('#submit').prop('disabled', false);
        //     }
        // });
        
    });

    /*
    TODO:   The code below attaches a `click` event to `#submit` button.
            The code checks if all text fields are not empty. The code
            should communicate asynchronously with the server to save
            the information in the database.

            If at least one field is empty, the `#error` paragraph displays
            the error message `Fill up all fields.`

            If there are no errors, the new transaction should be displayed
            immediately, and without refreshing the page, after the values
            are saved in the database.

            The name, reference number, and amount fields are reset to empty
            values.
    */
    $('#submit').click(function () {

        // if (document.getElementById("name").value=="" || document.getElementById("refno").value=="" || document.getElementById("amount").value=="")
        // {
        //     $("#error").text("Fill up all fields.");
        // }
        // else {
        //     $("#error").text("");

        //     var iName = $('#name').val();
        //     var iRefno = $('#refno').val();
        //     var iAmount = $('#amount').val();

        //     var transaction = {
        //         name: iName,
        //         refno: iRefno,
        //         amount: iAmount
        //     };
        //     $.get('/add', transaction, function(result){

        //     });
        //     $('#cards').append('<div class="card"><img src="/images/icon.webp" class="icon"><div class="info"><p class="text">' + iName + '</p><p class="text">' + iRefno + '</p><p class="text"> Php' + iAmount + '</p></div><button class="remove"> X </button></div>')
        //     $("#name").val("");
        //     $("#refno").val("");
        //     $("#amount").val("");
        // }
    });

    /*
    TODO:   The code below attaches a `click` event to `.remove` buttons
            inside the `<div>` `#cards`.
            The code deletes the specific transaction associated to the
            specific `.remove` button, then removes the its parent `<div>` of
            class `.card`.
    */
    $('#cards').on('click', '.remove', function () {

        // var $this = $(this);
        // // console.log(($this).parent().children().get(1));
        // // console.log(($this).parent().children().children());
        // var gName = (($this).parent().children().children().get(0).innerHTML);
        // var gRefNo = (($this).parent().children().children().get(1).innerHTML);
        // var gAmount = (($this).parent().children().children().get(2).innerHTML);
        // // console.log(gName, gRefNo, gAmount);
        // $.get('/delete', {refno: gRefNo},function(result){

        // });
        // ($this).parent().remove();

    });

})
