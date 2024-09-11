import{T as Ot,a as d,t as p,c as nt,f as W,s as a,b as s,K as Rt}from"../chunks/disclose-version.vS8Cq8Jh.js";import{C as xt,E as qt,a5 as Nt,a6 as Ht,e as Gt,j as Vt,K as Yt,w as Kt,q as Wt,p as Zt,s as $t,R as Xt,a as Jt,o as ot,u as r,t as g,g as u,x as jt}from"../chunks/runtime.FCCJB71a.js";import{b as Qt,d as te,a as T}from"../chunks/render.Bh2lV6rC.js";import{p as it}from"../chunks/114.BoehNm50.js";import{a as ee}from"../chunks/await.sk7arveg.js";import{i as C}from"../chunks/if.CGrjAiqq.js";import{e as tt,i as et}from"../chunks/each.CwifjmX2.js";import{h as ae}from"../chunks/html.CvCJrg-t.js";import{s as b,h as re}from"../chunks/i18n.Cc0IAjl7.js";import{s as se}from"../chunks/class.CCmDclRQ.js";import{o as ne}from"../chunks/index-client.DCw5r-pO.js";import{S as oe}from"../chunks/SEO.eKUKTzTM.js";import{C as ie}from"../chunks/Countdown.w8gEokE7.js";const Dt=typeof window<"u",le=Dt?requestAnimationFrame:xt,de=Dt?()=>performance.now():()=>Date.now(),Y={tick:l=>le(l),now:()=>de(),tasks:new Set};function Et(l){Y.tasks.forEach(e=>{e.c(l)||(Y.tasks.delete(e),e.f())}),Y.tasks.size!==0&&Y.tick(Et)}function ce(l){let e;return Y.tasks.size===0&&Y.tick(Et),{promise:new Promise(i=>{Y.tasks.add(e={c:l,f:i})}),abort(){Y.tasks.delete(e)}}}function _t(l,e){l.dispatchEvent(new CustomEvent(e))}function ve(l){const e=l.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(i=>i[0].toUpperCase()+i.slice(1)).join("")}function ue(l){const e={},i=l.split(";");for(const m of i){const[_,v]=m.split(":");if(!_||v===void 0)break;const U=ve(_.trim());e[U]=v.trim()}return e}const pe=l=>l;function ft(l,e,i,m){var _=(l&Ot)!==0,v="both",U,D=e.inert,S,c;function f(){return U??(U=i()(e,m==null?void 0:m(),{direction:v}))}var A={is_global:_,in(){e.inert=D,_t(e,"introstart"),S=Mt(e,f(),c,1,()=>{_t(e,"introend"),S=U=void 0})},out(y){e.inert=!0,_t(e,"outrostart"),c=Mt(e,f(),S,0,()=>{_t(e,"outroend"),c=U=void 0,y==null||y()}),c.reset},stop:()=>{S==null||S.abort(),c==null||c.abort()}},E=Yt;if((E.transitions??(E.transitions=[])).push(A),Qt){let y=_;if(!y){for(var $=E.parent;$&&$.f&qt;)for(;($=$.parent)&&!($.f&Nt););y=!$||($.f&Ht)!==0}y&&Gt(()=>{Vt(()=>A.in())})}}function Mt(l,e,i,m,_){if(Kt(e)){var v;return Wt(()=>{var P=e({direction:m===1?"in":"out"});v=Mt(l,P,i,m,_)}),{abort:()=>v.abort(),deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:P=>v.t(P)}}if(i==null||i.deactivate(),!(e!=null&&e.duration))return _==null||_(),{abort:xt,deactivate:xt,reset:xt,t:()=>m};var{delay:U=0,duration:D,css:S,tick:c,easing:f=pe}=e,A=Y.now()+U,E=(i==null?void 0:i.t(A))??1-m,$=m-E;D*=Math.abs($);var y=A+D,B,K;if(S){for(var k=[],at=Math.ceil(D/16.666666666666668),X=0;X<=at;X+=1){var lt=E+$*f(X/at),mt=S(lt,1-lt);k.push(ue(mt))}B=l.animate(k,{delay:U,duration:D,easing:"linear",fill:"forwards"}),B.finished.then(()=>{_==null||_(),m===1&&B.cancel()}).catch(P=>{if(B.startTime!==null&&B.currentTime!==null)throw P})}else E===0&&(c==null||c(0,1)),K=ce(P=>{if(P>=y)return c==null||c(m,1-m),_==null||_(),!1;if(P>=A){var J=E+$*f((P-A)/D);c==null||c(J,1-J)}return!0});return{abort:()=>{B==null||B.cancel(),K==null||K.abort()},deactivate:()=>{_=void 0},reset:()=>{m===0&&(c==null||c(1,0))},t:P=>{var J=E+$*f((P-A)/D);return Math.min(1,Math.max(0,J))}}}const _e=l=>l;function fe(l){const e=l-1;return e*e*e+1}function Ft(l,{delay:e=0,duration:i=400,easing:m=_e}={}){const _=+getComputedStyle(l).opacity;return{delay:e,duration:i,easing:m,css:v=>`opacity: ${v*_}`}}function Lt(l,{delay:e=0,duration:i=400,easing:m=fe,axis:_="y"}={}){const v=getComputedStyle(l),U=+v.opacity,D=_==="y"?"height":"width",S=parseFloat(v[D]),c=_==="y"?["top","bottom"]:["left","right"],f=c.map(k=>`${k[0].toUpperCase()}${k.slice(1)}`),A=parseFloat(v[`padding${f[0]}`]),E=parseFloat(v[`padding${f[1]}`]),$=parseFloat(v[`margin${f[0]}`]),y=parseFloat(v[`margin${f[1]}`]),B=parseFloat(v[`border${f[0]}Width`]),K=parseFloat(v[`border${f[1]}Width`]);return{delay:e,duration:i,easing:m,css:k=>`overflow: hidden;opacity: ${Math.min(k*20,1)*U};${D}: ${k*S}px;padding-${c[0]}: ${k*A}px;padding-${c[1]}: ${k*E}px;margin-${c[0]}: ${k*$}px;margin-${c[1]}: ${k*y}px;border-${c[0]}-width: ${k*B}px;border-${c[1]}-width: ${k*K}px;`}}var xe=(l,e,i)=>e(r(i)),me=p('<svg aria-label="Clear filters" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"></path></svg>'),he=p("<button><!></button>"),ge=(l,e,i)=>e(u(i).data.attributes.code),be=p('<div class="tooltip shrink-0 after:hidden" data-tip="Remaining time"><date class="grid grid-cols-3 gap-2 text-center font-mono text-xs"><div class="border-neutral-content/40 rounded-btn border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">hour</span></div> <div class="border-neutral-content/40 rounded-btn border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">min</span></div> <div class="border-neutral-content/40 rounded-btn border border-dashed p-2"><span class="countdown block text-2xl"><span></span></span> <span class="text-neutral-content/40 text-xs">sec</span></div></date></div>'),we=p('<div class="text-neutral-content/20 rounded-btn shrink-0 border border-dashed p-2">Ended</div>'),ye=p('<div class="mx-4 mb-10"><div class="alert min-h-24 border-transparent bg-neutral text-neutral-content"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path></svg> <div class="flex w-full flex-col items-center justify-between gap-10 sm:flex-row"><div class="flex flex-col gap-1"><h2 class="text-lg font-bold"> </h2> <div class="text-neutral-content/70 text-sm [text-wrap:balance]">Use <span class="tooltip tooltip-info"><button class="font-mono tracking-wide badge px-2 badge-info"> </button></span> </div></div> <!></div></div></div>'),ke=p('<span class="badge badge-success badge-outline italic"> </span>'),Ce=p('<span class="flex gap-2"></span>'),$e=p('<span class="text-2xl line-through opacity-40 xl:text-4xl"> </span>'),je=p('<span class="font-title text-2xl font-light xl:text-5xl"> </span>'),Me=p('From <span class="font-title text-2xl font-light xl:text-5xl"> </span> to <span class="font-title text-2xl font-light xl:text-5xl"> </span>',1),Se=p('<span class="font-title text-2xl font-light xl:text-5xl"> </span>'),Ie=p('<span class="text-sm italic opacity-40"> </span>'),Fe=p('<a class="link text-xs" target="_blank">Live Preview</a>'),Le=p('<div class="prose prose-sm prose-li:my-0 prose-ul:leading-none prose-li:leading-normal prose-p:my-2 prose-ul:my-2 text-xs [text-wrap:balance]"><!></div>'),De=p('<div class="w-full grid rounded-box overflow-hidden"><div class="[grid-column:1/1] [grid-row:1/1] z-[1]"></div> <iframe class="w-full [grid-column:1/1] [grid-row:1/1]" frameborder="0"></iframe></div>'),Ee=p('<a target="_blank" rel="noopener noreferrer" class="group relative block aspect-[4/3] overflow-hidden object-cover"><div class="absolute inset-0 z-[1] grid place-content-center bg-black/50 opacity-0 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100"><svg class="text-white" width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path><path d="M21 15L21 27" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.0156 21.0156L27 21" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.2216 33.2217L41.7069 41.707" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg></div> <img loading="lazy" class="bg-base-300 aspect-[4/3] w-full bg-cover bg-center object-cover"></a>'),ze=p('<div class="w-full shrink-0 transition-transform duration-300"><!> <!></div>'),Pe=(l,e,i)=>e(r(i).id,r(i).media),Te=(l,e,i)=>e(r(i).id,r(i).media),Ue=p('<button aria-label="Previous" class="rounded-full aspect-square p-4 focus-visible:outline-white col-start-1 row-start-1 z-[1] m-6 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300 bg-black/50 border-transparent text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 lg:size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg></button> <button aria-label="Next" class="rounded-full aspect-square p-4 focus-visible:outline-white col-start-3 row-start-1 z-[1] m-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 duration-300 bg-black/50 border-transparent text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8 lg:size-12"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg></button>',1),Ae=p('<div class="lg:border-base-content/10 tooltip grid place-content-center rounded-full border-dashed lg:border lg:p-2 xl:p-3"><img class="aspect-square w-5 xl:w-6"></div>'),Be=p('<div class="flex items-center justify-center gap-4 md:justify-end"><span class="text-base-content/50 text-xs italic">made with</span> <!></div>'),Oe=p('<div class="rounded-box relative grid grid-cols-12 gap-y-10 py-10 xl:gap-x-10"><div class="col-span-12 row-start-2 flex flex-col gap-8 xl:col-span-5 xl:row-start-1"><div><!> <h2 class="font-title text-lg font-black [text-wrap:balance] sm:text-3xl xl:text-5xl"> </h2></div> <div class="flex items-start justify-between"><div class="flex gap-2"><!> <span class="flex flex-col"><span class="flex items-center gap-2"><!></span> <!></span></div> <div class="flex flex-col items-center gap-3"><a class="btn btn-primary shadow-primary/50 group shrink-0 rounded-full shadow xl:px-10" target="_blank" rel="noopener noreferrer">Get it now <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg></a> <!></div></div> <!></div> <div class="col-span-12 row-start-1 flex flex-col gap-6 xl:col-span-7"><div class="aspect-[4/3] relative grid items-center group"><div class="col-span-3 col-start-1 row-start-1 flex overflow-hidden items-center rounded-box border border-base-200"></div> <!></div> <!></div></div>'),Re=p('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20 py-32">Coming soon…</div>'),qe=p('<div class="rounded-box border-base-300 text-base-content/30 flex h-72 flex-col items-center justify-center gap-6 border-2 border-dashed p-10 text-center [text-wrap:balance]"><svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="10" width="40" height="30" rx="2" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M14 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M25 23L14 23" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 31L14 31" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path><path d="M34 6V14" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path></svg> <div> </div></div>'),Ne=p('<div class="lg:col-span-3 flex justify-center items-center font-bold text-base-content/20">Coming soon…</div>'),He=p(`<!> <div class="flex gap-6 justify-between mx-4 flex-col lg:flex-row"><div class="flex flex-col gap-2"><h1 class="font-title text-base-content text-3xl font-extrabold lg:text-4xl">daisyUI store</h1> <p class="text-base-content/60 text-sm">Official templates made by daisyUI</p></div> <div class="flex flex-col gap-3"><div class="text-xs text-base-content/50">Filter by</div> <div class="flex gap-2 items-center"></div></div></div> <hr class="mb-20 mt-10 mx-4"> <div><!> <div class="mx-auto flex max-w-7xl flex-col gap-16"></div> <div class="divider text-base-content/30 my-20">In development</div> <div class="grid gap-12 lg:grid-cols-3"></div> <div class="divider text-base-content/30 my-20"></div> <div id="mc_embed_shell" class="card bg-base-200 mt-10"><div class="card-body flex flex-col gap-4"><h2 class="text-xl font-black lg:text-4xl">Get notified about upcoming products and discounts!</h2> <div><p class="font-bold">Subscribe to daisyUI store newsletter to get updates about new products and discounts codes.</p> <p class="text-base-content/60 text-xs">You will only receive a single email when a new product is added or when a new discount code
          is available. No spam. No ads.</p></div> <div id="mc_embed_signup"><form action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate=""><input type="checkbox" name="group[347002][8]" value="1" class="hidden" checked="checked"> <input type="checkbox" name="group[347002][1]" value="1" class="hidden" checked="checked"> <div class="form-control w-full max-w-sm"><label class="label" for="mce-EMAIL"><span class="label-text">Email Address</span></label> <div class="join"><input type="email" name="EMAIL" class="join-item input input-bordered w-full max-w-sm" id="mce-EMAIL" placeholder="mail@site.com" required> <button name="subscribe" class="join-item btn btn-success">Subscribe</button></div></div> <div aria-hidden="true" class="hidden"><input type="text" name="b_42813cff910e47b1bd132369a_9fd7333f07" tabindex="-1" value=""></div></form></div></div></div></div>`,1);function sa(l,e){Zt(e,!0);let i=$t(it(new Date().toISOString()));Xt(()=>{const n=setInterval(()=>{ot(i,it(new Date().toISOString()))},1e3);return()=>clearInterval(n)});const m=n=>{var t;if((t=n.data)!=null&&t.attributes.expires_at){const j=new Date(n.data.attributes.expires_at).toISOString(),M=new Date().toISOString();return j>M}return!1},_=(async()=>{const[n,t]=await Promise.all([fetch("https://api.daisyui.com/api/discount_shorttime.json"),fetch("https://api.daisyui.com/api/discount_special.json")]),j=await n.json(),M=await t.json();return m(M)?M:m(j)?j:null})();function v(n){const t=(n/100).toFixed(2);return`$${t.endsWith(".00")?t.slice(0,-3):t}`}function U(n){const t=/\/buy\/([a-f0-9-]{36})(?:\?|$)/,j=n.match(t);return j?j[1]:null}const D={year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};let S=$t(!1);const c=n=>{navigator.clipboard.writeText(n),ot(S,!0),setTimeout(()=>{ot(S,!1)},2e3)};let f=$t("");ne(()=>{const t=new URLSearchParams(window.location.search).get("filter")||"";ot(f,it(t))});function A(n,t){const j=new URL(window.location);j.searchParams.set(n,t),window.history.pushState({},"",j)}function E(n){ot(f,it(n==="all"?"":n)),A("filter",u(f))}let $=jt(()=>e.data.products.filter(n=>{var t;return u(f)===""||((t=n.tech)==null?void 0:t.includes(u(f)))}).sort((n,t)=>0)),y=it(Object.fromEntries(e.data.products.map(n=>[n.id,{currentIndex:0}])));function B(n,t){y[n].currentIndex=(y[n].currentIndex+1)%t.length}function K(n,t){y[n].currentIndex=(y[n].currentIndex-1+t.length)%t.length}var k=He(),at=W(k);oe(at,{title:"Official daisyUI Store",desc:"daisyUI Store - Professional templates made by daisyUI"});var X=a(a(at,!0)),lt=s(X),mt=a(a(lt,!0)),P=s(mt),J=a(a(P,!0));tt(J,73,()=>e.data.techFilters,et,(n,t,j)=>{var M=nt(),R=W(M);C(R,()=>u(f)===""&&r(t)!=="all"||u(f)==="all"||u(f)!==""&&(r(t)===u(f)||r(t)==="all"),O=>{var I=he();ft(3,I,()=>Lt,()=>({duration:50,axis:"x"})),I.__click=[xe,E,t];var rt=s(I);C(rt,()=>r(t)==="all",G=>{var N=me();d(G,N)},G=>{var N=Rt(G);g(()=>T(N,e.data.tech[r(t)].title)),d(G,N)}),g(()=>{se(I,`btn btn-sm rounded-full ${r(t)==="all"?"btn-circle":""} ${u(f)===r(t)?"btn-neutral":""}`),b(I,"xstyle",r(t)!=="all"?`background-color: ${e.data.tech[r(t)].bg};border-color: ${e.data.tech[r(t)].bg};color: ${e.data.tech[r(t)].fg};`:""),b(I,"aria-label",r(t)==="all"?"×":e.data.tech[r(t)].title)}),d(O,I)}),d(n,M)});var zt=a(a(X,!0)),Pt=a(a(zt,!0)),St=s(Pt);ee(St,()=>_,n=>{},(n,t)=>{var j=nt(),M=W(j);C(M,()=>{var R,O;return((R=u(t))==null?void 0:R.data.attributes.expires_at)&&new Date((O=u(t))==null?void 0:O.data.attributes.expires_at).toISOString()>u(i)},R=>{var O=ye(),I=s(O);ft(3,I,()=>Lt,()=>({duration:400}));var rt=s(I),G=a(a(rt,!0));ft(3,G,()=>Ft,()=>({duration:400}));var N=s(G),st=s(N),dt=s(st),ht=a(a(st,!0)),Q=a(s(ht)),ct=s(Q);ct.__click=[ge,c,t];var gt=s(ct),bt=a(Q,!0),vt=a(a(N,!0));C(vt,()=>u(t).data.attributes.expires_at,wt=>{var yt=jt(()=>new Date(u(t).data.attributes.expires_at).toLocaleString("en-GB",D));ie(wt,{get from(){return u(yt)},dateFormat:"DD/MM/YYYY, HH:mm:ss",children:(kt,ut)=>{const Z=jt(()=>ut.remaining);var pt=nt(),Ct=W(pt);C(Ct,()=>u(Z).done===!1,x=>{var o=be();ft(3,o,()=>Ft,()=>({duration:400}));var h=s(o);g(()=>b(h,"datetime",new Date(u(t).data.attributes.expires_at).toLocaleString("en-GB",D)));var w=s(h),F=s(w),L=s(F),q=a(a(w,!0)),z=s(q),H=s(z),V=a(a(q,!0)),At=s(V),Bt=s(At);g(()=>{b(L,"style",`--value:${u(Z).hours};`),b(H,"style",`--value:${u(Z).minutes};`),b(Bt,"style",`--value:${u(Z).seconds};`)}),d(x,o)},x=>{var o=nt(),h=W(o);C(h,()=>!e.data,w=>{var F=we();d(w,F)},null,!0),d(x,o)}),d(kt,pt)},$$slots:{default:!0}})}),g(()=>{T(dt,u(t).data.attributes.name),b(Q,"data-tip",u(S)?"copied":"copy"),T(gt,u(t).data.attributes.code),T(bt,` code at checkout to get ${u(t).data.attributes.amount??""}% discount on all products.`)}),d(R,O)}),d(n,j)});var It=a(a(St,!0));tt(It,73,()=>u($),et,(n,t,j)=>{var M=Oe(),R=s(M),O=s(R),I=s(O);C(I,()=>r(t).tags,x=>{var o=Ce();tt(o,73,()=>r(t).tags,et,(h,w,F)=>{var L=ke(),q=s(L);g(()=>T(q,r(w))),d(h,L)}),d(x,o)});var rt=a(a(I,!0)),G=s(rt),N=a(a(O,!0)),st=s(N),dt=s(st);C(dt,()=>r(t).originalprice,x=>{var o=$e(),h=s(o);g(()=>T(h,` ${v(r(t).originalprice)??""} `)),d(x,o)});var ht=a(a(dt,!0)),Q=s(ht),ct=s(Q);C(ct,()=>r(t).displayprice,x=>{var o=je(),h=s(o);g(()=>T(h,v(r(t).displayprice))),d(x,o)},x=>{var o=nt(),h=W(o);C(h,()=>r(t).attributes.from_price&&r(t).attributes.to_price&&r(t).attributes.from_price!==r(t).attributes.to_price,w=>{var F=Me(),L=a(W(F,!0)),q=s(L);g(()=>T(q,v(r(t).attributes.from_price)));var z=a(a(L,!0)),H=s(z);g(()=>T(H,v(r(t).attributes.to_price))),d(w,F)},w=>{var F=Se(),L=s(F);g(()=>T(L,v(r(t).attributes.price))),d(w,F)},!0),d(x,o)});var gt=a(a(Q,!0));C(gt,()=>r(t).displaypricenote,x=>{var o=Ie(),h=s(o);g(()=>T(h,r(t).displaypricenote)),d(x,o)});var bt=a(a(st,!0)),vt=s(bt);g(()=>b(vt,"href",r(t).ref?`/store/checkout?product=${U(r(t).attributes.buy_now_url)}&aff=${r(t).ref}`:r(t).attributes.buy_now_url));var wt=a(a(vt,!0));C(wt,()=>r(t).preveiw_url,x=>{var o=Fe();g(()=>b(o,"href",r(t).preveiw_url)),d(x,o)});var yt=a(a(N,!0));C(yt,()=>r(t).attributes.description,x=>{var o=Le(),h=s(o);ae(h,()=>r(t).attributes.description),d(x,o)});var kt=a(a(R,!0)),ut=s(kt),Z=s(ut);tt(Z,73,()=>r(t).media,et,(x,o,h)=>{var w=ze(),F=s(w);C(F,()=>r(o).type==="video",q=>{var z=De(),H=s(z),V=a(a(H,!0));g(()=>{b(V,"src",`${r(o).url}?mute=1&autoplay=1&controls=0&rel=0&modestbranding=1&loop=1`),b(V,"style",`aspect-ratio: ${r(o).ratio};`)}),d(q,z)});var L=a(a(F,!0));C(L,()=>r(o).type==="image",q=>{var z=Ee(),H=s(z),V=a(a(H,!0));g(()=>{b(z,"href",r(o).original),b(V,"style",`background-image: url('${r(o).sm}')`),b(V,"src",r(o).lg),b(V,"alt",r(t).attributes.name)}),re(V),d(q,z)}),g(()=>b(w,"style",`transform: translateX(-${y[r(t).id].currentIndex*100}%)`)),d(x,w)});var pt=a(a(Z,!0));C(pt,()=>r(t).media.length>1,x=>{var o=Ue(),h=W(o);h.__click=[Pe,K,t];var w=a(a(h,!0));w.__click=[Te,B,t],d(x,o)});var Ct=a(a(ut,!0));C(Ct,()=>r(t).tech,x=>{var o=Be(),h=s(o),w=a(a(h,!0));tt(w,65,()=>r(t).tech,et,(F,L,q)=>{var z=Ae(),H=s(z);g(()=>{b(z,"data-tip",e.data.tech[r(L)].title),b(H,"src",`https://img.daisyui.com/images/logos/${r(L)}.svg`),b(H,"alt",r(L))}),d(F,z)}),d(x,o)}),g(()=>{b(M,"id",r(t).id),T(G,r(t).attributes.name)}),d(n,M)},n=>{var t=Re();d(n,t)});var Tt=a(a(It,!0)),Ut=a(a(Tt,!0));tt(Ut,73,()=>e.data.futureProducts,et,(n,t,j)=>{var M=qe(),R=s(M),O=a(a(R,!0)),I=s(O);g(()=>T(I,r(t))),d(n,M)},n=>{var t=Ne();d(n,t)}),d(l,k),Jt()}te(["click"]);export{sa as component};
