import { A as a, u as o, a as r, r as i, j as n } from './index-D2fKRnGh.js';
import { I as u } from './InfinitePosts-BQNrSM-b.js';
import './Post-tTD_BayB.js';
function p() {
  const { isAuthenticated: e } = a(),
    s = o(),
    { feedName: t } = r();
  return t == 'home' && !e
    ? s('/login')
    : (i.useEffect(() => {
        document.title = `Threaddit | ${t}`;
      }, [t]),
      n.jsx(u, { linkUrl: `posts/${t || 'all'}`, apiQueryKey: t }));
}
export { p as Feed, p as default };