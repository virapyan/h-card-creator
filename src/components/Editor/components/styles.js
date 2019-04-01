import styled from 'styled-components';
import { Title } from '../styles' ;

export const SectionTitleWrapper = styled.div`
  width: 100%; 
  border-bottom: 1px solid rgb(190, 196, 199);
  text-transform: uppercase;
  color: rgb(190, 196, 199);
  font-size: 12px;
  font-weight: 700;
  margin-top: 25px;
  margin-bottom: 18px;
`;

export const InputFieldWrapper = styled.div`
  width: 100%;
  margin-right: ${(props) => (props ? props.marginRight : 0)}px;
`;

export const InputTitle = styled(Title)`
  display: block;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 4px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  
  color: rgb(67, 81, 98);
  font-family: inherit;
  font-size: 16px;

  outline: none;
  transition: all 0.3s ease;
  border: 1px solid rgb(205, 206, 205);
  border-radius: 4px;
  box-sizing: border-box;
  
  &:focus {
    border: 1px solid #2196F3;
    background: none;
  }

  padding: 0 5px;
`;

export const ButtonSectionWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FileUploadInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const StyledButton = styled.button`
  margin-right: ${(props) => (props ? props.marginRight : 0)}px;
  background-color: rgb(123, 141, 155);
  border: 0;
  border-radius: 4px;
  width: 100%;
  height: 36px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  font-size: 20px;
  font-weight: 500;
  color: rgb(255, 255, 255);

  &:hover,
  &:focus,
  &:active {
    background-color: rgb(107, 168, 224);
  }

  &:focus {
    outline: none;
    box-shadow: 0 5px 6px -6px rgba(46, 48, 48, 0.7);
  }
`;