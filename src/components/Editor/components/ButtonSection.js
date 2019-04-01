import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionButton from './ActionButton';
import { updateAvatar } from '../../../actions';
import { selectCardState } from '../../../selectors';
import {
  ButtonSectionWrapper,
  FileUploadInput,
} from './styles';

class ButtonSection extends React.Component {
  constructor(props) {
    super(props);
    
    this.uploadAvatarClickHandler = this.uploadAvatarClickHandler.bind(this);
    this.fileInputChangeHandler = this.fileInputChangeHandler.bind(this);
    this.createCardClickHandler = this.createCardClickHandler.bind(this);
  }

  uploadAvatarClickHandler() {
    this.refs.upload.click();
  }

  fileInputChangeHandler(event) {
    const { updateAvatar } = this.props;
    const file = event.target.files[0];
    const reader = new FileReader();
    const imageType = /image.*/;
    
    if (!file.type.match(imageType)) {
      return;
    }
    
    reader.onload = (event) => {
      updateAvatar(event.target.result);
    }
    reader.readAsDataURL(file);
  } 

  createCardClickHandler() {
    console.log(this.props.appState);
  }

  render() {
    return (
      <ButtonSectionWrapper>
        <ActionButton
          title="Upload Avatar"
          clickHandler={this.uploadAvatarClickHandler}
          marginRight="20"
        />
        <FileUploadInput
          type="file"
          ref="upload"
          onChange={this.fileInputChangeHandler}
        />
        <ActionButton
          title="Create hCard"
          clickHandler={this.createCardClickHandler}
        />
      </ButtonSectionWrapper>
    );
  }
}

ButtonSection.propTypes = {
  updateAvatar: PropTypes.func,
  cardState: PropTypes.object,
  appState: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  updateAvatar: (src) => dispatch(updateAvatar(src)),
});

const mapStateToProps = (state) => ({
  appState: selectCardState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSection);
