import React from 'react';
import { SectionTitleWrapper } from './styles';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <SectionTitleWrapper>
    {title}
  </SectionTitleWrapper>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
