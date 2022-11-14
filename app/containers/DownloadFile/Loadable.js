/**
 *
 * Asynchronously loads the component for DownloadFile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
