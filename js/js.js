$(function() {
    $("#click").on("click", function () {
        let value = $("#names").val();
        let newValue = value.split(",");
        let itemId = (Math.floor(Math.random() * (newValue.length)));
        $("#winner").html(newValue[itemId]);
        $(".winner").show();
    });
});
