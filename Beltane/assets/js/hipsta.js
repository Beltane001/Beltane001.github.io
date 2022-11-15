$(document).ready(function(){
    $(document).bind('contextmenu click',function() {
        $(".context-menu").hide();
        $("#txt_id").val("");
    });
    $("html").bind('contextmenu', function (e) {
        var id = this.id;
        $("#txt_id").val(id);
        var top = e.pageY + 5;
        var left = e.pageX;
        $(".context-menu").toggle(100).css({
            top: top + "px",
            left: left + "px"
        });
        return false;
    });
    $('.context-menu').bind('contextmenu',function() {
        return false;
    });
    $('.context-menu li').click(function() {
        var className = $(this).find("span:nth-child(1)").attr("class");
        var titleid = $('#txt_id').val();
        $("#"+ titleid).css("background-color", className);
        $(".context-menu").hide();
    });
});
