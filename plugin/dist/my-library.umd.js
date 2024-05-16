(function($,w){typeof exports=="object"&&typeof module<"u"?module.exports=w():typeof define=="function"&&define.amd?define(w):($=typeof globalThis<"u"?globalThis:$||self,$.myLibrary=w())})(this,function(){"use strict";var dn=Object.defineProperty;var hn=($,w,W)=>w in $?dn($,w,{enumerable:!0,configurable:!0,writable:!0,value:W}):$[w]=W;var H=($,w,W)=>(hn($,typeof w!="symbol"?w+"":w,W),W);function $(){}function w(t,e){for(const o in e)t[o]=e[o];return t}function W(t){return t()}function je(){return Object.create(null)}function K(t){t.forEach(W)}function Me(t){return typeof t=="function"}function x(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function Te(t,...e){if(t==null){for(const n of e)n(void 0);return $}const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function nt(t){let e;return Te(t,o=>e=o)(),e}function oe(t,e,o){t.$$.on_destroy.push(Te(e,o))}function ue(t,e,o,n){if(t){const s=xe(t,e,o,n);return t[0](s)}}function xe(t,e,o,n){return t[1]&&n?w(o.ctx.slice(),t[1](n(e))):o.ctx}function ce(t,e,o,n){if(t[2]&&n){const s=t[2](n(o));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)i[l]=e.dirty[l]|s[l];return i}return e.dirty|s}return e.dirty}function fe(t,e,o,n,s,i){if(s){const r=xe(e,o,n,i);t.p(r,s)}}function ae(t){if(t.ctx.length>32){const e=[],o=t.ctx.length/32;for(let n=0;n<o;n++)e[n]=-1;return e}return-1}function q(t){const e={};for(const o in t)o[0]!=="$"&&(e[o]=t[o]);return e}function Oe(t,e){const o={};e=new Set(e);for(const n in t)!e.has(n)&&n[0]!=="$"&&(o[n]=t[n]);return o}function _e(t,e,o){return t.set(o),e}function y(t,e){t.appendChild(e)}function ot(t,e,o){const n=st(t);if(!n.getElementById(e)){const s=v("style");s.id=e,s.textContent=o,it(n,s)}}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function it(t,e){return y(t.head||t,e),e.sheet}function C(t,e,o){t.insertBefore(e,o||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function Ae(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}function v(t){return document.createElement(t)}function He(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function de(t){return document.createTextNode(t)}function O(){return de(" ")}function se(){return de("")}function z(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function g(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function he(t,e){for(const o in e)g(t,o,e[o])}function rt(t){return Array.from(t.childNodes)}function Pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function Le(t,e){t.value=e??""}function lt(t){const e={};return t.childNodes.forEach(o=>{e[o.slot||"default"]=!0}),e}let ie;function re(t){ie=t}function ut(){if(!ie)throw new Error("Function called outside component initialization");return ie}function ct(t){ut().$$.on_mount.push(t)}function ft(t,e){const o=t.$$.callbacks[e.type];o&&o.slice().forEach(n=>n.call(this,e))}const Y=[],F=[];let Z=[];const be=[],Be=Promise.resolve();let $e=!1;function Ie(){$e||($e=!0,Be.then(we))}function ze(){return Ie(),Be}function ve(t){Z.push(t)}function ye(t){be.push(t)}const ke=new Set;let G=0;function we(){if(G!==0)return;const t=ie;do{try{for(;G<Y.length;){const e=Y[G];G++,re(e),at(e.$$)}}catch(e){throw Y.length=0,G=0,e}for(re(null),Y.length=0,G=0;F.length;)F.pop()();for(let e=0;e<Z.length;e+=1){const o=Z[e];ke.has(o)||(ke.add(o),o())}Z.length=0}while(Y.length);for(;be.length;)be.pop()();$e=!1,ke.clear(),re(t)}function at(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ve)}}function dt(t){const e=[],o=[];Z.forEach(n=>t.indexOf(n)===-1?e.push(n):o.push(n)),o.forEach(n=>n()),Z=e}const pe=new Set;let U;function Q(){U={r:0,c:[],p:U}}function X(){U.r||K(U.c),U=U.p}function m(t,e){t&&t.i&&(pe.delete(t),t.i(e))}function k(t,e,o,n){if(t&&t.o){if(pe.has(t))return;pe.add(t),U.c.push(()=>{pe.delete(t),n&&(o&&t.d(1),n())}),t.o(e)}else n&&n()}function ge(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function le(t,e){const o={},n={},s={$$scope:1};let i=t.length;for(;i--;){const r=t[i],l=e[i];if(l){for(const u in r)u in l||(n[u]=1);for(const u in l)s[u]||(o[u]=l[u],s[u]=1);t[i]=l}else for(const u in r)s[u]=1}for(const r in n)r in o||(o[r]=void 0);return o}function Ne(t){return typeof t=="object"&&t!==null?t:{}}function Ce(t,e,o){const n=t.$$.props[e];n!==void 0&&(t.$$.bound[n]=o,o(t.$$.ctx[n]))}function A(t){t&&t.c()}function M(t,e,o){const{fragment:n,after_update:s}=t.$$;n&&n.m(e,o),ve(()=>{const i=t.$$.on_mount.map(W).filter(Me);t.$$.on_destroy?t.$$.on_destroy.push(...i):K(i),t.$$.on_mount=[]}),s.forEach(ve)}function T(t,e){const o=t.$$;o.fragment!==null&&(dt(o.after_update),K(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(Y.push(t),Ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,o,n,s,i,r=null,l=[-1]){const u=ie;re(t);const c=t.$$={fragment:null,ctx:[],props:i,update:$,not_equal:s,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:je(),dirty:l,skip_bound:!1,root:e.target||u.$$.root};r&&r(c.root);let d=!1;if(c.ctx=o?o(t,e.props||{},(a,f,...p)=>{const h=p.length?p[0]:f;return c.ctx&&s(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),d&&ht(t,a)),f}):[],c.update(),d=!0,K(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const a=rt(e.target);c.fragment&&c.fragment.l(a),a.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&m(t.$$.fragment),M(t,e.target,e.anchor),we()}re(u)}let We;typeof HTMLElement=="function"&&(We=class extends HTMLElement{constructor(e,o,n){super();H(this,"$$ctor");H(this,"$$s");H(this,"$$c");H(this,"$$cn",!1);H(this,"$$d",{});H(this,"$$r",!1);H(this,"$$p_d",{});H(this,"$$l",{});H(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=o,n&&this.attachShadow({mode:"open"})}addEventListener(e,o,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(o),this.$$c){const s=this.$$c.$on(e,o);this.$$l_u.set(o,s)}super.addEventListener(e,o,n)}removeEventListener(e,o,n){if(super.removeEventListener(e,o,n),this.$$c){const s=this.$$l_u.get(o);s&&(s(),this.$$l_u.delete(o))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(i){return()=>{let r;return{c:function(){r=v("slot"),i!=="default"&&g(r,"name",i)},m:function(c,d){C(c,r,d)},d:function(c){c&&N(r)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const o={},n=lt(this);for(const i of this.$$s)i in n&&(o[i]=[e(i)]);for(const i of this.attributes){const r=this.$$g_p(i.name);r in this.$$d||(this.$$d[r]=me(r,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:o,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const i in this.$$p_d)if(this.$$d[i]=this.$$c.$$.ctx[this.$$c.$$.props[i]],this.$$p_d[i].reflect){const r=me(i,this.$$d[i],this.$$p_d,"toAttribute");r==null?this.removeAttribute(this.$$p_d[i].attribute||i):this.setAttribute(this.$$p_d[i].attribute||i,r)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const i in this.$$l)for(const r of this.$$l[i]){const l=this.$$c.$on(i,r);this.$$l_u.set(r,l)}this.$$l={}}}attributeChangedCallback(e,o,n){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=me(e,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(o=>this.$$p_d[o].attribute===e||!this.$$p_d[o].attribute&&o.toLowerCase()===e)||e}});function me(t,e,o,n){var i;const s=(i=o[t])==null?void 0:i.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!o[t])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function pt(t,e,o,n,s,i){let r=class extends We{constructor(){super(t,o,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(l=>(e[l].attribute||l).toLowerCase())}};return Object.keys(e).forEach(l=>{Object.defineProperty(r.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(u){var c;u=me(l,u,e),this.$$d[l]=u,(c=this.$$c)==null||c.$set({[l]:u})}})}),n.forEach(l=>{Object.defineProperty(r.prototype,l,{get(){var u;return(u=this.$$c)==null?void 0:u[l]}})}),i&&(r=i(r)),t.element=r,r}class I{constructor(){H(this,"$$");H(this,"$$set")}$destroy(){T(this,1),this.$destroy=$}$on(e,o){if(!Me(o))return $;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(o),()=>{const s=n.indexOf(o);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);const pn="";/**
 * @license lucide-svelte v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function qe(t,e,o){const n=t.slice();return n[11]=e[o][0],n[12]=e[o][1],n}function Ee(t){let e,o=[t[12]],n={};for(let s=0;s<o.length;s+=1)n=w(n,o[s]);return{c(){e=He(t[11]),he(e,n)},m(s,i){C(s,e,i)},p(s,i){he(e,n=le(o,[i&32&&s[12]]))},d(s){s&&N(e)}}}function De(t){let e=t[11],o,n=t[11]&&Ee(t);return{c(){n&&n.c(),o=se()},m(s,i){n&&n.m(s,i),C(s,o,i)},p(s,i){s[11]?e?x(e,s[11])?(n.d(1),n=Ee(s),e=s[11],n.c(),n.m(o.parentNode,o)):n.p(s,i):(n=Ee(s),e=s[11],n.c(),n.m(o.parentNode,o)):e&&(n.d(1),n=null,e=s[11])},d(s){s&&N(o),n&&n.d(s)}}}function mt(t){let e,o,n,s,i,r=ge(t[5]),l=[];for(let f=0;f<r.length;f+=1)l[f]=De(qe(t,r,f));const u=t[10].default,c=ue(u,t,t[9],null);let d=[Ke,t[7],{width:t[2]},{height:t[2]},{stroke:t[1]},{"stroke-width":n=t[4]?Number(t[3])*24/Number(t[2]):t[3]},{class:s=t[6]("lucide-icon","lucide",t[0]?`lucide-${t[0]}`:"",t[8].class)}],a={};for(let f=0;f<d.length;f+=1)a=w(a,d[f]);return{c(){e=He("svg");for(let f=0;f<l.length;f+=1)l[f].c();o=se(),c&&c.c(),he(e,a)},m(f,p){C(f,e,p);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(e,null);y(e,o),c&&c.m(e,null),i=!0},p(f,[p]){if(p&32){r=ge(f[5]);let h;for(h=0;h<r.length;h+=1){const L=qe(f,r,h);l[h]?l[h].p(L,p):(l[h]=De(L),l[h].c(),l[h].m(e,o))}for(;h<l.length;h+=1)l[h].d(1);l.length=r.length}c&&c.p&&(!i||p&512)&&fe(c,u,f,f[9],i?ce(u,f[9],p,null):ae(f[9]),null),he(e,a=le(d,[Ke,p&128&&f[7],(!i||p&4)&&{width:f[2]},(!i||p&4)&&{height:f[2]},(!i||p&2)&&{stroke:f[1]},(!i||p&28&&n!==(n=f[4]?Number(f[3])*24/Number(f[2]):f[3]))&&{"stroke-width":n},(!i||p&257&&s!==(s=f[6]("lucide-icon","lucide",f[0]?`lucide-${f[0]}`:"",f[8].class)))&&{class:s}]))},i(f){i||(m(c,f),i=!0)},o(f){k(c,f),i=!1},d(f){f&&N(e),Ae(l,f),c&&c.d(f)}}}function _t(t,e,o){const n=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","mergeClasses"];let s=Oe(e,n),{$$slots:i={},$$scope:r}=e,{name:l=void 0}=e,{color:u="currentColor"}=e,{size:c=24}=e,{strokeWidth:d=2}=e,{absoluteStrokeWidth:a=!1}=e,{iconNode:f}=e;const p=(...h)=>h.filter((L,ne,_)=>!!L&&_.indexOf(L)===ne).join(" ");return t.$$set=h=>{o(8,e=w(w({},e),q(h))),o(7,s=Oe(e,n)),"name"in h&&o(0,l=h.name),"color"in h&&o(1,u=h.color),"size"in h&&o(2,c=h.size),"strokeWidth"in h&&o(3,d=h.strokeWidth),"absoluteStrokeWidth"in h&&o(4,a=h.absoluteStrokeWidth),"iconNode"in h&&o(5,f=h.iconNode),"$$scope"in h&&o(9,r=h.$$scope)},e=q(e),[l,u,c,d,a,f,p,s,e,r,i]}class bt extends I{constructor(e){super(),B(this,e,_t,mt,x,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5,mergeClasses:6})}get mergeClasses(){return this.$$.ctx[6]}}const Se=bt;function $t(t){let e;const o=t[2].default,n=ue(o,t,t[3],null);return{c(){n&&n.c()},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&8)&&fe(n,o,s,s[3],e?ce(o,s[3],i,null):ae(s[3]),null)},i(s){e||(m(n,s),e=!0)},o(s){k(n,s),e=!1},d(s){n&&n.d(s)}}}function vt(t){let e,o;const n=[{name:"bot-message-square"},t[1],{iconNode:t[0]}];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let i=0;i<n.length;i+=1)s=w(s,n[i]);return e=new Se({props:s}),{c(){A(e.$$.fragment)},m(i,r){M(e,i,r),o=!0},p(i,[r]){const l=r&3?le(n,[n[0],r&2&&Ne(i[1]),r&1&&{iconNode:i[0]}]):{};r&8&&(l.$$scope={dirty:r,ctx:i}),e.$set(l)},i(i){o||(m(e.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),o=!1},d(i){T(e,i)}}}function yt(t,e,o){let{$$slots:n={},$$scope:s}=e;const i=[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]];return t.$$set=r=>{o(1,e=w(w({},e),q(r))),"$$scope"in r&&o(3,s=r.$$scope)},e=q(e),[i,e,n,s]}class kt extends I{constructor(e){super(),B(this,e,yt,vt,x,{})}}const wt=kt;function Nt(t){let e;const o=t[2].default,n=ue(o,t,t[3],null);return{c(){n&&n.c()},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&8)&&fe(n,o,s,s[3],e?ce(o,s[3],i,null):ae(s[3]),null)},i(s){e||(m(n,s),e=!0)},o(s){k(n,s),e=!1},d(s){n&&n.d(s)}}}function Ct(t){let e,o;const n=[{name:"bot"},t[1],{iconNode:t[0]}];let s={$$slots:{default:[Nt]},$$scope:{ctx:t}};for(let i=0;i<n.length;i+=1)s=w(s,n[i]);return e=new Se({props:s}),{c(){A(e.$$.fragment)},m(i,r){M(e,i,r),o=!0},p(i,[r]){const l=r&3?le(n,[n[0],r&2&&Ne(i[1]),r&1&&{iconNode:i[0]}]):{};r&8&&(l.$$scope={dirty:r,ctx:i}),e.$set(l)},i(i){o||(m(e.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),o=!1},d(i){T(e,i)}}}function Et(t,e,o){let{$$slots:n={},$$scope:s}=e;const i=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];return t.$$set=r=>{o(1,e=w(w({},e),q(r))),"$$scope"in r&&o(3,s=r.$$scope)},e=q(e),[i,e,n,s]}class St extends I{constructor(e){super(),B(this,e,Et,Ct,x,{})}}const jt=St;function Mt(t){let e;const o=t[2].default,n=ue(o,t,t[3],null);return{c(){n&&n.c()},m(s,i){n&&n.m(s,i),e=!0},p(s,i){n&&n.p&&(!e||i&8)&&fe(n,o,s,s[3],e?ce(o,s[3],i,null):ae(s[3]),null)},i(s){e||(m(n,s),e=!0)},o(s){k(n,s),e=!1},d(s){n&&n.d(s)}}}function Tt(t){let e,o;const n=[{name:"user"},t[1],{iconNode:t[0]}];let s={$$slots:{default:[Mt]},$$scope:{ctx:t}};for(let i=0;i<n.length;i+=1)s=w(s,n[i]);return e=new Se({props:s}),{c(){A(e.$$.fragment)},m(i,r){M(e,i,r),o=!0},p(i,[r]){const l=r&3?le(n,[n[0],r&2&&Ne(i[1]),r&1&&{iconNode:i[0]}]):{};r&8&&(l.$$scope={dirty:r,ctx:i}),e.$set(l)},i(i){o||(m(e.$$.fragment,i),o=!0)},o(i){k(e.$$.fragment,i),o=!1},d(i){T(e,i)}}}function xt(t,e,o){let{$$slots:n={},$$scope:s}=e;const i=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];return t.$$set=r=>{o(1,e=w(w({},e),q(r))),"$$scope"in r&&o(3,s=r.$$scope)},e=q(e),[i,e,n,s]}class Ot extends I{constructor(e){super(),B(this,e,xt,Tt,x,{})}}const At=Ot;function Re(t){let e,o,n,s,i,r,l;return o=new wt({}),{c(){e=v("button"),A(o.$$.fragment),n=O(),s=v("span"),s.textContent="Open chat",g(s,"class","sr-only"),g(e,"class","inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 w-10 rounded-full bg-gray-900 text-gray-50 shadow-lg hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"),g(e,"type","button"),g(e,"aria-haspopup","dialog"),g(e,"aria-expanded","false"),g(e,"aria-controls","radix-:r1h:"),g(e,"data-state","closed")},m(u,c){C(u,e,c),M(o,e,null),y(e,n),y(e,s),i=!0,r||(l=z(e,"click",t[1]),r=!0)},i(u){i||(m(o.$$.fragment,u),i=!0)},o(u){k(o.$$.fragment,u),i=!1},d(u){u&&N(e),T(o),r=!1,l()}}}function Ht(t){let e,o,n=!t[0]&&Re(t);return{c(){n&&n.c(),e=se()},m(s,i){n&&n.m(s,i),C(s,e,i),o=!0},p(s,[i]){s[0]?n&&(Q(),k(n,1,1,()=>{n=null}),X()):n?i&1&&m(n,1):(n=Re(s),n.c(),m(n,1),n.m(e.parentNode,e))},i(s){o||(m(n),o=!0)},o(s){k(n),o=!1},d(s){s&&N(e),n&&n.d(s)}}}function Pt(t,e,o){let{open:n}=e;function s(i){ft.call(this,t,i)}return t.$$set=i=>{"open"in i&&o(0,n=i.open)},[n,s]}class Lt extends I{constructor(e){super(),B(this,e,Pt,Ht,x,{open:0})}}function Bt(t){let e,o;return e=new At({}),{c(){A(e.$$.fragment)},m(n,s){M(e,n,s),o=!0},i(n){o||(m(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){T(e,n)}}}function It(t){let e,o;return e=new jt({}),{c(){A(e.$$.fragment)},m(n,s){M(e,n,s),o=!0},i(n){o||(m(e.$$.fragment,n),o=!0)},o(n){k(e.$$.fragment,n),o=!1},d(n){T(e,n)}}}function zt(t){let e,o,n,s,i;const r=[It,Bt],l=[];function u(c,d){return c[0]=="agent"?0:1}return n=u(t),s=l[n]=r[n](t),{c(){e=v("span"),o=v("span"),s.c(),g(o,"class","flex h-full w-full items-center justify-center rounded-full bg-muted"),g(e,"class","relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full")},m(c,d){C(c,e,d),y(e,o),l[n].m(o,null),i=!0},p(c,[d]){let a=n;n=u(c),n!==a&&(Q(),k(l[a],1,1,()=>{l[a]=null}),X(),s=l[n],s||(s=l[n]=r[n](c),s.c()),m(s,1),s.m(o,null))},i(c){i||(m(s),i=!0)},o(c){k(s),i=!1},d(c){c&&N(e),l[n].d()}}}function Wt(t,e,o){let{author:n}=e;return t.$$set=s=>{"author"in s&&o(0,n=s.author)},[n]}class Je extends I{constructor(e){super(),B(this,e,Wt,zt,x,{author:0})}}const ee=[];function Ue(t,e=$){let o;const n=new Set;function s(l){if(x(t,l)&&(t=l,o)){const u=!ee.length;for(const c of n)c[1](),ee.push(c,t);if(u){for(let c=0;c<ee.length;c+=2)ee[c][0](ee[c+1]);ee.length=0}}}function i(l){s(l(t))}function r(l,u=$){const c=[l,u];return n.add(c),n.size===1&&(o=e(s,i)||$),l(t),()=>{n.delete(c),n.size===0&&o&&(o(),o=null)}}return{set:s,update:i,subscribe:r}}const Ve={contents:"Hello, how can I assist you today?",author:"agent",updating:!1};let D=JSON.parse(window.localStorage.getItem("ChatPluginMessageHistory")||"null");(D===null||D.length===0)&&(D=[Ve]),D[D.length-1].updating&&(D.pop(),D.pop());let P=Ue(D);P.subscribe(t=>{localStorage.setItem("ChatPluginMessageHistory",JSON.stringify(t))});let te=Ue("TextInput");function Kt(t){let e,o,n,s,i;return{c(){e=v("button"),e.textContent="End",o=O(),n=v("button"),n.textContent="Continue",g(e,"class","inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border h-10 px-4 py-2 bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-gray-50 w-1/2"),g(n,"class","inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-white text-gray-900 hover:bg-gray-200 w-1/2")},m(r,l){C(r,e,l),C(r,o,l),C(r,n,l),s||(i=[z(e,"click",t[0]),z(n,"click",t[1])],s=!0)},p:$,i:$,o:$,d(r){r&&(N(e),N(o),N(n)),s=!1,K(i)}}}function qt(t,e,o){let n,s;oe(t,P,u=>o(3,n=u)),oe(t,te,u=>o(4,s=u));let{open:i}=e;const r=()=>{_e(P,n=[Ve],n),_e(te,s="TextInput",s),o(2,i=!1)},l=()=>{n.push({contents:"<END>",author:"agent",updating:!1,hidden:!0}),n.push({contents:"SYSTEM: The user indicated they wanted to continue the conversation. Await their next message.",author:"user",updating:!1,hidden:!0}),_e(te,s="TextInput",s),P.set(n)};return t.$$set=u=>{"open"in u&&o(2,i=u.open)},[r,l,i]}class Dt extends I{constructor(e){super(),B(this,e,qt,Kt,x,{open:2})}}function Rt(t){let e,o,n,s,i;return{c(){e=v("input"),o=O(),n=v("button"),n.textContent="Send",g(e,"class","flex-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"),g(e,"placeholder","Type your message..."),g(n,"class","inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2")},m(r,l){C(r,e,l),Le(e,t[0]),C(r,o,l),C(r,n,l),s||(i=[z(e,"input",t[2]),z(e,"keydown",t[3]),z(n,"click",t[1])],s=!0)},p(r,[l]){l&1&&e.value!==r[0]&&Le(e,r[0])},i:$,o:$,d(r){r&&(N(e),N(o),N(n)),s=!1,K(i)}}}function Jt(t,e,o){let n;oe(t,P,u=>o(4,n=u));let{message:s}=e;const i=()=>{s&&!n[n.length-1].updating&&(n.push({author:"user",contents:s,updating:!1}),P.set(n),o(0,s=""))};function r(){s=this.value,o(0,s)}const l=u=>u.key=="Enter"&&i();return t.$$set=u=>{"message"in u&&o(0,s=u.message)},[s,i,r,l]}class Ut extends I{constructor(e){super(),B(this,e,Jt,Rt,x,{message:0})}}const mn="";function Ye(t,e,o){const n=t.slice();return n[5]=e[o],n}function Fe(t){let e,o,n,s,i,r,l,u,c,d,a,f,p,h,L,ne,_=t[2]&&Ze(t),V=ge(t[3]),E=[];for(let b=0;b<V.length;b+=1)E[b]=Ge(Ye(t,V,b));const an=b=>k(E[b],1,1,()=>{E[b]=null}),Qe=[Xt,Qt],R=[];function Xe(b,S){return b[4]=="TextInput"?0:b[4]=="EndConversationPrompt"?1:-1}return~(f=Xe(t))&&(p=R[f]=Qe[f](t)),{c(){e=v("div"),o=v("div"),_&&_.c(),n=O(),s=v("div"),i=v("div"),i.innerHTML='<div class="text-sm font-medium">Support Agent</div>',r=O(),l=v("button"),l.innerHTML='<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> <span class="sr-only">Close chat</span>',u=O(),c=v("div");for(let b=0;b<E.length;b+=1)E[b].c();d=O(),a=v("div"),p&&p.c(),g(i,"class","flex items-center gap-3"),g(s,"class","bg-gray-900 text-gray-50 px-4 py-3 rounded-t-lg flex items-center justify-between"),g(c,"class","flex-1 overflow-y-auto p-4 space-y-4 relative"),g(a,"class","bg-gray-100 px-4 py-3 rounded-b-lg flex items-center gap-2"),g(o,"class","flex flex-col h-[500px]"),g(e,"class","w-full max-w-md rounded-lg shadow-l bg-white")},m(b,S){C(b,e,S),y(e,o),_&&_.m(o,null),y(o,n),y(o,s),y(s,i),y(s,r),y(s,l),y(o,u),y(o,c);for(let J=0;J<E.length;J+=1)E[J]&&E[J].m(c,null);t[10](c),y(o,d),y(o,a),~f&&R[f].m(a,null),h=!0,L||(ne=[z(l,"click",t[9]),z(c,"scroll",t[6])],L=!0)},p(b,S){if(b[2]?_?_.p(b,S):(_=Ze(b),_.c(),_.m(o,n)):_&&(_.d(1),_=null),S&8){V=ge(b[3]);let j;for(j=0;j<V.length;j+=1){const et=Ye(b,V,j);E[j]?(E[j].p(et,S),m(E[j],1)):(E[j]=Ge(et),E[j].c(),m(E[j],1),E[j].m(c,null))}for(Q(),j=V.length;j<E.length;j+=1)an(j);X()}let J=f;f=Xe(b),f===J?~f&&R[f].p(b,S):(p&&(Q(),k(R[J],1,1,()=>{R[J]=null}),X()),~f?(p=R[f],p?p.p(b,S):(p=R[f]=Qe[f](b),p.c()),m(p,1),p.m(a,null)):p=null)},i(b){if(!h){for(let S=0;S<V.length;S+=1)m(E[S]);m(p),h=!0}},o(b){E=E.filter(Boolean);for(let S=0;S<E.length;S+=1)k(E[S]);k(p),h=!1},d(b){b&&N(e),_&&_.d(),Ae(E,b),t[10](null),~f&&R[f].d(),L=!1,K(ne)}}}function Ze(t){let e,o,n;return{c(){e=v("button"),e.textContent="Down",g(e,"class","bg-opacity-25 bg-black w-4 h-4 rounded-full absolute right-1/2 bottom-14")},m(s,i){C(s,e,i),o||(n=z(e,"click",t[7]),o=!0)},p:$,d(s){s&&N(e),o=!1,n()}}}function Vt(t){let e,o,n,s,i=t[5].contents+"",r,l,u,c,d;return u=new Je({props:{author:t[5].author}}),{c(){e=v("div"),o=v("div"),n=v("div"),s=v("p"),r=de(i),l=O(),A(u.$$.fragment),c=O(),g(n,"class","bg-gray-900 text-gray-50 p-3 rounded-lg max-w-[75%] text-sm"),g(o,"class","flex items-start gap-3 justify-end"),g(e,"class","flex items-start justify-end gap-3")},m(a,f){C(a,e,f),y(e,o),y(o,n),y(n,s),y(s,r),y(o,l),M(u,o,null),y(e,c),d=!0},p(a,f){(!d||f&8)&&i!==(i=a[5].contents+"")&&Pe(r,i);const p={};f&8&&(p.author=a[5].author),u.$set(p)},i(a){d||(m(u.$$.fragment,a),d=!0)},o(a){k(u.$$.fragment,a),d=!1},d(a){a&&N(e),T(u)}}}function Yt(t){let e,o,n,s,i,r,l;n=new Je({props:{author:t[5].author}});function u(a,f){return a[5].updating?Gt:Zt}let c=u(t),d=c(t);return{c(){e=v("div"),o=v("div"),A(n.$$.fragment),s=O(),i=v("div"),d.c(),r=O(),g(i,"class","bg-gray-100 p-3 rounded-lg max-w-[75%] text-sm"),g(o,"class","flex items-start gap-3"),g(e,"class","flex items-start gap-3")},m(a,f){C(a,e,f),y(e,o),M(n,o,null),y(o,s),y(o,i),d.m(i,null),y(e,r),l=!0},p(a,f){const p={};f&8&&(p.author=a[5].author),n.$set(p),c===(c=u(a))&&d?d.p(a,f):(d.d(1),d=c(a),d&&(d.c(),d.m(i,null)))},i(a){l||(m(n.$$.fragment,a),l=!0)},o(a){k(n.$$.fragment,a),l=!1},d(a){a&&N(e),T(n),d.d()}}}function Ft(t){return{c:$,m:$,p:$,i:$,o:$,d:$}}function Zt(t){let e,o=t[5].contents+"",n;return{c(){e=v("p"),n=de(o)},m(s,i){C(s,e,i),y(e,n)},p(s,i){i&8&&o!==(o=s[5].contents+"")&&Pe(n,o)},d(s){s&&N(e)}}}function Gt(t){let e;return{c(){e=v("div"),e.innerHTML='<div class="typing-dot svelte-1vr6k1j"></div> <div class="typing-dot svelte-1vr6k1j"></div> <div class="typing-dot svelte-1vr6k1j"></div>',g(e,"class","flex items-center justify-center gap-1")},m(o,n){C(o,e,n)},p:$,d(o){o&&N(e)}}}function Ge(t){let e,o,n,s;const i=[Ft,Yt,Vt],r=[];function l(u,c){return u[5].hidden?0:u[5].author=="agent"?1:2}return e=l(t),o=r[e]=i[e](t),{c(){o.c(),n=se()},m(u,c){r[e].m(u,c),C(u,n,c),s=!0},p(u,c){let d=e;e=l(u),e===d?r[e].p(u,c):(Q(),k(r[d],1,1,()=>{r[d]=null}),X(),o=r[e],o?o.p(u,c):(o=r[e]=i[e](u),o.c()),m(o,1),o.m(n.parentNode,n))},i(u){s||(m(o),s=!0)},o(u){k(o),s=!1},d(u){u&&N(n),r[e].d(u)}}}function Qt(t){let e,o,n;function s(r){t[12](r)}let i={};return t[0]!==void 0&&(i.open=t[0]),e=new Dt({props:i}),F.push(()=>Ce(e,"open",s)),{c(){A(e.$$.fragment)},m(r,l){M(e,r,l),n=!0},p(r,l){const u={};!o&&l&1&&(o=!0,u.open=r[0],ye(()=>o=!1)),e.$set(u)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){T(e,r)}}}function Xt(t){let e,o,n;function s(r){t[11](r)}let i={};return t[5]!==void 0&&(i.message=t[5]),e=new Ut({props:i}),F.push(()=>Ce(e,"message",s)),{c(){A(e.$$.fragment)},m(r,l){M(e,r,l),n=!0},p(r,l){const u={};!o&&l&32&&(o=!0,u.message=r[5],ye(()=>o=!1)),e.$set(u)},i(r){n||(m(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){T(e,r)}}}function en(t){let e,o,n=t[0]&&Fe(t);return{c(){n&&n.c(),e=se()},m(s,i){n&&n.m(s,i),C(s,e,i),o=!0},p(s,[i]){s[0]?n?(n.p(s,i),i&1&&m(n,1)):(n=Fe(s),n.c(),m(n,1),n.m(e.parentNode,e)):n&&(Q(),k(n,1,1,()=>{n=null}),X())},i(s){o||(m(n),o=!0)},o(s){k(n),o=!1},d(s){s&&N(e),n&&n.d(s)}}}function tn(t,e,o){let n,s;oe(t,P,_=>o(3,n=_)),oe(t,te,_=>o(4,s=_));let{open:i}=e,r="",l,u,c=!1,d=0;const a=()=>{if(l.scrollTop===l.scrollHeight-l.offsetHeight){o(2,c=!1);return}c||d>l.scrollTop&&o(2,c=!0),d=l.scrollTop},f=()=>{i&&l.scroll({top:l.scrollHeight,behavior:"smooth"})},p=()=>o(0,i=!i);function h(_){F[_?"unshift":"push"](()=>{l=_,o(1,l)})}function L(_){r=_,o(5,r)}function ne(_){i=_,o(0,i)}return t.$$set=_=>{"open"in _&&o(0,i=_.open)},t.$$.update=()=>{t.$$.dirty&263&&(i&&!u?(o(8,u=new MutationObserver(_=>{c||f()})),ze().then(()=>{f(),u.observe(l,{childList:!0,subtree:!0,attributes:!1})})):i||o(8,u=void 0))},[i,l,c,n,s,r,a,f,u,p,h,L,ne]}class nn extends I{constructor(e){super(),B(this,e,tn,en,x,{open:0})}}async function on(t){let e="https://59t0kunv1k.execute-api.us-east-1.amazonaws.com/prod";P.subscribe(async o=>{if(o[o.length-1].author==="user"&&nt(te)==="TextInput"){let n=fetch(`${e}/create-chat`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({api_key:t,messages:o.map(i=>({message:i.contents,author:i.author}))})});P.update(i=>(i.push({author:"agent",contents:"",updating:!0}),i));let s=await(await n).json();if(s.response.includes("<END>")){te.set("EndConversationPrompt"),P.update(i=>(i.pop(),i=i,console.log(i),i));return}P.update(i=>(i[i.length-1].updating=!1,i[i.length-1].contents=s.response,i))}})}function sn(){let t=document.body.getElementsByTagName("my-component")[0].shadowRoot,e=document.createElement("link");e.rel="stylesheet",e.href="https://compiled-js-plugins.s3.amazonaws.com/style.css",t.appendChild(e)}function rn(t){ot(t,"svelte-va4hx6",".root.svelte-va4hx6{display:none}")}function ln(t){let e,o,n,s,i,r,l;n=new Lt({props:{open:t[0]}}),n.$on("click",t[2]);function u(d){t[3](d)}let c={};return t[0]!==void 0&&(c.open=t[0]),i=new nn({props:c}),F.push(()=>Ce(i,"open",u)),{c(){e=v("div"),o=v("div"),A(n.$$.fragment),s=O(),A(i.$$.fragment),g(o,"class","fixed bottom-4 right-4 z-50"),g(e,"class","root svelte-va4hx6")},m(d,a){C(d,e,a),y(e,o),M(n,o,null),y(o,s),M(i,o,null),l=!0},p(d,[a]){const f={};a&1&&(f.open=d[0]),n.$set(f);const p={};!r&&a&1&&(r=!0,p.open=d[0],ye(()=>r=!1)),i.$set(p)},i(d){l||(m(n.$$.fragment,d),m(i.$$.fragment,d),l=!0)},o(d){k(n.$$.fragment,d),k(i.$$.fragment,d),l=!1},d(d){d&&N(e),T(n),T(i)}}}function un(t,e,o){let{publicKey:n}=e;ct(async()=>{sn(),await ze(),on(n)});let s=!1;const i=()=>o(0,s=!s);function r(l){s=l,o(0,s)}return t.$$set=l=>{"publicKey"in l&&o(1,n=l.publicKey)},[s,n,i,r]}class cn extends I{constructor(e){super(),B(this,e,un,ln,x,{publicKey:1},rn)}get publicKey(){return this.$$.ctx[1]}set publicKey(e){this.$$set({publicKey:e}),we()}}customElements.define("my-component",pt(cn,{publicKey:{}},[],[],!0));function fn(t){let e=document.createElement("my-component");e.publicKey=t.publicKey,window.onload=function(){document.body.appendChild(e)}}return fn});
