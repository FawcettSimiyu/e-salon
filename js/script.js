$(document).ready(function() {
  $("#img4").on("click", function() {
    $("#detail4").toggle('slow');
  });
  $("#img5").on("click", function() {
    $("#detail5").toggle('slow');
  });
  $("#img6").on("click", function() {
    $("#detail6").toggle('slow');
  });
  $("#radio4").on("click", function() {
    $("#myForm4").show('slow');
  });

  $("#radio41").on("click", function() {
    $("#myForm4").hide('slow');
  });
  $("#radio5").on("click", function() {
    $("#myForm5").show('slow');
  });

  $("#radio51").on("click", function() {
    $("#myForm5").hide('slow');
  });
  $("#radio6").on("click", function() {
    $("#myForm6").show('slow');
  });

  $("#radio61").on("click", function() {
    $("#myForm6").hide('slow');
  });
