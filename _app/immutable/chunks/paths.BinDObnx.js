import{n as c,z as g}from"./runtime.BiNlWP6M.js";import{s as p}from"./utils.Dh_1V-NK.js";const i=[];function q(t,n){return{subscribe:h(t,n).subscribe}}function h(t,n=c){let e=null;const o=new Set;function b(r){if(g(t,r)&&(t=r,e)){const u=!i.length;for(const s of o)s[1](),i.push(s,t);if(u){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function a(r){b(r(t))}function _(r,u=c){const s=[r,u];return o.add(s),o.size===1&&(e=n(b,a)||c),r(t),()=>{o.delete(s),o.size===0&&e&&(e(),e=null)}}return{set:b,update:a,subscribe:_}}function k(t){let n;return p(t,e=>n=e)(),n}var f;const m=((f=globalThis.__sveltekit_1bmrb0z)==null?void 0:f.base)??"/taniti";var l;const w=((l=globalThis.__sveltekit_1bmrb0z)==null?void 0:l.assets)??m;export{w as a,m as b,k as g,q as r,h as w};