import{P as r,b as P,a as $,r as y,h as g,d as w,A as q,j as e,m as T,c as B,i as D,S as N,g as E,e as K,L as H}from"./index-d818f154.js";import{V as O,P as z}from"./Post-799d4f99.js";import{T as G}from"./ThreadsSidebar-ea9775c0.js";Comment.propTypes={children:r.array,comment:r.object};const F=["border-yellow-400","border-blue-400","border-purple-400","border-green-400","border-sky-400","border-pink-400"];let S=0;function J({children:i,comment:n}){const t=P(),{postId:f}=$(),[a,s]=y.useState(i||[]),[{comment_info:m,user_info:h,current_user:l},p]=y.useState(n),{mutate:c}=g({mutationFn:async o=>{o.length!==0&&await w.post("/api/comments",{post_id:f,content:o,has_parent:!0,parent_id:n.comment_info.id},{headers:{"Content-Type":"application/json"}}).then(d=>{s([...a,d.data.new_comment])})}}),{mutate:C}=g({mutationFn:async(o=null)=>{window.confirm("Are you sure you want to delete this comment?")&&w.delete(`/api/comments/${o||m.id}`).then(()=>{o?s(a.filter(d=>d.comment.comment_info.id!==o)):t.setQueryData({queryKey:["post/comment",f]},d=>({...d,comment_info:d.comment_info.filter(v=>v.comment.comment_info.id!==m.id)}))})}}),{mutate:j}=g({mutationFn:async o=>{o.length!==0&&await w.patch(`/api/comments/${m.id}`,{content:o}).then(()=>{p({user_info:h,current_user:l,comment_info:{...m,content:o,is_edited:!0}})})}});function x(){return S==F.length&&(S=0),F[S++]}return{commentChildren:a,commentInfo:m,userInfo:h,currentUser:l,addComment:c,deleteComment:C,updateComment:j,colorSquence:x}}function U(i){const n=Math.floor((new Date-i)/1e3);let t=Math.floor(n/31536e3);return t>1?t+" years ago":(t=Math.floor(n/2592e3),t>1?t+" months ago":(t=Math.floor(n/86400),t>1?t+" days ago":(t=Math.floor(n/3600),t>1?t+" hours ago":(t=Math.floor(n/60),t>1?t+" minutes ago":n<10?"just now":Math.floor(n)+" seconds ago"))))}k.propTypes={children:r.array,comment:r.object,threadID:r.string,commentIndex:r.number,parentDelete:r.func};function k({children:i,comment:n,threadID:t,commentIndex:f,parentDelete:a=null}){const s=y.useRef(null),[m,h]=y.useState(!1),[l,p]=y.useState(!1),[c,C]=y.useState(!1),{commentChildren:j,commentInfo:x,userInfo:o,currentUser:d,addComment:v,deleteComment:M,updateComment:A,colorSquence:I}=J({children:i,comment:n}),{isAuthenticated:R,user:b}=q(),V=U(new Date(x.created_at));function L(u){switch(u){case"delete":a?a(x.id):M(),s.current.value="more";break;case"edit":p(!0);break;case"share":navigator.clipboard.writeText(window.location.href),alert("Post Link Copied to Clipboard"),s.current.value="more";break}}return e.jsxs(T.li,{className:"py-3 pl-2 space-y-2 w-full bg-white rounded-xl md:text-base",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{duration:.25,delay:f*.15},exit:{opacity:0,y:-10,transition:{duration:.1}},children:[l?e.jsx(_,{callBackSubmit:u=>{A(u),p(!1)},callBackCancel:()=>{p(!1),s.current.value="more"},defaultValue:x.content,user:b}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center space-x-2 text-sm font-medium",children:[e.jsx("img",{src:o.user_avatar||B,alt:"",className:"w-5 h-5 rounded-full"}),e.jsx(D,{to:`/u/${o.user_name}`,children:o.user_name}),e.jsx("p",{children:V}),e.jsx("p",{children:x.is_edited&&"Edited"})]}),e.jsx("p",{className:"mr-2 ml-1 text-sm md:text-base",children:x.content})]}),e.jsxs("div",{className:"flex justify-around items-center md:justify-between md:mx-10",children:[R&&(b.username===o.user_name||b.mod_in.includes(t)||b.roles.includes("admin"))?e.jsxs("select",{defaultValue:"more",ref:s,name:"more-options",title:"More Options",id:"more-options",className:"text-sm text-center bg-white md:px-2 md:text-base",onChange:u=>L(u.target.value),children:[e.jsx("option",{value:"more",children:"More"}),e.jsx("option",{value:"share",children:"Share"}),b.username===o.user_name&&e.jsx("option",{value:"edit",children:"Edit"}),e.jsx("option",{value:"delete",children:"Delete"})]}):e.jsxs("div",{className:"flex items-center space-x-1",onClick:()=>null,children:[e.jsx(N,{type:"share",className:"w-4 h-4"}),e.jsx("p",{className:"text-sm cursor-pointer md:text-base",children:"Share"})]}),e.jsxs("div",{className:"flex items-center space-x-1",onClick:()=>h(!m),children:[e.jsx(N,{type:"comment",className:"w-4 h-4"}),e.jsx("p",{className:"text-sm cursor-pointer md:text-base",children:"Reply"})]}),e.jsxs("div",{className:`${!j.length&&"invisible"} flex items-center space-x-1`,onClick:()=>C(!c),children:[e.jsx(N,{type:"down-arrow",className:`w-4 h-4 ${c&&"rotate-180"}`}),e.jsx("p",{className:"text-sm cursor-pointer md:text-base",children:c?"Hide":"Show"})]}),e.jsx("div",{className:"flex items-center space-x-2 text-sm md:text-base",children:e.jsx(O,{url:"/api/reactions/comment",intitalVote:d==null?void 0:d.has_upvoted,initialCount:x.comment_karma,contentID:x.id,type:"mobile"})})]}),m&&e.jsx(_,{callBackSubmit:u=>{v(u),h(!1),C(!0)},callBackCancel:()=>h(!1),colorSquence:I,user:b}),e.jsx(E,{mode:"wait",children:c&&e.jsx("ul",{className:j.length>0&&c&&"border-l-2 "+I(),children:j.map((u,Q)=>e.jsx(k,{...u,commentIndex:Q,parentDelete:M},u.comment.comment_info.id))})})]})}_.propTypes={user:r.object,colorSquence:r.func,callBackSubmit:r.func,callBackCancel:r.func,defaultValue:r.string};function _({user:i,colorSquence:n,callBackSubmit:t,callBackCancel:f,defaultValue:a=null}){return e.jsxs(T.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10,transition:{duration:.15}},transition:{duration:.25},className:`mr-4 space-y-2 bg-white md:text-base ${a!==null?"":`border-l-2 ${n()} py-3 pl-2 `}`,children:[e.jsxs("div",{className:"flex items-center space-x-2 text-sm font-medium",children:[e.jsx("img",{src:i.avatar||B,alt:"",className:"w-5 h-5 rounded-full"}),e.jsx(D,{to:`/u/${i.username}`,children:i.username})]}),e.jsxs("form",{method:"post",className:"flex flex-col space-y-2",onSubmit:s=>{s.preventDefault(),t(s.target[0].value)},children:[e.jsx("textarea",{autoFocus:!0,defaultValue:a,className:"p-2 w-full text-sm rounded-md border md:text-base focus:outline-none"}),e.jsxs("div",{className:"flex self-end space-x-2",children:[e.jsx("button",{type:"submit",className:"px-2 py-1 font-bold text-white bg-blue-500 rounded-md md:px-5",children:"Submit"}),e.jsx("button",{onClick:()=>f(),className:"px-2 py-1 font-bold text-white bg-red-500 rounded-md md:px-5",children:"Cancel"})]})]})]})}function Z(){const i=P(),{user:n}=q(),{postId:t}=$(),[f,a]=y.useState(!1),{data:s,isFetching:m}=K({queryKey:["post/comment",t],queryFn:async()=>await w.get(`/api/comments/post/${t}`).then(l=>l.data)}),{mutate:h}=g({mutationFn:async l=>{await w.post("/api/comments",{post_id:t,content:l}).then(p=>{i.setQueryData({queryKey:["post/comment",t]},c=>({...c,comment_info:[...c.comment_info,p.data.new_comment]})),a(!1)})}});return m?e.jsx(H,{forPosts:!0}):e.jsxs("div",{className:"flex pb-20 md:pb-0",children:[e.jsx(G,{}),e.jsxs("div",{className:"flex flex-col p-2 space-y-2 w-full",children:[e.jsx("ul",{children:e.jsx(z,{post:s==null?void 0:s.post_info,isExpanded:!0,setCommentMode:a})}),f&&e.jsx("div",{className:"py-3 pl-2 space-y-2 w-full bg-white rounded-xl md:text-base",children:e.jsx(_,{user:n,defaultValue:"",callBackSubmit:h,callBackCancel:()=>a(!1)})}),e.jsx(e.Fragment,{children:(s==null?void 0:s.comment_info.length)>0?e.jsx("ul",{className:"space-y-2 rounded-xl md:border-2 md:p-2 hover:shadow-sm border-theme-gray-blue",children:e.jsx(E,{children:s==null?void 0:s.comment_info.map((l,p)=>e.jsx(k,{...l,commentIndex:p},l.comment.comment_info.id))})}):e.jsx("div",{children:e.jsx("p",{className:"p-5 text-sm bg-white rounded-xl border-2 md:text-base hover:shadow-sm border-theme-gray-blue",children:"This post has no comments, be the first to reply!"})})})]})]})}export{Z as FullPost,Z as default};
