/*
 * Lightbox Messages
 *
 * This contains all the text for the Lightbox container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Lightbox';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Lightbox container!',
  },
});
