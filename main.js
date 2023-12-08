

/*this is a program that will help train new bankers to count chips for bacarat. 
the general premise is that a number will be generated based off one of the 3 difficutlies chosen.
that random number is then multiplied by one of the three bonuses: tie(x8), panda(x15), or dragon(x40).
*/
window.onload = function() {
 
};
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
})
$("#panda").click(function(){
    $("#total-num").empty();
    let tempnumb = $("#gen-number").text();
    let pandaTotal = tempnumb * 25;
    $("#total-num").append(pandaTotal);
 })
 $("#dragon").click(function(){
    $("#total-num").empty();
    let tempnumb = $("#gen-number").text();
    let dragonTotal = tempnumb * 40;
    $("#total-num").append(dragonTotal);
 })
  
