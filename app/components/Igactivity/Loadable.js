/**
 *
 * Asynchronously loads the component for Igactivity
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
