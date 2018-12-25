//导航栏
$("#nav li").mouseover(function(){
            $(this).children(".minfoWrap").css("display","block");
        })
 

$("#nav").mouseout(function(){
            $(".minfoWrap").css("display","none");
        })
//回到顶部/4
$('#gotoTop').hide();//隐藏go to top按钮
$(window).scroll(function(){
        //当window的scrolltop距离大于400px时，go to top 按钮显示
        //否则隐藏
        if($(this).scrollTop() > 400){
            $('#gotoTop').fadeIn();
        }else{
            $('#gotoTop').fadeOut();
           }
         });
$("#gotoTop").click(function(){
     $('html , body').animate({scrollTop: 0},'slow');
});