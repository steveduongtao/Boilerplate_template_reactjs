/*
 * City Messages
 *
 * This contains all the text for the City container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.City';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the City container!',
  },
});
