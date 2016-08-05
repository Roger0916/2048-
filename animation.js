function moveBox_1(i,j,u,flag) {
    // $("#number_"+i+"_"+j).css({"left": 20+ u*120 +"px"}).text("");
    var flag=flag;
    flag=false;
    $("#number_"+i+"_"+j).animate({"left": 20+ u*120 +"px"},500,function () {
        arr[i][u]=arr[i][j];
        arr[i][j]=0;
        $("#number_"+i+"_"+u).text(arr[i][u]);
    });

    return flag;
}
function moveBox_2(i,j,u,flag) {
    // $("#number_"+i+"_"+j).css({"left": 20+ u*120 +"px","width":0,"height":0}).text("");
    var flag=flag;
    flag=false;
    $("#number_"+i+"_"+j).animate({"left": 20+ u*120 +"px"},500,function () {
    });

    arr[i][u]=arr[i][j]*2;
    arr[i][j]=0;
    $("#number_"+i+"_"+u).text(arr[i][u]).css({"width":0,"height":0});
}