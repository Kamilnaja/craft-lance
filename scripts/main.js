/**
 * Created by Kamil on 2017-04-16.
 */
$(document).ready(function () {
   $('#signIn').on("click", function () {
       swal({
           title: 'Enter your password',
           input: 'password',
           inputAttributes: {
               'maxlength': 10,
               'autocapitalize': 'off',
               'autocorrect': 'off'
           }
       }).then(function (password) {
           if (password) {
               swal({
                   type: 'success',
                   html: 'Entered password: ' + password
               })
           }
       })
    })
});

