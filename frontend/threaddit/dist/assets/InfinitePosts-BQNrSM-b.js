import {
  Q as j,
  l as v,
  n as N,
  o as w,
  p as k,
  q as C,
  r as $,
  j as e,
  L as E,
  m as R,
  g as M,
  P as b,
  d as B,
} from './index-D2fKRnGh.js';
import { P as F } from './Post-tTD_BayB.js';
var O = class extends j {
  constructor(r, a) {
    super(r, a);
  }
  bindMethods() {
    super.bindMethods(),
      (this.fetchNextPage = this.fetchNextPage.bind(this)),
      (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
  }
  setOptions(r, a) {
    super.setOptions({ ...r, behavior: v() }, a);
  }
  getOptimisticResult(r) {
    return (r.behavior = v()), super.getOptimisticResult(r);
  }
  fetchNextPage(r) {
    return this.fetch({ ...r, meta: { fetchMore: { direction: 'forward' } } });
  }
  fetchPreviousPage(r) {
    return this.fetch({ ...r, meta: { fetchMore: { direction: 'backward' } } });
  }
  createResult(r, a) {
    var t, i;
    const { state: d } = r,
      x = super.createResult(r, a),
      { isFetching: n, isRefetching: p, isError: o, isRefetchError: l } = x,
      s =
        (i = (t = d.fetchMeta) == null ? void 0 : t.fetchMore) == null
          ? void 0
          : i.direction,
      h = o && s === 'forward',
      u = n && s === 'forward',
      m = o && s === 'backward',
      c = n && s === 'backward';
    return {
      ...x,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: N(a, d.data),
      hasPreviousPage: w(a, d.data),
      isFetchNextPageError: h,
      isFetchingNextPage: u,
      isFetchPreviousPageError: m,
      isFetchingPreviousPage: c,
      isRefetchError: l && !h && !m,
      isRefetching: p && !u && !c,
    };
  }
};
function Q(r, a) {
  return k(r, O);
}
T.propTypes = {
  linkUrl: b.string,
  apiQueryKey: b.string,
  forSaved: b.bool,
  enabled: b.bool,
};
function T({ linkUrl: r, apiQueryKey: a, forSaved: d = !1, enabled: x = !0 }) {
  const [n, p] = C(),
    o = n.get('sortBy') || 'top',
    l = n.get('duration') || 'alltime',
    {
      data: s,
      isFetching: h,
      hasNextPage: u,
      fetchNextPage: m,
    } = Q({
      queryKey: ['posts', a, o, l],
      queryFn: async ({ pageParam: t = 0 }) =>
        await B.get(
          `/api/${r}?limit=20&offset=${t * 20}&sortby=${o}&duration=${l}`
        ).then((i) => i.data),
      enabled: x,
      getNextPageParam: (t, i) => {
        if (!(t.length < 20)) return i.length;
      },
    });
  $.useEffect(() => {
    const t = (i) => {
      const {
        scrollTop: f,
        scrollHeight: y,
        clientHeight: P,
      } = i.target.scrollingElement;
      y - f <= P * 2 && u && !h && m();
    };
    return (
      window.addEventListener('scroll', t),
      () => {
        window.removeEventListener('scroll', t);
      }
    );
  }, [m, h, u]);
  function c(t) {
    n.set('duration', t), p(n, { replace: !0 });
  }
  function g(t) {
    n.set('sortBy', t), p(n, { replace: !0 });
  }
  return e.jsxs('div', {
    id: 'main-content',
    className:
      'flex w-full flex-col flex-1 p-2 space-y-3 rounded-lg m-0.5 bg-theme-cultured md:bg-white md:m-3',
    children: [
      !d &&
        e.jsxs('header', {
          className: 'flex justify-between items-center',
          children: [
            e.jsxs('div', {
              className: 'flex items-center space-x-2 md:hidden',
              children: [
                e.jsx('span', { children: 'Sort by' }),
                e.jsxs('select', {
                  name: 'sort',
                  id: 'sort',
                  className:
                    'p-2 px-4 bg-white rounded-md md:bg-theme-cultured',
                  onChange: (t) => g(t.target.value),
                  value: o,
                  children: [
                    e.jsx('option', { value: 'top', children: 'Top' }),
                    e.jsx('option', { value: 'hot', children: 'Hot' }),
                    e.jsx('option', { value: 'new', children: 'New' }),
                  ],
                }),
              ],
            }),
            e.jsxs('div', {
              className: 'flex items-center space-x-2 md:hidden',
              children: [
                e.jsx('span', { children: 'Of' }),
                e.jsxs('select', {
                  name: 'duration',
                  id: 'duration',
                  className:
                    'p-2 px-4 bg-white rounded-md md:bg-theme-cultured',
                  onChange: (t) => c(t.target.value),
                  value: l,
                  children: [
                    e.jsx('option', { value: 'day', children: 'Day' }),
                    e.jsx('option', { value: 'week', children: 'Week' }),
                    e.jsx('option', { value: 'month', children: 'Month' }),
                    e.jsx('option', { value: 'year', children: 'Year' }),
                    e.jsx('option', { value: 'alltime', children: 'All Time' }),
                  ],
                }),
              ],
            }),
            e.jsxs('ul', {
              className: 'hidden space-x-2 list-none md:flex',
              children: [
                e.jsx('li', {
                  className: `p-2 hover:bg-theme-gray-blue rounded-md px-4 text-lg cursor-pointer ${l === 'day' && 'bg-theme-gray-blue'}`,
                  onClick: () => c('day'),
                  children: 'Today',
                }),
                e.jsx('li', {
                  className: `p-2 hover:bg-theme-gray-blue rounded-md px-4 text-lg cursor-pointer ${l === 'week' && 'bg-theme-gray-blue'}`,
                  onClick: () => c('week'),
                  children: 'Week',
                }),
                e.jsx('li', {
                  className: `p-2 hover:bg-theme-gray-blue rounded-md px-4 text-lg cursor-pointer ${l === 'month' && 'bg-theme-gray-blue'}`,
                  onClick: () => c('month'),
                  children: 'Month',
                }),
                e.jsx('li', {
                  className: `p-2 hover:bg-theme-gray-blue rounded-md px-4 text-lg cursor-pointer ${l === 'alltime' && 'bg-theme-gray-blue'}`,
                  onClick: () => c('alltime'),
                  children: 'All',
                }),
              ],
            }),
            e.jsxs('ul', {
              className: 'hidden mr-5 space-x-5 list-none md:flex',
              children: [
                e.jsx('li', {
                  className: `p-2 hover:bg-theme-gray-blue rounded-md px-4 text-lg cursor-pointer ${o === 'hot' && 'bg-theme-gray-blue'}`,
                  onClick: () => g('hot'),
                  children: 'Hot',
                }),
                e.jsx('li', {
                  className: `p-2 hover:bg-theme-gray-blue rounded-md px-4 text-lg cursor-pointer ${o === 'new' && 'bg-theme-gray-blue'}`,
                  onClick: () => g('new'),
                  children: 'New',
                }),
                e.jsx('li', {
                  className: `p-2 hover:bg-theme-gray-blue rounded-md px-4 text-lg cursor-pointer ${o === 'top' && 'bg-theme-gray-blue'}`,
                  onClick: () => g('top'),
                  children: 'Top',
                }),
              ],
            }),
          ],
        }),
      h && e.jsx(E, { forPosts: !0 }),
      (s == null ? void 0 : s.pages[0].length) === 0
        ? e.jsx(R.div, {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.25 },
            children: e.jsxs('p', {
              className:
                'p-5 bg-white rounded-xl border-2 md:text-base hover:shadow-sm border-theme-gray-blue',
              children: [
                'No posts with this filter were found, ',
                e.jsx('br', { className: 'md:hidden' }),
                'Be the first to add one!',
              ],
            }),
          })
        : e.jsx('div', {
            className: 'flex flex-col space-y-2 md:space-y-3',
            children:
              s == null
                ? void 0
                : s.pages.map((t, i) =>
                    e.jsx(
                      'ul',
                      {
                        className: 'flex flex-col space-y-2 md:space-y-3',
                        children: e.jsx(M, {
                          initial: i == 0,
                          children:
                            t == null
                              ? void 0
                              : t.map((f, y) =>
                                  e.jsx(
                                    F,
                                    { post: f, postIndex: y },
                                    f.post_info.id
                                  )
                                ),
                        }),
                      },
                      i
                    )
                  ),
          }),
    ],
  });
}
export { T as I };
