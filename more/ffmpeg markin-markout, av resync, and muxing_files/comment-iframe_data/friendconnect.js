window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {var gadgets=gadgets||{};
gadgets.log=function(A){gadgets.log.logAtLevel(gadgets.log.INFO,A)
};
gadgets.warn=function(A){gadgets.log.logAtLevel(gadgets.log.WARNING,A)
};
gadgets.error=function(A){gadgets.log.logAtLevel(gadgets.log.ERROR,A)
};
gadgets.setLogLevel=function(A){gadgets.log.logLevelThreshold_=A
};
gadgets.log.logAtLevel=function(C,B){if(C<gadgets.log.logLevelThreshold_||!window.console){return 
}var A=window.console.log;
if(C==gadgets.log.WARNING&&window.console.warn){A=window.console.warn
}else{if(C==gadgets.log.ERROR&&window.console.error){A=window.console.error
}}A(B)
};
gadgets.log.INFO=1;
gadgets.log.WARNING=2;
gadgets.log.ERROR=3;
gadgets.log.NONE=4;
gadgets.log.logLevelThreshold_=gadgets.log.INFO;;
var gadgets=gadgets||{};
gadgets.util=function(){function G(){var L;
var K=document.location.href;
var I=K.indexOf("?");
var J=K.indexOf("#");
if(J===-1){L=K.substr(I+1)
}else{L=[K.substr(I+1,J-I-1),"&",K.substr(J+1)].join("")
}return L.split("&")
}var E=null;
var D={};
var C={};
var F=[];
var A={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true};
function B(I,J){return String.fromCharCode(J)
}function H(I){D=I["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,H)
}return{getUrlParameters:function(){if(E!==null){return E
}E={};
var L=G();
var O=window.decodeURIComponent?decodeURIComponent:unescape;
for(var J=0,I=L.length;
J<I;
++J){var N=L[J].indexOf("=");
if(N===-1){continue
}var M=L[J].substring(0,N);
var K=L[J].substring(N+1);
K=K.replace(/\+/g," ");
E[M]=O(K)
}return E
},makeClosure:function(L,N,M){var K=[];
for(var J=2,I=arguments.length;
J<I;
++J){K.push(arguments[J])
}return function(){var O=K.slice();
for(var Q=0,P=arguments.length;
Q<P;
++Q){O.push(arguments[Q])
}return N.apply(L,O)
}
},makeEnum:function(J){var L={};
for(var K=0,I;
(I=J[K]);
++K){L[I]=I
}return L
},getFeatureParameters:function(I){return typeof D[I]==="undefined"?null:D[I]
},hasFeature:function(I){return typeof D[I]!=="undefined"
},getServices:function(){return C
},registerOnLoadHandler:function(I){F.push(I)
},runOnLoadHandlers:function(){for(var J=0,I=F.length;
J<I;
++J){F[J]()
}},escape:function(I,M){if(!I){return I
}else{if(typeof I==="string"){return gadgets.util.escapeString(I)
}else{if(typeof I==="array"){for(var L=0,J=I.length;
L<J;
++L){I[L]=gadgets.util.escape(I[L])
}}else{if(typeof I==="object"&&M){var K={};
for(var N in I){if(I.hasOwnProperty(N)){K[gadgets.util.escapeString(N)]=gadgets.util.escape(I[N],true)
}}return K
}}}}return I
},escapeString:function(M){var J=[],L,N;
for(var K=0,I=M.length;
K<I;
++K){L=M.charCodeAt(K);
N=A[L];
if(N===true){J.push("&#",L,";")
}else{if(N!==false){J.push(M.charAt(K))
}}}return J.join("")
},unescapeString:function(I){return I.replace(/&#([0-9]+);/g,B)
}}
}();
gadgets.util.getUrlParameters();;
var gadgets=gadgets||{};
if(window.JSON){gadgets.json={parse:function(B){try{return window.JSON.parse(B)
}catch(A){return false
}},stringify:function(B){try{return window.JSON.stringify(B)
}catch(A){return null
}}}
}else{gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/["\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.wpm=function(){var A;
return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(B,C){A=C;
var D=function(E){B(gadgets.json.parse(E.data))
};
if(typeof window.addEventListener!="undefined"){window.addEventListener("message",D,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onmessage",D)
}}A("..",true);
return true
},setup:function(C,B){if(C===".."){gadgets.rpc.call(C,gadgets.rpc.ACK)
}return true
},call:function(B,F,D){var C=B===".."?parent:window.frames[B];
var E=gadgets.rpc.getRelayUrl(B);
if(E){C.postMessage(gadgets.json.stringify(D),E)
}else{gadgets.error("No relay set, cannot send cross-domain message")
}return true
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.frameElement=function(){var E="__g2c_rpc";
var B="__c2g_rpc";
var D;
var C;
function A(G,K,J){try{if(K!==".."){var F=window.frameElement;
if(typeof F[E]==="function"){if(typeof F[E][B]!=="function"){F[E][B]=function(L){D(gadgets.json.parse(L))
}
}F[E](gadgets.json.stringify(J));
return 
}}else{var I=document.getElementById(G);
if(typeof I[E]==="function"&&typeof I[E][B]==="function"){I[E][B](gadgets.json.stringify(J));
return 
}}}catch(H){}return true
}return{getCode:function(){return"fe"
},isParentVerifiable:function(){return false
},init:function(F,G){D=F;
C=G;
return true
},setup:function(J,F){if(J!==".."){try{var I=document.getElementById(J);
I[E]=function(K){D(gadgets.json.parse(K))
}
}catch(H){return false
}}if(J===".."){C("..",true);
var G=function(){window.setTimeout(function(){gadgets.rpc.call(J,gadgets.rpc.ACK)
},500)
};
gadgets.util.registerOnLoadHandler(G)
}return true
},call:function(F,H,G){A(F,H,G)
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.nix=function(){var C="GRPC____NIXVBS_wrapper";
var D="GRPC____NIXVBS_get_wrapper";
var F="GRPC____NIXVBS_handle_message";
var B="GRPC____NIXVBS_create_channel";
var A=10;
var J=500;
var I={};
var H;
var G=0;
function E(){var L=I[".."];
if(L){return 
}if(++G>A){gadgets.warn("Nix transport setup failed, falling back...");
H("..",false);
return 
}if(!L&&window.opener&&"GetAuthToken" in window.opener){L=window.opener;
if(L.GetAuthToken()==gadgets.rpc.getAuthToken("..")){var K=gadgets.rpc.getAuthToken("..");
L.CreateChannel(window[D]("..",K),K);
I[".."]=L;
window.opener=null;
H("..",true);
return 
}}window.setTimeout(function(){E()
},J)
}return{getCode:function(){return"nix"
},isParentVerifiable:function(){return false
},init:function(L,M){H=M;
if(typeof window[D]!=="unknown"){window[F]=function(O){window.setTimeout(function(){L(gadgets.json.parse(O))
},0)
};
window[B]=function(O,Q,P){if(gadgets.rpc.getAuthToken(O)===P){I[O]=Q;
H(O,true)
}};
var K="Class "+C+"\n Private m_Intended\nPrivate m_Auth\nPublic Sub SetIntendedName(name)\n If isEmpty(m_Intended) Then\nm_Intended = name\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\n If isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Sub SendMessage(data)\n "+F+"(data)\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub CreateChannel(channel, auth)\n Call "+B+"(m_Intended, channel, auth)\nEnd Sub\nEnd Class\nFunction "+D+"(name, auth)\nDim wrap\nSet wrap = New "+C+"\nwrap.SetIntendedName name\nwrap.SetAuth auth\nSet "+D+" = wrap\nEnd Function";
try{window.execScript(K,"vbscript")
}catch(N){return false
}}return true
},setup:function(O,K){if(O===".."){E();
return true
}try{var M=document.getElementById(O);
var N=window[D](O,K);
M.contentWindow.opener=N
}catch(L){return false
}return true
},call:function(K,N,M){try{if(I[K]){I[K].SendMessage(gadgets.json.stringify(M))
}}catch(L){return false
}return true
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.rmr=function(){var G=500;
var E=10;
var H={};
var B;
var I;
function K(O,M,N){var P=function(){document.body.appendChild(O);
O.src="about:blank";
O.src=M+"#"+N
};
if(document.body){P()
}else{gadgets.util.registerOnLoadHandler(function(){P()
})
}}function C(O){if(typeof H[O]==="object"){return 
}var P=document.createElement("iframe");
var M=P.style;
M.position="absolute";
M.top="0px";
M.border="0";
M.opacity="0";
M.width="10px";
M.height="1px";
P.id="rmrtransport-"+O;
P.name=P.id;
var N=gadgets.rpc.getOrigin(gadgets.rpc.getRelayUrl(O))+"/robots.txt";
H[O]={frame:P,receiveWindow:null,relayUri:N,searchCounter:0,width:10,waiting:true,queue:[],sendId:0,recvId:0};
if(O!==".."){K(P,N,A(O))
}D(O)
}function D(N){var O=null;
H[N].searchCounter++;
if(N===".."){O=window.parent.frames["rmrtransport-"+window.name]
}else{O=window.frames[N].frames["rmrtransport-.."]
}var M=false;
if(O){M=F(N,O)
}if(!M){if(H[N].searchCounter>E){return 
}setTimeout(function(){D(N)
},G)
}}function J(N,P,T,S){var O=null;
if(T!==".."){O=H[".."]
}else{O=H[N]
}if(O){if(P!==gadgets.rpc.ACK){O.queue.push(S)
}if(O.waiting||(O.queue.length===0&&!(P===gadgets.rpc.ACK&&S&&S.ackAlone===true))){return true
}if(O.queue.length>0){O.waiting=true
}var M=O.relayUri+"#"+A(N);
try{O.frame.contentWindow.location=M;
var Q=O.width==10?20:10;
O.frame.style.width=Q+"px";
O.width=Q
}catch(R){return false
}}return true
}function A(N){var O=H[N];
var M={id:O.sendId};
if(O){M.d=Array.prototype.slice.call(O.queue,0);
M.d.push({s:gadgets.rpc.ACK,id:O.recvId})
}return gadgets.json.stringify(M)
}function L(X){var U=H[X];
var Q=U.receiveWindow.location.hash.substring(1);
var Y=gadgets.json.parse(decodeURIComponent(Q))||{};
var N=Y.d||[];
var O=false;
var T=false;
var V=0;
var M=(U.recvId-Y.id);
for(var P=0;
P<N.length;
++P){var S=N[P];
if(S.s===gadgets.rpc.ACK){I(X,true);
if(U.waiting){T=true
}U.waiting=false;
var R=Math.max(0,S.id-U.sendId);
U.queue.splice(0,R);
U.sendId=Math.max(U.sendId,S.id||0);
continue
}O=true;
if(++V<=M){continue
}++U.recvId;
B(S)
}if(O||(T&&U.queue.length>0)){var W=(X==="..")?window.name:"..";
J(X,gadgets.rpc.ACK,W,{ackAlone:O})
}}function F(P,R){var O=H[P];
try{var N=false;
N="document" in R;
if(!N){return false
}N=typeof R.document=="object";
if(!N){return false
}var Q=R.location.href;
if(Q==="about:blank"){return false
}}catch(M){return false
}O.receiveWindow=R;
R.onresize=function(){L(P)
};
if(P===".."){K(O.frame,O.relayUri,A(P))
}L(P);
return true
}return{getCode:function(){return"rmr"
},isParentVerifiable:function(){return true
},init:function(M,N){B=M;
I=N;
return true
},setup:function(O,M){try{C(O)
}catch(N){gadgets.warn("Caught exception setting up RMR: "+N);
return false
}return true
},call:function(M,O,N){return J(M,N.s,O,N)
}}
}();;
var gadgets=gadgets||{};
gadgets.rpctx=gadgets.rpctx||{};
gadgets.rpctx.ifpc=function(){var E=[];
var D=0;
var C;
function B(H){var F=[];
for(var I=0,G=H.length;
I<G;
++I){F.push(encodeURIComponent(gadgets.json.stringify(H[I])))
}return F.join("&")
}function A(I){var G;
for(var F=E.length-1;
F>=0;
--F){var J=E[F];
try{if(J&&(J.recyclable||J.readyState==="complete")){J.parentNode.removeChild(J);
if(window.ActiveXObject){E[F]=J=null;
E.splice(F,1)
}else{J.recyclable=false;
G=J;
break
}}}catch(H){}}if(!G){G=document.createElement("iframe");
G.style.border=G.style.width=G.style.height="0px";
G.style.visibility="hidden";
G.style.position="absolute";
G.onload=function(){this.recyclable=true
};
E.push(G)
}G.src=I;
setTimeout(function(){document.body.appendChild(G)
},0)
}return{getCode:function(){return"ifpc"
},isParentVerifiable:function(){return true
},init:function(F,G){C=G;
C("..",true);
return true
},setup:function(G,F){C(G,true);
return true
},call:function(F,K,I){var J=gadgets.rpc.getRelayUrl(F);
++D;
if(!J){gadgets.warn("No relay file assigned for IFPC");
return 
}var H=null;
if(I.l){var G=I.a;
H=[J,"#",B([K,D,1,0,B([K,I.s,"","",K].concat(G))])].join("")
}else{H=[J,"#",F,"&",K,"@",D,"&1&0&",encodeURIComponent(gadgets.json.stringify(I))].join("")
}A(H);
return true
}}
}();;
var gadgets=gadgets||{};
gadgets.rpc=function(){var O="__cb";
var M="";
var F="__ack";
var L=500;
var G=10;
var B={};
var C={};
var S={};
var H={};
var J=0;
var b={};
var R={};
var D={};
var Z={};
var I={};
var Q={};
var T=(window.top!==window.self);
var a=(function(){function c(d){return function(){gadgets.info("gadgets.rpc."+d+"("+gadgets.json.stringify(arguments)+"): call ignored. [caller: "+document.location+", isGadget: "+T+"]")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:c("init"),setup:c("setup"),call:c("call")}
})();
if(gadgets.util){Z=gadgets.util.getUrlParameters()
}H[".."]=Z.rpctoken||Z.ifpctok||0;
var U=(Z.rpc_earlyq==="1");
function A(){return typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?gadgets.rpctx.nix:navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc
}function W(h,f){var d=X;
if(!f){d=a
}I[h]=d;
var c=Q[h]||[];
for(var e=0;
e<c.length;
++e){var g=c[e];
g.t=gadgets.rpc.getAuthToken(h);
d.call(h,g.f,g)
}Q[h]=[]
}function P(d){if(d&&typeof d.s==="string"&&typeof d.f==="string"&&d.a instanceof Array){if(H[d.f]){if(H[d.f]!==d.t){throw new Error("Invalid auth token. "+H[d.f]+" vs "+d.t)
}}if(d.s===F){window.setTimeout(function(){W(d.f,true)
},0);
return 
}if(d.c){d.callback=function(e){gadgets.rpc.call(d.f,O,null,d.c,e)
}
}var c=(B[d.s]||B[M]).apply(d,d.a);
if(d.c&&typeof c!=="undefined"){gadgets.rpc.call(d.f,O,null,d.c,c)
}}}function Y(e){if(!e){return""
}e=e.toLowerCase();
if(e.indexOf("//")==0){e=window.location.protocol+":"+e
}if(e.indexOf("http://")!=0&&e.indexOf("https://")!=0){e=window.location.protocol+"://"+e
}var f=e.substring(e.indexOf("://")+3);
var c=f.indexOf("/");
if(c!=-1){f=f.substring(0,c)
}var h=e.substring(0,e.indexOf("://"));
var g="";
var i=f.indexOf(":");
if(i!=-1){var d=f.substring(i+1);
f=f.substring(0,i);
if((h==="http"&&d!=="80")||(h==="https"&&d!=="443")){g=":"+d
}}return h+"://"+f+g
}var X=A();
B[M]=function(){gadgets.warn("Unknown RPC service: "+this.s)
};
B[O]=function(d,c){var e=b[d];
if(e){delete b[d];
e(c)
}};
function K(e,c){if(R[e]===true){return 
}if(typeof R[e]==="undefined"){R[e]=0
}var d=document.getElementById(e);
if(e===".."||d!=null){if(X.setup(e,c)===true){R[e]=true;
return 
}}if(R[e]!==true&&R[e]++<G){window.setTimeout(function(){K(e,c)
},L)
}else{X=a;
R[e]=true
}}function E(d,h){if(typeof D[d]==="undefined"){D[d]=false;
var g=gadgets.rpc.getRelayUrl(d);
if(Y(g)!==Y(window.location.href)){return false
}var f=null;
if(d===".."){f=parent
}else{f=frames[d]
}try{D[d]=f.gadgets.rpc.receiveSameDomain
}catch(c){gadgets.error("Same domain call failed: parent= incorrectly set.")
}}if(typeof D[d]==="function"){D[d](h);
return true
}return false
}if(T&&gadgets.config){function V(e){var g=e?e.rpc:{};
var d=g.parentRelayUrl;
if(d.substring(0,7)!=="http://"&&d.substring(0,8)!=="https://"&&d.substring(0,2)!=="//"){if(Z.parent!==""){if(d.substring(0,1)!=="/"){var c=Z.parent.lastIndexOf("/");
d=Z.parent.substring(0,c+1)+d
}else{d=Y(Z.parent)+d
}}}C[".."]=d;
var f=!!g.useLegacyProtocol;
S[".."]=f;
if(f){X=gadgets.rpctx.ifpc;
X.init(P,W)
}if(X.setup("..")===false){X=a
}}var N={parentRelayUrl:gadgets.config.NonEmptyStringValidator};
gadgets.config.register("rpc",N,V)
}return{register:function(d,c){if(d===O||d===F){throw new Error("Cannot overwrite callback/ack service")
}if(d===M){throw new Error("Cannot overwrite default service: use registerDefault")
}B[d]=c
},unregister:function(c){if(c===O||c===F){throw new Error("Cannot delete callback/ack service")
}if(c===M){throw new Error("Cannot delete default service: use unregisterDefault")
}delete B[c]
},registerDefault:function(c){B[M]=c
},unregisterDefault:function(){delete B[M]
},forceParentVerifiable:function(){if(!X.isParentVerifiable()){X=gadgets.rpctx.ifpc
}},call:function(c,d,i,g){c=c||"..";
var h="..";
if(c===".."){h=window.name
}++J;
if(i){b[J]=i
}var f={s:d,f:h,c:i?J:0,a:Array.prototype.slice.call(arguments,3),t:H[c],l:S[c]};
if(E(c,f)){return 
}var e=U?I[c]:X;
if(!e){if(!Q[c]){Q[c]=[f]
}else{Q[c].push(f)
}return 
}if(S[c]){e=gadgets.rpctx.ifpc
}if(e.call(c,h,f)===false){X=a;
X.call(c,h,f)
}},getRelayUrl:function(d){var c=C[d];
if(c&&c.indexOf("//")==0){c=document.location.protocol+c
}return c
},setRelayUrl:function(d,c,e){C[d]=c;
S[d]=!!e
},setAuthToken:function(c,d){d=d||"";
H[c]=String(d);
K(c,d)
},getAuthToken:function(c){return H[c]
},getRelayChannel:function(){return X.getCode()
},receive:function(c){if(c.length>4){P(gadgets.json.parse(decodeURIComponent(c[c.length-1])))
}},receiveSameDomain:function(c){c.a=Array.prototype.slice.call(c.a);
window.setTimeout(function(){P(c)
},0)
},getOrigin:Y,init:function(){if(X.init(P,W)===false){X=a
}},ACK:F}
}();
gadgets.rpc.init();;
var friendconnect_serverBase = "http://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://ps.friendconnect.gmodules.com/gadgets";
var friendconnect_serverVersion = "0.419.1";
var friendconnect_imageUrl = "http://www.google.com/friendconnect/scs/images";
function fca(a){throw a;}var fcb=true,fcc=null,fcd=false,fce=gadgets,fcf=friendconnect_serverBase,fcg=encodeURIComponent,fcaa=parseInt,fch=String,fci=window,fcj=Object,fck=document,fcl=Math;function fcba(a,b){return a.toString=b}function fcca(a,b){return a.length=b}function fcm(a,b){return a.width=b}function fcn(a,b){return a.innerHTML=b}function fco(a,b){return a.height=b}
var fcp="appendChild",fcq="push",fcr="length",fcda="propertyIsEnumerable",fcea="stringify",fc="prototype",fcfa="test",fcs="width",fct="round",fcu="replace",fcv="document",fcga="data",fcw="split",fcx="getElementById",fcha="offsetWidth",fcy="location",fcz="getUrlParameters",fcA="indexOf",fcB="style",fcC="left",fcD="call",fcE="match",fcF="options",fcia="random",fcG="createElement",fcja="json",fcka="forEach",fcH="addEventListener",fcI="bottom",fcJ="setAttribute",fcla="href",fcK="util",fcma="type",fcna=
"contains",fcL="apply",fcM="name",fcN="parentNode",fcoa="display",fcO="height",fcpa="offsetHeight",fcP="register",fcqa="join",fcQ="toLowerCase",fcR="right",goog=goog||{},fcS=this,fcsa=function(a,b,c){var d=a[fcw]("."),e=c||fcS;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var h;d[fcr]&&(h=d.shift());)if(!d[fcr]&&fcra(b))e[h]=b;else e=e[h]?e[h]:(e[h]={})},fcta=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof fcj)&&fcj[fc].toString[fcD](a)=="[object Array]"||
typeof a[fcr]=="number"&&typeof a.splice!="undefined"&&typeof a[fcda]!="undefined"&&!a[fcda]("splice"))return"array";if(!(a instanceof fcj)&&(fcj[fc].toString[fcD](a)=="[object Function]"||typeof a[fcD]!="undefined"&&typeof a[fcda]!="undefined"&&!a[fcda]("call")))return"function"}else return"null";else if(b=="function"&&typeof a[fcD]=="undefined")return"object";return b},fcra=function(a){return a!==undefined},fcua=function(a){var b=fcta(a);return b=="array"||b=="object"&&typeof a[fcr]=="number"},
fcva=function(a){return typeof a=="string"},fcwa=function(a){var b=fcta(a);return b=="object"||b=="array"||b=="function"};"closure_hashCode_"+fcl.floor(fcl[fcia]()*2147483648).toString(36);
var fcxa=function(a){var b=fcta(a);if(b=="object"||b=="array"){if(a.clone)return a.clone[fcD](a);var c=b=="array"?[]:{};for(var d in a)c[d]=fcxa(a[d]);return c}return a},fcT=function(a,b){var c=a.Yb;if(arguments[fcr]>2){var d=Array[fc].slice[fcD](arguments,2);c&&d.unshift[fcL](d,c);c=d}b=a.$b||b;a=a.Zb||a;var e,h=b||fcS;e=c?function(){var j=Array[fc].slice[fcD](arguments);j.unshift[fcL](j,c);return a[fcL](h,j)}:function(){return a[fcL](h,arguments)};e.Yb=c;e.$b=b;e.Zb=a;return e},fcya=function(a){var b=
Array[fc].slice[fcD](arguments,1);b.unshift(a,fcc);return fcT[fcL](fcc,b)},fcza=Date.now||function(){return(new Date).getTime()},fcU=function(a,b,c){fcsa(a,b,c)},fcV=function(a,b){function c(){}c.prototype=b[fc];a.gc=b[fc];a.prototype=new c;a[fc].constructor=a};var fcAa=/\s*;\s*/,fcBa=function(a,b,c,d,e){if(/[;=]/[fcfa](a))fca(Error('Invalid cookie name "'+a+'"'));if(/;/[fcfa](b))fca(Error('Invalid cookie value "'+b+'"'));fcra(c)||(c=-1);var h=e?";domain="+e:"",j=d?";path="+d:"",k;if(c<0)k="";else if(c==0){var i=new Date(1970,1,1);k=";expires="+i.toUTCString()}else{var l=new Date((new Date).getTime()+c*1000);k=";expires="+l.toUTCString()}fck.cookie=a+"="+b+h+j+k},fcCa=function(a,b){for(var c=a+"=",d=fch(fck.cookie)[fcw](fcAa),e=0,h;h=d[e];e++)if(h[fcA](c)==
0)return h.substr(c[fcr]);return b},fcDa=function(a,b,c){var d=fcra(fcCa(a));fcBa(a,"",0,b,c);return d};var fcEa=function(a,b,c){if(a[fcA])return a[fcA](b,c);if(Array[fcA])return Array[fcA](a,b,c);for(var d=c==fcc?0:c<0?fcl.max(0,a[fcr]+c):c,e=d;e<a[fcr];e++)if(e in a&&a[e]===b)return e;return-1},fcFa=function(a,b,c){if(a[fcka])a[fcka](b,c);else if(Array[fcka])Array[fcka](a,b,c);else for(var d=a[fcr],e=fcva(a)?a[fcw](""):a,h=0;h<d;h++)h in e&&b[fcD](c,e[h],h,a)},fcGa=function(a,b){if(a[fcna])return a[fcna](b);return fcEa(a,b)>-1},fcHa=function(a){if(fcta(a)=="array")return a.concat();else{for(var b=
[],c=0,d=a[fcr];c<d;c++)b[c]=a[c];return b}};var fcIa=function(a,b){this.x=fcra(a)?a:0;this.y=fcra(b)?b:0};fcIa[fc].clone=function(){return new fcIa(this.x,this.y)};fcba(fcIa[fc],function(){return"("+this.x+", "+this.y+")"});var fcW=function(a,b){fcm(this,a);fco(this,b)};fcW[fc].clone=function(){return new fcW(this[fcs],this[fcO])};fcba(fcW[fc],function(){return"("+this[fcs]+" x "+this[fcO]+")"});fcW[fc].ceil=function(){fcm(this,fcl.ceil(this[fcs]));fco(this,fcl.ceil(this[fcO]));return this};fcW[fc].floor=function(){fcm(this,fcl.floor(this[fcs]));fco(this,fcl.floor(this[fcO]));return this};fcW[fc].round=function(){fcm(this,fcl[fct](this[fcs]));fco(this,fcl[fct](this[fcO]));return this};
fcW[fc].scale=function(a){this.width*=a;this.height*=a;return this};var fcJa=function(a,b,c){for(var d in a)b[fcD](c,a[d],d,a)},fcKa=function(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b},fcLa=function(a){var b=[],c=0;for(var d in a)b[c++]=d;return b},fcMa=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],fcNa=function(a){for(var b,c,d=1;d<arguments[fcr];d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<fcMa[fcr];e++){b=fcMa[e];if(fcj[fc].hasOwnProperty[fcD](c,b))a[b]=c[b]}}};var fcOa=function(a){return a[fcu](/^[\s\xa0]+|[\s\xa0]+$/g,"")},fcPa=function(a,b){var c=fch(a)[fcQ](),d=fch(b)[fcQ]();return c<d?-1:c==d?0:1},fcVa=function(a,b){if(b)return a[fcu](fcQa,"&amp;")[fcu](fcRa,"&lt;")[fcu](fcSa,"&gt;")[fcu](fcTa,"&quot;");else{if(!fcUa[fcfa](a))return a;if(a[fcA]("&")!=-1)a=a[fcu](fcQa,"&amp;");if(a[fcA]("<")!=-1)a=a[fcu](fcRa,"&lt;");if(a[fcA](">")!=-1)a=a[fcu](fcSa,"&gt;");if(a[fcA]('"')!=-1)a=a[fcu](fcTa,"&quot;");return a}},fcQa=/&/g,fcRa=/</g,fcSa=/>/g,fcTa=/\"/g,
fcUa=/[&<>\"]/,fcWa=function(a,b){return a[fcA](b)!=-1},fcYa=function(a,b){for(var c=0,d=fcOa(fch(a))[fcw]("."),e=fcOa(fch(b))[fcw]("."),h=fcl.max(d[fcr],e[fcr]),j=0;c==0&&j<h;j++){var k=d[j]||"",i=e[j]||"",l=new RegExp("(\\d*)(\\D*)","g"),m=new RegExp("(\\d*)(\\D*)","g");do{var f=l.exec(k)||["","",""],g=m.exec(i)||["","",""];if(f[0][fcr]==0&&g[0][fcr]==0)break;var n=f[1][fcr]==0?0:fcaa(f[1],10),o=g[1][fcr]==0?0:fcaa(g[1],10);c=fcXa(n,o)||fcXa(f[2][fcr]==0,g[2][fcr]==0)||fcXa(f[2],g[2])}while(c==
0)}return c},fcXa=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};fcza();var fcX,fcZa,fc_a,fc0a,fc1a,fc2a,fc3a,fc4a,fc5a,fc6a,fc7a=function(){return fcS.navigator?fcS.navigator.userAgent:fcc},fc8a=function(){return fcS.navigator},fc9a=function(){fc2a=fc1a=fc0a=fc_a=fcZa=fcX=fcd;var a;if(a=fc7a()){var b=fc8a();fcX=a[fcA]("Opera")==0;fcZa=!fcX&&a[fcA]("MSIE")!=-1;fc0a=(fc_a=!fcX&&a[fcA]("WebKit")!=-1)&&a[fcA]("Mobile")!=-1;fc2a=(fc1a=!fcX&&!fc_a&&b.product=="Gecko")&&b.vendor=="Camino"}};fc9a();
var fc$a=fcX,fcY=fcZa,fcab=fc1a,fcbb=fc_a,fccb=function(){var a=fc8a();return a&&a.platform||""},fcdb=fccb(),fceb=function(){fc3a=fcWa(fcdb,"Mac");fc4a=fcWa(fcdb,"Win");fc5a=fcWa(fcdb,"Linux");fc6a=!!fc8a()&&fcWa(fc8a().appVersion||"","X11")};fceb();
var fcfb=function(){var a="",b;if(fc$a&&fcS.opera){var c=fcS.opera.version;a=typeof c=="function"?c():c}else{if(fcab)b=/rv\:([^\);]+)(\)|;)/;else if(fcY)b=/MSIE\s+([^\);]+)(\)|;)/;else if(fcbb)b=/WebKit\/(\S+)/;if(b){var d=b.exec(fc7a());a=d?d[1]:""}}return a},fcgb=fcfb(),fchb={},fcib=function(a){return fchb[a]||(fchb[a]=fcYa(fcgb,a)>=0)};var fcZ=function(a){return fcva(a)?fck[fcx](a):a},fcjb=fcZ,fclb=function(a,b,c){return fckb(fck,a,b,c)},fckb=function(a,b,c,d){var e=d||a,h=b&&b!="*"?b[fcQ]():"";if(e.querySelectorAll&&(h||c)&&(!fcbb||a.compatMode=="CSS1Compat"||fcib("528"))){var j=h+(c?"."+c:"");return e.querySelectorAll(j)}if(c&&e.getElementsByClassName){var k=e.getElementsByClassName(c);if(h){for(var i={},l=0,m=0,f;f=k[m];m++)if(h==f.nodeName[fcQ]())i[l++]=f;fcca(i,l);return i}else return k}k=e.getElementsByTagName(h||"*");if(c){i=
{};for(m=l=0;f=k[m];m++){var g=f.className;if(typeof g[fcw]=="function"&&fcGa(g[fcw](" "),c))i[l++]=f}fcca(i,l);return i}else return k},fcnb=function(a,b){fcJa(b,function(c,d){if(d=="style")a[fcB].cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in fcmb)a[fcJ](fcmb[d],c);else a[d]=c})},fcmb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",
type:"type"},fc_=function(){return fcob(fck,arguments)},fcob=function(a,b){var c=b[0],d=b[1];if(fcY&&d&&(d[fcM]||d[fcma])){var e=["<",c];d[fcM]&&e[fcq](' name="',fcVa(d[fcM]),'"');if(d[fcma]){e[fcq](' type="',fcVa(d[fcma]),'"');d=fcxa(d);delete d[fcma]}e[fcq](">");c=e[fcqa]("")}var h=a[fcG](c);if(d)if(fcva(d))h.className=d;else fcnb(h,d);if(b[fcr]>2){function j(l){if(l)h[fcp](fcva(l)?a.createTextNode(l):l)}for(var k=2;k<b[fcr];k++){var i=b[k];fcua(i)&&!(fcwa(i)&&i.nodeType>0)?fcFa(fcpb(i)?fcHa(i):
i,j):j(i)}}return h},fcqb=function(a,b){a[fcp](b)},fcrb=function(a){return a&&a[fcN]?a[fcN].removeChild(a):fcc},fcsb=function(a,b){var c=b[fcN];c&&c.replaceChild(a,b)},fctb=fcbb&&fcYa(fcgb,"521")<=0,fcub=function(a,b){if(typeof a[fcna]!="undefined"&&!fctb&&b.nodeType==1)return a==b||a[fcna](b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b[fcN];return b==a},fcpb=function(a){if(a&&typeof a[fcr]=="number")if(fcwa(a))return typeof a.item==
"function"||typeof a.item=="string";else if(fcta(a)=="function")return typeof a.item=="function";return fcd},fc0=function(a){this.Sa=a||fcS[fcv]||fck};fc0[fc].createElement=function(a){return this.Sa[fcG](a)};fc0[fc].createTextNode=function(a){return this.Sa.createTextNode(a)};fc0[fc].appendChild=fcqb;fc0[fc].removeNode=fcrb;fc0[fc].replaceNode=fcsb;fc0[fc].contains=fcub;if("StopIteration"in fcS)var fcvb=fcS.StopIteration;else fcvb=Error("StopIteration");var fcwb=function(){};fcwb[fc].next=function(){fca(fcvb)};fcwb[fc].__iterator__=function(){return this};var fc1=function(a){this.h={};this.d=[];var b=arguments[fcr];if(b>1){if(b%2)fca(Error("Uneven number of arguments"));for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])}else a&&this.Ha(a)};fc1[fc].n=0;fc1[fc].B=0;fc1[fc].na=function(){return this.n};fc1[fc].S=function(){this.C();for(var a=[],b=0;b<this.d[fcr];b++){var c=this.d[b];a[fcq](this.h[c])}return a};fc1[fc].H=function(){this.C();return this.d.concat()};fc1[fc].Oa=function(a){return fc2(this.h,a)};
fc1[fc].clear=function(){this.h={};fcca(this.d,0);this.B=this.n=0};fc1[fc].remove=function(a){if(fc2(this.h,a)){delete this.h[a];this.n--;this.B++;this.d[fcr]>2*this.n&&this.C();return fcb}return fcd};fc1[fc].C=function(){if(this.n!=this.d[fcr]){for(var a=0,b=0;a<this.d[fcr];){var c=this.d[a];if(fc2(this.h,c))this.d[b++]=c;a++}fcca(this.d,b)}if(this.n!=this.d[fcr]){var d={};for(b=a=0;a<this.d[fcr];){c=this.d[a];if(!fc2(d,c)){this.d[b++]=c;d[c]=1}a++}fcca(this.d,b)}};
fc1[fc].get=function(a,b){if(fc2(this.h,a))return this.h[a];return b};fc1[fc].set=function(a,b){if(!fc2(this.h,a)){this.n++;this.d[fcq](a);this.B++}this.h[a]=b};fc1[fc].Ha=function(a){var b,c;if(a instanceof fc1){b=a.H();c=a.S()}else{b=fcLa(a);c=fcKa(a)}for(var d=0;d<b[fcr];d++)this.set(b[d],c[d])};fc1[fc].clone=function(){return new fc1(this)};
fc1[fc].__iterator__=function(a){this.C();var b=0,c=this.d,d=this.h,e=this.B,h=this,j=new fcwb;j.next=function(){for(;1;){if(e!=h.B)fca(Error("The map has changed since the iterator was created"));if(b>=c[fcr])fca(fcvb);var k=c[b++];return a?k:d[k]}};return j};var fc2=function(a,b){return fcj[fc].hasOwnProperty[fcD](a,b)};var fc3=function(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d};fc3[fc].clone=function(){return new fc3(this.top,this[fcR],this[fcI],this[fcC])};fcba(fc3[fc],function(){return"("+this.top+"t, "+this[fcR]+"r, "+this[fcI]+"b, "+this[fcC]+"l)"});fc3[fc].contains=function(a){return fcxb(this,a)};fc3[fc].expand=function(a,b,c,d){if(fcwa(a)){this.top-=a.top;this.right+=a[fcR];this.bottom+=a[fcI];this.left-=a[fcC]}else{this.top-=a;this.right+=b;this.bottom+=c;this.left-=d}return this};
var fcxb=function(a,b){if(!a||!b)return fcd;if(b instanceof fc3)return b[fcC]>=a[fcC]&&b[fcR]<=a[fcR]&&b.top>=a.top&&b[fcI]<=a[fcI];return b.x>=a[fcC]&&b.x<=a[fcR]&&b.y>=a.top&&b.y<=a[fcI]};var fcyb=function(a,b,c,d){this.left=a;this.top=b;fcm(this,c);fco(this,d)};fcyb[fc].clone=function(){return new fcyb(this[fcC],this.top,this[fcs],this[fcO])};fcba(fcyb[fc],function(){return"("+this[fcC]+", "+this.top+" - "+this[fcs]+"w x "+this[fcO]+"h)"});fcyb[fc].contains=function(a){return a instanceof fcyb?this[fcC]<=a[fcC]&&this[fcC]+this[fcs]>=a[fcC]+a[fcs]&&this.top<=a.top&&this.top+this[fcO]>=a.top+a[fcO]:a.x>=this[fcC]&&a.x<=this[fcC]+this[fcs]&&a.y>=this.top&&a.y<=this.top+this[fcO]};var fczb,fcAb,fcBb,fcCb,fcDb,fcEb,fcFb=function(){fcEb=fcDb=fcCb=fcBb=fcAb=fczb=fcd;var a=fc7a();if(a)if(a[fcA]("Firefox")!=-1)fczb=fcb;else if(a[fcA]("Camino")!=-1)fcAb=fcb;else if(a[fcA]("iPhone")!=-1||a[fcA]("iPod")!=-1)fcBb=fcb;else if(a[fcA]("Android")!=-1)fcCb=fcb;else if(a[fcA]("Chrome")!=-1)fcDb=fcb;else if(a[fcA]("Safari")!=-1)fcEb=fcb};fcFb();var fcGb=function(a,b){var c=a.nodeType==9?a:a.ownerDocument||a[fcv];if(c.defaultView&&c.defaultView.getComputedStyle){var d=c.defaultView.getComputedStyle(a,"");if(d)return d[b]}return fcc},fcHb=function(a,b,c){var d;if(b instanceof fcW){d=b[fcO];b=b[fcs]}else{if(c==undefined)fca(Error("missing height argument"));d=c}fcm(a[fcB],typeof b=="number"?fcl[fct](b)+"px":b);fco(a[fcB],typeof d=="number"?fcl[fct](d)+"px":d)},fcIb=function(a){var b=fc$a&&!fcib("10");if((fcGb(a,"display")||(a.currentStyle?
a.currentStyle[fcoa]:fcc)||a[fcB][fcoa])!="none")return b?new fcW(a[fcha]||a.clientWidth,a[fcpa]||a.clientHeight):new fcW(a[fcha],a[fcpa]);var c=a[fcB],d=c[fcoa],e=c.visibility,h=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";var j,k;if(b){j=a[fcha]||a.clientWidth;k=a[fcpa]||a.clientHeight}else{j=a[fcha];k=a[fcpa]}c.display=d;c.position=h;c.visibility=e;return new fcW(j,k)},fcJb=function(a,b){a[fcB].display=b?"":"none"};fcab&&!fcib("1.9");var fcKb={},fcLb={};var fcMb=function(){return fci.friendconnect_serverBase},fcNb=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";var e=fci.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fci.focus&&e.focus()},fcOb=function(a,b){var c=fce[fcK][fcz]().psinvite||"",d=fcMb()+"/friendconnect/signin/home?st="+fcg(shindig.auth.getSecurityToken())+"&psinvite="+fcg(c)+(a?"&iframeId="+fcg(a):"")+(b?"&loginProvider="+b:"");fcNb(d)},
fcPb=function(a,b){var c=fce[fcK][fcz]().communityId;fce.rpc[fcD](fcc,"signin",fcc,c,a,b)},fcQb=function(){var a=fce[fcK][fcz]().communityId;fce.rpc[fcD](fcc,"signout",fcc,a)},fcRb=function(a,b){var c=fcMb()+"/friendconnect/invite/friends?&st="+fcg(shindig.auth.getSecurityToken())+(a?"&customMessage="+fcg(a):"")+(b?"&customInviteUrl="+fcg(b):""),d=760;if(fcY)d+=25;fcNb(c,fch(d),"515")},fcSb=function(a,b){var c=fcMb()+"/friendconnect/settings/edit?st="+fcg(shindig.auth.getSecurityToken())+(a?"&iframeId="+
fcg(a):"");if(b)c=c+"&"+b;var d=800,e=510;if(fcY)d+=25;fcNb(c,fch(d),fch(e))},fcTb=function(a,b,c){var d=fcc;if(b=="text"){d=fc_("div",{"class":"gfc-button-text"},fc_("div",{"class":"gfc-icon"},fc_("a",{href:"javascript:void(0);"},c)));a[fcp](d)}else if(b=="long"||b=="standard"){d=fc_("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc_("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc_("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc_("div",
{"class":"gfc-button-base-pos"},fc_("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc_("div",{"class":"gfc-button-base-content"},fc_("div",{"class":"gfc-icon"},c))))));a[fcp](d);if(b=="standard"){var e=fc_("div",{"class":"gfc-footer-msg"},"with Google Friend Connect");a[fcp](fc_("br"));a[fcp](e)}}return d},fcUb=function(a,b){if(!a)fca("google.friendconnect.renderJoinButton: missing options");var c=a[fcB]||"standard",d=a.text;if(c=="standard")d=a.text||"Sign in";else if(c=="text"||
c=="long")d=a.text||"Sign in with Friend Connect";var e=a.element;if(!e){var h=a.id;if(!h)fca("google.friendconnect.renderSignInButton: options[id] and options[element] == null");e=fcjb(h);if(!e)fca("google.friendconnect.renderSignInButton: element "+a.id+" not found")}fcn(e,"");var j=fcTb(e,c,d);fci[fcH]?j[fcH]("click",b,fcd):j.attachEvent("onclick",b)},fcVb=function(a,b){b=b||fcT(fcOb,fcc,fcc,fcc);fcUb(a,b)},fcWb=function(a,b){fce.rpc[fcD](fcc,"putReloadViewParam",fcc,a,b);var c=fce.views.getParams();
c[a]=b};fcU("goog.peoplesense.util.getBaseUrl",fcMb);fcU("goog.peoplesense.util.finishSignIn",fcPb);fcU("goog.peoplesense.util.signout",fcQb);fcU("goog.peoplesense.util.signin",fcOb);fcU("goog.peoplesense.util.invite",fcRb);fcU("goog.peoplesense.util.editSettings",fcSb);fcU("goog.peoplesense.util.setStickyViewParamToken",fcWb);fcU("goog.peoplesense.util.openPopup",fcNb);fcU("google.friendconnect.renderSignInButton",fcVb);fcU("goog.peoplesense.util.userAgent.IE",fcY);var fcXb={},fcYb={},fc4=function(a){this.g=new fc1;this.snippetId=a.id;this.site=a.site;var b=a["view-params"],c=b.skin;this.wb=(c?c.POSITION:"top")||"top";this.ac={allowAnonymousPost:b.allowAnonymousPost||fcd,scope:b.scope||"SITE",docId:b.docId||"",features:b.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:c};this.absoluteBottom=fcY&&!fcib("7");this.fixedIeSizes=fcY;fci[fcH]?fci[fcH]("resize",fcT(this.ya,this),fcd):fci.attachEvent("onresize",fcT(this.ya,this));this.Na()};
fc4[fc].Na=function(){if(!this.site)fca(new Error("Must supply site ID."));if(!this.snippetId)fca(new Error("Must supply a snippet ID."))};fc4[fc].b=10;fc4[fc].ea=1;fc4[fc].m="fc-friendbar-";fc4[fc].p=fc4[fc].m+"outer";fc4[fc].Ba=fc4[fc].p+"-shadow";fc4[fc].render=function(){fck.write(this.Wa());var a=fcZ(this.snippetId);fcn(a,this.F())};fc4[fc].Xa=function(){var a=fcZ(this.p),b=fcIb(a)[fcs];return b};
fc4[fc].ya=function(){for(var a=this.g.H(),b=0;b<a[fcr];b++)this.Kb(a[b]);goog&&fcKb&&fcLb&&fcZb&&fc_b("resize")};fc4[fc].k=function(){return this.wb};fc4[fc].c=function(a){return this.m+"shadow-"+a};fc4[fc].Q=function(a){return this.m+"menus-"+a};fc4[fc].I=function(a){return this.m+a+"Target"};fc4[fc].O=function(a){return this.m+a+"Drawer"};fc4[fc].ra=function(){return this.I("")};fc4[fc].sa=function(){return this.m+"wallpaper"};fc4[fc].oa=function(){return this.O("")};
fc4[fc].Wa=function(){var a=fci.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",e=a+"shadow_tl.png",h=a+"shadow_tr.png",j=a+"shadow_br.png",k=a+"shadow_cr.png",i=function(n,o){return fcY?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+n+'", sizingMethod="scale");':"background-image: url("+n+");background-repeat: "+o+"; "},l="position:absolute; top:";if(this.k()!="top"){l="position:fixed; bottom:";if(this.absoluteBottom)l="position:absolute; bottom:"}var m=
c;if(this.k()!="top")m=b;var f=0,g=[];g[f++]='<style type="text/css">';if(this.k()!="top"&&this.absoluteBottom)g[f++]="html, body {height: 100%; overflow: auto; };";g[f++]="#"+this.p+" {";g[f++]="background:#E0ECFF;";g[f++]="left:0;";g[f++]="height: "+(fcY?"35px;":"36px;");if(this.k()!="top"&&this.absoluteBottom)g[f++]="margin-right: 20px;";g[f++]="padding:0;";g[f++]=l+" 0;";g[f++]="width:100%;";g[f++]="z-index:5000;";g[f++]="}";g[f++]="#"+this.Ba+" {";g[f++]=i(m,"repeat-x");g[f++]="left:0;";g[f++]=
"height:"+this.b+"px;";if(this.k()!="top"&&this.absoluteBottom)g[f++]="margin-right: 20px;";g[f++]="padding:0;";g[f++]=l+(fcY?"35px;":"36px;");g[f++]="width:100%;";g[f++]="z-index:4998;";g[f++]="}";g[f++]="."+this.oa()+" {";g[f++]="display: block;";g[f++]="padding:0;";g[f++]=l+(fcY?"34px;":"35px;");g[f++]="z-index:4999;";g[f++]="}";g[f++]="."+this.sa()+" {";g[f++]="background: white;";g[f++]="height: 100%;";g[f++]="margin-right: "+this.b+"px;";g[f++]="}";g[f++]="."+this.ra()+" {";g[f++]="border: "+
this.ea+"px solid #ccc;";g[f++]="height: 100%;";g[f++]="left: 0;";g[f++]="background-image: url("+fci.friendconnect_imageUrl+"/loading.gif);";g[f++]="background-position: center;";g[f++]="background-repeat: no-repeat;";g[f++]="}";g[f++]="."+this.c("cr")+" {";g[f++]=i(k,"repeat-y");g[f++]="height: 100%;";g[f++]="position:absolute;";g[f++]="right: 0;";g[f++]="top: 0;";g[f++]="width:"+this.b+"px;";g[f++]="}";g[f++]="."+this.c("bl")+" {";g[f++]=i(d,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";
g[f++]="width:"+this.b+"px;";g[f++]="}";g[f++]="."+this.c("tl")+" {";g[f++]=i(e,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="left:0px;";g[f++]="width:"+this.b+"px;";g[f++]="}";g[f++]="."+this.c("bc")+" {";g[f++]=i(c,"repeat-x");g[f++]="height: "+this.b+"px;";g[f++]="left: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="right: "+this.b+"px;";g[f++]="}";g[f++]="."+this.c("tc")+" {";g[f++]=i(b,"repeat-x");g[f++]="height: "+this.b+"px;";g[f++]="left: "+this.b+"px;";
g[f++]="margin-left: "+this.b+"px;";g[f++]="margin-right: "+this.b+"px;";g[f++]="right: "+this.b+"px;";g[f++]="}";g[f++]="."+this.c("br")+" {";g[f++]=i(j,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="right: 0;";g[f++]="width: "+this.b+"px;";g[f++]="}";g[f++]="."+this.c("tr")+" {";g[f++]=i(h,"no-repeat");g[f++]="height: "+this.b+"px;";g[f++]="position:absolute;";g[f++]="right: 0;";g[f++]="top: 0;";g[f++]="width: "+this.b+"px;";g[f++]="}";g[f++]="</style>";return g[fcqa]("")};
fc4[fc].F=function(){var a=['<div id="'+this.p+'"></div>','<div id="'+this.Ba+'"></div>','<div id="'+this.Q(this.g.na())+'"></div>'];return a[fcqa]("")};fc4[fc].Qa=function(a,b,c,d){if(!this.g.Oa(a)){var e=new fc5(this,a,b,c,d),h=this.g.na(),j=fcZ(this.Q(h));fcn(j,e.F()+'<div id="'+this.Q(h+1)+'"></div>');this.g.set(a,e)}};fc4[fc].T=function(a){var b=this.g.get(a);b&&b.drawer&&fcJb(b.drawer,fcd)};fc4[fc].yb=function(a){var b=this.g.get(a);if(b)b.rendered=fcd};
fc4[fc].refresh=function(){for(var a=this.g.H(),b=0;b<a[fcr];b++){var c=a[b];this.T(c);this.yb(c)}};fc4[fc].tb=function(a){for(var b=this.g.S(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.Wb();break}}};fc4[fc].sb=function(a){for(var b=this.g.S(),c=0;c<b[fcr];c++){var d=b[c];if(d.id==a){d.pb();break}}};fc4[fc].Kb=function(a){var b=this.g.get(a);if(b&&b.drawer&&b.V()){b.M();b.ka();b.da()}};
fc4[fc].Vb=function(a,b){var c=this.g.get(a);if(c){if(!c.drawer){c.drawer=fcZ(this.O(c[fcM]));c.target=fcZ(this.I(c[fcM]));c.sha_bc=fclb("div",this.k()=="top"?this.c("bc"):this.c("tc"),c.drawer)[0];c.sha_cr=fclb("div",this.c("cr"),c.drawer)[0]}for(var d=this.g.H(),e=0;e<d[fcr];e++){var h=d[e];a!=this.g.get()&&this.T(h)}c.M(b);fcJb(c.drawer,fcb);fci.setTimeout(function(){c.da();c.ka();c.render()},0)}};
var fc5=function(a,b,c,d,e){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=e||{};fco(this,this.skin.HEIGHT||"0");this.url=fci.friendconnect_serverBase+c;this.sha_bc=this.target=this.drawer=fcc;this.loaded=this.rendered=fcd;this.M()};
fc5[fc].M=function(a){fcNa(this.constraints,a||{});fcNa(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcC]&&this.constraints[fcR]){var b=this.bar.Xa(),c=this.constraints[fcC],d=this.constraints[fcR],e=b-(c+d);if(e%2){e-=1;this.skin.right+=1}fcm(this.skin,e);delete this.skin[fcC]}};
fc5[fc].da=function(){if(this.drawer){if(this.skin[fcs]){var a=this.bar.ea,b=this.bar.b,c=fcY?2:0;fcHb(this.target,this.skin[fcs],"");fcHb(this.sha_bc,this.skin[fcs]-b+2*a-c,"");this.skin.rightShadow?fcHb(this.drawer,this.skin[fcs]+b+2*a-c,""):fcHb(this.drawer,this.skin[fcs]+2*a-c,"")}if(this.skin[fcR])this.drawer[fcB].right=this.skin[fcR]+0+"px"}};
fc5[fc].ka=function(){if(fcY&&this.drawer){var a=fcIb(this.target),b=a[fcs]-this.bar.b,c=a[fcO];if(b<0)b=0;this.sha_bc&&this.sha_bc[fcB]&&fcHb(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcB]&&fcHb(this.sha_cr,"",c)}};
fc5[fc].F=function(){var a="display:none;",b="position: relative; ",c="",d="",e="",h="",j=!!this.skin.rightShadow;if(!j){c+="display: none; ";e+="display: none; ";d+="right: 0px; ";h+="margin-right: 0px; "}for(var k in this.skin){var i=Number(this.skin[k]);if(j&&fcPa(k,"width")==0)i=i+this.b;if(fcPa(k,"height")==0)b+=k+": "+i+"px; ";if(k!="rightShadow"){if(fcPa(k,"height")==0)i=i+this.b;if(fcPa(k,"width")==0)i=i+2;a+=k+": "+i+"px; "}if(fcY&&fcPa(k,"width")==0){i=j?i-2*this.b:i-this.b;d+=k+": "+i+
"px; "}}if(fcY&&(this[fcO]|0)>0){var l=(this[fcO]|0)+2;c+="height: "+l+"px; "}var m=0,f=[];f[m++]='<div id="'+this.bar.O(this[fcM])+'"class="'+this.bar.oa()+'"style="'+a+'"> ';if(this.bar.k()=="bottom")f[m++]='<div class="'+this.bar.c("tl")+'"></div> <div class="'+this.bar.c("tc")+'"style="'+d+'"></div> <div class="'+this.bar.c("tr")+'"style="'+e+'"></div> ';f[m++]='<div style="'+b+'"> <div class="'+this.bar.sa()+'"style="'+h+'"><div id="'+this.bar.I(this[fcM])+'"class="'+this.bar.ra()+'"></div> <div class="'+
this.bar.c("cr")+'"style="'+c+'"></div> </div> </div> ';if(this.bar.k()=="top")f[m++]='<div class="'+this.bar.c("bl")+'"></div> <div class="'+this.bar.c("bc")+'"style="'+d+'"></div> <div class="'+this.bar.c("br")+'"style="'+e+'"></div> ';f[m++]="</div> ";return f[fcqa]("")};fc5[fc].Wb=function(){this.rendered=this.V()};fc5[fc].pb=function(){this.loaded=this.V()};fc5[fc].V=function(){return!!this.drawer&&this.drawer[fcB][fcoa]!="none"};
fc5[fc].render=function(){if(this.rendered==fcd){var a={};a.url=this.url;a.id=this.bar.I(this[fcM]);a.site=this.bar.site;a["view-params"]=fcxa(this.bar.ac);if(this[fcM]=="profile")a["view-params"].profileId="VIEWER";this.skin&&fcNa(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcM];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.wb;a.HEIGHT="1px";if(fcXb&&fcYb&&fc6)this.id=fc6.render(a)}};fcU("google.friendconnect.FriendBar",fc4);var fc0b=function(){},fc1b=function(){},fc2b=function(){fc1b[fcD](this)};fcV(fc2b,fc1b);var fc3b=function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))this[b]=a[b];if(this.viewParams)for(var c in this.viewParams)if(/^FC_RELOAD_.*$/[fcfa](c))this.viewParams[c]=fcc};fc3b[fc].render=function(a){var b=this;if(a){b.Xb();this.Za(function(c){fcn(a,c);b.refresh(a,c)})}};fc3b[fc].Za=function(a){return this.db(a)};var fc7=function(a){fc3b[fcD](this,a);this.z="../../"};fcV(fc7,fc3b);fc7[fc].Fa="gfc_iframe_";
fc7[fc].Ga="friendconnect";fc7[fc].la="";fc7[fc].za=fch(fcl[fct](2147483647*fcl[fcia]()));fc7[fc].Lb="rpc_relay.html";fc7[fc].L=function(a){this.z=a};fc7[fc].Xb=function(){return this.la=fch(fcl[fct](2147483647*fcl[fcia]()))};fc7[fc].P=function(){return this.Fa+this.la+"_"+this.id};
fc7[fc].refresh=function(a,b){var c=fc6.ma(this.communityId),d="post",e,h={};h.container=this.Ga;h.mid=this.id;h.nocache=fc6.vb;h.view=this.Ea;h.parent=fc6.J;if(this.debug)h.debug="1";if(this.specUrl)h.url=this.specUrl;if(this.communityId){var j=fce[fcK][fcz]().profileId;h.communityId=this.communityId;var k=fce[fcK][fcz]().psinvite;if(k)h.psinvite=k;if(j)h.profileId=j}h.caller=fc4b();h.rpctoken=this.za;var i=fcd;if(fcbb||!fc6.W[this.specUrl]&&this.viewParams){h["view-params"]=fce[fcja][fcea](this.viewParams);
i=fcb}if(this.prefs)h.prefs=fce[fcja][fcea](this.prefs);if(this.locale)h.locale=this.locale;if(this.secureToken)h.st=this.secureToken;e=this.z+"ifr"+(this.hashData?"&"+this.hashData:"");if(fc6.bc!=1||i||c||this.secureToken){if(c)h.fcauth=c}else d="get";var l=this.P();fc5b(l,e,d,h,a,b,this.za)};var fc8=function(){this.i={};this.J="http://"+fck[fcy].host;this.Ea="default";this.vb=1;this.fc=0;this.cc="US";this.dc="en";this.ec=2147483647};fcV(fc8,fc0b);fc8[fc].q=fc3b;fc8[fc].r=new fc2b;
fc8[fc].Aa=function(a){this.vb=a};fc8[fc].ja=function(a){this.bc=a};fc8[fc].qa=function(a){return"gadget_"+a};fc8[fc].u=function(a){return this.i[this.qa(a)]};fc8[fc].D=function(a){return new this.q(a)};fc8[fc].Ia=function(a){a.id=this.eb();this.i[this.qa(a.id)]=a};fc8[fc].ub=0;fc8[fc].eb=function(){return this.ub++};var fc6b=function(){fc8[fcD](this)};fcV(fc6b,fc8);fc6b[fc].q=fc7;fc6b[fc].K=function(a){a[fcE](/^http[s]?:\/\//)||(a=fck[fcy][fcla][fcE](/^[^?#]+\//)[0]+a);this.J=a};
fc6b[fc].w=function(a){var b=this.r.pa(a);a.render(b)};var fc7b=function(){fc1b[fcD](this);this.Va={}};fcV(fc7b,fc1b);fc7b[fc].Ja=function(a,b){this.Va[a]=b;var c=fck[fcx](b).className;if(!c&&c[fcr]==0)fck[fcx](b).className="gadgets-gadget-container"};fc7b[fc].pa=function(a){var b=this.Va[a.id];return b?fck[fcx](b):fcc};var fc9=function(a){fc7[fcD](this,a);a=a||{};this.Ea=a.view||"profile"};fcV(fc9,fc7);fc9[fc].Ma="canvas.html";fc9[fc].Ta="/friendconnect/embed/";
var fc4b=function(){var a=fce[fcK][fcz]().canvas=="1"||fce[fcK][fcz]().embed=="1",b=fcc;if(a)b=fce[fcK][fcz]().caller;if(!b){var c=fck[fcy],d=c.search[fcu](/([&?]?)psinvite=[^&]*(&?)/,function(e,h,j){return j?h:""});b=c.protocol+"//"+c.hostname+(c.port?":"+c.port:"")+c.pathname+d}return b};fc9[fc].Sb=function(a){this.Ea=a};fc9[fc].getBodyId=function(){return this.P()+"_body"};
fc9[fc].db=function(a){var b=(fc6.W[this.specUrl]||this.z)+this.Lb,c=this.P();fce.rpc.setRelayUrl(c,b);var d='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c+'" style="width:100%;';if(this.viewParams.opaque)d+="background-color:white;";d+='"';d+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(d+=' allowtransparency="true"');d+=this[fcO]?' height="'+this[fcO]+'"':"";d+=this[fcs]?' width="'+this[fcs]+'"':"";d+="></iframe>";if(this.showEmbedThis)d+='<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+
this.divId+"'); return false;\">Embed this</a>";d+="</div>";a(d)};
fc9[fc].Ya=function(){var a=fc4b(),b="canvas=1&caller="+fcg(a),c=fce[fcK][fcz]().psinvite;if(c)b+="&psinvite="+fcg(c);b+="&site="+fcg(this.communityId);for(var d=fcxa(this.viewParams),e=["BG_IMAGE","BG_COLOR","FONT_COLOR","BG_POSITION","BG_REPEAT","ANCHOR_COLOR","FONT_FACE","BORDER_COLOR","CONTENT_BG_COLOR","CONTENT_HEADLINE_COLOR","CONTENT_LINK_COLOR","CONTENT_SECONDARY_TEXT_COLOR","CONTENT_SECONDARY_LINK_COLOR","CONTENT_TEXT_COLOR","ENDCAP_BG_COLOR","ENDCAP_LINK_COLOR","ENDCAP_TEXT_COLOR","CONTENT_VISITED_LINK_COLOR",
"ALTERNATE_BG_COLOR"],h=0;h<e[fcr];h++)delete d.skin[e[h]];var j=fcg(fce[fcja][fcea](d));j=j[fcu]("\\","%5C");return fc6.J+this.Ma+"?url="+fcg(this.specUrl)+(b?"&"+b:"")+"&view-params="+j};fc9[fc].t=function(a){a=a||fcf+this.Ta+this.communityId;return this.$a(a,"embed=1")};fc9[fc].s=function(a){return'<iframe src="'+this.t(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc9[fc].$a=function(a,b){var c=fcg(fce[fcja][fcea](this.viewParams));c=c[fcu]("\\","%5C");return a+"?url="+fcg(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc9[fc].hb=function(){var a=fce[fcK][fcz]().canvas=="1"||fce[fcK][fcz]().embed=="1",b=fcc;if(a)(b=fce[fcK][fcz]().caller)||(b="javascript:history.go(-1)");return b};fc9[fc].ib=function(a){var b=fcc;if(a=="canvas")b=this.Ya();else if(a=="profile")b=this.hb();return b};
var fc$=function(){fc6b[fcD](this);fce.rpc[fcP]("signin",this.signin);fce.rpc[fcP]("signout",this.signout);fce.rpc[fcP]("resize_iframe",this.Ob);fce.rpc[fcP]("set_title",this.Rb);fce.rpc[fcP]("requestNavigateTo",this.Jb);fce.rpc[fcP]("api_loaded",this.La);fce.rpc[fcP]("createFriendBarMenu",this.Pa);fce.rpc[fcP]("showFriendBarMenu",this.Ub);fce.rpc[fcP]("hideFriendBarMenu",this.mb);fce.rpc[fcP]("putReloadViewParam",this.xb);fce.rpc[fcP]("getViewParams",this.Ra);fce.rpc[fcP]("openLightboxIframe",fc8b);
fce.rpc[fcP]("closeLightboxIframe",fcT(this.ga,this));var a=fc9b;a[fcP]();a.Da(this,"load",this.kb);a.Da(this,"start",this.lb);this.z="../../";this.K("");this.Aa(0);this.ja(0);this.r=new fc7b;this.apiVersion="0.8";this.openSocialSecurityToken=this.openSocialSiteId=fcc;this.ba="";this.ia={};this.ob=this.ha=fcd;this.rb=this.lastLightboxOnCloseCallback=this.lastLightboxDialog=fcc};fcV(fc$,fc6b);fc$[fc].q=fc9;fc$[fc].W={};
var fc$b=function(a,b){var c=b?b:fci.top,d=c.frames;try{if(c.frameElement.id==a)return c}catch(e){}for(var h=0;h<d[fcr];++h){var j=fc$b(a,d[h]);if(j)return j}return fcc},fc5b=function(a,b,c,d,e,h,j){var k="gfc_load_"+a,i="<html><head><style type=\"text/css\">body {background:transparent;}</style></head><body><form onsubmit='return false;' style='margin:0;padding:0;' id='"+k+"' method='"+c+"' ' action='"+b+"'>";for(var l in d)i+="<input type='hidden' name='"+l+"' value='' >";i+="</form></body></html>";
var m=fc$b(a),f;try{f=m[fcv]||m.contentWindow[fcv]}catch(g){if(e&&h){fcn(e,"");fcn(e,h);m=fc$b(a);f=m[fcv]||m.contentWindow[fcv]}}j&&fce.rpc.setAuthToken(a,j);f.open();f.write(i);f.close();var n=f[fcx](k);for(l in d)n[l].value=d[l];n.submit()};fc$[fc].Ua=function(){var a=fce[fcK][fcz]().fcprofile;a&&fc6.Ca(a)};fc$[fc].Nb=function(a,b){this.W[a]=b};fc$[fc].X=function(){fc6.e!=fcc&&fc6.e.refresh();for(var a in fc6.i){var b=fc6.i[a];this.w(b)}};
fc$[fc].K=function(a){a[fcE](/^http[s]?:\/\//)||(a=a&&a[fcr]>0&&a.substring(0,1)=="/"?fck[fcy][fcla][fcE](/^http[s]?:\/\/[^\/]+\//)[0]+a.substring(1):fck[fcy][fcla][fcE](/^[^?#]+\//)[0]+a);this.J=a};fc$[fc].N=function(a){return"fcauth"+a};fc$[fc].R=function(a){return"fcauth"+a+"-s"};fc$[fc].ma=function(a){var b=fcCa(this.N(a))||fcCa(this.R(a))||this.ia[a]||"";return b};fc$[fc].L=function(a){this.z=a};fc$[fc].Qb=function(a){this.ba=a};fc$[fc].D=function(a){var b=new this.q(a);b.L(this.z);return b};
fc$[fc].Pb=function(a){this.rb=a};var fcac=function(a){return fcaa(a[fcE](/_([0-9]+)$/)[1],10)};
fc$[fc].A=function(a,b,c){if(!this.ha){this.ca(fci.friendconnect_serverBase+"/friendconnect/styles/container.css?v="+this.ba);this.ha=fcb}if(!this.ob){this.Ka(fci.friendconnect_serverBase+"/friendconnect/script/lightbox.js?v="+this.ba);this.ob=fcb}b=b||0;if(goog.ui&&goog.ui.Dialog){this.ga();var d=new goog.ui.Dialog(fcc,fcb);d.setDraggable(fcd);d.setDisposeOnHide(fcb);d.setButtonSet(new goog.ui.Dialog.ButtonSet);this.lastLightboxDialog=d;this.lastLightboxOnCloseCallback=c;a(d)}else if(b<5){b++;setTimeout(function(){fc6.A(a,
b,c)},1000)}else fca(Error("lightbox.js failed to load"))};fc$[fc].ga=function(a){if(this.lastLightboxDialog!=fcc){this.lastLightboxDialog.dispose();this.lastLightboxDialog=fcc;if(this.lastLightboxOnCloseCallback){this.lastLightboxOnCloseCallback(a);this.lastLightboxOnCloseCallback=fcc}}};
fc$[fc].Jb=function(a,b){var c=fcac(this.f),d=fc6.u(c);if(d.useLightBoxForCanvas&&a=="canvas")fc6.A(function(j){var k=fck[fcG]("div");k[fcJ]("id","gadget-canvas");j.getContentElement()[fcp](k);j.setVisible(fcb);var i=fcxa(d.originalParams);i.id="gadget-canvas";i.presentation="canvas";fc6.render(i)});else{if(b)d.viewParams=b;var e=d.ib(a);if(e&&fck[fcy][fcla]!=e)if(fce[fcK][fcz]().embed=="1")try{fci.parent.location=e}catch(h){fci.top.location=e}else fck[fcy].href=e}};
fc$[fc].Ub=function(a,b){fc6.e!=fcc&&fc6.e.Vb(a,b)};fc$[fc].mb=function(a){fc6.e!=fcc&&fc6.e.T(a)};var fc8b=function(a,b,c,d,e,h){var j=this;fc6.va(a,b,c,d,e,h,fcc,j.callback)};
fc$[fc].va=function(a,b,c,d,e,h,j,k){var i=fch(fcl[fct](2147483647*fcl[fcia]())),l="gfc_lbox_iframe_"+i;fce.rpc.setAuthToken(l,i);if(!b)b=fc6.openSocialSecurityToken;var m=fc6.openSocialSiteId;fc6.A(function(f){var g="st="+fcg(b)+"&parent="+fcg(fc6.J)+"&rpctoken="+fcg(i),n=fcf+"/friendconnect/lightbox";n+="?"+g;n+="&iframeId="+fcg(l);n+="&iurl="+fcg(a);var o='<iframe id="'+l;h||(o+='" src="'+n);o+='" width="'+c+'" height="'+d+'" frameborder="0" scrolling="auto"></iframe>';f.setContent(o);f.setVisible(fcb);
if(h){h.fcauth=fc6.ma(m);a+="?"+g;fc5b(l,a,"POST",h,fcc,fcc,fcc)}},fcc,k)};fc$[fc].Ra=function(){var a=fcac(this.f),b=fc6.u(a);return b.viewParams};fc$[fc].xb=function(a,b){var c=fcac(this.f),d=fc6.u(c);d.viewParams[a]=b};fc$[fc].kb=function(a,b){fc6.e!=fcc&&fc6.e.sb(b)};fc$[fc].lb=function(a,b){fc6.e!=fcc&&fc6.e.tb(b)};fc$[fc].Pa=function(a,b,c,d){fc6.e!=fcc&&fc6.e.Qa(a,b,c,d)};fc$[fc].w=function(a){var b=this.r.pa(a);a.render(b);this.r.postProcessGadget&&this.r.postProcessGadget(a)};
fc$[fc].signout=function(a){fc6.wa(fc6.N(a));fc6.wa(fc6.R(a));fc6.ia={};fc6.X();return fcd};fc$[fc].wa=function(a){for(var b=fck[fcy].pathname,c=b[fcw]("/"),d=0;d<c[fcr];d++){for(var e=new Array(d+1),h=0;h<d+1;h++)e[h]=c[h];fcDa(a,e[fcqa]("/")+"/")}};fc$[fc].Ob=function(a){var b=fck[fcx](this.f);if(b&&a>0)fco(b[fcB],a+"px");if((b=fck[fcx](this.f+"_body"))&&a>0)fco(b[fcB],a+"px");var c=fcac(this.f),d=fc6.u(c);if(d)if((b=fck[fcx](d.divId))&&a>0)fco(b[fcB],a+"px")};
fc$[fc].Rb=function(a){var b=fcac(this.f),c=fc6.u(b),d=c.titleDivId;if(d)fcn(fck[fcx](d),fce[fcK].escapeString(a))};fc$[fc].signin=function(a,b,c){fcBa(fc6.N(a),b,31104000,c);fcBa(fc6.R(a),b,-1,c);fc6.ia[a]=b;fc6.X()};var fccc=function(a){fcUb(a,fcbc)};fc$[fc].Db=function(a,b){b&&this.j(b,a);var c={};c.url=fcf+"/friendconnect/gadgets/members.xml";this.render(this.o(a,c))};
fc$[fc].Fb=function(a,b){b&&this.j(b,a);var c={};c.url=fcf+"/friendconnect/gadgets/review.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.o(a,c))};fc$[fc].Y=function(a,b){b&&this.j(b,a);var c={};c.url=fcf+"/friendconnect/gadgets/wall.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.o(a,c))};
fc$[fc].Gb=function(a,b){b&&this.j(b,a);var c={};c.url=fcf+"/friendconnect/gadgets/signin.xml";fco(c,32);this.render(this.o(a,c))};fc$[fc].Ab=function(a,b){b&&this.j(b,a);var c={};c.url=fcf+"/friendconnect/gadgets/ads.xml";fco(c,90);this.render(this.o(a,c))};
fc$[fc].aa=function(a,b){if(a.id){b&&this.j(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.e=new fc4(a);this.e.render();var c={};c.url=fcf+"/friendconnect/gadgets/friendbar.xml";a.id=this.e.p;fco(a,"1");this.render(this.o(a,c))}};fc$[fc].Cb=fc$[fc].aa;fc$[fc].$=function(a,b){a=a||{};a.url=fcf+"/friendconnect/gadgets/signin.xml";a.site=a.site||fce[fcK][fcz]().site;fco(a,32);this.Z(a,b)};fc$[fc].Bb=fc$[fc].$;fc$[fc].Ib=fc$[fc].Y;
fc$[fc].j=function(a,b){var c=b["view-params"];if(!c){c={};b["view-params"]=c}c.skin=a};fc$[fc].o=function(a,b){var c=this.ua(b,a);if(b["view-params"]){var d=b["view-params"];if(a["view-params"])d=this.ua(d,a["view-params"]);c["view-params"]=d}return c};fc$[fc].Eb=function(a,b){b&&this.j(b,a);this.render(a)};fc$[fc].ua=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)if(typeof c[d]=="undefined")c[d]=a[d];return c};
fc$[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.D({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcO],locale:a.locale||this.rb,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug});a.presentation&&b.Sb(a.presentation);this.Ia(b);this.r.Ja(b.id,a.id);fc6.w(b);return b.id};
fc$[fc].Hb=function(a,b){a=a||{};a.presentation="canvas";this.xa(a,b)};fc$[fc].xa=function(a,b,c){a=a||{};a.url=fce[fcK][fcz]().url;a.site=fce[fcK][fcz]().site||a.site;var d=fce[fcK][fcz]()["view-params"];if(d)a["view-params"]=fce[fcja].parse(decodeURIComponent(d));if(c){a["view-params"]=a["view-params"]||{};a["view-params"].useFixedHeight=fcb;fco(a["view-params"],c);b=b||{};b.HEIGHT=fch(c)}this.Z(a,b)};
fc$[fc].Z=function(a,b){a=a||{};b&&this.j(b,a);if(fce[fcK][fcz]().canvas=="1")a.presentation="canvas";else if(fce[fcK][fcz]().embed=="1")a.presentation="embed";fc6.render(a)};fc$[fc].jb=function(){var a=fce[fcK][fcz]().caller;if(a&&fck[fcy][fcla]!=a&&a[fcr]>8&&(a.substr(0,7)[fcQ]()=="http://"||a.substr(0,8)[fcQ]()=="https://"))fck[fcy].href=a;else{var b=fce[fcK][fcz]().site;if(b)fck[fcy].href=fcf+"/friendconnect/directory/site?id="+b;else fci.history.go(-1)}};fc$[fc].v="";fc$[fc].fb=function(){return this.v};
fc$[fc].Mb=function(a){this.apiVersion=a};fc$[fc].ca=function(a){var b=fck[fcG]("link");b[fcJ]("rel","stylesheet");b[fcJ]("type","text/css");b[fcJ]("href",a);fck.getElementsByTagName("head")[0][fcp](b)};fc$[fc].Ka=function(a){var b=fck[fcG]("script");b[fcJ]("src",a);b[fcJ]("type","text/javascript");fck.getElementsByTagName("head")[0][fcp](b)};fc$[fc].fa=function(a){if(fck.body)a();else fci[fcH]?fci[fcH]("load",a,fcd):fci.attachEvent("onload",a)};
fc$[fc].U=function(a){if(!a.site)fca("API not loaded, please pass in a 'site'");this.ca(fci.friendconnect_serverBase+"/friendconnect/styles/container.css?v="+this.ba);this.ha=fcb;this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.fa(fcT(this.ta,this,a,"fc-opensocial-api"))};fc$[fc].qb=fc$[fc].U;fc$[fc].nb=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.ta(b,"gfc-"+a)};
fc$[fc].zb=function(a){var b={};for(var c in this.i){var d=this.i[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.i=b;var e=fck[fcx]("gfc-"+a);e&&e[fcN]&&e[fcN].removeChild&&e[fcN].removeChild(e)};fc$[fc].ab=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc$[fc].gb=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fcdc=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcF][fcr];c++)a[fcF][c].selected&&b[fcq](a[fcF][c].value);var d=a.getAttribute("x-max");try{d=1*d}catch(e){d=0}if(d&&b[fcr]>d&&a["x-selected"]){b=a["x-selected"];for(var h=0;h<a[fcF][fcr];h++){a[fcF][h].selected=fcd;for(var j=0;j<b[fcr];j++)if(a[fcF][h].value==b[j]){a[fcF][h].selected=fcb;break}}}}else b=a[fcF][a.selectedIndex].value;a["x-selected"]=b;var k=a.getAttribute("x-var");k&&fci.opensocial[fcga]&&fci.opensocial[fcga].getDataContext().putDataSet(k,
b);var i=a.getAttribute("x-onselect");if(i)if(fci[i]&&typeof fci[i]=="function")fci[i](b);else if(a["x-onselect-fn"])a["x-onselect-fn"][fcL](a);else a["x-onselect-fn"]=new Function(i)};
fc$[fc].ta=function(a,b){fci.opensocial.template.Loader.loadContent(this.gb());fci.opensocial.template.Loader.loadContent(this.ab());fci.opensocial[fcga].processDocumentMarkup();var c=fck[fcG]("div");c.id=b;fco(c[fcB],"0px");fcm(c[fcB],"0px");c[fcB].position="absolute";c[fcB].visibility="hidden";fck.body[fcp](c);var d={};d.url=fcf+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fco(d,0);d.id=c.id;d.site=a.site;d["view-params"]=a["view-params"];this.render(d)};
fc$[fc].La=function(){fc6.v=this.f;fc6.openSocialSecurityToken=this.a[0];var a=fc6.openSocialSecurityToken;fci.opensocial[fcga].executeRequests();fci.opensocial.template.process();if(fc6.apiLoadedCallback){var b=fcya(fc6.apiLoadedCallback,a);setTimeout(b,0)}};fc$[fc].G=function(a){var b=fcc;for(var c in this.i)if(this.i[c].divId==a){b=this.i[c];break}return b};fc$[fc].t=function(a,b){var c=this.G(a),d=fcc;if(c)d=c.t(b);return d};fc$[fc].s=function(a,b){var c=this.G(a),d=fcc;if(c)d=c.s(b);return d};
fc$[fc].Tb=function(a,b){this.A(function(c){var d=fck.createTextNode("Copy & paste this code into your site.");c.getContentElement()[fcp](d);c.getContentElement()[fcp](fck[fcG]("br"));var e=fc6.s(a,b),h=fck[fcG]("textarea");fcn(h,e);h[fcJ]("style","width:500px;");c.getContentElement()[fcp](h);c.setVisible(fcb)})};
fc$[fc].Ca=function(a){this.A(function(b){var c=fck[fcG]("div");c[fcJ]("id","fc-profile-lightbox");b.getContentElement()[fcp](c);var d={id:"fc-profile-lightbox",presentation:"canvas",url:fcf+"/friendconnect/gadgets/members.xml",site:fc6.openSocialSiteId,"view-params":{profileId:a}};fc6.render(d);b.setVisible(fcb)})};fc$[fc].cb=function(a){var b=fcc,c=this.G(a);if(c&&c.secureToken)b=c.secureToken;return b};fc$[fc].bb=function(a){var b=fcc,c=this.G(a);if(c&&c.communityId)b=c.communityId;return b};
var fcbc=function(a){fc6.v&&fcOb(fc6.v,a)},fcec=function(){fc6.signout(fc6.openSocialSiteId)},fcfc=function(){fcSb(fc6.v)},fcgc=function(a,b){fcRb(a,b)},fcZb=function(){this.l={}};fcZb[fc].register=function(){fce.rpc[fcP]("subscribeEventType",fchc);fce.rpc[fcP]("publishEvent",fc_b)};var fchc=function(a){var b=fc9b;b.l[a]=b.l[a]||[];var c=b.l[a];c[c[fcr]]={frameId:this.f}};fcZb[fc].Da=function(a,b,c){var d=this;d.l[b]=d.l[b]||[];var e=d.l[b];e[e[fcr]]={container:a,callback:c}};
var fc_b=function(a){var b=fc9b,c=0;if(this.f)c=fcac(this.f);b.l[a]=b.l[a]||[];for(var d=b.l[a],e=0;e<d[fcr];e++)d[e].container?d[e].callback[fcD](d[e].container,a,c):fce.rpc[fcD](d[e].frameId,a,fcc,a,c)},fc9b=new fcZb,fc6=new fc$;fc6.fa(fc6.Ua);fcU("google.friendconnect.container",fc6);fcU("google.friendconnect.container.refreshGadgets",fc6.X);fcU("google.friendconnect.container.setParentUrl",fc6.K);fcU("google.friendconnect.container.setServerBase",fc6.L);
fcU("google.friendconnect.container.setServerVersion",fc6.Qb);fcU("google.friendconnect.container.createGadget",fc6.D);fcU("google.friendconnect.container.openLightboxIframe",fc6.va);fcU("google.friendconnect.container.renderGadget",fc6.w);fcU("google.friendconnect.container.render",fc6.render);fcU("google.friendconnect.container.goBackToSite",fc6.jb);fcU("google.friendconnect.container.renderMembersGadget",fc6.Db);fcU("google.friendconnect.container.renderReviewGadget",fc6.Fb);
fcU("google.friendconnect.container.renderCommentsGadget",fc6.Y);fcU("google.friendconnect.container.renderSignInGadget",fc6.Gb);fcU("google.friendconnect.container.renderFriendBar",fc6.Cb);fcU("google.friendconnect.container.renderSocialBar",fc6.aa);fcU("google.friendconnect.container.renderCanvasSignInGadget",fc6.Bb);fcU("google.friendconnect.container.renderUrlCanvasGadget",fc6.Hb);fcU("google.friendconnect.container.renderEmbedSignInGadget",fc6.$);
fcU("google.friendconnect.container.renderUrlEmbedGadget",fc6.xa);fcU("google.friendconnect.container.renderEmbedGadget",fc6.Z);fcU("google.friendconnect.container.renderWallGadget",fc6.Ib);fcU("google.friendconnect.container.renderAdsGadget",fc6.Ab);fcU("google.friendconnect.container.renderOpenSocialGadget",fc6.Eb);fcU("google.friendconnect.container.setNoCache",fc6.Aa);fcU("google.friendconnect.container.enableProxy",fc6.ja);fcU("google.friendconnect.container.setDomain",fc6.Nb);
fcU("google.friendconnect.container.setLocale",fc6.Pb);fcU("google.friendconnect.container.loadOpenSocialApi",fc6.qb);fcU("google.friendconnect.container.initOpenSocialApi",fc6.U);fcU("google.friendconnect.container.getOpenSocialApiIframeId",fc6.fb);fcU("google.friendconnect.container.setApiVersion",fc6.Mb);fcU("google.friendconnect.container.getEmbedUrl",fc6.t);fcU("google.friendconnect.container.getEmbedHtml",fc6.s);fcU("google.friendconnect.container.getGadgetSecurityToken",fc6.cb);
fcU("google.friendconnect.container.getGadgetCommunityId",fc6.bb);fcU("google.friendconnect.container.showEmbedDialog",fc6.Tb);fcU("google.friendconnect.container.showMemberProfile",fc6.Ca);fcU("google.friendconnect.requestSignIn",fcbc);fcU("google.friendconnect.requestSignOut",fcec);fcU("google.friendconnect.requestSettings",fcfc);fcU("google.friendconnect.requestInvite",fcgc);fcU("google.friendconnect.renderSignInButton",fccc);fcU("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc6.nb);
fcU("google.friendconnect.container.removeOpenSocialApiViaIframe",fc6.zb);fcU("google.friendconnect.userAgent.WEBKIT",fcbb);fcU("google.friendconnect.userAgent.IE",fcY);fcU("google.friendconnect.PeopleSelectorOnChange",fcdc);
google.friendconnect.container.setServerBase('http://ps.friendconnect.gmodules.com/ps/');google.friendconnect.container.setServerVersion('0.419.1');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/friendbar.xml', 'http://p7rjrrl49ose4gob99eonlvp0drmce3d.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/activities.xml', 'http://q8j0igk2u2f6kf7jogh6s66md2d7r154.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/members.xml', 'http://r1rk9np7bpcsfoeekl0khkd2juj27q3o.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/wall.xml', 'http://o29lt44ell30t7ljcdfr8lq2mjakv2co.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/signin.xml', 'http://8fkcem1ves287v3g5lu9gep1j91p3kk1.friendconnect.gmodules.com/ps/');

google.friendconnect.container.setDomain('http://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'http://mc8tdi0ripmbpds25eboaupdulritrp6.friendconnect.gmodules.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
