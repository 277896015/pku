
//首页logo变色
$(".logo").mouseover(function(){
    $(".logo img").attr("src","./img/pkulogo_grey.png");
})
$(".logo").mouseout(function(){
    $(".logo img").attr("src","./img/pkulogo_white.png");
})
//搜索图标变色
$(".subNavRight img").mouseover(function(){
    $(".subNavRight img").attr("src","./img/chazhao2.png");
})
$(".subNavRight img").mouseout(function(){
    $(".subNavRight img").attr("src","./img/chazhao1.png");
})



//微信分享二维码显示

        $("#wechat").hover(function(){
            $("div#wechats").css("top","105px");
            $("div#wechats").fadeIn();
        },function(){
            $("div#wechats").fadeOut();
        });
       

        var flag =-1;
    //回到顶部/4
       $('#gotoTop').hide();//隐藏go to top按钮
 
         $(window).scroll(function(){
           
             //当window的scrolltop距离大于500px时，go to top 按钮显示
             //否则隐藏
            if($(this).scrollTop() > 500){
                 $('#gotoTop').fadeIn();
            }else{
                 $('#gotoTop').fadeOut();
             }
         });

       $("#gotoTop").click(function(){
             $('html , body').animate({scrollTop: 0},'slow');
         });
//展开搜索框

$("#form_Search_a").click(function(){

    if (flag==-1) {
        $(".searchDIV").css("display","block");
    }
    else
    {
        $(".searchDIV").css("display","none");
            
    }
flag=-flag;
})



 //导航栏切换
 $("#nav li").mouseover(function(){
            $(this).children(".minfoWrap").css("display","block");
        })
 

$("#nav").mouseout(function(){
            $(".minfoWrap").css("display","none");
        })
 


//北大概况小导航栏红线

$(".secNav li").mouseover(function(){
        var index =$(".secNav li").index($(this));
        $("#magic-line").css("left",index*76+"px");
        $("#magic-line").css("transition","all 0.5s");
    }).mouseout(function(){
        $("#magic-line").css("left","0px");
    })
  