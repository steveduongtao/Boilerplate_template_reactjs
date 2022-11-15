/**
 *
 * Asynchronously loads the component for SnackBar
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
