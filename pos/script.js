var swfobject=function(){function e(){if(!B){if($.ie&&$.win){var e=p("span");try{var t=E.getElementsByTagName("body")[0].appendChild(e);t.parentNode.removeChild(t)}catch(a){return}}B=!0,T&&(clearInterval(T),T=null);for(var n=S.length,i=0;n>i;i++)S[i]()}}function t(e){B?e():S[S.length]=e}function a(e){if(typeof I.addEventListener!=b)I.addEventListener("load",e,!1);else if(typeof E.addEventListener!=b)E.addEventListener("load",e,!1);else if(typeof I.attachEvent!=b)I.attachEvent("onload",e);else if("function"==typeof I.onload){var t=I.onload;I.onload=function(){t(),e()}}else I.onload=e}function n(){for(var e=j.length,t=0;e>t;t++){var a=j[t].id;if($.pv[0]>0){var n=f(a);n&&(j[t].width=n.getAttribute("width")?n.getAttribute("width"):"0",j[t].height=n.getAttribute("height")?n.getAttribute("height"):"0",u(j[t].swfVersion)?($.webkit&&$.webkit<312&&i(n),h(a,!0)):j[t].expressInstall&&!x&&u("6.0.65")&&($.win||$.mac)?o(j[t]):l(n))}else h(a,!0)}}function i(e){var t=e.getElementsByTagName(w)[0];if(t){var a=p("embed"),n=t.attributes;if(n)for(var i=n.length,r=0;i>r;r++)"data"==n[r].nodeName.toLowerCase()?a.setAttribute("src",n[r].nodeValue):a.setAttribute(n[r].nodeName,n[r].nodeValue);var o=t.childNodes;if(o)for(var l=o.length,s=0;l>s;s++)1==o[s].nodeType&&"param"==o[s].nodeName.toLowerCase()&&a.setAttribute(o[s].getAttribute("name"),o[s].getAttribute("value"));e.parentNode.replaceChild(a,e)}}function r(e){$.ie&&$.win&&u("8.0.0")&&I.attachEvent("onunload",function(){var t=f(e);if(t){for(var a in t)"function"==typeof t[a]&&(t[a]=function(){});t.parentNode.removeChild(t)}})}function o(e){x=!0;var t=f(e.id);if(t){if(e.altContentId){var a=f(e.altContentId);a&&(O=a,k=e.altContentId)}else O=s(t);!/%$/.test(e.width)&&parseInt(e.width,10)<310&&(e.width="310"),!/%$/.test(e.height)&&parseInt(e.height,10)<137&&(e.height="137"),E.title=E.title.slice(0,47)+" - Flash Player Installation";var n=$.ie&&$.win?"ActiveX":"PlugIn",i=E.title,r="MMredirectURL="+I.location+"&MMplayerType="+n+"&MMdoctitle="+i,o=e.id;if($.ie&&$.win&&4!=t.readyState){var l=p("div");o+="SWFObjectNew",l.setAttribute("id",o),t.parentNode.insertBefore(l,t),t.style.display="none",I.attachEvent("onload",function(){t.parentNode.removeChild(t)})}d({data:e.expressInstall,id:A,width:e.width,height:e.height},{flashvars:r},o)}}function l(e){if($.ie&&$.win&&4!=e.readyState){var t=p("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(s(e),t),e.style.display="none",I.attachEvent("onload",function(){e.parentNode.removeChild(e)})}else e.parentNode.replaceChild(s(e),e)}function s(e){var t=p("div");if($.win&&$.ie)t.innerHTML=e.innerHTML;else{var a=e.getElementsByTagName(w)[0];if(a){var n=a.childNodes;if(n)for(var i=n.length,r=0;i>r;r++)1==n[r].nodeType&&"param"==n[r].nodeName.toLowerCase()||8==n[r].nodeType||t.appendChild(n[r].cloneNode(!0))}}return t}function d(e,t,a){var n,i=f(a);if(typeof e.id==b&&(e.id=a),$.ie&&$.win){var o="";for(var l in e)e[l]!=Object.prototype[l]&&("data"==l?t.movie=e[l]:"styleclass"==l.toLowerCase()?o+=' class="'+e[l]+'"':"classid"!=l&&(o+=" "+l+'="'+e[l]+'"'));var s="";for(var d in t)t[d]!=Object.prototype[d]&&(s+='<param name="'+d+'" value="'+t[d]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+o+">"+s+"</object>",r(e.id),n=f(e.id)}else if($.webkit&&$.webkit<312){var u=p("embed");u.setAttribute("type",N);for(var v in e)e[v]!=Object.prototype[v]&&("data"==v?u.setAttribute("src",e[v]):"styleclass"==v.toLowerCase()?u.setAttribute("class",e[v]):"classid"!=v&&u.setAttribute(v,e[v]));for(var h in t)t[h]!=Object.prototype[h]&&"movie"!=h&&u.setAttribute(h,t[h]);i.parentNode.replaceChild(u,i),n=u}else{var y=p(w);y.setAttribute("type",N);for(var m in e)e[m]!=Object.prototype[m]&&("styleclass"==m.toLowerCase()?y.setAttribute("class",e[m]):"classid"!=m&&y.setAttribute(m,e[m]));for(var g in t)t[g]!=Object.prototype[g]&&"movie"!=g&&c(y,g,t[g]);i.parentNode.replaceChild(y,i),n=y}return n}function c(e,t,a){var n=p("param");n.setAttribute("name",t),n.setAttribute("value",a),e.appendChild(n)}function f(e){return E.getElementById(e)}function p(e){return E.createElement(e)}function u(e){var t=$.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10),a[2]=parseInt(a[2],10),t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]?!0:!1}function v(e,t){if(!$.ie||!$.mac){var a=E.getElementsByTagName("head")[0],n=p("style");if(n.setAttribute("type","text/css"),n.setAttribute("media","screen"),$.ie&&$.win||typeof E.createTextNode==b||n.appendChild(E.createTextNode(e+" {"+t+"}")),a.appendChild(n),$.ie&&$.win&&typeof E.styleSheets!=b&&E.styleSheets.length>0){var i=E.styleSheets[E.styleSheets.length-1];typeof i.addRule==w&&i.addRule(e,t)}}}function h(e,t){var a=t?"inherit":"hidden";B?f(e).style.visibility=a:v("#"+e,"visibility:"+a)}function y(e){if(!e)return 0;for(var t=e.childNodes,a=t.length,n=0;a>n;n++)if(1==t[n].nodeType&&"object"==t[n].nodeName.toLowerCase()&&(t=t[n].childNodes,a=t.length,n=0),1==t[n].nodeType&&"param"==t[n].nodeName.toLowerCase()&&"swfversion"==t[n].getAttribute("name"))return t[n].getAttribute("value");return 0}function m(e){if(!e)return"";for(var t=e.childNodes,a=t.length,n=0;a>n;n++)if(1==t[n].nodeType&&"object"==t[n].nodeName.toLowerCase()&&(t=t[n].childNodes,a=t.length,n=0),1==t[n].nodeType&&"param"==t[n].nodeName.toLowerCase()&&"expressinstall"==t[n].getAttribute("name"))return t[n].getAttribute("value");return""}{var b="undefined",w="object",g="Shockwave Flash",C="ShockwaveFlash.ShockwaveFlash",N="application/x-shockwave-flash",A="SWFObjectExprInst",I=window,E=document,L=navigator,S=[],j=[],T=null,O=null,k=null,B=!1,x=!1,$=function(){var e=typeof E.getElementById!=b&&typeof E.getElementsByTagName!=b&&typeof E.createElement!=b&&typeof E.appendChild!=b&&typeof E.replaceChild!=b&&typeof E.removeChild!=b&&typeof E.cloneNode!=b,t=[0,0,0],a=null;if(typeof L.plugins!=b&&typeof L.plugins[g]==w)a=L.plugins[g].description,a&&(a=a.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),t[0]=parseInt(a.replace(/^(.*)\..*$/,"$1"),10),t[1]=parseInt(a.replace(/^.*\.(.*)\s.*$/,"$1"),10),t[2]=/r/.test(a)?parseInt(a.replace(/^.*r(.*)$/,"$1"),10):0);else if(typeof I.ActiveXObject!=b){var n=null,i=!1;try{n=new ActiveXObject(C+".7")}catch(r){try{n=new ActiveXObject(C+".6"),t=[6,0,21],n.AllowScriptAccess="always"}catch(r){6==t[0]&&(i=!0)}if(!i)try{n=new ActiveXObject(C)}catch(r){}}if(!i&&n)try{a=n.GetVariable("$version"),a&&(a=a.split(" ")[1].split(","),t=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])}catch(r){}}var o=L.userAgent.toLowerCase(),l=L.platform.toLowerCase(),s=/webkit/.test(o)?parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,d=!1,c=/win/.test(l?l:o),f=/mac/.test(l?l:o);return{w3cdom:e,pv:t,webkit:s,ie:d,win:c,mac:f}}();!function(){if($.w3cdom){if(t(n),$.ie&&$.win)try{E.write("<script id=__ie_ondomload defer=true src=//:></script>");var i=f("__ie_ondomload");i&&(i.onreadystatechange=function(){"complete"==this.readyState&&(this.parentNode.removeChild(this),e())})}catch(r){}$.webkit&&typeof E.readyState!=b&&(T=setInterval(function(){/loaded|complete/.test(E.readyState)&&e()},10)),typeof E.addEventListener!=b&&E.addEventListener("DOMContentLoaded",e,null),a(e)}}()}return{registerObject:function(e,t,a){if($.w3cdom&&e){var n=document.getElementById(e),i=m(n),r={};r.id=e,r.swfVersion=t?t:y(n),r.expressInstall=a?a:""!=i?i:!1,j[j.length]=r,h(e,!1)}},getObjectById:function(e){var t=null;if($.w3cdom&&B){var a=f(e);if(a){var n=a.getElementsByTagName(w)[0];!n||n&&typeof a.SetVariable!=b?t=a:typeof n.SetVariable!=b&&(t=n)}}return t},embedSWF:function(e,a,n,i,r,l,s,c,f){if($.w3cdom&&e&&a&&n&&i&&r)if(n+="",i+="",u(r)){h(a,!1);var p=typeof f==w?f:{};p.data=e,p.width=n,p.height=i;var v=typeof c==w?c:{};if(typeof s==w)for(var y in s)s[y]!=Object.prototype[y]&&(typeof v.flashvars!=b?v.flashvars+="&"+y+"="+s[y]:v.flashvars=y+"="+s[y]);t(function(){d(p,v,a),p.id==a&&h(a,!0)})}else l&&!x&&u("6.0.65")&&($.win||$.mac)&&(h(a,!1),t(function(){var e={};e.id=e.altContentId=a,e.width=n,e.height=i,e.expressInstall=l,o(e)}))},getFlashPlayerVersion:function(){return{major:$.pv[0],minor:$.pv[1],release:$.pv[2]}},hasFlashPlayerVersion:u,createSWF:function(e,t,a){return $.w3cdom&&B?d(e,t,a):void 0},createCSS:function(e,t){$.w3cdom&&v(e,t)},addDomLoadEvent:t,addLoadEvent:a,getQueryParamValue:function(e){var t=E.location.search||E.location.hash;if(null==e)return t;if(t)for(var a=t.substring(1).split("&"),n=0;n<a.length;n++)if(a[n].substring(0,a[n].indexOf("="))==e)return a[n].substring(a[n].indexOf("=")+1);return""},expressInstallCallback:function(){if(x&&O){var e=f(A);e&&(e.parentNode.replaceChild(O,e),k&&(h(k,!0),$.ie&&$.win&&(O.style.display="block")),O=null,k=null,x=!1)}}}}();