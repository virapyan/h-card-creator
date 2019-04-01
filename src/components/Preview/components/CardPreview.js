import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectCardProp } from '../../../selectors';
import {
  CardWrapper,
  CardTitle,
  Header,
  Content,
  UserName,
  AvatarWrapper,
  CombinedRow,
} from './styles';

import Avatar from './Avatar';
import PreviewRow from './PreviewRow';

class CardPreview extends React.Component {
  render() {
    const {
      avatar,
      name,
      surname,
      email,
      phone,
      houseName,
      street,
      suburb,
      state,
      postcode,
      country,
    } = this.props;
    
    const fullName = `${name} ${surname}`;
    const addressLine1 = `${houseName} ${street}`;
    const addressLine2 = `${suburb} , ${state}`;

    return (
      <CardWrapper>
        <CardTitle>hCard Preview</CardTitle>
        <div>
          <Header>
            <UserName>{fullName}</UserName>
            <AvatarWrapper>
              <Avatar src={avatar} />
            </AvatarWrapper>
          </Header>
          <Content>
            <PreviewRow title="Email" value={email}/>
            <PreviewRow title="Phone" value={phone}/>
            <PreviewRow title="Address" value={addressLine1}/>
            <PreviewRow title="" value={addressLine2}/>
            <CombinedRow>
              <PreviewRow title="Postcode" value={postcode}/>
              <PreviewRow title="Country" value={country}/>
            </CombinedRow>
          </Content>
        </div>
      </CardWrapper>
    );
  }
}

CardPreview.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  houseName: PropTypes.string,
  street: PropTypes.string,
  suburb: PropTypes.string,
  state: PropTypes.string,
  postcode: PropTypes.string,
  country: PropTypes.string,
};

const mapStateToProps = (state) => ({
  avatar: selectCardProp(state, 'avatar'),
  name: selectCardProp(state, 'name'),
  surname: selectCardProp(state, 'surname'),
  email: selectCardProp(state, 'email'),
  phone: selectCardProp(state, 'phone'),
  houseName: selectCardProp(state, 'houseName'),
  street: selectCardProp(state, 'street'),
  suburb: selectCardProp(state, 'suburb'),
  state: selectCardProp(state, 'state'),
  postcode: selectCardProp(state, 'postcode'),
  country: selectCardProp(state, 'country'),
});

export default connect(mapStateToProps, undefined)(CardPreview);
