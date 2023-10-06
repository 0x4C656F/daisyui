import{s as Ot,N as Xe,S as kt,f as a,a as s,H as b,g as n,A as d,c as o,h,F as g,d as t,j as p,i,x as c,y as Bt}from"../chunks/scheduler.5afb8bf4.js";import{S as Nt,i as Dt,b as Wt,d as Ft,m as Kt,a as Vt,t as Xt,e as Zt}from"../chunks/index.2536167e.js";import{g as Gt,a as Mt}from"../chunks/spread.8a54911c.js";import{M as Jt}from"../chunks/mdsvex-blog.b5194ed7.js";function Qt(Z){let u,C='<a aria-hidden="true" tabindex="-1" href="#the-manual-way"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>The manual way',w,m,r="Setting up Tailwind CSS and PostCSS and then adding daisyUI is not that hard at all, but it can be annoying to do the same process again and again on every project.",f,y,Ze="<li>Install Tailwind CSS and PostCSS and Autoprefixer</li> <li>Create tailwind.config.js file</li> <li>Create postcss.config.js file</li> <li>Add Tailwind CSS to postcss.config.js</li> <li>Install daisyUI</li> <li>Require daisyUI in tailwind.config.js</li>",oe,T,Ge='<a aria-hidden="true" tabindex="-1" href="#an-easier-way-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>An easier way ✨',de,S,Je='<iframe src="https://www.youtube.com/embed/2b0KzuRZEX8" frameborder="0" allowfullscreen="" class="svelte-sxvr5v"></iframe>',ue,U,Qe="Now, you can do all of these with a single command:",re,Y,ce,jt='<code class="language-undefined">npm init daisyui</code>',pe,H,et='<a aria-hidden="true" tabindex="-1" href="#benefits"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Benefits',fe,q,tt="<li>You don’t need to worry about the config files and missing something</li> <li>You don’t need to do the boring work of setup and config every time</li> <li>You can use it in existing projects or new projects</li> <li>You can choose to only install daisyUI</li> <li>You can choose to setup PostCSS and Autoprefixer or to Tailwind CSS CLI instead</li>",he,L,lt='<a aria-hidden="true" tabindex="-1" href="#how-to-use-it"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to use it?',me,R,it="<code>npm init daisyui</code> gives you 3 options:",ve,A,_e,Et=`<code class="language-undefined">🌼 Initializing daisyUI…

? Do you want to setup Tailwind CSS first?
❯ No need. I already have Tailwind
  Yes. Setup Tailwind first
  Yes. Setup Tailwind first (with PostCSS)</code>`,we,z,at="If it’s a new project of if you didn’t have Tailwind CSS installed, you can choose the second or third option. Otherwise, you can choose the first option and it will skip the Tailwind CSS setup.",ye,I,nt='<a aria-hidden="true" tabindex="-1" href="#what-it-does"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What it does?',xe,$,st="<li><p>If you choose the first option</p> <ul><li>Installs daisyUI</li> <li>Adds daiysUI to your tailwind.config.js file.</li></ul></li> <li><p>If you choose the second option</p> <ul><li>Installs Tailwind CSS</li> <li>Creates tailwind.config.js file (<code>npx tailwindcss init</code>) with default config</li> <li>Creates postcss.config.js file with <code>@tailwind</code> directives in it</li> <li>Installs daisyUI</li> <li>Adds daiysUI to your tailwind.config.js file.</li></ul></li> <li><p>If you choose the third option</p> <ul><li>Installs Tailwind CSS</li> <li>Creates tailwind.config.js file (<code>npx tailwindcss init</code>) with default config</li> <li>Installs PostCSS and Autoprefixer</li> <li>Creates postcss.config.js file</li> <li>Adds Tailwind CSS to postcss.config.js</li> <li>Installs daisyUI</li> <li>Adds daiysUI to your tailwind.config.js file.</li></ul></li>",Ce,k,ot='<a aria-hidden="true" tabindex="-1" href="#can-i-use-it-with-yarn-or-bun"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Can I use it with Yarn or Bun?',be,O,dt="Yes.",ge,B,ut="How to initiate Tailwind CSS and daisyUI with Yarn:",Te,N,Se,Ut='<code class="language-undefined">yarn create daisyui</code>',He,D,rt="How to initiate Tailwind CSS and daisyUI with Bun:",Le,W,Ie,Yt='<code class="language-undefined">bun create daisyui</code>',ke,F,ct="You can also use <code>create</code> alias instead of <code>init</code> in NPM:",Me,K,Pe,qt='<code class="language-undefined">npm create daisyui</code>',je,M,pt='<a aria-hidden="true" tabindex="-1" href="#what-it-doesnt-do"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What it doesn’t do?',Ee,x,G,ft=`<p>It doesn’t setup <code>content</code> config in <code>tailwind.config.js</code> file.<br/>
You need to do it yourself because it depends on your file structure. You can read more about it in <a href="https://tailwindcss.com/docs/content-configuration" rel="nofollow" target="_blank">Tailwind CSS docs</a>.</p>`,Oe,v,J,ht=`It doesn’t add your CSS file into your HTML.<br/>
You need to do it yourself because it depends on your build tool or bundler.
You may want to import it like this:`,Be,Q,Ue,Rt='<code class="language-js"><span class="token keyword">import</span> <span class="token string">"/output.css"</span></code>',Ne,ee,mt="Or put it in HTML like this:",De,te,Ye,At='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/output.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code>',We,_,le,vt=`It doesn’t add any scripts to build your CSS file.<br/>
If you’re using a bundler, it will be handled automatically. Otherwise you may need to add a script to <code>package.json</code> file to build your CSS file.
Like this:`,Fe,ie,qe,zt='<code class="language-undefined">npx tailwindcss -i tailwind.css -o output.css</code>',Ke,ae,_t="Or this:",Ve,ne,Re,$t='<code class="language-undefined">npx postcss-cli tailwind.css -o output.css</code>',Ae,P,wt='<a aria-hidden="true" tabindex="-1" href="#source-code"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Source code',ze,V,yt='It’s open source of course and the source code is here:<br/> <a href="https://github.com/daisyui/create-daisyui/" rel="nofollow" target="_blank">https://github.com/daisyui/create-daisyui/</a>',$e,X,xt="Let me know if you have any suggestions or feedback.";return{c(){u=a("h2"),u.innerHTML=C,w=s(),m=a("p"),m.textContent=r,f=s(),y=a("ul"),y.innerHTML=Ze,oe=s(),T=a("h2"),T.innerHTML=Ge,de=s(),S=a("div"),S.innerHTML=Je,ue=s(),U=a("p"),U.textContent=Qe,re=s(),Y=a("pre"),ce=new b(!1),pe=s(),H=a("h2"),H.innerHTML=et,fe=s(),q=a("ul"),q.innerHTML=tt,he=s(),L=a("h2"),L.innerHTML=lt,me=s(),R=a("p"),R.innerHTML=it,ve=s(),A=a("pre"),_e=new b(!1),we=s(),z=a("p"),z.textContent=at,ye=s(),I=a("h2"),I.innerHTML=nt,xe=s(),$=a("ol"),$.innerHTML=st,Ce=s(),k=a("h2"),k.innerHTML=ot,be=s(),O=a("p"),O.textContent=dt,ge=s(),B=a("p"),B.textContent=ut,Te=s(),N=a("pre"),Se=new b(!1),He=s(),D=a("p"),D.textContent=rt,Le=s(),W=a("pre"),Ie=new b(!1),ke=s(),F=a("p"),F.innerHTML=ct,Me=s(),K=a("pre"),Pe=new b(!1),je=s(),M=a("h2"),M.innerHTML=pt,Ee=s(),x=a("ol"),G=a("li"),G.innerHTML=ft,Oe=s(),v=a("li"),J=a("p"),J.innerHTML=ht,Be=s(),Q=a("pre"),Ue=new b(!1),Ne=s(),ee=a("p"),ee.textContent=mt,De=s(),te=a("pre"),Ye=new b(!1),We=s(),_=a("li"),le=a("p"),le.innerHTML=vt,Fe=s(),ie=a("pre"),qe=new b(!1),Ke=s(),ae=a("p"),ae.textContent=_t,Ve=s(),ne=a("pre"),Re=new b(!1),Ae=s(),P=a("h2"),P.innerHTML=wt,ze=s(),V=a("p"),V.innerHTML=yt,$e=s(),X=a("p"),X.textContent=xt,this.h()},l(e){u=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(u)!=="svelte-648xbz"&&(u.innerHTML=C),w=o(e),m=n(e,"P",{"data-svelte-h":!0}),d(m)!=="svelte-kdtlp0"&&(m.textContent=r),f=o(e),y=n(e,"UL",{"data-svelte-h":!0}),d(y)!=="svelte-1ubyu5f"&&(y.innerHTML=Ze),oe=o(e),T=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(T)!=="svelte-1w3m9rq"&&(T.innerHTML=Ge),de=o(e),S=n(e,"DIV",{class:!0,"data-svelte-h":!0}),d(S)!=="svelte-not00r"&&(S.innerHTML=Je),ue=o(e),U=n(e,"P",{"data-svelte-h":!0}),d(U)!=="svelte-1r4u2jh"&&(U.textContent=Qe),re=o(e),Y=n(e,"PRE",{class:!0});var l=h(Y);ce=g(l,!1),l.forEach(t),pe=o(e),H=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(H)!=="svelte-1qg6xqf"&&(H.innerHTML=et),fe=o(e),q=n(e,"UL",{"data-svelte-h":!0}),d(q)!=="svelte-12wwre4"&&(q.innerHTML=tt),he=o(e),L=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(L)!=="svelte-1g7c9uz"&&(L.innerHTML=lt),me=o(e),R=n(e,"P",{"data-svelte-h":!0}),d(R)!=="svelte-1carrdq"&&(R.innerHTML=it),ve=o(e),A=n(e,"PRE",{class:!0});var Ct=h(A);_e=g(Ct,!1),Ct.forEach(t),we=o(e),z=n(e,"P",{"data-svelte-h":!0}),d(z)!=="svelte-1k1fcgi"&&(z.textContent=at),ye=o(e),I=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(I)!=="svelte-qt1us"&&(I.innerHTML=nt),xe=o(e),$=n(e,"OL",{"data-svelte-h":!0}),d($)!=="svelte-rzqzuj"&&($.innerHTML=st),Ce=o(e),k=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(k)!=="svelte-a3n0c9"&&(k.innerHTML=ot),be=o(e),O=n(e,"P",{"data-svelte-h":!0}),d(O)!=="svelte-1h9qkjp"&&(O.textContent=dt),ge=o(e),B=n(e,"P",{"data-svelte-h":!0}),d(B)!=="svelte-1v9wxmw"&&(B.textContent=ut),Te=o(e),N=n(e,"PRE",{class:!0});var bt=h(N);Se=g(bt,!1),bt.forEach(t),He=o(e),D=n(e,"P",{"data-svelte-h":!0}),d(D)!=="svelte-ri67ff"&&(D.textContent=rt),Le=o(e),W=n(e,"PRE",{class:!0});var gt=h(W);Ie=g(gt,!1),gt.forEach(t),ke=o(e),F=n(e,"P",{"data-svelte-h":!0}),d(F)!=="svelte-wzsn7u"&&(F.innerHTML=ct),Me=o(e),K=n(e,"PRE",{class:!0});var Tt=h(K);Pe=g(Tt,!1),Tt.forEach(t),je=o(e),M=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(M)!=="svelte-za45ce"&&(M.innerHTML=pt),Ee=o(e),x=n(e,"OL",{});var se=h(x);G=n(se,"LI",{"data-svelte-h":!0}),d(G)!=="svelte-htz8r1"&&(G.innerHTML=ft),Oe=o(se),v=n(se,"LI",{});var j=h(v);J=n(j,"P",{"data-svelte-h":!0}),d(J)!=="svelte-148cdh4"&&(J.innerHTML=ht),Be=o(j),Q=n(j,"PRE",{class:!0});var St=h(Q);Ue=g(St,!1),St.forEach(t),Ne=o(j),ee=n(j,"P",{"data-svelte-h":!0}),d(ee)!=="svelte-h9e7iq"&&(ee.textContent=mt),De=o(j),te=n(j,"PRE",{class:!0});var Ht=h(te);Ye=g(Ht,!1),Ht.forEach(t),j.forEach(t),We=o(se),_=n(se,"LI",{});var E=h(_);le=n(E,"P",{"data-svelte-h":!0}),d(le)!=="svelte-12mkxtn"&&(le.innerHTML=vt),Fe=o(E),ie=n(E,"PRE",{class:!0});var Lt=h(ie);qe=g(Lt,!1),Lt.forEach(t),Ke=o(E),ae=n(E,"P",{"data-svelte-h":!0}),d(ae)!=="svelte-ed2nq9"&&(ae.textContent=_t),Ve=o(E),ne=n(E,"PRE",{class:!0});var It=h(ne);Re=g(It,!1),It.forEach(t),E.forEach(t),se.forEach(t),Ae=o(e),P=n(e,"H2",{id:!0,"data-svelte-h":!0}),d(P)!=="svelte-rahftj"&&(P.innerHTML=wt),ze=o(e),V=n(e,"P",{"data-svelte-h":!0}),d(V)!=="svelte-sj9lsk"&&(V.innerHTML=yt),$e=o(e),X=n(e,"P",{"data-svelte-h":!0}),d(X)!=="svelte-in2bov"&&(X.textContent=xt),this.h()},h(){p(u,"id","the-manual-way"),p(T,"id","an-easier-way-"),p(S,"class","embed-container rounded-box svelte-sxvr5v"),ce.a=null,p(Y,"class","language-undefined"),p(H,"id","benefits"),p(L,"id","how-to-use-it"),_e.a=null,p(A,"class","language-undefined"),p(I,"id","what-it-does"),p(k,"id","can-i-use-it-with-yarn-or-bun"),Se.a=null,p(N,"class","language-undefined"),Ie.a=null,p(W,"class","language-undefined"),Pe.a=null,p(K,"class","language-undefined"),p(M,"id","what-it-doesnt-do"),Ue.a=null,p(Q,"class","language-js"),Ye.a=null,p(te,"class","language-html"),qe.a=null,p(ie,"class","language-undefined"),Re.a=null,p(ne,"class","language-undefined"),p(P,"id","source-code")},m(e,l){i(e,u,l),i(e,w,l),i(e,m,l),i(e,f,l),i(e,y,l),i(e,oe,l),i(e,T,l),i(e,de,l),i(e,S,l),i(e,ue,l),i(e,U,l),i(e,re,l),i(e,Y,l),ce.m(jt,Y),i(e,pe,l),i(e,H,l),i(e,fe,l),i(e,q,l),i(e,he,l),i(e,L,l),i(e,me,l),i(e,R,l),i(e,ve,l),i(e,A,l),_e.m(Et,A),i(e,we,l),i(e,z,l),i(e,ye,l),i(e,I,l),i(e,xe,l),i(e,$,l),i(e,Ce,l),i(e,k,l),i(e,be,l),i(e,O,l),i(e,ge,l),i(e,B,l),i(e,Te,l),i(e,N,l),Se.m(Ut,N),i(e,He,l),i(e,D,l),i(e,Le,l),i(e,W,l),Ie.m(Yt,W),i(e,ke,l),i(e,F,l),i(e,Me,l),i(e,K,l),Pe.m(qt,K),i(e,je,l),i(e,M,l),i(e,Ee,l),i(e,x,l),c(x,G),c(x,Oe),c(x,v),c(v,J),c(v,Be),c(v,Q),Ue.m(Rt,Q),c(v,Ne),c(v,ee),c(v,De),c(v,te),Ye.m(At,te),c(x,We),c(x,_),c(_,le),c(_,Fe),c(_,ie),qe.m(zt,ie),c(_,Ke),c(_,ae),c(_,Ve),c(_,ne),Re.m($t,ne),i(e,Ae,l),i(e,P,l),i(e,ze,l),i(e,V,l),i(e,$e,l),i(e,X,l)},p:Bt,d(e){e&&(t(u),t(w),t(m),t(f),t(y),t(oe),t(T),t(de),t(S),t(ue),t(U),t(re),t(Y),t(pe),t(H),t(fe),t(q),t(he),t(L),t(me),t(R),t(ve),t(A),t(we),t(z),t(ye),t(I),t(xe),t($),t(Ce),t(k),t(be),t(O),t(ge),t(B),t(Te),t(N),t(He),t(D),t(Le),t(W),t(ke),t(F),t(Me),t(K),t(je),t(M),t(Ee),t(x),t(Ae),t(P),t(ze),t(V),t($e),t(X))}}}function el(Z){let u,C;const w=[Z[0],Pt];let m={$$slots:{default:[Qt]},$$scope:{ctx:Z}};for(let r=0;r<w.length;r+=1)m=Xe(m,w[r]);return u=new Jt({props:m}),{c(){Wt(u.$$.fragment)},l(r){Ft(u.$$.fragment,r)},m(r,f){Kt(u,r,f),C=!0},p(r,[f]){const y=f&1?Gt(w,[f&1&&Mt(r[0]),f&0&&Mt(Pt)]):{};f&2&&(y.$$scope={dirty:f,ctx:r}),u.$set(y)},i(r){C||(Vt(u.$$.fragment,r),C=!0)},o(r){Xt(u.$$.fragment,r),C=!1},d(r){Zt(u,r)}}}const Pt={title:"Install Tailwind CSS and PostCSS and daisyUI with one command",desc:"It can be annoying to install, setup, config and import all the dependencies. But now, you can do it with a single command.",published:!0,date:"2023-10-6",author:"Pouya Saadeghi",thumbnail:"/images/blog/npm-init-daisyui.jpg",tags:["daisyUI","Tailwind CSS"]};function tl(Z,u,C){return Z.$$set=w=>{C(0,u=Xe(Xe({},u),kt(w)))},u=kt(u),[u]}class sl extends Nt{constructor(u){super(),Dt(this,u,tl,el,Ot,{})}}export{sl as component};
