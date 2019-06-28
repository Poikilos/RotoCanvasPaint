(function() {
var _UDS_CONST_LOCALE = 'en';
var _UDS_CONST_SHORT_DATE_PATTERN = 'MDY'; 
var _UDS_MSG_SEARCHER_IMAGE = ('Image'); 
var _UDS_MSG_SEARCHER_WEB = ('Web'); 
var _UDS_MSG_SEARCHER_BLOG = ('Blog'); 
var _UDS_MSG_SEARCHER_VIDEO = ('Video'); 
var _UDS_MSG_SEARCHER_LOCAL = ('Local'); 
var _UDS_MSG_SEARCHCONTROL_SAVE = ('save'); 
var _UDS_MSG_SEARCHCONTROL_KEEP = ('keep'); 
var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('include'); 
var _UDS_MSG_SEARCHCONTROL_COPY = ('copy'); 
var _UDS_MSG_SEARCHCONTROL_CLOSE = ('close'); 
var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('Sponsored Links'); 
var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('see more...'); 
var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('clipped from Google'); 
var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('Search location'); 
var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('Disable address lookup'); 
var _UDS_MSG_SEARCHER_NEWS = ('News'); 
function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {return ('' + AGE_MINUTES_AGO + ' minutes ago');} 
var _UDS_MSG_ONE_HOUR_AGO = ('1 hour ago'); 
function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {return ('' + AGE_HOURS_AGO + ' hours ago');} 
function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {return ('all ' + NUMBER + ' related');} 
var _UDS_MSG_NEWS_RELATED = ('Related Articles'); 
var _UDS_MSG_BRANDING_STRING = ('powered by Google'); 
var _UDS_MSG_SORT_BY_DATE = ('Sort by date'); 
var _UDS_MSG_MONTH_ABBR_JAN = ('Jan'); 
var _UDS_MSG_MONTH_ABBR_FEB = ('Feb'); 
var _UDS_MSG_MONTH_ABBR_MAR = ('Mar'); 
var _UDS_MSG_MONTH_ABBR_APR = ('Apr'); 
var _UDS_MSG_MONTH_ABBR_MAY = ('May'); 
var _UDS_MSG_MONTH_ABBR_JUN = ('Jun'); 
var _UDS_MSG_MONTH_ABBR_JUL = ('Jul'); 
var _UDS_MSG_MONTH_ABBR_AUG = ('Aug'); 
var _UDS_MSG_MONTH_ABBR_SEP = ('Sep'); 
var _UDS_MSG_MONTH_ABBR_OCT = ('Oct'); 
var _UDS_MSG_MONTH_ABBR_NOV = ('Nov'); 
var _UDS_MSG_MONTH_ABBR_DEC = ('Dec'); 
var _UDS_MSG_DIRECTIONS = ('directions'); 
var _UDS_MSG_CLEAR_RESULTS = ('clear results'); 
var _UDS_MSG_SHOW_ONE_RESULT = ('show one result'); 
var _UDS_MSG_SHOW_MORE_RESULTS = ('show more results'); 
var _UDS_MSG_SHOW_ALL_RESULTS = ('show all results'); 
var _UDS_MSG_SETTINGS = ('settings'); 
var _UDS_MSG_SEARCH = ('search'); 
var _UDS_MSG_SEARCH_UC = ('Search'); 
var _UDS_MSG_POWERED_BY = ('powered by'); 
function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {return ('Business listings provided by ' + LOCAL_RESULTS_PROVIDER + '');} 
var _UDS_MSG_SEARCHER_BOOK = ('Book'); 
function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {return ('Page ' + FOUND_ON_PAGE + '');} 
function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {return ('' + PAGE_COUNT + ' pages');} 
var _UDS_MSG_SEARCHER_BY = ('by'); 
var _UDS_MSG_SEARCHER_CODE = ('Code'); 
var _UDS_MSG_UNKNOWN_LICENSE = ('Unknown License'); 
var _UDS_MSG_SEARCHER_GSA = ('Search Appliance'); 
var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('More results'); 
var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('Previous'); 
var _UDS_MSG_SEARCHCONTROL_NEXT = ('Next'); 
var _UDS_MSG_GET_DIRECTIONS = ('Get directions'); 
var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('To here'); 
var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('From here'); 
var _UDS_MSG_CLEAR_RESULTS_UC = ('Clear results'); 
var _UDS_MSG_SEARCH_THE_MAP = ('search the map'); 
var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('scroll through results'); 
var _UDS_MSG_EDIT_TAGS = ('edit tags'); 
var _UDS_MSG_TAG_THIS_SEARCH = ('tag this search'); 
var _UDS_MSG_SEARCH_STRING = ('search string'); 
var _UDS_MSG_OPTIONAL_LABEL = ('optional label'); 
var _UDS_MSG_DELETE = ('delete'); 
var _UDS_MSG_DELETED = ('deleted'); 
var _UDS_MSG_CANCEL = ('cancel'); 
var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('upload your own video'); 
var _UDS_MSG_IM_DONE_WATCHING = ('i\047m done watching this'); 
var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('close video player'); 
var _UDS_MSG_NO_RESULTS = ('No Results'); 
var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('This Custom Search Engine is loading. Try again in a few seconds.'); 
var _UDS_MSG_COUPONS = ('Coupons'); 
var _UDS_MSG_BACK = ('back'); 
var _UDS_MSG_SUBSCRIBE = ('Subscribe'); 
var _UDS_MSG_SEARCHER_PATENT = ('Patent'); 
var _UDS_MSG_USPAT = ('US Pat.'); 
var _UDS_MSG_USPAT_APP = ('US Pat. App'); 
var _UDS_MSG_PATENT_FILED = ('Filed'); 
var _UDS_MSG_ADS_BY_GOOGLE = ('Ads by Google'); 
var _UDS_MSG_SET_DEFAULT_LOCATION = ('Set default location'); 
var _UDS_MSG_NEWSCAT_TOPSTORIES = ('Top Stories'); 
var _UDS_MSG_NEWSCAT_WORLD = ('World'); 
var _UDS_MSG_NEWSCAT_NATION = ('Nation'); 
var _UDS_MSG_NEWSCAT_BUSINESS = ('Business'); 
var _UDS_MSG_NEWSCAT_SCITECH = ('Sci/Tech'); 
var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('Entertainment'); 
var _UDS_MSG_NEWSCAT_HEALTH = ('Health'); 
var _UDS_MSG_NEWSCAT_SPORTS = ('Sports'); 
var _UDS_MSG_NEWSCAT_POLITICS = ('Politics');
var b=true,c=null,f=false,i=encodeURIComponent,k=google_exportSymbol,m=window,n=google,o=navigator,p=document;function q(a,e){return a.className=e}var r="appendChild",s="push",t="length",v="prototype",w="className",A="status",B="createElement",E="loader",F="feeds",K="ServiceBase",L="CurrentLocale",M="getElementsByTagNameNS",N={};N.blank="&nbsp;";N.image=_UDS_MSG_SEARCHER_IMAGE;N.web=_UDS_MSG_SEARCHER_WEB;N.blog=_UDS_MSG_SEARCHER_BLOG;N.video=_UDS_MSG_SEARCHER_VIDEO;N.local=_UDS_MSG_SEARCHER_LOCAL;
N.news=_UDS_MSG_SEARCHER_NEWS;N.book=_UDS_MSG_SEARCHER_BOOK;N.patent="Patent";N["ads-by-google"]=_UDS_MSG_ADS_BY_GOOGLE;N.cse="Custom Search Control";N.save=_UDS_MSG_SEARCHCONTROL_SAVE;N.keep=_UDS_MSG_SEARCHCONTROL_KEEP;N.include=_UDS_MSG_SEARCHCONTROL_INCLUDE;N.copy=_UDS_MSG_SEARCHCONTROL_COPY;N.close=_UDS_MSG_SEARCHCONTROL_CLOSE;N["sponsored-links"]=_UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;N["see-more"]=_UDS_MSG_SEARCHCONTROL_SEE_MORE;N.watermark=_UDS_MSG_SEARCHCONTROL_WATERMARK;
N["search-location"]=_UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;N["disable-address-lookup"]=_UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;N["sort-by-date"]=_UDS_MSG_SORT_BY_DATE;N.pbg=_UDS_MSG_BRANDING_STRING;N["n-minutes-ago"]=_UDS_MSG_MINUTES_AGO;N["n-hours-ago"]=_UDS_MSG_HOURS_AGO;N["one-hour-ago"]=_UDS_MSG_ONE_HOUR_AGO;N["all-n-related"]=_UDS_MSG_NEWS_ALL_N_RELATED;N["related-articles"]=_UDS_MSG_NEWS_RELATED;N["page-count"]=_UDS_MSG_TOTAL_PAGE_COUNT;var O=[];O[0]=_UDS_MSG_MONTH_ABBR_JAN;O[1]=_UDS_MSG_MONTH_ABBR_FEB;
O[2]=_UDS_MSG_MONTH_ABBR_MAR;O[3]=_UDS_MSG_MONTH_ABBR_APR;O[4]=_UDS_MSG_MONTH_ABBR_MAY;O[5]=_UDS_MSG_MONTH_ABBR_JUN;O[6]=_UDS_MSG_MONTH_ABBR_JUL;O[7]=_UDS_MSG_MONTH_ABBR_AUG;O[8]=_UDS_MSG_MONTH_ABBR_SEP;O[9]=_UDS_MSG_MONTH_ABBR_OCT;O[10]=_UDS_MSG_MONTH_ABBR_NOV;O[11]=_UDS_MSG_MONTH_ABBR_DEC;N["month-abbr"]=O;N.directions=_UDS_MSG_DIRECTIONS;N["clear-results"]=_UDS_MSG_CLEAR_RESULTS;N["show-one-result"]=_UDS_MSG_SHOW_ONE_RESULT;N["show-more-results"]=_UDS_MSG_SHOW_MORE_RESULTS;
N["show-all-results"]=_UDS_MSG_SHOW_ALL_RESULTS;N.settings=_UDS_MSG_SETTINGS;N.search=_UDS_MSG_SEARCH;N["search-uc"]=_UDS_MSG_SEARCH_UC;N["powered-by"]=_UDS_MSG_POWERED_BY;N.sa=_UDS_MSG_SEARCHER_GSA;N.by=_UDS_MSG_SEARCHER_BY;N.code=_UDS_MSG_SEARCHER_CODE;N["unknown-license"]=_UDS_MSG_UNKNOWN_LICENSE;N["more-results"]=_UDS_MSG_SEARCHCONTROL_MORERESULTS;N.previous=_UDS_MSG_SEARCHCONTROL_PREVIOUS;N.next=_UDS_MSG_SEARCHCONTROL_NEXT;N["get-directions"]=_UDS_MSG_GET_DIRECTIONS;N["to-here"]=_UDS_MSG_GET_DIRECTIONS_TO_HERE;
N["from-here"]=_UDS_MSG_GET_DIRECTIONS_FROM_HERE;N["clear-results-uc"]=_UDS_MSG_CLEAR_RESULTS_UC;N["search-the-map"]=_UDS_MSG_SEARCH_THE_MAP;N["scroll-results"]=_UDS_MSG_SCROLL_THROUGH_RESULTS;N["edit-tags"]=_UDS_MSG_EDIT_TAGS;N["tag-search"]=_UDS_MSG_TAG_THIS_SEARCH;N["search-string"]=_UDS_MSG_SEARCH_STRING;N["optional-label"]=_UDS_MSG_OPTIONAL_LABEL;N["delete"]=_UDS_MSG_DELETE;N.deleted=_UDS_MSG_DELETED;N.cancel=_UDS_MSG_CANCEL;N["upload-video"]=_UDS_MSG_UPLOAD_YOUR_VIDEOS;N["im-done"]=_UDS_MSG_IM_DONE_WATCHING;
N["close-player"]=_UDS_MSG_CLOSE_VIDEO_PLAYER;N["no-results"]=_UDS_MSG_NO_RESULTS;N["linked-cse-error-results"]=_UDS_MSG_LINKEDCSE_ERROR_RESULTS;N.back=_UDS_MSG_BACK;N.subscribe=_UDS_MSG_SUBSCRIBE;N["us-pat"]="US Pat.";N["us-pat-app"]="US Pat. App";N["us-pat-filed"]="Filed";var _json_cache_defeater_=(new Date).getTime(),_json_request_require_prep=b;function P(a,e){if(Q("msie")&&aa("msie 6.0")){var d=ba(this,ha,[a,e]);m.setTimeout(d,0)}else ha(a,e)}
function ha(a,e){var d=p.getElementsByTagName("head")[0];d||(d=p.body.parentNode[r](p[B]("head")));var g=p[B]("script");g.type="text/javascript";g.charset="utf-8";var h=_json_request_require_prep?a+"&key="+n[E].ApiKey+"&v="+e:a;if(Q("msie")||Q("safari")||Q("konqueror"))h=h+"&nocache="+_json_cache_defeater_++;g.src=h;var j=function(){g.onload=c;g.parentNode.removeChild(g);delete g},l=function(y){var u,z=y?y:m.event;u=z.target?z.target:z.srcElement;if(u.readyState=="loaded"||u.readyState=="complete"){u.onreadystatechange=
c;j()}};if(o.product=="Gecko")g.onload=j;else g.onreadystatechange=l;d[r](g)}function ia(a,e){return function(){return e.apply(a,arguments)}}function ba(a,e,d){return function(){return e.apply(a,d)}}function R(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function S(a,e){try{a[r](e)}catch(d){}return e}function T(a,e){var d=p[B]("div");if(a)d.innerHTML=a;if(e)q(d,e);return d}function U(a){var e=p[B]("div");if(a)q(e,a);return e}
function ja(a,e,d){var g=a.insertRow(-1);g||alert(g);for(var h=0;h<e;h++)V(g,d);return g}function V(a,e){var d=a.insertCell(-1);if(e)q(d,e);return d}function ka(a,e){q(a,e)}function W(a,e){var d;a:if(a==c||a[w]==c)d=f;else{for(var g=a[w].split(" "),h=0;h<g[t];h++)if(g[h]==e){d=b;break a}d=f}d||(a.className+=" "+e)}function Y(a,e){if(!(a[w]==c)){for(var d=a[w].split(" "),g=[],h=f,j=0;j<d[t];j++)if(d[j]!=e)d[j]&&g[s](d[j]);else h=b;if(h)q(a,g.join(" "))}}
function Q(a){if(a in la)return la[a];return la[a]=o.userAgent.toLowerCase().indexOf(a)!=-1}function aa(a){if(a in ma)return ma[a];return ma[a]=o.appVersion.toLowerCase().indexOf(a)!=-1}var la={},ma={},na,oa,pa,qa,ra,va,wa;if(m.va){na=b;if(m.XMLHttpRequest)oa=b;else pa=b}else if(m.opera)qa=b;else if(p.childNodes&&!p.all&&!o.taintEnabled){ra=b;if(o.userAgent.indexOf("iPhone")>0)va=b}else if(p.getBoxObjectFor!=c)wa=b;
function xa(a){this.G=a+"branding";this.w=a+"branding-vertical";this.wa=a+"branding-img";this.ya=a+"branding-user-defined";this.Q=a+"branding-img-noclear";this.ea=a+"branding-clickable";this.text=a+"branding-text"}var ya={"zh-CN":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},"zh-TW":{month:" \u6708 ",year:" \u5e74 ",day:" \u65e5 "},ja:{month:"\u6708",year:"\u5e74",day:"\u65e5"},ko:{month:" \uc6d4 ",year:" \ub144 ",day:" \uc77c "}};
function za(a,e,d){var g=(new Date).getTime(),h=a.getTime(),j;if(g<h)return N["n-minutes-ago"](2);var l=g-h;if(l<3600000){var y=Math.floor(l/60000);j=y<=1?2:y;return N["n-minutes-ago"](j)}if(l<86400000){var u=Math.floor(l/3600000);if(u<=1)return N["one-hour-ago"];else{j=u;return N["n-hours-ago"](j)}}var z,C,D=a.getFullYear(),G=a.getMonth(),H=N["month-abbr"][G],x=a.getDate();if(x<10)x="0"+x;switch(e){case "MDY":C=H+" "+x+", "+D;break;case "YMD":if(d&&(d=="zh-CN"||d=="zh-TW"||d=="ja"||d=="ko")){var I=
ya[d];C=D+I.year+(G+1)+I.month+x+I.day}else C=D+" "+H+" "+x;break;default:case "DMY":C=x+" "+H+" "+D;break}return z=C};if(!Z)var Z=k;if(!$)var $=google_exportProperty;n[F].aa="_top";Z("google.feeds.LINK_TARGET_TOP",n[F].aa);n[F].L="_self";Z("google.feeds.LINK_TARGET_SELF",n[F].L);n[F].$="_parent";Z("google.feeds.LINK_TARGET_PARENT",n[F].$);n[F].Z="_blank";Z("google.feeds.LINK_TARGET_BLANK",n[F].Z);n[F].a=function(a){this.O=a;this.V=n[F].a.K;this.n=n[F].a.t;this.S=f};Z("google.feeds.Feed",n[F].a);n[F].a.ca=-1;$(n[F].a,"MAX_ENTRIES",n[F].a.ca);n[F].a.K=4;$(n[F].a,"DEFAULT_NUM_ENTRIES",n[F].a.K);n[F].a.F="xml";
$(n[F].a,"XML_FORMAT",n[F].a.F);n[F].a.t="json";$(n[F].a,"JSON_FORMAT",n[F].a.t);n[F].a.C="json_xml";$(n[F].a,"MIXED_FORMAT",n[F].a.C);n[F].a.p=[];n[F].a.s=function(a,e){var d=f,g=c;if(a[t])for(var h=0;h<a[t];h++)if(a[h]==c){a[h]=e;g=h;d=b;break}if(!d){g=a[t];a[s](e)}return g};$(n[F].a,"AllocateCompletionMapContext",n[F].a.s);n[F].a.D=function(a,e,d,g,h){var j=0;if(a)j=parseInt(a,10);var l=n[F].a.p[j];n[F].a.p[j]=c;l.I(e,d,g,h)};$(n[F].a,"RawCompletion",n[F].a.D);
n[F].a[v].load=function(a){var e=new n[F].j;e.h=a;e.n=this.n;var d=this.pa("google.feeds.Feed.RawCompletion",n[F].a.s(n[F].a.p,e));P(d,n[F].Version)};$(n[F].a[v],"load",n[F].a[v].load);n[F].a[v].pa=function(a,e){var d=n[E][K]+"/Gfeeds?callback="+a+"&context="+e+"&num="+this.V+"&hl="+n[F][L]+"&output="+this.n;if(this.O)d+="&q="+i(this.O);if(this.S)d+="&scoring=h";return d};n[F].a[v].q=function(a){this.V=a};$(n[F].a[v],"setNumEntries",n[F].a[v].q);
n[F].a[v].ta=function(a){switch(a){case n[F].a.F:case n[F].a.C:case n[F].a.t:this.n=a;break;default:this.n=n[F].a.t;break}};$(n[F].a[v],"setResultFormat",n[F].a[v].ta);n[F].a[v].R=function(){this.S=b};$(n[F].a[v],"includeHistoricalEntries",n[F].a[v].R);n[F].j=function(){};Z("google.feeds.Result",n[F].j);
n[F].j[v].I=function(a,e,d){this.status={code:e};if(d)this[A].message=d;if(e!=200){this.error=this[A];switch(this.n){case n[F].a.F:this.xmlDocument=c;break;case n[F].a.C:this.xmlDocument=c;default:this.feed={};this.feed.entries=[];break}}else{if(a.feed)this.feed=a.feed;a.xmlString&&this.ma(a.xmlString)}this.h&&this.h(this)};
n[F].j[v].ma=function(a){if(!(a==c)){var e;if(typeof DOMParser!="undefined")e=(new DOMParser).parseFromString(a,"application/xml");else if(typeof ActiveXObject!="undefined"){var d=new ActiveXObject("Microsoft.XMLDOM");d.loadXML(a);e=d}else{var g="data:text/xml;charset=utf-8,"+i(a),h=new XMLHttpRequest;h.open("GET",g,f);h.send(c);e=h.responseXML}this.xmlDocument=e;this.ka()}};
n[F].j[v].ka=function(){if(!(this.xmlDocument==c||this.feed==c)){var a=n[F].j.X(this.feed.type);if(!(a==c)){var e=this.xmlDocument;if(a.e){var d=n[F][M](this.xmlDocument,a.l,a.e);if(d==c||d[t]==0)return;e=d[0]}var g=n[F][M](e,a.l,a.k);if(!(g==c||g[t]==0))if(!(g[t]!=this.feed.entries[t]))for(var h=0;h<g[t];h++)this.feed.entries[h].xmlNode=g[h]}}};
n[F].j.X=function(a){var e=c;switch(a){case "rss":case "rss091":case "rss091u":case "rss091n":case "rss092":case "rss093":case "rss094":case "rss20":e={e:"channel",k:"item",l:""};break;case "rss090":e={e:"",k:"item",l:"http://my.netscape.com/rdf/simple/0.9/"};break;case "rss10":e={e:"",k:"item",l:"http://purl.org/rss/1.0/"};break;case "atom03":e={e:"feed",k:"entry",l:"http://purl.org/atom/ns#"};break;case "atom":case "atom10":e={e:"feed",k:"entry",l:"http://www.w3.org/2005/Atom"};break}return e};
n[F].M=1;Z("google.feeds.VERTICAL_BRANDING",n[F].M);n[F].Y=2;Z("google.feeds.HORIZONTAL_BRANDING",n[F].Y);
n[F].ia=function(a,e,d){var g,h=new xa("gf-"),j=U(h.G),l,y=h.G,u=p[B]("table");u.setAttribute("cellSpacing",0);u.setAttribute("cellPadding",0);if(y)q(u,y);l=u;S(j,l);var z=!(e&&e==n[F].M);if(!z){W(j,h.w);W(l,h.w)}var C=ja(l,0),D,G;if(z)G=D=C;else{D=C;G=ja(l,0)}var H="/css/small-logo.png",x=51,I=15;if(d)if(typeof d=="string")if(d.match(/^http:\/\/www\.youtube\.com/)){H="/css/youtube-logo-55x24.png";x=55;I=24;W(j,h.G+"-youtube");if(!z){W(j,h.w+"-youtube");W(l,h.w+"-youtube")}}var Ga=V(D,h.text),sa=
V(G,h.Q),Ha=T(N["powered-by"],h.text),ca,ta=n[E][K]+H,da=h.Q,J;if(na&&!oa){J=U(da);J.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+ta+'")';J.style.width=x+"px";J.style.height=I+"px"}else{var ea=p[B]("img");ea.src=ta;if(da)q(ea,da);J=ea}ca=J;S(Ga,Ha);if(d){var ua="http://www.google.com";if(typeof d=="string"&&(d.match(/^http:\/\/[a-z]*\.google\.com/)||d.match(/^http:\/\/www\.youtube\.com/)))ua=d;var X,fa=p[B]("a");fa.href=ua;fa.target="_BLANK";X=fa;q(X,h.ea);S(X,ca);S(sa,
X)}else S(sa,ca);if(a){var ga;ga=typeof a=="string"?p.getElementById(a):a;R(ga);S(ga,j)}return g=j};Z("google.feeds.getBranding",n[F].ia);n[F].getElementsByTagNameNS=function(a,e,d){var g;if(e==c)e="";if(a[M])g=a[M](e,d);else{var h=a.getElementsByTagName("*");g=[];for(var j=0;j<h[t];j++){var l=h[j].tagName;l=l.substring(l.lastIndexOf(":")+1);l==d&&h[j].namespaceURI==e&&g[s](h[j])}}return g};Z("google.feeds.getElementsByTagNameNS",n[F][M]);k("google.feeds.Strings",N);
k("google.feeds.CurrentLocale",_UDS_CONST_LOCALE);k("google.feeds.ShortDatePattern",_UDS_CONST_SHORT_DATE_PATTERN);n[F].ha=function(a,e){var d=new n[F].A;d.h=e;var g=n[F].a.s(n[F].a.p,d),h=n[E][K]+"/GfindFeeds?callback=google.feeds.Feed.FindRawCompletion&context="+g+"&hl="+n[F][L];if(a)h+="&q="+i(a);P(h,n[F].Version)};Z("google.feeds.findFeeds",n[F].ha);n[F].a.W=n[F].a.D;$(n[F].a,"FindRawCompletion",n[F].a.W);n[F].A=function(){};Z("google.feeds.FindResult",n[F].A);
n[F].A[v].I=function(a,e,d){this.status={code:e};if(d)this[A].message=d;if(e!=200){this.error=this[A];this.k=[]}else{if(a.entries)this.entries=a.entries;if(a.query)this.query=a.query}this.h&&this.h(this)};n[F].na=function(a,e){var d=new n[F].B;d.h=e;var g=n[F].a.s(n[F].a.p,d),h=n[E][K]+"/GlookupFeed?callback=google.feeds.Feed.LookupRawCompletion&context="+g+"&hl="+n[F][L];if(a)h+="&q="+i(a);P(h,n[F].Version)};Z("google.feeds.lookupFeed",n[F].na);n[F].a.ba=n[F].a.D;$(n[F].a,"LookupRawCompletion",n[F].a.ba);n[F].B=function(){};Z("google.feeds.LookupResult",n[F].B);
n[F].B[v].I=function(a,e,d){this.status={code:e};if(d)this[A].message=d;if(e!=200){this.error=this[A];this.url=c}else{if(a.url)this.url=a.url;if(a.query)this.query=a.query}this.h&&this.h(this)};n[F].b=function(){this.xa=c;this.d=[];this.U=n[F].L;this.u=n[F].b.z;this.r=this.v=this.m=c};Z("google.feeds.FeedControl",n[F].b);n[F].b.o="tabbed";$(n[F].b,"DRAW_MODE_TABBED",n[F].b.o);n[F].b.z="linear";$(n[F].b,"DRAW_MODE_LINEAR",n[F].b.z);n[F].b[v].oa=function(a){if(a.drawMode)if(a.drawMode==n[F].b.o||a.drawMode==n[F].b.z)this.u=a.drawMode};n[F].b[v].da=function(a,e,d){var g=new n[F].a(a);this.d[s](new Aa(g,e,this,d))};$(n[F].b[v],"addFeed",n[F].b[v].da);
n[F].b[v].fa=function(a,e){e&&this.oa(e);this.e=U(Ba);this.v=U(Ca);if(this.u==n[F].b.o){this.r=U(Da);S(this.e,this.r);this.c=[];for(var d=this.f=0;d<this.d[t];d++){var g={};g.g=T(this.d[d].T);g.i=c;g.g.onclick=ba(this,n[F].b[v].ua,[d]);this.c[d]=g;S(this.r,g.g)}}S(this.e,this.v);for(d=0;d<this.d[t];d++){this.d[d].e=U(Ea);if(this.u==n[F].b.o)this.c[d].i=this.d[d].e;var h=U(Fa),j=T(this.d[d].T,Ia);S(h,j);this.d[d].J=U(Ja);S(this.v,this.d[d].e);S(this.d[d].e,h);S(this.d[d].e,this.d[d].J)}if(this.u==
n[F].b.o)for(d=0;d<this.d[t];d++){W(this.c[d].g,Ka);W(this.c[d].i,La);if(d==this.f){W(this.c[d].g,Ma);W(this.c[d].i,Na)}else{W(this.c[d].g,Oa);W(this.c[d].i,Pa)}}var l=this.e;if(a)try{R(a);a[r](l)}catch(y){}this.qa()};$(n[F].b[v],"draw",n[F].b[v].fa);n[F].b[v].qa=function(){q(this.v,Qa);this.r&&ka(this.r,Ra);for(var a=0;a<this.d[t];a++){var e=this.d[a];this.m!=c&&e.m==c&&e.P.q(this.m);e.P.load(e.la)}};n[F].b[v].q=function(a){this.m=a};$(n[F].b[v],"setNumEntries",n[F].b[v].q);
n[F].b[v].ra=function(a){this.U=a};$(n[F].b[v],"setLinkTarget",n[F].b[v].ra);n[F].b[v].N=function(a){var e=U(Sa),d,g=this.U,h=T(c,Ta),j=p[B]("a");j.href=a.link;j.innerHTML=a.title;if(Ta)q(j,Ta);if(g)j.target=g;h[r](j);d=h;S(e,d);if(a.author){d=T(N.by+"&nbsp;"+a.author,Ua);S(e,d);var l="";if(a.publishedDate)l="-";d=T(l,Va);S(e,d)}if(a.publishedDate){d=T(za(new Date(a.publishedDate),n[F].ShortDatePattern,n[F][L]),Wa);S(e,d)}d=T(a.contentSnippet,Xa);S(e,d);S(e,d);a.html=e};$(n[F].b[v],"createHtml",n[F].b[v].N);
n[F].b[v].H=function(a,e){var d,g;R(e.J);for(var h=0;h<a.feed.entries[t];h++){d=a.feed.entries[h];d.html||this.N(d);if(d.html){g=U(Ya);var j=d.html.cloneNode(b);S(g,j);S(e.J,g)}}};n[F].b[v].ua=function(a){if(!(this.f==a)){Y(this.c[this.f].g,Ma);Y(this.c[this.f].i,Na);W(this.c[this.f].g,Oa);W(this.c[this.f].i,Pa);this.f=a;W(this.c[this.f].g,Ma);W(this.c[this.f].i,Na);Y(this.c[this.f].g,Oa);Y(this.c[this.f].i,Pa)}};
function Aa(a,e,d,g){this.P=a;this.T=e;this.m=c;if(g){if(g.numEntries){a.q(g.numEntries);this.m=g.numEntries}g.includeHistoricalEntries&&a.R()}this.ga=d;this.la=ia(this,Aa[v].H)}Aa[v].H=function(a){a.error||this.ga.H(a,this)};var Sa="gf-result",Va="gf-spacer",Ta="gf-title",Xa="gf-snippet",Ua="gf-author",Wa="gf-relativePublishedDate",Ba="gfc-control",Ea="gfc-resultsRoot",Ja="gfc-results",Ya="gfc-result",Fa="gfc-resultsHeader",Ca="gfc-resultsbox-invisible",Qa="gfc-resultsbox-visible",Ia="gfc-title",Ra="gfc-tabsArea",Da="gfc-tabsAreaInvisible",Ka="gfc-tabHeader",Ma="gfc-tabhActive",Oa="gfc-tabhInactive",Na="gfc-tabdActive",Pa="gfc-tabdInactive",La="gfc-tabData";
google.loader.loaded({"module":"feeds","version":"1.0","components":["default"]});
google.loader.eval.feeds = function() {eval(arguments[0])}})()