/**
 *
 * Asynchronously loads the component for Lightbox
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
