(self.webpackChunkgatsby_starter_spectral=self.webpackChunkgatsby_starter_spectral||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!a(e[u[s]],i[u[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}},8514:function(e){e.exports={siteTitle:"Oxy-Rehab Tlenoterapia Tychy",manifestName:"Spectral",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"",heading:"Oxy-Rehab  ",subHeading:"Zapraszamy na sesje tlenowe w Tychach ",explore:"Dowiedz się więcej ",tekst1:"Nasza komora hiperbaryczna wykorzystuje ciśnienie 1,3 ATA. Jest to nieiwazyjna metoda wprowadzania tlenu o stężeniu 93%, czyli o 30% wyższym niż ciśnienie atmosferyczne.",info1:"Wzmocnij odporność swojego organizmu w naturalny sposób!",info11:"Sesja w kapsule hiperbarycznej biostymuluje organizm, likwiduje zakażenia oraz odżywia niedotlenione komórki, a w rezultacie wzmacnia układ immunologiczny.",info2:"Zyskaj wsparcie w trakcie aktualnej rehabilitacji",info22:"Tlenoterapia hiperbaryczna wspiera proces aktualnie prowadzonych terapii i rehabilitacji. Działa przeciwzapalnie i przeciwbólowo. Likwiduje obrzęki.",info3:"Jak działa tlenoterapia?",info33:"Terapia tlenowa ma wszechstronny, pozytywny wpływ na nasze samopoczucie psychiczne i fizyczne. Pozwala zachować na dłużej młodość, dobre zdrowie, aktywuje siły witalne i odpornościowe",info4:"Jak wygląda zabieg?",info40:"Wchłanianie tlenu w wyższym ciśnieniu niż atmosferyczne jest wielokorotnie większe.",info41:" Dlatego sesja w naszej komorze hiperbarycznej polega na podawaniu pacjentowi 93% tlenu w ciśnieniu 1.3 atmosfery przez 60- 80 minut",info44:["aktywizacja komórek macierzystych,","odbudowa systemu odpornościowego,","tworzenie się nowych tkanek i naczyń krwionośnych,","działanie baktrio- i wiurusobujcze,","działanie przeciwbólowe i przeciwzapalne","pobudzenie metabolizmu,","regeneracja tkanki kostnej i mięśni szkieletowych,","wzmożenie koncentracji i zapamiętywania","wzrost sił życiowych"],info5:"Komora hiperbaryczna",info55:"Bezpieczne urządzenie o miękkiej konstrukcji zapewnia komfortową pozycję siedzącą lub leżącą. Może pomieścić dwie osoby z możliwością indywidualnego natlenienia np. osobę dorosłą z dzieckiem.",zastosowania1:"Kardiologia",zastosowania11:"Korzystny wpływ na dolegliwości o charakterze wieńcowym. Zmniejsza nasilenie objawów niewydolności serca, zapobiega zawałom mięśnia sercowego, reguluje ciśnienie tętnicze.",zastosowania2:"Ortopedia",zastosowania21:"Poprawia przepływ krwi w uszkodzonych kończynach, zwiększa ciśnienie tlenu w kościach powodując ustępowanie stanu zapalnego kości i szpiku.",zastosowania3:"Dermatologia",zastosowania31:"Terapia ma zastosowanie w leczeniu trądziku, łuszczycy, atopowego zapalenia skóry, egzemy oraz trądziku różowatego. Redukuje wszelkie ogniska zapalne.",zastosowania4:"Neurologia",zastosowania41:"Ma zastosowanie w porażeniach mózgowych i pourazowych uszkodzeniach mózgu, powstałych w wyniku udaru lub wylewu. Ożywia i pobudza uśpione komórki, podnosi koncentrację.",zastosowania5:"Stomatologia",zastosowania51:"Pomaga w leczeniu ran po zabiegach chirurgicznych, poprawia ukrwienie w uszkodzonej tkance, stymuluje proces gojenia oraz skraca czas rekonwalescencji.",zastosowania6:"Medycyna sportowa",zastosowania61:"Podnosi wydolność fizyczną, przyspiesza procesy regeneracji tkanki mięśniowej, ścięgien i więzadeł. Działa przeciwbólowo, wpływa na procesy naprawcze w tkance kostnej.",zastosowania7:"Medycyna estetyczna",zastosowania71:"Działa stymulująco na fibroblasty, odpowiedzialne za syntezę kolagenu i elastyny, czyli włókien zapewniających elastyczność skórze.",zastosowania8:"Onkologia",zastosowania81:"Sprzyja rewitalizacji komórek i zapobiega dalszym uszkodzeniom. Oczyszcza organizm z toksyn i metali ciężkich, obniża poziom białka C-reaktywnego.",zastosowania9:"Gastrologia",zastosowania91:"Poprawia ukrwienie ścian jelit i redukuje ilość gazów jelitowych. Wspiera regenerację stanów zapalnych, np. jelita cienkiego, jelita grubego, trzustki. Zabija szkodliwe bakterie i wirusy.",kontakttel:"+48 516-555-597",kontaktul:" ul. Legionów Polskich 40",kontaktty:" 43-100 Tychy",kontaktmail:"gabinet@tlenoterapiatychy.pl",socialLinks:[{style:"brands",icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/tlenoterapia.tychy/"},{style:"brands",icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/Tlenoterapiatychy"},{style:"solid",icon:"fa-envelope",name:"Email",url:"mailto: gabinet@tlenoterapiatychy.pl"}]}},7793:function(e,t,n){"use strict";n.d(t,{Z:function(){return Te}});var r,o,a,i,c=n(3275),s=n(7294),u=n(5697),l=n.n(u),p=n(4839),f=n.n(p),y=n(2993),d=n.n(y),m=n(6494),w=n.n(m),h="bodyAttributes",b="htmlAttributes",z="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",v="href",j="http-equiv",A="innerHTML",O="itemprop",E="name",C="property",S="rel",P="src",L="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",N="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",_=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),B=[g.NOSCRIPT,g.SCRIPT,g.STYLE],H="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=X(e,g.TITLE),n=X(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},V=function(e){return X(e,R)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===S&&"canonical"===e[n].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==A&&c!==T&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=w()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),se(p,f);var y={baseTag:le(g.BASE,n),linkTags:le(g.LINK,a),metaTags:le(g.META,i),noscriptTags:le(g.NOSCRIPT,c),scriptTags:le(g.SCRIPT,u),styleTags:le(g.STYLE,l)},d={},m={};Object.keys(y).forEach((function(e){var t=y[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(m[e]=y[e].oldTags)})),t&&t(),s(e,d,m)},ce=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(H),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(H):n.getAttribute(H)!==i.join(",")&&n.setAttribute(H,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(H,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},ye=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[H]=!0,o=fe(n,r),[s.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=pe(n),a=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case b:return{toComponent:function(){return fe(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[H]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),s.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return{base:ye(g.BASE,t,r),bodyAttributes:ye(h,n,r),htmlAttributes:ye(b,o,r),link:ye(g.LINK,a,r),meta:ye(g.META,i,r),noscript:ye(g.NOSCRIPT,c,r),script:ye(g.SCRIPT,s,r),style:ye(g.STYLE,u,r),title:ye(g.TITLE,{title:p,titleAttributes:f},r)}},me=f()((function(e){return{baseTag:G([v,L],e),bodyAttributes:$(h,e),defer:X(e,M),encode:X(e,N),htmlAttributes:$(b,e),linkTags:Q(g.LINK,[S,v],e),metaTags:Q(g.META,[E,k,j,C,O],e),noscriptTags:Q(g.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:Q(g.SCRIPT,[P,A],e),styleTags:Q(g.STYLE,[T],e),title:J(e),titleAttributes:$(z,e)}}),(function(e){ae&&re(ae),e.defer?ae=ne((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),we=(o=me,i=a=function(e){function t(){return K(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case g.TITLE:return F({},o,((t={})[r.type]=i,t.titleAttributes=F({},a),t));case g.BODY:return F({},o,{bodyAttributes:F({},a)});case g.HTML:return F({},o,{htmlAttributes:F({},a)})}return F({},o,((n={})[r.type]=F({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(o,r)},q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);we.renderStatic=we.rewind;var he=we,be=n(5444),ze=n(8514),ge=n.n(ze);function ke(){return s.createElement("footer",{id:"footer"},s.createElement("ul",{className:"icons"},ge().socialLinks.map((function(e){var t=e.style,n=e.icon,r=e.name,o=e.url;return s.createElement("li",{key:o},s.createElement("a",{href:o,className:"icon "+t+" "+n},s.createElement("span",{className:"label"},r)))}))),s.createElement("ul",{className:"copyright"},s.createElement("li",null,"©Build by ",s.createElement("a",{href:"mailto: kpolubok@gmail.com"},"MANUFAKTURA KODU")),s.createElement("li",null,"Design & Licensed under the CCA : ",s.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}var Te=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}(0,c.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),0)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props,t=e.children,n=(e.fullMenu,this.state.isPreloaded);return s.createElement(be.StaticQuery,{query:"3649515864",render:function(e){return s.createElement(s.Fragment,null,s.createElement(he,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Zapraszamy na sesje tlenowe w Tychach! Leczenie tlenem. Lepsze samopoczucie"},{name:"keywords",content:"Tlenoterapia Tychy,Tlenoterapia Śląsk,Tlenoterapia Katowice,Komora Hiperbaryczna,Komora hiperbaryczna Tychy,Leczenie tlenem"}]},s.createElement("html",{lang:"en"})),s.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},s.createElement("div",{id:"page-wrapper"},t,s.createElement(ke,null))))}})},t}(s.Component)}}]);
//# sourceMappingURL=commons-94088fc27d7cd84826a1.js.map