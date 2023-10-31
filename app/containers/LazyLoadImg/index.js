/**
 *
 * LazyLoadImg
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import makeSelectLazyLoadImg from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function LazyLoadImg() {
  useInjectReducer({ key: 'lazyLoadImg', reducer });
  useInjectSaga({ key: 'lazyLoadImg', saga });
  const [images, setImages] = useState([]);
  const url =
    'https://api.unsplash.com/photos/random?client_id=-tBafGKts6AT5KAT8EE5YmwnLf1avXvB8-6277Y0-gE';
  const getImage = () => {
    axios
      .get(url)
      .then(res => {
        console.log(res);
        setImages(res.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getImage();
  }, []);

  if (!images) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      {images.map(image => (
        <LazyLoadImage
          effect="blur"
          src={image.urls.regular}
          alt={image.alt_description}
          key={image.id}
          width="400px"
        />
      ))}
    </div>
  );
}

LazyLoadImg.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  lazyLoadImg: makeSelectLazyLoadImg(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LazyLoadImg);
