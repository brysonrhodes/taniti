import{n as a,z as g}from"./runtime.BiNlWP6M.js";import{s as p}from"./utils.Dh_1V-NK.js";const r=[];function k(t,i){return{subscribe:z(t,i).subscribe}}function z(t,i=a){let e=null;const o=new Set;function b(n){if(g(t,n)&&(t=n,e)){const u=!r.length;for(const s of o)s[1](),r.push(s,t);if(u){for(let s=0;s<r.length;s+=2)r[s][0](r[s+1]);r.length=0}}}function c(n){b(n(t))}function _(n,u=a){const s=[n,u];return o.add(s),o.size===1&&(e=i(b,c)||a),n(t),()=>{o.delete(s),o.size===0&&e&&(e(),e=null)}}return{set:b,update:c,subscribe:_}}function m(t){let i;return p(t,e=>i=e)(),i}var f;const h=((f=globalThis.__sveltekit_1kqzza0)==null?void 0:f.base)??"/taniti";var l;const w=((l=globalThis.__sveltekit_1kqzza0)==null?void 0:l.assets)??h;export{w as a,h as b,m as g,k as r,z as w};
