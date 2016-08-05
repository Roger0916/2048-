	// 初始化
	function init(){
		for(var i=0;i<4;i++){
			var arr1=new Array();
			arr[i]=arr1;
			for(var j=0;j<4;j++){
				arr[i][j]=0;
				$(".game").append('<div class="number" id="number_'+i+'_'+j+'"></div>');
				var numberBox= $("#number_"+i+"_"+j);
				numberBox.css({"left":50+j*120,"top":70+i*120});

			}
		}
	}

// 找到对应数字的颜色
	function getNumberBackgroundColor(num){
		switch(num){
			case 2:return "#eee4da";break;
	        case 4:return "#ede0c8";break;
	        case 8:return "#f2b179";break;
	        case 16:return "#f59563";break;
	        case 32:return "#f67c5f";break;
	        case 64:return "#f65e3b";break;
	        case 128:return "#edcf72";break;
	        case 256:return "#edcc61";break;
	        case 512:return "#9c0";break;
	        case 1024:return "#33b5e5";break;
	        case 2048:return "#09c";break;
	        case 4096:return "#a6c";break;
	        case 8192:return "#93c";break;

		}
	}

	// 得到一个随机2或4
	function generateOneNumber(){
		// 找到一个2或者4的随机数
		var number = Math.random() > 0.5 ? 2 : 4;
		// 找到一个内容为0的随机盒子
		while(true){
			var i = Math.floor(Math.random()*4);
			var j = Math.floor(Math.random()*4);
			if(arr[i][j]==0){
				arr[i][j]=number;
				var numberBox= $("#number_"+i+"_"+j);
				numberBox.text(number);
				numberBox.css({
					"backgroundColor":getNumberBackgroundColor(number),
					"left":20+j*120,
					"top":20+i*120,
					"width":100,
					"height":100,
					"fontSize":60+"px",
					"color":"#776E65",
					"fontWeight": "bold"
				});
				break;
			}
		}

	}

	// 是否游戏结束
	function isGameover() {
		var gameover=true
		var isEm=true;
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				if(arr[i][j]==0){
					isEm=false;
					gameover=false;
					// console.log("em:",isEm)
				}
			}
		}
		// console.log("em:",isEm)
		if(isEm){
			for(var i=1;i<3;i++){
				for(var j=0;j<4;j++){
					if(!((arr[i][j]!=arr[i+1][j])&&(arr[i][j]!=arr[i-1][j]))){
						gameover=false;
					}
				}
			}
			for(var i=0;i<4;i++){
				for(var j=1;j<3;j++){
					if(!((arr[i][j]!=arr[i][j+1])&&(arr[i][j]!=arr[i][j-1]))){
						gameover=false;
					}
				}
			}
		}
		console.log("gameover:",gameover)
		return gameover;
	}
	
	//是否胜利
	function isWin() {
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				if(arr[i][j]>=2048){
					winer();
				}
				}
			}
	}
	// 胜利
	function winer() {
		
	}