self.AMP_CONFIG={"amp-consent":1,"chunked-amp":1,"hidden-mutation-observer":1,"expAdsenseCanonical":0.01,"canary":0,"expAdsenseUnconditionedCanonical":0.01,"amp-story-v1":1,"ad-type-custom":1,"linker-form":1,"no-sync-xhr-in-ads":1,"a4aProfilingRate":0.01,"allow-url-opt-in":["pump-early-frame","twitter-default-placeholder","twitter-default-placeholder-pulse","twitter-default-placeholder-fade"],"version-locking":1,"scroll-height-bounce":0,"amp-sidebar toolbar":1,"amp-auto-ads-adsense-holdout":0.1,"amp-list-resizable-children":1,"as-use-attr-for-format":0.01,"amp-auto-ads-adsense-responsive":0.05,"font-display-swap":1,"amp-ima-video":1,"amp-playbuzz":1,"amp-auto-ads":1,"pump-early-frame":1,"amp-date-picker":1,"amp-access-iframe":1,"a4aFastFetchAdSenseLaunched":0,"amp-list-viewport-resize":1,"doubleclickSraExp":0.01,"allow-doc-opt-in":["amp-date-picker","amp-next-page","ampdoc-shell","disable-amp-story-desktop","linker-meta-opt-in"],"amp-apester-media":1,"doubleclickSraReportExcludedBlock":0.1,"amp-live-list-sorting":1,"linker-meta-opt-in":1,"ampdoc-closest":0.01,"amp-story-responsive-units":1,"scroll-height-minheight":0,"user-error-reporting":1,"expAdsenseA4A":0.01,"a4aFastFetchDoubleclickLaunched":0,"no-initial-intersection":1,"sandbox-ads":1,"v":"011902081532110","type":"production"};/*AMP_CONFIG*/(function(){var h;function m(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function q(a){return m(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};function r(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=r(c[1],c[1]),e=c[2]?r(c[2],c[2]):"";b[d]=e}return b};var x="";
function y(a){var b=a||self;if(b.AMP_MODE)var c=b.AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=w(c.location.originalHash||c.location.hash);d=d.spt;var g=w(c.location.search);x||(x=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011902081532110");c=b.AMP_MODE={localDev:!1,development:!("1"!=f.development&&!c.AMP_DEV_MODE),examiner:"2"==f.development,filter:f.filter,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=g.amp_lite,test:e,log:f.log,version:"1902081532110",rtvVersion:x,
singlePassType:d}}return c};function ba(){var a=ca;self.reportError=a}function z(a,b,c){this.win=a;this.W=b;this.w=this.win.console&&this.win.console.log&&"0"!=y().log?this.W({localDev:!1,development:y(void 0).development,filter:y(void 0).filter,minified:!0,lite:y(void 0).lite,test:!1,log:y(void 0).log,version:y(void 0).version,rtvVersion:y(void 0).rtvVersion,singlePassType:y(void 0).singlePassType}):0;this.G=c||""}
function A(a,b,c){if(0!=a.w){var d=a.win.console.log;"ERROR"==b?d=a.win.console.error||d:"INFO"==b?d=a.win.console.info||d:"WARN"==b&&(d=a.win.console.warn||d);d.apply(a.win.console,c)}}h=z.prototype;h.isEnabled=function(){return 0!=this.w};h.fine=function(a,b){4<=this.w&&A(this,"FINE",Array.prototype.slice.call(arguments,1))};h.info=function(a,b){3<=this.w&&A(this,"INFO",Array.prototype.slice.call(arguments,1))};h.warn=function(a,b){2<=this.w&&A(this,"WARN",Array.prototype.slice.call(arguments,1))};
h.O=function(a,b){if(1<=this.w)A(this,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=B.apply(null,Array.prototype.slice.call(arguments,1));C(this,c);return c}};h.error=function(a,b){var c=this.O.apply(this,arguments);c&&(c.name=a||c.name,self.reportError(c))};h.expectedError=function(a,b){var c=this.O.apply(this,arguments);c&&(c.expected=!0,self.reportError(c))};h.createError=function(a){var b=B.apply(null,arguments);C(this,b);return b};
h.createExpectedError=function(a){var b=B.apply(null,arguments);C(this,b);b.expected=!0;return b};
h.assert=function(a,b,c){var d;if(!a){var e=(b||"Assertion failed").split("%s"),f=e.shift(),g=f,k=[],l=2;for(""!=f&&k.push(f);0<e.length;){var p=e.shift(),n=arguments[l++];n&&n.tagName&&(d=n);k.push(n);f=p.trim();""!=f&&k.push(f);f=n;g+=(f&&1==f.nodeType?f.tagName.toLowerCase()+(f.id?"#"+f.id:""):f)+p}l=Error(g);l.fromAssert=!0;l.associatedElement=d;l.messageArray=k;C(this,l);self.reportError(l);throw l;}return a};
h.assertElement=function(a,b){this.assert(a&&1==a.nodeType,(b||"Element expected")+": %s",a);return a};h.assertString=function(a,b){this.assert("string"==typeof a,(b||"String expected")+": %s",a);return a};h.assertNumber=function(a,b){this.assert("number"==typeof a,(b||"Number expected")+": %s",a);return a};h.assertArray=function(a,b){this.assert(Array.isArray(a),(b||"Array expected")+": %s",a);return a};h.assertBoolean=function(a,b){this.assert(!!a===a,(b||"Boolean expected")+": %s",a);return a};
h.assertEnumValue=function(a,b,c){a:{for(var d in a)if(a[d]===b){a=!0;break a}a=!1}if(a)return b;this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function C(a,b){b=D(b);a.G?b.message?-1==b.message.indexOf(a.G)&&(b.message+=a.G):b.message=a.G:0<=b.message.indexOf("\u200b\u200b\u200b")&&(b.message=b.message.replace("\u200b\u200b\u200b",""))}
function D(a){var b=Object.getOwnPropertyDescriptor(a,"message");if(b&&b.writable)return a;var c=a.stack,d=Error(a.message),e;for(e in a)d[e]=a[e];d.stack=c;return d}function B(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=D(e):(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}self.log=self.log||{user:null,dev:null,userForEmbed:null};var E=self.log,F=null;function G(){E.user||(E.user=da());return E.user}
function da(){var a="\u200b\u200b\u200b";if(!F)throw Error("failed to call initLogConstructor");return new F(self,function(a){var b=parseInt(a.log,10);return a.development||1<=b?4:2},a)}function H(){if(E.dev)return E.dev;if(!F)throw Error("failed to call initLogConstructor");return E.dev=new F(self,function(a){a=parseInt(a.log,10);return 3<=a?4:2<=a?3:0})};function I(a){return a||{}};function J(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};var K,L="Webkit webkit Moz moz ms O o".split(" ");function M(a,b,c){if(J(b,"--"))return b;K||(K=Object.create(null));var d=K[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<L.length;f++){var g=L[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(K[b]=d)}return d}function ea(a){var b={"pointer-events":"none"};a=a.style;for(var c in b)a.setProperty(M(a,c),b[c].toString(),"important")}
function N(a,b,c){var d;(b=M(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function O(a,b){for(var c in b)N(a,c,b[c])}function fa(a,b){for(var c=0;c<b.length;c++)N(a,b[c],null)};function ga(a,b,c){var d=150,e=c.width/2-b.width/2-b.left+"px",f=c.height/2-b.height/2-b.top+"px",g=b.top+"px",k=c.width-(b.left+b.width)+"px",l=b.left+"px",p=c.height-(b.top+b.height)+"px",n=b.height+"px",u=b.width+"px";var t=e;var v=f;"number"==typeof t&&(t+="px");void 0===v?t="translate("+t+")":("number"==typeof v&&(v+="px"),t="translate("+t+", "+v+")");O(a,{position:"fixed",top:g,right:k,left:l,bottom:p,height:n,width:u,transition:"transform "+d+"ms ease",transform:t,margin:0})};function P(a,b,c){a.requestAnimationFrame(function(){b.measure&&b.measure(c);b.mutate&&b.mutate(c)})}function ha(a){var b=200;setTimeout(a,b)};function ia(a,b,c){P(a,{measure:function(c){c.viewportSize={width:a.innerWidth,height:a.innerHeight};c.rect=q(b.getBoundingClientRect())},mutate:function(d){var e=d.viewportSize,f=m(0,0,e.width,e.height);ga(b,d.rect,d.viewportSize);ea(b);ha(function(){P(a,{mutate:function(){fa(b,["pointer-events"]);O(b,{position:"fixed","z-index":1E3,left:0,right:0,top:0,bottom:0,width:"100vw",height:"100vh",transition:null,transform:null,margin:0,border:0});c(d.rect,f)}})})}},{})}
function ja(a,b,c,d){P(a,{mutate:function(){fa(b,"position z-index left right top bottom width height margin border".split(" "));c();P(a,{measure:function(){d(q(b.getBoundingClientRect()))}})}})};function Q(a){this.o=a;this.H=this.K=!1;this.B=null;ma(this)}function ma(a){a.o.addEventListener("resize",function(){return a.onWindowResize()})}Q.prototype.onWindowResize=function(){this.K&&(this.H=!0)};Q.prototype.expandFrame=function(a,b){var c=this;ia(this.o,a,function(a,e){c.K=!0;c.H=!1;c.B=a;b(e)})};Q.prototype.collapseFrame=function(a,b){var c=this;ja(this.o,a,function(){c.K=!1;c.H||b(c.B)},function(a){c.B=a;c.H&&b(c.B)})};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function R(a,b,c){c=void 0===c?{}:c;var d=void 0===d?null:d;c.type=a;c.sentinel=b;return"amp-"+(d||"")+JSON.stringify(c)};function na(){this.h=null}h=na.prototype;h.add=function(a){var b=this;this.h||(this.h=[]);this.h.push(a);return function(){b.remove(a)}};h.remove=function(a){this.h&&(a=this.h.indexOf(a),-1<a&&this.h.splice(a,1))};h.removeAll=function(){this.h&&(this.h.length=0)};h.fire=function(a){if(this.h)for(var b=this.h,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.h?this.h.length:0};function oa(a,b){var c=100;function d(d){g=null;f=a.setTimeout(e,c);b.apply(null,d)}function e(){f=0;g&&d(g)}var f=0,g=null;return function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];f?g=b:d(b)}};function S(a){this.o=a;this.F=null;var b=this.o;a=b.document;if(a.scrollingElement)a=a.scrollingElement;else{var c;if(c=a.body)b=b.navigator.userAgent,c=/WebKit/i.test(b)&&!/Edge/i.test(b);a=c?a.body:a.documentElement}this.X=a;this.I=null}
S.prototype.observe=function(a,b){var c=this;if(!this.F){this.F=new na;var d=oa(this.o,function(){c.I=c.getViewportRect();c.F.fire()});this.I=this.getViewportRect();this.o.addEventListener("scroll",d,!0);this.o.addEventListener("resize",d,!0)}b({viewportRect:this.I,targetRect:this.getTargetRect(a)});return this.F.add(function(){b({viewportRect:c.I,targetRect:c.getTargetRect(a)})})};
S.prototype.getViewportRect=function(){var a=this.X,b=this.o,c=a.scrollLeft||b.pageXOffset,d=a.scrollTop||b.pageYOffset;return m(Math.round(c),Math.round(d),b.innerWidth,b.innerHeight)};S.prototype.getTargetRect=function(a){for(var b=q(a.getBoundingClientRect()),c=a.ownerDocument.defaultView,d=0,e=c;10>d&&e!=this.o&&e!=this.o.top;d++,e=e.parent){var f=q(e.frameElement.getBoundingClientRect());a=b;var g=f.left,k=f.top;b=0==g&&0==k||0==a.width&&0==a.height?a:m(a.left+g,a.top+k,a.width,a.height)}return b};function T(){this.L={}}T.prototype.listen=function(a,b){this.L[a]=b};T.prototype.fire=function(a,b,c){return a in this.L?this.L[a].apply(b,c):!1};function pa(a,b){this.C=b;this.j=Object.create(null);this.M=new S(a);this.D=new T;this.P=new Q(a);this.D.listen("send-positions",this.V);this.D.listen("full-overlay-frame",this.U);this.D.listen("cancel-full-overlay-frame",this.T)}h=pa.prototype;
h.processMessage=function(a){var b=a.data;if("string"==typeof b&&0==b.indexOf("amp-")&&-1!=b.indexOf("{")){var c=b.indexOf("{");try{var d=JSON.parse(b.substr(c))}catch(u){H().error("MESSAGING","Failed to parse message: "+b,u),d=null}}else d=null;if(!d||!d.sentinel)return!1;a:if(b=d.sentinel,this.j[b])b=this.j[b];else{if(c=this.getMeasureableFrame(a.source))for(var e=c.contentWindow,f=0;f<this.C.length;f++)for(var g=this.C[f],k=0,l=e;10>k;k++,l=l.parent){if(g.contentWindow==l){this.j[b]={iframe:g,
measurableFrame:c};b=this.j[b];break a}if(l==window.top)break}b=null}var p=b;if(!p)return H().info("InaboxMessagingHost","Ignored message from untrusted iframe:",a),!1;var n=p.iframe.dataset.ampAllowed;return n&&!n.split(/\s*,\s*/).includes(d.type)?(H().info("InaboxMessagingHost","Ignored non-whitelisted message type:",a),!1):this.D.fire(d.type,this,[p.measurableFrame,d,a.source,a.origin])?!0:(H().warn("InaboxMessagingHost","Unprocessed AMP message:",a),!1)};
h.V=function(a,b,c,d){var e=this.M.getViewportRect(),f=this.M.getTargetRect(a);qa(b,c,d,I({viewportRect:e,targetRect:f}));this.j[b.sentinel].observeUnregisterFn=this.j[b.sentinel].observeUnregisterFn||this.M.observe(a,function(a){return qa(b,c,d,a)});return!0};function qa(a,b,c,d){b.postMessage(R("position",a.sentinel,d),c)}h.U=function(a,b,c,d){this.P.expandFrame(a,function(a){c.postMessage(R("full-overlay-frame-response",b.sentinel,I({success:!0,boxRect:a})),d)});return!0};
h.T=function(a,b,c,d){this.P.collapseFrame(a,function(a){c.postMessage(R("cancel-full-overlay-frame-response",b.sentinel,I({success:!0,boxRect:a})),d)});return!0};h.getMeasureableFrame=function(a){if(!a)return null;for(var b,c=0,d=a;10>c&&d!=d.top&&!ra(d);c++,b=d,d=d.parent);if(b){c=b.parent.document.querySelectorAll("iframe");d=0;for(var e=c[d];d<c.length;d++,e=c[d])if(e.contentWindow==b)return e}return a.frameElement};
h.unregisterIframe=function(a){var b=this.C.indexOf(a);-1!=b&&this.C.splice(b,1);for(var c in this.j)this.j[c].iframe==a&&(this.j[c].observeUnregisterFn&&this.j[c].observeUnregisterFn(),delete this.j[c])};function ra(a){try{return!!a.location.href&&(a.test||!0)}catch(b){return!1}};function sa(a){a=a.__AMP_TOP||a;return ta(a,"ampdoc")}function ua(a){var b=va(a);b=va(b);b=b.isSingleDoc()?b.win:b;return ta(b,"viewer")}function va(a){return a.nodeType?sa((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function ta(a,b){var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function U(){var a=100;this.R=a;this.J=this.N=0;this.A=Object.create(null)}U.prototype.has=function(a){return!!this.A[a]};U.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.J,b.payload};U.prototype.put=function(a,b){this.has(a)||this.N++;this.A[a]={payload:b,access:this.J};if(!(this.N<=this.R)){H().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.J+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.N--)}};var V=self.AMP_CONFIG||{},wa={thirdParty:V.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:V.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof V.thirdPartyFrameRegex?new RegExp(V.thirdPartyFrameRegex):V.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:V.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof V.cdnProxyRegex?new RegExp(V.cdnProxyRegex):V.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:V.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:V.localDev||!1};I({c:!0,v:!0,a:!0,ad:!0});var W,xa;function ya(){var a=za();return function(b){return setTimeout(b,a())}}function za(){var a=0;return function(){var b=Math.pow(1.5,a++);var c=b*(c||.3)*Math.random();.5<Math.random()&&(c*=-1);b+=c;return 1E3*b}};var Aa=!1;function Ba(a){Aa||(Aa=!0,O(a.body,{opacity:1,visibility:"visible",animation:"none"}))};var X=self.AMPErrors||[];self.AMPErrors=X;function Y(a){Y=ya();return Y(a)}function Ca(a){try{return JSON.stringify(a)}catch(b){return String(a)}}var Z;
function ca(a,b){try{if(a)if(void 0!==a.message)a=D(a);else{var c=a;a=Error(Ca(c));a.origError=c}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;var d=b||a.associatedElement;d&&d.classList&&(d.classList.add("i-amphtml-error"),y().development&&(d.classList.add("i-amphtml-element-error"),d.setAttribute("error-message",a.message)));if(self.console){var e=console.error||console.log;a.messageArray?e.apply(console,a.messageArray):d?e.call(console,a.message,d):e.call(console,a.message)}d&&
d.S&&d.S("amp:error",a.message);Da.call(void 0,void 0,void 0,void 0,void 0,a)}catch(f){setTimeout(function(){throw f;})}return a}function Da(a,b,c,d,e){var f=this;this&&this.document&&Ba(this.document);if(!y().development){var g=!1;try{g=Ea()}catch(l){}if(!(g&&.01<Math.random())){var k=Fa(a,b,c,d,e,g);k&&Y(function(){return Ga(f,k)})}}}function Ga(a,b){return Ha(a,b).then(function(a){if(!a){var c=new XMLHttpRequest;c.open("POST",wa.errorReporting,!0);c.send(JSON.stringify(b))}})}
function Ha(a,b){var c=sa(a);if(!c.isSingleDoc())return Promise.resolve(!1);var d=c.getAmpDoc(),e=d.getRootNode().documentElement,f=e.hasAttribute("report-errors-to-viewer");if(!f)return Promise.resolve(!1);var g=ua(d);return g.hasCapability("errorReporter")?g.isTrustedViewer().then(function(a){if(!a)return!1;g.sendMessage("error",I({m:b.m,a:b.a,s:b.s,el:b.el,v:b.v,jse:b.jse}));return!0}):Promise.resolve(!1)}
function Fa(a,b,c,d,e,f){var g=a;e&&(g=e.message?e.message:String(e));g||(g="Unknown error");a=g;var k=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var l=!(self&&self.window),p=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||l)if(k=!0,.001<p)return;var n=0<=a.indexOf("\u200b\u200b\u200b");if(!(n&&.1<p)){g=Object.create(null);g.v=y().rtvVersion;g.noAmp=f?"1":"0";g.m=a.replace("\u200b\u200b\u200b","");g.a=n?"1":"0";g.ex=k?"1":"0";g.dw=l?"1":"0";var u="1p";self.context&&
self.context.location?(g["3p"]="1",u="3p"):y().runtime&&(u=y().runtime);y().singlePassType&&(g.spt=y().singlePassType);g.rt=u;"inabox"===u&&(g.adid=y().a4aId);f=self;g.ca=f.AMP_CONFIG&&f.AMP_CONFIG.canary?"1":"0";f=self;g.bt=f.AMP_CONFIG&&f.AMP_CONFIG.type?f.AMP_CONFIG.type:"unknown";self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(g.or=self.location.ancestorOrigins[0]);self.viewerState&&(g.vs=self.viewerState);self.parent&&self.parent!=self&&(g.iem="1");if(self.AMP&&self.AMP.viewer){var t=
self.AMP.viewer.getResolvedViewerUrl(),v=self.AMP.viewer.maybeGetMessagingOrigin();t&&(g.rvu=t);v&&(g.mso=v)}Z||(Z=Ia());g.jse=Z;var ka=[];f=self.__AMP__EXPERIMENT_TOGGLES||null;for(var la in f)ka.push(la+"="+(f[la]?"1":"0"));g.exps=ka.join(",");e?(g.el=e.associatedElement?e.associatedElement.tagName:"u",e.args&&(g.args=JSON.stringify(e.args)),n||e.ignoreStack||!e.stack||(g.s=e.stack),e.message&&(e.message+=" _reported_")):(g.f=b||"",g.l=c||"",g.c=d||"");g.r=self.document.referrer;g.ae=X.join(",");
g.fr=self.location.originalHash||self.location.hash;b=a;c=X;25<=c.length&&c.splice(0,c.length-25+1);c.push(b);return g}}}
function Ea(){for(var a=self.document.querySelectorAll("script[src]"),b=0;b<a.length;b++){var c=a[b].src.toLowerCase();if("string"==typeof c){W||(W=self.document.createElement("a"),xa=self.UrlCache||(self.UrlCache=new U));var d=xa,e=W;if(d&&d.has(c))c=d.get(c);else{e.href=c;e.protocol||(e.href=e.href);var f={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};"/"!==f.pathname[0]&&(f.pathname="/"+f.pathname);
if("http:"==f.protocol&&80==f.port||"https:"==f.protocol&&443==f.port)f.port="",f.host=f.hostname;f.origin=e.origin&&"null"!=e.origin?e.origin:"data:"!=f.protocol&&f.host?f.protocol+"//"+f.host:f.href;e=f;d&&d.put(c,e);c=e}}if(!wa.cdnProxyRegex.test(c.origin))return!0}return!1}
function Ia(){function a(){}a.prototype.t=function(){throw Error("message");};var b=new a;try{b.t()}catch(d){b=d.stack;if(J(b,"t@"))return"Safari";if(-1<b.indexOf(".prototype.t@"))return"Firefox";var c=b.split("\n").pop();if(/\bat .* \(/i.test(c))return"IE";if(J(b,"Error: message"))return"Chrome"}return"unknown"};new function(a){if(a.ampInaboxInitialized)H().info("inabox-host","Skip a 2nd attempt of initializing AMP inabox host.");else{a.ampInaboxInitialized=!0;F=z;H();G();ba();a.ampInaboxIframes&&!Array.isArray(a.ampInaboxIframes)&&(H().info("inabox-host","Invalid %s. %s","ampInaboxIframes",a.ampInaboxIframes),a.ampInaboxIframes=[]);var b=new pa(a,a.ampInaboxIframes);a.AMP=a.AMP||{};a.AMP.inaboxUnregisterIframe?H().info("inabox-host","win.AMP[inaboxUnregisterIframe] already defined}"):a.AMP.inaboxUnregisterIframe=
b.unregisterIframe.bind(b);var c=a.ampInaboxPendingMessages,d=function(a){try{b.processMessage(a)}catch(f){H().error("inabox-host","Error processing inabox message",a,f)}};c&&(Array.isArray(c)?c.forEach(function(a){var b=!(!a.source||!a.source.postMessage);b||G().error("inabox-host","Missing message.source. message.data="+JSON.stringify(a.data));b&&d(a)}):H().info("inabox-host","Invalid %s %s","ampInaboxPendingMessages",c));a.ampInaboxPendingMessages=[];a.ampInaboxPendingMessages.push=function(){};
a.addEventListener("message",d.bind(b))}}(self);})();
//# sourceMappingURL=amp4ads-host-v0.js.map
