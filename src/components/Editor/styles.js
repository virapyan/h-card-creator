import styled from 'styled-components';

export const EditorWrapper = styled.div`
  width: 100%;  
  display: flex;
  justify-content: center;  
  flex-direction: column;
  background-color: rgb(255, 255, 255);
`;

export const Header = styled.div`
  padding: 40px 40px 5px;
`;

export const Title = styled.span`
  ${({ color }) => color && `
  color: ${color};
  `}

  ${({ fontSize }) => fontSize && `
    font-size: ${fontSize}px;
  `}
  font-weight: 800;
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 40px;
  box-sizing: border-box;
`;

export const SectionRow = styled.div`
  padding-top: 14px;
  display: flex;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 33px 40px 35px 40px;  
`;
