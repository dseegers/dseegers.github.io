$(function() {
    $("#click").on("click", function () {
        let value = $("#names").val();
        let newValue = value.split(",");

        let itemId = (Math.floor(Math.random() * (newValue.length)));
        $("#winner").html(newValue[itemId]);
        $(".winner").show();
        if(typeof newValue[1] === 'undefined'){
            $("#winner").html("Wellicht handig om meerdere kandidaten in te vullen")
        }
    });
});
