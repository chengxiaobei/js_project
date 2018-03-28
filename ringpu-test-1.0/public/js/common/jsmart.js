/*
 jSmart Javascript template engine
 http://code.google.com/p/jsmart/

 Copyright 2011, Max Miroshnikov <miroshnikov at gmail dot com> 
 jSmart is licensed under the GNU Lesser General Public License
 http://www.gnu.org/licenses/lgpl.html
*/
(function(){function F(a,b){for(var c=1;c<arguments.length;++c)for(var d in arguments[c])a[d]=arguments[c][d];return a}function S(a){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}function C(a,b){if(Array.prototype.indexOf)return a.indexOf(b);for(var c=0;c<a.length;++c)if(a[c]===b)return c;return-1}function K(a){return a.replace(/\\t/,"\t").replace(/\\n/,"\n").replace(/\\(['"\\])/g,"$1")}function A(a){return K(a.replace(/^['"](.*)['"]$/,"$1")).replace(/^\s+|\s+$/g,"")}function w(a,b){for(var c=
0,d=0,e=jSmart.prototype.left_delimiter,f=jSmart.prototype.right_delimiter,g=jSmart.prototype.auto_literal,h=/^\s*(.+)\s*$/i,h=a?RegExp("^\\s*("+a+")\\s*$","i"):h,k=0;k<b.length;++k)if(b.substr(k,e.length)==e)g&&k+1<b.length&&b.substr(k+1,1).match(/\s/)||(c||(b=b.slice(k),d+=parseInt(k),k=0),++c);else if(b.substr(k,f.length)==f&&!(g&&0<=k-1&&b.substr(k-1,1).match(/\s/))){if(!--c){var x=b.slice(e.length,k).replace(/[\r\n]/g," ").match(h);if(x)return x.index=d,x[0]=b.slice(0,k+f.length),x}0>c&&(c=0)}return null}
function L(a,b,c){var d="",e=null,f=null,g=0;do{e&&(g+=e[0].length);e=w(a,c);if(!e)throw Error("Unclosed {"+b+"}");d+=c.slice(0,e.index);g+=e.index;c=c.slice(e.index+e[0].length);(f=w(b,d))&&(d=d.slice(f.index+f[0].length))}while(f);e.index=g;return e}function G(a,b,c,d){for(var e=0,f=w(c,d);f;f=w(c,d)){var g=w(a,d);if(!g||g.index>f.index)return f.index+=e,f;d=d.slice(g.index+g[0].length);e+=g.index+g[0].length;f=L(b,a,d);d=d.slice(f.index+f[0].length);e+=f.index+f[0].length}return null}function M(a,
b){if("string"==typeof a)with({__code:a})with(D)with(b)try{return eval(__code)}catch(c){throw Error(c.message+" in \n"+a);}return a}function v(a,b,c){a.match(/\[\]$/)?c[a.replace(/\[\]$/,"")].push(b):c[a]=b}function n(a,b){for(var c=w("",a);c;c=w("",a)){c.index&&q(a.slice(0,c.index),b);a=a.slice(c.index+c[0].length);var d=c[1].match(/^\s*(\w+)(.*)$/);if(d){var e=d[1],d=2<d.length?d[2].replace(/^\s+|\s+$/g,""):"";if(e in B){var f=B[e],d=("parseParams"in f?f.parseParams:t)(d);"block"==f.type?(a=a.replace(/^\n/,
""),c=L("/"+e,e+" +[^}]*",a),f.parse(d,b,a.slice(0,c.index)),a=a.slice(c.index+c[0].length)):(f.parse(d,b),"extends"==e&&(b=[]));a=a.replace(/^\n/,"")}else if(e in u){if(c=u[e],"block"==c.type?(c=L("/"+e,e+" +[^}]*",a),d=t(d),f=a.slice(0,c.index),b.push({type:"plugin",name:e,params:d,subTree:n(f,[])}),a=a.slice(c.index+c[0].length)):"function"==c.type&&(c=t(d),b.push({type:"plugin",name:e,params:c})),"append"==e||"assign"==e||"capture"==e||"eval"==e||"include"==e)a=a.replace(/^\n/,"")}else B.expression.parse(c[1],
b)}else e=B.expression.parse(c[1],b),"build-in"==e.type&&"operator"==e.name&&"="==e.op&&(a=a.replace(/^\n/,""))}a&&q(a,b);return b}function q(a,b){if(q.parseEmbeddedVars)for(var c=/([$][\w@]+)|`([^`]*)`/,d=a.match(c);d;d=a.match(c))b.push({type:"text",data:a.slice(0,d.index)}),b.push(E(d[1]?d[1]:d[2]).tree),a=a.slice(d.index+d[0].length);b.push({type:"text",data:a});return b}function T(a,b,c){b.__parsed.name=q(a,[])[0];c.push({type:"plugin",name:"__func",params:b});return c}function p(a,b,c,d){d.push({type:"build-in",
name:"operator",op:a,optype:b,precedence:c,params:{}})}function N(a,b,c){var d=b.token;c=[{type:"text",data:c.replace(/^(\w+)@(key|index|iteration|first|last|show|total)/gi,"$1__$2")}];for(var e=/^(?:\.|\s*->\s*|\[\s*)/,f=a.match(e);f;f=a.match(e)){b.token+=f[0];a=a.slice(f[0].length);var g={value:"",tree:[]};if(f[0].match(/\[/)){if(g=E(a))b.token+=g.value,c.push(g.tree),a=a.slice(g.value.length);if(f=a.match(/\s*\]/))b.token+=f[0],a=a.slice(f[0].length)}else{f=l.stop;l.stop=!0;if(O(a,g)){b.token+=
g.value;var h=g.tree[0];"plugin"==h.type&&"__func"==h.name&&(h.hasOwner=!0);c.push(h);a=a.slice(g.value.length)}else g=!1;l.stop=f}g||c.push({type:"text",data:""})}b.tree.push({type:"var",parts:c});b.value+=b.token.substr(d.length);P(b.token);return a}function P(a){}function l(a,b){if(!l.stop){var c=a.match(/^\|(\w+)/);if(c){b.value+=c[0];var d="default"==c[1]?"defaultValue":c[1];a=a.slice(c[0].length).replace(/^\s+/,"");l.stop=!0;for(var c=[],e=a.match(/^\s*:\s*/);e;e=a.match(/^\s*:\s*/))b.value+=
a.slice(0,e[0].length),a=a.slice(e[0].length),e={value:"",tree:[]},O(a,e)?(b.value+=e.value,c.push(e.tree[0]),a=a.slice(e.value.length)):q("",c);l.stop=!1;c.unshift(b.tree.pop());b.tree.push(T(d,{__parsed:c},[])[0]);l(a,b)}}}function O(a,b){if(!a)return!1;if(a.substr(0,jSmart.prototype.left_delimiter.length)==jSmart.prototype.left_delimiter){var c=w("",a);if(c)return b.token=c[0],b.value+=c[0],n(c[0],b.tree),l(a.slice(b.value.length),b),!0}for(c=0;c<H.length;++c)if(a.match(H[c].re))return b.token=
RegExp.lastMatch,b.value+=RegExp.lastMatch,H[c].parse(b,a.slice(b.token.length)),!0;return!1}function U(a,b,c){var d=b[a];if("operator"==d.name&&d.precedence==c&&!d.params.__parsed){if("binary"==d.optype)return d.params.__parsed=[b[a-1],b[a+1]],b.splice(a-1,3,d),!0;if("post-unary"==d.optype)return d.params.__parsed=[b[a-1]],b.splice(a-1,2,d),!0;d.params.__parsed=[b[a+1]];b.splice(a,2,d)}return!1}function V(a){for(var b=0,b=0;b<a.length;++b)a[b]instanceof Array&&(a[b]=V(a[b]));for(var c=1;14>c;++c)if(2==
c||10==c)for(b=a.length;0<b;--b)b-=U(b-1,a,c);else for(b=0;b<a.length;++b)b-=U(b,a,c);return a[0]}function E(a){for(var b={value:"",tree:[]};O(a.slice(b.value.length),b););if(!b.tree.length)return!1;b.tree=V(b.tree);return b}function t(a,b,c){var d=a.replace(/\n/g," ").replace(/^\s+|\s+$/g,""),e=[];e.__parsed=[];a="";if(!d)return e;b||(b=/^\s+/,c=/^(\w+)\s*=\s*/);for(;d;){var f=null;if(c){var g=d.match(c);g&&(f=A(g[1]),a+=d.slice(0,g[0].length),d=d.slice(g[0].length))}g=E(d);if(!g)break;f?(e[f]=g.value,
e.__parsed[f]=g.tree):(e.push(g.value),e.__parsed.push(g.tree));a+=d.slice(0,g.value.length);d=d.slice(g.value.length);if(f=d.match(b))a+=d.slice(0,f[0].length),d=d.slice(f[0].length);else break}e.toString=function(){return a};return e}function r(a,b){var c=[],d;for(d in a.__parsed)if(a.__parsed.hasOwnProperty(d)){var e=m([a.__parsed[d]],b);"string"==typeof e&&e.match(/^[1-9]\d{0,14}$/)&&!isNaN(e)&&(e=parseInt(e,10));c[d]=e}c.__get=function(a,b,d){if(a in c&&"undefined"!=typeof c[a])return c[a];if("undefined"!=
typeof d&&"undefined"!=typeof c[d])return c[d];if(null===b)throw Error("The required attribute '"+a+"' is missing");return b};return c}function y(a,b,c){for(var d=b,e="",f=0;f<a.parts.length;++f){var g=a.parts[f];if("plugin"==g.type&&"__func"==g.name&&g.hasOwner)b.__owner=d,d=m([a.parts[f]],b),delete b.__owner;else{e=m([g],b);e in b.smarty.section&&"text"==g.type&&"smarty"!=m([a.parts[0]],b)&&(e=b.smarty.section[e].index);!e&&"undefined"!=typeof c&&d instanceof Array&&(e=d.length);"undefined"!=typeof c&&
f==a.parts.length-1&&(d[e]=c);if(!("object"==typeof d&&null!==d&&e in d)){if("undefined"==typeof c)return"";d[e]={}}d=d[e]}}return d}function m(a,b){for(var c="",d=0;d<a.length;++d){var e="",f=a[d];if("text"==f.type)e=f.data;else if("var"==f.type)e=y(f,b);else if("build-in"==f.type)e=B[f.name].process(f,b);else if("plugin"==f.type){var g=u[f.name];if("block"==g.type){var h={value:!0};for(g.process(r(f.params,b),"",b,h);h.value;)h.value=!1,e+=g.process(r(f.params,b),m(f.subTree,b),b,h)}else"function"==
g.type&&(e=g.process(r(f.params,b),b))}"boolean"==typeof e&&(e=e?"1":"");if(1==a.length)return e;c+=e;if(b.smarty["continue"]||b.smarty["break"])break}return c}function W(a,b,c){if(!c&&a in Q)b=Q[a];else{c=jSmart.prototype.getTemplate(a);if("string"!=typeof c)throw Error("No template for "+a);n(I(jSmart.prototype.filters_global.pre,X(c.replace(/\r\n/g,"\n"))),b);Q[a]=b}return b}function X(a){for(var b="",c=a.match(/{\*/);c;c=a.match(/{\*/)){b+=a.slice(0,c.index);a=a.slice(c.index+c[0].length);c=a.match(/\*}/);
if(!c)throw Error("Unclosed {*");a=a.slice(c.index+c[0].length)}return b+a}function I(a,b){for(var c=0;c<a.length;++c)b=a[c](b);return b}var B={expression:{parse:function(a,b){var c=E(a);b.push({type:"build-in",name:"expression",expression:c.tree,params:t(a.slice(c.value.length).replace(/^\s+|\s+$/g,""))});return c.tree},process:function(a,b){var c=r(a.params,b),d=m([a.expression],b);if(0>C(c,"nofilter")){for(c=0;c<default_modifiers.length;++c){var e=default_modifiers[c];e.params.__parsed[0]={type:"text",
data:d};d=m([e],b)}escape_html&&(d=D.escape(d));d=I(varFilters,d);J.length&&(__t=function(){return d},d=m(J,b))}return d}},operator:{process:function(a,b){var c=r(a.params,b),d=c[0];if("binary"==a.optype){c=c[1];if("="==a.op)return y(a.params.__parsed[0],b,c),"";if(a.op.match(/(\+=|-=|\*=|\/=|%=)/)){d=y(a.params.__parsed[0],b);switch(a.op){case "+=":d+=c;break;case "-=":d-=c;break;case "*=":d*=c;break;case "/=":d/=c;break;case "%=":d%=c}return y(a.params.__parsed[0],b,d)}if(a.op.match(/div/))return"div"!=
a.op^0==d%c;if(a.op.match(/even/))return"even"!=a.op^0==d/c%2;if(a.op.match(/xor/))return(d||c)&&!(d&&c);switch(a.op){case "==":return d==c;case "!=":return d!=c;case "+":return d+c;case "-":return d-c;case "*":return d*c;case "/":return d/c;case "%":return d%c;case "&&":return d&&c;case "||":return d||c;case "<":return d<c;case "<=":return d<=c;case ">":return d>c;case ">=":return d>=c;case "===":return d===c;case "!==":return d!==c}}else{if("!"==a.op)return!d;(c="var"==a.params.__parsed[0].type)&&
(d=y(a.params.__parsed[0],b));var e=d;if("pre-unary"==a.optype){switch(a.op){case "-":e=-d;break;case "++":e=++d;break;case "--":e=--d}c&&y(a.params.__parsed[0],b,d)}else{switch(a.op){case "++":d++;break;case "--":d--}y(a.params.__parsed[0],b,d)}return e}}},section:{type:"block",parse:function(a,b,c){var d=[],e=[];b.push({type:"build-in",name:"section",params:a,subTree:d,subTreeElse:e});(a=G("section [^}]+","/section","sectionelse",c))?(n(c.slice(0,a.index),d),n(c.slice(a.index+a[0].length).replace(/^[\r\n]/,
""),e)):n(c,d)},process:function(a,b){var c=r(a.params,b),d={};b.smarty.section[c.__get("name",null,0)]=d;var e=c.__get("show",!0);d.show=e;if(!e)return m(a.subTreeElse,b);var e=parseInt(c.__get("start",0)),f=c.loop instanceof Object?S(c.loop):isNaN(c.loop)?0:parseInt(c.loop),g=parseInt(c.__get("step",1)),c=parseInt(c.__get("max"));isNaN(c)&&(c=Number.MAX_VALUE);0>e?(e+=f,0>e&&(e=0)):e>=f&&(e=f?f-1:0);for(var h=0,k=e;0<=k&&k<f&&h<c;k+=g,++h);d.total=h;d.loop=h;for(var h=0,x="",k=e;0<=k&&k<f&&h<c&&
!b.smarty["break"];k+=g,++h)d.first=k==e,d.last=0>k+g||k+g>=f,d.index=k,d.index_prev=k-g,d.index_next=k+g,d.iteration=d.rownum=h+1,x+=m(a.subTree,b),b.smarty["continue"]=!1;b.smarty["break"]=!1;return h?x:m(a.subTreeElse,b)}},setfilter:{type:"block",parseParams:function(a){return[E("__t()|"+a).tree]},parse:function(a,b,c){b.push({type:"build-in",name:"setfilter",params:a,subTree:n(c,[])})},process:function(a,b){J=a.params;var c=m(a.subTree,b);J=[];return c}},"for":{type:"block",parseParams:function(a){var b=
a.match(/^\s*\$(\w+)\s*=\s*([^\s]+)\s*to\s*([^\s]+)\s*(?:step\s*([^\s]+))?\s*(.*)$/);if(!b)throw Error("Invalid {for} parameters: "+a);return t("varName='"+b[1]+"' from="+b[2]+" to="+b[3]+" step="+(b[4]?b[4]:"1")+" "+b[5])},parse:function(a,b,c){var d=[],e=[];b.push({type:"build-in",name:"for",params:a,subTree:d,subTreeElse:e});(a=G("for\\s[^}]+","/for","forelse",c))?(n(c.slice(0,a.index),d),n(c.slice(a.index+a[0].length),e)):n(c,d)},process:function(a,b){var c=r(a.params,b),d=parseInt(c.__get("from")),
e=parseInt(c.__get("to")),f=parseInt(c.__get("step"));isNaN(f)&&(f=1);var g=parseInt(c.__get("max"));isNaN(g)&&(g=Number.MAX_VALUE);for(var h=0,k="",d=Math.min(Math.ceil(((0<f?e-d:d-e)+1)/Math.abs(f)),g),e=parseInt(c.from);h<d&&!b.smarty["break"];e+=f,++h)b[c.varName]=e,k+=m(a.subTree,b),b.smarty["continue"]=!1;b.smarty["break"]=!1;h||(k=m(a.subTreeElse,b));return k}},"if":{type:"block",parse:function(a,b,c){var d=[],e=[];b.push({type:"build-in",name:"if",params:a,subTreeIf:d,subTreeElse:e});(a=G("if\\s+[^}]+",
"/if","else[^}]*",c))?(n(c.slice(0,a.index),d),c=c.slice(a.index+a[0].length),(d=a[1].match(/^elseif(.*)/))?B["if"].parse(t(d[1]),e,c.replace(/^\n/,"")):n(c.replace(/^\n/,""),e)):n(c,d)},process:function(a,b){return r(a.params,b)[0]?m(a.subTreeIf,b):m(a.subTreeElse,b)}},foreach:{type:"block",parseParams:function(a){var b=a.match(/^\s*([$].+)\s*as\s*[$](\w+)\s*(=>\s*[$](\w+))?\s*$/i);b&&(a="from="+b[1]+" item="+(b[4]||b[2]),b[4]&&(a+=" key="+b[2]));return t(a)},parse:function(a,b,c){var d=[],e=[];
b.push({type:"build-in",name:"foreach",params:a,subTree:d,subTreeElse:e});(a=G("foreach\\s[^}]+","/foreach","foreachelse",c))?(n(c.slice(0,a.index),d),n(c.slice(a.index+a[0].length).replace(/^[\r\n]/,""),e)):n(c,d)},process:function(a,b){var c=r(a.params,b),d=c.from;d instanceof Object||(d=[d]);var e=S(d);b[c.item+"__total"]=e;"name"in c&&(b.smarty.foreach[c.name]={},b.smarty.foreach[c.name].total=e);var f="",g=0,h;for(h in d)if(d.hasOwnProperty(h)){if(b.smarty["break"])break;b[c.item+"__key"]=isNaN(h)?
h:parseInt(h);"key"in c&&(b[c.key]=b[c.item+"__key"]);b[c.item]=d[h];b[c.item+"__index"]=parseInt(g);b[c.item+"__iteration"]=parseInt(g+1);b[c.item+"__first"]=0===g;b[c.item+"__last"]=g==e-1;"name"in c&&(b.smarty.foreach[c.name].index=parseInt(g),b.smarty.foreach[c.name].iteration=parseInt(g+1),b.smarty.foreach[c.name].first=0===g?1:"",b.smarty.foreach[c.name].last=g==e-1?1:"");++g;f+=m(a.subTree,b);b.smarty["continue"]=!1}b.smarty["break"]=!1;b[c.item+"__show"]=0<g;c.name&&(b.smarty.foreach[c.name].show=
0<g?1:"");return 0<g?f:m(a.subTreeElse,b)}},"function":{type:"block",parse:function(a,b,c){b=[];u[A(a.name?a.name:a[0])]={type:"function",subTree:b,defautParams:a,process:function(a,b){var c=r(this.defautParams,b);delete c.name;return m(this.subTree,F({},b,c,a))}};n(c,b)}},php:{type:"block",parse:function(a,b,c){}},"extends":{type:"function",parse:function(a,b){b.splice(0,b.length);W(A(a.file?a.file:a[0]),b)}},block:{type:"block",parse:function(a,b,c){b.push({type:"build-in",name:"block",params:a});
a.append=0<=C(a,"append");a.prepend=0<=C(a,"prepend");a.hide=0<=C(a,"hide");a.hasChild=a.hasParent=!1;P=function(b){b.match(/^\s*[$]smarty.block.child\s*$/)&&(a.hasChild=!0);b.match(/^\s*[$]smarty.block.parent\s*$/)&&(a.hasParent=!0)};b=n(c,[]);P=function(a){};c=A(a.name?a.name:a[0]);c in z||(z[c]=[]);z[c].push({tree:b,params:a})},process:function(a,b){b.smarty.block.parent=b.smarty.block.child="";var c=A(a.params.name?a.params.name:a.params[0]);this.processBlocks(z[c],z[c].length-1,b);return b.smarty.block.child},
processBlocks:function(a,b,c){if(!b&&a[b].params.hide)c.smarty.block.child="";else for(var d=!0,e=!1;0<=b;--b){if(a[b].params.hasParent){var f=c.smarty.block.child;c.smarty.block.child="";this.processBlocks(a,b-1,c);c.smarty.block.parent=c.smarty.block.child;c.smarty.block.child=f}var f=c.smarty.block.child,g=m(a[b].tree,c);c.smarty.block.child=f;a[b].params.hasChild?c.smarty.block.child=g:d?c.smarty.block.child=g+c.smarty.block.child:e&&(c.smarty.block.child+=g);d=a[b].params.append;e=a[b].params.prepend}}},
strip:{type:"block",parse:function(a,b,c){n(c.replace(/[ \t]*[\r\n]+[ \t]*/g,""),b)}},literal:{type:"block",parse:function(a,b,c){q(c,b)}},ldelim:{type:"function",parse:function(a,b){q(jSmart.prototype.left_delimiter,b)}},rdelim:{type:"function",parse:function(a,b){q(jSmart.prototype.right_delimiter,b)}},"while":{type:"block",parse:function(a,b,c){b.push({type:"build-in",name:"while",params:a,subTree:n(c,[])})},process:function(a,b){for(var c="";r(a.params,b)[0]&&!b.smarty["break"];)c+=m(a.subTree,
b),b.smarty["continue"]=!1;b.smarty["break"]=!1;return c}}},u={},D={},Q={},z=null,R=null,J=[],H=[{re:/^\$([\w@]+)/,parse:function(a,b){l(N(b,a,RegExp.$1),a)}},{re:/^(true|false)/i,parse:function(a,b){q(a.token.match(/true/i)?"1":"",a.tree)}},{re:/^'([^'\\]*(?:\\.[^'\\]*)*)'/,parse:function(a,b){q(K(RegExp.$1),a.tree);l(b,a)}},{re:/^"([^"\\]*(?:\\.[^"\\]*)*)"/,parse:function(a,b){var c=K(RegExp.$1),d=c.match(H[0].re);if(d){var e={token:d[0],tree:[]};N(c,e,d[1]);if(e.token.length==c.length){a.tree.push(e.tree[0]);
return}}q.parseEmbeddedVars=!0;a.tree.push({type:"plugin",name:"__quoted",params:{__parsed:n(c,[])}});q.parseEmbeddedVars=!1;l(b,a)}},{re:/^(\w+)\s*[(]([)]?)/,parse:function(a,b){var c=RegExp.$1,d=t(RegExp.$2?"":b,/^\s*,\s*/);T(c,d,a.tree);a.value+=d.toString();l(b.slice(d.toString().length),a)}},{re:/^\s*\(\s*/,parse:function(a,b){var c=[];a.tree.push(c);c.parent=a.tree;a.tree=c}},{re:/^\s*\)\s*/,parse:function(a,b){a.tree.parent&&(a.tree=a.tree.parent)}},{re:/^\s*(\+\+|--)\s*/,parse:function(a,
b){a.tree.length&&"var"==a.tree[a.tree.length-1].type?p(RegExp.$1,"post-unary",1,a.tree):p(RegExp.$1,"pre-unary",1,a.tree)}},{re:/^\s*(===|!==|==|!=)\s*/,parse:function(a,b){p(RegExp.$1,"binary",6,a.tree)}},{re:/^\s+(eq|ne|neq)\s+/i,parse:function(a,b){var c=RegExp.$1.replace(/ne(q)?/,"!=").replace(/eq/,"==");p(c,"binary",6,a.tree)}},{re:/^\s*!\s*/,parse:function(a,b){p("!","pre-unary",2,a.tree)}},{re:/^\s+not\s+/i,parse:function(a,b){p("!","pre-unary",2,a.tree)}},{re:/^\s*(=|\+=|-=|\*=|\/=|%=)\s*/,
parse:function(a,b){p(RegExp.$1,"binary",10,a.tree)}},{re:/^\s*(\*|\/|%)\s*/,parse:function(a,b){p(RegExp.$1,"binary",3,a.tree)}},{re:/^\s+mod\s+/i,parse:function(a,b){p("%","binary",3,a.tree)}},{re:/^\s*(\+|-)\s*/,parse:function(a,b){a.tree.length&&"operator"!=a.tree[a.tree.length-1].name?p(RegExp.$1,"binary",4,a.tree):p(RegExp.$1,"pre-unary",4,a.tree)}},{re:/^\s*(<=|>=|<>|<|>)\s*/,parse:function(a,b){p(RegExp.$1.replace(/<>/,"!="),"binary",5,a.tree)}},{re:/^\s+(lt|lte|le|gt|gte|ge)\s+/i,parse:function(a,
b){var c=RegExp.$1.replace(/lt/,"<").replace(/l(t)?e/,"<=").replace(/gt/,">").replace(/g(t)?e/,">=");p(c,"binary",5,a.tree)}},{re:/^\s+(is\s+(not\s+)?div\s+by)\s+/i,parse:function(a,b){p(RegExp.$2?"div_not":"div","binary",7,a.tree)}},{re:/^\s+is\s+(not\s+)?(even|odd)(\s+by\s+)?\s*/i,parse:function(a,b){p(RegExp.$1?"odd"==RegExp.$2?"even":"even_not":"odd"==RegExp.$2?"even_not":"even","binary",7,a.tree);RegExp.$3||q("1",a.tree)}},{re:/^\s*(&&)\s*/,parse:function(a,b){p(RegExp.$1,"binary",8,a.tree)}},
{re:/^\s*(\|\|)\s*/,parse:function(a,b){p(RegExp.$1,"binary",9,a.tree)}},{re:/^\s+and\s+/i,parse:function(a,b){p("&&","binary",11,a.tree)}},{re:/^\s+xor\s+/i,parse:function(a,b){p("xor","binary",12,a.tree)}},{re:/^\s+or\s+/i,parse:function(a,b){p("||","binary",13,a.tree)}},{re:/^#(\w+)#/,parse:function(a,b){var c={token:"$smarty",tree:[]};N(".config."+RegExp.$1,c,"smarty");a.tree.push(c.tree[0]);l(b,a)}},{re:/^\s*\[\s*/,parse:function(a,b){var c=t(b,/^\s*,\s*/,/^('[^'\\]*(?:\\.[^'\\]*)*'|"[^"\\]*(?:\\.[^"\\]*)*"|\w+)\s*=>\s*/);
a.tree.push({type:"plugin",name:"__array",params:c});a.value+=c.toString();if(c=b.slice(c.toString().length).match(/\s*\]/))a.value+=c[0]}},{re:/^[\d.]+/,parse:function(a,b){q(a.token,a.tree);l(b,a)}},{re:/^\w+/,parse:function(a,b){q(a.token,a.tree);l(b,a)}}];jSmart=function(a){this.tree=[];this.tree.blocks={};this.scripts={};this.default_modifiers=[];this.filters={variable:[],post:[]};this.smarty={smarty:{block:{},"break":!1,capture:{},"continue":!1,counter:{},cycle:{},foreach:{},section:{},now:Math.floor((new Date).getTime()/
1E3),"const":{},config:{},current_dir:"/",template:"",ldelim:jSmart.prototype.left_delimiter,rdelim:jSmart.prototype.right_delimiter,version:"2.9"}};z=this.tree.blocks;n(I(jSmart.prototype.filters_global.pre,X((new String(a?a:"")).replace(/\r\n/g,"\n"))),this.tree)};jSmart.prototype.fetch=function(a){z=this.tree.blocks;R=this.scripts;escape_html=this.escape_html;default_modifiers=jSmart.prototype.default_modifiers_global.concat(this.default_modifiers);this.data=F("object"==typeof a?a:{},this.smarty);
varFilters=jSmart.prototype.filters_global.variable.concat(this.filters.variable);a=m(this.tree,this.data);jSmart.prototype.debugging&&u.debug.process([],this.data);return I(jSmart.prototype.filters_global.post.concat(this.filters.post),a)};jSmart.prototype.escape_html=!1;jSmart.prototype.registerPlugin=function(a,b,c){"modifier"==a?D[b]=c:u[b]={type:a,process:c}};jSmart.prototype.registerFilter=function(a,b){(this.tree?this.filters:jSmart.prototype.filters_global)["output"==a?"post":a].push(b)};
jSmart.prototype.filters_global={pre:[],variable:[],post:[]};jSmart.prototype.configLoad=function(a,b,c){c=c?c:this.data;a=a.replace(/\r\n/g,"\n").replace(/^\s+|\s+$/g,"");for(var d=/^\s*(?:\[([^\]]+)\]|(?:(\w+)[ \t]*=[ \t]*("""|'[^'\\\n]*(?:\\.[^'\\\n]*)*'|"[^"\\\n]*(?:\\.[^"\\\n]*)*"|[^\n]*)))/m,e="",f=a.match(d);f;f=a.match(d)){a=a.slice(f.index+f[0].length);if(f[1])e=f[1];else if((!e||e==b)&&"."!=e.substr(0,1))if('"""'==f[3]){var g=a.match(/"""/);g&&(c.smarty.config[f[2]]=a.slice(0,g.index),a=
a.slice(g.index+g[0].length))}else c.smarty.config[f[2]]=A(f[3]);if(f=a.match(/\n+/))a=a.slice(f.index+f[0].length);else break}};jSmart.prototype.clearConfig=function(a){a?delete this.data.smarty.config[a]:this.data.smarty.config={}};jSmart.prototype.addDefaultModifier=function(a){a instanceof Array||(a=[a]);for(var b=0;b<a.length;++b){var c={value:"",tree:[0]};l("|"+a[b],c);(this.tree?this.default_modifiers:this.default_modifiers_global).push(c.tree[0])}};jSmart.prototype.default_modifiers_global=
[];jSmart.prototype.getTemplate=function(a){throw Error("No template for "+a);};jSmart.prototype.getFile=function(a){throw Error("No file for "+a);};jSmart.prototype.getJavascript=function(a){throw Error("No Javascript for "+a);};jSmart.prototype.getConfig=function(a){throw Error("No config for "+a);};jSmart.prototype.auto_literal=!0;jSmart.prototype.left_delimiter="{";jSmart.prototype.right_delimiter="}";jSmart.prototype.debugging=!1;jSmart.prototype.PHPJS=function(a,b){if("function"==eval("typeof "+
a))return"object"==typeof window?window:global;if("function"==typeof PHP_JS)return new PHP_JS;throw Error("Modifier '"+b+"' uses JavaScript port of PHP function '"+a+"'. You can find one at http://phpjs.org");};jSmart.prototype.makeTimeStamp=function(a){if(!a)return Math.floor((new Date).getTime()/1E3);if(isNaN(a))return a=jSmart.prototype.PHPJS("strtotime","date_format").strtotime(a),-1==a||!1===a?Math.floor((new Date).getTime()/1E3):a;a=new String(a);return 14==a.length?Math.floor((new Date(a.substr(0,
4),a.substr(4,2)-1,a.substr(6,2),a.substr(8,2),a.substr(10,2))).getTime()/1E3):parseInt(a)};jSmart.prototype.registerPlugin("function","__array",function(a,b){var c=[],d;for(d in a)a.hasOwnProperty(d)&&a[d]&&"function"!=typeof a[d]&&(c[d]=a[d]);return c});jSmart.prototype.registerPlugin("function","__func",function(a,b){for(var c=[],d={},e=0;e<a.length;++e)c.push(a.name+"__p"+e),d[a.name+"__p"+e]=a[e];return M(("__owner"in b&&a.name in b.__owner?"__owner."+a.name:a.name)+"("+c.join(",")+")",F({},
b,d))});jSmart.prototype.registerPlugin("function","__quoted",function(a,b){return a.join("")});jSmart.prototype.registerPlugin("function","append",function(a,b){var c=a.__get("var",null,0);c in b&&b[c]instanceof Array||(b[c]=[]);var d=a.__get("index",!1),e=a.__get("value",null,1);!1===d?b[c].push(e):b[c][d]=e;return""});jSmart.prototype.registerPlugin("function","assign",function(a,b){v(a.__get("var",null,0),a.__get("value",null,1),b);return""});jSmart.prototype.registerPlugin("function","break",
function(a,b){b.smarty["break"]=!0;return""});jSmart.prototype.registerPlugin("function","call",function(a,b){var c=a.__get("name",null,0);delete a.name;var d=a.__get("assign",!1);delete a.assign;c=u[c].process(a,b);return d?(v(d,c,b),""):c});jSmart.prototype.registerPlugin("block","capture",function(a,b,c,d){b&&(b=b.replace(/^\n/,""),c.smarty.capture[a.__get("name","default",0)]=b,"assign"in a&&v(a.assign,b,c),(a=a.__get("append",!1))&&(a in c?c[a]instanceof Array&&c[a].push(b):c[a]=[b]));return""});
jSmart.prototype.registerPlugin("function","continue",function(a,b){b.smarty["continue"]=!0;return""});jSmart.prototype.registerPlugin("function","counter",function(a,b){var c=a.__get("name","default");if(c in b.smarty.counter){var d=b.smarty.counter[c];"start"in a?d.value=parseInt(a.start):(d.value=parseInt(d.value),d.skip=parseInt(d.skip),d.value="down"==d.direction?d.value-d.skip:d.value+d.skip);d.skip=a.__get("skip",d.skip);d.direction=a.__get("direction",d.direction);d.assign=a.__get("assign",
d.assign)}else b.smarty.counter[c]={value:parseInt(a.__get("start",1)),skip:parseInt(a.__get("skip",1)),direction:a.__get("direction","up"),assign:a.__get("assign",!1)};return b.smarty.counter[c].assign?(b[b.smarty.counter[c].assign]=b.smarty.counter[c].value,""):a.__get("print",!0)?b.smarty.counter[c].value:""});jSmart.prototype.registerPlugin("function","cycle",function(a,b){var c=a.__get("name","default"),d=a.__get("reset",!1);c in b.smarty.cycle||(b.smarty.cycle[c]={arr:[""],delimiter:a.__get("delimiter",
","),index:0},d=!0);a.__get("delimiter",!1)&&(b.smarty.cycle[c].delimiter=a.delimiter);var e=a.__get("values",!1);if(e){var f=[];if(e instanceof Object)for(nm in e)f.push(e[nm]);else f=e.split(b.smarty.cycle[c].delimiter);if(f.length!=b.smarty.cycle[c].arr.length||f[0]!=b.smarty.cycle[c].arr[0])b.smarty.cycle[c].arr=f,b.smarty.cycle[c].index=0,d=!0}a.__get("advance","true")&&(b.smarty.cycle[c].index+=1);if(b.smarty.cycle[c].index>=b.smarty.cycle[c].arr.length||d)b.smarty.cycle[c].index=0;return a.__get("assign",
!1)?(v(a.assign,b.smarty.cycle[c].arr[b.smarty.cycle[c].index],b),""):a.__get("print",!0)?b.smarty.cycle[c].arr[b.smarty.cycle[c].index]:""});jSmart.prototype.print_r=function(a,b){if(a instanceof Object){var c=(a instanceof Array?"Array["+a.length+"]":"Object")+"<br>",d;for(d in a)a.hasOwnProperty(d)&&(c+=b+"&nbsp;&nbsp;<strong>"+d+"</strong> : "+jSmart.prototype.print_r(a[d],b+"&nbsp;&nbsp;&nbsp;")+"<br>");return c}return a};jSmart.prototype.registerPlugin("function","debug",function(a,b){"undefined"!=
typeof dbgWnd&&dbgWnd.close();dbgWnd=window.open("","","width=680,height=600,resizable,scrollbars=yes");var c="",d=0,e;for(e in b)c+="<tr class="+(++d%2?"odd":"even")+"><td><strong>"+e+"</strong></td><td>"+jSmart.prototype.print_r(b[e],"")+"</td></tr>";dbgWnd.document.write("                <html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en'>                <head> \t\t            <title>jSmart Debug Console</title>                   <style type='text/css'>                      table {width: 100%;}                      td {vertical-align:top;width: 50%;}                      .even td {background-color: #fafafa;}                   </style>                </head>                <body>                   <h1>jSmart Debug Console</h1>                   <h2>assigned template variables</h2>                   <table>"+
c+"</table>                </body>                </html>             ");return""});jSmart.prototype.registerPlugin("function","eval",function(a,b){var c=[];n(a.__get("var","",0),c);c=m(c,b);return"assign"in a?(v(a.assign,c,b),""):c});jSmart.prototype.registerPlugin("function","fetch",function(a,b){var c=jSmart.prototype.getFile(a.__get("file",null,0));return"assign"in a?(v(a.assign,c,b),""):c});jSmart.prototype.registerPlugin("function","html_checkboxes",function(a,b){var c=a.__get("type","checkbox"),
d=a.__get("name",c);"checkbox"==c&&(d+="[]");var e=a.__get("values",a.options),f=a.__get("options",[]),g="options"in a,h;if(!g)for(h in a.output)f.push(a.output[h]);var k=a.__get("selected",!1),x=a.__get("separator",""),m=Boolean(a.__get("labels",!0)),n=[],p=0,l="";for(h in e)e.hasOwnProperty(h)&&(l=m?"<label>":"",l+='<input type="'+c+'" name="'+d+'" value="'+(g?h:e[h])+'" ',k==(g?h:e[h])&&(l+='checked="checked" '),l+="/>"+f[g?h:p++],l+=m?"</label>":"",l+=x,n.push(l));return"assign"in a?(v(a.assign,
n,b),""):n.join("\n")});jSmart.prototype.registerPlugin("function","html_image",function(a,b){var c=a.__get("file",null),d=a.__get("width",!1),e=a.__get("height",!1),f=a.__get("alt",""),g=a.__get("href",!1),h={file:1,width:1,height:1,alt:1,href:1,basedir:1,path_prefix:1},c='<img src="'+a.__get("path_prefix","")+c+'" alt="'+f+'"'+(d?' width="'+d+'"':"")+(e?' height="'+e+'"':""),k;for(k in a)a.hasOwnProperty(k)&&"string"==typeof a[k]&&(k in h||(c+=" "+k+'="'+a[k]+'"'));c+=" />";return g?'<a href="'+
g+'">'+c+"</a>":c});jSmart.prototype.registerPlugin("function","html_options",function(a,b){var c=a.__get("values",a.options),d=a.__get("options",[]),e="options"in a,f;if(!e)for(f in a.output)d.push(a.output[f]);var g=a.__get("selected",!1),h=[],k="",l=0;for(f in c)c.hasOwnProperty(f)&&(k='<option value="'+(e?f:c[f])+'"',g==(e?f:c[f])&&(k+=' selected="selected"'),k+=">"+d[e?f:l++]+"</option>",h.push(k));c=a.__get("name",!1);return(c?'<select name="'+c+'">\n'+h.join("\n")+"\n</select>":h.join("\n"))+
"\n"});jSmart.prototype.registerPlugin("function","html_radios",function(a,b){a.type="radio";return u.html_checkboxes.process(a,b)});jSmart.prototype.registerPlugin("function","html_select_date",function(a,b){var c=a.__get("prefix","Date_"),d="January February March April May June July August September October November December".split(" "),e;e=""+('<select name="'+c+'Month">\n');for(var f=0,f=0;f<d.length;++f)e+='<option value="'+f+'">'+d[f]+"</option>\n";e=e+"</select>\n"+('<select name="'+c+'Day">\n');
for(f=0;31>f;++f)e+='<option value="'+f+'">'+f+"</option>\n";return e+="</select>\n"});jSmart.prototype.registerPlugin("function","html_table",function(a,b){var c=[],d;if(a.loop instanceof Array)c=a.loop;else for(d in a.loop)a.loop.hasOwnProperty(d)&&c.push(a.loop[d]);var e=a.__get("rows",!1),f=a.__get("cols",!1);f||(f=e?Math.ceil(c.length/e):3);var g=[];if(isNaN(f)){if("object"==typeof f)for(d in f)f.hasOwnProperty(d)&&g.push(f[d]);else g=f.split(/\s*,\s*/);f=g.length}var e=e?e:Math.ceil(c.length/
f),h=a.__get("inner","cols");d=a.__get("caption","");var k=a.__get("table_attr",'border="1"'),l=a.__get("th_attr",!1);l&&"object"!=typeof l&&(l=[l]);var n=a.__get("tr_attr",!1);n&&"object"!=typeof n&&(n=[n]);var m=a.__get("td_attr",!1);m&&"object"!=typeof m&&(m=[m]);for(var p=a.__get("trailpad","&nbsp;"),q=a.__get("hdir","right"),v=a.__get("vdir","down"),r="",t=0;t<e;++t){for(var r=r+("<tr"+(n?" "+n[t%n.length]:"")+">\n"),u=0;u<f;++u)var w="cols"==h?("down"==v?t:e-1-t)*f+("right"==q?u:f-1-u):("right"==
q?u:f-1-u)*e+("down"==v?t:e-1-t),r=r+("<td"+(m?" "+m[u%m.length]:"")+">"+(w<c.length?c[w]:p)+"</td>\n");r+="</tr>\n"}c="";if(g.length){c="\n<thead><tr>";for(e=0;e<g.length;++e)c+="\n<th"+(l?" "+l[e%l.length]:"")+">"+g["right"==q?e:g.length-1-e]+"</th>";c+="\n</tr></thead>"}return"<table "+k+">"+(d?"\n<caption>"+d+"</caption>":"")+c+"\n<tbody>\n"+r+"</tbody>\n</table>\n"});jSmart.prototype.registerPlugin("function","include",function(a,b){var c=a.__get("file",null,0),d=F({},b,a);d.smarty.template=
c;c=m(W(c,[],0<=C(a,"nocache")),d);return"assign"in a?(v(a.assign,c,b),""):c});jSmart.prototype.registerPlugin("function","include_javascript",function(a,b){var c=a.__get("file",null,0);if(a.__get("once",!0)&&c in R)return"";R[c]=!0;c=M(jSmart.prototype.getJavascript(c),{$this:b});return"assign"in a?(v(a.assign,c,b),""):c});jSmart.prototype.registerPlugin("function","include_php",function(a,b){return u.include_javascript.process(a,b)});jSmart.prototype.registerPlugin("function","insert",function(a,
b){var c={},d;for(d in a)a.hasOwnProperty(d)&&isNaN(d)&&a[d]&&"string"==typeof a[d]&&"name"!=d&&"assign"!=d&&"script"!=d&&(c[d]=a[d]);d="insert_";"script"in a&&(eval(jSmart.prototype.getJavascript(a.script)),d="smarty_insert_");c=eval(d+a.__get("name",null,0))(c,b);return"assign"in a?(v(a.assign,c,b),""):c});jSmart.prototype.registerPlugin("block","javascript",function(a,b,c,d){c.$this=c;M(b,c);delete c.$this;return""});jSmart.prototype.registerPlugin("function","config_load",function(a,b){jSmart.prototype.configLoad(jSmart.prototype.getConfig(a.__get("file",
null,0)),a.__get("section","",1),b);return""});jSmart.prototype.registerPlugin("function","mailto",function(a,b){var c=a.__get("address",null),d=a.__get("encode","none"),e=a.__get("text",c),f=jSmart.prototype.PHPJS("rawurlencode","mailto").rawurlencode(a.__get("cc","")).replace("%40","@"),g=jSmart.prototype.PHPJS("rawurlencode","mailto").rawurlencode(a.__get("bcc","")).replace("%40","@"),h=jSmart.prototype.PHPJS("rawurlencode","mailto").rawurlencode(a.__get("followupto","")).replace("%40","@"),k=
jSmart.prototype.PHPJS("rawurlencode","mailto").rawurlencode(a.__get("subject","")),l=jSmart.prototype.PHPJS("rawurlencode","mailto").rawurlencode(a.__get("newsgroups","")),n=a.__get("extra",""),c=c+(f?"?cc="+f:"")+(g?(f?"&":"?")+"bcc="+g:""),c=c+(k?(f||g?"&":"?")+"subject="+k:""),c=c+(l?(f||g||k?"&":"?")+"newsgroups="+l:""),c=c+(h?(f||g||k||l?"&":"?")+"followupto="+h:"");s='<a href="mailto:'+c+'" '+n+">"+e+"</a>";if("javascript"==d){s="document.write('"+s+"');";e="";for(d=0;d<s.length;++d)e+="%"+
jSmart.prototype.PHPJS("bin2hex","mailto").bin2hex(s.substr(d,1));return'<script type="text/javascript">eval(unescape(\''+e+"'))\x3c/script>"}if("javascript_charcode"==d){e=[];for(d=0;d<s.length;++d)e.push(jSmart.prototype.PHPJS("ord","mailto").ord(s.substr(d,1)));return'<script type="text/javascript" language="javascript">\n\x3c!--\n{document.write(String.fromCharCode('+e.join(",")+"))}\n//--\x3e\n\x3c/script>\n"}if("hex"==d){if(c.match(/^.+\?.+$/))throw Error("mailto: hex encoding does not work with extra attributes. Try javascript.");
f="";for(d=0;d<c.length;++d)f=c.substr(d,1).match(/\w/)?f+("%"+jSmart.prototype.PHPJS("bin2hex","mailto").bin2hex(c.substr(d,1))):f+c.substr(d,1);c="";for(d=0;d<e.length;++d)c+="&#x"+jSmart.prototype.PHPJS("bin2hex","mailto").bin2hex(e.substr(d,1))+";";return'<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;'+f+'" '+n+">"+c+"</a>"}return s});jSmart.prototype.registerPlugin("function","math",function(a,b){with(Math)with(a)var c=eval(a.__get("equation",null).replace(/pi\(\s*\)/g,"PI"));"format"in a&&
(c=jSmart.prototype.PHPJS("sprintf","math").sprintf(a.format,c));return"assign"in a?(v(a.assign,c,b),""):c});jSmart.prototype.registerPlugin("block","nocache",function(a,b,c,d){return b});jSmart.prototype.registerPlugin("block","textformat",function(a,b,c,d){if(!b)return"";d=a.__get("wrap",80);var e=a.__get("wrap_char","\n"),f=a.__get("wrap_cut",!1),g=a.__get("indent_char"," "),h=a.__get("indent",0),k=Array(h+1).join(g),l=a.__get("indent_first",0),g=Array(l+1).join(g);"email"==a.__get("style","")&&
(d=72);b=b.split("\n");for(var n=0;n<b.length;++n){var m=b[n];m&&(m=m.replace(/^\s+|\s+$/,"").replace(/\s+/g," "),l&&(m=g+m),m=D.wordwrap(m,d-h,e,f),h&&(m=m.replace(/^/mg,k)),b[n]=m)}d=b.join(e+e);return"assign"in a?(v(a.assign,d,c),""):d});jSmart.prototype.registerPlugin("modifier","capitalize",function(a,b){for(var c=RegExp(b?"[\\W\\d]+":"\\W+"),d=null,e="",d=a.match(c);d;d=a.match(c)){var f=a.slice(0,d.index),e=f.match(/\d/)?e+f:e+(f.charAt(0).toUpperCase()+f.slice(1)),e=e+a.slice(d.index,d.index+
d[0].length);a=a.slice(d.index+d[0].length)}return a.match(/\d/)?e+a:e+a.charAt(0).toUpperCase()+a.slice(1)});jSmart.prototype.registerPlugin("modifier","cat",function(a,b){return a+(b?b:"")});jSmart.prototype.registerPlugin("modifier","count",function(a,b){if(null===a||"undefined"===typeof a)return 0;if(a.constructor!==Array&&a.constructor!==Object)return 1;b=Boolean(b);var c,d=0;for(c in a)a.hasOwnProperty(c)&&(d++,b&&a[c]&&(a[c].constructor===Array||a[c].constructor===Object)&&(d+=D.count(a[c],
!0)));return d});jSmart.prototype.registerPlugin("modifier","count_characters",function(a,b){return b?a.length:a.replace(/\s/g,"").length});jSmart.prototype.registerPlugin("modifier","count_paragraphs",function(a){return(a=a.match(/\n+/g))?a.length+1:1});jSmart.prototype.registerPlugin("modifier","count_sentences",function(a){return(a=a.match(/[^\s]\.(?!\w)/g))?a.length:0});jSmart.prototype.registerPlugin("modifier","count_words",function(a){return(a=a.match(/\w+/g))?a.length:0});jSmart.prototype.registerPlugin("modifier",
"date_format",function(a,b,c){return jSmart.prototype.PHPJS("strftime","date_format").strftime(b?b:"%b %e, %Y",jSmart.prototype.makeTimeStamp(a?a:c))});jSmart.prototype.registerPlugin("modifier","defaultValue",function(a,b){return a&&"null"!=a&&"undefined"!=a?a:b?b:""});jSmart.prototype.registerPlugin("modifier","escape",function(a,b,c,d){a=new String(a);c=c||"UTF-8";d="undefined"!=typeof d?Boolean(d):!0;switch(b||"html"){case "html":return d&&(a=a.replace(/&/g,"&amp;")),a.replace(/</g,"&lt;").replace(/>/g,
"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;");case "htmlall":return jSmart.prototype.PHPJS("htmlentities","escape").htmlentities(a,3,c);case "url":return jSmart.prototype.PHPJS("rawurlencode","escape").rawurlencode(a);case "urlpathinfo":return jSmart.prototype.PHPJS("rawurlencode","escape").rawurlencode(a).replace(/%2F/g,"/");case "quotes":return a.replace(/(^|[^\\])'/g,"$1\\'");case "hex":b="";for(c=0;c<a.length;++c)b+="%"+jSmart.prototype.PHPJS("bin2hex","escape").bin2hex(a.substr(c,1));
return b;case "hexentity":b="";for(c=0;c<a.length;++c)b+="&#x"+jSmart.prototype.PHPJS("bin2hex","escape").bin2hex(a.substr(c,1)).toUpperCase()+";";return b;case "decentity":b="";for(c=0;c<a.length;++c)b+="&#"+jSmart.prototype.PHPJS("ord","escape").ord(a.substr(c,1))+";";return b;case "mail":return a.replace(/@/g," [AT] ").replace(/[.]/g," [DOT] ");case "nonstd":b="";for(c=0;c<a.length;++c)d=jSmart.prototype.PHPJS("ord","escape").ord(a.substr(c,1)),b=126<=d?b+("&#"+d+";"):b+a.substr(c,1);return b;
case "javascript":return a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"').replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/<\//g,"</")}return a});jSmart.prototype.registerPlugin("modifier","indent",function(a,b,c){b=b?b:4;c=c?c:" ";for(var d="";b--;)d+=c;b=a.match(/\n+$/);return d+a.replace(/\n+$/,"").replace(/\n/g,"\n"+d)+(b?b[0]:"")});jSmart.prototype.registerPlugin("modifier","lower",function(a){return a.toLowerCase()});jSmart.prototype.registerPlugin("modifier","nl2br",function(a){return a.replace(/\n/g,
"<br />\n")});jSmart.prototype.registerPlugin("modifier","regex_replace",function(a,b,c){b=b.match(/^ *\/(.*)\/(.*) *$/);return(new String(a)).replace(RegExp(b[1],"g"+(1<b.length?b[2]:"")),c)});jSmart.prototype.registerPlugin("modifier","replace",function(a,b,c){if(!b)return a;a=new String(a);b=new String(b);c=new String(c);for(var d="",e=-1,e=a.indexOf(b);0<=e;e=a.indexOf(b))d+=a.slice(0,e)+c,e+=b.length,a=a.slice(e);return d+a});jSmart.prototype.registerPlugin("modifier","spacify",function(a,b){b||
(b=" ");return a.replace(/(\n|.)(?!$)/g,"$1"+b)});jSmart.prototype.registerPlugin("modifier","string_format",function(a,b){return jSmart.prototype.PHPJS("sprintf","string_format").sprintf(b,a)});jSmart.prototype.registerPlugin("modifier","strip",function(a,b){b=b?b:" ";return(new String(a)).replace(/[\s]+/g,b)});jSmart.prototype.registerPlugin("modifier","strip_tags",function(a,b){b=null==b?!0:b;return(new String(a)).replace(/<[^>]*?>/g,b?" ":"")});jSmart.prototype.registerPlugin("modifier","truncate",
function(a,b,c,d,e){b=b?b:80;c=null!=c?c:"...";if(a.length<=b)return a;b-=Math.min(b,c.length);if(e)return a.slice(0,Math.floor(b/2))+c+a.slice(a.length-Math.floor(b/2));d||(a=a.slice(0,b+1).replace(/\s+?(\S+)?$/,""));return a.slice(0,b)+c});jSmart.prototype.registerPlugin("modifier","upper",function(a){return a.toUpperCase()});jSmart.prototype.registerPlugin("modifier","substr",function(a,b){return a.substr(b)});

jSmart.prototype.registerPlugin("modifier","price_substr_zero",function(price){
	if(!price){
		return '' ;
	} ;
	price = price + '' ;
    var price_arr = price.split('.') ;
    var len = price_arr.length ;	
    if(len==1){
    	return price ;
    }   
    if(len > 0){
    	var last_price = price_arr[len-1] * 1 ;
    	if(last_price==0){
    		price_arr.pop() ;
    		return price_arr.join('.') ;
    	}
    	else{
    		return price ;
    	}
    }
    
});

jSmart.prototype.registerPlugin("modifier","turn_countryname",function(coun_code){
	console.info(coun_code) ;
	var lang = localStorage.getItem('lang').toUpperCase() 
			|| sessionStorage.getItem('lang').toUpperCase();
	var conuntryList = localStorage.getItem('common_storage_countryList'+lang) ;
	if(!conuntryList) return a ;

	conuntryList = JSON.parse(conuntryList) ;
	for(var key in conuntryList){
		var couns = conuntryList[key] ;
		if(couns && couns instanceof Array && couns.length > 0){
			var len = couns.length ;
			for(var i = 0 ; i < len ; i++){
				var coun = couns[i] ;
				if(coun['countryCode'] == coun_code){
					return coun['countryName'] ;
				}
			}
		}
	}
	return coun_code ;
	
});
jSmart.prototype.registerPlugin("modifier","turn_cityname",function(a){

	        var cacheCitys = localStorage.getItem("cacheCitys"),
			lang = getLangage();
        
    // console.log("ok:"+lang);
	if (cacheCitys&&getLangage) {
			var allcity = JSON.parse(cacheCitys).allcity,
				b,c;
				// console.info(lang) ;
				// console.info(allcity) ;
			// 年票华东地区
			if(a.toUpperCase()=='HUADONG'){
				console.info(lang) ;
				if(lang=='cn' || lang == 'CN'){
				return '华东地区' ;
				}
				else if(lang=='TW' || lang == 'tw'){
					return '華東地區' ;
				}
				else{
					return 'Eastern China';
				}
			}
			for (var i in allcity) {
				b = allcity[i];
				for (var j = 0 ; j <= b.length-1; j++) {
					if (a.length>0) {
						c = b[j];
						if (c.languageFlag.toUpperCase()==lang.toUpperCase()&&c.airportCode==a.replace(/\s+/,'')) {
							return c.cityName;
						};
					};
				};
			};
	}else{
        var lang = getLangage();
        // console.log("no:"+lang);
		var arr ='{"KUL":"\u5409\u9686\u5761","ROR":"\u5e15\u52b3","KMI":"\u5bab\u5d0e","KOJ":"\u9e7f\u513f\u5c9b","TSN":"\u5929\u6d25","MLE":"\u9a6c\u7d2f","CNX":"\u6e05\u8fc8","KIX":"\u5927\u962a","CGQ":"\u957f\u6625","HAN":"\u6cb3\u5185","CKG":"\u91cd\u5e86","DLC":"\u5927\u8fde","CTU":"\u6210\u90fd","FOC":"\u798f\u5dde","DPS":"\u5df4\u5398\u5c9b","HLD":"\u6d77\u62c9\u5c14","HRB":"\u54c8\u5c14\u6ee8","ICN":"\u9996\u5c14","BKK":"\u66fc\u8c37","KWE":"\u8d35\u9633","KWL":"\u6842\u6797","NKG":"\u5357\u4eac","NNG":"\u5357\u5b81","OKA":"\u51b2\u7ef3","PVG":"\u4e0a\u6d77\u6d66\u4e1c","TPE":"\u53f0\u5317","XUZ":"\u5f90\u5dde","CTS":"\u672d\u5e4c","HAK":"\u6d77\u53e3","HGH":"\u676d\u5dde","HKG":"\u9999\u6e2f","KHH":"\u9ad8\u96c4","KMG":"\u6606\u660e","PEK":"\u5317\u4eac","RMQ":"\u53f0\u4e2d","SGN":"\u80e1\u5fd7\u660e","SHA":"\u4e0a\u6d77\u8679\u6865","SHAA":"\u4e0a\u6d77\u8679\u6865","SYX":"\u4e09\u4e9a","YNZ":"\u76d0\u57ce","TYN":"\u592a\u539f"}';//'{"CTS":"\u672d\u5e4c","SHAA":"\u4E0A\u6D77","PEK":"\u5317\u4eac","CTU":"\u6210\u90fd","CKG":"\u91cd\u5e86","FOC":"\u798f\u5dde","HRB":"\u54c8\u5c14\u6ee8","KWL":"\u6842\u6797","KWE":"\u8d35\u9633","HAK":"\u6d77\u53e3","HLD":"\u6d77\u62c9\u5c14","HGH":"\u676d\u5dde","KMG":"\u6606\u660e","NKG":"\u5357\u4eac","SYX":"\u4e09\u4e9a","SHA":"\u4e0a\u6d77","PVG":"\u4e0a\u6d77\u6d66\u4e1c","TYN":"\u592a\u539f","XMN":"\u53a6\u95e8","NNG":"\u5357\u5b81","MLE":"\u9a6c\u7d2f","CNX":"\u6e05\u8fc8","TSN":"\u5929\u6d25","SGN":"\u80e1\u5fd7\u660e","KOJ":"\u9e7f\u513f\u5c9b","KIX":"\u5927\u962a","LGW":"\u4f26\u6566","CSX":"\u957f\u6c99","BRU":"\u624e\u82ac\u7279\u59c6","SEA":"\u897f\u5854\u79d1","HKT":"\u5e03\u5409","DPS":"\u5df4\u5398\u5c9b","OKA":"\u51b2\u7ef3","KHH":"\u9ad8\u96c4","HAN":"\u6cb3\u5185","BKK":"\u66fc\u8c37","BKI":"\u6c99\u5df4","ICN":"\u9996\u5c14","TPE":"\u53f0\u5317","RMQ":"\u53f0\u4e2d","HKG":"\u9999\u6e2f","NRT":"\u4e1c\u4eac"}';
		var arr2 ='{"KUL":"Kuala Lumpur","ROR":"Palau","KMI":"Miyazaki","KOJ":"Kagoshima","TSN":"Tianjin","MLE":"Male","CNX":"Chiang mai","KIX":"Kansai","CGQ":"Changchun","HAN":"Hanoi","CKG":"Chongqing","DLC":"Dalian","CTU":"Chengdu","FOC":"Fuzhou","DPS":"Denpasar","HLD":"Hailaer","HRB":"Haerbin","ICN":"Incheon","BKK":"Bangkok","KWE":"Guiyang","KWL":"Guilin","NKG":"Nanjing","NNG":"Nanning","OKA":"Okinawa","PVG":"Shanghai","TPE":"Taipei","XUZ":"Xuzhou","CTS":"Sapporo","HAK":"Haikou","HGH":"Hangzhou","HKG":"Hong Kong","KHH":"Kaohsiung","KMG":"Kunming","PEK":"Beijing","RMQ":"Taichung","SGN":"Ho Chi Minh City","SHA":"Shanghai Hongqiao","SHAA":"Shanghai Hongqiao","SYX":"Sanya","YNZ":"Yancheng","TYN":"Taiyuan"}';//'{"CTS":"Sapporo","SHAA":"Shanghai Hongqiao","PEK":"Beijing","CTU":"Chengdu","CKG":"Chongqing","FOC":"\u798f\u5dde","HRB":"\u54c8\u5c14\u6ee8","KWL":"Guilin","KWE":"\u8d35\u9633","HAK":"Haikou","HLD":"\u6d77\u62c9\u5c14","HGH":"Hangzhou","KMG":"\u6606\u660e","NKG":"\u5357\u4eac","SYX":"\u4e09\u4e9a","SHA":"Shanghai Hongqiao","PVG":"Shanghai Pudong","TYN":"Taiyuan","XMN":"\u53a6\u95e8","NNG":"\u5357\u5b81","MLE":"\u9a6c\u7d2f","CNX":"\u6e05\u8fc8","TSN":"Tianjin","SGN":"\u80e1\u5fd7\u660e","KOJ":"\u9e7f\u513f\u5c9b","KIX":"\u5927\u962a","LGW":"\u4f26\u6566","CSX":"\u957f\u6c99","BRU":"\u624e\u82ac\u7279\u59c6","SEA":"\u897f\u5854\u79d1","HKT":"\u5e03\u5409","DPS":"Denpasar","OKA":"Okinawa","KHH":"\u9ad8\u96c4","HAN":"Hanoi","BKK":"Bangkok","BKI":"\u6c99\u5df4","ICN":"\u9996\u5c14","TPE":"Taipei","RMQ":"\u53f0\u4e2d","HKG":"Hong Kong","NRT":"\u4e1c\u4eac"}';
		var json = JSON.parse(arr);
		if(a.toUpperCase()=='HUADONG'){
			if(lang=='cn' || lang == 'CN'){
				return '华东地区' ;
			}
			else if(lang=='TW' || lang == 'tw'){
				return '華東地區' ;
			}
			else{
				return 'Eastern China';
			}
		}
		if(lang=="EN" || lang=="en"){
			json = JSON.parse(arr2);
		}
		for(var key in json){
			if(key==a.replace(/\s+/,'')){
				return json[key];
				break;
			}
		}
	}
	return a;
});
jSmart.prototype.registerPlugin("modifier","turn_cityname_en",function(a){
    		var arr2 ='{"KUL":"Kuala Lumpur","ROR":"Palau","KMI":"Miyazaki","KOJ":"Kagoshima","TSN":"Tianjin","MLE":"Male","CNX":"Chiang mai","KIX":"Kansai","CGQ":"Changchun","HAN":"Hanoi","CKG":"Chongqing","DLC":"Dalian","CTU":"Chengdu","FOC":"Fuzhou","DPS":"Denpasar","HLD":"Hailaer","HRB":"Haerbin","ICN":"Incheon","BKK":"Bangkok","KWE":"Guiyang","KWL":"Guilin","NKG":"Nanjing","NNG":"Nanning","OKA":"Okinawa","PVG":"Shanghai","TPE":"Taipei","XUZ":"Xuzhou","CTS":"Sapporo","HAK":"Haikou","HGH":"Hangzhou","HKG":"Hong Kong","KHH":"Kaohsiung","KMG":"Kunming","PEK":"Beijing","RMQ":"Taichung","SGN":"Ho Chi Minh City","SHA":"Shanghai Hongqiao","SHAA":"Shanghai Hongqiao","SYX":"Sanya","YNZ":"Yancheng","TYN":"Taiyuan"}';
			var json = JSON.parse(arr2);
    for(var key in json){
        if(key==a.replace(/\s+/,'')){
				return json[key];
				break;
			}
}
});
jSmart.prototype.registerPlugin("modifier","turn_airport",function(a){
	var cacheCitys = localStorage.getItem("cacheCitys"),
		lang = getLangage();
	if (cacheCitys&&getLangage) {
			var allcity = JSON.parse(cacheCitys).allcity,
				b,c;
			for (var i in allcity) {
				b = allcity[i];
				for (var j = 0 ; j <= b.length-1; j++) {
					if (a.length>0) {
						c = b[j];
						if (c.languageFlag==lang&&c.airportCode==a) {
							return c.airportName;
						};
					};
				};
			};
	}else{
		var arr = '{"KUL":"\u5409\u9686\u5761\u56fd\u9645\u673a\u573a","ROR":"\u5e15\u52b3\u56fd\u9645\u673a\u573a","KMI":"\u5bab\u5d0e\u673a\u573a","KOJ":"\u9e7f\u513f\u5c9b\u673a\u573a","TSN":"\u5929\u6d25\u6ee8\u6d77\u56fd\u9645\u673a\u573a","MLE":"\u9a6c\u7d2f\u56fd\u9645\u673a\u573a","CNX":"\u6e05\u8fc8\u673a\u573a","KIX":"\u5173\u897f\u56fd\u9645\u673a\u573a","CGQ":"\u957f\u6625\u9f99\u5609\u56fd\u9645\u673a\u573a","HAN":"\u5185\u724c\u56fd\u9645\u673a\u573a","CKG":"\u91cd\u5e86\u6c5f\u5317\u56fd\u9645\u673a\u573a","DLC":"\u5927\u8fde\u56fd\u9645\u673a\u573a","CTU":"\u6210\u90fd\u53cc\u6d41\u673a\u573a","FOC":"\u798f\u5dde\u957f\u4e50\u56fd\u9645\u673a\u573a","DPS":"\u52aa\u62c9\u83b1\u56fd\u9645\u673a\u573a","HLD":"\u6d77\u62c9\u5c14\u673a\u573a","HRB":"\u54c8\u5c14\u6ee8\u592a\u5e73\u56fd\u9645\u673a\u573a","ICN":"\u4ec1\u5ddd\u56fd\u9645\u673a\u573a","BKK":"\u5eca\u66fc\u56fd\u9645\u673a\u573a","KWE":"\u8d35\u9633\u9f99\u6d1e\u5821\u56fd\u9645\u673a\u573a","KWL":"\u6842\u6797\u4e24\u6c5f\u56fd\u9645\u673a\u573a","NKG":"\u5357\u4eac\u7984\u53e3\u56fd\u9645\u673a\u573a","NNG":"\u5357\u5b81\u5434\u5729\u673a\u573a","OKA":"\u90a3\u9738\u673a\u573a","PVG":"\u4e0a\u6d77\u6d66\u4e1c\u56fd\u9645\u673a\u573a","TPE":"\u53f0\u5317\u6843\u56ed\u56fd\u9645\u673a\u573a","XUZ":"\u5f90\u5dde\u89c2\u97f3\u56fd\u9645\u673a\u573a","CTS":"\u65b0\u5343\u5c81\u673a\u573a","HAK":"\u6d77\u53e3\u7f8e\u5170\u56fd\u9645\u673a\u573a","HGH":"\u676d\u5dde\u8427\u5c71\u56fd\u9645\u673a\u573a","HKG":"\u9999\u6e2f\u56fd\u9645\u673a\u573a","KHH":"\u9ad8\u96c4\u56fd\u9645\u673a\u573a","KMG":"\u6606\u660e\u957f\u6c34\u56fd\u9645\u673a\u573a","PEK":"\u5317\u4eac\u9996\u90fd\u56fd\u9645\u673a\u573a","RMQ":"\u53f0\u4e2d\u6e05\u6cc9\u5c97\u673a\u573a","SGN":"\u80e1\u5fd7\u660e\u65b0\u5c71\u56fd\u9645\u673a\u573a","SHA":"\u4e0a\u6d77\u8679\u6865\u56fd\u9645\u673a\u573a","SHAA":"\u4e0a\u6d77\u8679\u6865\u56fd\u9645\u673a\u573a","SYX":"\u4e09\u4e9a\u51e4\u51f0\u56fd\u9645\u673a\u573a","YNZ":"\u76d0\u57ce\u5357\u6d0b\u56fd\u9645\u673a\u573a","TYN":"\u592a\u539f\u6b66\u5bbf\u673a\u573a"}';
		var arr_en = '{"KUL":"Kuala Lumpur Int\'l","ROR":"Palau Int\'l","KMI":"Miyazaki Airport","KOJ":"Kagoshima Airport","TSN":"Binhai Int\'l","MLE":"Mal\u00e9 Int\'l","CNX":"Chiang Mai Int\'l","KIX":"Kansai Int\'l","CGQ":"Changchun Longjia Int\'l","HAN":"Noi Bai Int\'l","CKG":"Jiangbei Int\'l","DLC":"Dalian Int\'l","CTU":"Shuangliu Int\'l","FOC":"Fuzhou Changle Int\'l","DPS":"Ngurah Rai Int\'l","HLD":"Hailar Dongshan Airport","HRB":"Harbin Taiping Int\'l","ICN":"Incheon Int\'l","BKK":"Suvarnabhumi","KWE":"Guiyang Longdongbao Int\'l","KWL":"Liangjiang Int\'l","NKG":"Nanjing Lukou Int\'l","NNG":"Nanning Wuxu Int\'l","OKA":"Naha Airport","PVG":"Pudong Int\'l","TPE":"Taoyuan Int\'l","XUZ":"Xuzhou GuanYin Int\'l","CTS":"New Chitose Airport","HAK":"Haikou Meilan Int\'l","HGH":"Xiaoshan Int\'l","HKG":"Hong Kong Int\'l","KHH":"Kaohsiung Int\'l","KMG":"Kunming Airport","PEK":"Capital Int\'l","RMQ":"Taichung Airport","SGN":"Tan Son Nhat Int\'l","SHA":"Hongqiao Int\'l","SHAA":"Hongqiao Int\'l","SYX":"Sanya Phoenix Int\'l","YNZ":"Yancheng nanyang airport","TYN":"Wusu Int\'l"}';
		var json;
		if(lang=="EN"){
			json = JSON.parse(arr_en);
		}else{
			json = JSON.parse(arr);
		}
		for(var key in json){

			if(key==a){
				return json[key];
				break;
			}
		}
		return a;
	}
});
///////////////////////////////////////////////////////
jSmart.prototype.registerPlugin("modifier","pass_time",function(a,b){
var a_format = a.replace(/-/g,'/');
var b_format = b.replace(/-/g,'/');
var a_stamp = Date.parse(new Date(a_format));
var b_stamp = Date.parse(new Date(b_format));
var diff_time = b_stamp - a_stamp;
var temp_var1 = Math.floor(diff_time/3600);
var temp_var2 = Math.floor((diff_time - temp_var1*3600)/60);

return temp_var1+getTextFromLangDir("hour")+temp_var2+getTextFromLangDir("min");
});
//////////////////////////////////////////////////////
jSmart.prototype.registerPlugin("modifier","certType",function(a,b){
	var arr = '{"1":"护照","2":"台胞证","3":"港澳通行证","4":"回乡证","7":"赴台通行证"}';
	if (getLangage()=="EN") {
		arr = '{"1":"Passport","2":"Travel Permit of Taiwan Residents To and From Mainland","3":"Travel Permit To and From HK and Macau","4":"Travel Permit of HK and Macau Residents To and From Mainland","7":"Travel Permit To and From Taiwan"}';
	};
	var json = JSON.parse(arr);
	for(var key in json){

		if(key==a){
			return json[key];
			break;
		}
	}
});
//////////////////////////////////////////////////////
jSmart.prototype.registerPlugin("modifier","substr",function(a,b,c){
	if(a=="" || a=="null" || a==null){
		return "";
	}
	return a.substr(b, c);  
});
//////////////////////////////////////////////////////


jSmart.prototype.registerPlugin("modifier","repstr",function(a){
	return a.replace(/\r\n/g,"<BR>");
});


//////////////////////////////////////////////////////
jSmart.prototype.registerPlugin("modifier","parseInt",function(a){
	   return parseInt(a);  
});
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
jSmart.prototype.registerPlugin("modifier","dateweek",function(a,b,c){
	if(!(a instanceof Date)){
		var  date = new Date(Date.parse(a.replace(/-/g,"/")));
	}
	
	var lang = getLangage().toLowerCase(),
	    langIndexArr = "cn tw en".split(" "),
	    index;
	var week = [
		new Array("星期日 周日", "星期一 周一", "星期二 周二", "星期三 周三", "星期四 周四", "星期五 周五", "星期六 周六"),
		new Array("星期日 週日", "星期一 週一", "星期二 週二", "星期三 週三", "星期四 週四", "星期五 週五", "星期六 週六"),
		new Array("Sunday Sun", "Monday Mon", "Tuesday Tue", "Wednesday Wed", "Thursday Thu", "Friday Fri", "Saturday Sat")
	];
	for(var i = 0;i<langIndexArr.length;i++) {
			if (lang==langIndexArr[i]) {
					b = i;
				};
	}
	return  week[b][date.getDay()].split(" ")[c||c===0?c:0];
});


jSmart.prototype.registerPlugin("modifier","replacestr",function(a,b,c){
	
		var c = a.replace(b,c);

	return c;
	
});

jSmart.prototype.registerPlugin("modifier","substring",function(a,b,c){
	
	var c = a.substring(b,c);
	
	return c;
	
});

jSmart.prototype.registerPlugin("modifier","dian2",function(a){
	a=a.toFixed(2);
	return a;
	
});



jSmart.prototype.registerPlugin("modifier","reducedian",function(a){
	return a.replace(/\.0{1,}/g,"");
	
});
/*2015年3月14日15:27:08 by csl*/
jSmart.prototype.registerPlugin("modifier","Internation",function(str){
	str = str.replace(/International/g, "Int'l"); 
	return str;
});
jSmart.prototype.registerPlugin("modifier","InterAirport",function(str){
	str = str.replace(/International Airport/g, "Int'l"); 
	return str;
});
jSmart.prototype.registerPlugin("modifier","hm",function(str){
	str = str.replace(/h/g, " h "); 
	str = str.replace(/m/g, " m ");
	if (getLangage&&getLangage()=="EN") {
		str = str.replace(/hours/g, " h ");
		str = str.replace(/minutes/g, " m ");
	};
	
	return str;
});
jSmart.prototype.registerPlugin("modifier","datemd",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("MM dd")
	return str;
});
jSmart.prototype.registerPlugin("modifier","fdate",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("yyyy-MM-dd")
	return str;
});
jSmart.prototype.registerPlugin("modifier","condate",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("hh:mm:ss , MM dd, yyyy");
	return str;
});

//不带逗号
jSmart.prototype.registerPlugin("modifier","newdate",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("MM dd, yyyy")
	return str;
});

//带逗号
jSmart.prototype.registerPlugin("modifier","newdate2",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("MM dd, yyyy")
	return str;
});

jSmart.prototype.registerPlugin("modifier","newdatet",function(str){
	var str = String(str);
	if(str && str.length==8){
			var a=str.substr(0,4);
			var b=str.substr(4,2);
			var c=str.substr(6,2);
			str = a+"-"+b+"-"+c;	
		}
		
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("MM dd, yyyy");
	return str;
});

jSmart.prototype.registerPlugin("modifier","ndate",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("hh:mm , MM dd, yyyy")
	return str;
});

jSmart.prototype.registerPlugin("modifier","hp",function(str){
	str = str.replace("Shanghai Hongqiao", "ShanghaiHo");
	str = str.replace("Shanghai Pudong", "ShanghaiPu");
	return str;
});
jSmart.prototype.registerPlugin("modifier","hps",function(str){
	str = str.replace("Shanghai Hongqiao", "ShangHai");
	str = str.replace("Shanghai Pudong", "ShangHai");
	return str;
});
jSmart.prototype.registerPlugin("modifier","namesplit",function(str){
	var name = str.split('/');
	var a = name[0];
	var b = name[1];
	if(a.length>5){
		a = name[0].substring(0,5)+"..";
	}
	if(b.length>11){
		 var subStr1 = b.substr(0,5);
		 var subStr2 = b.substr(b.length-2,2);
		 b=subStr1+".."+subStr2;
	}
	return a+"/"+b;
});

jSmart.prototype.registerPlugin("modifier","djson",function(a){
	return JSON.stringify(a);
});

//b 分隔符 c 数组索引
jSmart.prototype.registerPlugin("modifier","split",function(a,b,c){
	return a.split(b)[c];
});
jSmart.prototype.registerPlugin("modifier","format",function(a,b){
	if (Date.prototype.format) {
		return new Date(a.split(" ")[0].replace(/-/g,"/")).format(b);
	}
	return a.split(" ")[0];
});
jSmart.prototype.registerPlugin("modifier","en2format",function(a){

	//将英文月份单独列出
	var monthEnArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var tempArr = a.split("-");
	var year = tempArr[0];
	var month = tempArr[1];
	var day = tempArr[2];
	if(month.charAt(0)=="0")
		monthIndex = month.substr(1);
	monthIndex = parseInt(month);
	month = monthEnArr[monthIndex-1];
	return month + " " + day + "," + year;
});//Fri 20,1980

jSmart.prototype.registerPlugin("modifier","en2formatdate",function(a){
	var str = new Date(a);
	//将英文月份单独列出
	var monthEnArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	/*var tempArr = a.split("-");
	var year = tempArr[0];
	var month = tempArr[1];
	var day = tempArr[2];
	if(month.charAt(0)=="0")
		monthIndex = month.substr(1);
	monthIndex = parseInt(month);
	month = monthEnArr[monthIndex-1];*/
	var year = str.getFullYear();
	var monthIndex = str.getMonth();
	var day = str.getDate();
    if(day < 10)
        day = "0" + day;
	var month = monthEnArr[monthIndex];
	return month + " " + day + "," + year;
});//Fri 20,1980
			

jSmart.prototype.registerPlugin("modifier","email_mod",function(targetStr, 
		leftIndentLen, rightIndentLen, replaceStr) {
		var atIndex = targetStr.indexOf('@');
		if (!targetStr || atIndex == -1) {
			return targetStr;
		}

		replaceStr = replaceStr ? replaceStr : '..';

		var leftStr = targetStr.substring(0, atIndex);
		var rightStr = targetStr.substring(atIndex);
		var leftStrLen = leftStr.length,
			leftIndentLen = parseInt(leftIndentLen, 10),
			rightIndentLen = parseInt(rightIndentLen, 10),
			targetLen = leftIndentLen + rightIndentLen,
			dealedTargetStr = '';

		if (leftStrLen > targetLen) {
			dealedTargetStr = leftStr.substr(0, leftIndentLen) + 
							  replaceStr + 
							  leftStr.substr(-rightIndentLen) +
							  rightStr;
			return dealedTargetStr;
		} else {
			return targetStr;
		}	
});		
			
			
/*
	针对英文姓名的缩放 ww
	aaaaaaaaaa  =>   aa..aa
*/
jSmart.prototype.registerPlugin("modifier","name_mod",function(a,b,c,d){
	var l = a.length,
		d = d ? d : "..",
		e =  "\\w{"+ c +"}";
	b = parseInt(b);
	c = parseInt(c);
	if (b + c >= l) {
		return a;
	}else{
		//  eg :  "aaaaaaaaaaa".replace(/^(\w{3})\w+(\w{2})$/g,"$1..$2");
		if (c ===0 ) {
			e = "$";//包括0的情况
		};
		var r= new RegExp("^(\\w{"+b+"})\\w+("+e+")","g");//拼合正则表达式
		return a.replace(r,"$1"+d+"$2");
	}
});

jSmart.prototype.registerPlugin("modifier","name_mod2",function(a,e,b,c,d){

		if(e==1){
			a = a.substring(0,a.indexOf('/'));
		} else{
			a = a.substring(a.indexOf('/')+1);
		}

	var l = a.length,
		d = d ? d : "..",
		e =  "\\w{"+ c +"}";
	b = parseInt(b);
	c = parseInt(c);
	if (b + c >= l) {
		return a;
	}else{
		//  eg :  "aaaaaaaaaaa".replace(/^(\w{3})\w+(\w{2})$/g,"$1..$2");
		if (c ===0 ) {
			e = "$";//包括0的情况
		};
		var r= new RegExp("^(\\w{"+b+"})\\w+("+e+")","g");//拼合正则表达式
		return a.replace(r,"$1"+d+"$2");
	}
});

jSmart.prototype.registerPlugin("modifier","meal_mod",function(a){

		if(a.length>15){
		return a.substr(0,15)+".."
		}else{
		return a;	
		}
});

jSmart.prototype.registerPlugin("modifier","nullShow",function(a){
	if(a==null){
		return '&nbsp;';
	}
	return a;
});
			
jSmart.prototype.registerPlugin("modifier","iIndexOf",function(a, b){
	if (a && typeof a === 'string' && b && typeof b === 'string') {
		return a.indexOf(b);
	}
	return -1;
});			
jSmart.prototype.registerPlugin("modifier","hmdate",function(str){ 	
	if (getLangage&&getLangage()=="EN") {
		str=str;
	}else{
		str = str.replace("h", "小时").replace("m", "分钟"); 	
	}
	
	return str;
});
jSmart.prototype.registerPlugin("modifier","dateFormat",function(a,b){
    var datefmt =  new Date().format("yyyy-mm-dd hh:MM:ss");
	var temp = null;
    if(a.indexOf("xxx")!=-1)
        temp = datefmt.split("");
    else
        temp = a.split(" ");
    
	//alert(temp[1]);
	var datestr = temp[0];
	//alert(datestr);
	
	//alert(dateArr);
	var monthMap = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    if(getLangage&&getLangage()){
        var _lang = getLangage();
   }else{
       var _lang = null;
       
   }
   // alert(_lang);
    _lang = _lang.toUpperCase();
   // alert(_lang);
 //如果有值
    if(datestr){
    	var dateformat = new Date(datestr);
    	var year = dateformat.getFullYear();
    	var monthIndex = dateformat.getMonth();
    	
    	
    	var month = monthIndex +1;
    	var day = dateformat.getDate();
    	    if(_lang){
    	    	if(_lang=="CN"){
    	    		return year+"年"+month+"月"+day+"日";
    	    		
    	    	}
    	    	else if(_lang=="TW"){
    	    		return year+"年"+month+"月"+day+"日";
    	    	}
    	    	else{
    	    		//英文
    	    		return monthMap[monthIndex]+" "+day+", "+year;
    	    	}
    	    }
    }
   //没有直接返回
    else{
    	return;
    }
	
});
jSmart.prototype.registerPlugin("modifier","timeFormat",function(a,b){
	//2015-05-07 07:40:00.0
	//alert(a);
    if(a) {
        var temp = a.split(" ");
	   //alert(temp[1]);
	   var temp1 = temp[1].substr(0,5);
	   //alert(temp);
	   return temp1;
    }
}); 
jSmart.prototype.registerPlugin("modifier","trimstr",function(str){ 	
    return str.replace(/(^\s*)|(\s*$)/g,'');
});
/***********************************/

jSmart.prototype.registerPlugin("modifier","rpdatenyr",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.getFullYear()+"年"+date.getMonth()+"月"+date.getDate()+"日"+" "+(str.split(" "))[1];
	return str;
});
jSmart.prototype.registerPlugin("modifier","rpdate",function(str){
	str = str.replace("-", "/").replace("-", "/");
	var date = new Date(str);
	str=date.format("yyyy-MM-dd");
	return str;
});

jSmart.prototype.registerPlugin("modifier","phone_num",function(str){
	str = str + '' ;
	if(!str) return "" ;
	return str.substr(0,3) + '*****' + str.substr(str.length-3) ;
});

//////////////////////////////////////////////////////

jSmart.prototype.registerPlugin("modifier","jsonstr",function(a){return JSON.stringify(a);});jSmart.prototype.registerPlugin("modifier","wordwrap",function(a,b,c,d){b=b||80;c=c||"\n";a=a.split("\n");for(var e=0;e<a.length;++e){for(var f=a[e],g="";f.length>b;){for(var h=
0,k=f.slice(h).match(/\s+/);k&&h+k.index<=b;k=f.slice(h).match(/\s+/))h+=k.index+k[0].length;h=h||(d?b:k?k.index+k[0].length:f.length);g+=f.slice(0,h).replace(/\s+$/,"");h<f.length&&(g+=c);f=f.slice(h)}a[e]=g+f}return a.join("\n")});String.prototype.fetch=function(a){return(new jSmart(this)).fetch(a)}})();



/***********************************************/
// ringpu日期格式化
    jSmart.prototype.registerPlugin("modifier","turn_time",function(a){
     // console.info(a) ;
      //2015-12-04 14:36:21
      var b=a.split(" "),c=b[0].split("-"),e=b[1].split(":") ;
      //console.info(c[1]) ;
      var time_today=new Date() ;
     // console.info(time_today) ;
      var str='';
      var today={
          year:time_today.getFullYear() ,
          month:time_today.getMonth()+1 ,
          date:time_today.getDate()
      } ;
     // console.info(today.year) ;
      var d={
          year:c[0] ,
          month:c[1] ,
          date:c[2],
          hour:e[0] ,
          minute:e[1],
          second:e[2]
      } ;
    //  console.info(d.year) ;
      if(today.year==d.year){
        if(today.date==d.date){
          //console.info(111)
          str="今天 "+d.hour+":"+d.minute ;
        }
        else if(today.date-1==d.date){
          str="昨天 "+d.hour+":"+d.minute ;
        }
        else{
          //str=d.hour+":"+d.minute+" "+d.month+"-"+d.date ;
         // str=d.month+"-"+d.date+" "+d.hour+":"+d.minute ;
         str=d.month+"-"+d.date ;
        }
      }
      else{
       // str=d.year+"-"+d.month+"-"+d.date+" "+d.hour+":"+d.minute ;
       str=d.year+"-"+d.month+"-"+d.date ;
      }
      return str ;

    }) ;
/*************************************************/