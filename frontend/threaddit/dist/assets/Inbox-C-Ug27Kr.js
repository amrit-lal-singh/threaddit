import {
  r as o,
  e as w,
  j as e,
  c as x,
  S as h,
  m as p,
  g as $,
  P as r,
  b as k,
  A as q,
  d as f,
  h as S,
  i as T,
  L as I,
} from './index-D2fKRnGh.js';
function E() {
  const [t, l] = o.useState(!1),
    { data: a } = w({
      queryKey: ['inbox'],
      queryFn: async () =>
        await f.get('/api/messages/inbox').then((s) => s.data),
    });
  return (
    o.useEffect(
      () => (
        t
          ? (document.title = `Inbox | ${t.username}`)
          : (document.title = 'Threaddit | Inbox'),
        () => {
          document.title = 'Threaddit';
        }
      )
    ),
    e.jsxs('div', {
      className: 'flex flex-1',
      children: [
        !t &&
          e.jsxs('ul', {
            className:
              'md:hidden p-4 m-2.5 space-y-2 list-none bg-white rounded-md w-full',
            children: [
              e.jsx('div', {
                className: 'flex justify-between items-center py-3 border-b-2',
                children: e.jsx('h1', {
                  className: 'text-2xl font-semibold text-blue-600',
                  children: 'Messages',
                }),
              }),
              a == null
                ? void 0
                : a.map((s) =>
                    e.jsxs(
                      'li',
                      {
                        className: `w-full flex items-center p-3 space-x-2 rounded-xl cursor-pointer ${t.username === s.sender.username ? 'bg-blue-200' : 'hover:bg-blue-200'}`,
                        onClick: () => l(s.sender),
                        children: [
                          e.jsx('img', {
                            src: s.sender.avatar || x,
                            className: 'object-cover w-14 h-14 rounded-full',
                            alt: '',
                          }),
                          e.jsxs('div', {
                            className: 'flex flex-col space-y-1 w-full',
                            children: [
                              e.jsxs('div', {
                                className:
                                  'flex justify-between items-center w-full',
                                children: [
                                  e.jsx('p', {
                                    className: 'font-medium',
                                    children: s.sender.username,
                                  }),
                                  !s.latest_from_user &&
                                    !s.seen &&
                                    e.jsx(h, {
                                      type: 'mail',
                                      className: 'w-4 h-4 text-theme-orange',
                                    }),
                                ],
                              }),
                              e.jsxs('p', {
                                className: 'text-sm',
                                children: [
                                  s.latest_from_user
                                    ? 'You: '
                                    : `${s.receiver.username}: `,
                                  s.content.slice(0, 15),
                                  s.content.length > 15 ? '...' : '',
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      s.message_id
                    )
                  ),
            ],
          }),
        e.jsxs('ul', {
          className:
            'hidden md:block p-4 w-1/5 m-2.5 space-y-2 list-none bg-white rounded-md',
          children: [
            e.jsx('div', {
              className: 'flex justify-between items-center py-3 border-b-2',
              children: e.jsx('h1', {
                className: 'text-2xl font-semibold text-blue-600',
                children: 'Messages',
              }),
            }),
            a == null
              ? void 0
              : a.map((s, u) =>
                  e.jsxs(
                    p.li,
                    {
                      initial: { opacity: 0, x: -100 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.25, delay: u * 0.25 },
                      className: `flex items-center w-full p-3 space-x-2 rounded-xl cursor-pointer ${t.username === s.sender.username ? 'bg-blue-200' : 'hover:bg-blue-200'}`,
                      onClick: () => l(s.sender),
                      children: [
                        e.jsx('img', {
                          src: s.sender.avatar || x,
                          className: 'object-cover w-14 h-14 rounded-full',
                          alt: '',
                        }),
                        e.jsxs('div', {
                          className: 'flex flex-col space-y-1 w-full',
                          children: [
                            e.jsxs('div', {
                              className:
                                'flex justify-between items-center w-full',
                              children: [
                                e.jsx('p', {
                                  className: 'font-medium',
                                  children: s.sender.username,
                                }),
                                !s.latest_from_user &&
                                  !s.seen &&
                                  e.jsx(h, {
                                    type: 'mail',
                                    className: 'w-4 h-4 text-theme-orange',
                                  }),
                              ],
                            }),
                            e.jsxs('p', {
                              className: 'text-sm',
                              children: [
                                s.latest_from_user
                                  ? 'You: '
                                  : `${s.receiver.username}: `,
                                s.content.slice(0, 15),
                                s.content.length > 15 ? '...' : '',
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    s.message_id
                  )
                ),
          ],
        }),
        e.jsx($, {
          children:
            t &&
            e.jsx('div', {
              className: `flex-1 m-2.5 bg-white rounded-md ${!t && 'flex justify-center items-center'}`,
              children: e.jsx(N, { sender: t, setCurChat: l }),
            }),
        }),
      ],
    })
  );
}
N.propTypes = {
  sender: r.shape({ avatar: r.string, name: r.string, username: r.string }),
  setCurChat: r.func,
  newChat: r.bool,
};
function N({ sender: t, setCurChat: l, newChat: a = !1 }) {
  const s = o.useRef(null),
    u = k(),
    { user: C } = q(),
    [m, b] = o.useState(''),
    { data: c, isFetching: j } = w({
      queryKey: ['chat', t.username],
      queryFn: async () =>
        await f.get(`/api/messages/all/${t.username}`).then((n) => n.data),
      enabled: t.username !== void 0,
    }),
    { mutate: y } = S({
      mutationFn: async (n) =>
        await f
          .post('/api/messages', {
            content: n.message,
            receiver: n.sender.username,
          })
          .then((i) => i.data),
      onSuccess: (n) => {
        b(''),
          u.setQueryData({ queryKey: ['chat', t.username] }, (i) => [...i, n]),
          u.setQueryData({ queryKey: ['inbox'] }, (i) =>
            i.map((d) =>
              d.sender == t
                ? {
                    ...d,
                    content: n.content,
                    created_at: n.created_a,
                    message_id: n.message_id,
                  }
                : d
            )
          );
      },
    });
  o.useEffect(() => {
    var n;
    (n = s.current) == null || n.scrollIntoView({ behavior: 'smooth' });
  }, [j]);
  const v = (c == null ? void 0 : c.length) - 10,
    _ = { hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 } };
  return e.jsxs(p.div, {
    className: `flex flex-col justify-between w-full ${a && 'bg-white w-10/12 md:w-1/2'}`,
    variants: _,
    initial: 'hidden',
    animate: 'visible',
    transition: { duration: 0.25 },
    exit: { opacity: 0, x: 10, transition: { duration: 0.1 } },
    children: [
      e.jsxs('div', {
        className: 'flex justify-between items-center p-3 mx-2 border-b-2',
        children: [
          e.jsxs('div', {
            className: 'flex items-center space-x-4',
            children: [
              e.jsx('img', {
                src: t.avatar || x,
                alt: '',
                className: 'object-cover w-14 h-14 rounded-full',
              }),
              e.jsx(T, {
                to: `/u/${t.username}`,
                className: 'text-xl font-semibold text-blue-500',
                children: t.username,
              }),
            ],
          }),
          e.jsx('button', {
            onClick: () => l(!1),
            className:
              'justify-self-end p-2 ml-auto text-white bg-blue-600 rounded-md',
            children: 'Close',
          }),
        ],
      }),
      j
        ? e.jsx('div', {
            className: `${a ? 'h-[20vh]' : 'md:h-[61vh] h-[70vh]'} flex justify-center items-center`,
            children: e.jsx(I, { forPosts: !0 }),
          })
        : e.jsxs('ul', {
            className:
              'p-3 space-y-3 rounded-md overflow-auto md:h-[61vh] h-[70vh]',
            children: [
              c == null
                ? void 0
                : c.map((n, i) =>
                    e.jsx(
                      g,
                      {
                        message: n,
                        messageIndex: i < v ? 0 : i - v,
                        toUser: n.sender.username == C.username,
                      },
                      n.message_id
                    )
                  ),
              e.jsx(
                'li',
                { className: 'invisible', ref: s },
                'scrollToElement'
              ),
            ],
          }),
      e.jsxs('form', {
        onSubmit: (n) => {
          n.preventDefault(), y({ message: m, sender: t });
        },
        className: 'flex justify-between items-center p-4 w-full bg-blue-200',
        children: [
          e.jsx('input', {
            type: 'text',
            className:
              'p-2 px-4 mx-3 w-full font-medium rounded-full focus:outline-none',
            placeholder: 'Type a message',
            value: m,
            onChange: (n) => b(n.target.value),
          }),
          e.jsx(h, {
            onClick: () => y({ message: m, sender: t }),
            type: 'send',
            className: 'w-8 h-8 text-white bg-inherit',
          }),
        ],
      }),
    ],
  });
}
g.propTypes = { message: r.object, toUser: r.bool, messageIndex: r.number };
function g({ message: t, toUser: l, messageIndex: a }) {
  const s = new Date(t.created_at);
  return e.jsxs(p.li, {
    initial: { opacity: 0, x: l ? 100 : -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.25, delay: a * 0.1 },
    className: ` pl-2 py-1 w-fit rounded-md ${t.seen ? 'bg-green-100' : 'bg-blue-100'} ${l ? 'ml-auto pr-2' : 'pr-10'}`,
    children: [
      e.jsx('p', {
        className: `break-all pt-1 font-medium ${l && 'pl-1'}`,
        children: t.content,
      }),
      e.jsx('p', {
        className: `mt-0.5 text-xs font-light ${l && 'text-right'}`,
        children: s.toLocaleString(),
      }),
    ],
  });
}
export { N as Chat, E as Inbox, E as default };
