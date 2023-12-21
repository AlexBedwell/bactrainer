

/*this is a program that will help train new bankers to count chips for bacarat. 
the general premise is that a number will be generated based off one of the 3 difficutlies chosen.
that random number is then multiplied by one of the three bonuses: tie(x8), panda(x15), or dragon(x40).
*/
window.onload = function() {
};

let arr1=[];
$("#random-intro").click(function(){
    $("#gen-number").empty();
    $("#total-num").empty();

    let introX = Math.floor((Math.random()*400)+25);
    if(introX > 400){
        introX -= 25;
    }
    $("#gen-number").append(introX);
})
$("#random-mid").click(function(){
    $("#gen-number").empty();
    $("#total-num").empty();

    let midX = Math.floor((Math.random()*900)+213);
    if(midX > 900){
        midX -= 213;
    }
    console.log(midX);
    $("#gen-number").append(midX);
})
$("#random-hard").click(function(){
    $("#gen-number").empty();
    $("#total-num").empty();

    let hardX = Math.floor((Math.random()*6000)+600);
    if(hardX > 6000){
        hardX -= 600;
    }
    $("#gen-number").append(hardX);
})



$("#tie").click(function(){

   $("#total-num").empty();
   let tempnumb = $("#gen-number").text();
   let tieTotal = tempnumb * 8;
   console.log(tieTotal);
   $("#total-num").append(tieTotal);
   arr1.unshift(tempnumb + " TIE is " +  $("#total-num").text() );
   console.log(arr1);
   history();

})
$("#panda").click(function(){
    $("#total-num").empty();
    let tempnumb = $("#gen-number").text();
    let pandaTotal = tempnumb * 25;
    $("#total-num").append(pandaTotal);
    arr1.unshift(tempnumb + " PANDA is " +  $("#total-num").text() );
    console.log(arr1);
    history();

 })
 $("#dragon").click(function(){
    $("#total-num").empty();
    let tempnumb = $("#gen-number").text();
    let dragonTotal = tempnumb * 40;
    $("#total-num").append(dragonTotal);
    arr1.unshift(tempnumb + " DRAGON is " +  $("#total-num").text() );
    console.log(arr1);
    history();

 })
  

$("#hide-num").click(function(){
    $("#total-num").toggle();
})



$("#history").click(function(){
        $("#hist").toggle("fast");
    
    })
function history(){

    for(i = 0; i<= 4; i++){
        if(arr1[i] ===""){ $("#past"+(i+1)).prepend(arr1[i]);}
        else{
            $("#past"+(i+1)).empty();
            $("#past"+(i+1)).prepend(arr1[i]);
 
        }
    }
}
function temp (){
    $("#hist").slideDown();
}