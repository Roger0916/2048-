
	var arr=new Array();
$(function (){

	var boxColor=[];
	init();
	newGame();
	$(".newGame").on("click", function(){
		newGame();
	});
	// 初始化新游戏
	function newGame() {
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				arr[i][j]=0;
				var numberBox= $("#number_"+i+"_"+j);
				numberBox.css({"left":50+j*120,"top":70+i*120,"width":0,"height":0}).text("");
			}
		}
		generateOneNumber();
		generateOneNumber();
	}



});