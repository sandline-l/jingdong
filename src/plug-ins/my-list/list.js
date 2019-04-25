
//下拉列插件
//可以传入方向,x轴还是y轴排列,  一个组里面,放几列, 是否有标题
//不限定父级元素,

import $ from 'jquery'
(function () {

    function List(opt) {
        this.dirction = opt.dirction;
        this.colNum = opt.colNum;
        this.menuList = opt.menuList;
        this.parent = opt.parent;
        this.len = this.menuList.length;
        this.createDom();

        this.bindEvent();
    }

    List.prototype.createDom = function () {
        //创建最外层下拉框
        var dropCont = $('<div class="dropCont"></div>')
        //创建次外层框
        var dropDowncon = $('<div class="dropDowncon"></div>')
        //第一层循环,创建多少个组
        this.menuList.forEach((ele, index) => {
            // console.log(ele.items) //这是每一组里面的itemlist数据
            //创建组
            var menu = $('<div class="nav-menu"></div>')
            //创建itemlist ,组里面的
            var itemlist = $('<div class="itemlist"></div>')
            //如果有标题,就创建标题
            if (ele.title) {
                $(`<div class="droptitle">${ele.title}</div>`).appendTo(menu)
            }
            //第二层循环创建每一个itemlist里面的item项
            ele.items.forEach((ele2, index) => {
                var str = `<a href="${ele2.href}">${ele2.name}</a>`;
                //每一项的外层结构里面插入a标签,然后将他们插入itemlist了里面
                $('<div class="nav-item"></div>').append($(str))
                    .appendTo(itemlist)
            })
            //将他们插入到结构中
            menu.append(itemlist);
            dropDowncon.append(menu)
        })
        dropDowncon.appendTo(dropCont);
        this.parent.append(dropCont);

        this.setCss();
    }

    //设置样式
    List.prototype.setCss = function () {
        //注意设置样式的先后顺序, 因为里面涉及到一些值的计算,
        //所以基本结构,小结构的样式要放在最前面,大结构的计算是依托于小结构的
        //设置item的样式
        $('.nav-item', this.parent).css({
            "width": '100px',
            "height": '30px',
            'line-height': '30px',
            'display': 'inline-block',
            'padding': '5px',
        })
        //设置title的样式
        $('.droptitle',this.parent).css({
            'padding':'0 5px',
            'color':'#333',
        })
        //设置item 下面a标签的样式
        $('.nav-item', this.parent).find('a').css({
            'color': '#999',
            'display': 'inline-block',
            'width': '100%',
            'height': '100%',
        })
        //设置itemlist的样式
        $('.itemlist', this.parent).css({
            'width': $('.nav-item', this.parent).innerWidth() * this.colNum + 'px',
        })
        // //设置下拉框最外层样式
        // $('.dropCont', this.parent).css({
        //     'z-index': '100',
        //     'background-color': '#fff',
        //     'position': 'absolute',
        //     'display': 'none'
        // })
        //设置下拉框次外层样式
        $('.dropDowncon', this.parent).css({
            'padding': '10px 0 0 10px',
        })
        //判断是x,还是y轴渲染
        if (this.dirction == 'y') {
            //设置nav-menu的样式
            $('.nav-menu', this.parent).css({
                'border-bottom': '1px solid #999',
                'display': 'block',
            })
            //设置下拉框最外层样式
            $('.dropCont', this.parent).css({
                'left': '0px',
            })
        } else {
            //设置nav-menu的样式
            $('.nav-menu', this.parent).css({
                'border-right': '1px solid #999',
                'display': 'inline-block',
            })
            //设置下拉框次外层样式
            $('.dropDowncon', this.parent).css({
                'width': $('.nav-menu', this.parent).outerWidth() * this.len + 'px',
            })
            //设置下拉框最外层样式
            $('.dropCont', this.parent).css({
                'right': '0px'
            })
        }
         //设置下拉框最外层样式
         $('.dropCont', this.parent).css({
            'z-index': '100',
            'background-color': '#fff',
            'position': 'absolute',
            'display': 'none'
        })
    }

    List.prototype.bindEvent = function () {
        var self = this;
        $(this.parent).hover(function(){
            $('.dropCont',self.parent).show();
        },function(){
            $('.dropCont',self.parent).hide();
        })
        $('.dropCont',this.parent).find('a').hover(function(){
            $(this).css({
                'color':'red'
            })
        },function(){
            $(this).css({
                'color':'#999'
            })
        })
    }



    $.fn.extend({
        //拓展的方法是itemList,
        dropList: function (option) {
            option.parent = this;
            new List(option);
            return this;

        }
    })
})()



