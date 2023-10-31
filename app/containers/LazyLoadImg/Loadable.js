/**
 *
 * Asynchronously loads the component for LazyLoadImg
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
