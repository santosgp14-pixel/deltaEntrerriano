(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var O_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ug={exports:{}},$l={},$g={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),F_=Symbol.for("react.portal"),z_=Symbol.for("react.fragment"),B_=Symbol.for("react.strict_mode"),U_=Symbol.for("react.profiler"),$_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),H_=Symbol.for("react.forward_ref"),q_=Symbol.for("react.suspense"),G_=Symbol.for("react.memo"),K_=Symbol.for("react.lazy"),fp=Symbol.iterator;function Q_(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hg=Object.assign,qg={};function vs(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Wg}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gg(){}Gg.prototype=vs.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=qg,this.updater=n||Wg}var qd=Hd.prototype=new Gg;qd.constructor=Hd;Hg(qd,vs.prototype);qd.isPureReactComponent=!0;var pp=Array.isArray,Kg=Object.prototype.hasOwnProperty,Gd={current:null},Qg={key:!0,ref:!0,__self:!0,__source:!0};function Yg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kg.call(e,r)&&!Qg.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),d=0;d<u;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Go,type:t,key:s,ref:o,props:i,_owner:Gd.current}}function Y_(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function X_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mp=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X_(""+t.key):e.toString(36)}function La(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case F_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uu(o,0):r,pp(i)?(n="",t!=null&&(n=t.replace(mp,"$&/")+"/"),La(i,e,n,"",function(d){return d})):i!=null&&(Kd(i)&&(i=Y_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pp(t))for(var u=0;u<t.length;u++){s=t[u];var c=r+Uu(s,u);o+=La(s,e,n,c,i)}else if(c=Q_(t),typeof c=="function")for(t=c.call(t),u=0;!(s=t.next()).done;)s=s.value,c=r+Uu(s,u++),o+=La(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pa(t,e,n){if(t==null)return t;var r=[],i=0;return La(t,r,"","",function(s){return e.call(n,s,i++)}),r}function J_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},Fa={transition:null},Z_={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:Fa,ReactCurrentOwner:Gd};function Xg(){throw Error("act(...) is not supported in production builds of React.")}we.Children={map:pa,forEach:function(t,e,n){pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pa(t,function(){e++}),e},toArray:function(t){return pa(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};we.Component=vs;we.Fragment=z_;we.Profiler=U_;we.PureComponent=Hd;we.StrictMode=B_;we.Suspense=q_;we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;we.act=Xg;we.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Hg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)Kg.call(e,c)&&!Qg.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:Go,type:t.type,key:i,ref:s,props:r,_owner:o}};we.createContext=function(t){return t={$$typeof:W_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$_,_context:t},t.Consumer=t};we.createElement=Yg;we.createFactory=function(t){var e=Yg.bind(null,t);return e.type=t,e};we.createRef=function(){return{current:null}};we.forwardRef=function(t){return{$$typeof:H_,render:t}};we.isValidElement=Kd;we.lazy=function(t){return{$$typeof:K_,_payload:{_status:-1,_result:t},_init:J_}};we.memo=function(t,e){return{$$typeof:G_,type:t,compare:e===void 0?null:e}};we.startTransition=function(t){var e=Fa.transition;Fa.transition={};try{t()}finally{Fa.transition=e}};we.unstable_act=Xg;we.useCallback=function(t,e){return Ot.current.useCallback(t,e)};we.useContext=function(t){return Ot.current.useContext(t)};we.useDebugValue=function(){};we.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};we.useEffect=function(t,e){return Ot.current.useEffect(t,e)};we.useId=function(){return Ot.current.useId()};we.useImperativeHandle=function(t,e,n){return Ot.current.useImperativeHandle(t,e,n)};we.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};we.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};we.useMemo=function(t,e){return Ot.current.useMemo(t,e)};we.useReducer=function(t,e,n){return Ot.current.useReducer(t,e,n)};we.useRef=function(t){return Ot.current.useRef(t)};we.useState=function(t){return Ot.current.useState(t)};we.useSyncExternalStore=function(t,e,n){return Ot.current.useSyncExternalStore(t,e,n)};we.useTransition=function(){return Ot.current.useTransition()};we.version="18.3.1";$g.exports=we;var re=$g.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=re,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),rx=Object.prototype.hasOwnProperty,ix=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function Jg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rx.call(e,r)&&!sx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tx,type:t,key:s,ref:o,props:i,_owner:ix.current}}$l.Fragment=nx;$l.jsx=Jg;$l.jsxs=Jg;Ug.exports=$l;var l=Ug.exports,Zg={exports:{}},tn={},ey={exports:{}},ty={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,z){var H=K.length;K.push(z);e:for(;0<H;){var O=H-1>>>1,L=K[O];if(0<i(L,z))K[O]=z,K[H]=L,H=O;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var z=K[0],H=K.pop();if(H!==z){K[0]=H;e:for(var O=0,L=K.length,G=L>>>1;O<G;){var ue=2*(O+1)-1,ge=K[ue],ce=ue+1,Q=K[ce];if(0>i(ge,H))ce<L&&0>i(Q,ge)?(K[O]=Q,K[ce]=H,O=ce):(K[O]=ge,K[ue]=H,O=ue);else if(ce<L&&0>i(Q,H))K[O]=Q,K[ce]=H,O=ce;else break e}}return z}function i(K,z){var H=K.sortIndex-z.sortIndex;return H!==0?H:K.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var c=[],d=[],m=1,p=null,v=3,C=!1,R=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(K){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=K)r(d),z.sortIndex=z.expirationTime,e(c,z);else break;z=n(d)}}function V(K){if(k=!1,S(K),!R)if(n(c)!==null)R=!0,et(j);else{var z=n(d);z!==null&&rn(V,z.startTime-K)}}function j(K,z){R=!1,k&&(k=!1,b(_),_=-1),C=!0;var H=v;try{for(S(z),p=n(c);p!==null&&(!(p.expirationTime>z)||K&&!w());){var O=p.callback;if(typeof O=="function"){p.callback=null,v=p.priorityLevel;var L=O(p.expirationTime<=z);z=t.unstable_now(),typeof L=="function"?p.callback=L:p===n(c)&&r(c),S(z)}else r(c);p=n(c)}if(p!==null)var G=!0;else{var ue=n(d);ue!==null&&rn(V,ue.startTime-z),G=!1}return G}finally{p=null,v=H,C=!1}}var F=!1,y=null,_=-1,T=5,E=-1;function w(){return!(t.unstable_now()-E<T)}function A(){if(y!==null){var K=t.unstable_now();E=K;var z=!0;try{z=y(!0,K)}finally{z?I():(F=!1,y=null)}}else F=!1}var I;if(typeof g=="function")I=function(){g(A)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Ye=Ce.port2;Ce.port1.onmessage=A,I=function(){Ye.postMessage(null)}}else I=function(){D(A,0)};function et(K){y=K,F||(F=!0,I())}function rn(K,z){_=D(function(){K(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){R||C||(R=!0,et(j))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(K){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var H=v;v=z;try{return K()}finally{v=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,z){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var H=v;v=K;try{return z()}finally{v=H}},t.unstable_scheduleCallback=function(K,z,H){var O=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?O+H:O):H=O,K){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=H+L,K={id:m++,callback:z,priorityLevel:K,startTime:H,expirationTime:L,sortIndex:-1},H>O?(K.sortIndex=H,e(d,K),n(c)===null&&K===n(d)&&(k?(b(_),_=-1):k=!0,rn(V,H-O))):(K.sortIndex=L,e(c,K),R||C||(R=!0,et(j))),K},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(K){var z=v;return function(){var H=v;v=z;try{return K.apply(this,arguments)}finally{v=H}}}})(ty);ey.exports=ty;var ox=ey.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=re,en=ox;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ny=new Set,go={};function Si(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(go[t]=e,t=0;t<e.length;t++)ny.add(e[t])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=Object.prototype.hasOwnProperty,lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gp={},yp={};function ux(t){return Rc.call(yp,t)?!0:Rc.call(gp,t)?!1:lx.test(t)?yp[t]=!0:(gp[t]=!0,!1)}function cx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dx(t,e,n,r){if(e===null||typeof e>"u"||cx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);Et[e]=new Lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);Et[e]=new Lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Yd);Et[e]=new Lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Lt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dx(e,n,i,r)&&(n=null),r||i===null?ux(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var lr=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ma=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Jd=Symbol.for("react.strict_mode"),Nc=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),iy=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),eh=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),sy=Symbol.for("react.offscreen"),vp=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var Ke=Object.assign,$u;function qs(t){if($u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||""}return`
`+$u+t}var Wu=!1;function Hu(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,u=s.length-1;1<=o&&0<=u&&i[o]!==s[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==s[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==s[u]){var c=`
`+i[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=u);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function hx(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=Hu(t.type,!1),t;case 11:return t=Hu(t.type.render,!1),t;case 1:return t=Hu(t.type,!0),t;default:return""}}function Vc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Li:return"Portal";case Nc:return"Profiler";case Jd:return"StrictMode";case jc:return"Suspense";case Dc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iy:return(t.displayName||"Context")+".Consumer";case ry:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case eh:return e=t.displayName||null,e!==null?e:Vc(t.type)||"Memo";case yr:e=t._payload,t=t._init;try{return Vc(t(e))}catch{}}return null}function fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vc(e);case 8:return e===Jd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function px(t){var e=oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ga(t){t._valueTracker||(t._valueTracker=px(t))}function ay(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mc(t,e){var n=e.checked;return Ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _p(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ly(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function Oc(t,e){ly(t,e);var n=Vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lc(t,e.type,Vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lc(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gs=Array.isArray;function Yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(Gs(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vr(n)}}function uy(t,e){var n=Vr(e.value),r=Vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ya,dy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ya=ya||document.createElement("div"),ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ya.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var to={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(to).forEach(function(t){mx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),to[e]=to[t]})});function hy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||to.hasOwnProperty(t)&&to[t]?(""+e).trim():e+"px"}function fy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gx=Ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bc(t,e){if(e){if(gx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function Uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wc=null,Xi=null,Ji=null;function Tp(t){if(t=Yo(t)){if(typeof Wc!="function")throw Error($(280));var e=t.stateNode;e&&(e=Kl(e),Wc(t.stateNode,t.type,e))}}function py(t){Xi?Ji?Ji.push(t):Ji=[t]:Xi=t}function my(){if(Xi){var t=Xi,e=Ji;if(Ji=Xi=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function gy(t,e){return t(e)}function yy(){}var qu=!1;function vy(t,e,n){if(qu)return t(e,n);qu=!0;try{return gy(t,e,n)}finally{qu=!1,(Xi!==null||Ji!==null)&&(yy(),my())}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var Hc=!1;if(Jn)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Hc=!1}function yx(t,e,n,r,i,s,o,u,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var no=!1,rl=null,il=!1,qc=null,vx={onError:function(t){no=!0,rl=t}};function _x(t,e,n,r,i,s,o,u,c){no=!1,rl=null,yx.apply(vx,arguments)}function xx(t,e,n,r,i,s,o,u,c){if(_x.apply(this,arguments),no){if(no){var d=rl;no=!1,rl=null}else throw Error($(198));il||(il=!0,qc=d)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _y(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(bi(t)!==t)throw Error($(188))}function wx(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sp(i),t;if(s===r)return Sp(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,u=i.child;u;){if(u===n){o=!0,n=i,r=s;break}if(u===r){o=!0,r=i,n=s;break}u=u.sibling}if(!o){for(u=s.child;u;){if(u===n){o=!0,n=s,r=i;break}if(u===r){o=!0,r=s,n=i;break}u=u.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function xy(t){return t=wx(t),t!==null?wy(t):null}function wy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=wy(t);if(e!==null)return e;t=t.sibling}return null}var Ey=en.unstable_scheduleCallback,bp=en.unstable_cancelCallback,Ex=en.unstable_shouldYield,Tx=en.unstable_requestPaint,nt=en.unstable_now,Sx=en.unstable_getCurrentPriorityLevel,nh=en.unstable_ImmediatePriority,Ty=en.unstable_UserBlockingPriority,sl=en.unstable_NormalPriority,bx=en.unstable_LowPriority,Sy=en.unstable_IdlePriority,Wl=null,Nn=null;function Ix(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:kx,Cx=Math.log,Ax=Math.LN2;function kx(t){return t>>>=0,t===0?32:31-(Cx(t)/Ax|0)|0}var va=64,_a=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var u=o&~i;u!==0?r=Ks(u):(s&=o,s!==0&&(r=Ks(s)))}else o=n&~i,o!==0?r=Ks(o):s!==0&&(r=Ks(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-En(e),i=1<<n,r|=t[n],e&=~i;return r}function Px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-En(s),u=1<<o,c=i[o];c===-1?(!(u&n)||u&r)&&(i[o]=Px(u,e)):c<=e&&(t.expiredLanes|=u),s&=~u}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function by(){var t=va;return va<<=1,!(va&4194240)&&(va=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-En(e),t[e]=n}function Nx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-En(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-En(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var De=0;function Iy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cy,ih,Ay,ky,Py,Kc=!1,xa=[],Sr=null,br=null,Ir=null,_o=new Map,xo=new Map,_r=[],jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ip(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":_o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yo(e),e!==null&&ih(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Dx(t,e,n,r,i){switch(e){case"focusin":return Sr=Fs(Sr,t,e,n,r,i),!0;case"dragenter":return br=Fs(br,t,e,n,r,i),!0;case"mouseover":return Ir=Fs(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _o.set(s,Fs(_o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Fs(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ry(t){var e=ri(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=_y(n),e!==null){t.blockedOn=e,Py(t.priority,function(){Ay(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return e=Yo(n),e!==null&&ih(e),t.blockedOn=n,!1;e.shift()}return!0}function Cp(t,e,n){za(t)&&n.delete(e)}function Vx(){Kc=!1,Sr!==null&&za(Sr)&&(Sr=null),br!==null&&za(br)&&(br=null),Ir!==null&&za(Ir)&&(Ir=null),_o.forEach(Cp),xo.forEach(Cp)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,Vx)))}function wo(t){function e(i){return zs(i,t)}if(0<xa.length){zs(xa[0],t);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Sr!==null&&zs(Sr,t),br!==null&&zs(br,t),Ir!==null&&zs(Ir,t),_o.forEach(e),xo.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Ry(n),n.blockedOn===null&&_r.shift()}var Zi=lr.ReactCurrentBatchConfig,al=!0;function Mx(t,e,n,r){var i=De,s=Zi.transition;Zi.transition=null;try{De=1,sh(t,e,n,r)}finally{De=i,Zi.transition=s}}function Ox(t,e,n,r){var i=De,s=Zi.transition;Zi.transition=null;try{De=4,sh(t,e,n,r)}finally{De=i,Zi.transition=s}}function sh(t,e,n,r){if(al){var i=Qc(t,e,n,r);if(i===null)rc(t,e,r,ll,n),Ip(t,r);else if(Dx(i,t,e,n,r))r.stopPropagation();else if(Ip(t,r),e&4&&-1<jx.indexOf(t)){for(;i!==null;){var s=Yo(i);if(s!==null&&Cy(s),s=Qc(t,e,n,r),s===null&&rc(t,e,r,ll,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rc(t,e,r,null,n)}}var ll=null;function Qc(t,e,n,r){if(ll=null,t=th(r),t=ri(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_y(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function Ny(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case nh:return 1;case Ty:return 4;case sl:case bx:return 16;case Sy:return 536870912;default:return 16}default:return 16}}var wr=null,oh=null,Ba=null;function jy(){if(Ba)return Ba;var t,e=oh,n=e.length,r,i="value"in wr?wr.value:wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ba=i.slice(t,1<r?1-r:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wa(){return!0}function Ap(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wa:Ap,this.isPropagationStopped=Ap,this}return Ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),e}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ah=nn(_s),Qo=Ke({},_s,{view:0,detail:0}),Lx=nn(Qo),Ku,Qu,Bs,Hl=Ke({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(Ku=t.screenX-Bs.screenX,Qu=t.screenY-Bs.screenY):Qu=Ku=0,Bs=t),Ku)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),kp=nn(Hl),Fx=Ke({},Hl,{dataTransfer:0}),zx=nn(Fx),Bx=Ke({},Qo,{relatedTarget:0}),Yu=nn(Bx),Ux=Ke({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),$x=nn(Ux),Wx=Ke({},_s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hx=nn(Wx),qx=Ke({},_s,{data:0}),Pp=nn(qx),Gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qx[t])?!!e[t]:!1}function lh(){return Yx}var Xx=Ke({},Qo,{key:function(t){if(t.key){var e=Gx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lh,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jx=nn(Xx),Zx=Ke({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=nn(Zx),ew=Ke({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lh}),tw=nn(ew),nw=Ke({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),rw=nn(nw),iw=Ke({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=nn(iw),ow=[9,13,27,32],uh=Jn&&"CompositionEvent"in window,ro=null;Jn&&"documentMode"in document&&(ro=document.documentMode);var aw=Jn&&"TextEvent"in window&&!ro,Dy=Jn&&(!uh||ro&&8<ro&&11>=ro),Np=" ",jp=!1;function Vy(t,e){switch(t){case"keyup":return ow.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function My(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function lw(t,e){switch(t){case"compositionend":return My(e);case"keypress":return e.which!==32?null:(jp=!0,Np);case"textInput":return t=e.data,t===Np&&jp?null:t;default:return null}}function uw(t,e){if(zi)return t==="compositionend"||!uh&&Vy(t,e)?(t=jy(),Ba=oh=wr=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dy&&e.locale!=="ko"?null:e.data;default:return null}}var cw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cw[t.type]:e==="textarea"}function Oy(t,e,n,r){py(r),e=ul(e,"onChange"),0<e.length&&(n=new ah("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var io=null,Eo=null;function dw(t){Ky(t,0)}function ql(t){var e=$i(t);if(ay(e))return t}function hw(t,e){if(t==="change")return e}var Ly=!1;if(Jn){var Xu;if(Jn){var Ju="oninput"in document;if(!Ju){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Ju=typeof Vp.oninput=="function"}Xu=Ju}else Xu=!1;Ly=Xu&&(!document.documentMode||9<document.documentMode)}function Mp(){io&&(io.detachEvent("onpropertychange",Fy),Eo=io=null)}function Fy(t){if(t.propertyName==="value"&&ql(Eo)){var e=[];Oy(e,Eo,t,th(t)),vy(dw,e)}}function fw(t,e,n){t==="focusin"?(Mp(),io=e,Eo=n,io.attachEvent("onpropertychange",Fy)):t==="focusout"&&Mp()}function pw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Eo)}function mw(t,e){if(t==="click")return ql(e)}function gw(t,e){if(t==="input"||t==="change")return ql(e)}function yw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var bn=typeof Object.is=="function"?Object.is:yw;function To(t,e){if(bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rc.call(e,i)||!bn(t[i],e[i]))return!1}return!0}function Op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,e){var n=Op(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Op(n)}}function zy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function By(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vw(t){var e=By(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zy(n.ownerDocument.documentElement,n)){if(r!==null&&ch(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lp(n,s);var o=Lp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _w=Jn&&"documentMode"in document&&11>=document.documentMode,Bi=null,Yc=null,so=null,Xc=!1;function Fp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||Bi==null||Bi!==nl(r)||(r=Bi,"selectionStart"in r&&ch(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&To(so,r)||(so=r,r=ul(Yc,"onSelect"),0<r.length&&(e=new ah("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Bi)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ui={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},Zu={},Uy={};Jn&&(Uy=document.createElement("div").style,"AnimationEvent"in window||(delete Ui.animationend.animation,delete Ui.animationiteration.animation,delete Ui.animationstart.animation),"TransitionEvent"in window||delete Ui.transitionend.transition);function Gl(t){if(Zu[t])return Zu[t];if(!Ui[t])return t;var e=Ui[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uy)return Zu[t]=e[n];return t}var $y=Gl("animationend"),Wy=Gl("animationiteration"),Hy=Gl("animationstart"),qy=Gl("transitionend"),Gy=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(t,e){Gy.set(t,e),Si(e,[t])}for(var ec=0;ec<zp.length;ec++){var tc=zp[ec],xw=tc.toLowerCase(),ww=tc[0].toUpperCase()+tc.slice(1);Wr(xw,"on"+ww)}Wr($y,"onAnimationEnd");Wr(Wy,"onAnimationIteration");Wr(Hy,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(qy,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Bp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xx(r,e,void 0,t),t.currentTarget=null}function Ky(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],c=u.instance,d=u.currentTarget;if(u=u.listener,c!==s&&i.isPropagationStopped())break e;Bp(i,u,d),s=c}else for(o=0;o<r.length;o++){if(u=r[o],c=u.instance,d=u.currentTarget,u=u.listener,c!==s&&i.isPropagationStopped())break e;Bp(i,u,d),s=c}}}if(il)throw t=qc,il=!1,qc=null,t}function Be(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var r=t+"__bubble";n.has(r)||(Qy(e,t,2,!1),n.add(r))}function nc(t,e,n){var r=0;e&&(r|=4),Qy(n,t,r,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function So(t){if(!t[Ta]){t[Ta]=!0,ny.forEach(function(n){n!=="selectionchange"&&(Ew.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,nc("selectionchange",!1,e))}}function Qy(t,e,n,r){switch(Ny(e)){case 1:var i=Mx;break;case 4:i=Ox;break;default:i=sh}n=i.bind(null,e,n,t),i=void 0,!Hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;u!==null;){if(o=ri(u),o===null)return;if(c=o.tag,c===5||c===6){r=s=o;continue e}u=u.parentNode}}r=r.return}vy(function(){var d=s,m=th(n),p=[];e:{var v=Gy.get(t);if(v!==void 0){var C=ah,R=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":C=Jx;break;case"focusin":R="focus",C=Yu;break;case"focusout":R="blur",C=Yu;break;case"beforeblur":case"afterblur":C=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=tw;break;case $y:case Wy:case Hy:C=$x;break;case qy:C=rw;break;case"scroll":C=Lx;break;case"wheel":C=sw;break;case"copy":case"cut":case"paste":C=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Rp}var k=(e&4)!==0,D=!k&&t==="scroll",b=k?v!==null?v+"Capture":null:v;k=[];for(var g=d,S;g!==null;){S=g;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,b!==null&&(V=vo(g,b),V!=null&&k.push(bo(g,V,S)))),D)break;g=g.return}0<k.length&&(v=new C(v,R,null,n,m),p.push({event:v,listeners:k}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",v&&n!==$c&&(R=n.relatedTarget||n.fromElement)&&(ri(R)||R[Zn]))break e;if((C||v)&&(v=m.window===m?m:(v=m.ownerDocument)?v.defaultView||v.parentWindow:window,C?(R=n.relatedTarget||n.toElement,C=d,R=R?ri(R):null,R!==null&&(D=bi(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(C=null,R=d),C!==R)){if(k=kp,V="onMouseLeave",b="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(k=Rp,V="onPointerLeave",b="onPointerEnter",g="pointer"),D=C==null?v:$i(C),S=R==null?v:$i(R),v=new k(V,g+"leave",C,n,m),v.target=D,v.relatedTarget=S,V=null,ri(m)===d&&(k=new k(b,g+"enter",R,n,m),k.target=S,k.relatedTarget=D,V=k),D=V,C&&R)t:{for(k=C,b=R,g=0,S=k;S;S=ji(S))g++;for(S=0,V=b;V;V=ji(V))S++;for(;0<g-S;)k=ji(k),g--;for(;0<S-g;)b=ji(b),S--;for(;g--;){if(k===b||b!==null&&k===b.alternate)break t;k=ji(k),b=ji(b)}k=null}else k=null;C!==null&&Up(p,v,C,k,!1),R!==null&&D!==null&&Up(p,D,R,k,!0)}}e:{if(v=d?$i(d):window,C=v.nodeName&&v.nodeName.toLowerCase(),C==="select"||C==="input"&&v.type==="file")var j=hw;else if(Dp(v))if(Ly)j=gw;else{j=pw;var F=fw}else(C=v.nodeName)&&C.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(j=mw);if(j&&(j=j(t,d))){Oy(p,j,n,m);break e}F&&F(t,v,d),t==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&Lc(v,"number",v.value)}switch(F=d?$i(d):window,t){case"focusin":(Dp(F)||F.contentEditable==="true")&&(Bi=F,Yc=d,so=null);break;case"focusout":so=Yc=Bi=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Fp(p,n,m);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":Fp(p,n,m)}var y;if(uh)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else zi?Vy(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Dy&&n.locale!=="ko"&&(zi||_!=="onCompositionStart"?_==="onCompositionEnd"&&zi&&(y=jy()):(wr=m,oh="value"in wr?wr.value:wr.textContent,zi=!0)),F=ul(d,_),0<F.length&&(_=new Pp(_,t,null,n,m),p.push({event:_,listeners:F}),y?_.data=y:(y=My(n),y!==null&&(_.data=y)))),(y=aw?lw(t,n):uw(t,n))&&(d=ul(d,"onBeforeInput"),0<d.length&&(m=new Pp("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:d}),m.data=y))}Ky(p,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vo(t,n),s!=null&&r.unshift(bo(t,s,i)),s=vo(t,e),s!=null&&r.push(bo(t,s,i))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var u=n,c=u.alternate,d=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&d!==null&&(u=d,i?(c=vo(n,s),c!=null&&o.unshift(bo(n,c,u))):i||(c=vo(n,s),c!=null&&o.push(bo(n,c,u)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Tw=/\r\n?/g,Sw=/\u0000|\uFFFD/g;function $p(t){return(typeof t=="string"?t:""+t).replace(Tw,`
`).replace(Sw,"")}function Sa(t,e,n){if(e=$p(e),$p(t)!==e&&n)throw Error($(425))}function cl(){}var Jc=null,Zc=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,bw=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(t){return Wp.resolve(null).then(t).catch(Cw)}:td;function Cw(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wo(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Rn="__reactFiber$"+xs,Io="__reactProps$"+xs,Zn="__reactContainer$"+xs,nd="__reactEvents$"+xs,Aw="__reactListeners$"+xs,kw="__reactHandles$"+xs;function ri(t){var e=t[Rn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zn]||n[Rn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hp(t);t!==null;){if(n=t[Rn])return n;t=Hp(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Rn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function Kl(t){return t[Io]||null}var rd=[],Wi=-1;function Hr(t){return{current:t}}function We(t){0>Wi||(t.current=rd[Wi],rd[Wi]=null,Wi--)}function Oe(t,e){Wi++,rd[Wi]=t.current,t.current=e}var Mr={},jt=Hr(Mr),Ht=Hr(!1),fi=Mr;function os(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function dl(){We(Ht),We(jt)}function qp(t,e,n){if(jt.current!==Mr)throw Error($(168));Oe(jt,e),Oe(Ht,n)}function Yy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,fx(t)||"Unknown",i));return Ke({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,fi=jt.current,Oe(jt,t),Oe(Ht,Ht.current),!0}function Gp(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=Yy(t,e,fi),r.__reactInternalMemoizedMergedChildContext=t,We(Ht),We(jt),Oe(jt,t)):We(Ht),Oe(Ht,n)}var Gn=null,Ql=!1,sc=!1;function Xy(t){Gn===null?Gn=[t]:Gn.push(t)}function Pw(t){Ql=!0,Xy(t)}function qr(){if(!sc&&Gn!==null){sc=!0;var t=0,e=De;try{var n=Gn;for(De=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gn=null,Ql=!1}catch(i){throw Gn!==null&&(Gn=Gn.slice(t+1)),Ey(nh,qr),i}finally{De=e,sc=!1}}return null}var Hi=[],qi=0,fl=null,pl=0,an=[],ln=0,pi=null,Kn=1,Qn="";function ei(t,e){Hi[qi++]=pl,Hi[qi++]=fl,fl=t,pl=e}function Jy(t,e,n){an[ln++]=Kn,an[ln++]=Qn,an[ln++]=pi,pi=t;var r=Kn;t=Qn;var i=32-En(r)-1;r&=~(1<<i),n+=1;var s=32-En(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Kn=1<<32-En(e)+i|n<<i|r,Qn=s+t}else Kn=1<<s|n<<i|r,Qn=t}function dh(t){t.return!==null&&(ei(t,1),Jy(t,1,0))}function hh(t){for(;t===fl;)fl=Hi[--qi],Hi[qi]=null,pl=Hi[--qi],Hi[qi]=null;for(;t===pi;)pi=an[--ln],an[ln]=null,Qn=an[--ln],an[ln]=null,Kn=an[--ln],an[ln]=null}var Zt=null,Xt=null,He=!1,wn=null;function Zy(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pi!==null?{id:Kn,overflow:Qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Xt=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(He){var e=Xt;if(e){var n=e;if(!Kp(t,e)){if(id(t))throw Error($(418));e=Cr(n.nextSibling);var r=Zt;e&&Kp(t,e)?Zy(r,n):(t.flags=t.flags&-4097|2,He=!1,Zt=t)}}else{if(id(t))throw Error($(418));t.flags=t.flags&-4097|2,He=!1,Zt=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function ba(t){if(t!==Zt)return!1;if(!He)return Qp(t),He=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=Xt)){if(id(t))throw e0(),Error($(418));for(;e;)Zy(t,e),e=Cr(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=Zt?Cr(t.stateNode.nextSibling):null;return!0}function e0(){for(var t=Xt;t;)t=Cr(t.nextSibling)}function as(){Xt=Zt=null,He=!1}function fh(t){wn===null?wn=[t]:wn.push(t)}var Rw=lr.ReactCurrentBatchConfig;function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var u=i.refs;o===null?delete u[s]:u[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function Ia(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Yp(t){var e=t._init;return e(t._payload)}function t0(t){function e(b,g){if(t){var S=b.deletions;S===null?(b.deletions=[g],b.flags|=16):S.push(g)}}function n(b,g){if(!t)return null;for(;g!==null;)e(b,g),g=g.sibling;return null}function r(b,g){for(b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function i(b,g){return b=Rr(b,g),b.index=0,b.sibling=null,b}function s(b,g,S){return b.index=S,t?(S=b.alternate,S!==null?(S=S.index,S<g?(b.flags|=2,g):S):(b.flags|=2,g)):(b.flags|=1048576,g)}function o(b){return t&&b.alternate===null&&(b.flags|=2),b}function u(b,g,S,V){return g===null||g.tag!==6?(g=hc(S,b.mode,V),g.return=b,g):(g=i(g,S),g.return=b,g)}function c(b,g,S,V){var j=S.type;return j===Fi?m(b,g,S.props.children,V,S.key):g!==null&&(g.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yr&&Yp(j)===g.type)?(V=i(g,S.props),V.ref=Us(b,g,S),V.return=b,V):(V=Qa(S.type,S.key,S.props,null,b.mode,V),V.ref=Us(b,g,S),V.return=b,V)}function d(b,g,S,V){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=fc(S,b.mode,V),g.return=b,g):(g=i(g,S.children||[]),g.return=b,g)}function m(b,g,S,V,j){return g===null||g.tag!==7?(g=ui(S,b.mode,V,j),g.return=b,g):(g=i(g,S),g.return=b,g)}function p(b,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=hc(""+g,b.mode,S),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ma:return S=Qa(g.type,g.key,g.props,null,b.mode,S),S.ref=Us(b,null,g),S.return=b,S;case Li:return g=fc(g,b.mode,S),g.return=b,g;case yr:var V=g._init;return p(b,V(g._payload),S)}if(Gs(g)||Os(g))return g=ui(g,b.mode,S,null),g.return=b,g;Ia(b,g)}return null}function v(b,g,S,V){var j=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:u(b,g,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ma:return S.key===j?c(b,g,S,V):null;case Li:return S.key===j?d(b,g,S,V):null;case yr:return j=S._init,v(b,g,j(S._payload),V)}if(Gs(S)||Os(S))return j!==null?null:m(b,g,S,V,null);Ia(b,S)}return null}function C(b,g,S,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return b=b.get(S)||null,u(g,b,""+V,j);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ma:return b=b.get(V.key===null?S:V.key)||null,c(g,b,V,j);case Li:return b=b.get(V.key===null?S:V.key)||null,d(g,b,V,j);case yr:var F=V._init;return C(b,g,S,F(V._payload),j)}if(Gs(V)||Os(V))return b=b.get(S)||null,m(g,b,V,j,null);Ia(g,V)}return null}function R(b,g,S,V){for(var j=null,F=null,y=g,_=g=0,T=null;y!==null&&_<S.length;_++){y.index>_?(T=y,y=null):T=y.sibling;var E=v(b,y,S[_],V);if(E===null){y===null&&(y=T);break}t&&y&&E.alternate===null&&e(b,y),g=s(E,g,_),F===null?j=E:F.sibling=E,F=E,y=T}if(_===S.length)return n(b,y),He&&ei(b,_),j;if(y===null){for(;_<S.length;_++)y=p(b,S[_],V),y!==null&&(g=s(y,g,_),F===null?j=y:F.sibling=y,F=y);return He&&ei(b,_),j}for(y=r(b,y);_<S.length;_++)T=C(y,b,_,S[_],V),T!==null&&(t&&T.alternate!==null&&y.delete(T.key===null?_:T.key),g=s(T,g,_),F===null?j=T:F.sibling=T,F=T);return t&&y.forEach(function(w){return e(b,w)}),He&&ei(b,_),j}function k(b,g,S,V){var j=Os(S);if(typeof j!="function")throw Error($(150));if(S=j.call(S),S==null)throw Error($(151));for(var F=j=null,y=g,_=g=0,T=null,E=S.next();y!==null&&!E.done;_++,E=S.next()){y.index>_?(T=y,y=null):T=y.sibling;var w=v(b,y,E.value,V);if(w===null){y===null&&(y=T);break}t&&y&&w.alternate===null&&e(b,y),g=s(w,g,_),F===null?j=w:F.sibling=w,F=w,y=T}if(E.done)return n(b,y),He&&ei(b,_),j;if(y===null){for(;!E.done;_++,E=S.next())E=p(b,E.value,V),E!==null&&(g=s(E,g,_),F===null?j=E:F.sibling=E,F=E);return He&&ei(b,_),j}for(y=r(b,y);!E.done;_++,E=S.next())E=C(y,b,_,E.value,V),E!==null&&(t&&E.alternate!==null&&y.delete(E.key===null?_:E.key),g=s(E,g,_),F===null?j=E:F.sibling=E,F=E);return t&&y.forEach(function(A){return e(b,A)}),He&&ei(b,_),j}function D(b,g,S,V){if(typeof S=="object"&&S!==null&&S.type===Fi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ma:e:{for(var j=S.key,F=g;F!==null;){if(F.key===j){if(j=S.type,j===Fi){if(F.tag===7){n(b,F.sibling),g=i(F,S.props.children),g.return=b,b=g;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===yr&&Yp(j)===F.type){n(b,F.sibling),g=i(F,S.props),g.ref=Us(b,F,S),g.return=b,b=g;break e}n(b,F);break}else e(b,F);F=F.sibling}S.type===Fi?(g=ui(S.props.children,b.mode,V,S.key),g.return=b,b=g):(V=Qa(S.type,S.key,S.props,null,b.mode,V),V.ref=Us(b,g,S),V.return=b,b=V)}return o(b);case Li:e:{for(F=S.key;g!==null;){if(g.key===F)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(b,g.sibling),g=i(g,S.children||[]),g.return=b,b=g;break e}else{n(b,g);break}else e(b,g);g=g.sibling}g=fc(S,b.mode,V),g.return=b,b=g}return o(b);case yr:return F=S._init,D(b,g,F(S._payload),V)}if(Gs(S))return R(b,g,S,V);if(Os(S))return k(b,g,S,V);Ia(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(b,g.sibling),g=i(g,S),g.return=b,b=g):(n(b,g),g=hc(S,b.mode,V),g.return=b,b=g),o(b)):n(b,g)}return D}var ls=t0(!0),n0=t0(!1),ml=Hr(null),gl=null,Gi=null,ph=null;function mh(){ph=Gi=gl=null}function gh(t){var e=ml.current;We(ml),t._currentValue=e}function od(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function es(t,e){gl=t,ph=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Wt=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(ph!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(gl===null)throw Error($(308));Gi=t,gl.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var ii=null;function yh(t){ii===null?ii=[t]:ii.push(t)}function r0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yh(e)):(n.next=i.next,i.next=n),e.interleaved=n,er(t,r)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function vh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,er(t,n)}return i=r.interleaved,i===null?(e.next=e,yh(r)):(e.next=i.next,i.next=e),r.interleaved=e,er(t,n)}function $a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rh(t,n)}}function Xp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yl(t,e,n,r){var i=t.updateQueue;vr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var m=t.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==o&&(u===null?m.firstBaseUpdate=d:u.next=d,m.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;o=0,m=d=c=null,u=s;do{var v=u.lane,C=u.eventTime;if((r&v)===v){m!==null&&(m=m.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=t,k=u;switch(v=e,C=n,k.tag){case 1:if(R=k.payload,typeof R=="function"){p=R.call(C,p,v);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=k.payload,v=typeof R=="function"?R.call(C,p,v):R,v==null)break e;p=Ke({},p,v);break e;case 2:vr=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[u]:v.push(u))}else C={eventTime:C,lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(d=m=C,c=p):m=m.next=C,o|=v;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;v=u,u=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(m===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=m,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gi|=o,t.lanes=o,t.memoizedState=p}}function Jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Xo={},jn=Hr(Xo),Co=Hr(Xo),Ao=Hr(Xo);function si(t){if(t===Xo)throw Error($(174));return t}function _h(t,e){switch(Oe(Ao,e),Oe(Co,t),Oe(jn,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zc(e,t)}We(jn),Oe(jn,e)}function us(){We(jn),We(Co),We(Ao)}function s0(t){si(Ao.current);var e=si(jn.current),n=zc(e,t.type);e!==n&&(Oe(Co,t),Oe(jn,n))}function xh(t){Co.current===t&&(We(jn),We(Co))}var qe=Hr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function wh(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Wa=lr.ReactCurrentDispatcher,ac=lr.ReactCurrentBatchConfig,mi=0,Ge=null,lt=null,gt=null,_l=!1,oo=!1,ko=0,Nw=0;function It(){throw Error($(321))}function Eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!bn(t[n],e[n]))return!1;return!0}function Th(t,e,n,r,i,s){if(mi=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wa.current=t===null||t.memoizedState===null?Mw:Ow,t=n(r,i),oo){s=0;do{if(oo=!1,ko=0,25<=s)throw Error($(301));s+=1,gt=lt=null,e.updateQueue=null,Wa.current=Lw,t=n(r,i)}while(oo)}if(Wa.current=xl,e=lt!==null&&lt.next!==null,mi=0,gt=lt=Ge=null,_l=!1,e)throw Error($(300));return t}function Sh(){var t=ko!==0;return ko=0,t}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Ge.memoizedState=gt=t:gt=gt.next=t,gt}function pn(){if(lt===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=gt===null?Ge.memoizedState:gt.next;if(e!==null)gt=e,lt=t;else{if(t===null)throw Error($(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},gt===null?Ge.memoizedState=gt=t:gt=gt.next=t}return gt}function Po(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=pn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=lt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=o=null,c=null,d=s;do{var m=d.lane;if((mi&m)===m)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(u=c=p,o=r):c=c.next=p,Ge.lanes|=m,gi|=m}d=d.next}while(d!==null&&d!==s);c===null?o=r:c.next=u,bn(r,e.memoizedState)||(Wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ge.lanes|=s,gi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=pn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);bn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function o0(){}function a0(t,e){var n=Ge,r=pn(),i=e(),s=!bn(r.memoizedState,i);if(s&&(r.memoizedState=i,Wt=!0),r=r.queue,bh(c0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,Ro(9,u0.bind(null,n,r,i,e),void 0,null),yt===null)throw Error($(349));mi&30||l0(n,e,i)}return i}function l0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u0(t,e,n,r){e.value=n,e.getSnapshot=r,d0(e)&&h0(t)}function c0(t,e,n){return n(function(){d0(e)&&h0(t)})}function d0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!bn(t,n)}catch{return!0}}function h0(t){var e=er(t,1);e!==null&&Tn(e,t,1,-1)}function Zp(t){var e=kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=Vw.bind(null,Ge,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ge.updateQueue,e===null?(e={lastEffect:null,stores:null},Ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function f0(){return pn().memoizedState}function Ha(t,e,n,r){var i=kn();Ge.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function Yl(t,e,n,r){var i=pn();r=r===void 0?null:r;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,r!==null&&Eh(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}Ge.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function em(t,e){return Ha(8390656,8,t,e)}function bh(t,e){return Yl(2048,8,t,e)}function p0(t,e){return Yl(4,2,t,e)}function m0(t,e){return Yl(4,4,t,e)}function g0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function y0(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4,4,g0.bind(null,e,t),n)}function Ih(){}function v0(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Eh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _0(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Eh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x0(t,e,n){return mi&21?(bn(n,e)||(n=by(),Ge.lanes|=n,gi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Wt=!0),t.memoizedState=n)}function jw(t,e){var n=De;De=n!==0&&4>n?n:4,t(!0);var r=ac.transition;ac.transition={};try{t(!1),e()}finally{De=n,ac.transition=r}}function w0(){return pn().memoizedState}function Dw(t,e,n){var r=Pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},E0(t))T0(e,n);else if(n=r0(t,e,n,r),n!==null){var i=Mt();Tn(n,t,r,i),S0(n,e,r)}}function Vw(t,e,n){var r=Pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(E0(t))T0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,u=s(o,n);if(i.hasEagerState=!0,i.eagerState=u,bn(u,o)){var c=e.interleaved;c===null?(i.next=i,yh(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=r0(t,e,i,r),n!==null&&(i=Mt(),Tn(n,t,r,i),S0(n,e,r))}}function E0(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function T0(t,e){oo=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rh(t,n)}}var xl={readContext:fn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},Mw={readContext:fn,useCallback:function(t,e){return kn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,g0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Dw.bind(null,Ge,t),[r.memoizedState,t]},useRef:function(t){var e=kn();return t={current:t},e.memoizedState=t},useState:Zp,useDebugValue:Ih,useDeferredValue:function(t){return kn().memoizedState=t},useTransition:function(){var t=Zp(!1),e=t[0];return t=jw.bind(null,t[1]),kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ge,i=kn();if(He){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),yt===null)throw Error($(349));mi&30||l0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,em(c0.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,u0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kn(),e=yt.identifierPrefix;if(He){var n=Qn,r=Kn;n=(r&~(1<<32-En(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Nw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ow={readContext:fn,useCallback:v0,useContext:fn,useEffect:bh,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:_0,useReducer:lc,useRef:f0,useState:function(){return lc(Po)},useDebugValue:Ih,useDeferredValue:function(t){var e=pn();return x0(e,lt.memoizedState,t)},useTransition:function(){var t=lc(Po)[0],e=pn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:w0,unstable_isNewReconciler:!1},Lw={readContext:fn,useCallback:v0,useContext:fn,useEffect:bh,useImperativeHandle:y0,useInsertionEffect:p0,useLayoutEffect:m0,useMemo:_0,useReducer:uc,useRef:f0,useState:function(){return uc(Po)},useDebugValue:Ih,useDeferredValue:function(t){var e=pn();return lt===null?e.memoizedState=t:x0(e,lt.memoizedState,t)},useTransition:function(){var t=uc(Po)[0],e=pn().memoizedState;return[t,e]},useMutableSource:o0,useSyncExternalStore:a0,useId:w0,unstable_isNewReconciler:!1};function _n(t,e){if(t&&t.defaultProps){e=Ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ad(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=Pr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(Tn(e,t,i,r),$a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Mt(),i=Pr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ar(t,s,i),e!==null&&(Tn(e,t,i,r),$a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mt(),r=Pr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ar(t,i,r),e!==null&&(Tn(e,t,r,n),$a(e,t,r))}};function tm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,r)||!To(i,s):!0}function b0(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(i=qt(e)?fi:jt.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=fn(s):(s=qt(e)?fi:jt.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ad(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xl.enqueueReplaceState(i,i.state,null),yl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function cs(t,e){try{var n="",r=e;do n+=hx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){El||(El=!0,_d=r),ud(t,e)},n}function C0(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Fw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Zw.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var zw=lr.ReactCurrentOwner,Wt=!1;function Vt(t,e,n,r){e.child=t===null?n0(e,null,n,r):ls(e,t.child,n,r)}function om(t,e,n,r,i){n=n.render;var s=e.ref;return es(e,i),r=Th(t,e,n,r,s,i),n=Sh(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(He&&n&&dh(e),e.flags|=1,Vt(t,e,r,i),e.child)}function am(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A0(t,e,s,r,i)):(t=Qa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,r)&&t.ref===e.ref)return tr(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function A0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(To(s,r)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,tr(t,e,i)}return cd(t,e,n,r,i)}function k0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Qi,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Oe(Qi,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Oe(Qi,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Oe(Qi,Yt),Yt|=r;return Vt(t,e,i,n),e.child}function P0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cd(t,e,n,r,i){var s=qt(n)?fi:jt.current;return s=os(e,s),es(e,i),n=Th(t,e,n,r,s,i),r=Sh(),t!==null&&!Wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tr(t,e,i)):(He&&r&&dh(e),e.flags|=1,Vt(t,e,n,i),e.child)}function lm(t,e,n,r,i){if(qt(n)){var s=!0;hl(e)}else s=!1;if(es(e,i),e.stateNode===null)qa(t,e),b0(e,n,r),ld(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=fn(d):(d=qt(n)?fi:jt.current,d=os(e,d));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||c!==d)&&nm(e,o,r,d),vr=!1;var v=e.memoizedState;o.state=v,yl(e,r,o,i),c=e.memoizedState,u!==r||v!==c||Ht.current||vr?(typeof m=="function"&&(ad(e,n,m,r),c=e.memoizedState),(u=vr||tm(e,n,u,r,v,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=d,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,i0(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:_n(e.type,u),o.props=d,p=e.pendingProps,v=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=fn(c):(c=qt(n)?fi:jt.current,c=os(e,c));var C=n.getDerivedStateFromProps;(m=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||v!==c)&&nm(e,o,r,c),vr=!1,v=e.memoizedState,o.state=v,yl(e,r,o,i);var R=e.memoizedState;u!==p||v!==R||Ht.current||vr?(typeof C=="function"&&(ad(e,n,C,r),R=e.memoizedState),(d=vr||tm(e,n,d,r,v,R,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return dd(t,e,n,r,s,i)}function dd(t,e,n,r,i,s){P0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gp(e,n,!1),tr(t,e,s);r=e.stateNode,zw.current=e;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,u,s)):Vt(t,e,u,s),e.memoizedState=r.state,i&&Gp(e,n,!0),e.child}function R0(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),_h(t,e.containerInfo)}function um(t,e,n,r,i){return as(),fh(i),e.flags|=256,Vt(t,e,n,r),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function N0(t,e,n){var r=e.pendingProps,i=qe.current,s=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Oe(qe,i&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,r,0,null),t=ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fd(n),e.memoizedState=hd,t):Ch(e,o));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Bw(t,e,o,r,u,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Rr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=Rr(u,s):(s=ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hd,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ch(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,r){return r!==null&&fh(r),ls(e,t.child,null,n),t=Ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Bw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error($(422))),Ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=eu({mode:"visible",children:r.children},i,0,null),s=ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=fd(o),e.memoizedState=hd,s);if(!(e.mode&1))return Ca(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error($(419)),r=cc(s,r,void 0),Ca(t,e,o,r)}if(u=(o&t.childLanes)!==0,Wt||u){if(r=yt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,er(t,i),Tn(r,t,i,-1))}return jh(),r=cc(Error($(421))),Ca(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=Cr(i.nextSibling),Zt=e,He=!0,wn=null,t!==null&&(an[ln++]=Kn,an[ln++]=Qn,an[ln++]=pi,Kn=t.id,Qn=t.overflow,pi=e),e=Ch(e,r.children),e.flags|=4096,e)}function cm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),od(t.return,e,n)}function dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Vt(t,e,r.children,n),r=qe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,n,e);else if(t.tag===19)cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Oe(qe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}dc(e,!0,n,null,s);break;case"together":dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uw(t,e,n){switch(e.tag){case 3:R0(e),as();break;case 5:s0(e);break;case 1:qt(e.type)&&hl(e);break;case 4:_h(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Oe(ml,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Oe(qe,qe.current&1),e.flags|=128,null):n&e.child.childLanes?N0(t,e,n):(Oe(qe,qe.current&1),t=tr(t,e,n),t!==null?t.sibling:null);Oe(qe,qe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oe(qe,qe.current),r)break;return null;case 22:case 23:return e.lanes=0,k0(t,e,n)}return tr(t,e,n)}var D0,pd,V0,M0;D0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};V0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,si(jn.current);var s=null;switch(n){case"input":i=Mc(t,i),r=Mc(t,r),s=[];break;case"select":i=Ke({},i,{value:void 0}),r=Ke({},r,{value:void 0}),s=[];break;case"textarea":i=Fc(t,i),r=Fc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cl)}Bc(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var u=i[d];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(go.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var c=r[d];if(u=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==u&&(c!=null||u!=null))if(d==="style")if(u){for(o in u)!u.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&u[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(go.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Be("scroll",t),s||u===c||(s=[])):(s=s||[]).push(d,c))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};M0=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!He)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $w(t,e,n){var r=e.pendingProps;switch(hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return qt(e.type)&&dl(),Ct(e),null;case 3:return r=e.stateNode,us(),We(Ht),We(jt),wh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wn!==null&&(Ed(wn),wn=null))),pd(t,e),Ct(e),null;case 5:xh(e);var i=si(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)V0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Ct(e),null}if(t=si(jn.current),ba(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rn]=e,r[Io]=s,t=(e.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(i=0;i<Qs.length;i++)Be(Qs[i],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":_p(r,s),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Be("invalid",r);break;case"textarea":wp(r,s),Be("invalid",r)}Bc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Sa(r.textContent,u,t),i=["children",""+u]):go.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&Be("scroll",r)}switch(n){case"input":ga(r),xp(r,s,!0);break;case"textarea":ga(r),Ep(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=cl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rn]=e,t[Io]=r,D0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Uc(n,r),n){case"dialog":Be("cancel",t),Be("close",t),i=r;break;case"iframe":case"object":case"embed":Be("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qs.length;i++)Be(Qs[i],t);i=r;break;case"source":Be("error",t),i=r;break;case"img":case"image":case"link":Be("error",t),Be("load",t),i=r;break;case"details":Be("toggle",t),i=r;break;case"input":_p(t,r),i=Mc(t,r),Be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ke({},r,{value:void 0}),Be("invalid",t);break;case"textarea":wp(t,r),i=Fc(t,r),Be("invalid",t);break;default:i=r}Bc(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?fy(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dy(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&yo(t,c):typeof c=="number"&&yo(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Be("scroll",t):c!=null&&Xd(t,s,c,o))}switch(n){case"input":ga(t),xp(t,r,!1);break;case"textarea":ga(t),Ep(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)M0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=si(Ao.current),si(jn.current),ba(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rn]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:Sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rn]=e,e.stateNode=r}return Ct(e),null;case 13:if(We(qe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(He&&Xt!==null&&e.mode&1&&!(e.flags&128))e0(),as(),e.flags|=98560,s=!1;else if(s=ba(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Rn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),s=!1}else wn!==null&&(Ed(wn),wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||qe.current&1?ct===0&&(ct=3):jh())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return us(),pd(t,e),t===null&&So(e.stateNode.containerInfo),Ct(e),null;case 10:return gh(e.type._context),Ct(e),null;case 17:return qt(e.type)&&dl(),Ct(e),null;case 19:if(We(qe),s=e.memoizedState,s===null)return Ct(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Oe(qe,qe.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>ds&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return Ct(e),null}else 2*nt()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,n=qe.current,Oe(qe,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return Nh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function Ww(t,e){switch(hh(e),e.tag){case 1:return qt(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),We(Ht),We(jt),wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xh(e),null;case 13:if(We(qe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return We(qe),null;case 4:return us(),null;case 10:return gh(e.type._context),null;case 22:case 23:return Nh(),null;case 24:return null;default:return null}}var Aa=!1,Pt=!1,Hw=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ze(t,e,r)}else n.current=null}function md(t,e,n){try{n()}catch(r){Ze(t,e,r)}}var dm=!1;function qw(t,e){if(Jc=al,t=By(),ch(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,u=-1,c=-1,d=0,m=0,p=t,v=null;t:for(;;){for(var C;p!==n||i!==0&&p.nodeType!==3||(u=o+i),p!==s||r!==0&&p.nodeType!==3||(c=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(C=p.firstChild)!==null;)v=p,p=C;for(;;){if(p===t)break t;if(v===n&&++d===i&&(u=o),v===s&&++m===r&&(c=o),(C=p.nextSibling)!==null)break;p=v,v=p.parentNode}p=C}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zc={focusedElem:t,selectionRange:n},al=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var k=R.memoizedProps,D=R.memoizedState,b=e.stateNode,g=b.getSnapshotBeforeUpdate(e.elementType===e.type?k:_n(e.type,k),D);b.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(V){Ze(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return R=dm,dm=!1,R}function ao(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&md(e,n,s)}i=i.next}while(i!==r)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O0(t){var e=t.alternate;e!==null&&(t.alternate=null,O0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rn],delete e[Io],delete e[nd],delete e[Aw],delete e[kw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L0(t){return t.tag===5||t.tag===3||t.tag===4}function hm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var vt=null,xn=!1;function gr(t,e,n){for(n=n.child;n!==null;)F0(t,e,n),n=n.sibling}function F0(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Pt||Ki(n,e);case 6:var r=vt,i=xn;vt=null,gr(t,e,n),vt=r,xn=i,vt!==null&&(xn?(t=vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):vt.removeChild(n.stateNode));break;case 18:vt!==null&&(xn?(t=vt,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),wo(t)):ic(vt,n.stateNode));break;case 4:r=vt,i=xn,vt=n.stateNode.containerInfo,xn=!0,gr(t,e,n),vt=r,xn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&md(n,e,o),i=i.next}while(i!==r)}gr(t,e,n);break;case 1:if(!Pt&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ze(n,e,u)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,gr(t,e,n),Pt=r):gr(t,e,n);break;default:gr(t,e,n)}}function fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hw),e.forEach(function(r){var i=tE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:vt=u.stateNode,xn=!1;break e;case 3:vt=u.stateNode.containerInfo,xn=!0;break e;case 4:vt=u.stateNode.containerInfo,xn=!0;break e}u=u.return}if(vt===null)throw Error($(160));F0(s,o,i),vt=null,xn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Ze(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z0(e,t),e=e.sibling}function z0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(e,t),An(t),r&4){try{ao(3,t,t.return),Jl(3,t)}catch(k){Ze(t,t.return,k)}try{ao(5,t,t.return)}catch(k){Ze(t,t.return,k)}}break;case 1:vn(e,t),An(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(vn(e,t),An(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{yo(i,"")}catch(k){Ze(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&ly(i,s),Uc(u,o);var d=Uc(u,s);for(o=0;o<c.length;o+=2){var m=c[o],p=c[o+1];m==="style"?fy(i,p):m==="dangerouslySetInnerHTML"?dy(i,p):m==="children"?yo(i,p):Xd(i,m,p,d)}switch(u){case"input":Oc(i,s);break;case"textarea":uy(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Yi(i,!!s.multiple,C,!1):v!==!!s.multiple&&(s.defaultValue!=null?Yi(i,!!s.multiple,s.defaultValue,!0):Yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Io]=s}catch(k){Ze(t,t.return,k)}}break;case 6:if(vn(e,t),An(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ze(t,t.return,k)}}break;case 3:if(vn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(k){Ze(t,t.return,k)}break;case 4:vn(e,t),An(t);break;case 13:vn(e,t),An(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ph=nt())),r&4&&fm(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(d=Pt)||m,vn(e,t),Pt=d):vn(e,t),An(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(Z=t,m=t.child;m!==null;){for(p=Z=m;Z!==null;){switch(v=Z,C=v.child,v.tag){case 0:case 11:case 14:case 15:ao(4,v,v.return);break;case 1:Ki(v,v.return);var R=v.stateNode;if(typeof R.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(k){Ze(r,n,k)}}break;case 5:Ki(v,v.return);break;case 22:if(v.memoizedState!==null){mm(p);continue}}C!==null?(C.return=v,Z=C):mm(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{i=p.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=hy("display",o))}catch(k){Ze(t,t.return,k)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(k){Ze(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:vn(e,t),An(t),r&4&&fm(t);break;case 21:break;default:vn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(L0(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(yo(i,""),r.flags&=-33);var s=hm(t);vd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=hm(t);yd(t,u,o);break;default:throw Error($(161))}}catch(c){Ze(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gw(t,e,n){Z=t,B0(t)}function B0(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Aa;if(!o){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Pt;u=Aa;var d=Pt;if(Aa=o,(Pt=c)&&!d)for(Z=i;Z!==null;)o=Z,c=o.child,o.tag===22&&o.memoizedState!==null?gm(i):c!==null?(c.return=o,Z=c):gm(i);for(;s!==null;)Z=s,B0(s),s=s.sibling;Z=i,Aa=u,Pt=d}pm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Z=s):pm(t)}}function pm(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||Jl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_n(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jp(e,o,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&wo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Pt||e.flags&512&&gd(e)}catch(v){Ze(e,e.return,v)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function mm(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function gm(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(c){Ze(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Ze(e,i,c)}}var s=e.return;try{gd(e)}catch(c){Ze(e,s,c)}break;case 5:var o=e.return;try{gd(e)}catch(c){Ze(e,o,c)}}}catch(c){Ze(e,e.return,c)}if(e===t){Z=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Z=u;break}Z=e.return}}var Kw=Math.ceil,wl=lr.ReactCurrentDispatcher,Ah=lr.ReactCurrentOwner,dn=lr.ReactCurrentBatchConfig,Pe=0,yt=null,it=null,wt=0,Yt=0,Qi=Hr(0),ct=0,No=null,gi=0,Zl=0,kh=0,lo=null,Ut=null,Ph=0,ds=1/0,Hn=null,El=!1,_d=null,kr=null,ka=!1,Er=null,Tl=0,uo=0,xd=null,Ga=-1,Ka=0;function Mt(){return Pe&6?nt():Ga!==-1?Ga:Ga=nt()}function Pr(t){return t.mode&1?Pe&2&&wt!==0?wt&-wt:Rw.transition!==null?(Ka===0&&(Ka=by()),Ka):(t=De,t!==0||(t=window.event,t=t===void 0?16:Ny(t.type)),t):1}function Tn(t,e,n,r){if(50<uo)throw uo=0,xd=null,Error($(185));Ko(t,n,r),(!(Pe&2)||t!==yt)&&(t===yt&&(!(Pe&2)&&(Zl|=n),ct===4&&xr(t,wt)),Gt(t,r),n===1&&Pe===0&&!(e.mode&1)&&(ds=nt()+500,Ql&&qr()))}function Gt(t,e){var n=t.callbackNode;Rx(t,e);var r=ol(t,t===yt?wt:0);if(r===0)n!==null&&bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bp(n),e===1)t.tag===0?Pw(ym.bind(null,t)):Xy(ym.bind(null,t)),Iw(function(){!(Pe&6)&&qr()}),n=null;else{switch(Iy(r)){case 1:n=nh;break;case 4:n=Ty;break;case 16:n=sl;break;case 536870912:n=Sy;break;default:n=sl}n=Q0(n,U0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U0(t,e){if(Ga=-1,Ka=0,Pe&6)throw Error($(327));var n=t.callbackNode;if(ts()&&t.callbackNode!==n)return null;var r=ol(t,t===yt?wt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sl(t,r);else{e=r;var i=Pe;Pe|=2;var s=W0();(yt!==t||wt!==e)&&(Hn=null,ds=nt()+500,li(t,e));do try{Xw();break}catch(u){$0(t,u)}while(!0);mh(),wl.current=s,Pe=i,it!==null?e=0:(yt=null,wt=0,e=ct)}if(e!==0){if(e===2&&(i=Gc(t),i!==0&&(r=i,e=wd(t,i))),e===1)throw n=No,li(t,0),xr(t,r),Gt(t,nt()),n;if(e===6)xr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Qw(i)&&(e=Sl(t,r),e===2&&(s=Gc(t),s!==0&&(r=s,e=wd(t,s))),e===1))throw n=No,li(t,0),xr(t,r),Gt(t,nt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:ti(t,Ut,Hn);break;case 3:if(xr(t,r),(r&130023424)===r&&(e=Ph+500-nt(),10<e)){if(ol(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=td(ti.bind(null,t,Ut,Hn),e);break}ti(t,Ut,Hn);break;case 4:if(xr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-En(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kw(r/1960))-r,10<r){t.timeoutHandle=td(ti.bind(null,t,Ut,Hn),r);break}ti(t,Ut,Hn);break;case 5:ti(t,Ut,Hn);break;default:throw Error($(329))}}}return Gt(t,nt()),t.callbackNode===n?U0.bind(null,t):null}function wd(t,e){var n=lo;return t.current.memoizedState.isDehydrated&&(li(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&Ed(e)),t}function Ed(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function Qw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!bn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~kh,e&=~Zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-En(e),r=1<<n;t[n]=-1,e&=~r}}function ym(t){if(Pe&6)throw Error($(327));ts();var e=ol(t,0);if(!(e&1))return Gt(t,nt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var r=Gc(t);r!==0&&(e=r,n=wd(t,r))}if(n===1)throw n=No,li(t,0),xr(t,e),Gt(t,nt()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ti(t,Ut,Hn),Gt(t,nt()),null}function Rh(t,e){var n=Pe;Pe|=1;try{return t(e)}finally{Pe=n,Pe===0&&(ds=nt()+500,Ql&&qr())}}function yi(t){Er!==null&&Er.tag===0&&!(Pe&6)&&ts();var e=Pe;Pe|=1;var n=dn.transition,r=De;try{if(dn.transition=null,De=1,t)return t()}finally{De=r,dn.transition=n,Pe=e,!(Pe&6)&&qr()}}function Nh(){Yt=Qi.current,We(Qi)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bw(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(hh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:us(),We(Ht),We(jt),wh();break;case 5:xh(r);break;case 4:us();break;case 13:We(qe);break;case 19:We(qe);break;case 10:gh(r.type._context);break;case 22:case 23:Nh()}n=n.return}if(yt=t,it=t=Rr(t.current,null),wt=Yt=e,ct=0,No=null,kh=Zl=gi=0,Ut=lo=null,ii!==null){for(e=0;e<ii.length;e++)if(n=ii[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ii=null}return t}function $0(t,e){do{var n=it;try{if(mh(),Wa.current=xl,_l){for(var r=Ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_l=!1}if(mi=0,gt=lt=Ge=null,oo=!1,ko=0,Ah.current=null,n===null||n.return===null){ct=1,No=e,it=null;break}e:{var s=t,o=n.return,u=n,c=e;if(e=wt,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,m=u,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var v=m.alternate;v?(m.updateQueue=v.updateQueue,m.memoizedState=v.memoizedState,m.lanes=v.lanes):(m.updateQueue=null,m.memoizedState=null)}var C=im(o);if(C!==null){C.flags&=-257,sm(C,o,u,s,e),C.mode&1&&rm(s,d,e),e=C,c=d;var R=e.updateQueue;if(R===null){var k=new Set;k.add(c),e.updateQueue=k}else R.add(c);break e}else{if(!(e&1)){rm(s,d,e),jh();break e}c=Error($(426))}}else if(He&&u.mode&1){var D=im(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),sm(D,o,u,s,e),fh(cs(c,u));break e}}s=c=cs(c,u),ct!==4&&(ct=2),lo===null?lo=[s]:lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var b=I0(s,c,e);Xp(s,b);break e;case 1:u=c;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(kr===null||!kr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=C0(s,u,e);Xp(s,V);break e}}s=s.return}while(s!==null)}q0(n)}catch(j){e=j,it===n&&n!==null&&(it=n=n.return);continue}break}while(!0)}function W0(){var t=wl.current;return wl.current=xl,t===null?xl:t}function jh(){(ct===0||ct===3||ct===2)&&(ct=4),yt===null||!(gi&268435455)&&!(Zl&268435455)||xr(yt,wt)}function Sl(t,e){var n=Pe;Pe|=2;var r=W0();(yt!==t||wt!==e)&&(Hn=null,li(t,e));do try{Yw();break}catch(i){$0(t,i)}while(!0);if(mh(),Pe=n,wl.current=r,it!==null)throw Error($(261));return yt=null,wt=0,ct}function Yw(){for(;it!==null;)H0(it)}function Xw(){for(;it!==null&&!Ex();)H0(it)}function H0(t){var e=K0(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?q0(t):it=e,Ah.current=null}function q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ww(n,e),n!==null){n.flags&=32767,it=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,it=null;return}}else if(n=$w(n,e,Yt),n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);ct===0&&(ct=5)}function ti(t,e,n){var r=De,i=dn.transition;try{dn.transition=null,De=1,Jw(t,e,n,r)}finally{dn.transition=i,De=r}return null}function Jw(t,e,n,r){do ts();while(Er!==null);if(Pe&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nx(t,s),t===yt&&(it=yt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,Q0(sl,function(){return ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dn.transition,dn.transition=null;var o=De;De=1;var u=Pe;Pe|=4,Ah.current=null,qw(t,n),z0(n,t),vw(Zc),al=!!Jc,Zc=Jc=null,t.current=n,Gw(n),Tx(),Pe=u,De=o,dn.transition=s}else t.current=n;if(ka&&(ka=!1,Er=t,Tl=i),s=t.pendingLanes,s===0&&(kr=null),Ix(n.stateNode),Gt(t,nt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,t=_d,_d=null,t;return Tl&1&&t.tag!==0&&ts(),s=t.pendingLanes,s&1?t===xd?uo++:(uo=0,xd=t):uo=0,qr(),null}function ts(){if(Er!==null){var t=Iy(Tl),e=dn.transition,n=De;try{if(dn.transition=null,De=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,Tl=0,Pe&6)throw Error($(331));var i=Pe;for(Pe|=4,Z=t.current;Z!==null;){var s=Z,o=s.child;if(Z.flags&16){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var d=u[c];for(Z=d;Z!==null;){var m=Z;switch(m.tag){case 0:case 11:case 15:ao(8,m,s)}var p=m.child;if(p!==null)p.return=m,Z=p;else for(;Z!==null;){m=Z;var v=m.sibling,C=m.return;if(O0(m),m===d){Z=null;break}if(v!==null){v.return=C,Z=v;break}Z=C}}}var R=s.alternate;if(R!==null){var k=R.child;if(k!==null){R.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}Z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Z=o;else e:for(;Z!==null;){if(s=Z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ao(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Z=b;break e}Z=s.return}}var g=t.current;for(Z=g;Z!==null;){o=Z;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Z=S;else e:for(o=g;Z!==null;){if(u=Z,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Jl(9,u)}}catch(j){Ze(u,u.return,j)}if(u===o){Z=null;break e}var V=u.sibling;if(V!==null){V.return=u.return,Z=V;break e}Z=u.return}}if(Pe=i,qr(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Wl,t)}catch{}r=!0}return r}finally{De=n,dn.transition=e}}return!1}function vm(t,e,n){e=cs(n,e),e=I0(t,e,1),t=Ar(t,e,1),e=Mt(),t!==null&&(Ko(t,1,e),Gt(t,e))}function Ze(t,e,n){if(t.tag===3)vm(t,t,n);else for(;e!==null;){if(e.tag===3){vm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=cs(n,t),t=C0(e,t,1),e=Ar(e,t,1),t=Mt(),e!==null&&(Ko(e,1,t),Gt(e,t));break}}e=e.return}}function Zw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Mt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(wt&n)===n&&(ct===4||ct===3&&(wt&130023424)===wt&&500>nt()-Ph?li(t,0):kh|=n),Gt(t,e)}function G0(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=Mt();t=er(t,e),t!==null&&(Ko(t,e,n),Gt(t,n))}function eE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G0(t,n)}function tE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),G0(t,n)}var K0;K0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)Wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Wt=!1,Uw(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,He&&e.flags&1048576&&Jy(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qa(t,e),t=e.pendingProps;var i=os(e,jt.current);es(e,n),i=Th(null,e,r,t,i,n);var s=Sh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vh(e),i.updater=Xl,e.stateNode=i,i._reactInternals=e,ld(e,r,t,n),e=dd(null,e,r,!0,s,n)):(e.tag=0,He&&s&&dh(e),Vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rE(r),t=_n(r,t),i){case 0:e=cd(null,e,r,t,n);break e;case 1:e=lm(null,e,r,t,n);break e;case 11:e=om(null,e,r,t,n);break e;case 14:e=am(null,e,r,_n(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),cd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),lm(t,e,r,i,n);case 3:e:{if(R0(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,i0(t,e),yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error($(423)),e),e=um(t,e,r,n,i);break e}else if(r!==i){i=cs(Error($(424)),e),e=um(t,e,r,n,i);break e}else for(Xt=Cr(e.stateNode.containerInfo.firstChild),Zt=e,He=!0,wn=null,n=n0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=tr(t,e,n);break e}Vt(t,e,r,n)}e=e.child}return e;case 5:return s0(e),t===null&&sd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ed(r,i)?o=null:s!==null&&ed(r,s)&&(e.flags|=32),P0(t,e),Vt(t,e,o,n),e.child;case 6:return t===null&&sd(e),null;case 13:return N0(t,e,n);case 4:return _h(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):Vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),om(t,e,r,i,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Oe(ml,r._currentValue),r._currentValue=o,s!==null)if(bn(s.value,o)){if(s.children===i.children&&!Ht.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){o=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Yn(-1,n&-n),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?c.next=c:(c.next=m.next,m.next=c),d.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),od(s.return,n,e),u.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,es(e,n),i=fn(i),r=r(i),e.flags|=1,Vt(t,e,r,n),e.child;case 14:return r=e.type,i=_n(r,e.pendingProps),i=_n(r.type,i),am(t,e,r,i,n);case 15:return A0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_n(r,i),qa(t,e),e.tag=1,qt(r)?(t=!0,hl(e)):t=!1,es(e,n),b0(e,r,i),ld(e,r,i,n),dd(null,e,r,!0,t,n);case 19:return j0(t,e,n);case 22:return k0(t,e,n)}throw Error($(156,e.tag))};function Q0(t,e){return Ey(t,e)}function nE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,r){return new nE(t,e,n,r)}function Dh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rE(t){if(typeof t=="function")return Dh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===eh)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ui(n.children,i,s,e);case Jd:o=8,i|=8;break;case Nc:return t=cn(12,n,e,i|2),t.elementType=Nc,t.lanes=s,t;case jc:return t=cn(13,n,e,i),t.elementType=jc,t.lanes=s,t;case Dc:return t=cn(19,n,e,i),t.elementType=Dc,t.lanes=s,t;case sy:return eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ry:o=10;break e;case iy:o=9;break e;case Zd:o=11;break e;case eh:o=14;break e;case yr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=cn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=cn(7,t,r,e),t.lanes=n,t}function eu(t,e,n,r){return t=cn(22,t,r,e),t.elementType=sy,t.lanes=n,t.stateNode={isHidden:!1},t}function hc(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,r,i,s,o,u,c){return t=new iE(t,e,n,u,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(s),t}function sE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Y0(t){if(!t)return Mr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(qt(n))return Yy(t,n,e)}return e}function X0(t,e,n,r,i,s,o,u,c){return t=Vh(n,r,!0,t,i,s,o,u,c),t.context=Y0(null),n=t.current,r=Mt(),i=Pr(n),s=Yn(r,i),s.callback=e??null,Ar(n,s,i),t.current.lanes=i,Ko(t,i,r),Gt(t,r),t}function tu(t,e,n,r){var i=e.current,s=Mt(),o=Pr(i);return n=Y0(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(i,e,o),t!==null&&(Tn(t,i,o,s),$a(t,i,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mh(t,e){_m(t,e),(t=t.alternate)&&_m(t,e)}function oE(){return null}var J0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Oh(t){this._internalRoot=t}nu.prototype.render=Oh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));tu(t,e,null,null)};nu.prototype.unmount=Oh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yi(function(){tu(null,t,null,null)}),e[Zn]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=ky();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Ry(t)}};function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xm(){}function aE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=bl(o);s.call(d)}}var o=X0(e,r,t,0,null,!1,!1,"",xm);return t._reactRootContainer=o,t[Zn]=o.current,So(t.nodeType===8?t.parentNode:t),yi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var d=bl(c);u.call(d)}}var c=Vh(t,0,!1,null,null,!1,!1,"",xm);return t._reactRootContainer=c,t[Zn]=c.current,So(t.nodeType===8?t.parentNode:t),yi(function(){tu(e,c,n,r)}),c}function iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var u=i;i=function(){var c=bl(o);u.call(c)}}tu(e,o,t,i)}else o=aE(n,e,t,i,r);return bl(o)}Cy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(rh(e,n|1),Gt(e,nt()),!(Pe&6)&&(ds=nt()+500,qr()))}break;case 13:yi(function(){var r=er(t,1);if(r!==null){var i=Mt();Tn(r,t,1,i)}}),Mh(t,1)}};ih=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=Mt();Tn(e,t,134217728,n)}Mh(t,134217728)}};Ay=function(t){if(t.tag===13){var e=Pr(t),n=er(t,e);if(n!==null){var r=Mt();Tn(n,t,e,r)}Mh(t,e)}};ky=function(){return De};Py=function(t,e){var n=De;try{return De=t,e()}finally{De=n}};Wc=function(t,e,n){switch(e){case"input":if(Oc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kl(r);if(!i)throw Error($(90));ay(r),Oc(r,i)}}}break;case"textarea":uy(t,n);break;case"select":e=n.value,e!=null&&Yi(t,!!n.multiple,e,!1)}};gy=Rh;yy=yi;var lE={usingClientEntryPoint:!1,Events:[Yo,$i,Kl,py,my,Rh]},Ws={findFiberByHostInstance:ri,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uE={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||oE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pa.isDisabled&&Pa.supportsFiber)try{Wl=Pa.inject(uE),Nn=Pa}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lE;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(e))throw Error($(200));return sE(t,e,null,n)};tn.createRoot=function(t,e){if(!Lh(t))throw Error($(299));var n=!1,r="",i=J0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,r,i),t[Zn]=e.current,So(t.nodeType===8?t.parentNode:t),new Oh(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=xy(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return yi(t)};tn.hydrate=function(t,e,n){if(!ru(e))throw Error($(200));return iu(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!Lh(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=J0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=X0(e,null,t,1,n??null,i,!1,s,o),t[Zn]=e.current,So(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nu(e)};tn.render=function(t,e,n){if(!ru(e))throw Error($(200));return iu(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!ru(t))throw Error($(40));return t._reactRootContainer?(yi(function(){iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1};tn.unstable_batchedUpdates=Rh;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ru(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return iu(t,e,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(t){console.error(t)}}Z0(),Zg.exports=tn;var cE=Zg.exports,ev,wm=cE;ev=wm.createRoot,wm.hydrateRoot;const dE="modulepreload",hE=function(t){return"/deltaEntrerriano/"+t},Em={},fE=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),u=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=hE(c),c in Em)return;Em[c]=!0;const d=c.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${m}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":dE,d||(p.as="script"),p.crossOrigin="",p.href=c,u&&p.setAttribute("nonce",u),document.head.appendChild(p),d)return new Promise((v,C)=>{p.addEventListener("load",v),p.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=o,window.dispatchEvent(u),!u.defaultPrevented)throw o}return i.then(o=>{for(const u of o||[])u.status==="rejected"&&s(u.reason);return e().catch(s)})};function pE(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let u,c;const d=async(p=!0)=>{await c};async function m(){if("serviceWorker"in navigator){if(u=await fE(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-vqzQaGvo.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/deltaEntrerriano/sw.js",{scope:"/deltaEntrerriano/",type:"classic"})).catch(p=>{o==null||o(p)}),!u)return;u.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),u.addEventListener("installed",p=>{p.isUpdate||r==null||r()}),u.register({immediate:e}).then(p=>{s?s("/deltaEntrerriano/sw.js",p):i==null||i(p)}).catch(p=>{o==null||o(p)})}}return c=m(),d}function mE(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t,[u,c]=re.useState(!1),[d,m]=re.useState(!1),[p]=re.useState(()=>pE({immediate:e,onOfflineReady(){m(!0),r==null||r()},onNeedRefresh(){c(!0),n==null||n()},onRegistered:i,onRegisteredSW:s,onRegisterError:o}));return{needRefresh:[u,c],offlineReady:[d,m],updateServiceWorker:p}}const gE=()=>{};var Tm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],u=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,u=o?t[i+1]:0,c=i+2<t.length,d=c?t[i+2]:0,m=s>>2,p=(s&3)<<4|u>>4;let v=(u&15)<<2|d>>6,C=d&63;c||(C=64,o||(v=64)),r.push(n[m],n[p],n[v],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||u==null||d==null||p==null)throw new vE;const v=s<<2|u>>4;if(r.push(v),d!==64){const C=u<<4&240|d>>2;if(r.push(C),p!==64){const R=d<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _E=function(t){const e=tv(t);return nv.encodeByteArray(e,!0)},Il=function(t){return _E(t).replace(/\./g,"")},xE=function(t){try{return nv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=()=>wE().__FIREBASE_DEFAULTS__,TE=()=>{if(typeof process>"u"||typeof Tm>"u")return;const t=Tm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xE(t[1]);return e&&JSON.parse(e)},Fh=()=>{try{return gE()||EE()||TE()||SE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bE=t=>{var e,n;return(n=(e=Fh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},IE=t=>{const e=bE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rv=()=>{var t;return(t=Fh())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Il(JSON.stringify(n)),Il(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PE(){var e;const t=(e=Fh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RE(){return!PE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iv(){try{return typeof indexedDB=="object"}catch{return!1}}function sv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function NE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="FirebaseError";class Ii extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=jE,Object.setPrototypeOf(this,Ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,su.prototype.create)}}class su{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DE(s,r):"Error",u=`${this.serviceName}: ${o} (${i}).`;return new Ii(i,u,r)}}function DE(t,e){return t.replace(VE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VE=/\{\$([^}]+)}/g;function Cl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sm(s)&&Sm(o)){if(!Cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ME(t){return(await fetch(t,{credentials:"include"})).ok}class nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new CE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FE(e))try{this.getOrInitializeService({instanceIdentifier:ni})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ni){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ni){return this.instances.has(e)}getOptions(e=ni){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ni){return this.component?this.component.multipleInstances?e:ni:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(t){return t===ni?void 0:t}function FE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const BE={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},UE=Ie.INFO,$E={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},WE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$E[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class av{constructor(e){this.name=e,this._logLevel=UE,this._logHandler=WE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const HE=(t,e)=>e.some(n=>t instanceof n);let bm,Im;function qE(){return bm||(bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GE(){return Im||(Im=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lv=new WeakMap,Td=new WeakMap,uv=new WeakMap,pc=new WeakMap,zh=new WeakMap;function KE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lv.set(n,t)}).catch(()=>{}),zh.set(e,t),e}function QE(t){if(Td.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Td.set(t,e)}let Sd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YE(t){Sd=t(Sd)}function XE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return uv.set(r,e.sort?e.sort():[e]),Xn(r)}:GE().includes(t)?function(...e){return t.apply(mc(this),e),Xn(lv.get(this))}:function(...e){return Xn(t.apply(mc(this),e))}}function JE(t){return typeof t=="function"?XE(t):(t instanceof IDBTransaction&&QE(t),HE(t,qE())?new Proxy(t,Sd):t)}function Xn(t){if(t instanceof IDBRequest)return KE(t);if(pc.has(t))return pc.get(t);const e=JE(t);return e!==t&&(pc.set(t,e),zh.set(e,t)),e}const mc=t=>zh.get(t);function ou(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),u=Xn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xn(o.result),c.oldVersion,c.newVersion,Xn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}function gc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Xn(n).then(()=>{})}const ZE=["get","getKey","getAll","getAllKeys","count"],eT=["put","add","delete","clear"],yc=new Map;function Cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yc.get(e))return yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZE.includes(n)))return;const s=async function(o,...u){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),i&&c.done]))[0]};return yc.set(e,s),s}YE(t=>({...t,get:(e,n,r)=>Cm(e,n)||t.get(e,n,r),has:(e,n)=>!!Cm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bd="@firebase/app",Am="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new av("@firebase/app"),rT="@firebase/app-compat",iT="@firebase/analytics-compat",sT="@firebase/analytics",oT="@firebase/app-check-compat",aT="@firebase/app-check",lT="@firebase/auth",uT="@firebase/auth-compat",cT="@firebase/database",dT="@firebase/data-connect",hT="@firebase/database-compat",fT="@firebase/functions",pT="@firebase/functions-compat",mT="@firebase/installations",gT="@firebase/installations-compat",yT="@firebase/messaging",vT="@firebase/messaging-compat",_T="@firebase/performance",xT="@firebase/performance-compat",wT="@firebase/remote-config",ET="@firebase/remote-config-compat",TT="@firebase/storage",ST="@firebase/storage-compat",bT="@firebase/firestore",IT="@firebase/ai",CT="@firebase/firestore-compat",AT="firebase",kT="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="[DEFAULT]",PT={[bd]:"fire-core",[rT]:"fire-core-compat",[sT]:"fire-analytics",[iT]:"fire-analytics-compat",[aT]:"fire-app-check",[oT]:"fire-app-check-compat",[lT]:"fire-auth",[uT]:"fire-auth-compat",[cT]:"fire-rtdb",[dT]:"fire-data-connect",[hT]:"fire-rtdb-compat",[fT]:"fire-fn",[pT]:"fire-fn-compat",[mT]:"fire-iid",[gT]:"fire-iid-compat",[yT]:"fire-fcm",[vT]:"fire-fcm-compat",[_T]:"fire-perf",[xT]:"fire-perf-compat",[wT]:"fire-rc",[ET]:"fire-rc-compat",[TT]:"fire-gcs",[ST]:"fire-gcs-compat",[bT]:"fire-fst",[CT]:"fire-fst-compat",[IT]:"fire-vertex","fire-js":"fire-js",[AT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map,RT=new Map,Cd=new Map;function km(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Or(t){const e=t.name;if(Cd.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,t);for(const n of Al.values())km(n,t);for(const n of RT.values())km(n,t);return!0}function au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function NT(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new su("app","Firebase",jT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=kT;function cv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Id,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=rv()),!n)throw Nr.create("no-options");const s=Al.get(i);if(s){if(Cl(n,s.options)&&Cl(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new zE(i);for(const c of Cd.values())o.addComponent(c);const u=new DT(n,r,o);return Al.set(i,u),u}function dv(t=Id){const e=Al.get(t);if(!e&&t===Id&&rv())return cv();if(!e)throw Nr.create("no-app",{appName:t});return e}function Dn(t,e,n){let r=PT[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(o.join(" "));return}Or(new nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="firebase-heartbeat-database",OT=1,jo="firebase-heartbeat-store";let vc=null;function hv(){return vc||(vc=ou(MT,OT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),vc}async function LT(t){try{const n=(await hv()).transaction(jo),r=await n.objectStore(jo).get(fv(t));return await n.done,r}catch(e){if(e instanceof Ii)rr.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Pm(t,e){try{const r=(await hv()).transaction(jo,"readwrite");await r.objectStore(jo).put(e,fv(t)),await r.done}catch(n){if(n instanceof Ii)rr.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function fv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=1024,zT=30;class BT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $T(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>zT){const o=WT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rm(),{heartbeatsToSend:r,unsentEntries:i}=UT(this._heartbeatsCache.heartbeats),s=Il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rr.warn(n),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function UT(t,e=FT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Nm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Nm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $T{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iv()?sv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Pm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Nm(t){return Il(JSON.stringify({version:2,heartbeats:t})).length}function WT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t){Or(new nr("platform-logger",e=>new tT(e),"PRIVATE")),Or(new nr("heartbeat",e=>new BT(e),"PRIVATE")),Dn(bd,Am,t),Dn(bd,Am,"esm2020"),Dn("fire-js","")}HT("");var qT="firebase",GT="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn(qT,GT,"app");var jm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jr,pv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,_){function T(){}T.prototype=_.prototype,y.F=_.prototype,y.prototype=new T,y.prototype.constructor=y,y.D=function(E,w,A){for(var I=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)I[Ce-2]=arguments[Ce];return _.prototype[w].apply(E,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,_,T){T||(T=0);const E=Array(16);if(typeof _=="string")for(var w=0;w<16;++w)E[w]=_.charCodeAt(T++)|_.charCodeAt(T++)<<8|_.charCodeAt(T++)<<16|_.charCodeAt(T++)<<24;else for(w=0;w<16;++w)E[w]=_[T++]|_[T++]<<8|_[T++]<<16|_[T++]<<24;_=y.g[0],T=y.g[1],w=y.g[2];let A=y.g[3],I;I=_+(A^T&(w^A))+E[0]+3614090360&4294967295,_=T+(I<<7&4294967295|I>>>25),I=A+(w^_&(T^w))+E[1]+3905402710&4294967295,A=_+(I<<12&4294967295|I>>>20),I=w+(T^A&(_^T))+E[2]+606105819&4294967295,w=A+(I<<17&4294967295|I>>>15),I=T+(_^w&(A^_))+E[3]+3250441966&4294967295,T=w+(I<<22&4294967295|I>>>10),I=_+(A^T&(w^A))+E[4]+4118548399&4294967295,_=T+(I<<7&4294967295|I>>>25),I=A+(w^_&(T^w))+E[5]+1200080426&4294967295,A=_+(I<<12&4294967295|I>>>20),I=w+(T^A&(_^T))+E[6]+2821735955&4294967295,w=A+(I<<17&4294967295|I>>>15),I=T+(_^w&(A^_))+E[7]+4249261313&4294967295,T=w+(I<<22&4294967295|I>>>10),I=_+(A^T&(w^A))+E[8]+1770035416&4294967295,_=T+(I<<7&4294967295|I>>>25),I=A+(w^_&(T^w))+E[9]+2336552879&4294967295,A=_+(I<<12&4294967295|I>>>20),I=w+(T^A&(_^T))+E[10]+4294925233&4294967295,w=A+(I<<17&4294967295|I>>>15),I=T+(_^w&(A^_))+E[11]+2304563134&4294967295,T=w+(I<<22&4294967295|I>>>10),I=_+(A^T&(w^A))+E[12]+1804603682&4294967295,_=T+(I<<7&4294967295|I>>>25),I=A+(w^_&(T^w))+E[13]+4254626195&4294967295,A=_+(I<<12&4294967295|I>>>20),I=w+(T^A&(_^T))+E[14]+2792965006&4294967295,w=A+(I<<17&4294967295|I>>>15),I=T+(_^w&(A^_))+E[15]+1236535329&4294967295,T=w+(I<<22&4294967295|I>>>10),I=_+(w^A&(T^w))+E[1]+4129170786&4294967295,_=T+(I<<5&4294967295|I>>>27),I=A+(T^w&(_^T))+E[6]+3225465664&4294967295,A=_+(I<<9&4294967295|I>>>23),I=w+(_^T&(A^_))+E[11]+643717713&4294967295,w=A+(I<<14&4294967295|I>>>18),I=T+(A^_&(w^A))+E[0]+3921069994&4294967295,T=w+(I<<20&4294967295|I>>>12),I=_+(w^A&(T^w))+E[5]+3593408605&4294967295,_=T+(I<<5&4294967295|I>>>27),I=A+(T^w&(_^T))+E[10]+38016083&4294967295,A=_+(I<<9&4294967295|I>>>23),I=w+(_^T&(A^_))+E[15]+3634488961&4294967295,w=A+(I<<14&4294967295|I>>>18),I=T+(A^_&(w^A))+E[4]+3889429448&4294967295,T=w+(I<<20&4294967295|I>>>12),I=_+(w^A&(T^w))+E[9]+568446438&4294967295,_=T+(I<<5&4294967295|I>>>27),I=A+(T^w&(_^T))+E[14]+3275163606&4294967295,A=_+(I<<9&4294967295|I>>>23),I=w+(_^T&(A^_))+E[3]+4107603335&4294967295,w=A+(I<<14&4294967295|I>>>18),I=T+(A^_&(w^A))+E[8]+1163531501&4294967295,T=w+(I<<20&4294967295|I>>>12),I=_+(w^A&(T^w))+E[13]+2850285829&4294967295,_=T+(I<<5&4294967295|I>>>27),I=A+(T^w&(_^T))+E[2]+4243563512&4294967295,A=_+(I<<9&4294967295|I>>>23),I=w+(_^T&(A^_))+E[7]+1735328473&4294967295,w=A+(I<<14&4294967295|I>>>18),I=T+(A^_&(w^A))+E[12]+2368359562&4294967295,T=w+(I<<20&4294967295|I>>>12),I=_+(T^w^A)+E[5]+4294588738&4294967295,_=T+(I<<4&4294967295|I>>>28),I=A+(_^T^w)+E[8]+2272392833&4294967295,A=_+(I<<11&4294967295|I>>>21),I=w+(A^_^T)+E[11]+1839030562&4294967295,w=A+(I<<16&4294967295|I>>>16),I=T+(w^A^_)+E[14]+4259657740&4294967295,T=w+(I<<23&4294967295|I>>>9),I=_+(T^w^A)+E[1]+2763975236&4294967295,_=T+(I<<4&4294967295|I>>>28),I=A+(_^T^w)+E[4]+1272893353&4294967295,A=_+(I<<11&4294967295|I>>>21),I=w+(A^_^T)+E[7]+4139469664&4294967295,w=A+(I<<16&4294967295|I>>>16),I=T+(w^A^_)+E[10]+3200236656&4294967295,T=w+(I<<23&4294967295|I>>>9),I=_+(T^w^A)+E[13]+681279174&4294967295,_=T+(I<<4&4294967295|I>>>28),I=A+(_^T^w)+E[0]+3936430074&4294967295,A=_+(I<<11&4294967295|I>>>21),I=w+(A^_^T)+E[3]+3572445317&4294967295,w=A+(I<<16&4294967295|I>>>16),I=T+(w^A^_)+E[6]+76029189&4294967295,T=w+(I<<23&4294967295|I>>>9),I=_+(T^w^A)+E[9]+3654602809&4294967295,_=T+(I<<4&4294967295|I>>>28),I=A+(_^T^w)+E[12]+3873151461&4294967295,A=_+(I<<11&4294967295|I>>>21),I=w+(A^_^T)+E[15]+530742520&4294967295,w=A+(I<<16&4294967295|I>>>16),I=T+(w^A^_)+E[2]+3299628645&4294967295,T=w+(I<<23&4294967295|I>>>9),I=_+(w^(T|~A))+E[0]+4096336452&4294967295,_=T+(I<<6&4294967295|I>>>26),I=A+(T^(_|~w))+E[7]+1126891415&4294967295,A=_+(I<<10&4294967295|I>>>22),I=w+(_^(A|~T))+E[14]+2878612391&4294967295,w=A+(I<<15&4294967295|I>>>17),I=T+(A^(w|~_))+E[5]+4237533241&4294967295,T=w+(I<<21&4294967295|I>>>11),I=_+(w^(T|~A))+E[12]+1700485571&4294967295,_=T+(I<<6&4294967295|I>>>26),I=A+(T^(_|~w))+E[3]+2399980690&4294967295,A=_+(I<<10&4294967295|I>>>22),I=w+(_^(A|~T))+E[10]+4293915773&4294967295,w=A+(I<<15&4294967295|I>>>17),I=T+(A^(w|~_))+E[1]+2240044497&4294967295,T=w+(I<<21&4294967295|I>>>11),I=_+(w^(T|~A))+E[8]+1873313359&4294967295,_=T+(I<<6&4294967295|I>>>26),I=A+(T^(_|~w))+E[15]+4264355552&4294967295,A=_+(I<<10&4294967295|I>>>22),I=w+(_^(A|~T))+E[6]+2734768916&4294967295,w=A+(I<<15&4294967295|I>>>17),I=T+(A^(w|~_))+E[13]+1309151649&4294967295,T=w+(I<<21&4294967295|I>>>11),I=_+(w^(T|~A))+E[4]+4149444226&4294967295,_=T+(I<<6&4294967295|I>>>26),I=A+(T^(_|~w))+E[11]+3174756917&4294967295,A=_+(I<<10&4294967295|I>>>22),I=w+(_^(A|~T))+E[2]+718787259&4294967295,w=A+(I<<15&4294967295|I>>>17),I=T+(A^(w|~_))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+_&4294967295,y.g[1]=y.g[1]+(w+(I<<21&4294967295|I>>>11))&4294967295,y.g[2]=y.g[2]+w&4294967295,y.g[3]=y.g[3]+A&4294967295}r.prototype.v=function(y,_){_===void 0&&(_=y.length);const T=_-this.blockSize,E=this.C;let w=this.h,A=0;for(;A<_;){if(w==0)for(;A<=T;)i(this,y,A),A+=this.blockSize;if(typeof y=="string"){for(;A<_;)if(E[w++]=y.charCodeAt(A++),w==this.blockSize){i(this,E),w=0;break}}else for(;A<_;)if(E[w++]=y[A++],w==this.blockSize){i(this,E),w=0;break}}this.h=w,this.o+=_},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var _=1;_<y.length-8;++_)y[_]=0;_=this.o*8;for(var T=y.length-8;T<y.length;++T)y[T]=_&255,_/=256;for(this.v(y),y=Array(16),_=0,T=0;T<4;++T)for(let E=0;E<32;E+=8)y[_++]=this.g[T]>>>E&255;return y};function s(y,_){var T=u;return Object.prototype.hasOwnProperty.call(T,y)?T[y]:T[y]=_(y)}function o(y,_){this.h=_;const T=[];let E=!0;for(let w=y.length-1;w>=0;w--){const A=y[w]|0;E&&A==_||(T[w]=A,E=!1)}this.g=T}var u={};function c(y){return-128<=y&&y<128?s(y,function(_){return new o([_|0],_<0?-1:0)}):new o([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return p;if(y<0)return D(d(-y));const _=[];let T=1;for(let E=0;y>=T;E++)_[E]=y/T|0,T*=4294967296;return new o(_,0)}function m(y,_){if(y.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(y.charAt(0)=="-")return D(m(y.substring(1),_));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=d(Math.pow(_,8));let E=p;for(let A=0;A<y.length;A+=8){var w=Math.min(8,y.length-A);const I=parseInt(y.substring(A,A+w),_);w<8?(w=d(Math.pow(_,w)),E=E.j(w).add(d(I))):(E=E.j(T),E=E.add(d(I)))}return E}var p=c(0),v=c(1),C=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();let y=0,_=1;for(let T=0;T<this.g.length;T++){const E=this.i(T);y+=(E>=0?E:4294967296+E)*_,_*=4294967296}return y},t.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(R(this))return"0";if(k(this))return"-"+D(this).toString(y);const _=d(Math.pow(y,6));var T=this;let E="";for(;;){const w=V(T,_).g;T=b(T,w.j(_));let A=((T.g.length>0?T.g[0]:T.h)>>>0).toString(y);if(T=w,R(T))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},t.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function R(y){if(y.h!=0)return!1;for(let _=0;_<y.g.length;_++)if(y.g[_]!=0)return!1;return!0}function k(y){return y.h==-1}t.l=function(y){return y=b(this,y),k(y)?-1:R(y)?0:1};function D(y){const _=y.g.length,T=[];for(let E=0;E<_;E++)T[E]=~y.g[E];return new o(T,~y.h).add(v)}t.abs=function(){return k(this)?D(this):this},t.add=function(y){const _=Math.max(this.g.length,y.g.length),T=[];let E=0;for(let w=0;w<=_;w++){let A=E+(this.i(w)&65535)+(y.i(w)&65535),I=(A>>>16)+(this.i(w)>>>16)+(y.i(w)>>>16);E=I>>>16,A&=65535,I&=65535,T[w]=I<<16|A}return new o(T,T[T.length-1]&-2147483648?-1:0)};function b(y,_){return y.add(D(_))}t.j=function(y){if(R(this)||R(y))return p;if(k(this))return k(y)?D(this).j(D(y)):D(D(this).j(y));if(k(y))return D(this.j(D(y)));if(this.l(C)<0&&y.l(C)<0)return d(this.m()*y.m());const _=this.g.length+y.g.length,T=[];for(var E=0;E<2*_;E++)T[E]=0;for(E=0;E<this.g.length;E++)for(let w=0;w<y.g.length;w++){const A=this.i(E)>>>16,I=this.i(E)&65535,Ce=y.i(w)>>>16,Ye=y.i(w)&65535;T[2*E+2*w]+=I*Ye,g(T,2*E+2*w),T[2*E+2*w+1]+=A*Ye,g(T,2*E+2*w+1),T[2*E+2*w+1]+=I*Ce,g(T,2*E+2*w+1),T[2*E+2*w+2]+=A*Ce,g(T,2*E+2*w+2)}for(y=0;y<_;y++)T[y]=T[2*y+1]<<16|T[2*y];for(y=_;y<2*_;y++)T[y]=0;return new o(T,0)};function g(y,_){for(;(y[_]&65535)!=y[_];)y[_+1]+=y[_]>>>16,y[_]&=65535,_++}function S(y,_){this.g=y,this.h=_}function V(y,_){if(R(_))throw Error("division by zero");if(R(y))return new S(p,p);if(k(y))return _=V(D(y),_),new S(D(_.g),D(_.h));if(k(_))return _=V(y,D(_)),new S(D(_.g),_.h);if(y.g.length>30){if(k(y)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var T=v,E=_;E.l(y)<=0;)T=j(T),E=j(E);var w=F(T,1),A=F(E,1);for(E=F(E,2),T=F(T,2);!R(E);){var I=A.add(E);I.l(y)<=0&&(w=w.add(T),A=I),E=F(E,1),T=F(T,1)}return _=b(y,w.j(_)),new S(w,_)}for(w=p;y.l(_)>=0;){for(T=Math.max(1,Math.floor(y.m()/_.m())),E=Math.ceil(Math.log(T)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=d(T),I=A.j(_);k(I)||I.l(y)>0;)T-=E,A=d(T),I=A.j(_);R(A)&&(A=v),w=w.add(A),y=b(y,I)}return new S(w,y)}t.B=function(y){return V(this,y).h},t.and=function(y){const _=Math.max(this.g.length,y.g.length),T=[];for(let E=0;E<_;E++)T[E]=this.i(E)&y.i(E);return new o(T,this.h&y.h)},t.or=function(y){const _=Math.max(this.g.length,y.g.length),T=[];for(let E=0;E<_;E++)T[E]=this.i(E)|y.i(E);return new o(T,this.h|y.h)},t.xor=function(y){const _=Math.max(this.g.length,y.g.length),T=[];for(let E=0;E<_;E++)T[E]=this.i(E)^y.i(E);return new o(T,this.h^y.h)};function j(y){const _=y.g.length+1,T=[];for(let E=0;E<_;E++)T[E]=y.i(E)<<1|y.i(E-1)>>>31;return new o(T,y.h)}function F(y,_){const T=_>>5;_%=32;const E=y.g.length-T,w=[];for(let A=0;A<E;A++)w[A]=_>0?y.i(A+T)>>>_|y.i(A+T+1)<<32-_:y.i(A+T);return new o(w,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,pv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,jr=o}).apply(typeof jm<"u"?jm:typeof self<"u"?self:typeof window<"u"?window:{});var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mv,Ys,gv,Ya,Ad,yv,vv,_v;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ra=="object"&&Ra];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var x=0;x<a.length-1;x++){var N=a[x];if(!(N in f))break e;f=f[N]}a=a[a.length-1],x=f[a],h=h(x),h!=x&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var f=[],x;for(x in h)Object.prototype.hasOwnProperty.call(h,x)&&f.push([x,h[x]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function c(a,h,f){return a.call.apply(a.bind,arguments)}function d(a,h,f){return d=c,d.apply(null,arguments)}function m(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var x=f.slice();return x.push.apply(x,arguments),a.apply(this,x)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(x,N,M){for(var q=Array(arguments.length-2),ve=2;ve<arguments.length;ve++)q[ve-2]=arguments[ve];return h.prototype[N].apply(x,q)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const h=a.length;if(h>0){const f=Array(h);for(let x=0;x<h;x++)f[x]=a[x];return f}return[]}function R(a,h){for(let x=1;x<arguments.length;x++){const N=arguments[x];var f=typeof N;if(f=f!="object"?f:N?Array.isArray(N)?"array":f:"null",f=="array"||f=="object"&&typeof N.length=="number"){f=a.length||0;const M=N.length||0;a.length=f+M;for(let q=0;q<M;q++)a[f+q]=N[q]}else a.push(N)}}class k{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function b(){var a=y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class g{constructor(){this.h=this.g=null}add(h,f){const x=S.get();x.set(h,f),this.h?this.h.next=x:this.g=x,this.h=x}}var S=new k(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,y=new g,_=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=b();){try{a.h.call(a.g)}catch(f){D(f)}var h=S;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Ce(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Ce,w),Ce.prototype.init=function(a,h){const f=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ce.Z.h.call(this)},Ce.prototype.h=function(){Ce.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ye="closure_listenable_"+(Math.random()*1e6|0),et=0;function rn(a,h,f,x,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!x,this.ha=N,this.key=++et,this.da=this.fa=!1}function K(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function z(a,h,f){for(const x in a)h.call(f,a[x],x,a)}function H(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function O(a){const h={};for(const f in a)h[f]=a[f];return h}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function G(a,h){let f,x;for(let N=1;N<arguments.length;N++){x=arguments[N];for(f in x)a[f]=x[f];for(let M=0;M<L.length;M++)f=L[M],Object.prototype.hasOwnProperty.call(x,f)&&(a[f]=x[f])}}function ue(a){this.src=a,this.g={},this.h=0}ue.prototype.add=function(a,h,f,x,N){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const q=ce(a,h,x,N);return q>-1?(h=a[q],f||(h.fa=!1)):(h=new rn(h,this.src,M,!!x,N),h.fa=f,a.push(h)),h};function ge(a,h){const f=h.type;if(f in a.g){var x=a.g[f],N=Array.prototype.indexOf.call(x,h,void 0),M;(M=N>=0)&&Array.prototype.splice.call(x,N,1),M&&(K(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ce(a,h,f,x){for(let N=0;N<a.length;++N){const M=a[N];if(!M.da&&M.listener==h&&M.capture==!!f&&M.ha==x)return N}return-1}var Q="closure_lm_"+(Math.random()*1e6|0),ie={};function se(a,h,f,x,N){if(Array.isArray(h)){for(let M=0;M<h.length;M++)se(a,h[M],f,x,N);return null}return f=ne(f),a&&a[Ye]?a.J(h,f,u(x)?!!x.capture:!1,N):ee(a,h,f,!1,x,N)}function ee(a,h,f,x,N,M){if(!h)throw Error("Invalid event type");const q=u(N)?!!N.capture:!!N;let ve=Y(a);if(ve||(a[Q]=ve=new ue(a)),f=ve.add(h,f,x,q,M),f.proxy)return f;if(x=he(),f.proxy=x,x.src=a,x.listener=f,a.addEventListener)A||(N=q),N===void 0&&(N=!1),a.addEventListener(h.toString(),x,N);else if(a.attachEvent)a.attachEvent(P(h.toString()),x);else if(a.addListener&&a.removeListener)a.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return f}function he(){function a(f){return h.call(a.src,a.listener,f)}const h=W;return a}function fe(a,h,f,x,N){if(Array.isArray(h))for(var M=0;M<h.length;M++)fe(a,h[M],f,x,N);else x=u(x)?!!x.capture:!!x,f=ne(f),a&&a[Ye]?(a=a.i,M=String(h).toString(),M in a.g&&(h=a.g[M],f=ce(h,f,x,N),f>-1&&(K(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[M],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ce(h,f,x,N)),(f=a>-1?h[a]:null)&&xe(f))}function xe(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ye])ge(h.i,a);else{var f=a.type,x=a.proxy;h.removeEventListener?h.removeEventListener(f,x,a.capture):h.detachEvent?h.detachEvent(P(f),x):h.addListener&&h.removeListener&&h.removeListener(x),(f=Y(h))?(ge(f,a),f.h==0&&(f.src=null,h[Q]=null)):K(a)}}}function P(a){return a in ie?ie[a]:ie[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new Ce(h,this);const f=a.listener,x=a.ha||a.src;a.fa&&xe(a),a=f.call(x,h)}return a}function Y(a){return a=a[Q],a instanceof ue?a:null}var te="__closure_events_fn_"+(Math.random()*1e9>>>0);function ne(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function X(){E.call(this),this.i=new ue(this),this.M=this,this.G=null}p(X,E),X.prototype[Ye]=!0,X.prototype.removeEventListener=function(a,h,f,x){fe(this,a,h,f,x)};function ae(a,h){var f,x=a.G;if(x)for(f=[];x;x=x.G)f.push(x);if(a=a.M,x=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var N=h;h=new w(x,a),G(h,N)}N=!0;let M,q;if(f)for(q=f.length-1;q>=0;q--)M=h.g=f[q],N=je(M,x,!0,h)&&N;if(M=h.g=a,N=je(M,x,!0,h)&&N,N=je(M,x,!1,h)&&N,f)for(q=0;q<f.length;q++)M=h.g=f[q],N=je(M,x,!1,h)&&N}X.prototype.N=function(){if(X.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let x=0;x<f.length;x++)K(f[x]);delete a.g[h],a.h--}}this.G=null},X.prototype.J=function(a,h,f,x){return this.i.add(String(a),h,!1,f,x)},X.prototype.K=function(a,h,f,x){return this.i.add(String(a),h,!0,f,x)};function je(a,h,f,x){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let M=0;M<h.length;++M){const q=h[M];if(q&&!q.da&&q.capture==f){const ve=q.listener,at=q.ha||q.src;q.fa&&ge(a.i,q),N=ve.call(at,x)!==!1&&N}}return N&&!x.defaultPrevented}function Ae(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Kt(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,Kt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class sn extends E{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Kt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(a){E.call(this),this.h=a,this.g={}}p(Dt,E);var Re=[];function Le(a){z(a.g,function(h,f){this.g.hasOwnProperty(f)&&xe(h)},a),a.g={}}Dt.prototype.N=function(){Dt.Z.N.call(this),Le(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Se=o.JSON.stringify,St=o.JSON.parse,Xe=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ve(){}function bt(){}var Fe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Un(){w.call(this,"d")}p(Un,w);function ki(){w.call(this,"c")}p(ki,w);var $n={},Qr=null;function Wn(){return Qr=Qr||new X}$n.Ia="serverreachability";function Pi(a){w.call(this,$n.Ia,a)}p(Pi,w);function ke(a){const h=Wn();ae(h,new Pi(h))}$n.STAT_EVENT="statevent";function ht(a,h){w.call(this,$n.STAT_EVENT,a),this.stat=h}p(ht,w);function _e(a){const h=Wn();ae(h,new ht(h,a))}$n.Ja="timingevent";function Ft(a,h){w.call(this,$n.Ja,a),this.size=h}p(Ft,w);function on(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function gn(){this.g=!0}gn.prototype.ua=function(){this.g=!1};function ur(a,h,f,x,N,M){a.info(function(){if(a.g)if(M){var q="",ve=M.split("&");for(let Me=0;Me<ve.length;Me++){var at=ve[Me].split("=");if(at.length>1){const ft=at[0];at=at[1];const Cn=ft.split("_");q=Cn.length>=2&&Cn[1]=="type"?q+(ft+"="+at+"&"):q+(ft+"=redacted&")}}}else q=null;else q=M;return"XMLHTTP REQ ("+x+") [attempt "+N+"]: "+h+`
`+f+`
`+q})}function bs(a,h,f,x,N,M,q){a.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+N+"]: "+h+`
`+f+`
`+M+" "+q})}function yn(a,h,f,x){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+v_(a,f)+(x?" "+x:"")})}function ra(a,h){a.info(function(){return"TIMEOUT: "+h})}gn.prototype.info=function(){};function v_(a,h){if(!a.g)return h;if(!h)return null;try{const M=JSON.parse(h);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var f=M[a];if(!(f.length<2)){var x=f[1];if(Array.isArray(x)&&!(x.length<1)){var N=x[0];if(N!="noop"&&N!="stop"&&N!="close")for(let q=1;q<x.length;q++)x[q]=""}}}}return Se(M)}catch{return h}}var ia={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Af={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kf;function Au(){}p(Au,Ve),Au.prototype.g=function(){return new XMLHttpRequest},kf=new Au;function Is(a){return encodeURIComponent(String(a))}function __(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function cr(a,h,f,x){this.j=a,this.i=h,this.l=f,this.S=x||1,this.V=new Dt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pf}function Pf(){this.i=null,this.g="",this.h=!1}var Rf={},ku={};function Pu(a,h,f){a.M=1,a.A=oa(In(h)),a.u=f,a.R=!0,Nf(a,null)}function Nf(a,h){a.F=Date.now(),sa(a),a.B=In(a.A);var f=a.B,x=a.S;Array.isArray(x)||(x=[String(x)]),Hf(f.i,"t",x),a.C=0,f=a.j.L,a.h=new Pf,a.g=up(a.j,f?h:null,!a.u),a.P>0&&(a.O=new sn(d(a.Y,a,a.g),a.P)),h=a.V,f=a.g,x=a.ba;var N="readystatechange";Array.isArray(N)||(N&&(Re[0]=N.toString()),N=Re);for(let M=0;M<N.length;M++){const q=se(f,N[M],x||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.J?O(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),ke(),ur(a.i,a.v,a.B,a.l,a.S,a.u)}cr.prototype.ba=function(a){a=a.target;const h=this.O;h&&fr(a)==3?h.j():this.Y(a)},cr.prototype.Y=function(a){try{if(a==this.g)e:{const ve=fr(this.g),at=this.g.ya(),Me=this.g.ca();if(!(ve<3)&&(ve!=3||this.g&&(this.h.h||this.g.la()||Jf(this.g)))){this.K||ve!=4||at==7||(at==8||Me<=0?ke(3):ke(2)),Ru(this);var h=this.g.ca();this.X=h;var f=x_(this);if(this.o=h==200,bs(this.i,this.v,this.B,this.l,this.S,ve,h),this.o){if(this.U&&!this.L){t:{if(this.g){var x,N=this.g;if((x=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(x)){var M=x;break t}}M=null}if(a=M)yn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nu(this,a);else{this.o=!1,this.m=3,_e(12),Yr(this),Cs(this);break e}}if(this.R){a=!0;let ft;for(;!this.K&&this.C<f.length;)if(ft=w_(this,f),ft==ku){ve==4&&(this.m=4,_e(14),a=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Rf){this.m=4,_e(15),yn(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else yn(this.i,this.l,ft,null),Nu(this,ft);if(jf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ve!=4||f.length!=0||this.h.h||(this.m=1,_e(16),a=!1),this.o=this.o&&a,!a)yn(this.i,this.l,f,"[Invalid Chunked Response]"),Yr(this),Cs(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),zu(q),q.P=!0,_e(11))}}else yn(this.i,this.l,f,null),Nu(this,f);ve==4&&Yr(this),this.o&&!this.K&&(ve==4?sp(this.j,this):(this.o=!1,sa(this)))}else V_(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,_e(12)):(this.m=0,_e(13)),Yr(this),Cs(this)}}}catch{}finally{}};function x_(a){if(!jf(a))return a.g.la();const h=Jf(a.g);if(h==="")return"";let f="";const x=h.length,N=fr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Yr(a),Cs(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<x;M++)a.h.h=!0,f+=a.h.i.decode(h[M],{stream:!(N&&M==x-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function jf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function w_(a,h){var f=a.C,x=h.indexOf(`
`,f);return x==-1?ku:(f=Number(h.substring(f,x)),isNaN(f)?Rf:(x+=1,x+f>h.length?ku:(h=h.slice(x,x+f),a.C=x+f,h)))}cr.prototype.cancel=function(){this.K=!0,Yr(this)};function sa(a){a.T=Date.now()+a.H,Df(a,a.H)}function Df(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=on(d(a.aa,a),h)}function Ru(a){a.D&&(o.clearTimeout(a.D),a.D=null)}cr.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ra(this.i,this.B),this.M!=2&&(ke(),_e(17)),Yr(this),this.m=2,Cs(this)):Df(this,this.T-a)};function Cs(a){a.j.I==0||a.K||sp(a.j,a)}function Yr(a){Ru(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Le(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function Nu(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||ju(f.h,a))){if(!a.L&&ju(f.h,a)&&f.I==3){try{var x=f.Ba.g.parse(h)}catch{x=null}if(Array.isArray(x)&&x.length==3){var N=x;if(N[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)da(f),ua(f);else break e;Fu(f),_e(18)}}else f.xa=N[1],0<f.xa-f.K&&N[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=on(d(f.Va,f),6e3));Of(f.h)<=1&&f.ta&&(f.ta=void 0)}else Jr(f,11)}else if((a.L||f.g==a)&&da(f),!I(h))for(N=f.Ba.g.parse(h),h=0;h<N.length;h++){let Me=N[h];const ft=Me[0];if(!(ft<=f.K))if(f.K=ft,Me=Me[1],f.I==2)if(Me[0]=="c"){f.M=Me[1],f.ba=Me[2];const Cn=Me[3];Cn!=null&&(f.ka=Cn,f.j.info("VER="+f.ka));const Zr=Me[4];Zr!=null&&(f.za=Zr,f.j.info("SVER="+f.za));const pr=Me[5];pr!=null&&typeof pr=="number"&&pr>0&&(x=1.5*pr,f.O=x,f.j.info("backChannelRequestTimeoutMs_="+x)),x=f;const mr=a.g;if(mr){const fa=mr.g?mr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fa){var M=x.h;M.g||fa.indexOf("spdy")==-1&&fa.indexOf("quic")==-1&&fa.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Du(M,M.h),M.h=null))}if(x.G){const Bu=mr.g?mr.g.getResponseHeader("X-HTTP-Session-Id"):null;Bu&&(x.wa=Bu,ze(x.J,x.G,Bu))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),x=f;var q=a;if(x.na=lp(x,x.L?x.ba:null,x.W),q.L){Lf(x.h,q);var ve=q,at=x.O;at&&(ve.H=at),ve.D&&(Ru(ve),sa(ve)),x.g=q}else rp(x);f.i.length>0&&ca(f)}else Me[0]!="stop"&&Me[0]!="close"||Jr(f,7);else f.I==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Jr(f,7):Lu(f):Me[0]!="noop"&&f.l&&f.l.qa(Me),f.A=0)}}ke(4)}catch{}}var E_=class{constructor(a,h){this.g=a,this.map=h}};function Vf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Of(a){return a.h?1:a.g?a.g.size:0}function ju(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Du(a,h){a.g?a.g.add(h):a.h=h}function Lf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Vf.prototype.cancel=function(){if(this.i=Ff(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ff(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return C(a.i)}var zf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T_(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const x=a[f].indexOf("=");let N,M=null;x>=0?(N=a[f].substring(0,x),M=a[f].substring(x+1)):N=a[f],h(N,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function dr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof dr?(this.l=a.l,As(this,a.j),this.o=a.o,this.g=a.g,ks(this,a.u),this.h=a.h,Vu(this,qf(a.i)),this.m=a.m):a&&(h=String(a).match(zf))?(this.l=!1,As(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),ks(this,h[4]),this.h=Ps(h[5]||"",!0),Vu(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.l=!1,this.i=new Ns(null,this.l))}dr.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Rs(h,Bf,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Rs(h,Bf,!0),"@"),a.push(Is(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Rs(f,f.charAt(0)=="/"?I_:b_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Rs(f,A_)),a.join("")},dr.prototype.resolve=function(a){const h=In(this);let f=!!a.j;f?As(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var x=a.h;if(f)ks(h,a.u);else if(f=!!a.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var N=h.h.lastIndexOf("/");N!=-1&&(x=h.h.slice(0,N+1)+x)}if(N=x,N==".."||N==".")x="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){x=N.lastIndexOf("/",0)==0,N=N.split("/");const M=[];for(let q=0;q<N.length;){const ve=N[q++];ve=="."?x&&q==N.length&&M.push(""):ve==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),x&&q==N.length&&M.push("")):(M.push(ve),x=!0)}x=M.join("/")}else x=N}return f?h.h=x:f=a.i.toString()!=="",f?Vu(h,qf(a.i)):f=!!a.m,f&&(h.m=a.m),h};function In(a){return new dr(a)}function As(a,h,f){a.j=f?Ps(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ks(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Vu(a,h,f){h instanceof Ns?(a.i=h,k_(a.i,a.l)):(f||(h=Rs(h,C_)),a.i=new Ns(h,a.l))}function ze(a,h,f){a.i.set(h,f)}function oa(a){return ze(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ps(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,S_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function S_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Bf=/[#\/\?@]/g,b_=/[#\?:]/g,I_=/[#\?]/g,C_=/[#\?@]/g,A_=/#/g;function Ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xr(a){a.g||(a.g=new Map,a.h=0,a.i&&T_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ns.prototype,t.add=function(a,h){Xr(this),this.i=null,a=Ri(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Uf(a,h){Xr(a),h=Ri(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $f(a,h){return Xr(a),h=Ri(a,h),a.g.has(h)}t.forEach=function(a,h){Xr(this),this.g.forEach(function(f,x){f.forEach(function(N){a.call(h,N,x,this)},this)},this)};function Wf(a,h){Xr(a);let f=[];if(typeof h=="string")$f(a,h)&&(f=f.concat(a.g.get(Ri(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Xr(this),this.i=null,a=Ri(this,a),$f(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Wf(this,a),a.length>0?String(a[0]):h):h};function Hf(a,h,f){Uf(a,h),f.length>0&&(a.i=null,a.g.set(Ri(a,h),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let x=0;x<h.length;x++){var f=h[x];const N=Is(f);f=Wf(this,f);for(let M=0;M<f.length;M++){let q=N;f[M]!==""&&(q+="="+Is(f[M])),a.push(q)}}return this.i=a.join("&")};function qf(a){const h=new Ns;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ri(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function k_(a,h){h&&!a.j&&(Xr(a),a.i=null,a.g.forEach(function(f,x){const N=x.toLowerCase();x!=N&&(Uf(this,x),Hf(this,N,f))},a)),a.j=h}function P_(a,h){const f=new gn;if(o.Image){const x=new Image;x.onload=m(hr,f,"TestLoadImage: loaded",!0,h,x),x.onerror=m(hr,f,"TestLoadImage: error",!1,h,x),x.onabort=m(hr,f,"TestLoadImage: abort",!1,h,x),x.ontimeout=m(hr,f,"TestLoadImage: timeout",!1,h,x),o.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=a}else h(!1)}function R_(a,h){const f=new gn,x=new AbortController,N=setTimeout(()=>{x.abort(),hr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:x.signal}).then(M=>{clearTimeout(N),M.ok?hr(f,"TestPingServer: ok",!0,h):hr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),hr(f,"TestPingServer: error",!1,h)})}function hr(a,h,f,x,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),x(f)}catch{}}function N_(){this.g=new Xe}function Mu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Mu,Ve),Mu.prototype.g=function(){return new aa(this.i,this.h)};function aa(a,h){X.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(aa,X),t=aa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ds(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?js(this):Ds(this),this.readyState==3&&Gf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,js(this))},t.Na=function(a){this.g&&(this.response=a,js(this))},t.ga=function(){this.g&&js(this)};function js(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ds(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(aa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Kf(a){let h="";return z(a,function(f,x){h+=x,h+=":",h+=f,h+=`\r
`}),h}function Ou(a,h,f){e:{for(x in f){var x=!1;break e}x=!0}x||(f=Kf(f),typeof a=="string"?f!=null&&Is(f):ze(a,h,f))}function Je(a){X.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Je,X);var j_=/^https?$/i,D_=["POST","PUT"];t=Je.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kf.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(M){Qf(this,M);return}if(a=f||"",f=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var N in x)f.set(N,x[N]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const M of x.keys())f.set(M,x.get(M));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),N=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(D_,h,void 0)>=0)||x||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of f)this.g.setRequestHeader(M,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){Qf(this,M)}};function Qf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Yf(a),la(a)}function Yf(a){a.A||(a.A=!0,ae(a,"complete"),ae(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,ae(this,"complete"),ae(this,"abort"),la(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),la(this,!0)),Je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Xf(this):this.Xa())},t.Xa=function(){Xf(this)};function Xf(a){if(a.h&&typeof s<"u"){if(a.v&&fr(a)==4)setTimeout(a.Ca.bind(a),0);else if(ae(a,"readystatechange"),fr(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var x;if(x=M===0){let q=String(a.D).match(zf)[1]||null;!q&&o.self&&o.self.location&&(q=o.self.location.protocol.slice(0,-1)),x=!j_.test(q?q.toLowerCase():"")}f=x}if(f)ae(a,"complete"),ae(a,"success");else{a.o=6;try{var N=fr(a)>2?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.ca()+"]",Yf(a)}}finally{la(a)}}}}function la(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||ae(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function fr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return fr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),St(h)}};function Jf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function V_(a){const h={};a=(a.g&&fr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<a.length;x++){if(I(a[x]))continue;var f=__(a[x]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=h[N]||[];h[N]=M,M.push(f)}H(h,function(x){return x.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Zf(a){this.za=0,this.i=[],this.j=new gn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vs("baseRetryDelayMs",5e3,a),this.Za=Vs("retryDelaySeedMs",1e4,a),this.Ta=Vs("forwardChannelMaxRetries",2,a),this.va=Vs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Vf(a&&a.concurrentRequestLimit),this.Ba=new N_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Zf.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,x){_e(0),this.W=a,this.H=h||{},f&&x!==void 0&&(this.H.OSID=f,this.H.OAID=x),this.F=this.X,this.J=lp(this,null,this.W),ca(this)};function Lu(a){if(ep(a),a.I==3){var h=a.V++,f=In(a.J);if(ze(f,"SID",a.M),ze(f,"RID",h),ze(f,"TYPE","terminate"),Ms(a,f),h=new cr(a,a.j,h),h.M=2,h.A=oa(In(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=up(h.j,null),h.g.ea(h.A)),h.F=Date.now(),sa(h)}ap(a)}function ua(a){a.g&&(zu(a),a.g.cancel(),a.g=null)}function ep(a){ua(a),a.v&&(o.clearTimeout(a.v),a.v=null),da(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ca(a){if(!Mf(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||_(),F||(j(),F=!0),y.add(h,a),a.D=0}}function M_(a,h){return Of(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=on(d(a.Ea,a,h),op(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const N=new cr(this,this.j,a);let M=this.o;if(this.U&&(M?(M=O(M),G(M,this.U)):M=this.U),this.u!==null||this.R||(N.J=M,M=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var x=this.i[f];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(h+=x,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=np(this,N,h),f=In(this.J),ze(f,"RID",a),ze(f,"CVER",22),this.G&&ze(f,"X-HTTP-Session-Id",this.G),Ms(this,f),M&&(this.R?h="headers="+Is(Kf(M))+"&"+h:this.u&&Ou(f,this.u,M)),Du(this.h,N),this.Ra&&ze(f,"TYPE","init"),this.S?(ze(f,"$req",h),ze(f,"SID","null"),N.U=!0,Pu(N,f,null)):Pu(N,f,h),this.I=2}}else this.I==3&&(a?tp(this,a):this.i.length==0||Mf(this.h)||tp(this))};function tp(a,h){var f;h?f=h.l:f=a.V++;const x=In(a.J);ze(x,"SID",a.M),ze(x,"RID",f),ze(x,"AID",a.K),Ms(a,x),a.u&&a.o&&Ou(x,a.u,a.o),f=new cr(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=np(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Du(a.h,f),Pu(f,x,h)}function Ms(a,h){a.H&&z(a.H,function(f,x){ze(h,x,f)}),a.l&&z({},function(f,x){ze(h,x,f)})}function np(a,h,f){f=Math.min(a.i.length,f);const x=a.l?d(a.l.Ka,a.l,a):null;e:{var N=a.i;let ve=-1;for(;;){const at=["count="+f];ve==-1?f>0?(ve=N[0].g,at.push("ofs="+ve)):ve=0:at.push("ofs="+ve);let Me=!0;for(let ft=0;ft<f;ft++){var M=N[ft].g;const Cn=N[ft].map;if(M-=ve,M<0)ve=Math.max(0,N[ft].g-100),Me=!1;else try{M="req"+M+"_"||"";try{var q=Cn instanceof Map?Cn:Object.entries(Cn);for(const[Zr,pr]of q){let mr=pr;u(pr)&&(mr=Se(pr)),at.push(M+Zr+"="+encodeURIComponent(mr))}}catch(Zr){throw at.push(M+"type="+encodeURIComponent("_badmap")),Zr}}catch{x&&x(Cn)}}if(Me){q=at.join("&");break e}}q=void 0}return a=a.i.splice(0,f),h.G=a,q}function rp(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||_(),F||(j(),F=!0),y.add(h,a),a.A=0}}function Fu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=on(d(a.Da,a),op(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ip(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=on(d(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,_e(10),ua(this),ip(this))};function zu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ip(a){a.g=new cr(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=In(a.na);ze(h,"RID","rpc"),ze(h,"SID",a.M),ze(h,"AID",a.K),ze(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ze(h,"TO",a.ia),ze(h,"TYPE","xmlhttp"),Ms(a,h),a.u&&a.o&&Ou(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=oa(In(h)),f.u=null,f.R=!0,Nf(f,a)}t.Va=function(){this.C!=null&&(this.C=null,ua(this),Fu(this),_e(19))};function da(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function sp(a,h){var f=null;if(a.g==h){da(a),zu(a),a.g=null;var x=2}else if(ju(a.h,h))f=h.G,Lf(a.h,h),x=1;else return;if(a.I!=0){if(h.o)if(x==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var N=a.D;x=Wn(),ae(x,new Ft(x,f)),ca(a)}else rp(a);else if(N=h.m,N==3||N==0&&h.X>0||!(x==1&&M_(a,h)||x==2&&Fu(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Jr(a,5);break;case 4:Jr(a,10);break;case 3:Jr(a,6);break;default:Jr(a,2)}}}function op(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Jr(a,h){if(a.j.info("Error code "+h),h==2){var f=d(a.bb,a),x=a.Ua;const N=!x;x=new dr(x||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||As(x,"https"),oa(x),N?P_(x.toString(),f):R_(x.toString(),f)}else _e(2);a.I=0,a.l&&a.l.pa(h),ap(a),ep(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),_e(2)):(this.j.info("Failed to ping google.com"),_e(1))};function ap(a){if(a.I=0,a.ja=[],a.l){const h=Ff(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function lp(a,h,f){var x=f instanceof dr?In(f):new dr(f);if(x.g!="")h&&(x.g=h+"."+x.g),ks(x,x.u);else{var N=o.location;x=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const M=new dr(null);x&&As(M,x),h&&(M.g=h),N&&ks(M,N),f&&(M.h=f),x=M}return f=a.G,h=a.wa,f&&h&&ze(x,f,h),ze(x,"VER",a.ka),Ms(a,x),x}function up(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Je(new Mu({ab:f})):new Je(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cp(){}t=cp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ha(){}ha.prototype.g=function(a,h){return new Qt(a,h)};function Qt(a,h){X.call(this),this.g=new Zf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ni(this)}p(Qt,X),Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Lu(this.g)},Qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=Se(a),a=f);h.i.push(new E_(h.Ya++,a)),h.I==3&&ca(h)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Lu(this.g),delete this.g,Qt.Z.N.call(this)};function dp(a){Un.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(dp,Un);function hp(){ki.call(this),this.status=1}p(hp,ki);function Ni(a){this.g=a}p(Ni,cp),Ni.prototype.ra=function(){ae(this.g,"a")},Ni.prototype.qa=function(a){ae(this.g,new dp(a))},Ni.prototype.pa=function(a){ae(this.g,new hp)},Ni.prototype.oa=function(){ae(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,_v=function(){return new ha},vv=function(){return Wn()},yv=$n,Ad={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ia.NO_ERROR=0,ia.TIMEOUT=8,ia.HTTP_ERROR=6,Ya=ia,Af.COMPLETE="complete",gv=Af,bt.EventType=Fe,Fe.OPEN="a",Fe.CLOSE="b",Fe.ERROR="c",Fe.MESSAGE="d",X.prototype.listen=X.prototype.J,Ys=bt,Je.prototype.listenOnce=Je.prototype.K,Je.prototype.getLastError=Je.prototype.Ha,Je.prototype.getLastErrorCode=Je.prototype.ya,Je.prototype.getStatus=Je.prototype.ca,Je.prototype.getResponseJson=Je.prototype.La,Je.prototype.getResponseText=Je.prototype.la,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Fa,mv=Je}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="12.11.0";function KT(t){ws=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new av("@firebase/firestore");function Di(){return vi.logLevel}function J(t,...e){if(vi.logLevel<=Ie.DEBUG){const n=e.map(Bh);vi.debug(`Firestore (${ws}): ${t}`,...n)}}function ir(t,...e){if(vi.logLevel<=Ie.ERROR){const n=e.map(Bh);vi.error(`Firestore (${ws}): ${t}`,...n)}}function _i(t,...e){if(vi.logLevel<=Ie.WARN){const n=e.map(Bh);vi.warn(`Firestore (${ws}): ${t}`,...n)}}function Bh(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,xv(t,r,n)}function xv(t,e,n){let r=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ir(r),new Error(r)}function Ne(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||xv(e,i,r)}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Ii{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}}class YT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XT{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ci,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ci)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string",31837,{l:r}),new wv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string",2055,{h:e}),new kt(e)}}class JT{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ZT{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JT(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,NT(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ne(this.o===void 0,3512);const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Dm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=t2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function kd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return _c(i)===_c(s)?Ee(i,s):_c(i)?1:-1}return Ee(t.length,e.length)}const n2=55296,r2=57343;function _c(t){const e=t.charCodeAt(0);return e>=n2&&e<=r2}function hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="__name__";class Pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Pn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ee(e.length,n.length)}static compareSegments(e,n){const r=Pn.isNumericId(e),i=Pn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):kd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jr.fromString(e.substring(4,e.length-2))}}class Ue extends Pn{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const i2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Pn{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return i2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vm}static keyField(){return new xt([Vm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new oe(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new oe(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else u==="`"?(o=!o,i++):u!=="."||o?(r+=u,i++):(s(),i++)}if(s(),o)throw new oe(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Ue.fromString(e))}static fromName(e){return new le(Ue.fromString(e).popFirst(5))}static empty(){return new le(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t,e,n){if(!n)throw new oe(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function s2(t,e,n,r){if(e===!0&&r===!0)throw new oe(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Mm(t){if(!le.isDocumentKey(t))throw new oe(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Om(t){if(le.isDocumentKey(t))throw new oe(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tv(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function $h(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function Vn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$h(t);throw new oe(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){const n={typeString:t};return e&&(n.value=e),n}function Jo(t,e){if(!Tv(t))throw new oe(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new oe(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=-62135596800,Fm=1e6;class $e{static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Fm);return new $e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Lm)throw new oe(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fm}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:$e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jo(e,$e._jsonSchema))return new $e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Lm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}$e._jsonSchemaVersion="firestore/timestamp/1.0",$e._jsonSchema={type:st("string",$e._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new $e(0,0))}static max(){return new pe(new $e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=-1;function o2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new $e(n+1,0):new $e(n,r));return new Lr(i,le.empty(),e)}function a2(t){return new Lr(t.readTime,t.key,Do)}class Lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Lr(pe.min(),le.empty(),Do)}static max(){return new Lr(pe.max(),le.empty(),Do)}}function l2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==u2)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(u=>{++i,u.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let u=0;for(let c=0;c<s;c++){const d=c;n(e[d]).next(m=>{o[d]=m,++u,u===s&&r(o)},m=>i(m))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function d2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ts(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lu.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=-1;function uu(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function h2(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="";function f2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=zm(e)),e=p2(t.get(n),e);return zm(e)}function p2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Sv:n+="";break;default:n+=s}}return n}function zm(t){return t+Sv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Na(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Na(this.root,e,this.comparator,!1)}getReverseIterator(){return new Na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Na(this.root,e,this.comparator,!0)}}class Na{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_t.RED,this.left=i??_t.EMPTY,this.right=s??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Um(this.data.getIterator())}getIteratorFrom(e){return new Um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new dt(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Iv("Invalid base64 string: "+s):s}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const m2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(Ne(!!t,39018),typeof t=="string"){let e=0;const n=m2.exec(t);if(Ne(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="server_timestamp",Av="__type__",kv="__previous_value__",Pv="__local_write_time__";function Hh(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Av])==null?void 0:r.stringValue)===Cv}function cu(t){const e=t.mapValue.fields[kv];return Hh(e)?cu(e):e}function Vo(t){const e=Fr(t.mapValue.fields[Pv].timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r,i,s,o,u,c,d,m,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=p}}const Pl="(default)";class Mo{constructor(e,n){this.projectId=e,this.database=n||Pl}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database===Pl}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}function y2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new oe(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="__type__",v2="__max__",ja={mapValue:{}},Nv="__vector__",Rl="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hh(t)?4:x2(t)?9007199254740991:_2(t)?10:11:de(28295,{value:t})}function zn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fr(i.timestampValue),u=Fr(s.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zr(i.bytesValue).isEqual(zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return tt(i.geoPointValue.latitude)===tt(s.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return tt(i.integerValue)===tt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=tt(i.doubleValue),u=tt(s.doubleValue);return o===u?kl(o)===kl(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],zn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Bm(o)!==Bm(u))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(u[c]===void 0||!zn(o[c],u[c])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function Oo(t,e){return(t.values||[]).find(n=>zn(n,e))!==void 0}function fs(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const u=tt(s.integerValue||s.doubleValue),c=tt(o.integerValue||o.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1}(t,e);case 3:return $m(t.timestampValue,e.timestampValue);case 4:return $m(Vo(t),Vo(e));case 5:return kd(t.stringValue,e.stringValue);case 6:return function(s,o){const u=zr(s),c=zr(o);return u.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const u=s.split("/"),c=o.split("/");for(let d=0;d<u.length&&d<c.length;d++){const m=Ee(u[d],c[d]);if(m!==0)return m}return Ee(u.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const u=Ee(tt(s.latitude),tt(o.latitude));return u!==0?u:Ee(tt(s.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Wm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var v,C,R,k;const u=s.fields||{},c=o.fields||{},d=(v=u[Rl])==null?void 0:v.arrayValue,m=(C=c[Rl])==null?void 0:C.arrayValue,p=Ee(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,((k=m==null?void 0:m.values)==null?void 0:k.length)||0);return p!==0?p:Wm(d,m)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ja.mapValue&&o===ja.mapValue)return 0;if(s===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const u=s.fields||{},c=Object.keys(u),d=o.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let p=0;p<c.length&&p<m.length;++p){const v=kd(c[p],m[p]);if(v!==0)return v;const C=fs(u[c[p]],d[m[p]]);if(C!==0)return C}return Ee(c.length,m.length)}(t.mapValue,e.mapValue);default:throw de(23264,{he:n})}}function $m(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Fr(t),r=Fr(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function Wm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=fs(n[i],r[i]);if(s)return s}return Ee(n.length,r.length)}function ps(t){return Pd(t)}function Pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Pd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Pd(n.fields[o])}`;return i+"}"}(t.mapValue):de(61005,{value:t})}function Xa(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cu(t);return e?16+Xa(e):16;case 5:return 2*t.stringValue.length;case 6:return zr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Xa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Gr(r.fields,(s,o)=>{i+=s.length+Xa(o)}),i}(t.mapValue);default:throw de(13486,{value:t})}}function Rd(t){return!!t&&"integerValue"in t}function qh(t){return!!t&&"arrayValue"in t}function Hm(t){return!!t&&"nullValue"in t}function qm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function _2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Rv])==null?void 0:r.stringValue)===Nv}function co(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Gr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=co(t.arrayValue.values[n]);return e}return{...t}}function x2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===v2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=co(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=u.popLast()}o?r[u.lastSegment()]=co(o):i.push(u.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ja(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Gr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(co(this.value))}}function jv(t){const e=[];return Gr(t.fields,(n,r)=>{const i=new xt([n]);if(Ja(r)){const s=jv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,r,i,s,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=u}static newInvalidDocument(e){return new Rt(e,0,pe.min(),pe.min(),pe.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,pe.min(),pe.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,pe.min(),pe.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function Gm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=fs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Km(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function w2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{}class ut extends Dv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new T2(e,n,r):n==="array-contains"?new I2(e,r):n==="in"?new C2(e,r):n==="not-in"?new A2(e,r):n==="array-contains-any"?new k2(e,r):new ut(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new S2(e,r):new b2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(fs(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(fs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends Dv{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Bn(e,n)}matches(e){return Vv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vv(t){return t.op==="and"}function Mv(t){return E2(t)&&Vv(t)}function E2(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function Nd(t){if(t instanceof ut)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(Mv(t))return t.filters.map(e=>Nd(e)).join(",");{const e=t.filters.map(n=>Nd(n)).join(",");return`${t.op}(${e})`}}function Ov(t,e){return t instanceof ut?function(r,i){return i instanceof ut&&r.op===i.op&&r.field.isEqual(i.field)&&zn(r.value,i.value)}(t,e):t instanceof Bn?function(r,i){return i instanceof Bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,u)=>s&&Ov(o,i.filters[u]),!0):!1}(t,e):void de(19439)}function Lv(t){return t instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(Lv).join(" ,")+"}"}(t):"Filter"}class T2 extends ut{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class S2 extends ut{constructor(e,n){super(e,"in",n),this.keys=Fv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class b2 extends ut{constructor(e,n){super(e,"not-in",n),this.keys=Fv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fv(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class I2 extends ut{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qh(n)&&Oo(n.arrayValue,this.value)}}class C2 extends ut{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oo(this.value.arrayValue,n)}}class A2 extends ut{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Oo(this.value.arrayValue,n)}}class k2 extends ut{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n=null,r=[],i=[],s=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=u,this.Te=null}}function Qm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new P2(t,e,n,r,i,s,o)}function Gh(t){const e=me(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.Te=n}return e.Te}function Kh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!w2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ov(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Km(t.startAt,e.startAt)&&Km(t.endAt,e.endAt)}function jd(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n=null,r=[],i=[],s=null,o="F",u=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=u,this.endAt=c,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function R2(t,e,n,r,i,s,o,u){return new du(t,e,n,r,i,s,o,u)}function Qh(t){return new du(t)}function Ym(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function N2(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function j2(t){return t.collectionGroup!==null}function ho(t){const e=me(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new dt(xt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new jl(s,r))}),n.has(xt.keyField().canonicalString())||e.Ee.push(new jl(xt.keyField(),r))}return e.Ee}function Mn(t){const e=me(t);return e.Ie||(e.Ie=D2(e,ho(t))),e.Ie}function D2(t,e){if(t.limitType==="F")return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new jl(i.field,s)});const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return Qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dd(t,e,n){return new du(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hu(t,e){return Kh(Mn(t),Mn(e))&&t.limitType===e.limitType}function zv(t){return`${Gh(Mn(t))}|lt:${t.limitType}`}function Vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Lv(i)).join(", ")}]`),uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ps(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ps(i)).join(",")),`Target(${r})`}(Mn(t))}; limitType=${t.limitType})`}function fu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):le.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,u,c){const d=Gm(o,u,c);return o.inclusive?d<=0:d<0}(r.startAt,ho(r),i)||r.endAt&&!function(o,u,c){const d=Gm(o,u,c);return o.inclusive?d>=0:d>0}(r.endAt,ho(r),i))}(t,e)}function V2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Bv(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const s=M2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function M2(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(s,o,u){const c=o.data.field(s),d=u.data.field(s);return c!==null&&d!==null?fs(c,d):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Gr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2=new Qe(le.comparator);function sr(){return O2}const Uv=new Qe(le.comparator);function Xs(...t){let e=Uv;for(const n of t)e=e.insert(n.key,n);return e}function $v(t){let e=Uv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function oi(){return fo()}function Wv(){return fo()}function fo(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const L2=new Qe(le.comparator),F2=new dt(le.comparator);function Te(...t){let e=F2;for(const n of t)e=e.add(n);return e}const z2=new dt(Ee);function B2(){return z2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function Hv(t){return{integerValue:""+t}}function U2(t,e){return h2(e)?Hv(e):Yh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this._=void 0}}function $2(t,e,n){return t instanceof Lo?function(i,s){const o={fields:{[Av]:{stringValue:Cv},[Pv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hh(s)&&(s=cu(s)),s&&(o.fields[kv]=s),{mapValue:o}}(n,e):t instanceof Fo?Gv(t,e):t instanceof zo?Kv(t,e):function(i,s){const o=qv(i,s),u=Xm(o)+Xm(i.Ae);return Rd(o)&&Rd(i.Ae)?Hv(u):Yh(i.serializer,u)}(t,e)}function W2(t,e,n){return t instanceof Fo?Gv(t,e):t instanceof zo?Kv(t,e):n}function qv(t,e){return t instanceof Dl?function(r){return Rd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lo extends pu{}class Fo extends pu{constructor(e){super(),this.elements=e}}function Gv(t,e){const n=Qv(e);for(const r of t.elements)n.some(i=>zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends pu{constructor(e){super(),this.elements=e}}function Kv(t,e){let n=Qv(e);for(const r of t.elements)n=n.filter(i=>!zn(i,r));return{arrayValue:{values:n}}}class Dl extends pu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Xm(t){return tt(t.integerValue||t.doubleValue)}function Qv(t){return qh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.field=e,this.transform=n}}function q2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof zo&&i instanceof zo?hs(r.elements,i.elements,zn):r instanceof Dl&&i instanceof Dl?zn(r.Ae,i.Ae):r instanceof Lo&&i instanceof Lo}(t.transform,e.transform)}class G2{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Za(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mu{}function Yv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xh(t.key,hn.none()):new Zo(t.key,t.data,hn.none());{const n=t.data,r=$t.empty();let i=new dt(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kr(t.key,r,new Jt(i.toArray()),hn.none())}}function K2(t,e,n){t instanceof Zo?function(i,s,o){const u=i.value.clone(),c=Zm(i.fieldTransforms,s,o.transformResults);u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof Kr?function(i,s,o){if(!Za(i.precondition,s))return void s.convertToUnknownDocument(o.version);const u=Zm(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Xv(i)),c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof Zo?function(s,o,u,c){if(!Za(s.precondition,o))return u;const d=s.value.clone(),m=eg(s.fieldTransforms,c,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Kr?function(s,o,u,c){if(!Za(s.precondition,o))return u;const d=eg(s.fieldTransforms,c,o),m=o.data;return m.setAll(Xv(s)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,u){return Za(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function Q2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=qv(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function Jm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hs(r,i,(s,o)=>q2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends mu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kr extends mu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zm(t,e,n){const r=new Map;Ne(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,u=e.data.field(s.field);r.set(s.field,W2(o,u,n[i]))}return r}function eg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,$2(s,o,e))}return r}class Xh extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Y2 extends mu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&K2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Wv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let u=this.applyToLocalView(o,s.mutatedFields);u=n.has(i.key)?null:u;const c=Yv(o,u);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>Jm(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>Jm(n,r))}}class Jh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ne(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return L2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Jh(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,be;function eS(t){switch(t){case U.OK:return de(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function Jv(t){if(t===void 0)return ir("GRPC error has no .code"),U.UNKNOWN;switch(t){case rt.OK:return U.OK;case rt.CANCELLED:return U.CANCELLED;case rt.UNKNOWN:return U.UNKNOWN;case rt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case rt.INTERNAL:return U.INTERNAL;case rt.UNAVAILABLE:return U.UNAVAILABLE;case rt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case rt.NOT_FOUND:return U.NOT_FOUND;case rt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case rt.ABORTED:return U.ABORTED;case rt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case rt.DATA_LOSS:return U.DATA_LOSS;default:return de(39323,{code:t})}}(be=rt||(rt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=new jr([4294967295,4294967295],0);function tg(t){const e=tS().encode(t),n=new pv;return n.update(e),new Uint8Array(n.digest())}function ng(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new jr([n,r],0),new jr([i,s],0)]}class Zh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=jr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(jr.fromNumber(r)));return i.compare(nS)===1&&(i=new jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=tg(e),[r,i]=ng(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zh(s,i,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.ge===0)return;const n=tg(e),[r,i]=ng(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gu(pe.min(),i,new Qe(Ee),sr(),Te())}}class ea{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ea(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Zv{constructor(e,n){this.targetId=e,this.Ce=n}}class e1{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rg{constructor(){this.ve=0,this.Fe=ig(),this.Me=Tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Te(),n=Te(),r=Te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:de(38017,{changeType:s})}}),new ea(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ig()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ne(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class rS{constructor(e){this.Ge=e,this.ze=new Map,this.je=sr(),this.Je=Da(),this.He=Da(),this.Ze=new Qe(Ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:de(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(jd(s))if(r===0){const o=new le(s.path);this.et(n,o,Rt.newNoDocument(o,pe.min()))}else Ne(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const u=this.ut(e),c=u?this.ct(u,e,o):1;if(c!==0){this.it(n);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,u;try{o=zr(r).toUint8Array()}catch(c){if(c instanceof Iv)return _i("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Zh(o,i,s)}catch(c){return _i(c instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.ge===0?null:u}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),u=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const u=this.ot(o);if(u){if(s.current&&jd(u.target)){const c=new le(u.target.path);this.Et(c).has(o)||this.It(o,c)||this.et(o,c,Rt.newNoDocument(c,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=Te();this.He.forEach((s,o)=>{let u=!0;o.forEachWhile(c=>{const d=this.ot(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new gu(e,n,this.Ze,this.je,r);return this.je=sr(),this.Je=Da(),this.He=Da(),this.Ze=new Qe(Ee),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new rg,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new dt(Ee),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new dt(Ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new rg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Da(){return new Qe(le.comparator)}function ig(){return new Qe(le.comparator)}const iS={asc:"ASCENDING",desc:"DESCENDING"},sS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oS={and:"AND",or:"OR"};class aS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vd(t,e){return t.useProto3Json||uu(e)?e:{value:e}}function Vl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function lS(t,e){return Vl(t,e.toTimestamp())}function On(t){return Ne(!!t,49232),pe.fromTimestamp(function(n){const r=Fr(n);return new $e(r.seconds,r.nanos)}(t))}function ef(t,e){return Md(t,e).canonicalString()}function Md(t,e){const n=function(i){return new Ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function n1(t){const e=Ue.fromString(t);return Ne(a1(e),10190,{key:e.toString()}),e}function Od(t,e){return ef(t.databaseId,e.path)}function xc(t,e){const n=n1(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(i1(n))}function r1(t,e){return ef(t.databaseId,e)}function uS(t){const e=n1(t);return e.length===4?Ue.emptyPath():i1(e)}function Ld(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function i1(t){return Ne(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function sg(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function cS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:de(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,m){return d.useProto3Json?(Ne(m===void 0||typeof m=="string",58123),Tt.fromBase64String(m||"")):(Ne(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Tt.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(d){const m=d.code===void 0?U.UNKNOWN:Jv(d.code);return new oe(m,d.message||"")}(o);n=new e1(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=xc(t,r.document.name),s=On(r.document.updateTime),o=r.document.createTime?On(r.document.createTime):pe.min(),u=new $t({mapValue:{fields:r.document.fields}}),c=Rt.newFoundDocument(i,s,o,u),d=r.targetIds||[],m=r.removedTargetIds||[];n=new el(d,m,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=xc(t,r.document),s=r.readTime?On(r.readTime):pe.min(),o=Rt.newNoDocument(i,s),u=r.removedTargetIds||[];n=new el([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=xc(t,r.document),s=r.removedTargetIds||[];n=new el([],s,i,null)}else{if(!("filter"in e))return de(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Z2(i,s),u=r.targetId;n=new Zv(u,o)}}return n}function dS(t,e){let n;if(e instanceof Zo)n={update:sg(t,e.key,e.value)};else if(e instanceof Xh)n={delete:Od(t,e.key)};else if(e instanceof Kr)n={update:sg(t,e.key,e.data),updateMask:xS(e.fieldMask)};else{if(!(e instanceof Y2))return de(16599,{dt:e.type});n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const u=o.transform;if(u instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Dl)return{fieldPath:o.field.canonicalString(),increment:u.Ae};throw de(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:lS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:de(27497)}(t,e.precondition)),n}function hS(t,e){return t&&t.length>0?(Ne(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?On(i.updateTime):On(s);return o.isEqual(pe.min())&&(o=On(s)),new G2(o,i.transformResults||[])}(n,e))):[]}function fS(t,e){return{documents:[r1(t,e.path)]}}function pS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=r1(t,i);const s=function(d){if(d.length!==0)return o1(Bn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Mi(v.field),direction:yS(v.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=Vd(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:i}}function mS(t){let e=uS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ne(r===1,65062);const m=n.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let s=[];n.where&&(s=function(p){const v=s1(p);return v instanceof Bn&&Mv(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(v=>function(R){return new jl(Oi(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(v))}(n.orderBy));let u=null;n.limit&&(u=function(p){let v;return v=typeof p=="object"?p.value:p,uu(v)?null:v}(n.limit));let c=null;n.startAt&&(c=function(p){const v=!!p.before,C=p.values||[];return new Nl(C,v)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const v=!p.before,C=p.values||[];return new Nl(C,v)}(n.endAt)),R2(e,i,o,s,u,"F",c,d)}function gS(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oi(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oi(n.unaryFilter.field);return ut.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oi(n.unaryFilter.field);return ut.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oi(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return ut.create(Oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>s1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function yS(t){return iS[t]}function vS(t){return sS[t]}function _S(t){return oS[t]}function Mi(t){return{fieldPath:t.canonicalString()}}function Oi(t){return xt.fromServerFormat(t.fieldPath)}function o1(t){return t instanceof ut?function(n){if(n.op==="=="){if(qm(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NAN"}};if(Hm(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qm(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NAN"}};if(Hm(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mi(n.field),op:vS(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(i=>o1(i));return r.length===1?r[0]:{compositeFilter:{op:_S(n.op),filters:r}}}(t):de(54877,{filter:t})}function xS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function a1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function l1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r,i,s=pe.min(),o=pe.min(),u=Tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(e){return new Tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.yt=e}}function ES(t){const e=mS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this.bn=new SS}addToCollectionParentIndex(e,n){return this.bn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Lr.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Lr.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class SS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new dt(Ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dt(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},u1=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(u1,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ms(0)}static ar(){return new ms(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="LruGarbageCollector",bS=1048576;function lg([t,e],[n,r]){const i=Ee(t,n);return i===0?Ee(e,r):i}class IS{constructor(e){this.Pr=e,this.buffer=new dt(lg),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();lg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){J(ag,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ts(n)?J(ag,"Ignoring IndexedDB error during garbage collection: ",n):await Es(n)}await this.Ar(3e5)})}}class AS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(lu.ce);const r=new IS(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(og)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),og):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,u,c,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,u=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(d=Date.now(),Di()<=Ie.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${i} in `+(u-o)+`ms
	Removed ${s} targets in `+(c-u)+`ms
	Removed ${p} documents in `+(d-c)+`ms
Total Duration: ${d-m}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function kS(t,e){return new AS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&po(r.mutation,i,Jt.empty(),$e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const i=oi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xs();return s.forEach((u,c)=>{o=o.insert(u,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=oi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,i){let s=sr();const o=fo(),u=function(){return fo()}();return n.forEach((c,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Kr)?s=s.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),po(m.mutation,d,m.mutation.getFieldMask(),$e.now())):o.set(d.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((d,m)=>o.set(d,m)),n.forEach((d,m)=>u.set(d,new RS(m,o.get(d)??null))),u))}recalculateAndSaveOverlays(e,n){const r=fo();let i=new Qe((o,u)=>o-u),s=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(c=>{const d=n.get(c);if(d===null)return;let m=r.get(c)||Jt.empty();m=u.applyToLocalView(d,m),r.set(c,m);const p=(i.get(u.batchId)||Te()).add(c);i=i.insert(u.batchId,p)})}).next(()=>{const o=[],u=i.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,m=c.value,p=Wv();m.forEach(v=>{if(!s.has(v)){const C=Yv(n.get(v),r.get(v));C!==null&&p.set(v,C),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return N2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):j2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(oi());let u=Do,c=s;return o.next(d=>B.forEach(d,(m,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),s.get(m)?B.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{c=c.insert(m,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,c,d,Te())).next(m=>({batchId:u,changes:$v(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let i=Xs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,s).next(u=>B.forEach(u,c=>{const d=function(p,v){return new du(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((p,v)=>{o=o.insert(p,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Rt.newInvalidDocument(m)))});let u=Xs();return o.forEach((c,d)=>{const m=s.get(c);m!==void 0&&po(m.mutation,d,Jt.empty(),$e.now()),fu(n,d)&&(u=u.insert(c,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return B.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:On(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:ES(i.bundledQuery),readTime:On(i.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.overlays=new Qe(le.comparator),this.Lr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=oi();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=oi(),s=n.length+1,o=new le(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let m=s.get(d.largestBatchId);m===null&&(m=oi(),s=s.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=oi(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=i)););return B.resolve(u)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new J2(n,r));let s=this.Lr.get(n);s===void 0&&(s=Te(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.kr=new dt(mt.qr),this.Kr=new dt(mt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new mt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new le(new Ue([])),r=new mt(n,e),i=new mt(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new le(new Ue([])),r=new mt(n,e),i=new mt(n,e+1);let s=Te();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new mt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return le.comparator(e.key,n.key)||Ee(e.Jr,n.Jr)}static Ur(e,n){return Ee(e.Jr,n.Jr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new dt(mt.qr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new X2(s,n,r,i);this.mutationQueue.push(o);for(const u of i)this.Hr=this.Hr.add(new mt(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Wh:this.Yn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),i=new mt(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const u=this.Zr(o.Jr);s.push(u)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Ee);return n.forEach(i=>{const s=new mt(i,0),o=new mt(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],u=>{r=r.add(u.Jr)})}),B.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;le.isDocumentKey(s)||(s=s.child(""));const o=new mt(new le(s),0);let u=new dt(Ee);return this.Hr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(c.Jr)),!0)},o),B.resolve(this.Yr(u))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ne(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return B.forEach(n.mutations,i=>{const s=new mt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new mt(n,0),i=this.Hr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.ti=e,this.docs=function(){return new Qe(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Rt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=sr();const o=n.path,u=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||l2(a2(m),r)<=0||(i.has(m.key)||fu(n,m))&&(s=s.insert(m.key,m.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){de(9500)}ni(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LS(this)}getSize(e){return B.resolve(this.size)}}class LS extends PS{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.persistence=e,this.ri=new Ci(n=>Gh(n),Kh),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.ii=0,this.si=new tf,this.targetCount=0,this.oi=ms._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),B.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.lr(n),B.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this._i={},this.overlays={},this.ai=new lu(0),this.ui=!1,this.ui=!0,this.ci=new VS,this.referenceDelegate=e(this),this.li=new FS(this),this.indexManager=new TS,this.remoteDocumentCache=function(i){return new OS(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new wS(n),this.Pi=new jS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new MS(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new zS(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ei(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ii(e,n){return B.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class zS extends c2{constructor(e){super(),this.currentSequenceNumber=e}}class nf{constructor(e){this.persistence=e,this.Ri=new tf,this.Ai=null}static Vi(e){return new nf(e)}get di(){if(this.Ai)return this.Ai;throw de(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,r=>{const i=le.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Ml{constructor(e,n){this.persistence=e,this.fi=new Ci(r=>f2(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=kS(this,n)}static Vi(e,n){return new Ml(e,n)}Ti(){}Ei(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return B.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(u=>{u||(r++,s.removeEntry(o,pe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),B.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Xa(e.data.value)),n}wr(e,n,r){return B.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=Te(),i=Te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new rf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return RE()?8:d2(kE())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new BS;return this.ys(e,n,o).next(u=>{if(s.result=u,this.As)return this.ws(e,n,o,u.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Di()<=Ie.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Di()<=Ie.DEBUG&&J("QueryEngine","Query:",Vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Di()<=Ie.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):B.resolve())}gs(e,n){if(Ym(n))return B.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dd(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Te(...s);return this.fs.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.Ss(n,u);return this.bs(n,d,o,c.readTime)?this.gs(e,Dd(n,null,"F")):this.Ds(e,d,n,c)}))})))}ps(e,n,r,i){return Ym(n)||i.isEqual(pe.min())?B.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?B.resolve(null):(Di()<=Ie.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vi(n)),this.Ds(e,o,n,o2(i,Do)).next(u=>u))})}Ss(e,n){let r=new dt(Bv(e));return n.forEach((i,s)=>{fu(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Di()<=Ie.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Vi(n)),this.fs.getDocumentsMatchingQuery(e,n,Lr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="LocalStore",$S=3e8;class WS{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Qe(Ee),this.Fs=new Ci(s=>Gh(s),Kh),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NS(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function HS(t,e,n,r){return new WS(t,e,n,r)}async function d1(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],u=[];let c=Te();for(const d of i){o.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of s){u.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return n.localDocuments.getDocuments(r,c).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:u}))})})}function qS(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(u,c,d,m){const p=d.batch,v=p.keys();let C=B.resolve();return v.forEach(R=>{C=C.next(()=>m.getEntry(c,R)).next(k=>{const D=d.docVersions.get(R);Ne(D!==null,48541),k.version.compareTo(D)<0&&(p.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),m.addEntry(k)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(c,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let c=Te();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function h1(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function GS(t,e){const n=me(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const u=[];e.targetChanges.forEach((m,p)=>{const v=i.get(p);if(!v)return;u.push(n.li.removeMatchingKeys(s,m.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,m.addedDocuments,p)));let C=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?C=C.withResumeToken(Tt.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),i=i.insert(p,C),function(k,D,b){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=$S?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(v,C,m)&&u.push(n.li.updateTargetData(s,C))});let c=sr(),d=Te();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(s,m))}),u.push(KS(s,o,e.documentUpdates).next(m=>{c=m.Bs,d=m.Ls})),!r.isEqual(pe.min())){const m=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(m)}return B.waitFor(u).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,d)).next(()=>c)}).then(s=>(n.vs=i,s))}function KS(t,e,n){let r=Te(),i=Te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=sr();return n.forEach((u,c)=>{const d=s.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(u,c.readTime),o=o.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(u,c)):J(sf,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)}),{Bs:o,Ls:i}})}function QS(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YS(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Fd(t,e,n){const r=me(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ts(o))throw o;J(sf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function ug(t,e,n){const r=me(t);let i=pe.min(),s=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,d,m){const p=me(c),v=p.Fs.get(m);return v!==void 0?B.resolve(p.vs.get(v)):p.li.getTargetData(d,m)}(r,o,Mn(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,u.targetId).next(c=>{s=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:pe.min(),n?s:Te())).next(u=>(XS(r,V2(e),u),{documents:u,ks:s})))}function XS(t,e,n){let r=t.Ms.get(e)||pe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class cg{constructor(){this.activeTargetIds=B2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JS{constructor(){this.vo=new cg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="ConnectivityMonitor";class hg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){J(dg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){J(dg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va=null;function zd(){return Va===null?Va=function(){return 268435456+Math.round(2147483648*Math.random())}():Va++,"0x"+Va.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="RestConnection",eb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tb{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Pl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=zd(),u=this.Qo(e,n.toUriEncodedString());J(wc,`Sending RPC '${e}' ${o}:`,u,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,i,s);const{host:d}=new URL(u),m=ov(d);return this.zo(e,u,c,r,m).then(p=>(J(wc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw _i(wc,`RPC '${e}' ${o} failed with error: `,p,"url: ",u,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=eb[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection",Hs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ns extends tb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ns.c_){const e=vv();Hs(e,yv.STAT_EVENT,n=>{n.stat===Ad.PROXY?J(At,"STAT_EVENT: detected buffering proxy"):n.stat===Ad.NOPROXY&&J(At,"STAT_EVENT: detected no buffering proxy")}),ns.c_=!0}}zo(e,n,r,i,s){const o=zd();return new Promise((u,c)=>{const d=new mv;d.setWithCredentials(!0),d.listenOnce(gv.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ya.NO_ERROR:const p=d.getResponseJson();J(At,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),u(p);break;case Ya.TIMEOUT:J(At,`RPC '${e}' ${o} timed out`),c(new oe(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ya.HTTP_ERROR:const v=d.getStatus();if(J(At,`RPC '${e}' ${o} failed with status:`,v,"response text:",d.getResponseText()),v>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const R=C==null?void 0:C.error;if(R&&R.status&&R.message){const k=function(b){const g=b.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(g)>=0?g:U.UNKNOWN}(R.status);c(new oe(k,R.message))}else c(new oe(U.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new oe(U.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{J(At,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(i);J(At,`RPC '${e}' ${o} sending request:`,i),d.send(n,"POST",m,r,15)})}T_(e,n,r){const i=zd(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");J(At,`Creating RPC '${e}' stream ${i}: ${d}`,u);const m=o.createWebChannel(d,u);this.E_(m);let p=!1,v=!1;const C=new nb({Jo:R=>{v?J(At,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(J(At,`Opening RPC '${e}' stream ${i} transport.`),m.open(),p=!0),J(At,`RPC '${e}' stream ${i} sending:`,R),m.send(R))},Ho:()=>m.close()});return Hs(m,Ys.EventType.OPEN,()=>{v||(J(At,`RPC '${e}' stream ${i} transport opened.`),C.i_())}),Hs(m,Ys.EventType.CLOSE,()=>{v||(v=!0,J(At,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.I_(m))}),Hs(m,Ys.EventType.ERROR,R=>{v||(v=!0,_i(At,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),C.o_(new oe(U.UNAVAILABLE,"The operation could not be completed")))}),Hs(m,Ys.EventType.MESSAGE,R=>{var k;if(!v){const D=R.data[0];Ne(!!D,16349);const b=D,g=(b==null?void 0:b.error)||((k=b[0])==null?void 0:k.error);if(g){J(At,`RPC '${e}' stream ${i} received error:`,g);const S=g.status;let V=function(y){const _=rt[y];if(_!==void 0)return Jv(_)}(S),j=g.message;S==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&_i(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=U.INTERNAL,j="Unknown error status: "+S+" with message "+g.message),v=!0,C.o_(new oe(V,j)),m.close()}else J(At,`RPC '${e}' stream ${i} received:`,D),C.__(D)}}),ns.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return _v()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t){return new ns(t)}function Ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t){return new aS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns.c_=!1;class f1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="PersistentStream";class p1{constructor(e,n,r,i,s,o,u,c){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new f1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new oe(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return J(fg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(J(fg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ib extends p1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cS(this.serializer,e),r=function(s){if(!("targetChange"in s))return pe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?On(o.readTime):pe.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Ld(this.serializer),n.addTarget=function(s,o){let u;const c=o.target;if(u=jd(c)?{documents:fS(s,c)}:{query:pS(s,c).ft},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=t1(s,o.resumeToken);const d=Vd(s,o.expectedCount);d!==null&&(u.expectedCount=d)}else if(o.snapshotVersion.compareTo(pe.min())>0){u.readTime=Vl(s,o.snapshotVersion.toTimestamp());const d=Vd(s,o.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=gS(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Ld(this.serializer),n.removeTarget=e,this.q_(n)}}class sb extends p1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ne(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ne(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hS(e.writeResults,e.commitTime),r=On(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ld(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dS(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{}class ab extends ob{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new oe(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Md(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new oe(U.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.jo(e,Md(n,r),i,o,u,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function lb(t,e,n,r){return new ab(t,e,n,r)}class ub{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ir(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="RemoteStore";class cb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(J(xi,"Restarting streams for network reachability change."),await async function(c){const d=me(c);d.Ia.add(4),await ta(d),d.Va.set("Unknown"),d.Ia.delete(4),await vu(d)}(this))})}),this.Va=new ub(r,i)}}async function vu(t){if(Ai(t))for(const e of t.Ra)await e(!0)}async function ta(t){for(const e of t.Ra)await e(!1)}function m1(t,e){const n=me(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),uf(n)?lf(n):Ss(n).O_()&&af(n,e))}function of(t,e){const n=me(t),r=Ss(n);n.Ea.delete(e),r.O_()&&g1(n,e),n.Ea.size===0&&(r.O_()?r.L_():Ai(n)&&n.Va.set("Unknown"))}function af(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ss(t).Z_(e)}function g1(t,e){t.da.$e(e),Ss(t).X_(e)}function lf(t){t.da=new rS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ss(t).start(),t.Va.ua()}function uf(t){return Ai(t)&&!Ss(t).x_()&&t.Ea.size>0}function Ai(t){return me(t).Ia.size===0}function y1(t){t.da=void 0}async function db(t){t.Va.set("Online")}async function hb(t){t.Ea.forEach((e,n)=>{af(t,e)})}async function fb(t,e){y1(t),uf(t)?(t.Va.ha(e),lf(t)):t.Va.set("Unknown")}async function pb(t,e,n){if(t.Va.set("Online"),e instanceof e1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const u of s.targetIds)i.Ea.has(u)&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.da.removeTarget(u))}(t,e)}catch(r){J(xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(t,r)}else if(e instanceof el?t.da.Xe(e):e instanceof Zv?t.da.st(e):t.da.tt(e),!n.isEqual(pe.min()))try{const r=await h1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const u=s.da.Tt(o);return u.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=s.Ea.get(d);m&&s.Ea.set(d,m.withResumeToken(c.resumeToken,o))}}),u.targetMismatches.forEach((c,d)=>{const m=s.Ea.get(c);if(!m)return;s.Ea.set(c,m.withResumeToken(Tt.EMPTY_BYTE_STRING,m.snapshotVersion)),g1(s,c);const p=new Tr(m.target,c,d,m.sequenceNumber);af(s,p)}),s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){J(xi,"Failed to raise snapshot:",r),await Ol(t,r)}}async function Ol(t,e,n){if(!Ts(e))throw e;t.Ia.add(1),await ta(t),t.Va.set("Offline"),n||(n=()=>h1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(xi,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await vu(t)})}function v1(t,e){return e().catch(n=>Ol(t,n,e))}async function _u(t){const e=me(t),n=Ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Wh;for(;mb(e);)try{const i=await QS(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,gb(e,i)}catch(i){await Ol(e,i)}_1(e)&&x1(e)}function mb(t){return Ai(t)&&t.Ta.length<10}function gb(t,e){t.Ta.push(e);const n=Ur(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function _1(t){return Ai(t)&&!Ur(t).x_()&&t.Ta.length>0}function x1(t){Ur(t).start()}async function yb(t){Ur(t).ra()}async function vb(t){const e=Ur(t);for(const n of t.Ta)e.ea(n.mutations)}async function _b(t,e,n){const r=t.Ta.shift(),i=Jh.from(r,e,n);await v1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await _u(t)}async function xb(t,e){e&&Ur(t).Y_&&await async function(r,i){if(function(o){return eS(o)&&o!==U.ABORTED}(i.code)){const s=r.Ta.shift();Ur(r).B_(),await v1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await _u(r)}}(t,e),_1(t)&&x1(t)}async function pg(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),J(xi,"RemoteStore received new credentials");const r=Ai(n);n.Ia.add(3),await ta(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await vu(n)}async function wb(t,e){const n=me(t);e?(n.Ia.delete(2),await vu(n)):e||(n.Ia.add(2),await ta(n),n.Va.set("Unknown"))}function Ss(t){return t.ma||(t.ma=function(n,r,i){const s=me(n);return s.sa(),new ib(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:db.bind(null,t),Yo:hb.bind(null,t),t_:fb.bind(null,t),H_:pb.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),uf(t)?lf(t):t.Va.set("Unknown")):(await t.ma.stop(),y1(t))})),t.ma}function Ur(t){return t.fa||(t.fa=function(n,r,i){const s=me(n);return s.sa(),new sb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:yb.bind(null,t),t_:xb.bind(null,t),ta:vb.bind(null,t),na:_b.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await _u(t)):(await t.fa.stop(),t.Ta.length>0&&(J(xi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,u=new cf(e,n,o,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function df(t,e){if(ir("AsyncQueue",`${e}: ${t}`),Ts(t))return new oe(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{static emptySet(e){return new rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new Qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.ga=new Qe(le.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):de(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,i,s,o,u,c,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new gs(e,n,rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Tb{constructor(){this.queries=gg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=me(n),s=i.queries;i.queries=gg(),s.forEach((o,u)=>{for(const c of u.Sa)c.onError(r)})})(this,new oe(U.ABORTED,"Firestore shutting down"))}}function gg(){return new Ci(t=>zv(t),hu)}async function Sb(t,e){const n=me(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new Eb,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const u=df(o,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(u)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&hf(n)}async function bb(t,e){const n=me(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ib(t,e){const n=me(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const u of o.Sa)u.Fa(i)&&(r=!0);o.wa=i}}r&&hf(n)}function Cb(t,e,n){const r=me(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function hf(t){t.Ca.forEach(e=>{e.next()})}var Bd,yg;(yg=Bd||(Bd={})).Ma="default",yg.Cache="cache";class Ab{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.key=e}}class E1{constructor(e){this.key=e}}class kb{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Te(),this.mutatedKeys=Te(),this.eu=Bv(e),this.tu=new rs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new mg,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,u=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,p)=>{const v=i.get(m),C=fu(this.query,p)?p:null,R=!!v&&this.mutatedKeys.has(v.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;v&&C?v.data.isEqual(C.data)?R!==k&&(r.track({type:3,doc:C}),D=!0):this.su(v,C)||(r.track({type:2,doc:C}),D=!0,(c&&this.eu(C,c)>0||d&&this.eu(C,d)<0)&&(u=!0)):!v&&C?(r.track({type:0,doc:C}),D=!0):v&&!C&&(r.track({type:1,doc:v}),D=!0,(c||d)&&(u=!0)),D&&(C?(o=o.add(C),s=k?s.add(m):s.delete(m)):(o=o.delete(m),s=s.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),s=s.delete(m.key),r.track({type:1,doc:m})}return{tu:o,iu:r,bs:u,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((m,p)=>function(C,R){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Vt:D})}};return k(C)-k(R)}(m.type,p.type)||this.eu(m.doc,p.doc)),this.ou(r),i=i??!1;const u=n&&!i?this._u():[],c=this.Ya.size===0&&this.current&&!i?1:0,d=c!==this.Xa;return this.Xa=c,o.length!==0||d?{snapshot:new gs(this.query,e.tu,s,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new mg,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=Te(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new E1(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new w1(r))}),n}cu(e){this.Za=e.ks,this.Ya=Te();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return gs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ff="SyncEngine";class Pb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Rb{constructor(e){this.key=e,this.hu=!1}}class Nb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ci(u=>zv(u),hu),this.Eu=new Map,this.Iu=new Set,this.Ru=new Qe(le.comparator),this.Au=new Map,this.Vu=new tf,this.du={},this.mu=new Map,this.fu=ms.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jb(t,e,n=!0){const r=A1(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await T1(r,e,n,!0),i}async function Db(t,e){const n=A1(t);await T1(n,e,!0,!1)}async function T1(t,e,n,r){const i=await YS(t.localStore,Mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let u;return r&&(u=await Vb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&m1(t.remoteStore,i),u}async function Vb(t,e,n,r,i){t.pu=(p,v,C)=>async function(k,D,b,g){let S=D.view.ru(b);S.bs&&(S=await ug(k.localStore,D.query,!1).then(({documents:y})=>D.view.ru(y,S)));const V=g&&g.targetChanges.get(D.targetId),j=g&&g.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(S,k.isPrimaryClient,V,j);return _g(k,D.targetId,F.au),F.snapshot}(t,p,v,C);const s=await ug(t.localStore,e,!0),o=new kb(e,s.ks),u=o.ru(s.documents),c=ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(u,t.isPrimaryClient,c);_g(t,n,d.au);const m=new Pb(e,n,o);return t.Tu.set(e,m),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),d.snapshot}async function Mb(t,e,n){const r=me(t),i=r.Tu.get(e),s=r.Eu.get(i.targetId);if(s.length>1)return r.Eu.set(i.targetId,s.filter(o=>!hu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&of(r.remoteStore,i.targetId),Ud(r,i.targetId)}).catch(Es)):(Ud(r,i.targetId),await Fd(r.localStore,i.targetId,!0))}async function Ob(t,e){const n=me(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),of(n.remoteStore,r.targetId))}async function Lb(t,e,n){const r=Hb(t);try{const i=await function(o,u){const c=me(o),d=$e.now(),m=u.reduce((C,R)=>C.add(R.key),Te());let p,v;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let R=sr(),k=Te();return c.xs.getEntries(C,m).next(D=>{R=D,R.forEach((b,g)=>{g.isValidDocument()||(k=k.add(b))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,R)).next(D=>{p=D;const b=[];for(const g of u){const S=Q2(g,p.get(g.key).overlayedDocument);S!=null&&b.push(new Kr(g.key,S,jv(S.value.mapValue),hn.exists(!0)))}return c.mutationQueue.addMutationBatch(C,d,b,u)}).next(D=>{v=D;const b=D.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(C,D.batchId,b)})}).then(()=>({batchId:v.batchId,changes:$v(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,u,c){let d=o.du[o.currentUser.toKey()];d||(d=new Qe(Ee)),d=d.insert(u,c),o.du[o.currentUser.toKey()]=d}(r,i.batchId,n),await na(r,i.changes),await _u(r.remoteStore)}catch(i){const s=df(i,"Failed to persist write");n.reject(s)}}async function S1(t,e){const n=me(t);try{const r=await GS(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(Ne(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Ne(o.hu,14607):i.removedDocuments.size>0&&(Ne(o.hu,42227),o.hu=!1))}),await na(n,r,e)}catch(r){await Es(r)}}function vg(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const u=o.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(o,u){const c=me(o);c.onlineState=u;let d=!1;c.queries.forEach((m,p)=>{for(const v of p.Sa)v.va(u)&&(d=!0)}),d&&hf(c)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fb(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Qe(le.comparator);o=o.insert(s,Rt.newNoDocument(s,pe.min()));const u=Te().add(s),c=new gu(pe.min(),new Map,new Qe(Ee),o,u);await S1(r,c),r.Ru=r.Ru.remove(s),r.Au.delete(e),pf(r)}else await Fd(r.localStore,e,!1).then(()=>Ud(r,e,n)).catch(Es)}async function zb(t,e){const n=me(t),r=e.batch.batchId;try{const i=await qS(n.localStore,e);I1(n,r,null),b1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await na(n,i)}catch(i){await Es(i)}}async function Bb(t,e,n){const r=me(t);try{const i=await function(o,u){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return c.mutationQueue.lookupMutationBatch(d,u).next(p=>(Ne(p!==null,37113),m=p.keys(),c.mutationQueue.removeMutationBatch(d,p))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>c.localDocuments.getDocuments(d,m))})}(r.localStore,e);I1(r,e,n),b1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await na(r,i)}catch(i){await Es(i)}}function b1(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function I1(t,e,n){const r=me(t);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||C1(t,r)})}function C1(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(of(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),pf(t))}function _g(t,e,n){for(const r of n)r instanceof w1?(t.Vu.addReference(r.key,e),Ub(t,r)):r instanceof E1?(J(ff,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||C1(t,r.key)):de(19791,{wu:r})}function Ub(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(J(ff,"New document in limbo: "+n),t.Iu.add(r),pf(t))}function pf(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new le(Ue.fromString(e)),r=t.fu.next();t.Au.set(r,new Rb(n)),t.Ru=t.Ru.insert(n,r),m1(t.remoteStore,new Tr(Mn(Qh(n.path)),r,"TargetPurposeLimboResolution",lu.ce))}}async function na(t,e,n){const r=me(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((u,c)=>{o.push(r.pu(c,e,n).then(d=>{var m;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(m=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(d){i.push(d);const p=rf.Is(c.targetId,d);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(c,d){const m=me(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(d,v=>B.forEach(v.Ts,C=>m.persistence.referenceDelegate.addReference(p,v.targetId,C)).next(()=>B.forEach(v.Es,C=>m.persistence.referenceDelegate.removeReference(p,v.targetId,C)))))}catch(p){if(!Ts(p))throw p;J(sf,"Failed to update sequence numbers: "+p)}for(const p of d){const v=p.targetId;if(!p.fromCache){const C=m.vs.get(v),R=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(R);m.vs=m.vs.insert(v,k)}}}(r.localStore,s))}async function $b(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){J(ff,"User change. New user:",e.toKey());const r=await d1(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(u=>{u.forEach(c=>{c.reject(new oe(U.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await na(n,r.Ns)}}function Wb(t,e){const n=me(t),r=n.Au.get(e);if(r&&r.hu)return Te().add(r.key);{let i=Te();const s=n.Eu.get(e);if(!s)return i;for(const o of s){const u=n.Tu.get(o);i=i.unionWith(u.view.nu)}return i}}function A1(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=S1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fb.bind(null,e),e.Pu.H_=Ib.bind(null,e.eventManager),e.Pu.yu=Cb.bind(null,e.eventManager),e}function Hb(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bb.bind(null,e),e}class Ll{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return HS(this.persistence,new US,e.initialUser,this.serializer)}Cu(e){return new c1(nf.Vi,this.serializer)}Du(e){return new JS}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ll.provider={build:()=>new Ll};class qb extends Ll{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ne(this.persistence.referenceDelegate instanceof Ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new CS(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new c1(r=>Ml.Vi(r,n),this.serializer)}}class $d{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$b.bind(null,this.syncEngine),await wb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tb}()}createDatastore(e){const n=yu(e.databaseInfo.databaseId),r=rb(e.databaseInfo);return lb(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,u){return new cb(r,i,s,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>vg(this.syncEngine,n,0),function(){return hg.v()?new hg:new ZS}())}createSyncEngine(e,n){return function(i,s,o,u,c,d,m){const p=new Nb(i,s,o,u,c,d);return m&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=me(i);J(xi,"RemoteStore shutting down."),s.Ia.add(5),await ta(s),s.Aa.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}$d.provider={build:()=>new $d};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ir("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="FirestoreClient";class Kb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=Uh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{J($r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J($r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=df(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tc(t,e){t.asyncQueue.verifyOperationInProgress(),J($r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await d1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qb(t);J($r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>pg(e.remoteStore,i)),t._onlineComponents=e}async function Qb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J($r,"Using user provided OfflineComponentProvider");try{await Tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;_i("Error using user provided cache. Falling back to memory cache: "+n),await Tc(t,new Ll)}}else J($r,"Using default OfflineComponentProvider"),await Tc(t,new qb(void 0));return t._offlineComponents}async function k1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J($r,"Using user provided OnlineComponentProvider"),await xg(t,t._uninitializedComponentsProvider._online)):(J($r,"Using default OnlineComponentProvider"),await xg(t,new $d))),t._onlineComponents}function Yb(t){return k1(t).then(e=>e.syncEngine)}async function wg(t){const e=await k1(t),n=e.eventManager;return n.onListen=jb.bind(null,e.syncEngine),n.onUnlisten=Mb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Db.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ob.bind(null,e.syncEngine),n}function Xb(t,e,n,r){const i=new Gb(r),s=new Ab(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Sb(await wg(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>bb(await wg(t),s))}}function Jb(t,e){const n=new ci;return t.asyncQueue.enqueueAndForget(async()=>Lb(await Yb(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="ComponentProvider",Eg=new Map;function eI(t,e,n,r,i){return new g2(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,P1(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1="firestore.googleapis.com",Tg=!0;class Sg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new oe(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=R1,this.ssl=Tg}else this.host=e.host,this.ssl=e.ssl??Tg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=u1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bS)throw new oe(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}s2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P1(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new oe(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new oe(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new oe(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QT;switch(r.type){case"firstParty":return new ZT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Eg.get(n);r&&(J(Zb,"Removing Datastore"),Eg.delete(n),r.terminate())}(this),Promise.resolve()}}function tI(t,e,n,r={}){var d;t=Vn(t,xu);const i=ov(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;i&&ME(`https://${u}`),s.host!==R1&&s.host!==u&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:u,ssl:i,emulatorOptions:r};if(!Cl(c,o)&&(t._setSettings(c),r.mockUserToken)){let m,p;if(typeof r.mockUserToken=="string")m=r.mockUserToken,p=kt.MOCK_USER;else{m=AE(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new oe(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new kt(v)}t._authCredentials=new YT(new wv(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wu(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Jo(n,ot._jsonSchema))return new ot(e,r||null,new le(Ue.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:st("string",ot._jsonSchemaVersion),referencePath:st("string")};class Dr extends wu{constructor(e,n,r){super(e,n,Qh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new le(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function Zs(t,e,...n){if(t=mn(t),Ev("collection","path",e),t instanceof xu){const r=Ue.fromString(e,...n);return Om(r),new Dr(t,null,r)}{if(!(t instanceof ot||t instanceof Dr))throw new oe(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Om(r),new Dr(t.firestore,null,r)}}function Bt(t,e,...n){if(t=mn(t),arguments.length===1&&(e=Uh.newId()),Ev("doc","path",e),t instanceof xu){const r=Ue.fromString(e,...n);return Mm(r),new ot(t,null,new le(r))}{if(!(t instanceof ot||t instanceof Dr))throw new oe(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Mm(r),new ot(t.firestore,t instanceof Dr?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="AsyncQueue";class Ig{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new f1(this,"async_queue_retry"),this._c=()=>{const r=Ec();r&&J(bg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ci;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ts(e))throw e;J(bg,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ir("INTERNAL UNHANDLED ERROR: ",Cg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=cf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&de(47125,{Pc:Cg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Cg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class wi extends xu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ig,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ig(e),this._firestoreClient=void 0,await e}}}function nI(t,e){const n=typeof t=="object"?t:dv(),r=typeof t=="string"?t:Pl,i=au(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=IE("firestore");s&&tI(i,...s)}return i}function N1(t){if(t._terminated)throw new oe(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rI(t),t._firestoreClient}function rI(t){var r,i,s,o;const e=t._freezeSettings(),n=eI(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Kb(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new un(Tt.fromBase64String(e))}catch(n){throw new oe(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new un(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jo(e,un._jsonSchema))return un.fromBase64String(e.bytes)}}un._jsonSchemaVersion="firestore/bytes/1.0",un._jsonSchema={type:st("string",un._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(Jo(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:st("string",Ln._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jo(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Sn(e.vectorValues);throw new oe(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:st("string",Sn._jsonSchemaVersion),vectorValues:st("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=/^__.*__$/;class sI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}class j1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function D1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{dataSource:t})}}class gf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new gf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Fl(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(D1(this.dataSource)&&iI.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class oI{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yu(e)}A(e,n,r,i=!1){return new gf({dataSource:e,methodName:n,targetDoc:r,path:xt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yf(t){const e=t._freezeSettings(),n=yu(t._databaseId);return new oI(t._databaseId,!!e.ignoreUndefinedProperties,n)}function V1(t,e,n,r,i,s={}){const o=t.A(s.merge||s.mergeFields?2:0,e,n,i);_f("Data must be an object, but it was:",o,r);const u=M1(r,o);let c,d;if(s.merge)c=new Jt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const m=[];for(const p of s.mergeFields){const v=Bo(e,p,n);if(!o.contains(v))throw new oe(U.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);F1(m,v)||m.push(v)}c=new Jt(m),d=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,d=o.fieldTransforms;return new sI(new $t(u),c,d)}class Tu extends Eu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tu}}class vf extends Eu{_toFieldTransform(e){return new H2(e.path,new Lo)}isEqual(e){return e instanceof vf}}function aI(t,e,n,r){const i=t.A(1,e,n);_f("Data must be an object, but it was:",i,r);const s=[],o=$t.empty();Gr(r,(c,d)=>{const m=L1(e,c,n);d=mn(d);const p=i.fc(m);if(d instanceof Tu)s.push(m);else{const v=Su(d,p);v!=null&&(s.push(m),o.set(m,v))}});const u=new Jt(s);return new j1(o,u,i.fieldTransforms)}function lI(t,e,n,r,i,s){const o=t.A(1,e,n),u=[Bo(e,r,n)],c=[i];if(s.length%2!=0)throw new oe(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)u.push(Bo(e,s[v])),c.push(s[v+1]);const d=[],m=$t.empty();for(let v=u.length-1;v>=0;--v)if(!F1(d,u[v])){const C=u[v];let R=c[v];R=mn(R);const k=o.fc(C);if(R instanceof Tu)d.push(C);else{const D=Su(R,k);D!=null&&(d.push(C),m.set(C,D))}}const p=new Jt(d);return new j1(m,p,o.fieldTransforms)}function Su(t,e){if(O1(t=mn(t)))return _f("Unsupported field value:",e,t),M1(t,e);if(t instanceof Eu)return function(r,i){if(!D1(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const u of r){let c=Su(u,i.gc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return U2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=$e.fromDate(r);return{timestampValue:Vl(i.serializer,s)}}if(r instanceof $e){const s=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vl(i.serializer,s)}}if(r instanceof Ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof un)return{bytesValue:t1(i.serializer,r._byteString)};if(r instanceof ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ef(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Sn)return function(o,u){const c=o instanceof Sn?o.toArray():o;return{mapValue:{fields:{[Rv]:{stringValue:Nv},[Rl]:{arrayValue:{values:c.map(m=>{if(typeof m!="number")throw u.yc("VectorValues must only contain numeric values.");return Yh(u.serializer,m)})}}}}}}(r,i);if(l1(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${$h(r)}`)}(t,e)}function M1(t,e){const n={};return bv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gr(t,(r,i)=>{const s=Su(i,e.dc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function O1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $e||t instanceof Ln||t instanceof un||t instanceof ot||t instanceof Eu||t instanceof Sn||l1(t))}function _f(t,e,n){if(!O1(n)||!Tv(n)){const r=$h(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Bo(t,e,n){if((e=mn(e))instanceof mf)return e._internalPath;if(typeof e=="string")return L1(t,e);throw Fl("Field path arguments must be of type string or ",t,!1,void 0,n)}const uI=new RegExp("[~\\*/\\[\\]]");function L1(t,e,n){if(e.search(uI)>=0)throw Fl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mf(...e.split("."))._internalPath}catch{throw Fl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new oe(U.INVALID_ARGUMENT,u+t+c)}function F1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Rl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>tt(o.doubleValue));return new Sn(n)}convertGeoPoint(e){return new Ln(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new $e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Ne(a1(r),9688,{name:e});const i=new Mo(r.get(1),r.get(3)),s=new le(r.popFirst(5));return i.isEqual(n)||ir(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1 extends cI{constructor(e){super(),this.firestore=e}convertBytes(e){return new un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Uo(){return new vf("serverTimestamp")}const Ag="@firebase/firestore",kg="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Bo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dI extends B1{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function U1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class eo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class di extends B1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new tl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=di._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}di._jsonSchemaVersion="firestore/documentSnapshot/1.0",di._jsonSchema={type:st("string",di._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class tl extends di{data(e={}){return super.data(e)}}class is{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new eo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new tl(this._firestore,this._userDataWriter,r.key,r,new eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(u=>{const c=new tl(i._firestore,i._userDataWriter,u.doc.key,u.doc,new eo(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const c=new tl(i._firestore,i._userDataWriter,u.doc.key,u.doc,new eo(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return u.type!==0&&(d=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),m=o.indexOf(u.doc.key)),{type:fI(u.type),doc:c,oldIndex:d,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new oe(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=is._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fI(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */is._jsonSchemaVersion="firestore/querySnapshot/1.0",is._jsonSchema={type:st("string",is._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};function zl(t,e,n){t=Vn(t,ot);const r=Vn(t.firestore,wi),i=U1(t.converter,e,n),s=yf(r);return bu(r,[V1(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function Sc(t,e,n,...r){t=Vn(t,ot);const i=Vn(t.firestore,wi),s=yf(i);let o;return o=typeof(e=mn(e))=="string"||e instanceof mf?lI(s,"updateDoc",t._key,e,n,r):aI(s,"updateDoc",t._key,e),bu(i,[o.toMutation(t._key,hn.exists(!0))])}function bc(t){return bu(Vn(t.firestore,wi),[new Xh(t._key,hn.none())])}function Ma(t,e){const n=Vn(t.firestore,wi),r=Bt(t),i=U1(t.converter,e),s=yf(t.firestore);return bu(n,[V1(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function Bl(t,...e){var d,m,p;t=mn(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Pg(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Pg(e[r])){const v=e[r];e[r]=(d=v.next)==null?void 0:d.bind(v),e[r+1]=(m=v.error)==null?void 0:m.bind(v),e[r+2]=(p=v.complete)==null?void 0:p.bind(v)}let s,o,u;if(t instanceof ot)o=Vn(t.firestore,wi),u=Qh(t._key.path),s={next:v=>{e[r]&&e[r](pI(o,t,v))},error:e[r+1],complete:e[r+2]};else{const v=Vn(t,wu);o=Vn(v.firestore,wi),u=v._query;const C=new z1(o);s={next:R=>{e[r]&&e[r](new is(o,C,v,R))},error:e[r+1],complete:e[r+2]},hI(t._query)}const c=N1(o);return Xb(c,u,i,s)}function bu(t,e){const n=N1(t);return Jb(n,e)}function pI(t,e,n){const r=n.docs.get(e._key),i=new z1(t);return new di(t,i,e._key,r,new eo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){KT(VT),Or(new nr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),u=new wi(new XT(r.getProvider("auth-internal")),new e2(o,r.getProvider("app-check-internal")),y2(o,i),o);return s={useFetchStreams:n,...s},u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Dn(Ag,kg,e),Dn(Ag,kg,"esm2020")})();const $1="@firebase/installations",xf="0.6.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=1e4,H1=`w:${xf}`,q1="FIS_v2",mI="https://firebaseinstallations.googleapis.com/v1",gI=60*60*1e3,yI="installations",vI="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ei=new su(yI,vI,_I);function G1(t){return t instanceof Ii&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1({projectId:t}){return`${mI}/projects/${t}/installations`}function Q1(t){return{token:t.token,requestStatus:2,expiresIn:wI(t.expiresIn),creationTime:Date.now()}}async function Y1(t,e){const r=(await e.json()).error;return Ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function X1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function xI(t,{refreshToken:e}){const n=X1(t);return n.append("Authorization",EI(e)),n}async function J1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function wI(t){return Number(t.replace("s","000"))}function EI(t){return`${q1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=K1(t),i=X1(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:q1,appId:t.appId,sdkVersion:H1},u={method:"POST",headers:i,body:JSON.stringify(o)},c=await J1(()=>fetch(r,u));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Q1(d.authToken)}}else throw await Y1("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=/^[cdef][\w-]{21}$/,Wd="";function II(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=CI(t);return bI.test(n)?n:Wd}catch{return Wd}}function CI(t){return SI(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;function t_(t,e){const n=Iu(t);n_(n,e),AI(n,e)}function n_(t,e){const n=e_.get(t);if(n)for(const r of n)r(e)}function AI(t,e){const n=kI();n&&n.postMessage({key:t,fid:e}),PI()}let ai=null;function kI(){return!ai&&"BroadcastChannel"in self&&(ai=new BroadcastChannel("[Firebase] FID Change"),ai.onmessage=t=>{n_(t.data.key,t.data.fid)}),ai}function PI(){e_.size===0&&ai&&(ai.close(),ai=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="firebase-installations-database",NI=1,Ti="firebase-installations-store";let Ic=null;function wf(){return Ic||(Ic=ou(RI,NI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}})),Ic}async function Ul(t,e){const n=Iu(t),i=(await wf()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&t_(t,e.fid),e}async function r_(t){const e=Iu(t),r=(await wf()).transaction(Ti,"readwrite");await r.objectStore(Ti).delete(e),await r.done}async function Cu(t,e){const n=Iu(t),i=(await wf()).transaction(Ti,"readwrite"),s=i.objectStore(Ti),o=await s.get(n),u=e(o);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!o||o.fid!==u.fid)&&t_(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ef(t){let e;const n=await Cu(t.appConfig,r=>{const i=jI(r),s=DI(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Wd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jI(t){const e=t||{fid:II(),registrationStatus:0};return i_(e)}function DI(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=VI(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MI(t)}:{installationEntry:e}}async function VI(t,e){try{const n=await TI(t,e);return Ul(t.appConfig,n)}catch(n){throw G1(n)&&n.customData.serverCode===409?await r_(t.appConfig):await Ul(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function MI(t){let e=await Rg(t.appConfig);for(;e.registrationStatus===1;)await Z1(100),e=await Rg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ef(t);return r||n}return e}function Rg(t){return Cu(t,e=>{if(!e)throw Ei.create("installation-not-found");return i_(e)})}function i_(t){return OI(t)?{fid:t.fid,registrationStatus:0}:t}function OI(t){return t.registrationStatus===1&&t.registrationTime+W1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI({appConfig:t,heartbeatServiceProvider:e},n){const r=FI(t,n),i=xI(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:H1,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(o)},c=await J1(()=>fetch(r,u));if(c.ok){const d=await c.json();return Q1(d)}else throw await Y1("Generate Auth Token",c)}function FI(t,{fid:e}){return`${K1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(t,e=!1){let n;const r=await Cu(t.appConfig,s=>{if(!s_(s))throw Ei.create("not-registered");const o=s.authToken;if(!e&&UI(o))return s;if(o.requestStatus===1)return n=zI(t,e),s;{if(!navigator.onLine)throw Ei.create("app-offline");const u=WI(s);return n=BI(t,u),u}});return n?await n:r.authToken}async function zI(t,e){let n=await Ng(t.appConfig);for(;n.authToken.requestStatus===1;)await Z1(100),n=await Ng(t.appConfig);const r=n.authToken;return r.requestStatus===0?Tf(t,e):r}function Ng(t){return Cu(t,e=>{if(!s_(e))throw Ei.create("not-registered");const n=e.authToken;return HI(n)?{...e,authToken:{requestStatus:0}}:e})}async function BI(t,e){try{const n=await LI(t,e),r={...e,authToken:n};return await Ul(t.appConfig,r),n}catch(n){if(G1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await r_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ul(t.appConfig,r)}throw n}}function s_(t){return t!==void 0&&t.registrationStatus===2}function UI(t){return t.requestStatus===2&&!$I(t)}function $I(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gI}function WI(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function HI(t){return t.requestStatus===1&&t.requestTime+W1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ef(e);return r?r.catch(console.error):Tf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e=!1){const n=t;return await KI(n),(await Tf(n,e)).token}async function KI(t){const{registrationPromise:e}=await Ef(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){if(!t||!t.options)throw Cc("App Configuration");if(!t.name)throw Cc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Cc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Cc(t){return Ei.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="installations",YI="installations-internal",XI=t=>{const e=t.getProvider("app").getImmediate(),n=QI(e),r=au(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},JI=t=>{const e=t.getProvider("app").getImmediate(),n=au(e,o_).getImmediate();return{getId:()=>qI(n),getToken:i=>GI(n,i)}};function ZI(){Or(new nr(o_,XI,"PUBLIC")),Or(new nr(YI,JI,"PRIVATE"))}ZI();Dn($1,xf);Dn($1,xf,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="/firebase-messaging-sw.js",tC="/firebase-cloud-messaging-push-scope",a_="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",nC="https://fcmregistrations.googleapis.com/v1",l_="google.c.a.c_id",rC="google.c.a.c_l",iC="google.c.a.ts",sC="google.c.a.e",jg=1e4;var Dg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Dg||(Dg={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var $o;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})($o||($o={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function oC(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="fcm_token_details_db",aC=5,Vg="fcm_token_object_Store";async function lC(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ac))return null;let e=null;return(await ou(Ac,aC,{upgrade:async(r,i,s,o)=>{if(i<2||!r.objectStoreNames.contains(Vg))return;const u=o.objectStore(Vg),c=await u.index("fcmSenderId").get(t);if(await u.clear(),!!c){if(i===2){const d=c;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:d.createTime??Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:qn(d.vapidKey)}}}else if(i===3){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:qn(d.auth),p256dh:qn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:qn(d.vapidKey)}}}else if(i===4){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:qn(d.auth),p256dh:qn(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:qn(d.vapidKey)}}}}}})).close(),await gc(Ac),await gc("fcm_vapid_details_db"),await gc("undefined"),uC(e)?e:null}function uC(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="firebase-messaging-database",dC=1,Wo="firebase-messaging-store";let kc=null;function u_(){return kc||(kc=ou(cC,dC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Wo)}}})),kc}async function hC(t){const e=c_(t),r=await(await u_()).transaction(Wo).objectStore(Wo).get(e);if(r)return r;{const i=await lC(t.appConfig.senderId);if(i)return await Sf(t,i),i}}async function Sf(t,e){const n=c_(t),i=(await u_()).transaction(Wo,"readwrite");return await i.objectStore(Wo).put(e,n),await i.done,e}function c_({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Nt=new su("messaging","Messaging",fC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t,e){const n=await If(t),r=d_(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(bf(t.appConfig),i)).json()}catch(o){throw Nt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Nt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Nt.create("token-subscribe-no-token");return s.token}async function mC(t,e){const n=await If(t),r=d_(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${bf(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Nt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Nt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Nt.create("token-update-no-token");return s.token}async function gC(t,e){const r={method:"DELETE",headers:await If(t)};try{const s=await(await fetch(`${bf(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Nt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Nt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function bf({projectId:t}){return`${nC}/projects/${t}/registrations`}async function If({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function d_({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==a_&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=7*24*60*60*1e3;async function vC(t){const e=await xC(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:qn(e.getKey("auth")),p256dh:qn(e.getKey("p256dh"))},r=await hC(t.firebaseDependencies);if(r){if(wC(r.subscriptionOptions,n))return Date.now()>=r.createTime+yC?_C(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await gC(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Mg(t.firebaseDependencies,n)}else return Mg(t.firebaseDependencies,n)}async function _C(t,e){try{const n=await mC(t.firebaseDependencies,e),r={...e,token:n,createTime:Date.now()};return await Sf(t.firebaseDependencies,r),n}catch(n){throw n}}async function Mg(t,e){const r={token:await pC(t,e),createTime:Date.now(),subscriptionOptions:e};return await Sf(t,r),r.token}async function xC(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:oC(e)})}function wC(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return EC(e,t),TC(e,t),SC(e,t),e}function EC(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function TC(t,e){e.data&&(t.data=e.data)}function SC(t,e){var i,s,o,u;if(!e.fcmOptions&&!((i=e.notification)!=null&&i.click_action))return;t.fcmOptions={};const n=((s=e.fcmOptions)==null?void 0:s.link)??((o=e.notification)==null?void 0:o.click_action);n&&(t.fcmOptions.link=n);const r=(u=e.fcmOptions)==null?void 0:u.analytics_label;r&&(t.fcmOptions.analyticsLabel=r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(t){return typeof t=="object"&&!!t&&l_ in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){if(!t||!t.options)throw Pc("App Configuration Object");if(!t.name)throw Pc("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Pc(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Pc(t){return Nt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=IC(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t){try{t.swRegistration=await navigator.serviceWorker.register(eC,{scope:tC}),t.swRegistration.update().catch(()=>{}),await kC(t.swRegistration)}catch(e){throw Nt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function kC(t){return new Promise((e,n)=>{const r=setTimeout(()=>n(new Error(`Service worker not registered after ${jg} ms`)),jg),i=t.installing||t.waiting;t.active?(clearTimeout(r),e()):i?i.onstatechange=s=>{var o;((o=s.target)==null?void 0:o.state)==="activated"&&(i.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e){if(!e&&!t.swRegistration&&await AC(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Nt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=a_)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(t,e){if(!navigator)throw Nt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Nt.create("permission-blocked");return await RC(t,e==null?void 0:e.vapidKey),await PC(t,e==null?void 0:e.serviceWorkerRegistration),vC(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e,n){const r=jC(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[l_],message_name:n[rC],message_time:n[iC],message_device_time:Math.floor(Date.now()/1e3)})}function jC(t){switch(t){case $o.NOTIFICATION_CLICKED:return"notification_open";case $o.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===$o.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Og(n)):t.onMessageHandler.next(Og(n)));const r=n.data;bC(r)&&r[sC]==="1"&&await NC(t,n.messageType,r)}const Lg="@firebase/messaging",Fg="0.12.25";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VC=t=>{const e=new CC(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>DC(e,n)),e},MC=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>h_(e,r)}};function OC(){Or(new nr("messaging",VC,"PUBLIC")),Or(new nr("messaging-internal",MC,"PRIVATE")),Dn(Lg,Fg),Dn(Lg,Fg,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(){try{await sv()}catch{return!1}return typeof window<"u"&&iv()&&NE()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t,e){if(!navigator)throw Nt.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t=dv()){return LC().then(e=>{if(!e)throw Nt.create("unsupported-browser")},e=>{throw Nt.create("indexed-db-unsupported")}),au(mn(t),"messaging").getImmediate()}async function BC(t,e){return t=mn(t),h_(t,e)}function UC(t,e){return t=mn(t),FC(t,e)}OC();const $C={apiKey:"AIzaSyDz0SrMIVShBrG78XKrrnTwQ--vaqk3j0o",authDomain:"delta-entrerriano.firebaseapp.com",projectId:"delta-entrerriano",storageBucket:"delta-entrerriano.firebasestorage.app",messagingSenderId:"508752370141",appId:"1:508752370141:web:fbfc975d256bfa760c3e34"},f_=cv($C),pt=nI(f_),Oa="serviceWorker"in navigator?zC(f_):null;var p_={exports:{}};/*! dom-to-image-more v3.10.2 2026-07-10 19:56:41 UTC */(function(t,e){(n=>{let r=(()=>{let O=0;return{escape:function(P){return P.replace(/([.*+?^${}()|[\]/\\])/g,"\\$1")},isDataUrl:function(P){return P.search(/^(data:)/)!==-1},canvasToBlob:function(P){return P.toBlob?new Promise(function(Y){P.toBlob(Y)}):(W=P,new Promise(function(Y){var te=V(W.toDataURL().split(",")[1]),ne=te.length,X=new Uint8Array(ne);for(let ae=0;ae<ne;ae++)X[ae]=te.charCodeAt(ae);Y(new Blob([X],{type:"image/png"}))}));var W},resolveUrl:function(P,W){var Y=document.implementation.createHTMLDocument(),te=Y.createElement("base"),ne=(Y.head.appendChild(te),Y.createElement("a"));return Object.assign(ne.style,d),Y.body.appendChild(ne),te.href=W,ne.href=P,ne.href},getAndEncode:function(P,W){return he(P,W,!0).then(ie)},getResourceText:function(P,W,Y){return he(P,W,Y).then(se)},uid:function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+O++},asArray:function(P){return Array.from(P)},escapeXhtml:function(P){return P.replace(/%/g,"%25").replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(P){return P!=="data:,"?new Promise(function(W,Y){let te=document.createElementNS(m,"svg"),ne=new Image;D.impl.options.useCredentials&&(ne.crossOrigin="use-credentials"),ne.onload=function(){function X(){window&&window.requestAnimationFrame?window.requestAnimationFrame(function(){W(ne)}):W(ne)}te.remove(),typeof ne.decode=="function"?ne.decode().then(X,X):X()},ne.onerror=X=>{te.remove();var ae=String(P).split(",",1)[0],ae=new Error("dom-to-image-more: failed to rasterize the generated image ("+ae+", "+String(P).length+" bytes). The source may contain malformed markup, an unsupported element, or a tainted/cross-origin resource.");ae.cause=X,Y(ae)},te.appendChild(ne),Object.assign(te.style,d),ne.src=P,document.body.appendChild(te)}):Promise.resolve()},width:function(P){var W,Y,te=xe(P,"width");return isNaN(te)?(W=fe(P))?W.width:(W=xe(P,"border-left-width"),Y=xe(P,"border-right-width"),P.scrollWidth+W+Y):te},height:function(P){var W,Y,te=xe(P,"height");return isNaN(te)?(W=fe(P))?W.height:(W=xe(P,"border-top-width"),Y=xe(P,"border-bottom-width"),P.scrollHeight+W+Y):te},getWindow:L,isElement:Q,isElementHostForOpenShadowRoot:function(P){return Q(P)&&P.shadowRoot!==null},isShadowRoot:ge,isInShadowRoot:ce,isHTMLElement:function(P){return G(P,"HTMLElement")},isHTMLCanvasElement:function(P){return G(P,"HTMLCanvasElement")},isHTMLInputElement:function(P){return G(P,"HTMLInputElement")},isHTMLImageElement:function(P){return G(P,"HTMLImageElement")},isHTMLLinkElement:function(P){return G(P,"HTMLLinkElement")},isHTMLScriptElement:function(P){return G(P,"HTMLScriptElement")},isHTMLStyleElement:function(P){return G(P,"HTMLStyleElement")},isHTMLTextAreaElement:function(P){return G(P,"HTMLTextAreaElement")},isShadowSlotElement:function(P){return ce(P)&&G(P,"HTMLSlotElement")},isSVGElement:function(P){return G(P,"SVGElement")},isSVGImageElement:function(P){return G(P,"SVGImageElement")},isSVGSVGElement:function(P){return G(P,"SVGSVGElement")},isSVGRectElement:function(P){return G(P,"SVGRectElement")},isSVGUseElement:function(P){return G(P,"SVGUseElement")},isDimensionMissing:function(P){return isNaN(P)||P<=0},isInstanceOf:G};function L(P){return P=P?P.ownerDocument:void 0,(P?P.defaultView:void 0)||(typeof window<"u"?window:void 0)||(n!==void 0?n:void 0)||globalThis}function G(P,W){var Y=L(P);return ue(P,Y,W)||ue(P,Y&&Y.parent,W)}function ue(P,W,Y){try{var te=W&&W[Y];return typeof te=="function"&&P instanceof te}catch{return!1}}function ge(P){return G(P,"ShadowRoot")}function ce(P){return P!=null&&P.getRootNode!==void 0&&ge(P.getRootNode())}function Q(P){return G(P,"Element")}function ie(P){return P==null||P===""?"":typeof P=="string"?P:ee(P,"readAsDataURL","")}function se(P){if(P==null||P==="")return null;if(typeof P!="string")return ee(P,"readAsText",null);{var W=P.indexOf(",");if(W===-1)return"";var Y=P.slice(0,W),P=P.slice(W+1);if(!/;base64/i.test(Y))return decodeURIComponent(P);let ne=V(P),X="";for(let ae=0;ae<ne.length;ae+=1)X+="%"+("00"+ne.charCodeAt(ae).toString(16)).slice(-2);return decodeURIComponent(X)}}function ee(P,W,Y){return new Promise(function(te){let ne=new FileReader;ne.onloadend=function(){te(ne.result)},ne.onerror=function(){te(Y)};try{ne[W](P)}catch{te(Y)}})}function he(P,W,Y){let te=D.impl.urlCache.find(function(ne){return ne.url===P});if(te||(te={url:P,promise:null},D.impl.urlCache.push(te)),te.promise===null){let ne=function(je){var Ae=D.impl.options.requestInterceptor;if(typeof Ae=="function")try{return Ae(P,{type:W,status:je})}catch(Kt){y("requestInterceptor threw:",Kt)}},X=function(je){return je!=null},ae=ne(void 0);if(X(ae))return te.promise=Promise.resolve(ae),te.promise;if(Y===!1)return te.promise=Promise.resolve(null),te.promise;D.impl.options.cacheBust&&(P+=(/\?/.test(P)?"&":"?")+new Date().getTime()),te.promise=new Promise(function(je){let Ae=new XMLHttpRequest;function Kt(Se){Re(Se,!1),je(null)}function sn(){Dt("Status:"+Ae.status+" while fetching resource: "+P)}function Dt(Se){var St=ne(Ae.status);X(St)?Promise.resolve(St).then(function(Xe){Re(Se,!0),je(Xe)},function(){y(Se),Kt(Se)}):(St=W===k.IMAGE||W===k.CSS_IMAGE?D.impl.options.imagePlaceholder:void 0)?(Re(Se,!0),je(St)):(y(Se),Kt(Se))}function Re(Se,St){var Xe=D.impl.options.onImageError;if(typeof Xe=="function")try{Xe({url:P,message:Se,status:Ae.status,willUsePlaceholder:St})}catch(Ve){y("onImageError handler threw:",Ve)}}if(Ae.timeout=D.impl.options.httpTimeout,Ae.onerror=sn,Ae.ontimeout=sn,Ae.onloadend=function(){var Se;Ae.readyState===XMLHttpRequest.DONE&&((Se=Ae.status)===0&&P.toLowerCase().startsWith("file://")||200<=Se&&Se<=300&&Ae.response!==null?(Se=Ae.response)instanceof Blob?je(Se):Dt("Response was not a Blob (got "+typeof Se+") while fetching resource: "+P):sn())},0<D.impl.options.useCredentialsFilters.length&&(D.impl.options.useCredentials=0<D.impl.options.useCredentialsFilters.filter(Se=>0<=P.search(Se)).length),D.impl.options.useCredentials&&(Ae.withCredentials=!0),D.impl.options.corsImg&&P.indexOf("http")===0&&P.indexOf(window.location.origin)===-1){var Le=(D.impl.options.corsImg.method||"GET").toUpperCase()==="POST"?"POST":"GET";Ae.open(Le,(D.impl.options.corsImg.url||"").replace("#{cors}",P),!0);let Se=!1,St=D.impl.options.corsImg.headers||{},Xe=(Object.keys(St).forEach(function(Ve){St[Ve].indexOf("application/json")!==-1&&(Se=!0),Ae.setRequestHeader(Ve,St[Ve])}),(Ve=>{try{return JSON.parse(JSON.stringify(Ve))}catch(bt){y("corsImg.data is missing or invalid",bt),Kt("corsImg.data is missing or invalid")}})(D.impl.options.corsImg.data||""));Object.keys(Xe).forEach(function(Ve){typeof Xe[Ve]=="string"&&(Xe[Ve]=Xe[Ve].replace("#{cors}",P))}),Ae.responseType="blob",Ae.send(Se?JSON.stringify(Xe):Xe)}else Ae.open("GET",P,!0),Ae.responseType="blob",Ae.send()})}return te.promise}function fe(P){if(P.nodeType!==g||typeof P.getBBox!="function")return null;try{var W=P.getBBox();return W&&(W.width||W.height)?W:null}catch{return null}}function xe(P,W){if(P.nodeType===g){let Y=S(P).getPropertyValue(W);if(Y.slice(-2)==="px")return Y=Y.slice(0,-2),parseFloat(Y)}return NaN}})(),i=(()=>{let O=/url\(\s*(["']?)((?:\\.|[^\\)])+)\1\s*\)/gm;return{inlineAll:function(ce,Q,ie,se){return L(ce)?Promise.resolve(ce).then(G).then(function(ee){return D.impl.options.filterUrls?ee.filter(function(he){return D.impl.options.filterUrls(he,Q)}):ee}).then(function(ee){let he=Promise.resolve(ce);return ee.forEach(function(fe){he=he.then(function(xe){return ge(xe,fe,Q,ie,se)})}),he}):Promise.resolve(ce)},shouldProcess:L,impl:{readUrls:G,inline:ge,urlAsRegex:ue}};function L(ce){return ce.search(O)!==-1}function G(ce){for(var Q,ie=[];(Q=O.exec(ce))!==null;)ie.push(Q[2]);return ie.filter(function(se){return!r.isDataUrl(se)})}function ue(ce){return new RegExp(`url\\((["']?)(${r.escape(ce)})\\1\\)`,"gm")}function ge(ce,Q,ie,se,ee){return Promise.resolve(Q).then(function(he){return ie?r.resolveUrl(he,ie):he}).then(function(he){return(ee||r.getAndEncode)(he,se)}).then(function(he){var fe=ue(Q);return ce.replace(fe,`url($1${he}$1)`)})}})(),s={resolveAll:function(){return o().then(function(O){return Promise.all(O.map(function(L){return L.resolve()}))}).then(function(O){return O.join(`
`)})},impl:{readAll:o}};function o(){return Promise.resolve(r.asArray(document.styleSheets)).then(function(L){let G=typeof D.impl.options.requestInterceptor=="function",ue={};return Promise.all(L.map(function(ge){let ce=ge.href;if(!ce||ue[ce])return ge;ue[ce]=!0;var Q=(ie=>{try{return!ie.cssRules}catch{return!0}})(ge)&&(ie=>{var se=D.impl.options.loadExternalStyleSheet;if(typeof se=="function")try{return se(ie)===!0}catch(ee){return y("domtoimage: loadExternalStyleSheet predicate threw:",ee),!1}return se===!0})(ce);return G||Q?r.getResourceText(ce,k.STYLESHEET,Q).then(function(ie){return ie&&((se,ee)=>{try{var he=document.implementation.createHTMLDocument(""),fe=he.createElement("style");return fe.appendChild(document.createTextNode((xe=ee,se.replace(/url\((['"]?)([^'")]+)\1\)/g,function(P,W,Y){return Y=Y.trim(),r.isDataUrl(Y)||/^[a-z][a-z0-9+.-]*:/i.test(Y)?P:`url(${W}${r.resolveUrl(Y,xe)}${W})`})))),he.body.appendChild(fe),fe.sheet}catch{return null}var xe})(ie,ce)||ge}):ge}))}).then(function(L){let G=[];return L.forEach(function(ue){var ge=Object.getPrototypeOf(ue);if(Object.prototype.hasOwnProperty.call(ge,"cssRules"))try{r.asArray(ue.cssRules||[]).forEach(G.push.bind(G))}catch(ce){D.impl.options.ignoreCSSRuleErrors||y("domtoimage: Error while reading CSS rules from: "+ue.href,ce)}}),G}).then(function(L){return L.filter(function(G){return G.type===CSSRule.FONT_FACE_RULE}).filter(function(G){return i.shouldProcess(G.style.getPropertyValue("src"))})}).then(function(L){return L.map(O)});function O(L){return{resolve:function(){var G=(L.parentStyleSheet||{}).href;return i.inlineAll(L.cssText,G,k.FONT)},src:function(){return L.style.getPropertyValue("src")}}}}let u={inlineAll:function O(L){return r.isElement(L)?((G=L).style?(ue=["background","background-image","mask","mask-image","-webkit-mask","-webkit-mask-image"].map(function(ge){let ce=G.style.getPropertyValue(ge),Q=G.style.getPropertyPriority(ge);return ce?i.inlineAll(ce,void 0,k.CSS_IMAGE).then(function(ie){G.style.setProperty(ge,ie,Q)}):Promise.resolve()}),Promise.all(ue).then(function(){return G})):Promise.resolve(G)).then(function(){return r.isHTMLImageElement(L)?c(L).inline():r.isSVGImageElement(L)?!(ce=(ge=L).getAttribute("href")||ge.getAttributeNS(p,"href")||ge.getAttribute("xlink:href"))||r.isDataUrl(ce)?Promise.resolve(ge):Promise.resolve(ce).then(function(Q){return(0,r.getAndEncode)(Q,k.IMAGE)}).then(function(Q){return Q&&(ge.setAttributeNS(p,"xlink:href",Q),ge.setAttribute("href",Q)),ge}):Promise.all(r.asArray(L.childNodes).map(O));var ge,ce}):Promise.resolve(L);var G,ue},impl:{newImage:c}};function c(O){return{inline:function(L){return r.isDataUrl(O.src)?Promise.resolve():Promise.resolve(O.src).then(function(G){return(L||r.getAndEncode)(G,k.IMAGE)}).then(function(G){return new Promise(function(ue){O.onload=ue,O.onerror=ue,O.src=G})})}}}let d={position:"fixed",left:"-9999px",visibility:"hidden"},m="http://www.w3.org/2000/svg",p="http://www.w3.org/1999/xlink",v="data:image/svg+xml;charset=utf-8,",C={warn:function(...O){console.warn(...O)},error:function(...O){console.error(...O)}},R={copyDefaultStyles:!0,imagePlaceholder:void 0,cacheBust:!1,useCredentials:!1,useCredentialsFilters:[],httpTimeout:3e4,styleCaching:"strict",corsImg:void 0,adjustClonedNode:void 0,filterStyles:void 0,filterUrls:void 0,adjustPseudoElement:void 0,onImageError:void 0,ensureShown:!1,pixelRatio:1,preserveScroll:!1,ignoreCSSRuleErrors:!1,requestInterceptor:void 0,loadExternalStyleSheet:!1,logger:C},k=Object.freeze({IMAGE:"image",CSS_IMAGE:"css-image",FONT:"font",STYLESHEET:"stylesheet"}),D={toSvg:T,toPng:function(O,L){return E(O,L).then(function(G){return G.toDataURL()})},toJpeg:function(O,L){return E(O,L).then(function(G){return G.toDataURL("image/jpeg",(L?L.quality:void 0)||1)})},toBlob:function(O,L){return E(O,L).then(r.canvasToBlob)},toPixelData:function(O,L){return E(O,L).then(function(G){return G.getContext("2d").getImageData(0,0,r.width(O),r.height(O)).data})},toCanvas:E,ResourceType:k,impl:{fontFaces:s,images:u,util:r,inliner:i,urlCache:[],options:{},copyOptions:function(O){Object.keys(R).forEach(function(L){D.impl.options[L]=(O[L]===void 0?R:O)[L]})},resetUrlCache:b}};function b(){D.impl.urlCache=[]}t.exports=D;let g=(typeof Node<"u"?Node.ELEMENT_NODE:void 0)||1,S=j("getComputedStyle"),V=j("atob");function j(O){return(n!==void 0?n[O]:void 0)||(typeof window<"u"?window[O]:void 0)||globalThis[O]}function F(...O){_("warn",O)}function y(...O){_("error",O)}function _(ue,L){var G=D.impl.options.logger||C,ue=G[ue];typeof ue=="function"&&ue.apply(G,L)}function T(O,L){let G=D.impl.util.getWindow(O),ue=(L=L||{},D.impl.copyOptions(L),[]);return A=[],G&&G.document?(()=>{var Q=G.document;if(!Q.fonts||!Q.fonts.ready)return Promise.resolve();let ie=D.impl.options.httpTimeout||3e4,se,ee=Promise.resolve(Q.fonts.ready).then(function(){return!1},function(){return!1}),he=new Promise(function(fe){se=G.setTimeout(function(){fe(!0)},ie)});return Promise.race([ee,he]).then(function(fe){G.clearTimeout(se),fe&&F("dom-to-image-more: timed out after "+ie+"ms waiting for document fonts to finish loading (document.fonts.ready); rendering anyway — the output may have missing glyphs or fallback-font metrics.")})})().then(function(){var Q=O;if(Q.nodeType===g)return Q;var ie,se=Q,ee=Q.parentNode;if(ee)return ie=document.createElement("span"),ee.replaceChild(ie,se),ie.append(Q),ue.push({parent:ee,child:se,wrapper:ie}),ie;throw new Error("Cannot render a non-element node that is not attached to a parent; wrap it in an element or attach it to the document first.")}).then(function(Q){return function ie(se,ee,he,fe){var xe=ee.filter;return se===w||r.isHTMLScriptElement(se)||r.isHTMLStyleElement(se)||r.isHTMLLinkElement(se)||he!==null&&xe&&!xe(se)?Promise.resolve():Promise.resolve(se).then(function(P){return r.isHTMLCanvasElement(P)?r.makeImage(P.toDataURL()):P.cloneNode(!1)}).then(function(P){return ee.adjustClonedNode&&ee.adjustClonedNode(se,P,!1),Promise.resolve(P)}).then(function(P){{var W=P,P=(P=se,r.isElementHostForOpenShadowRoot(P)?P.shadowRoot:P);let te=(X=>{if(r.isShadowSlotElement(X)){var ae=X.assignedNodes();if(ae&&0<ae.length)return ae}return X.childNodes})(P),ne=Promise.resolve();if(te.length!==0){let X=S((P=P,r.isShadowRoot(P)?P.host:P));r.asArray(te).forEach(function(ae){ne=ne.then(function(){return ie(ae,ee,X).then(function(je){je&&W.appendChild(je)})})})}return ne.then(function(){return W})}}).then(function(P){return ee.adjustClonedNode&&ee.adjustClonedNode(se,P,!0),Promise.resolve(P)}).then(function(P){return W=P,Y=se,!r.isElement(W)||r.isShadowSlotElement(Y)?Promise.resolve(W):Promise.resolve().then(function(){if(r.isHTMLImageElement(Y)&&typeof Y.decode=="function"&&!(Y.complete&&0<Y.naturalWidth))return Y.decode().catch(function(){})}).then(function(){if(W.style){var te=Y,ne=W,X,ae,je=S(te);if(je.cssText)ne.style.cssText=je.cssText,(Re=ne.style).font=(Le=je).font,Re.fontFamily=Le.fontFamily,Re.fontFeatureSettings=Le.fontFeatureSettings,Re.fontKerning=Le.fontKerning,Re.fontSize=Le.fontSize,Re.fontStretch=Le.fontStretch,Re.fontStyle=Le.fontStyle,Re.fontVariant=Le.fontVariant,Re.fontVariantCaps=Le.fontVariantCaps,Re.fontVariantEastAsian=Le.fontVariantEastAsian,Re.fontVariantLigatures=Le.fontVariantLigatures,Re.fontVariantNumeric=Le.fontVariantNumeric,Re.fontVariationSettings=Le.fontVariationSettings,Re.fontWeight=Le.fontWeight;else{{var Ae=ee,Kt=te,sn=je,Dt=he,Re=ne;let Se=D.impl.options.copyDefaultStyles?((Un,Ve)=>{var bt,Fe=(ke=>{var ht=[];do if(ke.nodeType===g){var _e=ke.tagName;if(ht.push(_e),z.includes(_e))break}while(ke=ke.parentNode);return ht})(Ve),Un=(Un.styleCaching!=="relaxed"?Fe:Fe.filter((ke,ht,_e)=>ht===0||ht===_e.length-1)).join(">")+((bt=Ve)&&bt.hasAttribute?H.filter(function(ke){return bt.hasAttribute(ke)}).map(function(ke){return`[${ke}]`}).join(""):"");if(K[Un])return K[Un];var ki,$n=Fe=((ke,ht)=>{let _e=ke.body;do var Ft=ht.pop(),Ft=ke.createElement(Ft);while(_e.appendChild(Ft),_e=Ft,0<ht.length);return _e.textContent="​",_e})((ki=(()=>{if(w)return w.contentWindow;ht=document.characterSet||"UTF-8",ke=(ke=document.doctype)?(`<!DOCTYPE ${bs(ke.name)} ${bs(ke.publicId)} `+bs(ke.systemId)).trim()+">":"",(w=document.createElement("iframe")).id="domtoimage-sandbox-"+r.uid(),Object.assign(w.style,d),document.body.appendChild(w);var ke,ht,_e=w,Ft="domtoimage-sandbox";try{return _e.contentWindow.document.write(ke+`<html><head><meta charset='${ht}'><title>${Ft}</title></head><body></body></html>`),_e.contentWindow}catch{}var on=document.createElement("meta");on.setAttribute("charset",ht);try{var gn=document.implementation.createHTMLDocument(Ft),ur=(gn.head.appendChild(on),ke+gn.documentElement.outerHTML);return _e.setAttribute("srcdoc",ur),_e.contentWindow}catch{}return _e.contentDocument.head.appendChild(on),_e.contentDocument.title=Ft,_e.contentWindow;function bs(yn){var ra;return yn?((ra=document.createElement("div")).innerText=yn,ra.innerHTML):""}})()).document,Fe),Qr=Ve,Wn=(Qr&&Qr.hasAttribute&&H.forEach(function(ke){Qr.hasAttribute(ke)&&$n.setAttribute(ke,Qr.getAttribute(ke))}),Ve=((ke,ht)=>{let _e={},Ft=ke.getComputedStyle(ht),on=(r.asArray(Ft).forEach(function(ur){_e[ur]=ur==="width"||ur==="height"?"auto":Ft.getPropertyValue(ur)}),ht.parentElement),gn;return on&&(gn=ke.getComputedStyle(on).getPropertyValue("font-size"),_e[et]=_e["font-size"]!==gn),_e})(ki,Fe),Fe);do var Pi=Wn.parentElement;while(Pi!==null&&Pi.removeChild(Wn),(Wn=Pi)&&Wn.tagName!=="BODY");return K[Un]=Ve})(Ae,Kt):{},St=Re.style;r.asArray(sn).forEach(function(Xe){var Ve,bt,Fe;Ae.filterStyles&&!Ae.filterStyles(Kt,Xe)||(Ve=sn.getPropertyValue(Xe),Fe=Se[Xe],bt=Dt?Dt.getPropertyValue(Xe):void 0,St.getPropertyValue(Xe))||(Ve!==Fe||Dt&&Ve!==bt||Xe==="font-size"&&Se[et])&&(Fe=sn.getPropertyPriority(Xe),Ye(St,Xe,Ve,Fe))}),X=sn,ae=St,["top","right","bottom","left"].forEach(function(Fe){var Ve,bt=`border-${Fe}-width`,Fe=X.getPropertyValue(`border-${Fe}-style`);Fe&&Fe!=="none"&&!ae.getPropertyValue(bt)&&(Fe=X.getPropertyValue(bt))&&(Ve=X.getPropertyPriority(bt),Ye(ae,bt,Fe,Ve))})}he===null&&(["inset-block","inset-block-start","inset-block-end"].forEach(Se=>ne.style.removeProperty(Se)),["left","right","top","bottom"].forEach(Se=>{ne.style.getPropertyValue(Se)&&ne.style.setProperty(Se,"0px")}))}Le=S(Y).getPropertyValue("visibility"),he===null?Le!=="visible"&&W.style.setProperty("visibility","visible"):Le===he.getPropertyValue("visibility")&&W.style.removeProperty("visibility")}var Le}).then(function(){let te=r.uid();return Promise.all([":before",":after"].map(function(ne){let X=S(Y,ne),ae=X.getPropertyValue("content");if(ae!==""&&ae!=="none"){let Ae;if(ee.adjustPseudoElement){var je=ee.adjustPseudoElement(Y,ne,X);if(je===!1)return;je&&typeof je=="object"&&(Ae=je)}let Kt=W.getAttribute("class")||"",sn=(W.setAttribute("class",Kt+" "+te),`.${te}:`+ne),Dt=X.cssText?X.cssText+` content: ${ae};`:r.asArray(X).map(function(Re){return Re+": "+X.getPropertyValue(Re)+(X.getPropertyPriority(Re)?" !important":"")}).join("; ")+";";return Ae&&(Dt+=Object.keys(Ae).map(function(Re){return` ${Re}: ${Ae[Re]};`}).join("")),i.inlineAll(Dt,void 0,k.CSS_IMAGE).then(function(Re){var Le=document.createElement("style");Le.appendChild(document.createTextNode(sn+`{${Re}}`)),W.appendChild(Le)})}}))}).then(function(){r.isHTMLTextAreaElement(Y)&&(W.innerHTML=Y.value),r.isHTMLInputElement(Y)&&W.setAttribute("value",Y.value)}).then(function(){if(W.attributes&&W.removeAttribute){var te=[];for(let X=0;X<W.attributes.length;X+=1){var ne=W.attributes[X].name;/["'=<>/\s]/.test(ne)&&te.push(ne)}te.forEach(function(X){W.removeAttribute(X)})}}).then(function(){if(ee.preserveScroll&&W.style){var te=Y.scrollLeft||0,ne=Y.scrollTop||0;if(te!==0||ne!==0){W.style.overflow="hidden";let X=`translate(${-te}px, ${-ne}px)`;r.asArray(W.children).forEach(function(ae){var je;ae.style&&(je=ae.style.transform&&ae.style.transform!=="none"?" "+ae.style.transform:"",ae.style.transform=X+je)})}}}).then(function(){if(r.isSVGElement(W)&&(W.setAttribute("xmlns",m),r.isSVGRectElement(W)&&["width","height"].forEach(function(X){var ae=W.getAttribute(X);ae&&W.style.setProperty(X,ae)}),r.isSVGUseElement(W))){var te=Y,ne=te.getAttribute("href")||te.getAttributeNS(p,"href")||te.getAttribute("xlink:href");if(ne&&ne.charAt(0)==="#"){let X=ne.slice(1);A.some(ae=>ae.id===X)||(ne=te.ownerDocument.getElementById(X))&&((te=ne.cloneNode(!0)).setAttribute("xmlns",m),A.push({id:X,node:te}))}}}).then(function(){var te;r.isElement(W)&&(()=>{var ne=Y.children||[];for(let X=0;X<ne.length;X+=1)if(ne[X].tagName==="CAPTION")return 1})()&&((te=S(Y).getPropertyValue("display"))!=="table"&&te!=="inline-table"||(W.style.removeProperty("height"),W.style.removeProperty("block-size")))}).then(function(){r.isHTMLImageElement(W)&&(W.removeAttribute("loading"),Y.srcset||Y.sizes)&&(W.removeAttribute("srcset"),W.removeAttribute("sizes"),W.src=Y.currentSrc||Y.src)}).then(function(){return W});var W,Y})}(Q,L,null)}).then(function(Q){if(A.length!==0){var ie=document.createElementNS(m,"svg");ie.setAttribute("xmlns",m),ie.setAttribute("width","0"),ie.setAttribute("height","0"),ie.style.setProperty("position","absolute"),ie.style.setProperty("width","0"),ie.style.setProperty("height","0"),ie.style.setProperty("overflow","hidden");let se=document.createElementNS(m,"defs"),ee=(ie.appendChild(se),new Set),he=(Q.getAttribute("id")&&ee.add(Q.getAttribute("id")),Q.querySelectorAll("[id]").forEach(function(fe){ee.add(fe.getAttribute("id"))}),0);A.forEach(function(fe){ee.has(fe.id)||(se.appendChild(fe.node),he+=1)}),0<he&&Q.insertBefore(ie,Q.firstChild)}return Q}).then(L.disableEmbedFonts?Promise.resolve(O):I).then(L.disableInlineImages?Promise.resolve(O):Ce).then(function(Q){Q.style&&(Q.style.margin="0"),L.bgcolor&&(Q.style.backgroundColor=L.bgcolor),L.width&&(Q.style.width=L.width+"px"),L.height&&(Q.style.height=L.height+"px"),L.style&&Object.assign(Q.style,L.style);let ie=null;return typeof L.onclone=="function"&&(ie=L.onclone(Q)),Promise.resolve(ie).then(function(){return Q})}).then(function(Q){if(r.isSVGElement(O)&&!r.isSVGSVGElement(O)){let ie=Q,se=ce(ie),ee;try{ee=O.getBBox()}catch{ee={x:0,y:0,width:0,height:0}}finally{se()}ie.removeAttribute("transform"),ie.style.removeProperty("transform");let he=L.width||ee.width,fe=L.height||ee.height;return Promise.resolve(ie).then(function(xe){return xe.setAttribute("xmlns",m),new XMLSerializer().serializeToString(xe)}).then(ge).then(r.escapeXhtml).then(function(xe){var P=(r.isDimensionMissing(he)?"":` width="${he}"`)+(r.isDimensionMissing(fe)?"":` height="${fe}"`),W=`${ee.x} ${ee.y} ${ee.width} `+ee.height;return`<svg xmlns="${m}"${P} viewBox="${W}">${xe}</svg>`}).then(function(xe){return v+xe})}{let ie=ce(Q),se,ee;try{se=L.width||r.width(O),ee=L.height||r.height(O)}finally{ie()}return Promise.resolve(Q).then(function(he){return he.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(he)}).then(ge).then(r.escapeXhtml).then(function(he){var fe=(r.isDimensionMissing(se)?' width="100%"':` width="${se}"`)+(r.isDimensionMissing(ee)?' height="100%"':` height="${ee}"`),xe=(r.isDimensionMissing(se)?"":` width="${se}"`)+(r.isDimensionMissing(ee)?"":` height="${ee}"`);return`<svg xmlns="${m}"${xe}><foreignObject${fe}>${he}</foreignObject></svg>`}).then(function(he){return v+he})}}).finally(function(){for(;0<ue.length;){var Q=ue.pop();try{Q.parent.replaceChild(Q.child,Q.wrapper)}catch(ie){y("domtoimage: failed to restore wrapped node",ie)}}b(),A=[],w&&(w.remove(),w=null),rn&&clearTimeout(rn),rn=setTimeout(()=>{rn=null,K={}},2e4)}):Promise.reject(new Error("dom-to-image-more: a browser DOM is required (SSR)"));function ge(Q){return Q.replace(/url\(&quot;([^]*?)&quot;\)/g,function(ie,se){return 0<=se.indexOf("'")?ie:`url('${se}')`})}function ce(Q){function ie(){}if(!L.ensureShown)return ie;var se=S(O);if(se.getPropertyValue("opacity")==="0"&&Q.style.setProperty("opacity","1"),se.getPropertyValue("display")!=="none")return ie;let ee=O.style.getPropertyValue("display"),he=O.style.getPropertyPriority("display");return O.style.removeProperty("display"),S(O).getPropertyValue("display")==="none"&&(se=ee&&ee!=="none"?ee:"revert",O.style.setProperty("display",se,"important")),function(){var fe=S(O).getPropertyValue("display");Q.style.setProperty("display",fe==="none"?"block":fe),ee?O.style.setProperty("display",ee,he):O.style.removeProperty("display")}}}function E(O,L){return T(O,L=L||{}).then(r.makeImage).then(function(G){var ue=(fe=>{let se=L.width||r.width(fe),ee=L.height||r.height(fe);r.isDimensionMissing(se)&&(se=r.isDimensionMissing(ee)?300:2*ee),r.isDimensionMissing(ee)&&(ee=se/2);var he,fe=(typeof L.scale=="number"?L.scale:1)*(typeof L.pixelRatio=="number"?L.pixelRatio:1),xe=(xe=se,P=ee,fe=fe,!(0<xe&&0<P&&0<fe)||fe<=(he=Math.min(16384/xe,16384/P,Math.sqrt(268435456/(xe*P))))?fe:(F("dom-to-image-more: the requested "+Math.round(xe*fe)+"×"+Math.round(P*fe)+" canvas exceeds the browser limit; clamping the effective scale from "+fe+" to "+he+". Capture detail may be reduced — render a smaller region or lower scale/pixelRatio."),he)),P=document.createElement("canvas");return P.width=se*xe,P.height=ee*xe,L.bgcolor&&((fe=P.getContext("2d")).fillStyle=L.bgcolor,fe.fillRect(0,0,P.width,P.height)),{canvas:P,scale:xe,width:se,height:ee}})(O),ge=ue.canvas,ce=ue.scale,Q=ge.getContext("2d");return Q.msImageSmoothingEnabled=!1,Q.imageSmoothingEnabled=!1,G&&(Q.scale(ce,ce),Q.drawImage(G,0,0,ue.width,ue.height)),ge})}let w=null,A=[];function I(O){return s.resolveAll().then(function(L){var G;return L!==""&&(G=document.createElement("style"),O.appendChild(G),G.appendChild(document.createTextNode(L))),O})}function Ce(O){return u.inlineAll(O).then(function(){return O})}function Ye(O,L,G,ue){var ge=0<=["background-clip"].indexOf(L);ue?(O.setProperty(L,G,ue),ge&&O.setProperty("-webkit-"+L,G,ue)):(O.setProperty(L,G),ge&&O.setProperty("-webkit-"+L,G))}let et=Symbol("dtim-ua-relative-font-size"),rn=null,K={},z=["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DETAILS","DIALOG","DD","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","LI","MAIN","NAV","OL","P","PRE","SECTION","SVG","TABLE","UL","math","svg","BODY","HEAD","HTML"],H=["href"]})(O_)})(p_);var WC=p_.exports;const Ho=L_(WC),m_="/deltaEntrerriano/logo.png",or=({size:t=48,className:e="",style:n={}})=>l.jsx("img",{src:m_,width:t,height:t,className:e,alt:"Delta Entrerriano",style:{objectFit:"contain",display:"block",...n}}),qo=["Portero","Defensa","Mediocampista","Delantero"],HC=["DEL","DEL","MED","DEF","DEF"];function qC(){const t=[];return t.push({id:"gk-0",label:"POR",x:50,y:87,active:!0,isGK:!0}),[10,24,40,56,72].forEach((n,r)=>{const i=HC[r];for(let s=0;s<5;s++){const o=10+20*s;t.push({id:`r${r}-${s}`,label:i,x:o,y:n,active:!0,isGK:!1})}}),t}const GC=qC(),KC={win:[{title:"¡De una, chabones! 🏆",content:"Como siempre, los pibitos del Delta salieron a romperla y la rompieron. El rival llegó confiado y se fue con las manos en los bolsillos. ¡Eso es Delta, belén!"},{title:"¡Los rompimooooos! 🔥",content:"Partido terminado, cuentas claras. Los de Delta no se anduvieron con chiquitas y le dieron un baño como la gente. ¡A festejar que se puede!"},{title:"¿Quién dijo miedo? 🐮‍💨",content:"Los carpinchos salieron a la cancha con hambre y se comieron todo. El rival no sabía dónde meterse. ¡Otra vez a cobrar, muchachos!"},{title:"¡Victoria del alma! ★",content:"No hubo caso, cuando Delta mete primera no para más nadie. El equipo estuvo filoso de arriba abajo y el resultado lo dice todo. ¡Arriba Delta!"},{title:"¡Cagándolos a cascotazos! 🧠",content:"Le mostramos cómo se juega al fútbol. Lo que fue el partido no tiene discusión: Delta manda y punto. ¡La puta madre qué equipazo!"}],loss:[{title:"Nos rompieron bien el culo 😬",content:"Qué queremos que te digamos... nos dieron una paliza de las bravas. Pero cabeza arriba, que el que no pierde nunca es porque no juega. La revancha viene."},{title:"Fuimos, la vimos, nos la dieron 💨",content:"Hoy no fue el día. El rival nos encontró mál parados y nos cobró carilla. A laburar esta semana que hay mucho por mejorar. Cábeza alta."},{title:"Nos cagaron a palos ☹️",content:"Bárbaro, perdíamos. Nos pasó el cambión por encima y no pudimos hacer nada. Ahora a masticar la bronca y volver más fuertes. ¡Dale Delta!"},{title:"Una noche para olvidar... 🛌",content:"No nos salió una. Fueron más, nos presionaron mejor y nos metieron los goles que quisieron. La seguimos, pero hoy nos ganaron bien ganado."},{title:"Nos pintaron la cara 😩",content:"El rival vino, vio y conquistó. Nosotros pusimos los jugadores, ellos pusieron el fútbol. Hay que mirarse al espejo y salir a revertir esto en la próxima."}],draw:[{title:"Un punto y a casa 🤝",content:"No fue la victoria que queríamos pero tampoco nos fueron a ganar. Punto de visitante, punto igual. A seguir sumando."},{title:"Ni pa un lado ni pa el otro 🤷",content:"Empate en un partido trabado donde los dos equipos se pelearon cada pelota. Por momentos bien, por momentos no tanto. A mejorar."},{title:"El empate sabor a poco 😐",content:"Éramos superiores pero no alcanzó. Nos faltó esa chispita para definirlo. El punto suma igual, pero las ganas están de sacar los tres."},{title:"Plata para los dos 🤜🤛",content:"Partido parejo de principio a fin. Se repartieron los puntos y cada uno a su casa. Vendrán mejores resultados, hay equipo."},{title:"Ni modo, chicos 🙄",content:"Dimos todo pero el gol no quería entrar. Empate y a preparar el próximo. El equipo tiene pasta para ganar, hoy no se dio."}]},QC=t=>t[Math.floor(Math.random()*t.length)],YC=t=>{const[e,n]=(t.result??"0-0").split("-").map(Number),r=e>n,s=e===n?"draw":r?"win":"loss",{title:o,content:u}=QC(KC[s]);return{title:`${o} (${e}-${n} vs ${t.rival})`,content:u,type:"match",date:new Date().toISOString().split("T")[0]}},g_={active:"Activo",injured:"Lesionado",suspended:"Suspendido"},hi={active:"#22c55e",injured:"#f97316",suspended:"#ef4444"},XC=`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Barlow+Condensed:wght@400;500;600;700;800;900&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background: #0a1a12;
    color: #e8f0eb;
    font-family: 'Outfit', sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
  
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #0a1a12; }
  ::-webkit-scrollbar-thumb { background: #1e3d2a; border-radius: 2px; }

  .app-shell {
    display: flex;
    min-height: 100vh;
  }

  /* ── SIDEBAR ── */
  .sidebar {
    width: 72px;
    background: #0d1f16;
    border-right: 1px solid rgba(201,168,76,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    position: fixed;
    top: 0; left: 0; bottom: 0;
    z-index: 100;
    gap: 0;
  }
  
  .sidebar-logo {
    margin-bottom: 32px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .sidebar-logo:hover { transform: scale(1.05); }

  .nav-item {
    width: 44px; height: 44px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: #4a7a5a;
    transition: all 0.2s;
    margin-bottom: 4px;
    border: 1px solid transparent;
    position: relative;
  }
  .nav-item:hover { background: rgba(201,168,76,0.08); color: #c9a84c; }
  .nav-item.active {
    background: rgba(201,168,76,0.12);
    color: #c9a84c;
    border-color: rgba(201,168,76,0.2);
  }
  .nav-item svg { width: 20px; height: 20px; stroke: currentColor; fill: none; stroke-width: 1.8; }
  .nav-label { display: none; }
  .btn svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; vertical-align: middle; flex-shrink: 0; }

  /* ── MAIN CONTENT ── */
  .main {
    margin-left: 72px;
    flex: 1;
    padding: 32px;
    max-width: calc(100vw - 72px);
  }

  /* ── PAGE HEADER ── */
  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  .page-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #e8f0eb;
  }
  .page-subtitle {
    font-size: 14px;
    color: #4a7a5a;
    margin-top: 2px;
    font-weight: 400;
  }

  /* ── CARDS ── */
  .card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 24px;
    transition: border-color 0.2s;
  }
  .card:hover { border-color: rgba(201,168,76,0.15); }

  .card-sm {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 20px;
  }

  /* ── STAT CARD ── */
  .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
  .stat-card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 20px 24px;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
  }
  .stat-card:hover { border-color: rgba(201,168,76,0.2); transform: translateY(-1px); }
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #c9a84c 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .stat-card:hover::before { opacity: 1; }
  .stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #4a7a5a; font-weight: 600; margin-bottom: 8px; }
  .stat-value { font-family: 'Barlow Condensed', sans-serif; font-size: 36px; font-weight: 800; color: #e8f0eb; line-height: 1; }
  .stat-sub { font-size: 12px; color: #4a7a5a; margin-top: 6px; }
  .stat-accent { color: #c9a84c; }

  /* ── BUTTONS ── */
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
    border: none;
    font-family: 'Outfit', sans-serif;
  }
  .btn:active { transform: scale(0.97); }
  .btn-primary {
    background: #c9a84c;
    color: #0a1a12;
  }
  .btn-primary:hover { background: #d9b85c; }
  .btn-ghost {
    background: transparent;
    color: #a0c4b0;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); }
  .btn-danger {
    background: rgba(239,68,68,0.1);
    color: #f87171;
    border: 1px solid rgba(239,68,68,0.2);
  }
  .btn-sm { padding: 6px 14px; font-size: 12px; border-radius: 8px; }

  /* ── BADGE ── */
  .badge {
    display: inline-flex; align-items: center;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
  }

  /* ── PLAYER GRID ── */
  .players-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
  .player-card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
  }
  .player-card:hover { border-color: rgba(201,168,76,0.25); transform: translateY(-2px); }
  .player-number {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 52px;
    font-weight: 900;
    color: rgba(201,168,76,0.1);
    position: absolute;
    top: 8px; right: 16px;
    line-height: 1;
    pointer-events: none;
  }
  .player-avatar {
    width: 48px; height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a3a2a, #2a5a3a);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
    font-weight: 700;
    color: #c9a84c;
    margin-bottom: 12px;
    border: 2px solid rgba(201,168,76,0.2);
  }
  .player-name { font-size: 15px; font-weight: 600; color: #e8f0eb; margin-bottom: 4px; }
  .player-pos { font-size: 12px; color: #4a7a5a; margin-bottom: 12px; }
  .player-stats-row { display: flex; gap: 16px; }
  .player-stat-mini { text-align: center; }
  .player-stat-mini span:first-child { display: block; font-size: 16px; font-weight: 700; color: #e8f0eb; font-family: 'Barlow Condensed', sans-serif; }
  .player-stat-mini span:last-child { display: block; font-size: 10px; color: #4a7a5a; text-transform: uppercase; letter-spacing: 0.05em; }

  /* ── MATCHES ── */
  .match-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px;
    border-radius: 14px;
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 10px;
    transition: all 0.2s;
    cursor: pointer;
  }
  .match-row:hover { border-color: rgba(201,168,76,0.2); }
  .match-rival { font-size: 15px; font-weight: 600; color: #e8f0eb; }
  .match-meta { font-size: 12px; color: #4a7a5a; margin-top: 3px; }
  .match-score {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 24px; font-weight: 800;
    color: #c9a84c;
    text-align: center;
    min-width: 60px;
  }
  .match-upcoming { font-size: 13px; font-weight: 600; color: #4a7a5a; text-align: center; }

  /* ── RANKING TABLE ── */
  .rank-table { width: 100%; border-collapse: collapse; }
  .rank-table th {
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;
    color: #4a7a5a; font-weight: 600;
    padding: 0 12px 12px;
    text-align: left;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .rank-table td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .rank-table tr:hover td { background: rgba(201,168,76,0.04); }
  .rank-pos {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 800;
    color: #c9a84c; text-align: center;
  }
  .rank-pos.top3 { color: #c9a84c; }

  /* ── FEED ── */
  .post-card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }
  .post-card:hover { border-color: rgba(201,168,76,0.15); }
  .post-type-badge {
    display: inline-block;
    padding: 3px 10px; border-radius: 20px;
    font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    margin-bottom: 12px;
  }
  .post-title { font-size: 18px; font-weight: 700; color: #e8f0eb; margin-bottom: 8px; }
  .post-body { font-size: 14px; color: #7aaa8a; line-height: 1.6; }
  .post-date { font-size: 12px; color: #3a6a4a; margin-top: 12px; }

  /* ── ATTENDANCE / CONVOCATORIA ── */
  .attendance-section { max-width: 680px; }
  .attend-btn {
    display: flex; align-items: center; gap: 10px;
    padding: 14px 20px;
    border-radius: 14px;
    font-size: 14px; font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    border: 1.5px solid transparent;
    flex: 1; justify-content: center;
    font-family: 'Outfit', sans-serif;
  }
  .attend-btn.yes { background: rgba(34,197,94,0.1); color: #4ade80; border-color: rgba(34,197,94,0.2); }
  .attend-btn.yes:hover, .attend-btn.yes.sel { background: rgba(34,197,94,0.2); border-color: #4ade80; }
  .attend-btn.maybe { background: rgba(234,179,8,0.1); color: #facc15; border-color: rgba(234,179,8,0.2); }
  .attend-btn.maybe:hover, .attend-btn.maybe.sel { background: rgba(234,179,8,0.2); border-color: #facc15; }
  .attend-btn.no { background: rgba(239,68,68,0.1); color: #f87171; border-color: rgba(239,68,68,0.2); }
  .attend-btn.no:hover, .attend-btn.no.sel { background: rgba(239,68,68,0.2); border-color: #f87171; }
  .attend-feedback {
    display: flex; align-items: center; gap: 10px;
    padding: 14px 18px;
    border-radius: 14px;
    background: rgba(34,197,94,0.08);
    border: 1px solid rgba(34,197,94,0.2);
    color: #4ade80;
    font-size: 14px; font-weight: 600;
    margin-top: 16px;
    animation: fadeSlide 0.3s ease;
  }
  @keyframes fadeSlide {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── CONVOCATORIA CARD (export) ── */
  .squad-card-wrap {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 24px;
    margin-top: 24px;
  }
  .squad-card {
    width: 420px;
    height: 747px;
    background: linear-gradient(160deg, #0f2a1c 0%, #071510 60%, #0d1f10 100%);
    border-radius: 20px;
    padding: 28px 30px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(201,168,76,0.2);
    display: flex;
    flex-direction: column;
  }
  .squad-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%);
    pointer-events: none;
  }
  .squad-card-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
    margin: 12px 0;
    flex-shrink: 0;
  }
  .squad-name-item {
    display: flex; align-items: center; gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .squad-name-num {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700;
    color: #c9a84c; min-width: 28px; text-align: right;
  }
  .squad-name-text { font-size: 13px; font-weight: 500; color: #e8f0eb; letter-spacing: 0.03em; }

  /* ── FORMS ── */
  .form-group { margin-bottom: 20px; }
  .form-label { font-size: 12px; font-weight: 600; color: #4a7a5a; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; display: block; }
  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 11px 14px;
    color: #e8f0eb;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
    transition: border-color 0.2s;
    outline: none;
  }
  .form-input:focus { border-color: rgba(201,168,76,0.4); }
  .form-select {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 11px 14px;
    color: #e8f0eb;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
    outline: none;
    cursor: pointer;
  }
  .form-select option { background: #0d1f16; }

  /* ── MODAL ── */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.7);
    display: flex; align-items: center; justify-content: center;
    z-index: 200;
    backdrop-filter: blur(4px);
    padding: 20px;
  }
  .modal {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 32px;
    width: 100%; max-width: 480px;
    animation: modalIn 0.25s ease;
    max-height: 90vh;
    overflow-y: auto;
  }
  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  .modal-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 24px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.04em; color: #e8f0eb;
    margin-bottom: 24px;
  }

  /* ── PLAYER DETAIL ── */
  .player-detail-header {
    display: flex; align-items: flex-start; gap: 24px;
    margin-bottom: 32px;
  }
  .player-detail-avatar {
    width: 80px; height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a3a2a, #2a5a3a);
    display: flex; align-items: center; justify-content: center;
    font-size: 24px; font-weight: 700; color: #c9a84c;
    border: 2px solid rgba(201,168,76,0.3);
    flex-shrink: 0;
  }
  .player-detail-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 36px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em;
    color: #e8f0eb; line-height: 1;
  }
  .player-stat-box {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: rgba(201,168,76,0.05);
    border: 1px solid rgba(201,168,76,0.1);
    border-radius: 14px;
    padding: 20px;
    flex: 1;
  }
  .player-stat-box-val {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 42px; font-weight: 900; color: #c9a84c; line-height: 1;
  }
  .player-stat-box-label {
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;
    color: #4a7a5a; margin-top: 4px; font-weight: 600;
  }

  /* ── SECTION TITLE ── */
  .section-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em;
    color: #4a7a5a; margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .section-title::after {
    content: '';
    flex: 1; height: 1px;
    background: rgba(255,255,255,0.06);
  }

  /* ── EMPTY STATE ── */
  .empty-state {
    text-align: center; padding: 60px 20px;
    color: #3a6a4a;
  }
  .empty-state-icon { font-size: 48px; margin-bottom: 12px; opacity: 0.4; }
  .empty-state-text { font-size: 15px; }

  /* ── TOAST ── */
  .toast {
    position: fixed; bottom: 32px; right: 32px;
    background: #0d1f16;
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 14px;
    padding: 14px 20px;
    display: flex; align-items: center; gap: 10px;
    font-size: 14px; font-weight: 600; color: #e8f0eb;
    z-index: 300;
    animation: toastIn 0.3s ease;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }
  @keyframes toastIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── TABS ── */
  .tabs { display: flex; gap: 4px; background: rgba(0,0,0,0.2); border-radius: 12px; padding: 4px; margin-bottom: 24px; }
  .tab {
    padding: 8px 18px; border-radius: 8px;
    font-size: 13px; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
    color: #4a7a5a; border: none; background: transparent;
    font-family: 'Outfit', sans-serif;
  }
  .tab.active { background: #0d1f16; color: #e8f0eb; }
  .tab:hover:not(.active) { color: #a0c4b0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    /* Sidebar pasa a bottom nav */
    .sidebar {
      width: 100%;
      height: calc(60px + env(safe-area-inset-bottom));
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      padding: 0 8px;
      padding-bottom: env(safe-area-inset-bottom);
      border-right: none;
      border-top: 1px solid rgba(201,168,76,0.12);
      z-index: 100;
    }
    .sidebar-logo { display: none; }
    .nav-item {
      width: 48px; height: 48px;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 0;
      border-radius: 10px;
    }
    .nav-item svg { width: 22px; height: 22px; }
    .nav-label {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.03em;
      color: inherit;
      text-transform: uppercase;
    }

    /* Main content */
    .main {
      margin-left: 0;
      margin-bottom: calc(60px + env(safe-area-inset-bottom));
      padding: 16px;
      max-width: 100vw;
    }

    /* Grids */
    .stat-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px; }
    .stat-card { padding: 14px 16px; border-radius: 14px; }
    .stat-value { font-size: 28px; }

    /* Dashboard 2-col → 1-col */
    .dashboard-two-col { grid-template-columns: 1fr !important; }

    /* Players */
    .players-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .player-card { padding: 14px; border-radius: 16px; }
    .player-number { font-size: 38px; }

    /* Page header */
    .page-header { margin-bottom: 20px; }
    .page-title { font-size: 24px; }

    /* Tabs overflow scroll */
    .tabs { overflow-x: auto; flex-wrap: nowrap; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
    .tabs::-webkit-scrollbar { display: none; }
    .tab { white-space: nowrap; padding: 8px 14px; }

    /* Match rows */
    .match-row { padding: 12px 14px; border-radius: 12px; }
    .match-rival { font-size: 14px; }

    /* Modal — bottom sheet en mobile */
    .modal {
      border-radius: 20px 20px 0 0;
      position: fixed;
      bottom: calc(60px + env(safe-area-inset-bottom));
      left: 0; right: 0;
      max-width: 100%;
      max-height: calc(85vh - 60px - env(safe-area-inset-bottom));
      overflow-y: auto;
      animation: slideUp 0.28s ease;
    }
    .modal-overlay { align-items: flex-end; padding: 0; }
    @keyframes slideUp {
      from { transform: translateY(100%); opacity: 0; }
      to   { transform: translateY(0);    opacity: 1; }
    }

    /* Convocatoria 2-col → 1-col */
    .convocatoria-two-col { grid-template-columns: 1fr !important; }
    .squad-card { width: 100%; }

    /* Stats 2-col → 1-col */
    .stats-two-col { grid-template-columns: 1fr !important; }

    /* Toast */
    .toast { bottom: calc(72px + env(safe-area-inset-bottom)); right: 12px; left: 12px; }

    /* Install banner */
    .install-banner { bottom: calc(60px + env(safe-area-inset-bottom)); }

    /* Rank table */
    .rank-table th, .rank-table td { padding: 8px 6px; font-size: 11px; }

    /* Card sm */
    .card-sm { padding: 12px 14px; border-radius: 12px; }

    /* Buttons en page header */
    .btn-header-only-icon .btn-label { display: none; }
  }

  /* ── LINEUP FIELD ── */
  .lineup-wrap { display: grid; grid-template-columns: 1fr 200px; gap: 20px; align-items: start; }
  .field-container {
    position: relative; width: 100%; height: 0; padding-bottom: 155%;
    background: linear-gradient(180deg, #1d6e32 0%, #216a30 16.7%, #1d6e32 33.3%, #216a30 50%, #1d6e32 66.7%, #216a30 83.3%, #1d6e32 100%);
    border-radius: 12px; overflow: hidden; border: 2px solid rgba(255,255,255,0.15);
  }
  .field-slot {
    position: absolute; transform: translate(-50%, -50%);
    display: flex; flex-direction: column; align-items: center; cursor: pointer; z-index: 10;
  }
  .field-slot-chip {
    width: 38px; height: 38px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; transition: transform 0.15s; box-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }
  .field-slot-chip.empty {
    background: rgba(255,255,255,0.12); border: 2px dashed rgba(255,255,255,0.45);
    color: rgba(255,255,255,0.55); font-size: 16px;
  }
  .field-slot-chip.filled {
    background: linear-gradient(135deg, #c9a84c, #a07830); border: 2px solid #e8c060; color: #0a1a12;
  }
  .field-slot:hover .field-slot-chip { transform: scale(1.12); }
  .field-slot-name {
    font-size: 9px; font-weight: 700; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.9);
    margin-top: 3px; max-width: 52px; text-align: center;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  @media (max-width: 768px) {
    .lineup-wrap { grid-template-columns: 1fr !important; }
    .field-slot-chip { width: 30px; height: 30px; font-size: 10px; }
    .field-slot-chip.empty { font-size: 14px; }
    .field-slot-name { font-size: 8px; max-width: 44px; }
  }

  /* ── FCM SIDEBAR BELL ── */
  .sidebar-bottom { margin-top: auto; }
  @media (max-width: 768px) { .sidebar-bottom { margin-top: 0; } }
`,ye=({name:t})=>{const e={home:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M3 12L12 3l9 9"}),l.jsx("path",{d:"M5 10v10a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V10"})]}),users:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]}),calendar:l.jsxs(l.Fragment,{children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),chart:l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),l.jsx("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),l.jsx("line",{x1:"6",y1:"20",x2:"6",y2:"14"})]}),feed:l.jsx(l.Fragment,{children:l.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),plus:l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),l.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),x:l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),download:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"}),l.jsx("polyline",{points:"7 10 12 15 17 10"}),l.jsx("line",{x1:"12",y1:"15",x2:"12",y2:"3"})]}),check:l.jsx("polyline",{points:"20 6 9 17 4 12"}),arrow:l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),l.jsx("polyline",{points:"12 19 5 12 12 5"})]}),trophy:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M6 9H4a2 2 0 000 4h2"}),l.jsx("path",{d:"M18 9h2a2 2 0 010 4h-2"}),l.jsx("path",{d:"M6 9v6a6 6 0 0012 0V9"}),l.jsx("path",{d:"M12 21v-3"}),l.jsx("path",{d:"M9 21h6"})]}),edit:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),l.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]}),trash:l.jsxs(l.Fragment,{children:[l.jsx("polyline",{points:"3 6 5 6 21 6"}),l.jsx("path",{d:"M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"}),l.jsx("path",{d:"M10 11v6"}),l.jsx("path",{d:"M14 11v6"}),l.jsx("path",{d:"M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"})]}),user:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),l.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),shirt:l.jsx(l.Fragment,{children:l.jsx("path",{d:"M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"})}),news:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a4 4 0 01-4-4V6a2 2 0 012-2"}),l.jsx("path",{d:"M10 7h6"}),l.jsx("path",{d:"M10 11h6"}),l.jsx("path",{d:"M10 15h4"})]}),ball:l.jsxs(l.Fragment,{children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"}),l.jsx("path",{d:"M2 12h20"})]}),clipboard:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"}),l.jsx("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1"}),l.jsx("line",{x1:"12",y1:"11",x2:"12",y2:"17"}),l.jsx("line",{x1:"9",y1:"14",x2:"15",y2:"14"})]}),shield:l.jsx(l.Fragment,{children:l.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),whistle:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M6 5a7 7 0 0114 0"}),l.jsx("path",{d:"M3 10h18"}),l.jsx("path",{d:"M6 5v5l-3 6h18l-3-6V5"}),l.jsx("line",{x1:"12",y1:"10",x2:"12",y2:"19"})]}),list:l.jsxs(l.Fragment,{children:[l.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),l.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),l.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),l.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),l.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),l.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),flag:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}),l.jsx("line",{x1:"4",y1:"22",x2:"4",y2:"15"})]}),squad:l.jsxs(l.Fragment,{children:[l.jsx("circle",{cx:"9",cy:"7",r:"3"}),l.jsx("circle",{cx:"18",cy:"7",r:"3"}),l.jsx("path",{d:"M3 21v-1a6 6 0 016-6h3"}),l.jsx("path",{d:"M12 21v-1a5 5 0 015-5h1a5 5 0 015 5v1"})]}),playercheck:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"}),l.jsx("circle",{cx:"9",cy:"7",r:"4"}),l.jsx("polyline",{points:"16 11 18 13 22 9"})]}),target:l.jsxs(l.Fragment,{children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("circle",{cx:"12",cy:"12",r:"6"}),l.jsx("circle",{cx:"12",cy:"12",r:"2"})]}),jersey:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46"}),l.jsx("path",{d:"M9 2a3 3 0 006 0"}),l.jsx("path",{d:"M3.62 3.46L2 10h5v11a1 1 0 001 1h8a1 1 0 001-1V10h5L20.38 3.46"})]}),formation:l.jsxs(l.Fragment,{children:[l.jsx("rect",{x:"4",y:"3",width:"16",height:"18",rx:"1"}),l.jsx("circle",{cx:"12",cy:"18",r:"1",fill:"currentColor",stroke:"none"}),l.jsx("circle",{cx:"7",cy:"13",r:"1",fill:"currentColor",stroke:"none"}),l.jsx("circle",{cx:"17",cy:"13",r:"1",fill:"currentColor",stroke:"none"}),l.jsx("circle",{cx:"7",cy:"8",r:"1",fill:"currentColor",stroke:"none"}),l.jsx("circle",{cx:"17",cy:"8",r:"1",fill:"currentColor",stroke:"none"}),l.jsx("circle",{cx:"12",cy:"5",r:"1",fill:"currentColor",stroke:"none"})]}),soccerball:l.jsxs(l.Fragment,{children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("path",{d:"M12 2l3.09 9.26L22 12l-6.91 5.74L17 22l-5-3.82L7 22l1.91-4.26L2 12l6.91-.74L12 2z"})]}),lineup:l.jsxs(l.Fragment,{children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("path",{d:"M3 9h18"}),l.jsx("path",{d:"M9 21V9"}),l.jsx("circle",{cx:"6",cy:"6",r:"1",fill:"currentColor",stroke:"none"})]}),photo:l.jsxs(l.Fragment,{children:[l.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),l.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),l.jsx("polyline",{points:"21 15 16 10 5 21"})]}),checkbox:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M9 11l3 3L22 4"}),l.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]}),usercheck:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),l.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),l.jsx("polyline",{points:"17 11 19 13 23 9"})]}),checklist:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M9 11l3 3L22 4"}),l.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"})]}),taskdone:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),l.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),convocatoria:l.jsxs(l.Fragment,{children:[l.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),l.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),l.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),l.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"}),l.jsx("polyline",{points:"9 16 11 18 15 14"})]}),bell:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"}),l.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"})]}),belloff:l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"}),l.jsx("path",{d:"M18.63 13A17.89 17.89 0 0118 8"}),l.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"}),l.jsx("path",{d:"M18 8a6 6 0 00-9.33-5"}),l.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})};return l.jsx("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e[t]})},zg="BOlW76xy4PbKcgmY0jjb7UjCtmk1qy7JLPngc6_AXFARe4CzlHfb5FTBaZBhEHaI-kd6CkFiufbpZGjqyIYhMmo";function JC(t){const[e,n]=re.useState(()=>typeof Notification>"u"?"unsupported":Notification.permission);return re.useEffect(()=>!Oa||e!=="granted"?void 0:UC(Oa,s=>{const o=s.notification||{};t(o.title||o.body||"🔔 Nueva notificación")}),[e]),{notifStatus:e,subscribe:async()=>{if(e==="denied"){alert("Las notificaciones están bloqueadas. Habilitálas desde la configuración del navegador.");return}if(e!=="granted")try{const i=await Notification.requestPermission();if(n(i),i!=="granted"||!Oa)return;const s=await navigator.serviceWorker.register("/deltaEntrerriano/firebase-messaging-sw.js",{scope:"/deltaEntrerriano/"}),o=await BC(Oa,{vapidKey:zg,serviceWorkerRegistration:s});o&&await zl(Bt(pt,"fcm_tokens",o),{token:o,createdAt:Uo(),ua:navigator.userAgent.substring(0,150)})}catch(i){console.error("[FCM] Error:",i)}}}}function ZC({status:t,onSubscribe:e}){if(t==="unsupported")return null;const n=t==="granted";return l.jsxs("div",{className:`nav-item ${n?"active":""}`,onClick:n?void 0:e,title:n?"Notificaciones activas":"Activar notificaciones",style:{cursor:n?"default":"pointer"},children:[l.jsx(ye,{name:n?"bell":"belloff"}),l.jsx("span",{className:"nav-label",children:"Notif."})]})}const ar=t=>(t||"?").split(" ").slice(0,2).map(e=>e[0]).join(""),Fn=t=>new Date(t+"T00:00:00").toLocaleDateString("es-AR",{day:"numeric",month:"short",year:"numeric"}),Cf=t=>{const e={};for(const n of t)if(n.status==="played"){for(const r of n.participants??[])e[r]||(e[r]={goals:0,assists:0,matches:0}),e[r].matches++;for(const[r,i]of Object.entries(n.scorers??{}))e[r]||(e[r]={goals:0,assists:0,matches:0}),e[r].goals+=i}return e},eA={Portero:1.5,Defensa:1,Mediocampista:.3,Delantero:0},tA=({participants:t=[],scorers:e={},goalsUs:n=0,goalsRival:r=0,lineupForMatch:i={},players:s=[]})=>{const o=Object.fromEntries(s.map(v=>[v.id,v])),u=n>r,c=n<r,d=r===0,m=new Set(Object.values(i)),p={};for(const v of t){const C=o[v];if(!C)continue;const R=C.position??"";let k=6;u&&(k+=.5),c&&(k-=.5);const D=e[v]??0,b=R==="Portero"||R==="Defensa"?2:R==="Mediocampista"?1.5:1;D===1?k+=1*b:D===2?k+=2.5*b:D>=3&&(k+=(4+(D-3)*1.5)*b),d&&(k+=eA[R]??0),m.has(v)&&(k+=.3),p[v]=Math.min(10,Math.max(1,Math.round(k)))}return p};function y_({msg:t,onClose:e}){return re.useEffect(()=>{const n=setTimeout(e,3e3);return()=>clearTimeout(n)},[]),l.jsxs("div",{className:"toast",children:["🔥 ",t]})}function nA({player:t,onClose:e,stats:n,onUpdate:r,onEdit:i,onDelete:s}){if(!t)return null;const o=n??{goals:0,matches:0},[u,c]=re.useState(t.nickname||""),[d,m]=re.useState(!1),p=()=>{r&&r(t.id,{nickname:u.trim()}),m(!0),setTimeout(()=>m(!1),1500)};return l.jsx("div",{className:"modal-overlay",onClick:e,children:l.jsxs("div",{className:"modal",onClick:v=>v.stopPropagation(),children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24},children:[l.jsx("span",{className:"modal-title",children:"Perfil"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:e,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),l.jsxs("div",{className:"player-detail-header",children:[l.jsx("div",{className:"player-detail-avatar",children:ar(t.name)}),l.jsxs("div",{children:[l.jsx("div",{className:"player-detail-name",children:t.name}),l.jsx("div",{style:{fontSize:14,color:"#7aaa8a",marginTop:6},children:t.position}),l.jsxs("div",{style:{marginTop:8,display:"flex",gap:8},children:[l.jsxs("span",{style:{fontSize:13,color:"#c9a84c",background:"rgba(201,168,76,0.1)",padding:"3px 10px",borderRadius:20,fontWeight:600},children:["#",t.number]}),l.jsx("span",{className:"badge",style:{background:`${hi[t.status]}18`,color:hi[t.status]},children:g_[t.status]})]})]})]}),l.jsx("div",{style:{display:"flex",gap:12},children:[{val:o.goals,label:"Goles"},{val:o.matches,label:"Partidos"}].map(v=>l.jsxs("div",{className:"player-stat-box",children:[l.jsx("div",{className:"player-stat-box-val",children:v.val}),l.jsx("div",{className:"player-stat-box-label",children:v.label})]},v.label))}),l.jsxs("div",{className:"form-group",style:{marginTop:20},children:[l.jsx("label",{className:"form-label",children:"Apodo (alineación)"}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx("input",{className:"form-input",placeholder:"Ej: Toro, Pelusa...",value:u,onChange:v=>{c(v.target.value),m(!1)}}),l.jsx("button",{className:"btn btn-primary",style:{flexShrink:0},onClick:p,children:d?"✓":"Guardar"})]}),l.jsx("div",{style:{fontSize:11,color:"#4a7a5a",marginTop:4},children:"Se usa en la alineación en lugar del nombre. Dejá vacío para usar el nombre."})]}),l.jsxs("div",{style:{display:"flex",gap:10,marginTop:24,paddingTop:20,borderTop:"1px solid rgba(255,255,255,0.06)"},children:[i&&l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:i,children:[l.jsx(ye,{name:"edit"})," Editar"]}),s&&l.jsxs("button",{className:"btn btn-danger",style:{flex:1},onClick:()=>{window.confirm(`¿Eliminar a ${t.name}? Esta acción no se puede deshacer.`)&&(s(),e())},children:[l.jsx(ye,{name:"trash"})," Eliminar"]})]})]})})}function rA({onClose:t,onAdd:e}){const[n,r]=re.useState({name:"",nickname:"",number:"",position:qo[0]}),i=(o,u)=>r(c=>({...c,[o]:u})),s=()=>{!n.name||!n.number||(e({...n,id:Date.now(),status:"active",goals:0,matches:0,number:parseInt(n.number)}),t())};return l.jsx("div",{className:"modal-overlay",onClick:t,children:l.jsxs("div",{className:"modal",onClick:o=>o.stopPropagation(),children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24},children:[l.jsx("span",{className:"modal-title",children:"Nuevo Jugador"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:t,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nombre completo"}),l.jsx("input",{className:"form-input",placeholder:"Ej: Juan Pérez",value:n.name,onChange:o=>i("name",o.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{className:"form-label",children:["Apodo ",l.jsx("span",{style:{color:"#4a7a5a",fontWeight:400},children:"(opcional · se usa en la alineación)"})]}),l.jsx("input",{className:"form-input",placeholder:"Ej: Toro, Pelusa...",value:n.nickname,onChange:o=>i("nickname",o.target.value)})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Número"}),l.jsx("input",{className:"form-input",type:"number",placeholder:"10",value:n.number,onChange:o=>i("number",o.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Posición"}),l.jsx("select",{className:"form-select",value:n.position,onChange:o=>i("position",o.target.value),children:qo.map(o=>l.jsx("option",{children:o},o))})]})]}),l.jsxs("div",{style:{display:"flex",gap:12,marginTop:8},children:[l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:t,children:[l.jsx(ye,{name:"x"})," Cancelar"]}),l.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:s,children:[l.jsx(ye,{name:"shirt"})," Agregar Jugador"]})]})]})})}function iA({player:t,onClose:e,onSave:n}){const[r,i]=re.useState({name:t.name||"",nickname:t.nickname||"",number:t.number||"",position:t.position||qo[0],status:t.status||"active"}),s=(c,d)=>i(m=>({...m,[c]:d})),o=()=>{!r.name||!r.number||(n(t.id,{...r,number:parseInt(r.number)}),e())},u=[{value:"active",label:"Activo"},{value:"injured",label:"Lesionado"},{value:"suspended",label:"Suspendido"}];return l.jsx("div",{className:"modal-overlay",onClick:e,children:l.jsxs("div",{className:"modal",onClick:c=>c.stopPropagation(),children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24},children:[l.jsx("span",{className:"modal-title",children:"Editar Jugador"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:e,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Nombre completo"}),l.jsx("input",{className:"form-input",placeholder:"Ej: Juan Pérez",value:r.name,onChange:c=>s("name",c.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{className:"form-label",children:["Apodo ",l.jsx("span",{style:{color:"#4a7a5a",fontWeight:400},children:"(opcional · se usa en la alineación)"})]}),l.jsx("input",{className:"form-input",placeholder:"Ej: Toro, Pelusa...",value:r.nickname,onChange:c=>s("nickname",c.target.value)})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Número"}),l.jsx("input",{className:"form-input",type:"number",placeholder:"10",value:r.number,onChange:c=>s("number",c.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Posición"}),l.jsx("select",{className:"form-select",value:r.position,onChange:c=>s("position",c.target.value),children:qo.map(c=>l.jsx("option",{children:c},c))})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Estado"}),l.jsx("div",{style:{display:"flex",gap:10},children:u.map(c=>l.jsx("button",{className:"btn",style:{flex:1,background:r.status===c.value?`${hi[c.value]}20`:"rgba(255,255,255,0.03)",color:r.status===c.value?hi[c.value]:"#4a7a5a",border:`1px solid ${r.status===c.value?hi[c.value]+"55":"rgba(255,255,255,0.08)"}`},onClick:()=>s("status",c.value),children:c.label},c.value))})]}),l.jsxs("div",{style:{display:"flex",gap:12,marginTop:8},children:[l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:e,children:[l.jsx(ye,{name:"x"})," Cancelar"]}),l.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:o,children:[l.jsx(ye,{name:"check"})," Guardar Cambios"]})]})]})})}function Bg({onClose:t,onAdd:e,onSave:n,onDelete:r,initial:i,players:s=[],initialStatus:o,defaultParticipants:u=[],lineupForMatch:c={}}){const d=!!i,m=g=>{if(!g)return{goalsUs:"",goalsRival:""};const[S,V]=g.split("-");return{goalsUs:S??"",goalsRival:V??""}},[p,v]=re.useState(()=>{const g=d?i.participants??[]:[],S=g.length>0?g:u,V=d?i.matchType??"Partido Normal":"Partido Normal",j=!["Partido Normal","Semifinal","Final"].includes(V);return d?{rival:i.rival,date:i.date,time:i.time??"16:00",venue:i.venue??"",home:i.home,status:o??i.status,...m(i.result),scorers:i.scorers??{},assistants:i.assistants??{},participants:S,ratings:i.ratings??{},mvp:i.mvp??null,matchType:V,isCustomType:j,customType:j?V:""}:{rival:"",date:"",time:"16:00",venue:"",home:!0,status:o??"upcoming",goalsUs:"",goalsRival:"",scorers:{},assistants:{},participants:S,ratings:{},mvp:null,matchType:"Partido Normal",isCustomType:!1,customType:""}}),C=(g,S)=>v(V=>({...V,[g]:S})),R=()=>{if(!p.participants.length)return;const g=tA({participants:p.participants,scorers:p.scorers,goalsUs:parseInt(p.goalsUs)||0,goalsRival:parseInt(p.goalsRival)||0,lineupForMatch:c,players:s});C("ratings",g)},k=()=>{window.confirm(`¿Eliminar este partido contra ${p.rival}? Esta acción no se puede deshacer.`)&&(r(i.id),t())},D=()=>{if(!p.rival||!p.date)return;const g=p.status==="played";if(g&&(p.goalsUs===""||p.goalsRival===""))return;const S=g?`${p.goalsUs}-${p.goalsRival}`:null,V={rival:p.rival,date:p.date,time:p.time,venue:p.venue,home:p.home,result:S,status:p.status,scorers:g?p.scorers:{},assistants:g?p.assistants:{},participants:g?p.participants:[],ratings:g?p.ratings:{},mvp:g?p.mvp:null,matchType:p.matchType||"Partido Normal"};d?n(i.id,V):e({...V,id:Date.now()}),t()},b=d?p.status==="played"?"Cargar Resultado":"Editar Partido":"Nuevo Partido";return l.jsx("div",{className:"modal-overlay",onClick:t,children:l.jsxs("div",{className:"modal",onClick:g=>g.stopPropagation(),children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:24},children:[l.jsx("span",{className:"modal-title",children:b}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:t,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Rival"}),l.jsx("input",{className:"form-input",placeholder:"Nombre del equipo rival",value:p.rival,onChange:g=>C("rival",g.target.value)})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Fecha"}),l.jsx("input",{className:"form-input",type:"date",value:p.date,onChange:g=>C("date",g.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Hora"}),l.jsx("input",{className:"form-input",type:"time",value:p.time,onChange:g=>C("time",g.target.value)})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Cancha"}),l.jsx("input",{className:"form-input",placeholder:"Nombre del estadio o cancha",value:p.venue,onChange:g=>C("venue",g.target.value)})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tipo de Partido"}),l.jsxs("select",{className:"form-select",value:p.isCustomType?"Otro":p.matchType,onChange:g=>{const S=g.target.value;v(S==="Otro"?V=>({...V,isCustomType:!0,matchType:V.customType||""}):V=>({...V,isCustomType:!1,matchType:S}))},children:[l.jsx("option",{value:"Partido Normal",children:"Partido Normal"}),l.jsx("option",{value:"Semifinal",children:"Semifinal"}),l.jsx("option",{value:"Final",children:"Final"}),l.jsx("option",{value:"Otro",children:"Otro (Especificar...)"})]}),p.isCustomType&&l.jsx("input",{className:"form-input",style:{marginTop:10},placeholder:"Ej: Cuartos de Final, Amistoso...",value:p.customType,onChange:g=>{const S=g.target.value;v(V=>({...V,customType:S,matchType:S}))}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Localía"}),l.jsx("div",{style:{display:"flex",gap:10},children:[{v:!0,l:"Local"},{v:!1,l:"Visitante"}].map(g=>l.jsx("button",{className:"btn",style:{flex:1,background:p.home===g.v?"rgba(201,168,76,0.15)":"rgba(255,255,255,0.03)",color:p.home===g.v?"#c9a84c":"#4a7a5a",border:`1px solid ${p.home===g.v?"rgba(201,168,76,0.3)":"rgba(255,255,255,0.08)"}`},onClick:()=>C("home",g.v),children:g.l},g.l))})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Estado"}),l.jsx("div",{style:{display:"flex",gap:10},children:[{v:"upcoming",l:"Próximo"},{v:"played",l:"Jugado"}].map(g=>l.jsx("button",{className:"btn",style:{flex:1,background:p.status===g.v?"rgba(201,168,76,0.15)":"rgba(255,255,255,0.03)",color:p.status===g.v?"#c9a84c":"#4a7a5a",border:`1px solid ${p.status===g.v?"rgba(201,168,76,0.3)":"rgba(255,255,255,0.08)"}`},onClick:()=>C("status",g.v),children:g.l},g.v))})]}),p.status==="played"&&l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Resultado"}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:10,alignItems:"center"},children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:11,color:"#4a7a5a",marginBottom:4,textAlign:"center"},children:"Delta"}),l.jsx("input",{className:"form-input",type:"number",min:"0",placeholder:"0",value:p.goalsUs,onChange:g=>C("goalsUs",g.target.value),style:{textAlign:"center",fontSize:20,fontWeight:700}})]}),l.jsx("div",{style:{color:"#4a7a5a",fontWeight:700,fontSize:18,paddingTop:20},children:"-"}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:11,color:"#4a7a5a",marginBottom:4,textAlign:"center"},children:"Rival"}),l.jsx("input",{className:"form-input",type:"number",min:"0",placeholder:"0",value:p.goalsRival,onChange:g=>C("goalsRival",g.target.value),style:{textAlign:"center",fontSize:20,fontWeight:700}})]})]})]}),p.status==="played"&&s.length>0&&l.jsxs("div",{className:"form-group",children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[l.jsx("span",{className:"form-label",style:{marginBottom:0},children:"Jugadores · ✓ jugó  ⚽ goles  0-10 nota  ★ MVP"}),l.jsx("button",{type:"button",className:"btn btn-ghost btn-sm",onClick:R,title:"Calcular notas automáticamente según goles, resultado y posición",style:{fontSize:11,padding:"3px 10px",flexShrink:0},children:"⚡ Auto-notas"})]}),l.jsx("div",{style:{maxHeight:240,overflowY:"auto",display:"flex",flexDirection:"column",gap:5},children:[...s].sort((g,S)=>g.number-S.number).map(g=>{const S=p.participants.includes(g.id),V=p.scorers[g.id]??0,j=Object.values(c).includes(g.id),F=()=>C("participants",S?p.participants.filter(T=>T!==g.id):[...p.participants,g.id]),y=(T,E)=>{const w=Math.max(0,(p[T][g.id]??0)+E),A={...p[T]};w===0?delete A[g.id]:A[g.id]=w,C(T,A)},_={width:22,height:22,borderRadius:5,border:"none",cursor:"pointer",background:"rgba(255,255,255,0.07)",color:"#a0c4b0",fontSize:14,fontWeight:700,lineHeight:1,padding:0};return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 8px",borderRadius:10,background:S?"rgba(34,197,94,0.05)":"rgba(255,255,255,0.02)",border:`1px solid ${S?"rgba(34,197,94,0.18)":"rgba(255,255,255,0.05)"}`},children:[l.jsx("button",{onClick:F,style:{width:24,height:24,borderRadius:6,border:"none",cursor:"pointer",background:S?"rgba(34,197,94,0.2)":"rgba(255,255,255,0.06)",color:S?"#4ade80":"#3a6a4a",fontSize:12,fontWeight:700,flexShrink:0},children:S?"✓":"○"}),l.jsxs("span",{style:{fontSize:11,color:"#c9a84c",fontWeight:700,minWidth:22,textAlign:"right"},children:["#",g.number]}),l.jsxs("span",{style:{fontSize:12,color:"#e8f0eb",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[g.name,j&&l.jsx("span",{style:{fontSize:9,background:"rgba(201,168,76,0.18)",color:"#c9a84c",borderRadius:3,padding:"1px 4px",fontWeight:700,marginLeft:4},children:"TIT"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[l.jsx("span",{style:{fontSize:10},children:"⚽"}),l.jsx("button",{style:_,onClick:()=>y("scorers",-1),children:"−"}),l.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#c9a84c",minWidth:14,textAlign:"center"},children:V}),l.jsx("button",{style:_,onClick:()=>y("scorers",1),children:"+"})]}),S&&l.jsxs(l.Fragment,{children:[l.jsx("input",{type:"number",min:"1",max:"10",placeholder:"—",value:p.ratings[g.id]??"",onChange:T=>{const E=Math.min(10,Math.max(1,parseInt(T.target.value)||0)),w={...p.ratings};E?w[g.id]=E:delete w[g.id],C("ratings",w)},style:{width:36,background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:5,color:"#e8f0eb",fontSize:11,fontWeight:700,textAlign:"center",padding:"2px 0",outline:"none"}}),l.jsx("button",{title:"MVP",onClick:()=>C("mvp",p.mvp===g.id?null:g.id),style:{width:22,height:22,borderRadius:5,border:"none",cursor:"pointer",background:p.mvp===g.id?"rgba(201,168,76,0.3)":"rgba(255,255,255,0.06)",fontSize:12,lineHeight:1,padding:0},children:"★"})]})]},g.id)})})]}),d?l.jsxs("div",{style:{display:"flex",gap:10,marginTop:16,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.06)"},children:[r&&l.jsxs("button",{className:"btn btn-danger",style:{flex:1},onClick:k,children:[l.jsx(ye,{name:"trash"})," Eliminar"]}),l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:t,children:[l.jsx(ye,{name:"x"})," Cancelar"]}),l.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:D,disabled:p.status==="played"&&(p.goalsUs===""||p.goalsRival===""),children:[l.jsx(ye,{name:"check"})," Guardar"]})]}):l.jsxs("div",{style:{display:"flex",gap:12,marginTop:8},children:[l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:t,children:[l.jsx(ye,{name:"x"})," Cancelar"]}),l.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:D,disabled:p.status==="played"&&(p.goalsUs===""||p.goalsRival===""),children:[l.jsx(ye,{name:"calendar"})," Crear Partido"]})]})]})})}function sA({lineup:t,players:e,captain:n,onSlotClick:r}){const i=Object.fromEntries(e.map(s=>[s.id,s]));return l.jsxs("div",{className:"field-container",children:[l.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"},viewBox:"0 0 100 155",preserveAspectRatio:"none",children:[[0,1,2,3,4,5,6,7,8,9].map(s=>l.jsx("rect",{x:0,y:s*15.5,width:100,height:7.75,fill:s%2===0?"rgba(0,0,0,0.08)":"transparent"},s)),l.jsx("rect",{x:4,y:4,width:92,height:147,fill:"none",stroke:"rgba(255,255,255,0.65)",strokeWidth:"0.6"}),l.jsx("line",{x1:4,y1:77.5,x2:96,y2:77.5,stroke:"rgba(255,255,255,0.65)",strokeWidth:"0.5"}),l.jsx("circle",{cx:50,cy:77.5,r:13,fill:"none",stroke:"rgba(255,255,255,0.65)",strokeWidth:"0.5"}),l.jsx("circle",{cx:50,cy:77.5,r:1.2,fill:"rgba(255,255,255,0.65)"}),l.jsx("rect",{x:26,y:4,width:48,height:22,fill:"none",stroke:"rgba(255,255,255,0.55)",strokeWidth:"0.5"}),l.jsx("rect",{x:36,y:4,width:28,height:11,fill:"none",stroke:"rgba(255,255,255,0.55)",strokeWidth:"0.5"}),l.jsx("circle",{cx:50,cy:18,r:.9,fill:"rgba(255,255,255,0.55)"}),l.jsx("rect",{x:40,y:1.5,width:20,height:2.5,fill:"none",stroke:"rgba(255,255,255,0.4)",strokeWidth:"0.5"}),l.jsx("rect",{x:26,y:129,width:48,height:22,fill:"none",stroke:"rgba(255,255,255,0.55)",strokeWidth:"0.5"}),l.jsx("rect",{x:36,y:140,width:28,height:11,fill:"none",stroke:"rgba(255,255,255,0.55)",strokeWidth:"0.5"}),l.jsx("circle",{cx:50,cy:137,r:.9,fill:"rgba(255,255,255,0.55)"}),l.jsx("rect",{x:40,y:151,width:20,height:2.5,fill:"none",stroke:"rgba(255,255,255,0.4)",strokeWidth:"0.5"})]}),GC.map(s=>{const o=t[s.id],u=o?i[o]:null;if(Object.keys(t).length>=9&&!u)return null;const d=u&&u.id===n;return l.jsxs("div",{className:"field-slot",style:{left:`${s.x}%`,top:`${s.y}%`},onClick:()=>r(s),children:[l.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[l.jsx("div",{className:`field-slot-chip ${u?"filled":"empty"}`,children:u?ar(u.name):"+"}),d&&l.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#c9a84c",color:"#0a1a12",borderRadius:"50%",width:14,height:14,fontSize:8,fontWeight:900,display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1},children:"C"})]}),l.jsx("div",{className:"field-slot-name",children:u?(u.nickname||(u.name||"").split(" ")[0]).toUpperCase():s.label})]},s.id)})]})}function oA({slot:t,confirmedPlayers:e,assignedIds:n,currentPlayerId:r,onAssign:i,onRemove:s,onClose:o}){const u=e.find(d=>d.id===r),c=e.filter(d=>d.id!==r&&!n.includes(d.id)).sort((d,m)=>d.number-m.number);return l.jsx("div",{className:"modal-overlay",onClick:o,children:l.jsxs("div",{className:"modal",onClick:d=>d.stopPropagation(),style:{maxWidth:380},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[l.jsxs("span",{className:"modal-title",children:["Posición — ",t.label]}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:o,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),u&&l.jsxs("div",{style:{marginBottom:16},children:[l.jsx("div",{className:"section-title",style:{marginBottom:8},children:"Asignado"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",borderRadius:12,background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)"},children:[l.jsx("div",{className:"player-avatar",style:{width:32,height:32,fontSize:11,marginBottom:0},children:ar(u.name)}),l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#e8f0eb"},children:u.name}),l.jsxs("div",{style:{fontSize:11,color:"#4a7a5a"},children:["#",u.number," · ",u.position]})]}),l.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>s(t.id),children:"Quitar"})]})]}),l.jsx("div",{className:"section-title",style:{marginBottom:8},children:u?"Cambiar jugador":"Elegir jugador"}),l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:c.length===0?l.jsx("div",{style:{textAlign:"center",padding:20,color:"#4a7a5a",fontSize:13},children:'Sin jugadores disponibles. Confirmá asistencias en "Convocados".'}):c.map(d=>l.jsxs("div",{onClick:()=>i(t.id,d.id),style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:10,cursor:"pointer",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.15s"},children:[l.jsx("div",{className:"player-avatar",style:{width:30,height:30,fontSize:10,marginBottom:0},children:ar(d.name)}),l.jsxs("span",{style:{fontSize:11,color:"#c9a84c",fontWeight:700,minWidth:22},children:["#",d.number]}),l.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#e8f0eb",flex:1},children:d.name}),l.jsx("span",{style:{fontSize:11,color:"#4a7a5a"},children:d.position})]},d.id))})]})})}function aA({players:t,matches:e,posts:n}){const r=e.filter(c=>c.status==="played"),i=r.filter(c=>{if(!c.result)return!1;const[d,m]=c.result.split("-").map(Number);return d>m}).length,s=e.find(c=>c.status==="upcoming"),o=Cf(e),u=r.reduce((c,d)=>c+Object.values(d.scorers??{}).reduce((m,p)=>m+p,0),0);return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:12,color:"#4a7a5a",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6},children:["Temporada ",new Date().getFullYear()]}),l.jsx("div",{className:"page-title",children:"Dashboard"})]}),l.jsx(or,{size:56})]}),l.jsxs("div",{className:"stat-grid",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-label",children:"Partidos"}),l.jsx("div",{className:"stat-value",children:r.length}),l.jsxs("div",{className:"stat-sub",children:[i," victorias"]})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-label",children:"Jugadores"}),l.jsx("div",{className:"stat-value",children:t.filter(c=>c.status==="active").length}),l.jsxs("div",{className:"stat-sub",children:["activos de ",t.length]})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-label",children:"Goles totales"}),l.jsx("div",{className:"stat-value stat-accent",children:u}),l.jsxs("div",{className:"stat-sub",children:["en ",r.length," partidos"]})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-label",children:"Porcentaje victorias"}),l.jsxs("div",{className:"stat-value",children:[r.length?Math.round(i/r.length*100):0,l.jsx("span",{style:{fontSize:20},children:"%"})]}),l.jsxs("div",{className:"stat-sub",children:[i,"G · ",r.length-i,"P"]})]})]}),l.jsxs("div",{className:"dashboard-two-col",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[l.jsxs("div",{children:[l.jsx("div",{className:"section-title",children:"Próximo Partido"}),s?l.jsxs("div",{className:"card",style:{position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:-20,right:-20,opacity:.04},children:l.jsx(or,{size:160})}),l.jsx("div",{style:{fontSize:12,color:"#4a7a5a",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:8},children:s.home?"🏠 LOCAL":"✈️ VISITANTE"}),l.jsxs("div",{style:{fontSize:24,fontWeight:700,color:"#e8f0eb",marginBottom:12},children:["vs ",s.rival]}),l.jsxs("div",{style:{fontSize:14,color:"#7aaa8a"},children:["📅 ",Fn(s.date)," — ",s.time]}),l.jsxs("div",{style:{fontSize:14,color:"#7aaa8a",marginTop:4},children:["📍 ",s.venue]})]}):l.jsx("div",{className:"card",children:l.jsx("div",{className:"empty-state-text",style:{color:"#3a6a4a"},children:"No hay partidos próximos"})})]}),l.jsxs("div",{children:[l.jsx("div",{className:"section-title",children:"Top Goleadores"}),l.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:[...t].map(c=>{var d;return{...c,_goals:((d=o[c.id])==null?void 0:d.goals)??0}}).filter(c=>c._goals>0).sort((c,d)=>d._goals-c._goals).slice(0,4).map((c,d)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"14px 20px",borderBottom:d<3?"1px solid rgba(255,255,255,0.04)":"none"},children:[l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:18,fontWeight:800,color:d===0?"#c9a84c":"#2a5a3a",minWidth:20,textAlign:"center"},children:d+1}),l.jsx("div",{className:"player-avatar",style:{width:36,height:36,fontSize:12,marginBottom:0},children:ar(c.name)}),l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#e8f0eb"},children:c.name}),l.jsx("div",{style:{fontSize:11,color:"#4a7a5a"},children:c.position})]}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:22,fontWeight:800,color:"#c9a84c"},children:c._goals})]},c.id))})]})]}),l.jsxs("div",{style:{marginTop:32},children:[l.jsx("div",{className:"section-title",children:"Últimas Novedades"}),[...n].sort((c,d)=>{var v,C;const m=((v=c.createdAt)==null?void 0:v.seconds)??(c.date?new Date(c.date).getTime()/1e3:0);return(((C=d.createdAt)==null?void 0:C.seconds)??(d.date?new Date(d.date).getTime()/1e3:0))-m}).slice(0,2).map(c=>l.jsxs("div",{className:"post-card",children:[l.jsx("div",{className:"post-type-badge",style:{background:c.type==="match"?"rgba(34,197,94,0.1)":c.type==="squad"?"rgba(201,168,76,0.1)":c.type==="info"?"rgba(168,85,247,0.1)":"rgba(59,130,246,0.1)",color:c.type==="match"?"#4ade80":c.type==="squad"?"#c9a84c":c.type==="info"?"#c084fc":"#60a5fa"},children:c.type==="match"?"Partido":c.type==="squad"?"Convocatoria":c.type==="info"?"Información":"Entrenamiento"}),l.jsx("div",{className:"post-title",children:c.title}),l.jsx("div",{className:"post-body",children:c.content}),l.jsx("div",{className:"post-date",children:Fn(c.date)})]},c.id))]})]})}function lA({players:t,addPlayer:e,updatePlayer:n,deletePlayer:r,matches:i}){const[s,o]=re.useState(null),[u,c]=re.useState(!1),[d,m]=re.useState(null),[p,v]=re.useState("Todos"),C=["Todos",...qo],R=Cf(i),D=[...p==="Todos"?t:t.filter(b=>b.position===p)].sort((b,g)=>b.number-g.number);return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{children:[l.jsx("div",{className:"page-title",children:"Plantel"}),l.jsxs("div",{className:"page-subtitle",children:[t.length," jugadores registrados"]})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>c(!0),children:[l.jsx(ye,{name:"plus"})," Agregar Jugador"]})]}),l.jsx("div",{className:"tabs",children:C.map(b=>l.jsx("button",{className:`tab ${p===b?"active":""}`,onClick:()=>v(b),children:b},b))}),l.jsxs("div",{className:"players-grid",children:[D.map(b=>{var g,S;return l.jsxs("div",{className:"player-card",onClick:()=>o(b),children:[l.jsxs("div",{className:"player-number",children:["#",b.number]}),l.jsx("div",{className:"player-avatar",children:ar(b.name)}),l.jsx("div",{className:"player-name",children:b.name}),l.jsx("div",{className:"player-pos",children:b.position}),l.jsx("div",{style:{marginBottom:12},children:l.jsx("span",{className:"badge",style:{background:`${hi[b.status]}15`,color:hi[b.status]},children:g_[b.status]})}),l.jsxs("div",{className:"player-stats-row",children:[l.jsxs("div",{className:"player-stat-mini",children:[l.jsx("span",{children:((g=R[b.id])==null?void 0:g.goals)??0}),l.jsx("span",{children:"Goles"})]}),l.jsxs("div",{className:"player-stat-mini",children:[l.jsx("span",{children:((S=R[b.id])==null?void 0:S.matches)??0}),l.jsx("span",{children:"PJ"})]})]})]},b.id)}),D.length===0&&l.jsx("div",{style:{gridColumn:"1/-1"},children:l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-state-icon",children:"👕"}),l.jsx("div",{className:"empty-state-text",children:"No hay jugadores en esta posición"})]})})]}),s&&l.jsx(nA,{player:s,onClose:()=>o(null),stats:R[s.id],onUpdate:n,onEdit:()=>{m(s),o(null)},onDelete:()=>{r(s.id),o(null)}}),u&&l.jsx(rA,{onClose:()=>c(!1),onAdd:e}),d&&l.jsx(iA,{player:d,onClose:()=>m(null),onSave:n})]})}const ys={clasico:{background:"linear-gradient(160deg, #0f2a1c 0%, #071510 55%, #0d1f10 100%)",border:"1.5px solid rgba(201,168,76,0.35)",glow:"radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 65%)",accentColor:"#c9a84c",textColor:"#e8f0eb",mutedColor:"#7aaa8a",subText:"#4a7a5a",resultBg:{draw:"rgba(234,179,8,0.15)",win:"rgba(34,197,94,0.15)",loss:"rgba(239,68,68,0.15)"},resultColor:{draw:"#facc15",win:"#4ade80",loss:"#f87171"}},final:{background:"linear-gradient(165deg, #1f1b0a 0%, #0f0c05 50%, #171207 100%)",border:"2px solid #d9b85c",glow:"radial-gradient(ellipse at 50% 0%, rgba(217,184,92,0.22) 0%, transparent 65%)",accentColor:"#d9b85c",textColor:"#e8f0eb",mutedColor:"#c2ab72",subText:"#7d693c",resultBg:{draw:"rgba(217,184,92,0.2)",win:"rgba(217,184,92,0.25)",loss:"rgba(239,68,68,0.15)"},resultColor:{draw:"#d9b85c",win:"#e8c060",loss:"#f87171"}},neon:{background:"linear-gradient(160deg, #080f0c 0%, #030806 60%, #060e0a 100%)",border:"1.5px solid #22c55e",glow:"radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.18) 0%, transparent 65%)",accentColor:"#22c55e",textColor:"#e8f0eb",mutedColor:"#86efac",subText:"#166534",resultBg:{draw:"rgba(234,179,8,0.15)",win:"rgba(34,197,94,0.2)",loss:"rgba(239,68,68,0.15)"},resultColor:{draw:"#facc15",win:"#22c55e",loss:"#f87171"}},cristal:{background:"linear-gradient(160deg, rgba(20,35,25,0.9) 0%, rgba(10,20,15,0.95) 100%)",border:"1.5px solid rgba(255,255,255,0.15)",glow:"radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 65%)",accentColor:"#a0c4b0",textColor:"#e8f0eb",mutedColor:"#7aaa8a",subText:"#4a7a5a",resultBg:{draw:"rgba(255,255,255,0.08)",win:"rgba(255,255,255,0.12)",loss:"rgba(239,68,68,0.15)"},resultColor:{draw:"#a0c4b0",win:"#e8f0eb",loss:"#f87171"}}};function uA({match:t,onClose:e}){const n=re.useRef(null),[r,i]=re.useState(t.matchType==="Final"?"final":"clasico"),[s,o]=re.useState(!0),u=ys[r]||ys.clasico,c=async()=>{const v=n.current;if(v)try{const C=await Ho.toPng(v,{scale:4}),R=document.createElement("a");R.download=`previo-vs-${(t.rival||"rival").replace(/\s+/g,"-").toLowerCase()}.png`,R.href=C,R.click()}catch(C){console.error(C)}},d=r==="final"?"linear-gradient(135deg, #1f1b0a, #362e14)":r==="neon"?"linear-gradient(135deg, #05140b, #0e2b17)":r==="cristal"?"rgba(255,255,255,0.07)":"linear-gradient(135deg,#1a3a2a,#2a5a3a)",m=r==="final"?"linear-gradient(135deg, #1f1b0a, #362e14)":r==="neon"?"linear-gradient(135deg, #05140b, #0e2b17)":r==="cristal"?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.05)",p=r==="final"?"rgba(217, 184, 92, 0.15)":r==="neon"?"rgba(34, 197, 94, 0.15)":r==="cristal"?"rgba(255, 255, 255, 0.1)":"rgba(201,168,76,0.12)";return l.jsx("div",{className:"modal-overlay",onClick:e,children:l.jsxs("div",{className:"modal",onClick:v=>v.stopPropagation(),style:{maxWidth:500},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[l.jsx("span",{className:"modal-title",children:"Imagen del Partido"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:e,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),l.jsxs("div",{ref:n,style:{width:"100%",maxWidth:420,margin:"0 auto",background:u.background,borderRadius:20,padding:"36px 28px 28px",border:u.border,position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:u.glow,pointerEvents:"none"}}),l.jsxs("div",{style:{textAlign:"center",marginBottom:24,position:"relative"},children:[l.jsx(or,{size:76,style:{margin:"0 auto 10px"}}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.28em",color:u.accentColor,textTransform:"uppercase"},children:"Delta Entrerriano"}),l.jsx("div",{style:{height:1,background:`linear-gradient(90deg, transparent, ${u.accentColor}99, transparent)`,marginTop:14}})]}),l.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[l.jsx("span",{style:{display:"inline-block",background:p,color:u.accentColor,border:`1.5px solid ${u.accentColor}55`,borderRadius:999,padding:"5px 28px",fontFamily:"'Barlow Condensed',sans-serif",fontSize:16,fontWeight:800,letterSpacing:"0.14em",textTransform:"uppercase"},children:"Próximo Partido"}),s&&t.matchType&&l.jsx("div",{style:{marginTop:10},children:l.jsxs("span",{style:{display:"inline-block",background:r==="final"?"rgba(217, 184, 92, 0.2)":"rgba(255,255,255,0.06)",color:u.accentColor,border:`1px solid ${u.accentColor}44`,borderRadius:999,padding:"3px 18px",fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase"},children:[r==="final"?"🏆 ":"",t.matchType.toUpperCase()]})})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:12,marginBottom:24},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:700,color:u.mutedColor,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8},children:"Delta"}),l.jsx("div",{style:{width:64,height:64,margin:"0 auto",borderRadius:"50%",background:d,border:`2px solid ${u.accentColor}55`,display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx(or,{size:40})})]}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:40,fontWeight:900,color:u.accentColor,lineHeight:1},children:"VS"}),l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:700,color:u.mutedColor,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:8,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.rival}),l.jsx("div",{style:{width:64,height:64,margin:"0 auto",borderRadius:"50%",background:m,border:`2px solid ${r==="final"||r==="neon"?u.accentColor+"55":"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Barlow Condensed',sans-serif",fontSize:22,fontWeight:800,color:u.accentColor},children:(t.rival||"?").slice(0,2).toUpperCase()})]})]}),l.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.07)",marginBottom:16}}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("span",{style:{fontSize:16},children:"📅"}),l.jsxs("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:16,fontWeight:700,color:u.textColor,letterSpacing:"0.03em"},children:[Fn(t.date)," — ",t.time]})]}),t.venue&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("span",{style:{fontSize:16},children:"📍"}),l.jsx("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:16,fontWeight:700,color:u.textColor,letterSpacing:"0.03em"},children:t.venue})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("span",{style:{fontSize:16},children:t.home?"🏠":"✈️"}),l.jsx("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:16,fontWeight:700,color:u.textColor,letterSpacing:"0.03em"},children:t.home?"Local":"Visitante"})]})]}),l.jsx("div",{style:{height:1,background:`linear-gradient(90deg, transparent, ${u.accentColor}55, transparent)`,marginTop:20,marginBottom:12}}),l.jsxs("div",{style:{textAlign:"center",fontSize:11,color:u.subText,fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase"},children:["🌿 Temporada ",new Date().getFullYear()]})]}),l.jsxs("div",{style:{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.06)"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#4a7a5a",marginBottom:8,textAlign:"center"},children:"Diseño de la Tarjeta"}),l.jsx("div",{style:{display:"flex",gap:4,background:"rgba(0,0,0,0.2)",borderRadius:10,padding:4,marginBottom:14},children:[{id:"clasico",label:"Clásico"},{id:"final",label:"Dorado 🏆"},{id:"neon",label:"Cyber Neón"},{id:"cristal",label:"Cristal"}].map(v=>l.jsx("button",{onClick:()=>i(v.id),style:{flex:1,padding:"6px 12px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",border:"none",background:r===v.id?"#0d1f16":"transparent",color:r===v.id?"#e8f0eb":"#4a7a5a",fontFamily:"'Outfit', sans-serif",transition:"all 0.2s"},children:v.label},v.id))}),l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:16},children:l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#a0c4b0",cursor:"pointer",userSelect:"none"},children:[l.jsx("input",{type:"checkbox",checked:s,onChange:v=>o(v.target.checked),style:{accentColor:u.accentColor,width:15,height:15,cursor:"pointer"}}),"Mostrar tipo de partido en la imagen"]})})]}),l.jsxs("div",{style:{display:"flex",gap:12,marginTop:10},children:[l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:e,children:[l.jsx(ye,{name:"x"})," Cerrar"]}),l.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:c,children:[l.jsx(ye,{name:"download"})," Descargar imagen"]})]})]})})}function cA({match:t,players:e,onClose:n}){const r=re.useRef(null),[i,s]=re.useState(t.matchType==="Final"?"final":"clasico"),[o,u]=re.useState(!0),c=ys[i]||ys.clasico,[d,m]=(t.result??"0-0").split("-").map(Number),p=d>m,v=d===m,C=v?"draw":p?"win":"loss",R=v?"EMPATE":p?"VICTORIA":"DERROTA",k=c.resultColor[C],D=c.resultBg[C],b=Object.fromEntries(e.map(j=>[j.id,j])),g=Object.entries(t.scorers??{}).filter(([,j])=>j>0).map(([j,F])=>{var y;return{name:((y=b[j])==null?void 0:y.name)??"Jugador",count:F}}).sort((j,F)=>F.count-j.count),S=async()=>{const j=r.current;if(j)try{const F=await Ho.toPng(j,{scale:4}),y=document.createElement("a");y.download=`resultado-vs-${(t.rival||"rival").replace(/\s+/g,"-").toLowerCase()}.png`,y.href=F,y.click()}catch(F){console.error(F)}},V=i==="final"?`2px solid ${k}`:`1.5px solid ${k}66`;return l.jsx("div",{className:"modal-overlay",onClick:n,children:l.jsxs("div",{className:"modal",onClick:j=>j.stopPropagation(),style:{maxWidth:500},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[l.jsx("span",{className:"modal-title",children:"Imagen del Resultado"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:n,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),l.jsxs("div",{ref:r,style:{width:"100%",maxWidth:420,margin:"0 auto",background:c.background,borderRadius:20,padding:"32px 28px 24px",border:V,position:"relative",overflow:"hidden",display:"block"},children:[l.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`radial-gradient(ellipse at 50% 0%, ${k}15 0%, transparent 65%)`,pointerEvents:"none"}}),l.jsxs("div",{style:{textAlign:"center",marginBottom:18,position:"relative"},children:[l.jsx(or,{size:72,style:{margin:"0 auto 10px"}}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.28em",color:c.accentColor,textTransform:"uppercase"},children:"Delta Entrerriano"}),l.jsx("div",{style:{height:1,background:`linear-gradient(90deg, transparent, ${k}88, transparent)`,marginTop:14}})]}),l.jsxs("div",{style:{textAlign:"center",fontSize:11,color:c.mutedColor,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:14},children:[t.home?"🏠 Local":"✈️ Visitante"," · ",Fn(t.date)]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:8,marginBottom:18},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:12,fontWeight:700,color:c.mutedColor,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4},children:"Delta"}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:88,fontWeight:900,color:c.textColor,lineHeight:1},children:d})]}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:36,fontWeight:700,color:c.subText,paddingBottom:10,userSelect:"none"},children:"—"}),l.jsxs("div",{style:{textAlign:"center"},children:[l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:12,fontWeight:700,color:c.mutedColor,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t.rival}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:88,fontWeight:900,color:c.textColor,lineHeight:1},children:m})]})]}),l.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[l.jsx("span",{style:{display:"inline-block",background:D,color:k,border:`1.5px solid ${k}66`,borderRadius:999,padding:"6px 32px",fontFamily:"'Barlow Condensed',sans-serif",fontSize:22,fontWeight:900,letterSpacing:"0.1em"},children:R}),o&&t.matchType&&l.jsx("div",{style:{marginTop:10},children:l.jsxs("span",{style:{display:"inline-block",background:i==="final"?"rgba(217, 184, 92, 0.2)":"rgba(255,255,255,0.06)",color:c.accentColor,border:`1px solid ${c.accentColor}44`,borderRadius:999,padding:"3px 18px",fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase"},children:[i==="final"?"🏆 ":"",t.matchType.toUpperCase()]})})]}),g.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.07)",marginBottom:14}}),l.jsx("div",{style:{marginBottom:4},children:g.map((j,F)=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"5px 2px",borderBottom:F<g.length-1?"1px solid rgba(255,255,255,0.04)":"none"},children:[l.jsx("span",{style:{fontSize:13},children:"⚽"}),l.jsx("span",{style:{fontSize:14,fontWeight:600,color:c.textColor,flex:1},children:j.name}),j.count>1&&l.jsxs("span",{style:{fontSize:12,fontWeight:700,color:c.accentColor,background:`${c.accentColor}18`,borderRadius:20,padding:"1px 10px"},children:["×",j.count]})]},F))})]}),l.jsx("div",{style:{height:1,background:`linear-gradient(90deg, transparent, ${k}55, transparent)`,marginTop:20,marginBottom:12}}),l.jsxs("div",{style:{textAlign:"center",fontSize:11,color:c.subText,fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase"},children:["🌿 Temporada ",new Date().getFullYear()]})]}),l.jsxs("div",{style:{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.06)"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#4a7a5a",marginBottom:8,textAlign:"center"},children:"Diseño de la Tarjeta"}),l.jsx("div",{style:{display:"flex",gap:4,background:"rgba(0,0,0,0.2)",borderRadius:10,padding:4,marginBottom:14},children:[{id:"clasico",label:"Clásico"},{id:"final",label:"Dorado 🏆"},{id:"neon",label:"Cyber Neón"},{id:"cristal",label:"Cristal"}].map(j=>l.jsx("button",{onClick:()=>s(j.id),style:{flex:1,padding:"6px 12px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",border:"none",background:i===j.id?"#0d1f16":"transparent",color:i===j.id?"#e8f0eb":"#4a7a5a",fontFamily:"'Outfit', sans-serif",transition:"all 0.2s"},children:j.label},j.id))}),l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:16},children:l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#a0c4b0",cursor:"pointer",userSelect:"none"},children:[l.jsx("input",{type:"checkbox",checked:o,onChange:j=>u(j.target.checked),style:{accentColor:c.accentColor,width:15,height:15,cursor:"pointer"}}),"Mostrar tipo de partido en la imagen"]})})]}),l.jsxs("div",{style:{display:"flex",gap:12,marginTop:10},children:[l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:n,children:[l.jsx(ye,{name:"x"})," Cerrar"]}),l.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:S,children:[l.jsx(ye,{name:"download"})," Descargar imagen"]})]})]})})}function dA({match:t,players:e,onClose:n}){var V;const r=re.useRef(null),[i,s]=re.useState(t.matchType==="Final"?"final":"clasico"),[o,u]=re.useState(!0),c=ys[i]||ys.clasico,d=Object.fromEntries(e.map(j=>[j.id,j])),[m,p]=(t.result??"0-0").split("-").map(Number),v=m>p,C=m===p,R=C?"draw":v?"win":"loss",k=c.resultColor[R],D=(t.participants??[]).map(j=>d[j]).filter(Boolean).sort((j,F)=>{var y,_;return(((y=t.ratings)==null?void 0:y[F.id])??0)-(((_=t.ratings)==null?void 0:_[j.id])??0)}),b=j=>j?j>=9?c.accentColor:j>=7?i==="neon"?"#22c55e":"#4ade80":j>=5?"#facc15":"#f87171":"#3a6a4a",g=async()=>{const j=r.current;if(j)try{const F=await Ho.toPng(j,{scale:4}),y=document.createElement("a");y.download=`notas-vs-${(t.rival||"rival").replace(/\s+/g,"-").toLowerCase()}.png`,y.href=F,y.click()}catch(F){console.error(F)}},S=i==="final"?`2px solid ${k}`:`1.5px solid ${k}55`;return l.jsx("div",{className:"modal-overlay",onClick:n,children:l.jsxs("div",{className:"modal",onClick:j=>j.stopPropagation(),style:{maxWidth:500},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[l.jsx("span",{className:"modal-title",children:"Notas del Partido"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:n,style:{padding:"6px 10px"},children:l.jsx(ye,{name:"x"})})]}),l.jsxs("div",{ref:r,style:{width:"100%",maxWidth:420,margin:"0 auto",background:c.background,borderRadius:20,padding:"28px 24px 20px",border:S,position:"relative",overflow:"hidden"},children:[l.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`radial-gradient(ellipse at 50% 0%, ${k}15 0%, transparent 60%)`,pointerEvents:"none"}}),l.jsxs("div",{style:{textAlign:"center",marginBottom:16,position:"relative"},children:[l.jsx(or,{size:56,style:{margin:"0 auto 8px"}}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.28em",color:c.accentColor,textTransform:"uppercase"},children:"Delta Entrerriano"})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:6},children:[l.jsx("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:40,fontWeight:900,color:c.textColor,lineHeight:1},children:m}),l.jsx("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:18,color:c.subText,fontWeight:700},children:"vs"}),l.jsx("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:40,fontWeight:900,color:c.textColor,lineHeight:1},children:p})]}),l.jsx("div",{style:{textAlign:"center",marginBottom:4},children:l.jsxs("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:700,color:c.mutedColor,textTransform:"uppercase",letterSpacing:"0.08em"},children:["vs ",t.rival]})}),l.jsxs("div",{style:{textAlign:"center",marginBottom:16},children:[l.jsx("span",{style:{display:"inline-block",background:`${k}18`,color:k,border:`1px solid ${k}44`,borderRadius:999,padding:"3px 18px",fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:800,letterSpacing:"0.1"},children:C?"EMPATE":v?"VICTORIA":"DERROTA"}),o&&t.matchType&&l.jsx("div",{style:{marginTop:8},children:l.jsxs("span",{style:{display:"inline-block",background:i==="final"?"rgba(217, 184, 92, 0.2)":"rgba(255,255,255,0.06)",color:c.accentColor,border:`1px solid ${c.accentColor}44`,borderRadius:999,padding:"2px 14px",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase"},children:[i==="final"?"🏆 ":"",t.matchType.toUpperCase()]})})]}),l.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.07)",marginBottom:14}}),t.mvp&&d[t.mvp]&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:i==="final"?"rgba(217, 184, 92, 0.15)":"rgba(201,168,76,0.1)",border:`1px solid ${c.accentColor}55`,borderRadius:12,padding:"10px 14px",marginBottom:14},children:[l.jsx("span",{style:{fontSize:20,color:c.accentColor},children:"★"}),l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{style:{fontSize:9,fontWeight:700,letterSpacing:"0.12em",color:c.accentColor,textTransform:"uppercase",marginBottom:2},children:"MVP del Partido"}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:18,fontWeight:800,color:c.textColor,textTransform:"uppercase"},children:d[t.mvp].name})]}),((V=t.ratings)==null?void 0:V[t.mvp])&&l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:32,fontWeight:900,color:c.accentColor,lineHeight:1},children:t.ratings[t.mvp]})]}),D.length>0&&l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:5},children:D.map(j=>{var T;const F=(T=t.ratings)==null?void 0:T[j.id],y=t.mvp===j.id,_=b(F);return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsxs("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,fontWeight:700,color:c.accentColor,minWidth:24,textAlign:"right"},children:["#",j.number]}),l.jsxs("span",{style:{fontSize:12,fontWeight:600,color:y?c.textColor:c.mutedColor,flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[j.name,y?" ★":""]}),F?l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{width:60,height:4,borderRadius:4,background:i==="final"?"rgba(217, 184, 92, 0.08)":"rgba(255,255,255,0.06)",overflow:"hidden",flexShrink:0},children:l.jsx("div",{style:{width:`${F*10}%`,height:"100%",background:_,borderRadius:4}})}),l.jsx("span",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:16,fontWeight:800,color:_,minWidth:20,textAlign:"right",lineHeight:1},children:F})]}):l.jsx("span",{style:{fontSize:11,color:c.subText,minWidth:80,textAlign:"right"},children:"Sin nota"})]},j.id)})}),l.jsx("div",{style:{height:1,background:`linear-gradient(90deg, transparent, ${k}55, transparent)`,marginTop:16,marginBottom:10}}),l.jsxs("div",{style:{textAlign:"center",fontSize:10,color:c.subText,fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase"},children:["🌿 Temporada ",new Date().getFullYear()]})]}),l.jsxs("div",{style:{marginTop:20,paddingTop:16,borderTop:"1px solid rgba(255,255,255,0.06)"},children:[l.jsx("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",color:"#4a7a5a",marginBottom:8,textAlign:"center"},children:"Diseño de la Tarjeta"}),l.jsx("div",{style:{display:"flex",gap:4,background:"rgba(0,0,0,0.2)",borderRadius:10,padding:4,marginBottom:14},children:[{id:"clasico",label:"Clásico"},{id:"final",label:"Dorado 🏆"},{id:"neon",label:"Cyber Neón"},{id:"cristal",label:"Cristal"}].map(j=>l.jsx("button",{onClick:()=>s(j.id),style:{flex:1,padding:"6px 12px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",border:"none",background:i===j.id?"#0d1f16":"transparent",color:i===j.id?"#e8f0eb":"#4a7a5a",fontFamily:"'Outfit', sans-serif",transition:"all 0.2s"},children:j.label},j.id))}),l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginBottom:16},children:l.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"#a0c4b0",cursor:"pointer",userSelect:"none"},children:[l.jsx("input",{type:"checkbox",checked:o,onChange:j=>u(j.target.checked),style:{accentColor:c.accentColor,width:15,height:15,cursor:"pointer"}}),"Mostrar tipo de partido en la imagen"]})})]}),l.jsxs("div",{style:{display:"flex",gap:12,marginTop:10},children:[l.jsxs("button",{className:"btn btn-ghost",style:{flex:1},onClick:n,children:[l.jsx(ye,{name:"x"})," Cerrar"]}),l.jsxs("button",{className:"btn btn-primary",style:{flex:1},onClick:g,children:[l.jsx(ye,{name:"download"})," Descargar imagen"]})]})]})})}function hA({matches:t,addMatch:e,updateMatch:n,deleteMatch:r,players:i=[]}){const[s,o]=re.useState(!1),[u,c]=re.useState(null),[d,m]=re.useState(null),[p,v]=re.useState([]),[C,R]=re.useState({}),[k,D]=re.useState(null),[b,g]=re.useState(null),[S,V]=re.useState(null),[j]=mo("convocatorias"),[F]=mo("alineaciones"),y=t.filter(w=>w.status==="played"),_=t.filter(w=>w.status==="upcoming"),T=(w,A=null)=>{if(c(w),m(A),A==="played"){const Ce=j.find(et=>et.matchId===w.id||et.id===w.id),Ye=Ce?Object.entries(Ce.attendance??{}).filter(([,et])=>et==="yes").map(([et])=>et):[];v(Ye)}else v([]);const I=F.find(Ce=>Ce.id===w.id);R((I==null?void 0:I.lineup)??{})},E=(w,A)=>{const I=t.find(Ye=>Ye.id===w),Ce=A.status==="played"&&A.result&&!(I!=null&&I.result);n(w,A,I),Ce&&D(A)};return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{children:[l.jsx("div",{className:"page-title",children:"Partidos"}),l.jsxs("div",{className:"page-subtitle",children:[y.length," disputados · ",_.length," próximos"]})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>o(!0),children:[l.jsx(ye,{name:"plus"})," Nuevo Partido"]})]}),_.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"section-title",children:"Próximos"}),_.map(w=>l.jsxs("div",{className:"match-row",children:[l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:11,color:"#4a7a5a",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4},children:w.home?"🏠 Local":"✈️ Visitante"}),l.jsxs("div",{className:"match-rival",children:["vs ",w.rival]}),l.jsxs("div",{className:"match-meta",children:["📅 ",Fn(w.date)," ",w.time," · ",w.venue]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",justifyContent:"flex-end"},children:[l.jsx("button",{className:"btn btn-primary btn-sm",onClick:()=>T(w,"played"),style:{fontSize:12},children:"⚽ Cargar Resultado"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>g(w),title:"Imagen del partido",style:{padding:"4px 8px",opacity:.7},children:l.jsx(ye,{name:"photo"})}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>T(w),style:{padding:"4px 8px",opacity:.7},children:l.jsx(ye,{name:"edit"})})]})]},w.id))]}),y.length>0&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"section-title",style:{marginTop:24},children:"Resultados"}),[...y].sort((w,A)=>new Date(A.date)-new Date(w.date)).map(w=>{const A=(w.result??"0-0").split("-").map(Number),[I,Ce]=[isNaN(A[0])?0:A[0],isNaN(A[1])?0:A[1]],Ye=I>Ce,et=I===Ce;return l.jsxs("div",{className:"match-row",children:[l.jsxs("div",{children:[l.jsxs("div",{style:{fontSize:11,color:"#4a7a5a",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4},children:[w.home?"Local":"Visitante"," · ",Fn(w.date)]}),l.jsxs("div",{className:"match-rival",children:["vs ",w.rival]}),l.jsx("div",{className:"match-meta",children:w.venue})]}),l.jsxs("div",{style:{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[l.jsx("div",{className:"match-score",children:w.result}),l.jsx("span",{className:"badge",style:{background:et?"rgba(234,179,8,0.1)":Ye?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)",color:et?"#facc15":Ye?"#4ade80":"#f87171"},children:et?"Empate":Ye?"Victoria":"Derrota"}),l.jsxs("div",{style:{display:"flex",gap:4},children:[l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>D(w),title:"Imagen del resultado",style:{padding:"4px 8px",opacity:.7},children:l.jsx(ye,{name:"photo"})}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>V(w),title:"Notas del partido",style:{padding:"4px 8px",opacity:.7},children:"★"}),l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>T(w),style:{padding:"4px 8px",opacity:.7},children:l.jsx(ye,{name:"edit"})})]})]})]},w.id)})]}),s&&l.jsx(Bg,{onClose:()=>o(!1),onAdd:e,onSave:E,players:i}),u&&l.jsx(Bg,{initial:u,initialStatus:d,defaultParticipants:p,lineupForMatch:C,onClose:()=>{c(null),m(null),v([]),R({})},onAdd:e,onSave:E,onDelete:r,players:i}),k&&l.jsx(cA,{match:k,players:i,onClose:()=>D(null)}),S&&l.jsx(dA,{match:S,players:i,onClose:()=>V(null)}),b&&l.jsx(uA,{match:b,onClose:()=>g(null)})]})}function fA({players:t,matches:e}){const n=Cf(e),r=[...t].sort((i,s)=>i.name.localeCompare(s.name,"es"));return l.jsxs("div",{children:[l.jsx("div",{className:"page-header",children:l.jsxs("div",{children:[l.jsx("div",{className:"page-title",children:"Estadísticas"}),l.jsx("div",{className:"page-subtitle",children:"Rendimiento individual de la temporada"})]})}),l.jsxs("div",{children:[l.jsx("div",{className:"section-title",children:"Tabla de Goleadores"}),l.jsx("div",{className:"card",style:{padding:0,overflow:"hidden"},children:l.jsxs("table",{className:"rank-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:40},children:"#"}),l.jsx("th",{children:"Jugador"}),l.jsx("th",{style:{textAlign:"right"},children:"⚽"}),l.jsx("th",{style:{textAlign:"right"},children:"PJ"})]})}),l.jsx("tbody",{children:r.map((i,s)=>{var o,u;return l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("div",{className:`rank-pos ${s<3?"top3":""}`,style:{color:s===0?"#c9a84c":s<3?"#a0c4b0":"#3a6a4a"},children:s+1})}),l.jsx("td",{children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[l.jsx("div",{className:"player-avatar",style:{width:28,height:28,fontSize:10,marginBottom:0,flexShrink:0},children:ar(i.name)}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#e8f0eb"},children:i.name}),l.jsx("div",{style:{fontSize:11,color:"#4a7a5a"},children:i.position})]})]})}),l.jsx("td",{style:{textAlign:"right",fontFamily:"'Barlow Condensed',sans-serif",fontSize:16,fontWeight:700,color:"#c9a84c"},children:((o=n[i.id])==null?void 0:o.goals)??0}),l.jsx("td",{style:{textAlign:"right",fontSize:13,color:"#4a7a5a"},children:((u=n[i.id])==null?void 0:u.matches)??0})]},i.id)})})]})})]})]})}function pA({players:t,matches:e,dtName:n="",onSaveDt:r}){const[i,s]=re.useState("convocatoria"),[o,u]=re.useState({}),[c,d]=re.useState(null),m=re.useRef(null),p=re.useRef(null),[v,C]=re.useState(n),[R,k]=re.useState(!1);re.useEffect(()=>{C(n)},[n]);const D=()=>{r&&r(v),k(!0),setTimeout(()=>k(!1),1500)},[b,g]=re.useState({}),[S,V]=re.useState(null),[j,F]=re.useState(null),y=e.find(z=>z.status==="upcoming"),_=t.filter(z=>z.status!=="suspended"&&o[z.id]==="yes").sort((z,H)=>z.number-H.number);re.useEffect(()=>{if(!(y!=null&&y.id)){u({});return}const z=Bt(pt,"convocatorias",y.id);return Bl(z,O=>{u(O.exists()?O.data().attendance??{}:{})})},[y==null?void 0:y.id]),re.useEffect(()=>{if(!(y!=null&&y.id)){g({}),V(null);return}const z=Bt(pt,"alineaciones",y.id);return Bl(z,O=>{O.exists()?(g(O.data().lineup??{}),V(O.data().captain??null)):(g({}),V(null))})},[y==null?void 0:y.id]);const T=(z,H)=>{if(!(y!=null&&y.id))return;const O={...o,[z]:H};u(O),zl(Bt(pt,"convocatorias",y.id),{attendance:O,matchId:y.id,updatedAt:Uo()},{merge:!0}),H==="yes"&&d("Confirmado ✓")},E=(z,H=S)=>{y!=null&&y.id&&zl(Bt(pt,"alineaciones",y.id),{lineup:z,captain:H,matchId:y.id,updatedAt:Uo()},{merge:!0})},w=z=>{const H=S===z?null:z;V(H),E(b,H)},A=9,I=(z,H)=>{const O=!!b[z],L=Object.fromEntries(Object.entries(b).filter(([,G])=>G!==H));if(!O&&Object.keys(L).length>=A){d(`Máximo ${A} jugadores en la alineación`),F(null);return}L[z]=H,g(L),F(null),E(L)},Ce=z=>{const H={...b};delete H[z],g(H),F(null),E(H)},Ye=()=>{g({}),V(null),E({},null)},et=async()=>{const z=m.current;if(z)try{const H=await Ho.toPng(z,{scale:4}),O=document.createElement("a");O.download=`convocatoria-${y?y.rival.replace(/\s+/g,"-").toLowerCase():"delta"}.png`,O.href=H,O.click()}catch(H){console.error(H)}},rn=async()=>{const z=p.current;if(z)try{const H=await Ho.toPng(z,{scale:4}),O=document.createElement("a");O.download=`alineacion-${y?y.rival.replace(/\s+/g,"-").toLowerCase():"delta"}.png`,O.href=H,O.click()}catch(H){console.error(H)}},K=Object.values(b??{});return l.jsxs("div",{children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{children:[l.jsx("div",{className:"page-title",children:i==="alineacion"?"Alineación":"Convocatoria"}),l.jsx("div",{className:"page-subtitle",children:y?`vs ${y.rival} · ${Fn(y.date)}`:"Sin partido próximo"})]}),l.jsxs("button",{className:"btn btn-primary",onClick:i==="alineacion"?rn:et,children:[l.jsx(ye,{name:"download"})," Exportar"]})]}),l.jsxs("div",{className:"tabs",children:[l.jsx("button",{className:`tab ${i==="convocatoria"?"active":""}`,onClick:()=>s("convocatoria"),children:"📋 Convocados"}),l.jsx("button",{className:`tab ${i==="alineacion"?"active":""}`,onClick:()=>s("alineacion"),children:"⚽ Alineación"})]}),i==="convocatoria"&&l.jsxs("div",{className:"convocatoria-two-col",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:28},children:[l.jsxs("div",{children:[l.jsx("div",{className:"section-title",children:"Confirmar asistencia"}),!y&&l.jsx("div",{className:"card",style:{marginBottom:16,textAlign:"center",color:"#4a7a5a",fontSize:14},children:"Sin partido próximo. Creá uno en la sección Partidos."}),l.jsxs("div",{className:"card-sm",style:{marginBottom:14,display:"flex",alignItems:"center",gap:10},children:[l.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#c9a84c",textTransform:"uppercase",letterSpacing:"0.08em",flexShrink:0},children:"DT"}),l.jsx("input",{className:"form-input",placeholder:"Nombre del DT...",value:v,onChange:z=>{C(z.target.value),k(!1)},style:{flex:1}}),l.jsx("button",{className:"btn btn-primary btn-sm",style:{flexShrink:0},onClick:D,children:R?"✓":"Guardar"})]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[t.filter(z=>z.status!=="suspended").map(z=>l.jsxs("div",{className:"card-sm",style:{display:"flex",alignItems:"center",justifyContent:"space-between",opacity:y?1:.5},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[l.jsx("div",{className:"player-avatar",style:{width:36,height:36,fontSize:12,marginBottom:0},children:ar(z.name)}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#e8f0eb"},children:z.name}),l.jsxs("div",{style:{fontSize:11,color:z.status==="injured"?"#f97316":"#4a7a5a"},children:["#",z.number," · ",z.status==="injured"?"🤕 Lesionado":z.position]})]})]}),l.jsx("div",{style:{display:"flex",gap:6},children:[{k:"yes",e:"✓",col:"#4ade80"},{k:"maybe",e:"?",col:"#facc15"},{k:"no",e:"✕",col:"#f87171"}].map(H=>l.jsx("button",{onClick:()=>y&&T(z.id,H.k),style:{width:32,height:32,borderRadius:8,border:"none",cursor:y?"pointer":"default",background:o[z.id]===H.k?`${H.col}22`:"rgba(255,255,255,0.04)",color:o[z.id]===H.k?H.col:"#3a6a4a",fontSize:13,fontWeight:700,transition:"all 0.15s",outline:o[z.id]===H.k?`1.5px solid ${H.col}`:"1px solid rgba(255,255,255,0.06)"},children:H.e},H.k))})]},z.id)),t.filter(z=>z.status!=="suspended").length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-state-icon",children:"👕"}),l.jsx("div",{className:"empty-state-text",children:"No hay jugadores activos"})]})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"section-title",children:["Card visual · ",_.length," confirmados"]}),l.jsxs("div",{className:"squad-card-wrap",children:[l.jsxs("div",{ref:m,className:"squad-card",children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:10,flexShrink:0},children:[l.jsx(or,{size:58,style:{margin:"0 auto"}}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.25em",color:"#c9a84c",textTransform:"uppercase",marginTop:8,marginBottom:2},children:"Delta Entrerriano"}),l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:36,fontWeight:900,letterSpacing:"0.06em",color:"#e8f0eb",textTransform:"uppercase",lineHeight:1},children:"CONVOCADOS"})]}),l.jsx("div",{className:"squad-card-line"}),y&&l.jsxs("div",{style:{textAlign:"center",marginBottom:8,flexShrink:0},children:[l.jsxs("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:20,fontWeight:800,color:"#e8f0eb",letterSpacing:"0.04em"},children:["VS ",y.rival.toUpperCase()]}),l.jsxs("div",{style:{fontSize:12,color:"#7aaa8a",marginTop:4,letterSpacing:"0.06em"},children:[Fn(y.date)," · ",y.time]}),l.jsx("div",{style:{fontSize:11,color:"#4a7a5a",marginTop:2},children:y.venue})]}),l.jsx("div",{className:"squad-card-line"}),l.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[l.jsx("img",{src:m_,alt:"",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"78%",opacity:.07,pointerEvents:"none",userSelect:"none"}}),l.jsx("div",{style:{position:"relative",zIndex:1,height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:_.length===0?l.jsx("div",{style:{textAlign:"center",padding:"24px 0",color:"#3a6a4a",fontSize:13},children:"Sin confirmaciones aún"}):_.map((z,H)=>l.jsxs("div",{className:"squad-name-item",style:{borderBottom:H<_.length-1?"1px solid rgba(255,255,255,0.04)":"none",padding:"5px 0"},children:[l.jsx("div",{className:"squad-name-num",children:z.number}),l.jsxs("div",{className:"squad-name-text",children:[(z.name||"").toUpperCase(),S===z.id&&l.jsx("span",{style:{marginLeft:6,fontSize:10,fontWeight:900,color:"#c9a84c"},children:"(C)"})]}),l.jsx("div",{style:{marginLeft:"auto",fontSize:10,color:"#3a6a4a",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:z.position})]},z.id))})]}),l.jsx("div",{className:"squad-card-line"}),n&&l.jsx("div",{style:{textAlign:"center",paddingBottom:4,flexShrink:0},children:l.jsxs("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:700,color:"#7aaa8a",letterSpacing:"0.08em",textTransform:"uppercase"},children:["DT: ",n.toUpperCase()]})}),l.jsx("div",{className:"squad-card-line"}),l.jsx("div",{style:{textAlign:"center",paddingTop:2,flexShrink:0},children:l.jsxs("div",{style:{fontSize:11,color:"#3a6a4a",letterSpacing:"0.15em",fontWeight:600,textTransform:"uppercase"},children:["🌿 Temporada ",new Date().getFullYear()]})})]}),_.length>0&&l.jsxs("div",{className:"attend-feedback",style:{marginTop:16},children:[l.jsx("span",{children:"🔥"}),l.jsxs("span",{children:[_.length," jugadores confirmados para el partido"]})]})]})]})]}),i==="alineacion"&&l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:12},children:l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:Ye,style:{fontSize:12,color:"#f87171",borderColor:"rgba(248,113,113,0.2)"},children:"🗑 Limpiar alineación"})}),l.jsxs("div",{className:"lineup-wrap",children:[l.jsxs("div",{ref:p,style:{background:"#0a1a12",borderRadius:16,padding:16},children:[l.jsxs("div",{style:{textAlign:"center",marginBottom:12},children:[l.jsx("div",{style:{fontFamily:"'Barlow Condensed',sans-serif",fontSize:20,fontWeight:900,color:"#c9a84c",letterSpacing:"0.1em"},children:"DELTA ENTRERRIANO"}),y&&l.jsxs("div",{style:{fontSize:12,color:"#4a7a5a",marginTop:2},children:["vs ",y.rival.toUpperCase()," · ",Fn(y.date)]})]}),l.jsx(sA,{lineup:b,players:t,captain:S,onSlotClick:F})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"section-title",children:["Confirmados (",_.length,")"]}),_.length===0?l.jsx("div",{className:"card",style:{textAlign:"center",color:"#4a7a5a",fontSize:13,padding:16},children:'Confirmá jugadores en "Convocados" primero.'}):l.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:_.map(z=>{const H=K.includes(z.id);return l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",borderRadius:10,background:H?"rgba(201,168,76,0.08)":"rgba(255,255,255,0.03)",border:`1px solid ${H?"rgba(201,168,76,0.2)":"rgba(255,255,255,0.05)"}`,opacity:H?.7:1},children:[l.jsx("div",{className:"player-avatar",style:{width:28,height:28,fontSize:10,marginBottom:0},children:ar(z.name)}),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#e8f0eb",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:z.name}),l.jsxs("div",{style:{fontSize:10,color:"#4a7a5a"},children:["#",z.number]})]}),l.jsx("button",{onClick:()=>w(z.id),title:S===z.id?"Quitar capitán":"Asignar capitán",style:{width:22,height:22,borderRadius:6,border:"none",cursor:"pointer",flexShrink:0,background:S===z.id?"#c9a84c":"rgba(201,168,76,0.12)",color:S===z.id?"#0a1a12":"#c9a84c",fontSize:10,fontWeight:900,lineHeight:1},children:"C"}),H&&l.jsx("span",{style:{fontSize:11,color:"#c9a84c",fontWeight:700},children:"✓"})]},z.id)})})]})]})]}),j&&l.jsx(oA,{slot:j,confirmedPlayers:_,assignedIds:K,currentPlayerId:b[j.id],onAssign:I,onRemove:Ce,onClose:()=>F(null)}),c&&l.jsx(y_,{msg:c,onClose:()=>d(null)})]})}function mA({posts:t,addPost:e,updatePost:n,deletePost:r}){const[i,s]=re.useState(!1),[o,u]=re.useState({title:"",content:"",type:"training"}),[c,d]=re.useState(null),m={match:["rgba(34,197,94,0.1)","#4ade80"],squad:["rgba(201,168,76,0.1)","#c9a84c"],training:["rgba(59,130,246,0.1)","#60a5fa"],info:["rgba(168,85,247,0.1)","#c084fc"]},p={match:"Partido",squad:"Convocatoria",training:"Entrenamiento",info:"Información"},v=[{value:"match",label:"Partido"},{value:"squad",label:"Convocatoria"},{value:"training",label:"Entrenamiento"},{value:"info",label:"Información"}],C=()=>{!o.title||!o.content||(e({...o,date:new Date().toISOString().split("T")[0]}),u({title:"",content:"",type:"training"}),s(!1))},R=()=>{!c.title||!c.content||(n(c.id,{title:c.title,content:c.content,type:c.type}),d(null))};return l.jsxs("div",{style:{maxWidth:640},children:[l.jsxs("div",{className:"page-header",children:[l.jsxs("div",{children:[l.jsx("div",{className:"page-title",children:"Novedades"}),l.jsx("div",{className:"page-subtitle",children:"Feed del equipo"})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>s(k=>!k),children:[l.jsx(ye,{name:"plus"})," Nueva Novedad"]})]}),i&&l.jsxs("div",{className:"card",style:{marginBottom:24},children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Título"}),l.jsx("input",{className:"form-input",placeholder:"Título de la novedad...",value:o.title,onChange:k=>u(D=>({...D,title:k.target.value}))})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Contenido"}),l.jsx("textarea",{className:"form-input",rows:3,placeholder:"Escribí el contenido...",value:o.content,onChange:k=>u(D=>({...D,content:k.target.value})),style:{resize:"vertical"}})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{className:"form-label",children:"Tipo"}),l.jsx("select",{className:"form-select",value:o.type,onChange:k=>u(D=>({...D,type:k.target.value})),children:v.map(k=>l.jsx("option",{value:k.value,children:k.label},k.value))})]}),l.jsxs("div",{style:{display:"flex",gap:10},children:[l.jsxs("button",{className:"btn btn-ghost",onClick:()=>s(!1),style:{flex:1},children:[l.jsx(ye,{name:"x"})," Cancelar"]}),l.jsxs("button",{className:"btn btn-primary",onClick:C,style:{flex:1},children:[l.jsx(ye,{name:"news"})," Publicar"]})]})]}),[...t].sort((k,D)=>{var S,V;const b=((S=k.createdAt)==null?void 0:S.seconds)??(k.date?new Date(k.date).getTime()/1e3:0);return(((V=D.createdAt)==null?void 0:V.seconds)??(D.date?new Date(D.date).getTime()/1e3:0))-b}).map(k=>{var D,b;return l.jsx("div",{className:"post-card",children:(c==null?void 0:c.id)===k.id?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"form-group",style:{marginBottom:10},children:l.jsx("input",{className:"form-input",value:c.title,onChange:g=>d(S=>({...S,title:g.target.value}))})}),l.jsx("div",{className:"form-group",style:{marginBottom:10},children:l.jsx("textarea",{className:"form-input",rows:3,value:c.content,onChange:g=>d(S=>({...S,content:g.target.value})),style:{resize:"vertical"}})}),l.jsx("div",{className:"form-group",style:{marginBottom:12},children:l.jsx("select",{className:"form-select",value:c.type,onChange:g=>d(S=>({...S,type:g.target.value})),children:v.map(g=>l.jsx("option",{value:g.value,children:g.label},g.value))})}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsxs("button",{className:"btn btn-ghost",onClick:()=>d(null),style:{flex:1},children:[l.jsx(ye,{name:"x"})," Cancelar"]}),l.jsxs("button",{className:"btn btn-primary",onClick:R,style:{flex:1},children:[l.jsx(ye,{name:"check"})," Guardar"]})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:8,marginBottom:8},children:[l.jsx("div",{className:"post-type-badge",style:{background:(D=m[k.type])==null?void 0:D[0],color:(b=m[k.type])==null?void 0:b[1]},children:p[k.type]||k.type}),l.jsxs("div",{style:{display:"flex",gap:6},children:[l.jsx("button",{className:"btn btn-ghost btn-sm",onClick:()=>d({id:k.id,title:k.title,content:k.content,type:k.type}),style:{padding:"4px 8px",opacity:.7},children:l.jsx(ye,{name:"edit"})}),l.jsx("button",{className:"btn btn-danger btn-sm",onClick:()=>{window.confirm("¿Eliminar esta novedad?")&&r(k.id)},style:{padding:"4px 8px"},children:l.jsx(ye,{name:"trash"})})]})]}),l.jsx("div",{className:"post-title",children:k.title}),l.jsx("div",{className:"post-body",children:k.content}),l.jsx("div",{className:"post-date",children:Fn(k.date)})]})},k.id)}),t.length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-state-icon",children:"📰"}),l.jsx("div",{className:"empty-state-text",children:"No hay novedades aún"})]})]})}const gA=[{key:"dashboard",icon:"home",label:"Inicio"},{key:"players",icon:"users",label:"Plantel"},{key:"matches",icon:"calendar",label:"Partidos"},{key:"convocatoria",icon:"convocatoria",label:"Convocatoria"},{key:"stats",icon:"chart",label:"Estadísticas"},{key:"feed",icon:"feed",label:"Novedades"}];function yA(){const[t,e]=re.useState(null),[n,r]=re.useState(!1),[i,s]=re.useState(()=>localStorage.getItem("pwa-dismissed")==="1");if(re.useEffect(()=>{const c=p=>{p.preventDefault(),e(p)};window.addEventListener("beforeinstallprompt",c);const d=/iphone|ipad|ipod/i.test(navigator.userAgent),m=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone;return d&&!m&&r(!0),()=>window.removeEventListener("beforeinstallprompt",c)},[]),i||!t&&!n)return null;const o=()=>{localStorage.setItem("pwa-dismissed","1"),s(!0)},u=async()=>{if(!t)return;t.prompt();const{outcome:c}=await t.userChoice;c==="accepted"&&o(),e(null)};return l.jsxs("div",{style:{position:"fixed",bottom:0,left:0,right:0,background:"#0d1f16",borderTop:"1px solid rgba(201,168,76,0.3)",padding:"14px 20px",display:"flex",alignItems:"center",gap:14,zIndex:400,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)"},children:[l.jsx(or,{size:36}),l.jsxs("div",{style:{flex:1},children:[l.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#e8f0eb"},children:"Instalar Delta Entrerriano"}),n?l.jsxs("div",{style:{fontSize:12,color:"#7aaa8a",marginTop:2},children:["Tocá ",l.jsx("strong",{children:"Compartir"})," → ",l.jsx("strong",{children:'"Agregar a pantalla de inicio"'})]}):l.jsx("div",{style:{fontSize:12,color:"#7aaa8a",marginTop:2},children:"Instalá la app para acceso rápido sin internet"})]}),!n&&l.jsx("button",{className:"btn btn-primary btn-sm",onClick:u,children:"Instalar"}),l.jsx("button",{onClick:o,style:{background:"none",border:"none",color:"#4a7a5a",cursor:"pointer",fontSize:20,padding:"0 4px",lineHeight:1},children:"×"})]})}function mo(t){const[e,n]=re.useState([]),[r,i]=re.useState(!0);return re.useEffect(()=>Bl(Zs(pt,t),o=>{n(o.docs.map(u=>({...u.data(),id:u.id}))),i(!1)}),[t]),[e,r]}function vA(){const[t,e]=re.useState("dashboard"),[n,r]=mo("players"),[i,s]=mo("matches"),[o,u]=mo("posts"),[c,d]=re.useState("");re.useEffect(()=>{const E=Bt(pt,"club","config");return Bl(E,A=>{d(A.exists()?A.data().dtName??"":"")})},[]);const m=E=>{zl(Bt(pt,"club","config"),{dtName:E.trim()},{merge:!0})},p=E=>{const{id:w,...A}=E;Ma(Zs(pt,"players"),A)},v=(E,w)=>{Sc(Bt(pt,"players",E),w)},C=E=>{bc(Bt(pt,"players",E))},R=E=>{const{id:w,...A}=E;Ma(Zs(pt,"matches"),A)},k=E=>{bc(Bt(pt,"matches",E))},D=(E,w,A)=>{if(Sc(Bt(pt,"matches",E),w),w.status==="played"&&w.result&&!(A!=null&&A.result)){const Ce=YC(w);Ma(Zs(pt,"posts"),{...Ce,createdAt:Uo()})}},b=E=>{Ma(Zs(pt,"posts"),{title:E.title,content:E.content,type:E.type,date:E.date,createdAt:Uo()})},g=(E,w)=>{Sc(Bt(pt,"posts",E),w)},S=E=>{bc(Bt(pt,"posts",E))},V=r&&s&&u;mE({immediate:!0});const[j,F]=re.useState(null),{notifStatus:y,subscribe:_}=JC(F),T={dashboard:l.jsx(aA,{players:n,matches:i,posts:o}),players:l.jsx(lA,{players:n,addPlayer:p,updatePlayer:v,deletePlayer:C,matches:i}),matches:l.jsx(hA,{matches:i,addMatch:R,updateMatch:D,deleteMatch:k,players:n}),convocatoria:l.jsx(pA,{players:n,matches:i,dtName:c,onSaveDt:m}),stats:l.jsx(fA,{players:n,matches:i}),feed:l.jsx(mA,{posts:o,addPost:b,updatePost:g,deletePost:S})};return l.jsxs(l.Fragment,{children:[l.jsx("style",{children:XC}),l.jsxs("div",{className:"app-shell",children:[l.jsxs("nav",{className:"sidebar",children:[l.jsx("div",{className:"sidebar-logo",onClick:()=>e("dashboard"),children:l.jsx(or,{size:40})}),gA.map(E=>l.jsxs("div",{className:`nav-item ${t===E.key?"active":""}`,onClick:()=>e(E.key),title:E.label,children:[l.jsx(ye,{name:E.icon}),l.jsx("span",{className:"nav-label",children:E.label})]},E.key)),l.jsx("div",{className:"sidebar-bottom",children:l.jsx(ZC,{status:y,onSubscribe:_})})]}),l.jsx("main",{className:"main",children:V?l.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"60vh",color:"#4a7a5a",fontSize:14},children:"Cargando..."}):T[t]})]}),l.jsx(yA,{}),j&&l.jsx(y_,{msg:j,onClose:()=>F(null)})]})}ev(document.getElementById("root")).render(l.jsx(re.StrictMode,{children:l.jsx(vA,{})}));
