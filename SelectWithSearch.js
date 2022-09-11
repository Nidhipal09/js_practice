$(document).ready(function(){
    $("input").keydown(function(){
      var str=$("input").val();
      $("#p1").text(str);
    });
    $("input").keyup(function(){
        var str=$("input").val();
        $("#p1").text(str);
    });
  });