///**
// * Created by zelong on 2017/7/19.
// */

//   鼠标经过改变背景颜色
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
    var audio = document.getElementById("m-music-play");
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
    //禁用窗口滚动条时，无法获取滚动高度数值
    //var scrollTop = $(window).scrollTop();
    $('#fp-nav ul li a').css("display","inherit");
    $('#fp-nav ul li div').css("display","inherit");
}

//遍历写入进去本页显示侧边导航栏事件
function innerEven(){
    for(var i=2;i<=12;i=i+1){
        $( "#section" + i  ).mouseover(function(){
            displayNav();
            //alert(i);
        });
    }
}

//遍历写入电影列表海报
function innerPoster(){
    var i = 0;
    $("#section3 img").each(function(){
        $(this).attr("src", "images/d/d"+i + ".jpg");
        $(this).after("<p></p>");
        var movieNameD = new Array ("忠犬八公的故事","比海还深","八恶人","无耻混蛋","海街日记","看不见的客人","放牛班的故事","被解救的姜戈","上帝之城",
            "疯狂的石头","致命ID","不能说的秘密","阿甘正传","心灵捕手","罗曼蒂克消亡史","海蒂和她的爷爷","这个杀手不太冷","硬核亨利","低俗小说","素媛",
            "熔炉","辩护人","猜火车2","虎口脱险","霸王别姬","肖恩克的救赎","教父（系列）","绣春刀","小森林（系列）","卢旺达饭店","让子弹飞","邮差","怒",
            "V字仇杀队","海上钢琴师");
        $(this).next().text(movieNameD[i]);
        i++;
    });
    i = 0;
    $("#section5 img").each(function(){
        $(this).attr("src", "images/w/w"+i + ".jpg");
        $(this).after("<p></p>");
        var movieNameW = new Array ("从海底出击","再见列宁","窃听风暴","战争之王","黑鹰坠落","金陵十三钗","地雷区","天空之眼",
            "美国狙击手","狂怒","拆弹部队","南京！南京！","血战钢锯岭","厨子戏子痞子","珍珠港","生死狙击","辛德勒的名单","逃离德黑兰",
            "猎杀本·拉登","沃伦","高地战","豪勇七蛟龙","绿区","绝密飞行","危机13小时","赛德克巴莱","拯救大兵瑞恩","集结号","比利·林恩的中场战事","孤独的幸存者");
        $(this).next().text(movieNameW[i]);
        i++;
    });
    i = 0;
    $("#section7 img").each(function(){
        $(this).attr("src", "images/r/r"+i + ".jpg");
        $(this).after("<p></p>");
        var movieNameR = new Array ("那些年我们一起追过的女孩","HER","不能说的秘密","时空恋旅人","我脑中的橡皮擦",
            "爱在黎明破晓前","爱在日落黄昏时","爱在午夜降临前","傲慢与偏见","怦然心动","星运里的错","山楂树之恋",
            "恋空","嫌疑人X的献身","暮光之城（系列）","北京爱情故事","挪威的森林（不及书的1/2）","听说","第三十六个故事","夏洛特烦恼");
        $(this).next().text(movieNameR[i]);
        i++;
    });
    i = 0;
    $("#section9 img").each(function(){
        $(this).attr("src", "images/s/s"+i + ".jpg");
        $(this).after("<p></p>");
        var movieNameS = new Array ("2001太空漫游","人工智能","月球","水滴","地心引力","火星救援","加勒比海盗（系列）",
            "僵尸世界大战","我，机器人","雪国列车","汉江怪物","降临","普罗米修斯","疯狂麦克斯","奇异博士","后天","第九区",
            "云图","环太平洋","2012","变形金刚（系列）","蚁人","寄生兽","特种部队（系列）","泰迪熊（系列）","逆世界","异形（系列）",
            "盗梦空间","寂静岭（恐怖）","源代码","我是传奇","黑衣人（系列）","侏罗纪公园（系列）","生化危机（系列）","幽冥");
        $(this).next().text(movieNameS[i]);
        i++;
    });
    i = 0;
    $("#section11 img").each(function(){
        $(this).attr("src", "images/a/a"+i + ".jpg");
        $(this).after("<p></p>");
        var movieNameA = new Array ("千与千寻","风之谷","幽灵公主","哈尔的移动城堡","天空之城","猫的报恩","大圣归来","神偷奶爸（系列）",
            "龙猫","功夫熊猫（系列）","冰河世纪（系列）","超能陆战队","疯狂动物城","飞屋环游记","机器人总动员","驯龙高手",
            "借东西的小人阿莉埃蒂","怪兽大学","悬崖上的金鱼姬","美食总动员","侧耳倾听","波普先生的企鹅","闪电狗","起风了",
            "大闹天宫","马达加斯加（系列）","奇幻森林","哆啦A梦伴我同行","犬夜叉（系列）","猫和老鼠（系列）","海贼王（系列）","欢乐树的朋友们","赛车总动员",
            "海总动员","虫虫危机");
        $(this).next().text(movieNameA[i]);
        i++;
    });
}


$(document).ready(function(){

    //fullpage.js
    $('#fullpage').fullpage({
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage', '10thPage', 'eleventhPage','twelfthPage','LastPage'],
        menu: '#menu',
        slidesNavigation: true,

        sectionsColor: ['#333', '#FFFFF', '#ff2b53', '#eee', '#00d1b2','#eee','#D16098', '#eee','#310736', '#eee','#e81c4f', '#eee','#199475'],
//                scrollBar: true,

        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['首页', '列表', '剧情/Drama','','战争/War','','爱情/Romance','','科幻/Sci-Fi','','动画/Animation','','Contact me']
    });

    //列表加入特效事件
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

    //音乐控制按钮加入侧边导航栏正下方
    appendMusic();
    //页面加载进来不显示侧边导航栏
    moveVNav();
    //点击音乐控制按钮
    $('#m-music i').click(function(){
        stopMusic();
    });
    //添加本页不显示侧边导航栏事件
    $('#section0 ').mouseover(function(){
        moveVNav();
    });
    $('#section1 ').mouseenter(function(){
        moveVNav();
    });
    //遍历写入进去本页显示侧边导航栏事件
    innerEven();
    //遍历写入电影列表海报
    innerPoster();
});


