/**
 * jq.toast - 消息提示插件   jquery版本
 * Copyright 2012 - sherlock2013
 * type  类级
 */
;(function($) {

 // 函数名称
 $.toast = function() {
  // 私有函数
  var privateFn = {
   init : function(options) {
    // 覆盖设置
    $.toast.options = $.extend({},$.toast.options, options);
    //初始化创建元素
    var dom = $('<div class="afToast afToastBm " id="afToast"></div>');
    var textDom = $('<div class="afToastText"></div>');
    var imgDom = $('<div class="afToastImg afToastTip"></div>');
    dom.append(textDom);
    $("body").append(dom);
   },
   
   changeImg : function(dom,imgPos){
   		var imgDom = dom.find(".afToastImg");
   		var textDom =  dom.find(".afToastText");
   		dom.html("");
   		if(imgPos == "top"){
    		dom.append(imgDom).append(textDom);
    	}
    	else if(imgPos == "left"){
    		imgDom = '<div class="afToastImgInline afToastTip"></div>';
    		dom.append(imgDom).append(textDom);
    	}
    	else if(imgPos == "right"){
    		imgDom = '<div class="afToastImgInline afToastTip"></div>';
    		dom.append(textDom).append(imgDom);
    	}
    	else if(imgPos == "bottom"){
    		dom.append(textDom).append(imgDom);
    	}
   }
   
  
  };

  // 判断是 构造函数 || 调用方法
  var method = arguments[0];
  var array;
  if (publicFn[method]) {
   method = publicFn[method];
   array = Array.prototype.slice.call(arguments, 1);
  } else if (typeof (method) == 'object' || !method) {
   method = privateFn.init;
  } else {
   $.error('Method ' + method
       + ' does not exist on $.toast');
   return this;
  }
  
  return method.apply(this, array);

 };

 // 暴露方法
 var publicFn = {
  getOptions : function() {
   console.log($.fn.toast.options);
  },
  show : function(content,delay,pos,callBack){
  	  var delay = delay || $.toast.options.delay;
  	  var dom = $($.toast.options.id);
  	  dom.find(".afToastText").html(content);
  	  if(pos){
  	  	  var pos   = pos || $.toast.options.pos;
  	  	  publicFn.changePos(dom,pos);
  	  }
  	  
  	  An.toast(dom,delay,$.toast.options.inTime,$.toast.options.outTime,callBack);
  },
   changePos : function(dom,pos){
   		if(pos == "bm"){
   			dom.removeClass("afToastTm").addClass("afToastBm");
   		}
   		else if(pos == "tm"){
   			dom.removeClass("afToastBm").addClass("afToastTm");
   		}
   }
 };
 
 var An = {
 	toast  : function(dom,delay,inTime,outTime,callBack){
		dom.fadeIn(inTime,function(){
			setTimeout(function(){
				dom.fadeOut(outTime,callBack);
			},delay);
		});
	}
	
 };
 
 // 默认设置
 $.toast.options = {
 	id	 : "#afToast",
 	pos    : "bm",//显示位置
  	inTime : 500,  	  //淡入时间	
  	outTime : 800,    //淡出时间
  	delay   : 2000    //显示2.0秒
 };
//进行初始化
$.toast();
})(jQuery);


