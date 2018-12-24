//新闻栏
		$("#a1").mouseover(function(){
			$("#pku_notice").css("display","block");
			$("#pku_statement").css("display","none");
			$(this).css("border-left","solid 2px #8c0000");
			$("#a2").css("border-left","solid 2px #CECECE");
		})

		$("#a2").mouseover(function(){
			$("#pku_notice").css("display","none");
			$("#pku_statement").css("display","block");
			$(this).css("border-left","solid 2px #8c0000");
			$("#a1").css("border-left","solid 2px #CECECE");
		})




//轮播大图和小图标
	    




		var index = 0;
		function pic(){
			if (index==0) {
				$(".slider").css("transform","matrix(1, 0, 0, 1, -9660, 0)");
				$(".slider").css("transition","all 3s");

				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(2)").addClass("selected");
				index++;
			}else if(index==1){
				$(".slider").css("transform","matrix(1, 0, 0, 1, -11040, 0)");
				$(".slider").css("transition","all 3s");

				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(3)").addClass("selected");
				index++;
			}else if(index==2){
				$(".slider").css("transform","matrix(1, 0, 0, 1, -12420, 0)");
				$(".slider").css("transition","all 3s");

				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(4)").addClass("selected");
				index++;
			}else if(index==3){
				$(".slider").css("transform","matrix(1, 0, 0, 1, -13800 , 0)");
				$(".slider").css("transition","all 3s");
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(5)").addClass("selected");
				index++;
			}else if(index==4){
				$(".slider").css("transform","matrix(1, 0, 0, 1, -15180 , 0)");
				$(".slider").css("transition","all 3s");
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(6)").addClass("selected");
				index++;
			}else if(index==5){

				$(".slider").css("transform","matrix(1, 0, 0, 1, -16560 , 0)");
				$(".slider").css("transition","all 3s");
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(1)").addClass("selected");
				index++;
			}

			else if(index==6){

				$(".slider").css("transform","matrix(1, 0, 0, 1, -8280 , 0)");
				$(".slider").css("transition","all 0s");
				
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(1)").addClass("selected");
				index=0;
			}
			    
		}

		clearInterval(intervalID);

  
		var intervalID=setInterval(pic,5000);



$(".slideSelectors div:eq(0)").click(function(){
			clearInterval(intervalID);
			setTimeout(function(){
				intervalID=setInterval(pic,5000);
			});
			if (index==0) {
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(6)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -6900, 0)");
				$(".slider").css("transition","all 3s");
				index=6;
				}

			else if(index==6){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(6)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -15180 , 0)");
				$(".slider").css("transition","all 0s");
				index--;
			}

			else if(index==5){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(5)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -13800, 0)");
				$(".slider").css("transition","all 3s");

				index--;
			}


			else if(index==4){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(4)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -12420, 0)");
				$(".slider").css("transition","all 3s");
				index--;
			}

			else if(index==3){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(3)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -11040, 0)");
				$(".slider").css("transition","all 3s");
				index--;
			}

			else if(index==2){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(2)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -8280, 0)");
				$(".slider").css("transition","all 3s");
				index--;
			}

			else if(index==1){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(1)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -8280 , 0)");
				$(".slider").css("transition","all 3s");
				index--;
			}
				


		
		})

		
	
$(".slideSelectors div:eq(7)").click(function(){
			clearInterval(intervalID);
			setTimeout(function(){
				intervalID=setInterval(pic,5000);
			});
			if (index==0) {
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(2)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -9660, 0)");
				$(".slider").css("transition","all 3s");
				index=1;
			}else if(index==1){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(3)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -11040, 0)");
				$(".slider").css("transition","all 3s");

				index=2;
			}else if(index==2){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(4)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -12420, 0)");
				$(".slider").css("transition","all 3s");
				index=3;
			}else if(index==3){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(5)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -13800, 0)");
				$(".slider").css("transition","all 3s");
				index=4;
			}else if(index==4){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(6)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -15180, 0)");
				$(".slider").css("transition","all 3s");
				index=5;
			}else if(index==5){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(1)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -16560 , 0)");
				$(".slider").css("transition","all 3s");
				index=6;
			}
				else if(index==6){
				$(".slideSelectors div").removeClass("selected");
				$(".slideSelectors div:eq(1)").addClass("selected");
				$(".slider").css("transform","matrix(1, 0, 0, 1, -8280 , 0)");
				$(".slider").css("transition","all 0s");
				index=0;
			}


		
		})

		

		$(".slideSelectors div:eq(1)").click(function(){
			clearInterval(intervalID);
			intervalID=setInterval(pic,5000);
			$(".slider").css("transform","matrix(1, 0, 0, 1, -8280, 0)");
			$(".slider").css("transition","all 3s");
			$(".slideSelectors div").removeClass("selected");
			$(this).addClass("selected");
			
		})

		$(".slideSelectors div:eq(2)").click(function(){
			clearInterval(intervalID);
			intervalID=setInterval(pic,5000);
			$(".slider").css("transform","matrix(1, 0, 0, 1, -9660, 0)");
			$(".slider").css("transition","all 3s");
			$(".slideSelectors div").removeClass("selected");
			$(this).addClass("selected");
		})

		$(".slideSelectors div:eq(3)").click(function(){
			clearInterval(intervalID);
			intervalID=setInterval(pic,5000);
			$(".slider").css("transform","matrix(1, 0, 0, 1, -11040, 0)");
			$(".slider").css("transition","all 3s");
			$(".slideSelectors div").removeClass("selected");
			$(this).addClass("selected");
		})

		$(".slideSelectors div:eq(4)").click(function(){
			clearInterval(intervalID);
			intervalID=setInterval(pic,5000);
			$(".slider").css("transform","matrix(1, 0, 0, 1, -12420 , 0)");
			$(".slider").css("transition","all 3s");
			$(".slideSelectors div").removeClass("selected");
			$(this).addClass("selected");
		})

		$(".slideSelectors div:eq(5)").click(function(){
			clearInterval(intervalID);
			intervalID=setInterval(pic,5000);
			$(".slider").css("transform","matrix(1, 0, 0, 1, -13800 , 0)");
			$(".slider").css("transition","all 3s");
			$(".slideSelectors div").removeClass("selected");
			$(this).addClass("selected");
		})

		$(".slideSelectors div:eq(6)").click(function(){
			clearInterval(intervalID);
			intervalID=setInterval(pic,5000);
			$(".slider").css("transform","matrix(1, 0, 0, 1, -15180 , 0)");
			$(".slider").css("transition","all 3s");
			$(".slideSelectors div").removeClass("selected");
			$(this).addClass("selected");
		})


