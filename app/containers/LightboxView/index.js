/**
 *
 * Lightbox
 *
 */

import PropTypes from 'prop-types';
import { useState } from 'react';
import { default as React, memo } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import makeSelectLightbox from './selectors';

export function LightboxView() {
  useInjectReducer({ key: 'lightbox', reducer });
  useInjectSaga({ key: 'lightbox', saga });
  const images = [
    'https://i.pinimg.com/564x/9b/a4/0c/9ba40c2581bb7f139fb9dbed2072b684.jpg',
    'https://www.africau.edu/images/default/sample.pdf',
    // 'https://i.pinimg.com/564x/0f/01/bf/0f01bf2777fcf04fefb9dd6a21506cc4.jpg',
    // 'https://i.pinimg.com/564x/1a/50/5c/1a505cab6a6e2c0426bd48082c21007e.jpg',
    // 'https://i.pinimg.com/736x/f7/8e/0d/f78e0dd5807b1c916a2f8ed14c5537d8.jpg',
  ];
  const [lightBox, setLightBox] = useState({ photoIndex: 0, isOpen: false });
  return (
    <div>
      <button type="button" onClick={() => setLightBox({ ...lightBox, isOpen: true })}>
        Open Lightbox
      </button>

      {lightBox.isOpen && (
        <Lightbox
          mainSrc={images[lightBox.photoIndex]}
          nextSrc={images[(lightBox.photoIndex + 1) % images.length]}
          prevSrc={images[(lightBox.photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLightBox({ ...lightBox, isOpen: false })}
          onMovePrevRequest={() =>
            setLightBox({
              ...lightBox,
              photoIndex: (lightBox.photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            setLightBox({ ...lightBox, photoIndex: (lightBox.photoIndex + 1) % images.length })
          }
        />
      )}
    </div>
  );
}

Lightbox.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  lightbox: makeSelectLightbox(),
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
)(LightboxView);
