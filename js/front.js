if( window.console == undefined ){ console = { log : function(){} }; }
/** browser checker **/
var touchstart = "ontouchstart" in window;
var focusGlobalItem = "a,button,textarea,input[type='button'],input[type='image'],input[type='input'],input[type='password'],input[type='checkbox'],input[type='radio'],select,[tabindex]";
var userAgent=navigator.userAgent.toLowerCase();
;(function($){$.browserTest=function(a,z){var u='unknown',x='X',m=function(r,h){for(var i=0;i<h.length;i=i+1){r=r.replace(h[i][0],h[i][1]);}return r;},c=function(i,a,b,c){var r={name:m((a.exec(i)||[u,u])[1],b)};r[r.name]=true;r.version=(c.exec(i)||[x,x,x,x])[3];if(r.name.match(/safari/)&&r.version>400){r.version='2.0';}if(r.name==='presto'){r.version=($.browser.version>9.27)?'futhark':'linear_b';}r.versionNumber=parseFloat(r.version,10)||0;r.versionX=(r.version!==x)?(r.version+'').substr(0,1):x;r.className=r.name+r.versionX;return r;};a=(a.match(/Opera|Navigator|Minefield|KHTML|Chrome/)?m(a,[[/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/,''],['Chrome Safari','Chrome'],['KHTML','Konqueror'],['Minefield','Firefox'],['Navigator','Netscape']]):a).toLowerCase();$.browser=$.extend((!z)?$.browser:{},c(a,/(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,[],/(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/));$.layout=c(a,/(gecko|konqueror|msie|opera|webkit)/,[['konqueror','khtml'],['msie','trident'],['opera','presto']],/(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/);$.os={name:(/(win|mac|linux|sunos|solaris|iphone)/.exec(navigator.platform.toLowerCase())||[u])[0].replace('sunos','solaris')};if(!z){$('html').addClass([$.os.name,$.browser.name,$.browser.className,$.layout.name,$.layout.className].join(' '));}};$.browserTest(navigator.userAgent);})(jQuery);//http://jquery.thewikies.com/browser/
$(function(){
	dimLayerControl();
	tabFunc();
});
document.addEventListener("DOMContentLoaded", function () {
    mbTotal();
});
$(window).on("load",function(){

});

function menurock(target){
	$(function(){
		var target_obj = $(target);
		if(target_obj.length){
			target_obj.addClass("active");
		}
	});
}

function maxHeightFunc(target){
	this.$target = $(target);
	this.maxHeight = [];
	
	$(window).on("resize",function(){
		
		action();
	}).resize();

	function action(){
		var objThis = this;
		if(this.$target.length){
			this.$target.css({"height":""});
			if($(window).width()>1023){

			}else{
				this.$target.css({"height":""});
				return;
			}
			
			this.$target.each(function(){
				objThis.maxHeight.push($(this).outerHeight());
			});
			this.$target.css({"height" : Math.max.apply(null,objThis.maxHeight)})
		}
	}
}

function heightFunc(target){
	this.$target = $(target);
	this.maxHeight = [];
	
	$(window).on("resize",function(){
		
		action();
	}).resize();

	function action(){
		var objThis = this;
		if(this.$target.length){
			this.$target.css({"height":""});
			
			this.$target.each(function(){
				objThis.maxHeight.push($(this).outerHeight());
			});
			this.$target.css({"height" : Math.max.apply(null,objThis.maxHeight)})
		}
	}
}

function tabFunc(target){
	$(function(){
		$(target).on("click",function(e){
			e.preventDefault();
			var $this = $(this);
			var $t_t = $($this.attr("href"));
			if($t_t.length){
				$this.parent("li").siblings().children().removeClass("active");
				$this.addClass("active");
				$t_t.siblings().hide();
				$t_t.show();
			}
		});
	});
}

function mbTotal(){
	var btn_htotal = document.querySelector(".btn_totalcall"),
		mobile_mainmenu_zone = document.querySelector(".aside_menu_respon_zone"),
		mainmenu_dim = document.querySelector(".aside_dim"),
		btn_mbmenuclose = document.querySelector(".btn_mbmenuclose"),
		domHtml = document.querySelector("html"),
		domBody = document.querySelector("body");

	// init 
	if(mobile_mainmenu_zone === null){return;}
	btn_htotal.addEventListener("click",function(e){
		e.preventDefault();
		totalOpen();
	},false);
	// btn_mbmenuclose.addEventListener("click",function(e){
	// 	e.preventDefault();
	// 	totalClose();
	// },false);
	window.addEventListener("resize",function(){
		if(window.innerWidth>1023){
			if(mobile_mainmenu_zone.classList.contains("active")){
				totalClose();
			}
		}
	},false);
	mainmenu_dim.addEventListener("click",function(e){
		e.preventDefault();
		totalClose();
	},false);
	function totalOpen(){
		mobile_mainmenu_zone.classList.add("active")
		setTimeout(function(){
			mobile_mainmenu_zone.classList.add("motion");
			domBody.setAttribute("data-scr", window.pageYOffset);
			domBody.style.marginTop = -window.pageYOffset + "px";
			domHtml.classList.add("touchDis");
		},30);
	}
	function totalClose(){
		mobile_mainmenu_zone.classList.remove("motion");
		setTimeout(function(){
			mobile_mainmenu_zone.classList.remove("active");
			domHtml.classList.remove("touchDis");
			domBody.style.marginTop = 0;
			window.scrollTo(0, parseInt(domBody.getAttribute("data-scr")));
		},500);
	}
}


function posMinHeight(target){
	var $right_content_zone = $(".right_content_zone");
	$(window).on("resize",function(){
		action(target);
	}).resize();

	function action(target){
		var $target = $(target);
		var $vdata = 0;
		$target.css({"height" : ""});
		if($(window).width()>1023){
			$vdata = 0;
		}else{
			$vdata = 60;
		}
		$target.css({"height" : $(window).height()-$vdata - $target.offset().top});
		$right_content_zone.addClass("type3");
	}
}


function DesignModal(option) {
    this.message = option.message;
    this.domHtml = document.querySelector("html");
    this.domBody = document.querySelector("body");
    this.pagewrap = document.querySelector(".page_wrap");
    this.design_modal_wrap = null;
    this.btn_dmsmidentify = null;
    this.btn_dmsmcancel = null;
    this.duration = option.duration !== undefined ? option.duration : 400;

    this.initShow(option);
}

DesignModal.prototype.initShow = function (option) {
    var innerPublish = '';
	var objThis = this;
    innerPublish += "<div class='design_modal_wrap'>";
    innerPublish += "  <div class='bg_design_modal'></div>";
    innerPublish += "  <div class='design_modal_tb'>";
    innerPublish += "      <div class='design_modal_td'>";
    innerPublish += "          <div class='design_modal'>";
    innerPublish += "              <div class='design_modal_cont_w'><div class='design_modal_text'></div></div>";
    innerPublish += "              <div class='btn_dmsm_wrap'>";
    innerPublish += "                  <a href='javascript:;' class='btn_dmsm close_dmtrigger btn_dmsmidentify'>확인</a>";
    if (option.type === "confirm") {
        innerPublish += "              <a href='javascript:;' class='btn_dmsm close_dmtrigger btn_dmsmcancel'>취소</a>";
    }
    innerPublish += "              </div>";
    innerPublish += "          </div>";
    innerPublish += "      </div>";
    innerPublish += "  </div>";
    innerPublish += "</div>";
    this.modalparent = document.createElement('div');
    this.pagewrap.appendChild(this.modalparent);
    this.modalparent.classList.add("design_modal_insert_wrap");
    this.modalparent.innerHTML = innerPublish;

    if (option.type === "confirm" || option.type === "alert") {
        this.design_modal_text = document.querySelector(".design_modal_text");
        this.btn_dmsmidentify = document.querySelector(".btn_dmsmidentify");
        this.design_modal_text.innerHTML = option.message;
    }
    if (option.type === "confirm") {
        this.btn_dmsmcancel = document.querySelector(".btn_dmsmcancel");
    }
    this.pagewrap.style.zIndex = 0;
    this.domBody.setAttribute("data-scr", window.pageYOffset);
    this.domBody.style.marginTop = -window.pageYOffset+"px";
    this.domHtml.classList.add("touchDis");
    this.design_modal_wrap = document.querySelector(".design_modal_wrap");
    this.closetrigger = document.querySelectorAll(".close_dmtrigger");
	this.design_modal_wrap.classList.add("active");
	setTimeout(function(){
		objThis.design_modal_wrap.classList.add("motion");
	},30);
    this.bindEvent(option);
}
DesignModal.prototype.removeHide = function () {
	var objThis = this;
	this.design_modal_wrap.classList.remove("motion");
	setTimeout(function(){
		objThis.design_modal_wrap.classList.remove("active");
    	document.querySelector(".design_modal_insert_wrap").remove();
		objThis.design_modal_wrap.remove();
		objThis.domHtml.classList.remove("touchDis");
		objThis.domBody.style.marginTop = 0;
		
		window.scrollTo(0, Number(objThis.domBody.getAttribute("data-scr")));
	},530);
}
DesignModal.prototype.bindEvent = function (option) {
    var objThis = this;
    for (var i = 0; i < this.closetrigger.length; i++) {
        this.closetrigger[i].addEventListener("click", function () {
            objThis.removeHide();
        }, false);
    }
    if (this.btn_dmsmidentify !== null) {
        this.btn_dmsmidentify.addEventListener("click", function () {
            if (option.identify_callback !== undefined) {
                option.identify_callback();
            }
        }, false);
    }
    if (this.btn_dmsmcancel !== null) {
        this.btn_dmsmcancel.addEventListener("click", function () {
            if (option.cancel_callback !== undefined) {
                option.cancel_callback();
            }
        }, false);
    }
}




/* layer popup event */
function dimLayerControl(){
	var touchIs = "ontouchstart" in window,
		$modal = $(".dimlayer_z");
	if($modal.length===0){return;}
	
	var readywidth = $(window).width();
	
	var objThis = this;
	$modal.on("click",".btn_layerclose,.closetrigger,.fullpop_dim",function(e){
		var $this = $(this),
			$t_p = $this.parents(".dimlayer_z");
		e.preventDefault();
		objThis.dimLayerHide({ 
			target : $t_p,
			closeCallback : function(){
				
			}
		});
	});
};
/* layer popup show */
function dimLayerShow(option){
	var $callbtn = null,
		touchIs = "ontouchstart" in window,
		$modal = null,
		$target = null,
		transis = "TransitionEvent" in window,
		$t_box = null,
		$t_td = null,
		$page_wrap = null,
		$fullpop_item = null,
		$fullpop_titlow = null,
		$fullpop_contlow = null,
		$page_wrap = null,
		$t_tpt = 0,
		$t_tpb = 0,
		$res_value = 0;
	
	$(function(){
		$modal = $(".dimlayer_z");
		
		$target = $(option.target);
		$page_wrap = $(".page_wrap");
		
		
		if($modal.length===0){return;}
		$modal.removeClass("active");
		$target.addClass("active");
		setTimeout(function(){
			$target.addClass("motion");
		},30);

		
		$page_wrap.css({"z-index":0});
		$page_wrap.append($target);
		heightcheck();

		
		if ($target.hasClass("fulltype")) {
			$fullpop_titlow = $target.find(".fullpop_titlow");
			$fullpop_contlow = $target.find(".fullpop_contlow");
			$fullpop_item = $target.find(".fullpop_item");
		}

		if("openCallback" in option){
			option.openCallback();
		}
		function fullContHeight(){
			if ($target.hasClass("fulltype")) {
				$fullpop_titlow = $target.find(".fullpop_titlow");
				$fullpop_contlow = $target.find(".fullpop_contlow");
				$fullpop_item = $target.find(".fullpop_item");
				if ($fullpop_titlow.length) {
					$fullpop_contlow.css({height : ""});
					if ($(window).width() > 1023) {
						$res_value = 60;
					} else {
						$res_value = 40;
					}
					$fullpop_contlow.css({
						height: $fullpop_item.outerHeight() - $fullpop_titlow.outerHeight() - $res_value
					});
				}
			}
		}
		function heightcheck(){
			if(touchIs){
				$("body").data("data-scr",$(window).scrollTop()).css({"margin-top":-$(window).scrollTop()}).append($target);
				$("html").addClass("touchDis");
			}
		}
		// var $windowWid = 0;
		// $(window).on("resize", function () {
		// 	if ($windowWid == $(window).width() && touchIs) {
		// 		return;
		// 	}
		// 	$windowWid = $(window).width();
		// });
	});
};
/* layer popup hide */
function dimLayerHide(option){
	var $callbtn = null,
		touchIs = "ontouchstart" in window,
		$modal = null,
		$target = null,
		transis = "TransitionEvent" in window,
		$t_box = null,
		$t_box_duration = 0;
		
	$(function(){
		$modal = $(".dimlayer_z");
		
		$target = $(option.target);
		$t_box = $target.find(".layer_box");
		$t_td = $target.find(".dimlayer_td");
		$t_tpt = parseInt($t_td.css("padding-top"));
		$t_tpb = parseInt($t_td.css("padding-bottom"));
		
		if($modal.length===0){return;}
		$target.removeClass("motion");
		setTimeout(function(){
			$target.removeClass("active");
			$(".page_wrap").css({"z-index":""});
			$("html,body").removeClass("touchDis touchDis2");
			scrollEnd();
			if("closeCallback" in option){
				option.closeCallback();
			}
		},530);
		
		
		function scrollEnd(){
			if(touchIs){
				$("body").css({"margin-top":0});
				window.scrollTo(0,Number($("body").data("data-scr")));
			}
		}
	});
}
