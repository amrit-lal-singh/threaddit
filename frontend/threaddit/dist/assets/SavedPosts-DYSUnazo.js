import { r as t, j as e } from './index-D2fKRnGh.js';
import { I as r } from './InfinitePosts-BQNrSM-b.js';
import './Post-tTD_BayB.js';
function o() {
  return (
    t.useEffect(
      () => (
        (document.title = 'Threaddit | saved'),
        () => {
          document.title = 'Threaddit';
        }
      )
    ),
    e.jsx('div', {
      className: 'flex items-center p-2 w-full',
      children: e.jsx(r, {
        apiQueryKey: 'saved',
        linkUrl: 'posts/saved',
        forSaved: !0,
      }),
    })
  );
}
export { o as default };