

$("input").on("focus blur",function(e){
    if(e.type=="focus"){
        $(this).css("background-color","#CCD6DD");
    }
    else $(this).css("background-color", "white");
});

$("input[type='radio'][name='grupa1']").change(function(){
    if($("#opcija2").is(":checked")){
        $("#bivsiSport").show();
    }
    else $("#bivsiSport").hide();
})

// RAZLIKA IZMEDJU VAL I LET
$(".forma").submit(function(e){
    var polje= $("#broj").val();
    if (!/^\d*$/.test(polje)) {
        alert("Polje za broj možete popuniti isključivo ciframa");
        e.preventDefault();
        $("#broj").val("");
    }
    else{
        
        let imePr= $("input[id = 'Ime']").val();
        let telefon= $("input[type='tel']").val(); //kao innerHTML u js
        let email= $("input[type= 'email']").val();
        let vreme=$("#probnitr").val();
        if($("#opcija2").is(":checked")){
            var sport="Trenirali ste "+$("#bivsiSport").val();
        }
        else var sport="Niste trenirali borilački sport ranije";

        confirm("Uneti podaci su: \n" + "Email: "+email + "\nIme i Prezime: "+ imePr+ "\nBroj telefona: "+ telefon+ 
        "\n" + sport + "\nProbni trening je zakazan za "+ vreme);
        alert("Hvala na prijavi, VIDIMO SE USKORO! \nMMA tim PRINCIP")
        
    }
});








