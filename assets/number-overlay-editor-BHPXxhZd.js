import{bs as Ee,bB as z,bt as O}from"./index-Dswlsdwq.js";const Ae=Ee("div")({name:"NumberOverlayEditorStyle",class:"gdg-n15fjm3e",propsAsIs:!1});function ve(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t}var Y;(function(e){e.event="event",e.props="prop"})(Y||(Y={}));function $(){}function Oe(e){var a,t=void 0;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return a&&n.length===a.length&&n.every(function(i,l){return i===a[l]})||(a=n,t=e.apply(void 0,n)),t}}function ee(e){return!!(e||"").match(/\d/)}function H(e){return e==null}function Te(e){return typeof e=="number"&&isNaN(e)}function de(e){return H(e)||Te(e)||typeof e=="number"&&!isFinite(e)}function ge(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Be(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Fe(e,a,t){var n=Be(t),r=e.search(/[1-9]/);return r=r===-1?e.length:r,e.substring(0,r)+e.substring(r,e.length).replace(n,"$1"+a)}function _e(e){var a=O.useRef(e);a.current=e;var t=O.useRef(function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return a.current.apply(a,n)});return t.current}function oe(e,a){a===void 0&&(a=!0);var t=e[0]==="-",n=t&&a;e=e.replace("-","");var r=e.split("."),i=r[0],l=r[1]||"";return{beforeDecimal:i,afterDecimal:l,hasNegation:t,addNegation:n}}function je(e){if(!e)return e;var a=e[0]==="-";a&&(e=e.substring(1,e.length));var t=e.split("."),n=t[0].replace(/^0+/,"")||"0",r=t[1]||"";return(a?"-":"")+n+(r?"."+r:"")}function me(e,a,t){for(var n="",r=t?"0":"",i=0;i<=a-1;i++)n+=e[i]||r;return n}function le(e,a){return Array(a+1).join(e)}function he(e){var a=e+"",t=a[0]==="-"?"-":"";t&&(a=a.substring(1));var n=a.split(/[eE]/g),r=n[0],i=n[1];if(i=Number(i),!i)return t+r;r=r.replace(".","");var l=1+i,S=r.length;return l<0?r="0."+le("0",Math.abs(l))+r:l>=S?r=r+le("0",l-S):r=(r.substring(0,l)||"0")+"."+r.substring(l),t+r}function fe(e,a,t){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||t)&&a,r=oe(e),i=r.beforeDecimal,l=r.afterDecimal,S=r.hasNegation,x=parseFloat("0."+(l||"0")),y=l.length<=a?"0."+l:x.toFixed(a),h=y.split("."),v=i;i&&Number(h[0])&&(v=i.split("").reverse().reduce(function(w,D,g){return w.length>g?(Number(w[0])+Number(D)).toString()+w.substring(1,w.length):D+w},h[0]));var m=me(h[1]||"",a,t),b=S?"-":"",s=n?".":"";return""+b+v+s+m}function Z(e,a){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",a),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(a,a),!0):(e.focus(),!1)}}var Se=Oe(function(e,a){for(var t=0,n=0,r=e.length,i=a.length;e[t]===a[t]&&t<r;)t++;for(;e[r-1-n]===a[i-1-n]&&i-n>t&&r-n>t;)n++;return{from:{start:t,end:r-n},to:{start:t,end:i-n}}});function Le(e,a,t){return Math.min(Math.max(e,a),t)}function ie(e){return Math.max(e.selectionStart,e.selectionEnd)}function Me(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function ke(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Pe(e){var a=e.currentValue,t=e.formattedValue,n=e.currentValueIndex,r=e.formattedValueIndex;return a[n]===t[r]}function Ke(e,a,t,n,r,i,l){l===void 0&&(l=Pe);var S=r.findIndex(function(P){return P}),x=e.slice(0,S);!a&&!t.startsWith(x)&&(a=x,t=x+t,n=n+x.length);for(var y=t.length,h=e.length,v={},m=new Array(y),b=0;b<y;b++){m[b]=-1;for(var s=0,w=h;s<w;s++){var D=l({currentValue:t,lastValue:a,formattedValue:e,currentValueIndex:b,formattedValueIndex:s});if(D&&v[s]!==!0){m[b]=s,v[s]=!0;break}}}for(var g=n;g<y&&(m[g]===-1||!i(t[g]));)g++;var T=g===y||m[g]===-1?h:m[g];for(g=n-1;g>0&&m[g]===-1;)g--;var F=g===-1||m[g]===-1?0:m[g]+1;return F>T?T:n-F<T-n?F:T}function ce(e,a,t,n){var r=e.length;if(a=Le(a,0,r),n==="left"){for(;a>=0&&!t[a];)a--;a===-1&&(a=t.indexOf(!0))}else{for(;a<=r&&!t[a];)a++;a>r&&(a=t.lastIndexOf(!0))}return a===-1&&(a=r),a}function We(e){for(var a=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=a.length;t<n;t++)a[t]=!!(ee(e[t])||ee(e[t-1]));return a}function pe(e,a,t,n,r,i){i===void 0&&(i=$);var l=_e(function(s,w){var D,g;return de(s)?(g="",D=""):typeof s=="number"||w?(g=typeof s=="number"?he(s):s,D=n(g)):(g=r(s,void 0),D=n(g)),{formattedValue:D,numAsString:g}}),S=O.useState(function(){return l(H(e)?a:e,t)}),x=S[0],y=S[1],h=function(s,w){s.formattedValue!==x.formattedValue&&y({formattedValue:s.formattedValue,numAsString:s.value}),i(s,w)},v=e,m=t;H(e)&&(v=x.numAsString,m=!0);var b=l(v,m);return O.useMemo(function(){y(b)},[b.formattedValue]),[x,h]}function Ue(e){return e.replace(/[^0-9]/g,"")}function $e(e){return e}function Ge(e){var a=e.type;a===void 0&&(a="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,r=e.renderText,i=e.getInputRef,l=e.format;l===void 0&&(l=$e);var S=e.removeFormatting;S===void 0&&(S=Ue);var x=e.defaultValue,y=e.valueIsNumericString,h=e.onValueChange,v=e.isAllowed,m=e.onChange;m===void 0&&(m=$);var b=e.onKeyDown;b===void 0&&(b=$);var s=e.onMouseUp;s===void 0&&(s=$);var w=e.onFocus;w===void 0&&(w=$);var D=e.onBlur;D===void 0&&(D=$);var g=e.value,T=e.getCaretBoundary;T===void 0&&(T=We);var F=e.isValidInputCharacter;F===void 0&&(F=ee);var P=e.isCharacterSame,L=ve(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),G=pe(g,x,!!y,l,S,h),K=G[0],V=K.formattedValue,M=K.numAsString,W=G[1],k=O.useRef({formattedValue:V,numAsString:M}),q=function(o,u){k.current={formattedValue:o.formattedValue,numAsString:o.value},W(o,u)},U=O.useState(!1),J=U[0],Q=U[1],f=O.useRef(null),c=O.useRef({setCaretTimeout:null,focusTimeout:null});O.useEffect(function(){return Q(!0),function(){clearTimeout(c.current.setCaretTimeout),clearTimeout(c.current.focusTimeout)}},[]);var A=l,C=function(o,u){var d=parseFloat(u);return{formattedValue:o,value:u,floatValue:isNaN(d)?void 0:d}},R=function(o,u,d){o.selectionStart===0&&o.selectionEnd===o.value.length||(Z(o,u),c.current.setCaretTimeout=setTimeout(function(){o.value===d&&o.selectionStart!==u&&Z(o,u)},0))},E=function(o,u,d){return ce(o,u,T(o),d)},B=function(o,u,d){var I=T(u),_=Ke(u,V,o,d,I,F,P);return _=ce(u,_,I),_},ae=function(o){var u=o.formattedValue;u===void 0&&(u="");var d=o.input,I=o.source,_=o.event,p=o.numAsString,N;if(d){var j=o.inputValue||d.value,X=ie(d);d.value=u,N=B(j,u,X),N!==void 0&&R(d,N,u)}u!==V&&q(C(u,p),{event:_,source:I})};O.useEffect(function(){var o=k.current,u=o.formattedValue,d=o.numAsString;V!==u&&(V!==M||u!==d)&&q(C(V,M),{event:void 0,source:Y.props})},[V,M]);var ne=f.current?ie(f.current):void 0,te=typeof window<"u"?O.useLayoutEffect:O.useEffect;te(function(){var o=f.current;if(V!==k.current.formattedValue&&o){var u=B(k.current.formattedValue,V,ne);o.value=V,R(o,u,V)}},[V]);var be=function(o,u,d){var I=Se(V,o),_=Object.assign(Object.assign({},I),{lastValue:V}),p=S(o,_),N=A(p);if(p=S(N,void 0),v&&!v(C(N,p))){var j=u.target,X=ie(j),Re=B(o,V,X);return j.value=V,R(j,Re,V),!1}return ae({formattedValue:N,numAsString:p,inputValue:o,event:u,source:d,input:u.target}),!0},ye=function(o){var u=o.target,d=u.value,I=be(d,o,Y.event);I&&m(o)},Ve=function(o){var u=o.target,d=o.key,I=u.selectionStart,_=u.selectionEnd,p=u.value;p===void 0&&(p="");var N;if(d==="ArrowLeft"||d==="Backspace"?N=Math.max(I-1,0):d==="ArrowRight"?N=Math.min(I+1,p.length):d==="Delete"&&(N=I),N===void 0||I!==_){b(o);return}var j=N;if(d==="ArrowLeft"||d==="ArrowRight"){var X=d==="ArrowLeft"?"left":"right";j=E(p,N,X),j!==N&&o.preventDefault()}else d==="Delete"&&!F(p[N])?j=E(p,N,"right"):d==="Backspace"&&!F(p[N])&&(j=E(p,N,"left"));j!==N&&R(u,j,p),o.isUnitTestRun&&R(u,j,p),b(o)},Ne=function(o){var u=o.target,d=function(){var I=u.selectionStart,_=u.selectionEnd,p=u.value;if(p===void 0&&(p=""),I===_){var N=E(p,I);N!==I&&R(u,N,p)}};d(),requestAnimationFrame(function(){d()}),s(o)},we=function(o){o.persist&&o.persist();var u=o.target,d=o.currentTarget;f.current=u,c.current.focusTimeout=setTimeout(function(){var I=u.selectionStart,_=u.selectionEnd,p=u.value;p===void 0&&(p="");var N=E(p,I);N!==I&&!(I===0&&_===p.length)&&R(u,N,p),w(Object.assign(Object.assign({},o),{currentTarget:d}))},0)},De=function(o){f.current=null,clearTimeout(c.current.focusTimeout),clearTimeout(c.current.setCaretTimeout),D(o)},Ie=J&&Me()?"numeric":void 0,ue=Object.assign({inputMode:Ie},L,{type:a,value:V,onChange:ye,onKeyDown:Ve,onMouseUp:Ne,onFocus:we,onBlur:De});if(t==="text")return r?z.createElement(z.Fragment,null,r(V,L)||null):z.createElement("span",Object.assign({},L,{ref:i}),V);if(n){var Ce=n;return z.createElement(Ce,Object.assign({},ue,{ref:i}))}return z.createElement("input",Object.assign({},ue,{ref:i}))}function se(e,a){var t=a.decimalScale,n=a.fixedDecimalScale,r=a.prefix;r===void 0&&(r="");var i=a.suffix;i===void 0&&(i="");var l=a.allowNegative,S=a.thousandsGroupStyle;if(S===void 0&&(S="thousand"),e===""||e==="-")return e;var x=re(a),y=x.thousandSeparator,h=x.decimalSeparator,v=t!==0&&e.indexOf(".")!==-1||t&&n,m=oe(e,l),b=m.beforeDecimal,s=m.afterDecimal,w=m.addNegation;return t!==void 0&&(s=me(s,t,!!n)),y&&(b=Fe(b,y,S)),r&&(b=r+b),i&&(s=s+i),w&&(b="-"+b),e=b+(v&&h||"")+s,e}function re(e){var a=e.decimalSeparator;a===void 0&&(a=".");var t=e.thousandSeparator,n=e.allowedDecimalSeparators;return t===!0&&(t=","),n||(n=[a,"."]),{decimalSeparator:a,thousandSeparator:t,allowedDecimalSeparators:n}}function Ze(e,a){e===void 0&&(e="");var t=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),r=t.test(e),i=n.test(e);return e=e.replace(/-/g,""),r&&!i&&a&&(e="-"+e),e}function qe(e,a){return new RegExp("(^-)|[0-9]|"+ge(e),a?"g":void 0)}function ze(e,a,t){return e===""?!0:!(a!=null&&a.match(/\d/))&&!(t!=null&&t.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function He(e,a,t){var n;a===void 0&&(a=ke(e));var r=t.allowNegative,i=t.prefix;i===void 0&&(i="");var l=t.suffix;l===void 0&&(l="");var S=t.decimalScale,x=a.from,y=a.to,h=y.start,v=y.end,m=re(t),b=m.allowedDecimalSeparators,s=m.decimalSeparator,w=e[v]===s;if(ee(e)&&(e===i||e===l)&&a.lastValue==="")return e;if(v-h===1&&b.indexOf(e[h])!==-1){var D=S===0?"":s;e=e.substring(0,h)+D+e.substring(h+1,e.length)}var g=function(c,A,C){var R=!1,E=!1;i.startsWith("-")?R=!1:c.startsWith("--")?(R=!1,E=!0):l.startsWith("-")&&c.length===l.length?R=!1:c[0]==="-"&&(R=!0);var B=R?1:0;return E&&(B=2),B&&(c=c.substring(B),A-=B,C-=B),{value:c,start:A,end:C,hasNegation:R}},T=g(e,h,v),F=T.hasNegation;n=T,e=n.value,h=n.start,v=n.end;var P=g(a.lastValue,x.start,x.end),L=P.start,G=P.end,K=P.value,V=e.substring(h,v);e.length&&K.length&&(L>K.length-l.length||G<i.length)&&!(V&&l.startsWith(V))&&(e=K);var M=0;e.startsWith(i)?M+=i.length:h<i.length&&(M=h),e=e.substring(M),v-=M;var W=e.length,k=e.length-l.length;e.endsWith(l)?W=k:(v>k||v>e.length-l.length)&&(W=v),e=e.substring(0,W),e=Ze(F?"-"+e:e,r),e=(e.match(qe(s,!0))||[]).join("");var q=e.indexOf(s);e=e.replace(new RegExp(ge(s),"g"),function(c,A){return A===q?".":""});var U=oe(e,r),J=U.beforeDecimal,Q=U.afterDecimal,f=U.addNegation;return y.end-y.start<x.end-x.start&&J===""&&w&&!parseFloat(Q)&&(e=f?"-":""),e}function Je(e,a){var t=a.prefix;t===void 0&&(t="");var n=a.suffix;n===void 0&&(n="");var r=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";r.fill(!1,0,t.length+(i?1:0));var l=e.length;return r.fill(!1,l-n.length+1,l+1),r}function Qe(e){var a=re(e),t=a.thousandSeparator,n=a.decimalSeparator,r=e.prefix;r===void 0&&(r="");var i=e.allowNegative;if(i===void 0&&(i=!0),t===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return r.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+r+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function Xe(e){e=Qe(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var a=e.suffix,t=e.allowNegative,n=e.allowLeadingZeros,r=e.onKeyDown;r===void 0&&(r=$);var i=e.onBlur;i===void 0&&(i=$);var l=e.thousandSeparator,S=e.decimalScale,x=e.fixedDecimalScale,y=e.prefix;y===void 0&&(y="");var h=e.defaultValue,v=e.value,m=e.valueIsNumericString,b=e.onValueChange,s=ve(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),w=re(e),D=w.decimalSeparator,g=w.allowedDecimalSeparators,T=function(f){return se(f,e)},F=function(f,c){return He(f,c,e)},P=H(v)?h:v,L=m??ze(P,y,a);H(v)?H(h)||(L=L||typeof h=="number"):L=L||typeof v=="number";var G=function(f){return de(f)?f:(typeof f=="number"&&(f=he(f)),L&&typeof S=="number"?fe(f,S,!!x):f)},K=pe(G(v),G(h),!!L,T,F,b),V=K[0],M=V.numAsString,W=V.formattedValue,k=K[1],q=function(f){var c=f.target,A=f.key,C=c.selectionStart,R=c.selectionEnd,E=c.value;if(E===void 0&&(E=""),C!==R){r(f);return}A==="Backspace"&&E[0]==="-"&&C===y.length+1&&t&&Z(c,1),S&&x&&(A==="Backspace"&&E[C-1]===D?(Z(c,C-1),f.preventDefault()):A==="Delete"&&E[C]===D&&f.preventDefault()),g!=null&&g.includes(A)&&E[C]===D&&Z(c,C+1);var B=l===!0?",":l;A==="Backspace"&&E[C-1]===B&&Z(c,C-1),A==="Delete"&&E[C]===B&&Z(c,C+1),r(f)},U=function(f){var c=M;if(c.match(/\d/g)||(c=""),n||(c=je(c)),x&&S&&(c=fe(c,S,x)),c!==M){var A=se(c,e);k({formattedValue:A,value:c,floatValue:parseFloat(c)},{event:f,source:Y.event})}i(f)},J=function(f){return f===D?!0:ee(f)},Q=function(f){var c=f.currentValue,A=f.lastValue,C=f.formattedValue,R=f.currentValueIndex,E=f.formattedValueIndex,B=c[R],ae=C[E],ne=Se(A,c),te=ne.to;return R>=te.start&&R<te.end&&g&&g.includes(B)&&ae===D?!0:B===ae};return Object.assign(Object.assign({},s),{value:W,valueIsNumericString:!1,isValidInputCharacter:J,isCharacterSame:Q,onValueChange:k,format:T,removeFormatting:F,getCaretBoundary:function(f){return Je(f,e)},onKeyDown:q,onBlur:U})}function Ye(e){var a=Xe(e);return z.createElement(Ge,Object.assign({},a))}function xe(){var t,n,r;return((r=(n=(t=Intl.NumberFormat())==null?void 0:t.formatToParts(1.1))==null?void 0:n.find(i=>i.type==="decimal"))==null?void 0:r.value)??"."}function ea(){return xe()==="."?",":"."}const ta=e=>{const{value:a,onChange:t,disabled:n,highlight:r,validatedSelection:i,fixedDecimals:l,allowNegative:S,thousandSeparator:x,decimalSeparator:y}=e,h=O.useRef();return O.useLayoutEffect(()=>{var v;if(i!==void 0){const m=typeof i=="number"?[i,null]:i;(v=h.current)==null||v.setSelectionRange(m[0],m[1])}},[i]),O.createElement(Ae,null,O.createElement(Ye,{autoFocus:!0,getInputRef:h,className:"gdg-input",onFocus:v=>v.target.setSelectionRange(r?0:v.target.value.length,v.target.value.length),disabled:n===!0,decimalScale:l,allowNegative:S,thousandSeparator:x??ea(),decimalSeparator:y??xe(),value:Object.is(a,-0)?"-":a??"",onValueChange:t}))};export{ta as default};