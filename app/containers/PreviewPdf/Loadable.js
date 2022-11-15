/**
 *
 * Asynchronously loads the component for PreviewPdf
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
