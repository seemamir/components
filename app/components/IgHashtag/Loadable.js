/**
 *
 * Asynchronously loads the component for IgHashtag
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
