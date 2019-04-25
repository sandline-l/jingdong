import './index.less';
import './plug-ins/carousel/carousel.css';
import './plug-ins/carousel/carousel.js';

import  $ from 'jquery';
//js文件里,引入img图片资源
let img1 = require('./image/pic1.jpg');
let img2 = require('./image/pic2.jpg');
let img3 = require('./image/pic3.jpg');
//使用轮播图插件
$('#swiper').sliderImg({
    image:[img1,img2,img3],
    interVal:2000
})
//侧面导航栏动画
$('.aside-bar').find('li').on('mouseenter',function(e){
    var index = $(this).attr("data-index");
    // console.log($('.aside-bar-under').find('#data'+ index))
    $('.aside-bar-under').css({'display':'block'});
    $('.aside-bar-under').find('#data'+ index)
        .css({'display':'block'})
        .siblings().css({'display':'none'})
}).on('mouseleave',function(){
    $('.aside-bar-under').css({'display':'none'});
})

$('.aside-bar-under').on('mouseenter',function(){
    $(this).css({'display':'block'});
}).on('mouseleave',function(){
    $(this).css({'display':'none'});
})

//充值动画
$('.charge-up').find($('li[id]')).hover(function(){
    var id = $(this).attr('id');
    //滑入和滑出
    $('.charge-up').slideUp()
    $('.charge-down').slideDown()
    //加类名
    $('.item-'+id).addClass('active')
    //展示对应的内容区
    $('.down-item-'+id).show().siblings().hide()

},function(){

})
//在头菜单上滑动,改变样式,和下面对应内容区的展示
$('.charge-down-header li').on('mouseenter',function(){
    $('li.active').removeClass('active');
    $(this).addClass('active');

    var index = $('.charge-down-header li').index($(this));
    $('.down-item').eq(index).show().siblings().hide();
})

//关闭按钮
$('.charge-down .close').on('click',function(){
    $('.charge-up').slideDown()
    $('.charge-down').slideUp()
})



let local = require('./image/local.jpg');
import './plug-ins/my-area/area.less'
import './plug-ins/my-area/area.js'
//使用area插件

$('#location').areaList({
    items: [{
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '北京',
        href: '#',
    }, {
        name: '上海',
        href: '#',
    }, {
        name: '黑龙江',
        href: '#',
    }, {
        name: '天津',
        href: '#'
    }, {
        name: '重庆',
        href: '#',
    }, {
        name: '河北',
        href: '#'
    }, {
        name: '河北',
        href: '#'
    }],
    // 每一行显示城市数量
    rowNum: 5,
    // 默认显示值
    nowItem: '北京',
    // 显示图片  图标
    nowItemImg: local
})


//使用list插件,导航条下拉列表插件

import './plug-ins/my-list/list'


$(".my-jingdong").dropList({
    dirction: 'y',
    colNum: 2,
    menuList: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        },
        ],
    }]
})


// x 横向 
$('.web-nav').dropList({
    // 下拉列表里面每一块的排布是横向横向（y）, 纵向（x）
    direction: 'x',
    colNum: 2,
    // 下拉列表内的内容
    menuList: [{
        // 每块的标题
        title: '特色',
        // 每块的宽度
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
        // 每块每行的选项列数
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }, {
        title: '特色',
        items: [{
            name: '企业购',
            href: '#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href: '#'
        }],
    }]
});