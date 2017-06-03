$(document).ready(function(){

    $(".fa-check-circle").hide();
    $(".fa-times-circle").hide();

    $(".input-append").on("click", ".button-submit", function(){
        var email = $(".input-email").val();

        $.ajax({
            type: "POST",
            url: "API.php?action=saveEmail",
            dataType: "json",
            data: {email : email}
        }).done(response =>{
          alert("Content saved!");  
        }).fail(error => console.log("Error when saving!", error));
    });

    $(".input-append").on("input", ".input-email", function(){

        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());

        if(is_email){
            $(".fa-check-circle").show();
            $(".fa-times-circle").hide();
        }
        else{
            $(".fa-times-circle").show();
            $(".fa-check-circle").hide();
        }
    });
});