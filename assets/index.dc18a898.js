const Ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};Ve();function T(){}function qe(e){return e()}function $e(){return Object.create(null)}function V(e){e.forEach(qe)}function Ue(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Y;function Z(e,t){return Y||(Y=document.createElement("a")),Y.href=t,e===Y.href}function De(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function U(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function oe(e){return document.createTextNode(e)}function v(){return oe(" ")}function K(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Fe(e){return Array.from(e.childNodes)}function He(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let ge;function Q(e){ge=e}const J=[],ye=[],ee=[],Ie=[],Ke=Promise.resolve();let ae=!1;function Je(){ae||(ae=!0,Ke.then(ze))}function _e(e){ee.push(e)}const ie=new Set;let G=0;function ze(){const e=ge;do{for(;G<J.length;){const t=J[G];G++,Q(t),Qe(t.$$)}for(Q(null),J.length=0,G=0;ye.length;)ye.pop()();for(let t=0;t<ee.length;t+=1){const n=ee[t];ie.has(n)||(ie.add(n),n())}ee.length=0}while(J.length);for(;Ie.length;)Ie.pop()();ae=!1,ie.clear(),Q(e)}function Qe(e){if(e.fragment!==null){e.update(),V(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_e)}}const te=new Set;let M;function xe(){M={r:0,c:[],p:M}}function Ce(){M.r||V(M.c),M=M.p}function N(e,t){e&&e.i&&(te.delete(e),e.i(t))}function z(e,t,n,r){if(e&&e.o){if(te.has(e))return;te.add(e),M.c.push(()=>{te.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Be(e){e&&e.c()}function ue(e,t,n,r){const{fragment:o,on_mount:s,on_destroy:i,after_update:l}=e.$$;o&&o.m(t,n),r||_e(()=>{const p=s.map(qe).filter(Ue);i?i.push(...p):V(p),e.$$.on_mount=[]}),l.forEach(_e)}function fe(e,t){const n=e.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Re(e,t){e.$$.dirty[0]===-1&&(J.push(e),Je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(e,t,n,r,o,s,i,l=[-1]){const p=ge;Q(e);const a=e.$$={fragment:null,ctx:null,props:s,update:T,not_equal:o,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:$e(),dirty:l,skip_bound:!1,root:t.target||p.$$.root};i&&i(a.root);let g=!1;if(a.ctx=n?n(e,t.props||{},(h,C,...$)=>{const j=$.length?$[0]:C;return a.ctx&&o(a.ctx[h],a.ctx[h]=j)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](j),g&&Re(e,h)),C}):[],a.update(),g=!0,V(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const h=Fe(t.target);a.fragment&&a.fragment.l(h),h.forEach(A)}else a.fragment&&a.fragment.c();t.intro&&N(e.$$.fragment),ue(e,t.target,t.anchor,t.customElement),ze()}Q(p)}class me{$destroy(){fe(this,1),this.$destroy=T}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!De(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const H=[];function We(e,t=T){let n;const r=new Set;function o(l){if(re(e,l)&&(e=l,n)){const p=!H.length;for(const a of r)a[1](),H.push(a,e);if(p){for(let a=0;a<H.length;a+=2)H[a][0](H[a+1]);H.length=0}}}function s(l){o(l(e))}function i(l,p=T){const a=[l,p];return r.add(a),r.size===1&&(n=t(o)||T),l(e),()=>{r.delete(a),r.size===0&&(n(),n=null)}}return{set:o,update:s,subscribe:i}}const Xe=["ct_b_doors_2.jpg","ct_b_doors.jpg","ct_donut_close_2.jpg","ct_donut_close.jpg","ct_main_2.jpg","ct_main_spawn_2.jpg","ct_main_spawn.jpg","ct_main.jpg","t_a_cave_2.jpg","t_a_cave.jpg","t_a_long_2.jpg","t_a_long.jpg","t_a_short_2.jpg","t_a_short.jpg","t_a_triple_close_2.jpg","t_a_triple_close.jpg","t_b_dount_2.jpg","t_b_dount.jpg","t_b_temple_2.jpg","t_b_temple.jpg","t_b_triple_2.jpg","t_b_triple.jpg","t_donuts_mid_2.jpg","t_donuts_mid.jpg","t_mid_house_2.jpg","t_mid_house.jpg"],Ye=["ct_b_tunnel_2.jpg","ct_b_tunnel.jpg","ct_deep_short_2.jpg","ct_deep_short.jpg","ct_lower_lurk_2.jpg","ct_lower_lurk.jpg","ct_short_close_2.jpg","ct_short_close.jpg","t_b_door_2.jpg","t_b_door.jpg","t_cross_first_2.jpg","t_cross_first.jpg","t_long_corner_2.jpg","t_long_corner.jpg","t_lower_xbox_2.jpg","t_lower_xbox.jpg","t_mid_ct_2.jpg","t_mid_ct.jpg","t_pit_2.jpg","t_pit.jpg","t_short_2.jpg","t_short_lurk_2.jpg","t_short_lurk.jpg","t_short.jpg","t_xbox_2.jpg","t_xbox.jpg"],Ze=["ct_b_retake_2.jpg","ct_b_retake.jpg","ct_bana_deep_2.jpg","ct_bana_deep.jpg","t_coffins_2.jpg","t_coffins.jpg","t_ct_2.jpg","t_ct.jpg","t_left_mid_2.jpg","t_left_mid.jpg","t_lib_2.jpg","t_lib.jpg","t_pit_2.jpg","t_pit.jpg","t_right_mid_2.jpg","t_right_mid.jpg","t_site_lib_2.jpg","t_site_lib.jpg","t_top_mid_2.jpg","t_top_mid.jpg"],Ge=["a_retake_palace_2.jpg","a_retake_palace.jpg","a_retake_ramp_2.jpg","a_retake_ramp.jpg","b_retake_bench_2.jpg","b_retake_bench.jpg","b_retake_default_2.jpg","b_retake_default.jpg","b_retake_short_2.jpg","b_retake_short.jpg","B_window_2.jpg","B_window.jpg","bench_2.jpg","bench.jpg","CT_2.jpg","CT_ramp_2.jpg","CT_ramp.jpg","CT_Tetris_2.jpg","CT_Tetris.jpg","CT.jpg","door_2.jpg","door.jpg","jungle_2.jpg","jungle.jpg","left_arch_2.jpg","left_arch.jpg","mid_short_2.jpg","mid_short.jpg","mid_window_2.jpg","mid_window.jpg","right_arch_2.jpg","right_arch.jpg","shadow_palace_2.jpg","shadow_palace.jpg","stairs_2.jpg","stairs_low_2.jpg","stairs_low.jpg","stairs.jpg","T_short_2.jpg","T_short.jpg","T_window_2.jpg","T_window.jpg"],et=["ct_hut_2.jpg","ct_hut.jpg","ct_yard_2.jpg","ct_yard.jpg","t_deep_garage_2.jpg","t_deep_garage.jpg","t_heaven_2.jpg","t_heaven.jpg","t_main_2.jpg","t_main_inside_2.jpg","t_main_inside.jpg","t_main.jpg","t_ramp_cose_2.jpg","t_ramp_cose.jpg","t_secret_2.jpg","t_secret.jpg","t_smoke_wall_first_2.jpg","t_smoke_wall_first.jpg","t_smoke_wall_two_2.jpg","t_smoke_wall_two.jpg","t_vent_2.jpg","t_vent.jpg"],tt=["ct_a_retake_default_2.jpg","ct_a_retake_default.jpg","ct_a_retake_ramp_2.jpg","ct_a_retake_ramp.jpg","ct_a_retake_short_2.jpg","ct_a_retake_short.jpg","ct_b_retake_stairs_2.jpg","ct_b_retake_stairs.jpg","ct_b_stairs_2.jpg","ct_b_stairs.jpg","ct_offensive_mid_2.jpg","ct_offensive_mid.jpg","ct_ramp_2.jpg","ct_ramp_slow_2.jpg","ct_ramp_slow.jpg","ct_ramp.jpg","ct_short_2.jpg","ct_short.jpg","t_a_site_2.jpg","t_a_site.jpg","t_b_site_2.jpg","t_b_site.jpg","t_ct_2.jpg","t_ct.jpg","t_heaven_2.jpg","t_heaven.jpg","t_mid_mid_2.jpg","t_mid_mid.jpg","t_short_2.jpg","t_short.jpg"],ce={ancient:Xe,dust2:Ye,inferno:Ze,mirage:Ge,nuke:et,vertigo:tt};var O=(e=>(e.Ancient="ancient",e.Inferno="inferno",e.Nuke="nuke",e.Dust2="dust2",e.Mirage="mirage",e.Vertigo="vertigo",e.Overpass="overpass",e))(O||{}),ne=(e=>(e[e.None=0]="None",e[e.Terrorist=1]="Terrorist",e[e.CounterTerrorist=2]="CounterTerrorist",e))(ne||{});const nt=()=>{const e={};return Object.keys(ce).forEach(t=>{e[t]=[],ce[t].forEach(n=>{const r=n.substring(0,n.lastIndexOf("."));let o=r.toLowerCase();const s=r[r.length-1]==="2";s&&(o=r.substring(0,r.lastIndexOf("_")).toLowerCase());let i=e[t].findIndex(l=>l.id.trim()==o.trim());e[t][i]||(i=e[t].push({id:o})-1),s?e[t][i].aim=n:e[t][i].pos=n})}),e},rt=e=>{let t=!0;const n=Object.keys(e);for(let r=0;r<n.length;r++)e[n[r]].forEach((s,i)=>{const l=!!s.aim,p=!!s.pos;l&&!p?(console.error(n[r],"No aim image found for",s.id),t=!1):p&&!l?(console.error(n[r],"No pos image found for",s.id),t=!1):!p&&!l&&(console.error(n[r],"No images found at all for",s.id),t=!1)});return t},ot=e=>{const t=e.substring(e.indexOf("_"),e.length).replace(/_+/g," ");return(t[0].toUpperCase()+t.substring(1).toLowerCase()).trim()},st=(e,t)=>{const n=e.map(l=>{let p=ne.None;return l.id[0].toLowerCase()==="t"&&l.id[1].toLowerCase()==="_"&&(p=ne.Terrorist),l.id[0].toLowerCase()==="c"&&l.id[1].toLowerCase()==="t"&&(p=ne.CounterTerrorist),{team:p,name:ot(l.id),posImage:`/maps/${t}/${l.pos}`,aimImage:`/maps/${t}/${l.aim}`,throwGuide:[],favorite:!1}});return{map:t,smokes:n,flashbangs:[],molotovs:[],frags:[]}},it=()=>{const e=nt();if(!rt(e))throw new Error("There are incomplete map image pairs!");return Object.keys(e).map(n=>st(e[n],n))};var B=(e=>(e[e.Home=0]="Home",e[e.Map=1]="Map",e))(B||{});const lt={page:0,nadeMap:it()},pe=We(lt),at=()=>{var s;if(!((s=document==null?void 0:document.location)!=null&&s.search))return{};const e=document.location.search,r=(e.length>0?e.substring(1):"").split("&").map(i=>i.split("=")),o={};for(let i=0;i<r.length;i++){const l=r[i];o[l[0]]=l[1]}return o},_t=e=>(e[0].toUpperCase()+e.substring(1).toLowerCase()).trim();function Ne(e,t,n){const r=e.slice();return r[2]=t[n],r}function Te(e){let t,n,r,o,s,i=_t(e[2])+"",l,p,a;return{c(){t=d("div"),n=d("a"),r=d("div"),o=d("div"),s=d("p"),l=oe(i),p=v(),c(s,"class","text-white font-bold text-center"),c(o,"class","absolute w-full h-6 bottom-8 bg-gray-600"),c(r,"class","w-full h-full relative"),c(n,"href",`/?map=${e[2]}`),c(t,"style",a=`background-image: url("/backgrounds/${e[0][e[2]]}");`),c(t,"alt",e[2]),c(t,"class","map-button-size mx-auto rounded-xl shadow-inner hover:opacity-50 mt-1 svelte-l6p8wx")},m(g,h){U(g,t,h),_(t,n),_(n,r),_(r,o),_(o,s),_(s,l),_(t,p)},p(g,h){h&1&&a!==(a=`background-image: url("/backgrounds/${g[0][g[2]]}");`)&&c(t,"style",a)},d(g){g&&A(t)}}}function ct(e){let t,n=e[1],r=[];for(let o=0;o<n.length;o+=1)r[o]=Te(Ne(e,n,o));return{c(){t=d("div");for(let o=0;o<r.length;o+=1)r[o].c();c(t,"class","grid grid-flow-col grid-rows-6 lg:grid-rows-3 2xl:grid-rows-2 container px-1 mx-auto mt-24")},m(o,s){U(o,t,s);for(let i=0;i<r.length;i+=1)r[i].m(t,null)},p(o,[s]){if(s&3){n=o[1];let i;for(i=0;i<n.length;i+=1){const l=Ne(o,n,i);r[i]?r[i].p(l,s):(r[i]=Te(l),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},i:T,o:T,d(o){o&&A(t),le(r,o)}}}function pt(e,t,n){let r=Object.keys(ce).sort(),o={};for(let s=0;s<r.length;s++){const i=r[s];if(i==="ancient"){o[i]=`${i}.jpeg`;continue}o[i]=`${i}.jpg`}return[o,r]}class gt extends me{constructor(t){super(),de(this,t,pt,ct,re,{})}}const L={};L[typeof O.Ancient]="Ancient";L[typeof O.Inferno]="Inferno";L[typeof O.Nuke]="Nuke";L[typeof O.Dust2]="Dust2";L[typeof O.Mirage]="Mirage";L[typeof O.Vertigo]="Vertigo";L[typeof O.Overpass]="Overpass";const Oe=e=>L[typeof e];function Ee(e,t,n){const r=e.slice();return r[16]=t[n],r}function Le(e,t,n){const r=e.slice();return r[16]=t[n],r}function Me(e){let t,n=e[6](e[16].positionImage)+"",r,o,s;function i(){return e[11](e[16])}return{c(){t=d("button"),r=oe(n),c(t,"class","w-full hover:underline text-left")},m(l,p){U(l,t,p),_(t,r),o||(s=K(t,"click",i),o=!0)},p(l,p){e=l,p&8&&n!==(n=e[6](e[16].positionImage)+"")&&He(r,n)},d(l){l&&A(t),o=!1,s()}}}function Ae(e){let t,n,r,o=e[6](e[16].positionImage)+"",s,i,l,p,a,g,h,C,$;return{c(){t=d("article"),n=d("div"),r=d("h4"),s=oe(o),i=v(),l=d("img"),a=v(),g=d("img"),C=v(),c(r,"class","text-xl"),c(l,"class","aim-image z-0 svelte-8n8nm7"),Z(l.src,p=`/maps/${e[0]}/${e[16].aimImage}`)||c(l,"src",p),c(l,"width","960px"),c(l,"height","720px"),c(l,"alt","aim"),c(g,"class","position-image z-0 svelte-8n8nm7"),Z(g.src,h=`/maps/${e[0]}/${e[16].positionImage}`)||c(g,"src",h),c(g,"width","960px"),c(g,"height","720px"),c(g,"alt","position"),c(n,"class","position-relative 2xl:ml-auto 2xl:mr-auto ml-auto mr-0 svelte-8n8nm7"),c(t,"id",$=e[7](e[16].positionImage))},m(j,b){U(j,t,b),_(t,n),_(n,r),_(r,s),_(n,i),_(n,l),_(n,a),_(n,g),_(t,C)},p(j,b){b&8&&o!==(o=j[6](j[16].positionImage)+"")&&He(s,o),b&9&&!Z(l.src,p=`/maps/${j[0]}/${j[16].aimImage}`)&&c(l,"src",p),b&9&&!Z(g.src,h=`/maps/${j[0]}/${j[16].positionImage}`)&&c(g,"src",h),b&8&&$!==($=j[7](j[16].positionImage))&&c(t,"id",$)},d(j){j&&A(t)}}}function ut(e){let t,n,r,o,s,i,l,p,a,g,h,C,$,j,b,I,R,m,y,P,W,x,he,X,je,be,ve,D,ke,se,we,S=e[3],k=[];for(let f=0;f<S.length;f+=1)k[f]=Me(Le(e,S,f));let q=e[3],w=[];for(let f=0;f<q.length;f+=1)w[f]=Ae(Ee(e,q,f));return{c(){t=d("div"),n=d("h2"),n.textContent=`${e[4]} smokes`,r=v(),o=d("br"),s=v(),i=d("br"),l=v(),p=d("div"),a=d("div"),g=d("div"),h=d("div"),h.innerHTML="<h3>Overview</h3>",C=v(),$=d("hr"),j=v(),b=d("div"),I=d("input"),R=v(),m=d("label"),m.textContent="T",y=v(),P=d("br"),W=v(),x=d("input"),he=v(),X=d("label"),X.textContent="CT",je=v(),be=d("hr"),ve=v(),D=d("div");for(let f=0;f<k.length;f+=1)k[f].c();ke=v();for(let f=0;f<w.length;f+=1)w[f].c();c(n,"class","text-center text-3xl"),c(h,"class","p-1"),c(I,"type","checkbox"),c(I,"name","terrorist-filter"),c(I,"id","terrorist-filter-checkbox"),c(m,"for","terrorist-filter-checkbox"),c(x,"type","checkbox"),c(x,"name","counter-terrorist-filter"),c(x,"id","counter-terrorist-filter-checkbox"),c(X,"for","counter-terrorist-filter-checkbox"),c(b,"class","p-1"),c(D,"class","p-1"),c(g,"class","absolute z-10 bg-gray-500 rounded-br-md transition-opacity opacity-40 hover:opacity-100"),c(a,"class","relative w-full"),c(p,"class","fixed w-48 top-0"),c(t,"class","relative")},m(f,E){U(f,t,E),_(t,n),_(t,r),_(t,o),_(t,s),_(t,i),_(t,l),_(t,p),_(p,a),_(a,g),_(g,h),_(g,C),_(g,$),_(g,j),_(g,b),_(b,I),I.checked=e[2],_(b,R),_(b,m),_(b,y),_(b,P),_(b,W),_(b,x),x.checked=e[1],_(b,he),_(b,X),_(g,je),_(g,be),_(g,ve),_(g,D);for(let u=0;u<k.length;u+=1)k[u].m(D,null);_(t,ke);for(let u=0;u<w.length;u+=1)w[u].m(t,null);se||(we=[K(I,"change",e[9]),K(I,"change",e[5]),K(x,"change",e[10]),K(x,"change",e[5])],se=!0)},p(f,[E]){if(E&4&&(I.checked=f[2]),E&2&&(x.checked=f[1]),E&456){S=f[3];let u;for(u=0;u<S.length;u+=1){const F=Le(f,S,u);k[u]?k[u].p(F,E):(k[u]=Me(F),k[u].c(),k[u].m(D,null))}for(;u<k.length;u+=1)k[u].d(1);k.length=S.length}if(E&201){q=f[3];let u;for(u=0;u<q.length;u+=1){const F=Ee(f,q,u);w[u]?w[u].p(F,E):(w[u]=Ae(F),w[u].c(),w[u].m(t,null))}for(;u<w.length;u+=1)w[u].d(1);w.length=q.length}},i:T,o:T,d(f){f&&A(t),le(k,f),le(w,f),se=!1,V(we)}}}function ft(e,t,n){let{map:r}=t,o=Oe(r),s=!0,i=!0;pe.subscribe(m=>{});const l=presentableName(o),p=manifest_json[o];let a=[];const g=()=>{n(3,a=[]);for(let m=0;m<p.length;m++){const y=p[m],P=y.substring(0,y.lastIndexOf("."));if(P[P.length-1]==="2")continue;const W=`${P}_2${y.substring(y.lastIndexOf("."))}`,x={positionImage:y.trim(),aimImage:W.trim()};a.push(x)}i&&s||(s&&n(3,a=a.filter(m=>m.positionImage.substring(0,2).toUpperCase()==="CT")),i&&n(3,a=a.filter(m=>m.positionImage.substring(0,1).toUpperCase()==="T")))},h=()=>{g()},C=m=>m.substring(0,m.lastIndexOf(".")).replace(/_+/g," "),$=m=>m.substring(0,m.lastIndexOf(".")),j=m=>{const y=document.getElementById(m);!y||y.scrollIntoView()};g();function b(){i=this.checked,n(2,i)}function I(){s=this.checked,n(1,s)}const R=m=>j($(m.positionImage));return e.$$set=m=>{"map"in m&&n(0,r=m.map)},e.$$.update=()=>{e.$$.dirty&1&&(o=Oe(r))},[r,s,i,a,l,h,C,$,j,b,I,R]}class dt extends me{constructor(t){super(),de(this,t,ft,ut,re,{map:0})}}function Pe(e){let t,n;return t=new gt({}),{c(){Be(t.$$.fragment)},m(r,o){ue(t,r,o),n=!0},i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){z(t.$$.fragment,r),n=!1},d(r){fe(t,r)}}}function Se(e){let t,n;return t=new dt({props:{map:e[0].map}}),{c(){Be(t.$$.fragment)},m(r,o){ue(t,r,o),n=!0},p(r,o){const s={};o&1&&(s.map=r[0].map),t.$set(s)},i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){z(t.$$.fragment,r),n=!1},d(r){fe(t,r)}}}function mt(e){let t,n,r,o=e[0].page===B.Home&&Pe(),s=e[0].page===B.Map&&Se(e);return{c(){t=d("main"),o&&o.c(),n=v(),s&&s.c()},m(i,l){U(i,t,l),o&&o.m(t,null),_(t,n),s&&s.m(t,null),r=!0},p(i,[l]){i[0].page===B.Home?o?l&1&&N(o,1):(o=Pe(),o.c(),N(o,1),o.m(t,n)):o&&(xe(),z(o,1,1,()=>{o=null}),Ce()),i[0].page===B.Map?s?(s.p(i,l),l&1&&N(s,1)):(s=Se(i),s.c(),N(s,1),s.m(t,null)):s&&(xe(),z(s,1,1,()=>{s=null}),Ce())},i(i){r||(N(o),N(s),r=!0)},o(i){z(o),z(s),r=!1},d(i){i&&A(t),o&&o.d(),s&&s.d()}}}function ht(e,t,n){let r;return pe.subscribe(o=>n(0,r=o)),pe.update(o=>{const i=at().map;return i&&Object.values(O).includes(i)?{...o,map:i,page:B.Map}:{...o}}),[r]}class jt extends me{constructor(t){super(),de(this,t,ht,mt,re,{})}}new jt({target:document.getElementById("app")});