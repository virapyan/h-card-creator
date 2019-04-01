import React from 'react';

import {
  PreviewRowWrapper,
  PreviewRowTitle,
  PreviewRowValue,
} from './styles';

const PreviewRow = ({ title, value }) => (
  <PreviewRowWrapper>
    <PreviewRowTitle>{title}</PreviewRowTitle>
    <PreviewRowValue>{value}</PreviewRowValue>
  </PreviewRowWrapper>
);

export default PreviewRow;
