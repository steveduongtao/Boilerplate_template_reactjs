/*
 * SnackbarCustom Messages
 *
 * This contains all the text for the SnackbarCustom component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.SnackbarCustom';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the SnackbarCustom component!',
  },
});
