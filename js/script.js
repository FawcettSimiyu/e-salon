//Business logic
function Styles(style, salonist) {
  this.style = style;
  this.salonist = salonist;
}
Styles.prototype.totalCost = function() {
  return this.style + this.salonist;
}

//User interface logic
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
  $("form#myForm4").submit(function(event) {
    event.preventDefault();
    var mwamba = $("input[name='salonist']:checked", '#forForm').val();
    var hairStyle = parseInt($(this).find($("select#valueSelect3")).val());
    // alert(hairStyle);
    var radio = $("input[name='salonist']:checked").val();
    if (radio == "yes") {
      var rosette = parseInt(1500);
    }
    var totalPayment = new Styles(rosette, hairStyle);
    // alert("Your total cost is Ksh. " + totalPayment.totalCost());
    $("p#mwamcost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + rosette + ". " + "Total cost is Ksh. " + totalPayment.totalCost()) + ".";
  });
  $("form#myForm5").submit(function(event) {
    event.preventDefault();
    var mwamba = $("input[name='salonist']:checked", '#forForm').val();
    var hairStyle = parseInt($(this).find($("select#valueSelect4")).val());
    // alert(hairStyle);
    var radio = $("input[name='salonist']:checked").val();
    if (radio == "yes") {
      var samson = parseInt(1000);
    }

    var totalPayment = new Styles(samson, hairStyle);
    $("p#kabcost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + samson + ". " + "Total cost is Ksh. " + totalPayment.totalCost()) + ".";
  });
  $("form#myForm6").submit(function(event) {
    event.preventDefault();
    var mweheni = $("input[name='salonist']:checked", '#forForm').val();
    var hairStyle = parseInt($(this).find($("select#valueSelect5")).val());
    // alert(hairStyle);
    var radio = $("input[name='salonist']:checked").val();
    if (radio == "yes") {
      var shantel = parseInt(900);
    }
    var totalPayment = new Styles(shantel, hairStyle);
    $("p#mwecost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + shantel + ". " + "Total cost is Ksh. " + totalPayment.totalCost()) + ".";
  });
});
