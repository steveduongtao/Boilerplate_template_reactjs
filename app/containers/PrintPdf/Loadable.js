/**
 *
 * Asynchronously loads the component for PrintPdf
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
