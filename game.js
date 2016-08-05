$(function(){
	// 节流阀
	var index=true;
	var score=0;
	$(document).keydown(function(e){
		// console.log(e.keyCode);
		var keyCode = e.keyCode;
		if(e.keyCode===37||e.keyCode===38||e.keyCode===39||e.keyCode===40){
			console.log(index)
			if(index){
				index=false;
				switch(keyCode) {
					case 37:
					if(goLeft()){
						setTimeout(function () {
							generateOneNumber();
							isGameover();
							if(isGameover()){alert("gameover!");}
						},160);}
					break;
					case 38:
					if(goTop()) {setTimeout(function () {generateOneNumber();
						isGameover();
						if(isGameover()){alert("gameover!");}
					},160);}
					break;
					case 39:
					if(goRight()) {setTimeout(function () {generateOneNumber();
						isGameover();
						if(isGameover()){alert("gameover!");}
					},160);}
					break;
					case 40:
					if(goDown()) {setTimeout(function () {generateOneNumber();
						isGameover();
						if(isGameover()){alert("gameover!");}
					},160);}
					break;
				}

			}
		}

	});

	function goLeft(){
		var flag;
		flag = !moveLeft("left");
		setTimeout(function () {
			flesh();
			index=true;
		},160);

		return flag;
	}
	function goRight() {
		// console.log("r")
		var flag;
		flag = !moveRight("right");
		setTimeout(function () {
			flesh();
			index=true;
		},160);
		return flag;
	}
	function goTop() {
		// console.log("t")
		var flag;
		flag = !moveTop();
		setTimeout(function () {
			flesh();
			index=true;
		},160);
		return flag;
	}
	function goDown() {
		// console.log("t")
		var flag;
		flag = !moveDown();
		setTimeout(function () {
			flesh();
			index=true;
		},160);
		return flag;
	}
	// 向左移动
	function moveLeft(){
		var flag=true
		// var direction=direction;
		// 解决多个盒子合为一体的状态
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				$("#number_"+i+"_"+j)[0].indexMove=true;
			}}
		// console.log($("#number_0_0")[0].indexMove)
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				if(arr[i][j]!=0){
					outer:
					for(var u=0;u<j;u++){
						if(arr[i][u]==0){
							// $("#number_"+i+"_"+j).css({"left": 20+ u*120 +"px"}).text("");
							$("#number_"+i+"_"+j).animate({"left": 20+ u*120 +"px"},150,function () {
							});
							arr[i][u]=arr[i][j];
							arr[i][j]=0;
							flag=false;
							// $("#number_"+i+"_"+u).text(arr[i][u]);
							// flag=moveBox_1(i,j,u,flag);
							break outer;
						}else{
							var kong=true;
							for(var k=u+1;k<j;k++){
								if(arr[i][k]!=0){
									kong=false;
								}
							}
							if(kong){
								if(arr[i][u]==arr[i][j]){
									if($("#number_"+i+"_"+u)[0].indexMove){
									// $("#number_"+i+"_"+j).css({"left": 20+ u*120 +"px","width":0,"height":0}).text("");
									$("#number_"+i+"_"+j).animate({"left": 20+ u*120 +"px"},150,function () {
									});
									arr[i][u]=arr[i][j]*2;
									arr[i][j]=0;
									score+=arr[i][u];
									flag=false;
									// $("#number_"+i+"_"+u).css({"width":0,"height":0});
									// flag=moveBox_2(i,j,u,flag)
										$("#number_"+i+"_"+u)[0].indexMove=false;
									break outer;}
								}
							}
						}
					}
				}
			}
		}
		return flag;
	}
	//向右移动
	function moveRight(){
		var flag=true
		// var direction=direction;
		// 解决多个盒子合为一体的状态
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				$("#number_"+i+"_"+j)[0].indexMove=true;
			}}
		for(var i=0; i<4; i++){
			for(var j=3; j>=0; j--){
				if(arr[i][j]!=0){
					outer:
						for(var u=3;u>j;u--){
							if(arr[i][u]==0){
								// $("#number_"+i+"_"+j).css({direction: 20+ u*120 +"px"}).text("");
								$("#number_"+i+"_"+j).animate({"left": 20+ u*120 +"px"},150,function () {
								});
								arr[i][u]=arr[i][j];
								arr[i][j]=0;
								flag=false;
								// $("#number_"+i+"_"+u).text(arr[i][u]);
								break outer;
							}else{
								var kong=true;
								for(var k=u-1;k>j;k--){
									if(arr[i][k]!=0){
										kong=false;
									}
								}
								if(kong){
									if(arr[i][u]==arr[i][j]){
										if($("#number_"+i+"_"+u)[0].indexMove){
										// $("#number_"+i+"_"+j).css({direction: 20+ u*120 +"px"}).text("");
										$("#number_"+i+"_"+j).animate({"left": 20+ u*120 +"px"},150,function () {
										});
										arr[i][u]=arr[i][j]*2;
										arr[i][j]=0;
										score+=arr[i][u];
										flag=false;
										// $("#number_"+i+"_"+u).css({"width":0,"height":0});
											$("#number_"+i+"_"+u)[0].indexMove=false;
										break outer;}
									}
								}
							}
						}
				}
			}
		}
		return flag;
	}
	// 向上移动
	function moveTop(){
		var flag=true
		// var direction=direction;
		// 解决多个盒子合为一体的状态
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				$("#number_"+i+"_"+j)[0].indexMove=true;
			}}
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				if(arr[i][j]!=0){
					outer:
						for(var u=0;u<i;u++){
							if(arr[u][j]==0){
								// $("#number_"+i+"_"+j).css({direction: 20+ u*120 +"px"}).text("");
								$("#number_"+i+"_"+j).animate({"top": 20+ u*120 +"px"},150,function () {
								});
								arr[u][j]=arr[i][j];
								arr[i][j]=0;
								flag=false;
								// $("#number_"+u+"_"+j).text(arr[u][j]);
								break outer;
							}else{
								var kong=true;
								for(var k=u+1;k<i;k++){
									if(arr[k][j]!=0){
										kong=false;
									}
								}
								if(kong){
									if(arr[u][j]==arr[i][j]){
										if($("#number_"+u+"_"+j)[0].indexMove){
										// $("#number_"+i+"_"+j).css({direction: 20+ u*120 +"px"}).text("");
										$("#number_"+i+"_"+j).animate({"top": 20+ u*120 +"px"},150,function () {
										});
										arr[u][j]=arr[i][j]*2;
										arr[i][j]=0;
										score+=arr[u][j];
										flag=false;
										// $("#number_"+u+"_"+j).text(arr[u][j]);
											$("#number_"+u+"_"+j)[0].indexMove=false;
										break outer;}
									}
								}
							}
						}
				}
			}
		}
		return flag;
	}
	// 向下移动
	function moveDown(){
		var flag=true
		// var direction=direction;
		// 解决多个盒子合为一体的状态
		for(var i=0; i<4; i++){
			for(var j=0; j<4; j++){
				$("#number_"+i+"_"+j)[0].indexMove=true;
			}}
		for(var i=3; i>=0; i--){
			for(var j=3; j>=0; j--){
				if(arr[i][j]!=0){
					outer:
						for(var u=3;u>i;u--){
							if(arr[u][j]==0){
								// $("#number_"+i+"_"+j).css({direction: 20+ u*120 +"px"}).text("");
								$("#number_"+i+"_"+j).animate({"top": 20+ u*120 +"px"},150,function () {
								});
								arr[u][j]=arr[i][j];
								arr[i][j]=0;
								flag=false;
								// $("#number_"+u+"_"+j).text(arr[u][j]);
								break outer;
							}else{
								var kong=true;
								for(var k=u-1;k>i;k--){
									if(arr[k][j]!=0){
										kong=false;
									}
								}
								if(kong){
									if(arr[u][j]==arr[i][j]){
										if($("#number_"+u+"_"+j)[0].indexMove){
										// $("#number_"+i+"_"+j).css({direction: 20+ u*120 +"px"}).text("");
										$("#number_"+i+"_"+j).animate({"top": 20+ u*120 +"px"},150,function () {
										});
										arr[u][j]=arr[i][j]*2;
										arr[i][j]=0;
										score+=arr[u][j];
										flag=false;
										// $("#number_"+u+"_"+j).text(arr[u][j]);
											$("#number_"+u+"_"+j)[0].indexMove=false;
										break outer;}
									}
								}
							}
						}
				}
			}
		}
		return flag;
	}

	// 刷新
	function flesh(){;
		for(var i=0;i<4;i++){
			for(var j=0;j<4;j++){
				var numberBox= $("#number_"+i+"_"+j);
				if(arr[i][j]!=0){
					var number=arr[i][j];
					numberBox.text(number);
					numberBox.css({
						"backgroundColor":getNumberBackgroundColor(number),
						"width":100,
						"height":100,
						"left": 20+j*120+"px",
						"top": 20+i*120+"px",
						"fontSize":60+"px",
						"color":"#fff",
						"fontWeight": "bold"
							}).text(number);
						// flag=false;
					if(arr[i][j]<8){
						numberBox.css("color","#776E65");
					}else if(arr[i][j]>512){
						numberBox.css("fontSize","45px");
					}
					
				}else{
					numberBox.css({
						"width":0,
						"height":0,
						"left": 50+j*120+"px",
						"top": 70+i*120+"px"
					}).text("");
				}
			}
		}
		// console.log(score)
		$("p span")[0].innerHTML=score;
		// return flag;
	}

   // 外挂
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			$("#number_"+i+"_"+j).on("click",function () {
				// arr[i][j]=0;
				var numberId=this.id.replace("number_","")
				console.log(numberId[0])
				var i=numberId[0];
				var j=numberId[2];
				arr[i][j]=0;
				flesh();
			})
		}
	}


});