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
    $("#img1").on("click", function() {
      $("#detail1").toggle('slow');
    });
    $("#img2").on("click", function() {
      $("#detail2").toggle('slow');
    });
    $("#img3").on("click", function() {
      $("#detail3").toggle('slow');
    });
    $("#yesRadio1").on("click", function() {
      $("#myForm1").toggle('slow');
    });
    $("#noRadio1").on("click", function() {
      $("#myForm1").hide('slow');
    });
    $("#yesRadio2").on("click", function() {
      $("#myForm2").toggle('slow');
    });
    $("#noRadio2").on("click", function() {
      $("#myForm2").hide('slow');
    });
    $("#yesRadio3").on("click", function() {
      $("#myForm3").toggle('slow');
    });
    $("#noRadio3").on("click", function() {
      $("#myForm3").hide('slow');
    });
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
    $("form#myForm1").submit(function(event) {
      event.preventDefault();
      var oburu = $("input[name='salonist']:checked", '#forForm').val();
      var hairStyle = parseInt($(this).find($("select#valueSelect")).val());
      var radio = $("input[name='salonist']:checked").val();
      if (radio == "yes") {
      }
      if (radio == "yes") {
        var jane = parseInt(1000);
      } else {
        jane = praseInt(0);
      }
      var totalPayment = new Styles(jane, hairStyle);
      $("p#janeCost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + jane + ". " + "Total cost is Ksh. " + totalPayment.totalCost() + ".");
      //alert("Your total cost is Ksh. " + totalPayment.totalCost());
    });
    $("form#myForm4").submit(function(event) {
      event.preventDefault();
      var mwamba = $("input[name='salonist']:checked", '#forForm').val();
      var hairStyle = parseInt($(this).find($("select#valueSelect3")).val());
      // alert(hairStyle);
      var radio = $("input[name='salonist']:checked").val();
      if (radio == "yes") {}
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
        //prompt("Enter your details in the form below")
      }
      if (radio == "yes") {
        var samson = parseInt(1000);
      }
      // alert(rosette);
      // alert(hairStyle)
      var totalPayment = new Styles(samson, hairStyle);
      // alert("Your total cost is Ksh. " + totalPayment.totalCost());
      $("p#kabcost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + samson + ". " + "Total cost is Ksh. " + totalPayment.totalCost()) + ".";
    });
    $("form#myForm6").submit(function(event) {
      event.preventDefault();
      var mweheni = $("input[name='salonist']:checked", '#forForm').val();
      var hairStyle = parseInt($(this).find($("select#valueSelect5")).val());
      // alert(hairStyle);
      var radio = $("input[name='salonist']:checked").val();
      if (radio == "yes") {
        //prompt("Enter your details in the form below")
      }
      if (radio == "yes") {
        var shantel = parseInt(900);
      }
      var totalPayment = new Styles(shantel, hairStyle);
      // alert("Your total cost is Ksh. " + totalPayment.totalCost());
      $("p#mwecost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + shantel + ". " + "Total cost is Ksh. " + totalPayment.totalCost()) + ".";
    });
    $("form#myForm2").submit(function(event) {
      event.preventDefault();
      var mwikali = $("input[name='salonist']:checked", '#forForm').val();
      var hairStyle = parseInt($(this).find($("select#valueSelect1")).val());
      var radio = $("input[name='salonist']:checked").val();
      if (radio == "yes") {
        //prompt("Enter your details in the form below")
      }
      if (radio == "yes") {
        var happiness = parseInt(1500);
      } else {
        parseInt(0);
      }
      //  alert(hairStyle);
      var totalPayment = new Styles(happiness, hairStyle);
      $("p#happinessCost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + happiness + ". " + "Total cost is Ksh. " + totalPayment.totalCost() + ".");
      //alert("Your total cost is Ksh. " + totalPayment.totalCost());
    });
    $("form#myForm3").submit(function(event) {
      event.preventDefault();
      var johns = $("input[name='salonist']:checked", '#forForm').val();
      var hairStyle = parseInt($(this).find($("select#valueSelect2")).val());
      var radio = $("input[name='salonist']:checked").val();
      if (radio == "yes") {
        //prompt("Enter your details in the form below")
      }
      if (radio == "yes") {
        var paul = parseInt(2500);
      } else {
        paul = parseInt(0);
      }
      //  alert(hairStyle);
      var totalPayment = new Styles(paul, hairStyle);
      //alert("Your total cost is Ksh. " + totalPayment.totalCost());
      $("p#paulCost").append("Cost of hairstyle is Ksh. " + hairStyle + " " + "and " + "cost of service is Ksh. " + paul + ". " + "Total cost is Ksh. " + totalPayment.totalCost() + ".");
    });
  });
