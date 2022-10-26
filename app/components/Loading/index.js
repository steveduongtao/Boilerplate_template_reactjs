/**
 *
 * Loading
 *
 */

import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './loading.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Loading() {
  return (
    <div className="loading-shading-mui">
      <CircularProgress className="loading-icon-mui" />
    </div>
  );
}

Loading.propTypes = {};

export default memo(Loading);
