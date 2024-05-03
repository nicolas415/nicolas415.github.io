"use strict";(self.webpackChunkdevops_notes=self.webpackChunkdevops_notes||[]).push([[79],{6546:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(4848),t=n(8453);const i={},u="Sous-r\xe9seaux",o={id:"network/introducing-internet-layer/11-9-subnets",title:"Sous-r\xe9seaux",description:"Le r\xe9seau plat (flat network)",source:"@site/docs/network/11-introducing-internet-layer/11-9-subnets.md",sourceDirName:"network/11-introducing-internet-layer",slug:"/network/introducing-internet-layer/11-9-subnets",permalink:"/docs/network/introducing-internet-layer/11-9-subnets",draft:!1,unlisted:!1,editUrl:"https://github.com/nicolas415/nicolas415.github.io/blob/main/docs/network/11-introducing-internet-layer/11-9-subnets.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebarNetwork",previous:{title:"Internet Protocol",permalink:"/docs/network/introducing-internet-layer/11-1-internet-protocol"}},a={},l=[{value:"Le r\xe9seau plat (flat network)",id:"le-r\xe9seau-plat-flat-network",level:2},{value:"Sous r\xe9seaux",id:"sous-r\xe9seaux-1",level:2}];function c(e){const s={h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"sous-r\xe9seaux",children:"Sous-r\xe9seaux"}),"\n",(0,r.jsx)(s.h2,{id:"le-r\xe9seau-plat-flat-network",children:"Le r\xe9seau plat (flat network)"}),"\n",(0,r.jsx)(s.p,{children:"Flat Network Design \u2192 r\xe9seau connect\xe9 uniquement par switchs (OSI niveau 2). Toutes les machines peuvent se contacter par broadcast. Facile \xe0 impl\xe9menter et \xe0 g\xe9rer."}),"\n",(0,r.jsx)(s.p,{children:"Cependant, une telle conception viens avec certaines probl\xe9matiques :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"S\xe9curit\xe9"})," : Le r\xe9seau n\u2019\xe9tant pas segment\xe9, on ne peut pas appliquer de politiques de s\xe9curit\xe9 \xe0 des segments individuels du r\xe9seau"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"R\xe9solution des probl\xe8mes"})," : Isoler les probl\xe8mes r\xe9seau est plus difficile, car le r\xe9seau n\u2019est pas segment\xe9 en diff\xe9rents r\xe9seaux."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Utilisation excessive d\u2019adresses"})," : Dans les flat network, on peut avoir beaucoup d\u2019adresses IP g\xe2ch\xe9es, qui ne pourront pas \xeatre utilis\xe9es ailleurs sur ce r\xe9seau."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Mise \xe0 l\u2019\xe9chelle et vitesse"})," : Un r\xe9seau plat peut engendrer un forte pression sur le r\xe9seau (pas plus de quelques centaines d\u2019\xe9quipements)."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"sous-r\xe9seaux-1",children:"Sous r\xe9seaux"}),"\n",(0,r.jsx)(s.p,{children:"Une entreprise est par exemple compos\xe9e de plusieurs sous-r\xe9seaux, correspondant aux diff\xe9rents services de l\u2019entreprise."}),"\n",(0,r.jsx)(s.p,{children:"Sans sous-r\xe9seaux, un r\xe9seau a une topologie plate (flat network)"}),"\n",(0,r.jsx)(s.p,{children:"Segmenter un r\xe9seau en sous-r\xe9seaux a plusieurs avantages :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Plus facile \xe0 g\xe9rer, et a faire respecter des exigences techniques et g\xe9ographiques"}),"\n",(0,r.jsx)(s.li,{children:"Optimisation du nombre d\u2019adresses IP disponibles"}),"\n",(0,r.jsx)(s.li,{children:"Cr\xe9ation de plusieurs r\xe9seaux logiques \xe0 partir d\u2019un seul pr\xe9fix r\xe9seau"}),"\n",(0,r.jsx)(s.li,{children:"Reduction du trafique r\xe9seau"}),"\n",(0,r.jsx)(s.li,{children:"Plus facile d\u2019appliquer des r\xe8gles de s\xe9curit\xe9 r\xe9seau"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Dans un environnement avec des sous-r\xe9seaux, tous les sous r\xe9seaux peuvent \xeatre connect\xe9s \xe0 Internet via un routeur unique"})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>u,x:()=>o});var r=n(6540);const t={},i=r.createContext(t);function u(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:u(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);