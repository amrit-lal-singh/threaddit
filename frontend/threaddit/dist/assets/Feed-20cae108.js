import{A as r,u as i,a as o,j as s}from"./index-d818f154.js";import{I as m}from"./InfinitePosts-6ad17807.js";import{T as n}from"./ThreadsSidebar-ea9775c0.js";import"./Post-799d4f99.js";function p(){const{isAuthenticated:a}=r(),t=i(),e=o();return e.feedName=="home"&&!a?t("/login"):s.jsxs("div",{className:"flex flex-1 max-w-full bg-theme-cultured",children:[s.jsx(n,{}),s.jsx(m,{linkUrl:`posts/${e.feedName}`,apiQueryKey:e.feedName})]})}export{p as Feed,p as default};
