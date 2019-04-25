//调用的时候,传入要渲染的参数数组, 传入图标路径
//jq插件

import $ from 'jquery'
(function () {
    var obj = {
        init(opt) {
            //把可能传递的参数,初始化
            this.rowNum = opt.rowNum || 5;
            this.nowItem = opt.nowItem || this.items[0].name || '';
            this.nowItemImg = opt.nowItemImg || '';
            this.list = opt.items;
            this.father = opt.father;
            this.createDom();
            this.bindEvent();
        },
        //创建dom结构
        createDom() {
            var wrap = $('<div class="wrap"></div>');
            var nowarea = $('<div class="nowarea"></div>');
            var areaList = $('<div class="areaList"></div>');
            //如果传入了图标路径
            if (this.nowItemImg) {
                var img = new Image();
                img.src = this.nowItemImg;
                img.onload = function () {
                    nowarea.append(img);
                }
            }
            $('<span></span>').html(this.nowItem).appendTo(nowarea)
          
            //循环数组,创建arealist下面的标签
            var areaitem;
            this.list.forEach((ele, index) => {
                areaitem = $('<div class="areaitem"></div>');
                areaitem.append($(`<a href="${ele.href}">${ele.name}</a>`))
                        .appendTo(areaList)
            })
            wrap.append(nowarea).append(areaList)  
            this.father.append(wrap)
            //这个css样式要在最后写,等结构都添加完了,才可以取到他们

            $('#location .areaList').css({
                "width":$('.areaitem').innerWidth() *this.rowNum +'px'
            })
            // areaList.css({ 'width': 90 * this.rowNum + 'px' })

        },
        //绑定事件
        bindEvent() {
            //因为创建dom结构是在绑定事件之前,所以现在可以取到这些结构了
            $('#location .wrap').hover(function(){
                $('.areaList').css('display','block')
            },function(){
                $('.areaList').css({'display':'none'})
            })
            $('.areaList').on('click','.areaitem',function(e){
                $('.area-active').removeClass('area-active')
                $(this).addClass('area-active')
                $('.nowarea span').text($('.area-active').find('a').text())
            })
        }
    }
    $.fn.extend({
        areaList: function (option) {
            //这里的this ,谁调用这个函数,就指的谁,也就是调用这个扩展方法的jq对象
            option.father = this;
            obj.init(option)
        }
    })




})()

















