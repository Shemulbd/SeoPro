/*! Custom - Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
!function(i){i.fn.theiaStickySidebarIfy=function(t){function o(t,o){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,o){t.initialized=!0,o.each(function(){function o(){n.fixedScrollTop=0,n.sidebar.css({"min-height":"1px"}),n.stickySidebar.css({position:"static",width:"",transform:"none"})}var n={};if(n.sidebar=i(this),n.options=t||{},n.container=i(n.options.containerSelector),0==n.container.length&&(n.container=n.sidebar.parent()),n.sidebar.parent().css("-webkit-transform","none"),n.sidebar.css({position:n.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),n.stickySidebar=n.sidebar.find(".theiaStickySidebarIfy"),0==n.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;n.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),n.stickySidebar=i("<div>").addClass("theiaStickySidebarIfy").append(n.sidebar.children()),n.sidebar.append(n.stickySidebar)}n.marginBottom=parseInt(n.sidebar.css("margin-bottom")),n.paddingTop=parseInt(n.sidebar.css("padding-top")),n.paddingBottom=parseInt(n.sidebar.css("padding-bottom"));var d=n.stickySidebar.offset().top,r=n.stickySidebar.outerHeight();n.stickySidebar.css("padding-top",1),n.stickySidebar.css("padding-bottom",1),d-=n.stickySidebar.offset().top,r=n.stickySidebar.outerHeight()-r-d,0==d?(n.stickySidebar.css("padding-top",0),n.stickySidebarPaddingTop=0):n.stickySidebarPaddingTop=1,0==r?(n.stickySidebar.css("padding-bottom",0),n.stickySidebarPaddingBottom=0):n.stickySidebarPaddingBottom=1,n.previousScrollTop=null,n.fixedScrollTop=0,o(),n.onScroll=function(n){if(n.stickySidebar.is(":visible")){if(i("body").width()<n.options.minWidth)return void o();if(n.options.disableOnResponsiveLayouts){var a=n.sidebar.outerWidth("none"==n.sidebar.css("float"));if(a+50>n.container.width())return void o()}var d=i(document).scrollTop(),r="static";if(d>=n.sidebar.offset().top+(n.paddingTop-n.options.additionalMarginTop)){var s,c=n.paddingTop+t.additionalMarginTop,p=n.paddingBottom+n.marginBottom+t.additionalMarginBottom,b=n.sidebar.offset().top,l=n.sidebar.offset().top+function(t){var o=t.height();return t.children().each(function(){o=Math.max(o,i(this).height())}),o}(n.container),f=0+t.additionalMarginTop,g=n.stickySidebar.outerHeight()+c+p<i(window).height();s=g?f+n.stickySidebar.outerHeight():i(window).height()-n.marginBottom-n.paddingBottom-t.additionalMarginBottom;var h=b-d+n.paddingTop,u=l-d-n.paddingBottom-n.marginBottom,S=n.stickySidebar.offset().top-d,m=n.previousScrollTop-d;"fixed"==n.stickySidebar.css("position")&&"modern"==n.options.sidebarBehavior&&(S+=m),"stick-to-top"==n.options.sidebarBehavior&&(S=t.additionalMarginTop),"stick-to-bottom"==n.options.sidebarBehavior&&(S=s-n.stickySidebar.outerHeight()),S=m>0?Math.min(S,f):Math.max(S,s-n.stickySidebar.outerHeight()),S=Math.max(S,h),S=Math.min(S,u-n.stickySidebar.outerHeight());var y=n.container.height()==n.stickySidebar.outerHeight();r=!y&&S==f||!y&&S==s-n.stickySidebar.outerHeight()?"fixed":d+S-n.sidebar.offset().top-n.paddingTop<=t.additionalMarginTop?"static":"absolute"}if("fixed"==r){i(document).scrollLeft();n.stickySidebar.css({position:"fixed",width:e(n.stickySidebar)+"px",transform:"none",top:S+"px"})}else if("absolute"==r){var k={};"absolute"!=n.stickySidebar.css("position")&&(k.position="absolute",k.transform="none",k.top=d+S-n.sidebar.offset().top-n.stickySidebarPaddingTop-n.stickySidebarPaddingBottom+"px"),k.width=e(n.stickySidebar)+"px",n.stickySidebar.css(k)}else"static"==r&&o();"static"!=r&&1==n.options.updateSidebarHeight&&n.sidebar.css({"min-height":n.stickySidebar.outerHeight()+n.stickySidebar.offset().top-n.sidebar.offset().top+n.paddingBottom}),n.previousScrollTop=d}},n.onScroll(n),i(document).on("scroll."+n.options.namespace,function(i){return function(){i.onScroll(i)}}(n)),i(window).on("resize."+n.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(n)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(n.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(n))})}(t,o),!0)}function e(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,e){o(t,e)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,e){return function(n){o(t,e)&&i(this).unbind(n)}}(t,e)),i(window).on("resize."+t.namespace,function(t,e){return function(n){o(t,e)&&i(this).unbind(n)}}(t,e)))}(t,this),this}}(jQuery);

/*! MenuIfy by Templateify | v1.0.0 - https://www.templateify.com */
!function(a){a.fn.menuify=function(){return this.each(function(){var $t=a(this),b=$t.find('.LinkList ul > li').children('a'),c=b.length;for(var i=0;i<c;i++){var d=b.eq(i),h=d.text();if(h.charAt(0)!=='_'){var e=b.eq(i+1),j=e.text();if(j.charAt(0)==='_'){var m=d.parent();m.append('<ul class="sub-menu m-sub"/>');}}if(h.charAt(0)==='_'){d.text(h.replace('_',''));d.parent().appendTo(m.children('.sub-menu'));}}for(var i=0;i<c;i++){var f=b.eq(i),k=f.text();if(k.charAt(0)!=='_'){var g=b.eq(i+1),l=g.text();if(l.charAt(0)==='_'){var n=f.parent();n.append('<ul class="sub-menu2 m-sub"/>');}}if(k.charAt(0)==='_'){f.text(k.replace('_',''));f.parent().appendTo(n.children('.sub-menu2'));}}$t.find('.LinkList ul li ul').parent('li').addClass('has-sub');});}}(jQuery);

