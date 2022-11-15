/**
 *
 * Asynchronously loads the component for DownloadExcel
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
