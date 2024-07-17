import {
  P as j,
  r as m,
  e as N,
  d as u,
  f as g,
  h as v,
  j as s,
  S as y,
  L as w,
  u as $,
  b as C,
  a as S,
  A as k,
  g as L,
  M as F,
  N as P,
} from './index-D2fKRnGh.js';
import { I as q } from './InfinitePosts-BQNrSM-b.js';
import './Post-tTD_BayB.js';
M.propTypes = { mods: j.array, threadId: j.number };
function M({ mods: x, threadId: p }) {
  const [a, l] = m.useState(x),
    [c, r] = m.useState(''),
    { data: i, isFetching: h } = N({
      queryKey: ['search/user', c],
      queryFn: async ({ signal: t }) =>
        await u.get(`/api/user/search/${c}`, { signal: t }).then((e) => e.data),
      enabled: c.length > 3,
    });
  m.useEffect(() => (g.setFocused(!1), () => g.setFocused(!0)), []);
  const { mutate: d } = v({
    mutationFn: async ({ username: t, isDelete: e = !1 }) =>
      e
        ? await u
            .delete(`/api/thread/mod/${p}/${t}`)
            .then((o) => (l(a.filter((f) => f !== t)), o.data))
            .catch((o) => {
              alert(
                `${o.message} - ${o.response.data.message}, Only admins can remove thread creator`
              );
            })
        : await u
            .put(`/api/thread/mod/${p}/${t}`)
            .then((o) => (l([...a, t]), o.data)),
  });
  return s.jsxs('div', {
    className: 'w-5/6 h-5/6 bg-white rounded-md',
    children: [
      s.jsx('h1', {
        className: 'pt-2 text-2xl font-semibold text-center text-theme-orange',
        children: 'ModList',
      }),
      s.jsx('ul', {
        className:
          'overflow-auto relative p-3 m-3 space-y-2 max-h-[40vh] list-none bg-theme-cultured',
        children: a.map((t) =>
          s.jsxs(
            'li',
            {
              className:
                'flex justify-between items-center p-1 bg-white rounded-md cursor-pointer',
              onClick: () => d({ username: t, isDelete: !0 }),
              children: [
                t,
                s.jsx(y, {
                  type: 'delete',
                  className: 'w-8 h-8 font-bold text-theme-orange',
                }),
              ],
            },
            t
          )
        ),
      }),
      s.jsxs('div', {
        className: 'flex flex-col',
        children: [
          s.jsx('input', {
            type: 'text',
            name: 'username',
            id: 'username',
            value: c,
            onChange: (t) => r(t.target.value),
            className: 'p-2 mx-3 font-semibold border-2 md:mx-10',
            placeholder: 'Enter username to add new mod',
          }),
          h
            ? s.jsx('div', {
                className: 'm-28',
                children: s.jsx(w, { forPosts: !0 }),
              })
            : i &&
              s.jsx('ul', {
                className:
                  'overflow-auto relative p-4 m-3 space-y-2 md:max-h-[38vh] max-h-[45vh] list-none rounded-md bg-theme-cultured',
                children:
                  i == null
                    ? void 0
                    : i.map(
                        (t) =>
                          !a.includes(t.username) &&
                          s.jsxs(
                            'li',
                            {
                              className:
                                'flex justify-between items-center p-1 px-2 bg-white rounded-md cursor-pointer',
                              onClick: () => d({ username: t.username }),
                              children: [
                                t.username,
                                s.jsx(y, {
                                  type: 'add',
                                  className:
                                    'w-8 h-8 font-bold text-theme-orange',
                                }),
                              ],
                            },
                            t.username
                          )
                      ),
              }),
        ],
      }),
    ],
  });
}
function Q() {
  const x = m.useRef(),
    p = $(),
    [a, l] = m.useState(!1),
    c = C(),
    r = S(),
    { isAuthenticated: i, user: h } = k(),
    { data: d, isFetching: t } = N({
      queryKey: ['thread', r.threadName],
      queryFn: async () =>
        await u.get(`/api/threads/${r.threadName}`).then((n) => n.data),
    });
  m.useEffect(
    () => (
      (document.title = 't/' + r.threadName),
      () => {
        document.title = 'Threaddit';
      }
    ),
    [r.threadName]
  );
  const e = d == null ? void 0 : d.threadData,
    { mutate: o } = v({
      mutationFn: async (n) => {
        n
          ? u
              .delete(`/api/threads/subscription/${e.id}`)
              .then(() =>
                c.setQueryData({ queryKey: ['thread', r.threadName] }, (b) => ({
                  threadData: { ...b.threadData, has_subscribed: !1 },
                }))
              )
          : u
              .post(`/api/threads/subscription/${e.id}`)
              .then(() =>
                c.setQueryData({ queryKey: ['thread', r.threadName] }, (b) => ({
                  threadData: { ...b.threadData, has_subscribed: !0 },
                }))
              );
      },
    });
  function f(n) {
    switch (n) {
      case 'more':
        break;
      case 'edit':
        l(s.jsx(P, { ogInfo: e, edit: !0, setShowModal: l }));
        break;
      case 'manage-mods':
        l(s.jsx(M, { mods: e.modList || [], threadId: e.id }));
        break;
      case 'logo':
        l(
          s.jsx('img', {
            src: e == null ? void 0 : e.logo,
            className:
              'object-cover w-11/12 max-h-5/6 md:w-max md:max-h-screen',
            alt: '',
          })
        );
        break;
      default:
        p(`/u/${n}`);
    }
    x.current.value = 'more';
  }
  return s.jsxs('div', {
    className: 'flex flex-col flex-1 items-center w-full bg-theme-cultured',
    children: [
      s.jsxs('div', {
        className:
          'flex flex-col p-5 space-y-1 w-full bg-white rounded-md md:pb-3 md:space-y-3',
        children: [
          t
            ? s.jsx(w, { forPosts: !0 })
            : s.jsxs('div', {
                className: `flex p-2 flex-col md:flex-row items-center rounded-md md:rounded-full bg-theme-cultured ${!(e != null && e.logo) && 'py-5'}`,
                children: [
                  (e == null ? void 0 : e.logo) &&
                    s.jsx('img', {
                      src: e == null ? void 0 : e.logo,
                      className:
                        'object-cover w-32 h-32 rounded-full cursor-pointer md:w-36 md:h-36',
                      alt: '',
                      onClick: () => f('logo'),
                    }),
                  s.jsxs('div', {
                    className:
                      'flex flex-col flex-1 justify-around items-center p-2 space-y-1',
                    children: [
                      s.jsx('div', {
                        className: 'flex items-center space-x-5',
                        children: s.jsx('h1', {
                          className: 'text-xl font-semibold',
                          children: e == null ? void 0 : e.name,
                        }),
                      }),
                      s.jsxs('p', {
                        className: 'text-xs',
                        children: [
                          'Since: ',
                          new Date(
                            e == null ? void 0 : e.created_at
                          ).toDateString(),
                        ],
                      }),
                      (e == null ? void 0 : e.description) &&
                        s.jsxs('p', {
                          className: `text-center py-4 md:py-2 text-sm ${(e == null ? void 0 : e.description.length) > 90 && 'text-xs'}`,
                          children: [
                            e == null ? void 0 : e.description,
                            (e == null ? void 0 : e.description.length) > 90 &&
                              '...',
                          ],
                        }),
                      s.jsxs('div', {
                        className:
                          'flex justify-between mt-2 space-x-7 w-full md:w-11/12',
                        children: [
                          s.jsxs('p', {
                            className: 'text-sm',
                            children: [
                              e == null ? void 0 : e.subscriberCount,
                              ' subscribers',
                            ],
                          }),
                          s.jsxs('p', {
                            className: 'text-sm',
                            children: [
                              e == null ? void 0 : e.PostsCount,
                              ' posts',
                            ],
                          }),
                          s.jsxs('p', {
                            className: 'text-sm',
                            children: [
                              e == null ? void 0 : e.CommentsCount,
                              ' comments',
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          s.jsxs('div', {
            className:
              'flex flex-col justify-around space-y-3 md:space-x-10 md:flex-row md:space-y-0',
            children: [
              i &&
                s.jsx('button', {
                  className: `px-32 py-2 text-white rounded-full active:scale-90 ${e != null && e.has_subscribed ? 'bg-blue-400' : 'bg-theme-red-coral'} `,
                  onClick: () => o(e == null ? void 0 : e.has_subscribed),
                  children: e != null && e.has_subscribed ? 'Leave' : 'Join',
                }),
              s.jsxs('select', {
                ref: x,
                defaultValue: 'more',
                onChange: (n) => f(n.target.value),
                name: 'mods',
                id: 'mods',
                className:
                  'px-10 py-2 text-center rounded-md md:block bg-theme-cultured',
                children: [
                  s.jsx('option', { value: 'more', children: 'More' }),
                  i &&
                    (h.mod_in.includes(e == null ? void 0 : e.id) ||
                      h.roles.includes('admin')) &&
                    s.jsxs('optgroup', {
                      label: 'Subthread Options',
                      children: [
                        s.jsx('option', {
                          value: 'edit',
                          children: 'Edit Subthread',
                        }),
                        s.jsx('option', {
                          value: 'manage-mods',
                          children: 'Manage Mods',
                        }),
                      ],
                    }),
                  s.jsx('optgroup', {
                    label: 'ModList',
                    children:
                      e == null
                        ? void 0
                        : e.modList.map((n) =>
                            s.jsx('option', { value: n, children: n }, n)
                          ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsx(q, {
        apiQueryKey: e == null ? void 0 : e.name,
        linkUrl: `posts/thread/${e == null ? void 0 : e.id}`,
        enabled: e !== void 0,
      }),
      s.jsx(L, { children: a && s.jsx(F, { setShowModal: l, children: a }) }),
    ],
  });
}
export { Q as SubThread, Q as default };
