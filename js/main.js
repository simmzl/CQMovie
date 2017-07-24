///**
// * Created by zelong on 2017/7/19.
// */
//        有点笨拙
function mTurn ( obj ){
    var mColor = obj.css("color");
//                alert(mColor);
    $('#section1').css('background',mColor);
}
function mTurnOut(obj){
    $('#section1').css('background','#ffffff');
}

$(document).ready(function(){
    $('#drama').mouseover(function(){
        mTurn($('#drama'));
    });
    $('#drama').mouseout(function(){
        mTurnOut($('#drama'));
    });

    $('#war').mouseover(function(){
        mTurn($('#war'));
    });
    $('#war').mouseout(function(){
        mTurnOut($('#war'));
    });

    $('#romance').mouseover(function(){
        mTurn($('#romance'));
    });
    $('#romance').mouseout(function(){
        mTurnOut($('#romance'));
    });

    $('#sci').mouseover(function(){
        mTurn($('#sci'));
    });
    $('#sci').mouseout(function(){
        mTurnOut($('#sci'));
    });

    $('#anim').mouseover(function(){
        mTurn($('#anim'));
    });
    $('#anim').mouseout(function(){
        mTurnOut($('#anim'));
    });
});