import {
  P as c,
  b as B,
  a as F,
  r as h,
  h as v,
  d as w,
  A as S,
  j as e,
  m as D,
  c as T,
  i as A,
  k as E,
  S as N,
  g as V,
  e as Y,
  L as z,
} from './index-D2fKRnGh.js';
import { V as H, P as O } from './Post-tTD_BayB.js';
Comment.propTypes = { children: c.array, comment: c.object };
const q = [
  'border-yellow-400',
  'border-blue-400',
  'border-purple-400',
  'border-green-400',
  'border-sky-400',
  'border-pink-400',
];
let k = 0;
function G({ children: m, comment: s }) {
  const t = B(),
    { postId: b } = F(),
    [r, n] = h.useState(m || []),
    [{ comment_info: i, user_info: u, current_user: a }, d] = h.useState(s),
    { mutate: l } = v({
      mutationFn: async (o) => {
        o.length !== 0 &&
          (await w
            .post(
              '/api/comments',
              {
                post_id: b,
                content: o,
                has_parent: !0,
                parent_id: s.comment_info.id,
              },
              { headers: { 'Content-Type': 'application/json' } }
            )
            .then((p) => {
              n([...r, p.data.new_comment]);
            }));
      },
    }),
    { mutate: g } = v({
      mutationFn: async (o = null) => {
        window.confirm('Are you sure you want to delete this comment?') &&
          w.delete(`/api/comments/${o || i.id}`).then(() => {
            o
              ? n(r.filter((p) => p.comment.comment_info.id !== o))
              : t.setQueryData({ queryKey: ['post/comment', b] }, (p) => ({
                  ...p,
                  comment_info: p.comment_info.filter(
                    (_) => _.comment.comment_info.id !== i.id
                  ),
                }));
          });
      },
    }),
    { mutate: j } = v({
      mutationFn: async (o) => {
        o.length !== 0 &&
          (await w.patch(`/api/comments/${i.id}`, { content: o }).then(() => {
            d({
              user_info: u,
              current_user: a,
              comment_info: { ...i, content: o, is_edited: !0 },
            });
          }));
      },
    });
  function f() {
    return k == q.length && (k = 0), q[k++];
  }
  return {
    commentChildren: r,
    commentInfo: i,
    userInfo: u,
    currentUser: a,
    addComment: l,
    deleteComment: g,
    updateComment: j,
    colorSquence: f,
  };
}
function J(m) {
  const s = Math.floor((new Date() - m) / 1e3);
  let t = Math.floor(s / 31536e3);
  return t > 1
    ? t + ' years ago'
    : ((t = Math.floor(s / 2592e3)),
      t > 1
        ? t + ' months ago'
        : ((t = Math.floor(s / 86400)),
          t > 1
            ? t + ' days ago'
            : ((t = Math.floor(s / 3600)),
              t > 1
                ? t + ' hours ago'
                : ((t = Math.floor(s / 60)),
                  t > 1
                    ? t + ' minutes ago'
                    : s < 10
                      ? 'just now'
                      : Math.floor(s) + ' seconds ago'))));
}
M.propTypes = {
  children: c.array,
  comment: c.object,
  threadID: c.string,
  commentIndex: c.number,
  parentDelete: c.func,
};
function M({
  children: m,
  comment: s,
  threadID: t,
  commentIndex: b,
  parentDelete: r = null,
}) {
  const n = h.useRef(null),
    [i, u] = h.useState(!1),
    [a, d] = h.useState(!1),
    [l, g] = h.useState(!1),
    {
      commentChildren: j,
      commentInfo: f,
      userInfo: o,
      currentUser: p,
      addComment: _,
      deleteComment: P,
      updateComment: R,
      colorSquence: I,
    } = G({ children: m, comment: s }),
    { isAuthenticated: $, user: y } = S(),
    L = J(new Date(f.created_at));
  function Q(x) {
    switch (x) {
      case 'delete':
        r ? r(f.id) : P(), (n.current.value = 'more');
        break;
      case 'edit':
        d(!0);
        break;
      case 'share':
        navigator.clipboard.writeText(window.location.href),
          alert('Post Link Copied to Clipboard'),
          (n.current.value = 'more');
        break;
    }
  }
  return e.jsxs(D.li, {
    className: `py-3 pl-2 space-y-2 w-full bg-white rounded-xl md:text-base ${!r && 'border'}`,
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, delay: b * 0.15 },
    exit: { opacity: 0, y: -10, transition: { duration: 0.1 } },
    children: [
      a
        ? e.jsx(C, {
            callBackSubmit: (x) => {
              R(x), d(!1), (n.current.value = 'more');
            },
            callBackCancel: () => {
              d(!1), (n.current.value = 'more');
            },
            defaultValue: f.content,
            user: y,
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsxs('div', {
                className: 'flex items-center space-x-2 text-sm font-medium',
                children: [
                  e.jsx('img', {
                    loading: 'lazy',
                    width: 'auto',
                    height: '100%',
                    src: o.user_avatar || T,
                    alt: '',
                    className: 'object-cover w-5 h-5 rounded-full',
                  }),
                  e.jsx(A, {
                    to: `/u/${o.user_name}`,
                    className: 'font-medium text-blue-600 hover:underline',
                    children: o.user_name,
                  }),
                  e.jsx('p', { children: L }),
                  e.jsx('p', { children: f.is_edited && 'Edited' }),
                ],
              }),
              e.jsx('div', {
                className:
                  'max-w-full text-black prose prose-sm md:prose-base prose-blue',
                children: e.jsx(E, {
                  className: '[&>*:first-child]:mt-0',
                  children: f.content,
                }),
              }),
            ],
          }),
      e.jsxs('div', {
        className:
          'flex justify-around items-center md:justify-between md:mx-10',
        children: [
          $ &&
          (y.username === o.user_name ||
            y.mod_in.includes(t) ||
            y.roles.includes('admin'))
            ? e.jsxs('select', {
                defaultValue: 'more',
                ref: n,
                name: 'more-options',
                title: 'More Options',
                id: 'more-options',
                className: 'text-sm bg-white md:px-2 md:text-base',
                onChange: (x) => Q(x.target.value),
                children: [
                  e.jsx('option', { value: 'more', children: 'More' }),
                  e.jsx('option', { value: 'share', children: 'Share' }),
                  y.username === o.user_name &&
                    e.jsx('option', { value: 'edit', children: 'Edit' }),
                  e.jsx('option', { value: 'delete', children: 'Delete' }),
                ],
              })
            : e.jsxs('div', {
                className: 'flex items-center space-x-1',
                onClick: () => null,
                children: [
                  e.jsx(N, { type: 'share', className: 'w-4 h-4' }),
                  e.jsx('p', {
                    className: 'text-sm cursor-pointer md:text-base',
                    children: 'Share',
                  }),
                ],
              }),
          e.jsxs('div', {
            className: 'flex items-center space-x-1',
            onClick: () => {
              $ ? u(!i) : alert('You need to be logged in.');
            },
            children: [
              e.jsx(N, { type: 'comment', className: 'w-4 h-4' }),
              e.jsx('p', {
                className: 'text-sm cursor-pointer md:text-base',
                children: 'Reply',
              }),
            ],
          }),
          e.jsxs('div', {
            className: `${!j.length && 'invisible'} flex items-center space-x-1`,
            onClick: () => g(!l),
            children: [
              e.jsx(N, {
                type: 'down-arrow',
                className: `w-4 h-4 ${l && 'rotate-180'}`,
              }),
              e.jsx('p', {
                className: 'text-sm cursor-pointer md:text-base',
                children: l ? 'Hide' : 'Show',
              }),
            ],
          }),
          e.jsx('div', {
            className: 'flex items-center space-x-2 text-sm md:text-base',
            children: e.jsx(H, {
              url: '/api/reactions/comment',
              intitalVote: p == null ? void 0 : p.has_upvoted,
              initialCount: f.comment_karma,
              contentID: f.id,
              type: 'mobile',
            }),
          }),
        ],
      }),
      i &&
        e.jsx(C, {
          callBackSubmit: (x) => {
            (n.current.value = 'more'), _(x), u(!1), g(!0);
          },
          callBackCancel: () => {
            u(!1), (n.current.value = 'more');
          },
          colorSquence: I,
          user: y,
        }),
      e.jsx(V, {
        mode: 'wait',
        children:
          l &&
          e.jsx('ul', {
            className: j.length > 0 && l && 'border-l-2 ' + I(),
            children: j.map((x, K) =>
              e.jsx(
                M,
                { ...x, commentIndex: K, parentDelete: P },
                x.comment.comment_info.id
              )
            ),
          }),
      }),
    ],
  });
}
C.propTypes = {
  user: c.object,
  colorSquence: c.func,
  callBackSubmit: c.func,
  callBackCancel: c.func,
  defaultValue: c.string,
};
function C({
  user: m,
  colorSquence: s,
  callBackSubmit: t,
  callBackCancel: b,
  defaultValue: r = null,
}) {
  const { isAuthenticated: n } = S(),
    [i, u] = h.useState(!1),
    [a, d] = h.useState(r || '');
  return e.jsxs(D.div, {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
    transition: { duration: 0.25 },
    className: `mr-4 space-y-2 bg-white md:text-base ${r !== null ? '' : `border-l-2 ${s()} py-3 pl-2 `}`,
    children: [
      e.jsxs('div', {
        className: 'flex items-center space-x-2 text-sm font-medium',
        children: [
          e.jsx('img', {
            src: m.avatar || T,
            alt: '',
            className: 'object-cover w-5 h-5 rounded-full',
          }),
          e.jsx(A, { to: `/u/${m.username}`, children: m.username }),
        ],
      }),
      e.jsxs('form', {
        method: 'post',
        className: 'flex flex-col space-y-2',
        onSubmit: (l) => {
          l.preventDefault(), n ? t(a) : alert('You need to be logged in.');
        },
        children: [
          i
            ? e.jsx('div', {
                className:
                  'overflow-auto p-2 max-w-full h-24 rounded-md border prose',
                children: e.jsx(E, {
                  options: { forceBlock: !0 },
                  children:
                    a.replace(
                      `
`,
                      `<br />
`
                    ) || 'This is markdown preview',
                }),
              })
            : e.jsx('textarea', {
                autoFocus: !0,
                defaultValue: a,
                onChange: (l) => d(l.target.value),
                className:
                  'p-2 w-full h-24 text-sm rounded-md border md:text-base focus:outline-none',
              }),
          e.jsxs('div', {
            className: 'flex self-end space-x-2',
            children: [
              e.jsx('button', {
                type: 'submit',
                className:
                  'px-2 py-1 font-bold text-white bg-blue-600 rounded-md md:px-5',
                children: 'Submit',
              }),
              e.jsx('button', {
                onClick: () => u(!i),
                type: 'button',
                className:
                  'px-2 py-1 font-bold text-white bg-green-600 rounded-md md:px-5',
                children: i ? 'Close Preview' : 'Preview',
              }),
              e.jsx('button', {
                onClick: () => b(),
                className:
                  'px-2 py-1 font-bold text-white bg-red-600 rounded-md md:px-5',
                children: 'Cancel',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function X() {
  const m = B(),
    { user: s } = S(),
    { postId: t } = F(),
    [b, r] = h.useState(!1),
    { data: n, isFetching: i } = Y({
      queryKey: ['post/comment', t],
      queryFn: async () =>
        await w.get(`/api/comments/post/${t}`).then((a) => a.data),
    }),
    { mutate: u } = v({
      mutationFn: async (a) => {
        await w.post('/api/comments', { post_id: t, content: a }).then((d) => {
          m.setQueryData({ queryKey: ['post/comment', t] }, (l) => ({
            ...l,
            comment_info: [...l.comment_info, d.data.new_comment],
          })),
            r(!1);
        });
      },
    });
  return i
    ? e.jsx('div', {
        className: 'flex flex-col justify-center items-center w-full h-screen',
        children: e.jsx(z, { forPosts: !0 }),
      })
    : e.jsxs('div', {
        className: 'flex flex-col p-2 space-y-2 w-full',
        children: [
          e.jsx('ul', {
            children: e.jsx(O, {
              post: n == null ? void 0 : n.post_info,
              isExpanded: !0,
              setCommentMode: r,
            }),
          }),
          b &&
            e.jsx('div', {
              className:
                'py-3 pl-2 space-y-2 w-full bg-white rounded-xl md:text-base',
              children: e.jsx(C, {
                user: s,
                defaultValue: '',
                callBackSubmit: u,
                callBackCancel: () => r(!1),
              }),
            }),
          (n == null ? void 0 : n.comment_info.length) > 0
            ? e.jsx('ul', {
                className:
                  'space-y-2 rounded-xl md:border-2 md:p-2 hover:shadow-sm border-theme-gray-blue',
                children: e.jsx(V, {
                  children:
                    n == null
                      ? void 0
                      : n.comment_info.map((a, d) =>
                          e.jsx(
                            M,
                            { ...a, commentIndex: d },
                            a.comment.comment_info.id
                          )
                        ),
                }),
              })
            : e.jsx('div', {
                children: e.jsx('p', {
                  className:
                    'p-5 text-sm bg-white rounded-xl border-2 md:text-base hover:shadow-sm border-theme-gray-blue',
                  children: 'This post has no comments, be the first to reply!',
                }),
              }),
        ],
      });
}
export { X as FullPost, X as default };
