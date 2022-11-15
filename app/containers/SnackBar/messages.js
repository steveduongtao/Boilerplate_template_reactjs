/*
 * SnackBar Messages
 *
 * This contains all the text for the SnackBar container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SnackBar';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SnackBar container!',
  },
});
