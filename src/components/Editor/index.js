import React from 'react';
import {
  EditorWrapper,
  Header,
  Title,
  Content,
  SectionRow,
  Footer,
} from './styles';

import InputField from './components/InputField';
import SectionTitle from './components/SectionTitle';
import ButtonSection from './components/ButtonSection';

import * as actions from '../../actions';

const Editor = () => (
  <EditorWrapper>
    <Header>
      <Title color="rgb(67, 81, 98)" fontSize="32">
        hCard Builder
      </Title>
    </Header>
    <Content>
      <SectionTitle title='Personal Details' />
      <SectionRow>
        <InputField
          title="Given Name"
          marginRight="20"
          changeAction={actions.updateName}
          selectorValue="name" />
        <InputField
          title="Surname"
          changeAction={actions.updateSurname}
          selectorValue="surname" />
      </SectionRow>
      <SectionRow>
        <InputField
          title="Email"
          marginRight="20"
          changeAction={actions.updateEmail}
          selectorValue="email" />
        <InputField
          title="Phone"
          changeAction={actions.updatePhone}
          selectorValue="phone" />
      </SectionRow>
      <SectionTitle title='Address' />
      <SectionRow>
        <InputField
          title="House Name or #"
          marginRight="20"
          changeAction={actions.updateHouseName}
          selectorValue="houseName" />
        <InputField
          title="Street"
          changeAction={actions.updateStreet}
          selectorValue="street" />
      </SectionRow>
      <SectionRow>
        <InputField
          title="Suburb"
          marginRight="20"
          changeAction={actions.updateSuburb}
          selectorValue="suburb" />
        <InputField
          title="State"
          changeAction={actions.updateState}
          selectorValue="state" />
      </SectionRow>
      <SectionRow>
        <InputField
          title="Postcode"
          marginRight="20"
          changeAction={actions.updatePostcode}
          selectorValue="postcode" />
        <InputField
          title="Country"
          changeAction={actions.updateCountry}
          selectorValue="country" />
      </SectionRow>
    </Content>
    <Footer>
      <ButtonSection />
    </Footer>
  </EditorWrapper>
);
 
export default Editor;
