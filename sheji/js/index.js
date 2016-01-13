

	// 绑定事件和方法及元素
  var EventUtil = {
           addHandler: function(element, type, handler) {
              if (element.addEventListener) {
                  element.addEventListener(type, handler, false);
              } else if (element.attachEvent) {
                  element.attachEvent("on" + type, handler);
              } else {
                  element["on" + type] = handler;
              }
          },
          getEvent:function(event){
          	return event?event :window.event;
          },
          getTarget:function(event){
          	return event.target||event.srcElement;
          },
          preventDefault:function(event){
          	if(event.preventDefault){
          		event.preventDefault();
          	}else {
          		event.returnValue = false;
          	}
          },
          // 相关元素
          getRelatedTarget:function(event){
          	if(event.relatedTarget){
          		return event.relatedTarget;
          	}else if(event.toElement){
          		return event.toElement;
          	}if(event.fromElement){
          		return event.fromElement;
          	}else{
          		return null;
          	}
          },

          removeHandler: function(element, type, handler) {
              if (element.removeEventListener) {
                  element.removeEventListener(type, handler, false);
              } else if (element.detachEvent) {
                  element.detachEvent("on" + type, handler);
              } else {
                  element["on" + type] = null;
              }
          }
         
      }
$(".imgDiv").click(function(){
	var t =$(this);
	var flag = Number(t.parents(".box").attr("status"));
	if(flag===0){
		t.parents(".box").attr("status",1)
	var t_ele = t.find(".total_s");
	var t_elew = t.find(".total");
	var s_ele= t.siblings().find(".total_s");
	var s_elew= t.siblings().find(".total");
  var total_span = t.find(".total_span");
  var total_span_s=t.siblings().find(".total_span");
	var t_num = Number(t_ele.val())+1;
	var s_num =Number(s_ele.val())
	t_ele.text(t_num);
	var proportion_t = t_num/(t_num+s_num)*100;
	var proportion_s = s_num/(t_num+s_num)*100;
	t_elew.css({"height":proportion_t+"%"})
	s_elew.css({"height":proportion_s+"%"})
  this_bili = Math.ceil(proportion_t)
  other_bili= Math.ceil(proportion_s)

  total_span.html(this_bili+"%");
  total_span_s.html(other_bili+"%")
  // 总票数+1
  var totality =Number($("#totality").text())+1;
  $("#totality").text(totality);
	$(".filter").show();
}else{
	return false;
}
})
	
