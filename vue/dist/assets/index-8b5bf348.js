import{P as b,a as _,a8 as Y,a2 as F,h as d,aE as se,d as oe,ab as ce,r as U,a9 as K,c as B,az as ve,j as pe,u as ye,x as ne,ad as be,a0 as ge,b5 as me,bi as xe,i as he,b as we,s as Be,ae as X,bk as Ae}from"./index-66a3e480.js";var ue=function(){return{id:String,prefixCls:String,inputPrefixCls:String,defaultValue:b.oneOfType([b.string,b.number]),value:{type:[String,Number,Symbol],default:void 0},placeholder:{type:[String,Number]},autocomplete:String,type:{type:String,default:"text"},name:String,size:{type:String},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},addonBefore:b.any,addonAfter:b.any,prefix:b.any,suffix:b.any,autofocus:{type:Boolean,default:void 0},allowClear:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!0},maxlength:Number,loading:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},showCount:{type:[Boolean,Object]},htmlSize:Number,onPressEnter:Function,onKeydown:Function,onKeyup:Function,onFocus:Function,onBlur:Function,onChange:Function,onInput:Function,"onUpdate:value":Function,valueModifiers:Object,hidden:Boolean}};const Ce=ue;var Fe=function(){return _(_({},Y(ue(),["prefix","addonBefore","addonAfter","suffix"])),{},{rows:Number,autosize:{type:[Boolean,Object],default:void 0},autoSize:{type:[Boolean,Object],default:void 0},onResize:{type:Function},onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object})};function le(t,e,v,r,o){var p;return F(t,(p={},d(p,"".concat(t,"-sm"),v==="small"),d(p,"".concat(t,"-lg"),v==="large"),d(p,"".concat(t,"-disabled"),r),d(p,"".concat(t,"-rtl"),o==="rtl"),d(p,"".concat(t,"-borderless"),!e),p))}var G=function(e){return e!=null&&(Array.isArray(e)?se(e).length:!0)};function _e(t){return G(t.prefix)||G(t.suffix)||G(t.allowClear)}function ee(t){return G(t.addonBefore)||G(t.addonAfter)}var Se=["text","input"];const $e=oe({compatConfig:{MODE:3},name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:b.oneOf(ce("text","input")),value:b.any,defaultValue:b.any,allowClear:{type:Boolean,default:void 0},element:b.any,handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:b.any,prefix:b.any,addonBefore:b.any,addonAfter:b.any,readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean},setup:function(e,v){var r=v.slots,o=v.attrs,p=U(),z=function(n){var f;if((f=p.value)!==null&&f!==void 0&&f.contains(n.target)){var i=e.triggerFocus;i==null||i()}},y=function(n){var f,i=e.allowClear,u=e.value,l=e.disabled,h=e.readonly,g=e.handleReset,A=e.suffix,m=A===void 0?r.suffix:A;if(!i)return null;var C=!l&&!h&&u,x="".concat(n,"-clear-icon");return B(ve,{onClick:g,onMousedown:function($){return $.preventDefault()},class:F((f={},d(f,"".concat(x,"-hidden"),!C),d(f,"".concat(x,"-has-suffix"),!!m),f),x),role:"button"},null)},Z=function(n){var f,i=e.suffix,u=i===void 0?(f=r.suffix)===null||f===void 0?void 0:f.call(r):i,l=e.allowClear;return u||l?B("span",{class:"".concat(n,"-suffix")},[y(n),u]):null},q=function(n,f){var i,u,l,h=e.focused,g=e.value,A=e.prefix,m=A===void 0?(i=r.prefix)===null||i===void 0?void 0:i.call(r):A,C=e.size,x=e.suffix,N=x===void 0?(u=r.suffix)===null||u===void 0?void 0:u.call(r):x,$=e.disabled,P=e.allowClear,R=e.direction,O=e.readonly,M=e.bordered,W=e.hidden,V=e.addonAfter,L=V===void 0?r.addonAfter:V,c=e.addonBefore,a=c===void 0?r.addonBefore:c,s=Z(n);if(!_e({prefix:m,suffix:N,allowClear:P}))return K(f,{value:g});var I=m?B("span",{class:"".concat(n,"-prefix")},[m]):null,w=F("".concat(n,"-affix-wrapper"),(l={},d(l,"".concat(n,"-affix-wrapper-focused"),h),d(l,"".concat(n,"-affix-wrapper-disabled"),$),d(l,"".concat(n,"-affix-wrapper-sm"),C==="small"),d(l,"".concat(n,"-affix-wrapper-lg"),C==="large"),d(l,"".concat(n,"-affix-wrapper-input-with-clear-btn"),N&&P&&g),d(l,"".concat(n,"-affix-wrapper-rtl"),R==="rtl"),d(l,"".concat(n,"-affix-wrapper-readonly"),O),d(l,"".concat(n,"-affix-wrapper-borderless"),!M),d(l,"".concat(o.class),!ee({addonAfter:L,addonBefore:a})&&o.class),l));return B("span",{ref:p,class:w,style:o.style,onMouseup:z,hidden:W},[I,K(f,{style:null,value:g,class:le(n,M,C,$)}),s])},E=function(n,f){var i,u,l,h=e.addonBefore,g=h===void 0?(i=r.addonBefore)===null||i===void 0?void 0:i.call(r):h,A=e.addonAfter,m=A===void 0?(u=r.addonAfter)===null||u===void 0?void 0:u.call(r):A,C=e.size,x=e.direction,N=e.hidden,$=e.disabled;if(!ee({addonBefore:g,addonAfter:m}))return f;var P="".concat(n,"-group"),R="".concat(P,"-addon"),O=F(R,d({},"".concat(R,"-disabled"),$)),M=g?B("span",{class:O},[g]):null,W=m?B("span",{class:O},[m]):null,V=F("".concat(n,"-wrapper"),P,d({},"".concat(P,"-rtl"),x==="rtl")),L=F("".concat(n,"-group-wrapper"),(l={},d(l,"".concat(n,"-group-wrapper-sm"),C==="small"),d(l,"".concat(n,"-group-wrapper-lg"),C==="large"),d(l,"".concat(n,"-group-wrapper-rtl"),x==="rtl"),l),o.class);return B("span",{class:L,style:o.style,hidden:N},[B("span",{class:V},[M,K(f,{style:null}),W])])},T=function(n,f){var i,u=e.value,l=e.allowClear,h=e.direction,g=e.bordered,A=e.hidden,m=e.addonAfter,C=m===void 0?r.addonAfter:m,x=e.addonBefore,N=x===void 0?r.addonBefore:x;if(!l)return K(f,{value:u});var $=F("".concat(n,"-affix-wrapper"),"".concat(n,"-affix-wrapper-textarea-with-clear-btn"),(i={},d(i,"".concat(n,"-affix-wrapper-rtl"),h==="rtl"),d(i,"".concat(n,"-affix-wrapper-borderless"),!g),d(i,"".concat(o.class),!ee({addonAfter:C,addonBefore:N})&&o.class),i));return B("span",{class:$,style:o.style,hidden:A},[K(f,{style:null,value:u}),y(n)])};return function(){var S,n=e.prefixCls,f=e.inputType,i=e.element,u=i===void 0?(S=r.element)===null||S===void 0?void 0:S.call(r):i;return f===Se[0]?T(n,u):E(n,q(n,u))}}});function te(t){return typeof t>"u"||t===null?"":String(t)}function re(t,e,v,r){if(v){var o=e;if(e.type==="click"){Object.defineProperty(o,"target",{writable:!0}),Object.defineProperty(o,"currentTarget",{writable:!0});var p=t.cloneNode(!0);o.target=p,o.currentTarget=p,p.value="",v(o);return}if(r!==void 0){Object.defineProperty(o,"target",{writable:!0}),Object.defineProperty(o,"currentTarget",{writable:!0}),o.target=t,o.currentTarget=t,t.value=r,v(o);return}v(o)}}function Ie(t,e){if(t){t.focus(e);var v=e||{},r=v.cursor;if(r){var o=t.value.length;switch(r){case"start":t.setSelectionRange(0,0);break;case"end":t.setSelectionRange(o,o);break;default:t.setSelectionRange(0,o)}}}}const Pe=oe({compatConfig:{MODE:3},name:"AInput",inheritAttrs:!1,props:Ce(),setup:function(e,v){var r=v.slots,o=v.attrs,p=v.expose,z=v.emit,y=U(),Z=U(),q,E=pe(),T=ye("input",e),S=T.direction,n=T.prefixCls,f=T.size,i=T.autocomplete,u=U(e.value===void 0?e.defaultValue:e.value),l=U(!1);ne(function(){return e.value},function(){u.value=e.value}),ne(function(){return e.disabled},function(){e.value!==void 0&&(u.value=e.value),e.disabled&&(l.value=!1)});var h=function(){q=setTimeout(function(){var a;((a=y.value)===null||a===void 0?void 0:a.getAttribute("type"))==="password"&&y.value.hasAttribute("value")&&y.value.removeAttribute("value")})},g=function(a){Ie(y.value,a)},A=function(){var a;(a=y.value)===null||a===void 0||a.blur()},m=function(a,s,I){var w;(w=y.value)===null||w===void 0||w.setSelectionRange(a,s,I)},C=function(){var a;(a=y.value)===null||a===void 0||a.select()};p({focus:g,blur:A,input:y,stateValue:u,setSelectionRange:m,select:C});var x=function(a){var s=e.onFocus;l.value=!0,s==null||s(a),X(function(){h()})},N=function(a){var s=e.onBlur;l.value=!1,s==null||s(a),E.onFieldBlur(),X(function(){h()})},$=function(a){z("update:value",a.target.value),z("change",a),z("input",a),E.onFieldChange()},P=Ae(),R=function(a,s){u.value!==a&&(e.value===void 0?u.value=a:X(function(){y.value.value!==u.value&&P.update()}),X(function(){s&&s()}))},O=function(a){re(y.value,a,$),R("",function(){g()})},M=function(a){var s=a.target,I=s.value,w=s.composing;if(!((a.isComposing||w)&&e.lazy||u.value===I)){var j=a.target.value;re(y.value,a,$),R(j,function(){h()})}},W=function(a){a.keyCode===13&&z("pressEnter",a),z("keydown",a)};be(function(){h()}),ge(function(){clearTimeout(q)});var V=function(){var a,s=e.addonBefore,I=s===void 0?r.addonBefore:s,w=e.addonAfter,j=w===void 0?r.addonAfter:w,k=e.disabled,H=e.bordered,J=H===void 0?!0:H,D=e.valueModifiers,ie=D===void 0?{}:D,de=e.htmlSize,ae=Y(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers"]),Q=_(_(_({},ae),o),{},{autocomplete:i.value,onChange:M,onInput:M,onFocus:x,onBlur:N,onKeydown:W,class:F(le(n.value,J,f.value,k,S.value),d({},o.class,o.class&&!I&&!j)),ref:y,key:"ant-input",size:de,id:(a=ae.id)!==null&&a!==void 0?a:E.id.value});ie.lazy&&delete Q.onInput,Q.autofocus||delete Q.autofocus;var fe=B("input",Y(Q,["size"]),null);return me(fe,[[xe]])},L=function(){var a,s=u.value,I=e.maxlength,w=e.suffix,j=w===void 0?(a=r.suffix)===null||a===void 0?void 0:a.call(r):w,k=e.showCount,H=Number(I)>0;if(j||k){var J=he(te(s)).length,D=null;return we(k)==="object"?D=k.formatter({count:J,maxlength:I}):D="".concat(J).concat(H?" / ".concat(I):""),B(Be,null,[!!k&&B("span",{class:F("".concat(n.value,"-show-count-suffix"),d({},"".concat(n.value,"-show-count-has-suffix"),!!j))},[D]),j])}return null};return function(){var c=_(_(_({},o),e),{},{prefixCls:n.value,inputType:"input",value:te(u.value),handleReset:O,focused:l.value&&!e.disabled});return B($e,_(_({},Y(c,["element","valueModifiers","suffix","showCount"])),{},{ref:Z}),_(_({},r),{},{element:V,suffix:L}))}}});export{$e as C,Pe as I,Ie as a,te as f,Ce as i,re as r,Fe as t};