///**
// * Created by zelong on 2017/7/19.
// */

//   鼠标经过改变颜色     有点笨拙
function mTurn ( obj ){
    var mColor = obj.css("color");
//                alert(mColor);
    $('#section1').css('background',mColor);
}
//鼠标移开改变颜色消字
function mTurnOut(obj){
    $('#section1').css('background','#ffffff');
    $('.backP').text("");
}

//写入音乐图标
function appendMusic(){
    var txt = "<li id='m-music'><i class='fa fa-music fa-spin '  style='color: #00d1b2;opacity: 0.4'></i></li>";
    $('#fp-nav ul li:last').after(txt);
}
//音乐控制
function stopMusic(){
    var audio = document.getElementById("m-music-play")
    if(audio.paused==true){
        audio.play();
        $('#m-music i').attr('class',"fa fa-music fa-spin ");//旋转
    }
    else{
        audio.pause();// 暂停
        $('#m-music i').attr('class',"fa fa-music"); //暂停
    }
}

//当位于首页和导航页时不现实侧边栏导航
//不显示侧边导航
function moveVNav(){
    //$('#fp-nav ul li a').css("opacity","0");
    $('#fp-nav ul li a').css("display","none");
    $('#fp-nav ul li div').css("display","none");
    $('#fp-nav ul li:last-child').css("opacity","1");
}
//显示侧边导航
function displayNav(){
    var scrollTop = $(window).scrollTop();//禁用窗口滚动条时，无法获取滚动高度数值
    $('#fp-nav ul li a').css("display","inherit");
    $('#fp-nav ul li div').css("display","inherit");

}

//遍历写入事件
function innerEven(){
    for(var i=2;i<=10;i=i+2){
        $( "#section" + i  ).mouseenter(function(){
            displayNav();
            //alert(i);
        });
    }
}

$(document).ready(function(){
    $('#drama').mouseover(function(){
        mTurn($('#drama'));
        $('.backP').text("GOVERNMENT SHOULD BE AFRAID OF PEOPLE");
    });
    $('#drama').mouseout(function(){
        mTurnOut($('#drama'));
    });
    $('#war').mouseover(function(){
        mTurn($('#war'));
        $('.backP').text("HGM XX/7 GEWIDMENT IN DANKBARKEIT");
    });
    $('#war').mouseout(function(){
        mTurnOut($('#war'));
    });

    $('#romance').mouseover(function(){
        mTurn($('#romance'));
        $('.backP').text("YOU ARE ALWAYS THE APPLE OF MY EYE");
    });
    $('#romance').mouseout(function(){
        mTurnOut($('#romance'));
    });

    $('#sci').mouseover(function(){
        mTurn($('#sci'));
        $('.backP').text("WE WONDER AT OUR PLACE IN THE STARS");
    });
    $('#sci').mouseout(function(){
        mTurnOut($('#sci'));
    });

    $('#anim').mouseover(function(){
        mTurn($('#anim'));
        $('.backP').text("SHE FALLS ASLEEP ON THE LARGE TOTORO");
    });
    $('#anim').mouseout(function(){
        mTurnOut($('#anim'));
    });

    $('#fullpage').fullpage({
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage', '10thPage', 'eleventhPage','LastPage'],
        menu: '#menu',
        slidesNavigation: true,

        sectionsColor: ['#D2D0CB', '#FFFFF', '#ff2b53', '#eee', '#00d1b2','#eee','#D16098', '#eee','#310736', '#eee','#e81c4f', '#eee'],
//
//                scrollBar: true,

        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['首页', '列表', '剧情/Drama','','战争/War','','爱情/Romance','','科幻/Sci-Fi','','动画/Animation','']
    });

    appendMusic();
    moveVNav();

    $('#m-music i').click(function(){
        stopMusic();
    });
    $('#section0 ').mouseover(function(){
        moveVNav();
    });
    $('#section1 ').mouseenter(function(){
        moveVNav();
    });
    innerEven();
});


