import styled from 'styled-components';

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const AppContent = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  height: 620px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  } 
`;

export default AppWrapper;
