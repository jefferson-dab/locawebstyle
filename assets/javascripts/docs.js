/*!

Holder - 2.3.2 - client side image placeholders
(c) 2012-2014 Ivan Malopinsky / http://imsky.co

Provided under the MIT License.
Commercial use requires attribution.

*/
var Holder=Holder||{};!function(t,e){function n(t,e,n){e=parseInt(e,10),t=parseInt(t,10);var i=Math.max(e,t),a=Math.min(e,t),o=1/12,r=Math.min(.75*a,.75*i*o);return{height:Math.round(Math.max(n.size,r))}}function i(t){var e=[];for(p in t)t.hasOwnProperty(p)&&e.push(p+":"+t[p]);return e.join(";")}function a(t){var e=t.ctx,i=t.dimensions,a=t.template,o=t.ratio,r=t.holder,s="literal"==r.textmode,l="exact"==r.textmode,c=n(i.width,i.height,a),d=c.height,h=i.width*o,u=i.height*o,f=a.font?a.font:"Arial,Helvetica,sans-serif";canvas.width=h,canvas.height=u,e.textAlign="center",e.textBaseline="middle",e.fillStyle=a.background,e.fillRect(0,0,h,u),e.fillStyle=a.foreground,e.font="bold "+d+"px "+f;var p=a.text?a.text:Math.floor(i.width)+"x"+Math.floor(i.height);if(s){var i=r.dimensions;p=i.width+"x"+i.height}else if(l&&r.exact_dimensions){var i=r.exact_dimensions;p=Math.floor(i.width)+"x"+Math.floor(i.height)}var m=e.measureText(p).width;return m/h>=.75&&(d=Math.floor(.75*d*(h/m))),e.font="bold "+d*o+"px "+f,e.fillText(p,h/2,u/2,h),canvas.toDataURL("image/png")}function o(t){var e=t.dimensions,i=t.template,a=t.holder,o="literal"==a.textmode,r="exact"==a.textmode,s=n(e.width,e.height,i),l=s.height,c=e.width,d=e.height,h=i.font?i.font:"Arial,Helvetica,sans-serif",u=i.text?i.text:Math.floor(e.width)+"x"+Math.floor(e.height);if(o){var e=a.dimensions;u=e.width+"x"+e.height}else if(r&&a.exact_dimensions){var e=a.exact_dimensions;u=Math.floor(e.width)+"x"+Math.floor(e.height)}var f=E({text:u,width:c,height:d,text_height:l,font:h,template:i});return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(f)))}function r(t){return b.use_canvas&&!b.use_svg?a(t):o(t)}function s(t,e,n,i){var a=n.dimensions,o=n.theme,s=n.text?decodeURIComponent(n.text):n.text,l=a.width+"x"+a.height;o=s?m(o,{text:s}):o,o=n.font?m(o,{font:n.font}):o,e.setAttribute("data-src",i),n.theme=o,e.holder_data=n,"image"==t?(e.setAttribute("alt",s?s:o.text?o.text+" ["+l+"]":l),(b.use_fallback||!n.auto)&&(e.style.width=a.width+"px",e.style.height=a.height+"px"),b.use_fallback?e.style.backgroundColor=o.background:(e.setAttribute("src",r({ctx:_,dimensions:a,template:o,ratio:k,holder:n})),n.textmode&&"exact"==n.textmode&&(y.push(e),d(e)))):"background"==t?b.use_fallback||(e.style.backgroundImage="url("+r({ctx:_,dimensions:a,template:o,ratio:k,holder:n})+")",e.style.backgroundSize=a.width+"px "+a.height+"px"):"fluid"==t&&(e.setAttribute("alt",s?s:o.text?o.text+" ["+l+"]":l),"%"==a.height.slice(-1)?e.style.height=a.height:null!=n.auto&&n.auto||(e.style.height=a.height+"px"),"%"==a.width.slice(-1)?e.style.width=a.width:null!=n.auto&&n.auto||(e.style.width=a.width+"px"),("inline"==e.style.display||""===e.style.display||"none"==e.style.display)&&(e.style.display="block"),c(e),b.use_fallback?e.style.backgroundColor=o.background:(y.push(e),d(e)))}function l(t,e){var n={height:t.clientHeight,width:t.clientWidth};return n.height||n.width?(t.removeAttribute("data-holder-invisible"),n):(t.setAttribute("data-holder-invisible",!0),void e.call(this,t))}function c(e){if(e.holder_data){var n=l(e,t.invisible_error_fn(c));if(n){var i=e.holder_data;i.initial_dimensions=n,i.fluid_data={fluid_height:"%"==i.dimensions.height.slice(-1),fluid_width:"%"==i.dimensions.width.slice(-1),mode:null},i.fluid_data.fluid_width&&!i.fluid_data.fluid_height?(i.fluid_data.mode="width",i.fluid_data.ratio=i.initial_dimensions.width/parseFloat(i.dimensions.height)):!i.fluid_data.fluid_width&&i.fluid_data.fluid_height&&(i.fluid_data.mode="height",i.fluid_data.ratio=parseFloat(i.dimensions.width)/i.initial_dimensions.height)}}}function d(e){var n;n=null==e.nodeType?y:[e];for(var i in n)if(n.hasOwnProperty(i)){var a=n[i];if(a.holder_data){var o=a.holder_data,s=l(a,t.invisible_error_fn(d));if(s){if(o.fluid){if(o.auto)switch(o.fluid_data.mode){case"width":s.height=s.width/o.fluid_data.ratio;break;case"height":s.width=s.height*o.fluid_data.ratio}a.setAttribute("src",r({ctx:_,dimensions:s,template:o.theme,ratio:k,holder:o}))}o.textmode&&"exact"==o.textmode&&(o.exact_dimensions=s,a.setAttribute("src",r({ctx:_,dimensions:o.dimensions,template:o.theme,ratio:k,holder:o})))}}}}function h(e,n){for(var i={theme:m(A.themes.gray,{})},a=!1,o=e.length,r=0;o>r;r++){var s=e[r];t.flags.dimensions.match(s)?(a=!0,i.dimensions=t.flags.dimensions.output(s)):t.flags.fluid.match(s)?(a=!0,i.dimensions=t.flags.fluid.output(s),i.fluid=!0):t.flags.textmode.match(s)?i.textmode=t.flags.textmode.output(s):t.flags.colors.match(s)?i.theme=t.flags.colors.output(s):n.themes[s]?n.themes.hasOwnProperty(s)&&(i.theme=m(n.themes[s],{})):t.flags.font.match(s)?i.font=t.flags.font.output(s):t.flags.auto.match(s)?i.auto=!0:t.flags.text.match(s)&&(i.text=t.flags.text.output(s))}return a?i:!1}function u(t,e){var n="complete",i="readystatechange",a=!1,o=a,r=!0,s=t.document,l=s.documentElement,c=s.addEventListener?"addEventListener":"attachEvent",d=s.addEventListener?"removeEventListener":"detachEvent",h=s.addEventListener?"":"on",u=function(r){(r.type!=i||s.readyState==n)&&(("load"==r.type?t:s)[d](h+r.type,u,a),!o&&(o=!0)&&e.call(t,null))},f=function(){try{l.doScroll("left")}catch(t){return void setTimeout(f,50)}u("poll")};if(s.readyState==n)e.call(t,"lazy");else{if(s.createEventObject&&l.doScroll){try{r=!t.frameElement}catch(p){}r&&f()}s[c](h+"DOMContentLoaded",u,a),s[c](h+i,u,a),t[c](h+"load",u,a)}}function f(t,e){var t=t.match(/^(\W)?(.*)/),e=e||document,n=e["getElement"+(t[1]?"#"==t[1]?"ById":"sByClassName":"sByTagName")],i=n.call(e,t[2]),a=[];return null!==i&&(a=i.length||0===i.length?i:[i]),a}function m(t,e){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n}var g={use_svg:!1,use_canvas:!1,use_fallback:!1},b={},w=!1;canvas=document.createElement("canvas");var v=1,x=1,y=[];if(canvas.getContext)if(canvas.toDataURL("image/png").indexOf("data:image/png")<0)g.use_fallback=!0;else var _=canvas.getContext("2d");else g.use_fallback=!0;document.createElementNS&&document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&(g.use_svg=!0,g.use_canvas=!1),g.use_fallback||(v=window.devicePixelRatio||1,x=_.webkitBackingStorePixelRatio||_.mozBackingStorePixelRatio||_.msBackingStorePixelRatio||_.oBackingStorePixelRatio||_.backingStorePixelRatio||1);var k=v/x,A={domain:"holder.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12},sky:{background:"#0D8FDB",foreground:"#fff",size:12},vine:{background:"#39DBAC",foreground:"#1E292C",size:12},lava:{background:"#F8591A",foreground:"#1C2846",size:12}},stylesheet:""};t.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(t){var e=this.regex.exec(t);return{width:+e[1],height:+e[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(t){var e=this.regex.exec(t);return{width:e[1],height:e[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(t){var e=this.regex.exec(t);return{size:A.themes.gray.size,foreground:"#"+e[2],background:"#"+e[1]}}},text:{regex:/text\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},font:{regex:/font\:(.*)/,output:function(t){return this.regex.exec(t)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(t){return this.regex.exec(t)[1]}}};var E=function(){if(window.XMLSerializer){var t=new XMLSerializer,e="http://www.w3.org/2000/svg",n=document.createElementNS(e,"svg");n.webkitMatchesSelector&&n.setAttribute("xmlns","http://www.w3.org/2000/svg");var a=document.createElementNS(e,"rect"),o=document.createElementNS(e,"text"),r=document.createTextNode(null);return o.setAttribute("text-anchor","middle"),o.appendChild(r),n.appendChild(a),n.appendChild(o),function(e){return n.setAttribute("width",e.width),n.setAttribute("height",e.height),a.setAttribute("width",e.width),a.setAttribute("height",e.height),a.setAttribute("fill",e.template.background),o.setAttribute("x",e.width/2),o.setAttribute("y",e.height/2),r.nodeValue=e.text,o.setAttribute("style",i({fill:e.template.foreground,"font-weight":"bold","font-size":e.text_height+"px","font-family":e.font,"dominant-baseline":"central"})),t.serializeToString(n)}}}();for(var S in t.flags)t.flags.hasOwnProperty(S)&&(t.flags[S].match=function(t){return t.match(this.regex)});t.invisible_error_fn=function(t){return function(t){if(t.hasAttribute("data-holder-invisible"))throw new Error("Holder: invisible placeholder")}},t.add_theme=function(e,n){return null!=e&&null!=n&&(A.themes[e]=n),t},t.add_image=function(e,n){var i=f(n);if(i.length)for(var a=0,o=i.length;o>a;a++){var r=document.createElement("img");r.setAttribute("data-src",e),i[a].appendChild(r)}return t},t.run=function(e){b=m({},g),w=!0;var n=m(A,e),i=[],a=[],o=[];for(null!=n.use_canvas&&n.use_canvas&&(b.use_canvas=!0,b.use_svg=!1),"string"==typeof n.images?a=f(n.images):window.NodeList&&n.images instanceof window.NodeList?a=n.images:window.Node&&n.images instanceof window.Node?a=[n.images]:window.HTMLCollection&&n.images instanceof window.HTMLCollection&&(a=n.images),"string"==typeof n.bgnodes?o=f(n.bgnodes):window.NodeList&&n.elements instanceof window.NodeList?o=n.bgnodes:window.Node&&n.bgnodes instanceof window.Node&&(o=[n.bgnodes]),d=0,c=a.length;c>d;d++)i.push(a[d]);var r=document.getElementById("holderjs-style");r||(r=document.createElement("style"),r.setAttribute("id","holderjs-style"),r.type="text/css",document.getElementsByTagName("head")[0].appendChild(r)),n.nocss||(r.styleSheet?r.styleSheet.cssText+=n.stylesheet:n.stylesheet.length&&r.appendChild(document.createTextNode(n.stylesheet)));for(var l=new RegExp(n.domain+'/(.*?)"?\\)'),c=o.length,d=0;c>d;d++){var u=window.getComputedStyle(o[d],null).getPropertyValue("background-image"),p=u.match(l),v=o[d].getAttribute("data-background-src");if(p){var x=h(p[1].split("/"),n);x&&s("background",o[d],x,u)}else if(null!=v){var x=h(v.substr(v.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);x&&s("background",o[d],x,u)}}for(c=i.length,d=0;c>d;d++){var y,_;_=y=u=null;try{_=i[d].getAttribute("src"),attr_datasrc=i[d].getAttribute("data-src")}catch(k){}if(null==attr_datasrc&&_&&_.indexOf(n.domain)>=0?u=_:attr_datasrc&&attr_datasrc.indexOf(n.domain)>=0&&(u=attr_datasrc),u){var x=h(u.substr(u.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);x&&(x.fluid?s("fluid",i[d],x,u):s("image",i[d],x,u))}}return t},u(e,function(){window.addEventListener?(window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1)):window.attachEvent("onresize",d),w||t.run({}),"object"==typeof window.Turbolinks&&document.addEventListener("page:change",function(){t.run({})})}),"function"==typeof define&&define.amd&&define([],function(){return t}),function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var i,a,o=0,r=n,s="";e.charAt(0|o)||(r="=",o%1);s+=r.charAt(63&i>>8-8*(o%1))){if(a=e.charCodeAt(o+=.75),a>255)throw new t("'btoa' failed");i=i<<8|a}return s}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed");for(var i,a,o=0,r=0,s="";a=e.charAt(r++);~a&&(i=o%4?64*i+a:a,o++%4)?s+=String.fromCharCode(255&i>>(6&-2*o)):0)a=n.indexOf(a);return s})}(),document.getElementsByClassName||(document.getElementsByClassName=function(t){var e,n,i,a=document,o=[];if(a.querySelectorAll)return a.querySelectorAll("."+t);if(a.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+t+" ')]",e=a.evaluate(n,a,null,0,null);i=e.iterateNext();)o.push(i);else for(e=a.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+t+"(\\s|$)"),i=0;i<e.length;i++)n.test(e[i].className)&&o.push(e[i]);return o}),window.getComputedStyle||(window.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])})}(Holder,window),$("#search").keyup(function(){var t=$("#search").val(),e=new RegExp(t,"i"),n='<ul class="ls-search">';n+='<li class="ls-no-list-style"><h2 class="ls-title-2">Resultado da busca</h2></li>',$.getJSON("/locawebstyle/assets/javascripts/busca.json",function(t){console.log(this),$.each(t,function(t,i){(-1!=i.title.search(e)||-1!=i.path.search(e))&&(n+='<li class="ls-no-list-style"><a class="ls-display-block" href="/locawebstyle/'+i.path+'">'+i.title,n+="<p>"+i.description+"</p></a></li>")}),$("#results").html(n)})});var lsdocs=function(){"use strict";function t(){i(),a(),n(),e()}function e(t){$(".doc-test-themes").find("a").on("click",function(){var t=$(this).data("toggle-class");$("html").attr("class",$("html").attr("class").split(" ").map(function(t){return/ls-theme/.test(t)?"":t}).join(" ").replace(/  /g,"")).addClass(t)})}function n(){$(".doc-menu").on("click",function(){$(this).toggleClass("active")})}function i(){$("code.language-html").each(function(t,e){var n=$(this).html();$(this).text(n),$(this).removeClass("language-html").addClass("language-markup")})}function a(){if($("html").hasClass("ls-window-lg")||$("html").hasClass("ls-window-md")){var t=$(".doc-sidebar-inner").width();$(".doc-sidebar-inner").height()<$(window).height()&&$(window).scroll(function(){var e=$(this).scrollTop();e+$(window).height()+40==$(document).height()+40&&$(".doc-sidebar-inner").css("margin-top","0px"),e>="391"?$(".doc-sidebar-inner").addClass("doc-affix").css("width",t):$(".doc-sidebar-inner").removeClass("doc-affix").removeAttr("style")})}}return{init:t}}();$(window).on("load",function(){lsdocs.init()});var lsdocs=lsdocs||{};lsdocs.icones=function(){"use strict";function t(){e(),n()}function e(){var t='<form class="doc-search-icons"><input type="search" id="searchIcons" aria-label="Buscar \xedcone" placeholder="Buscar \xedcone"><p id="searchResultText"></p></form>';$(".list-icons").eq(0).before(t)}function n(){$("#searchIcons").on("keyup",function(t){var e=$(this).val(),n=$("#searchResultText"),a=i.find('[class*="'+e+'"]');console.log(a),e.length>0?0===a.size()?(n.html("Nenhum \xedcone encontrado com o termo: <b>"+e+"</b>"),i.hide()):(i.hide(),a.parent(".list-icons li").show(),n.html("Encontrado(s) <b>"+a.size()+"</b> \xedcone(s)")):(i.show(),n.html("&nbsp;"))})}var i=$(".list-icons li");return{init:t}}(),$(window).on("load",function(){lsdocs.icones.init()}),window.tourGuiadoDoc={},tourGuiadoDoc=function(){"use strict";function t(){locastyle.guidedTour.init(e)}var e={id:"tourDemoDoc",selectors:{init:"#demo-init"},i18n:{nextBtn:"Pr\xf3ximo",prevBtn:"Anterior",doneBtn:"Ok",skipBtn:"Sair",closeTooltip:"Fechar"},bubbleWidth:250,showPrevButton:!0,steps:[{target:"passo1",title:"O t\xedtulo do passo 1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"bottom",arrowOffset:"center"},{target:"passo2",title:"T\xedtulo passo 2",content:"Este \xe9 o texto do passo 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",placement:"left",arrowOffset:"center"},{target:"demo-init",title:"T\xedtulo passo 3- Final",content:"Um textinho do passo 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",placement:"right",arrowOffset:"center"}]};return{init:t}}(),window.setTimeout(function(){tourGuiadoDoc.init()},1e3);