/*! ResizeIfy - LazyIfy on Scroll by Templateify | v1.4.0 - https://www.templateify.com */
!function(a){a.fn.lazyify=function(){return this.each(function(){var t=a(this),w=a(window),dImg=t.attr('data-image'),iWid=Math.round(t.width()),iHei=Math.round(t.height()),iSiz='w'+iWid+'-h'+iHei+'-p-k-no-nu',img='';if(dImg.match('resources.blogblog.com')){dImg=noThumbnail;}if(dImg.match('/s72-c')){img=dImg.replace('/s72-c','/'+iSiz);}else if(dImg.match('/w72-h')){img=dImg.replace('/w72-h72-p-k-no-nu','/'+iSiz);}else if(dImg.match('=w72-h')){img=dImg.replace('=w72-h72-p-k-no-nu','='+iSiz);}else{img=dImg;}if(t.is(':hidden'))return;w.on('load resize scroll',function onScroll(){if(w.scrollTop()+w.height()>=t.offset().top){w.off('load resize scroll',onScroll);var n=new Image();n.onload=function(){t.attr('style','background-image:url('+this.src+')').addClass('lazy-ify');},n.src=img;}}).trigger('scroll');});}}(jQuery);

/*! jQuery replaceText | v1.1.0 - http://benalman.com/projects/jquery-replacetext-plugin/ */
!function(e){e.fn.replaceText=function(n,t,i){return this.each(function(){var o,r,l=this.firstChild,u=[];if(l)do{3===l.nodeType&&(r=(o=l.nodeValue).replace(n,t))!==o&&(!i&&/</.test(r)?(e(l).before(r),u.push(l)):l.nodeValue=r)}while(l=l.nextSibling);u.length&&e(u).remove()})}}(jQuery);

/*! Table of Contents | v0.4.0 - https://github.com/ndabas/toc */
!function(t){"use strict";var n=function(n){return this.each(function(){var e,i,a=t(this),o=a.data(),c=[a],r=this.tagName,d=0;e=t.extend({content:"body",headings:"h1,h2,h3"},{content:o.toc||void 0,headings:o.tocHeadings||void 0},n),i=e.headings.split(","),t(e.content).find(e.headings).attr("id",function(n,e){return e||function(t){0===t.length&&(t="?");for(var n=t.replace(/\s+/g,"_"),e="",i=1;null!==document.getElementById(n+e);)e="_"+i++;return n+e}(t(this).text())}).each(function(){var n=t(this),e=t.map(i,function(t,e){return n.is(t)?e:void 0})[0];if(e>d){var a=c[0].children("li:last")[0];a&&c.unshift(t("<"+r+"/>").appendTo(a))}else c.splice(0,Math.min(d-e,Math.max(c.length-1,0)));t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href","#"+n.attr("id"))),d=e})})},e=t.fn.toc;t.fn.toc=n,t.fn.toc.noConflict=function(){return t.fn.toc=e,this},t(function(){n.call(t("[data-toc]"))})}(window.jQuery);

/*! Javascript Cookie | v1.5.1 - https://github.com/js-cookie/js-cookie */
!function(e){var n;if("function"==typeof define&&define.amd)define(["jquery"],e);else if("object"==typeof exports){try{n=require("jquery")}catch(e){}module.exports=e(n)}else{var o=window.Cookies,r=window.Cookies=e(window.jQuery);r.noConflict=function(){return window.Cookies=o,r}}}(function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e,o){var r=u.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}(e);return c(o)?o(r):r}function i(){for(var e,n,o=0,r={};o<arguments.length;o++)for(e in n=arguments[o])r[e]=n[e];return r}function c(e){return"[object Function]"===Object.prototype.toString.call(e)}var u=function(e,n,f){if(arguments.length>1&&!c(n)){if("number"==typeof(f=i(u.defaults,f)).expires){var s=f.expires,a=f.expires=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*s)}return document.cookie=[o(e),"=",r(n),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var d,p=e?void 0:{},l=document.cookie?document.cookie.split("; "):[],m=0,v=l.length;m<v;m++){var g=l[m].split("="),w=(d=g.shift(),u.raw?d:decodeURIComponent(d)),j=g.join("=");if(e===w){p=t(j,n);break}e||void 0===(j=t(j))||(p[w]=j)}return p};return u.get=u.set=u,u.defaults={},u.remove=function(e,n){return u(e,"",i(n,{expires:-1})),!u(e)},e&&(e.cookie=u,e.removeCookie=u.remove),u});

/*! Blogger Cookie Message Off */
cookieChoices = {};
