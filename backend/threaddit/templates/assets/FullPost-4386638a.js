import{P as m,a as N,A as I,r as c,b as R,j as e,m as T,c as q,L as F,S as h,M as $,d as C,e as V}from"./index-51f78cb4.js";import{V as L,R as w,P as Q}from"./Post-71175b0d.js";import{A as f}from"./index-e81b643c.js";import{T as K}from"./ThreadsSidebar-4cfecf6c.js";function Y(r){const s=Math.floor((new Date-r)/1e3);let t=Math.floor(s/31536e3);return t>1?t+" years ago":(t=Math.floor(s/2592e3),t>1?t+" months ago":(t=Math.floor(s/86400),t>1?t+" days ago":(t=Math.floor(s/3600),t>1?t+" hours ago":(t=Math.floor(s/60),t>1?t+" minutes ago":s<10?"just now":Math.floor(s)+" seconds ago"))))}j.propTypes={children:m.array,comment:m.object,threadID:m.string,commentIndex:m.number};const v=["border-yellow-400","border-blue-400","border-purple-400","border-green-400","border-sky-400","border-pink-400"];let p=0;function j({children:r,comment:s,threadID:t,commentIndex:n}){var _;const{postId:u}=N(),{isAuthenticated:l,user:d}=I(),x=c.useRef(),M=R(),[y,a]=c.useState(!1),[S,b]=c.useState(e.jsx(e.Fragment,{})),[i,k]=c.useState(!1);function P(){l?(a(!0),b(e.jsx(w,{className:"w-5/6 h-5/6",parentComment:s,isComment:!0,setShowModal:a}))):alert("You must be logged in to reply.")}function g(o){if(o==="share"){navigator.clipboard.writeText(location.href).then(()=>{alert("Copied Post Link to clipboard")}).catch(E=>alert(E)),x.current.value="more";return}l?o==="edit"?(a(!0),b(e.jsx(w,{className:"w-5/6 h-5/6",parentComment:s,isComment:!0,edit:!0,setShowModal:a}))):o==="delete"&&window.confirm("Are you sure you want to delete this comment?")&&C.delete(`/api/comments/${s.comment_info.id}`).then(()=>{M.invalidateQueries({queryKey:["post/comment",u]})}):alert("You must be logged in for this action."),x.current.value="more"}function A(){return p==v.length&&(p=0),v[p++]}const D=Y(new Date(s.comment_info.created_at));return e.jsxs(e.Fragment,{children:[e.jsxs(T.div,{className:"py-3 pl-2 space-y-2 w-full bg-white rounded-xl md:text-base",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.25,delay:.25+n*.25},exit:{opacity:0,y:-10,transition:{duration:.1}},children:[e.jsxs("div",{className:"flex items-center space-x-2 text-sm font-medium",children:[e.jsx("img",{src:s.user_info.user_avatar||q,alt:"",className:"w-5 h-5 rounded-full"}),e.jsx(F,{to:`/u/${s.user_info.user_name}`,children:s.user_info.user_name}),e.jsx("p",{children:D}),e.jsx("p",{children:s.comment_info.is_edited&&"Edited"})]}),e.jsx("p",{className:"mr-2 ml-1 text-sm md:text-base",children:s.comment_info.content}),e.jsxs("div",{className:"flex justify-around items-center md:justify-between md:mx-10",children:[l&&(d.username===s.user_info.user_name||d.mod_in.includes(t)||d.roles.includes("admin"))?e.jsxs("select",{defaultValue:"more",ref:x,name:"more-options",id:"more-options",className:"text-sm text-center bg-white md:px-2 md:text-base",onChange:o=>g(o.target.value),children:[e.jsx("option",{value:"more",children:"More"}),e.jsx("option",{value:"share",children:"Share"}),d.username===s.user_info.user_name&&e.jsx("option",{value:"edit",children:"Edit"}),e.jsx("option",{value:"delete",children:"Delete"})]}):e.jsxs("div",{className:"flex items-center space-x-1",onClick:()=>g("share"),children:[e.jsx(h,{type:"share",className:"w-4 h-4"}),e.jsx("p",{className:"text-sm cursor-pointer md:text-base",children:"Share"})]}),e.jsxs("div",{className:"flex items-center space-x-1",onClick:()=>P(),children:[e.jsx(h,{type:"comment",className:"w-4 h-4"}),e.jsx("p",{className:"text-sm cursor-pointer md:text-base",children:"Reply"})]}),e.jsxs("div",{className:`${!r.length&&"invisible"} flex items-center space-x-1`,onClick:()=>k(!i),children:[e.jsx(h,{type:"down-arrow",className:`w-4 h-4 ${i&&"rotate-180"}`}),e.jsx("p",{className:"text-sm cursor-pointer md:text-base",children:i?"Hide":"Show"})]}),e.jsx("div",{className:"flex items-center space-x-2 text-sm md:text-base",children:e.jsx(L,{url:"/api/reactions/comment",intitalVote:(_=s.current_user)==null?void 0:_.has_upvoted,initialCount:s.comment_info.comment_karma,contentID:s.comment_info.id,type:"mobile"})})]}),e.jsx(f,{children:i&&e.jsx("ul",{className:r.length>0&&i&&"border-l-2 "+A(),children:r.map(o=>e.jsx(j,{...o},o.comment.comment_info.id))})})]}),e.jsx(f,{children:y&&l&&e.jsx($,{showModal:y,setShowModal:a,children:S})})]})}function J(){const{postId:r}=N(),{data:s,isFetched:t}=V({queryKey:["post/comment",r],queryFn:async()=>await C.get(`/api/comments/post/${r}`).then(n=>n.data)});return t&&e.jsxs("div",{className:"flex pb-20 md:pb-0",children:[e.jsx(K,{}),e.jsxs("div",{className:"flex flex-col p-2 space-y-2 w-full",children:[e.jsx(Q,{post:s==null?void 0:s.post_info,isExpanded:!0}),(s==null?void 0:s.comment_info.length)>0?e.jsx("ul",{className:"space-y-2 rounded-xl md:border-2 md:p-2 hover:shadow-sm border-theme-gray-blue",children:e.jsx(f,{children:s==null?void 0:s.comment_info.map((n,u)=>e.jsx(j,{...n,postId:s==null?void 0:s.post_info.thread_info.thread_id,commentIndex:u},n.comment.comment_info.id))})}):e.jsx("div",{children:e.jsx("p",{className:"p-5 text-sm bg-white rounded-xl border-2 md:text-base hover:shadow-sm border-theme-gray-blue",children:"This post has no comments, be the first to reply!"})})]})]})}export{J as FullPost,J as default};
