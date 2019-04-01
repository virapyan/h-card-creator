import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  text-align: right;
  width: 100%;
  max-width: 430px;
  height: 100%;
  padding: 135px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 85%;
    padding: 20px 0;
  } 
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(67, 81, 98);
`;

export const Content = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  padding: 20px 25px;
  box-sizing: border-box;
`;

export const CardTitle = styled.span`
  text-transform: uppercase;
  color: rgb(168, 179, 180);
  font-weight: 600;
  margin-bottom: 10px;
`;

export const UserName = styled.span`
  position: relative;
  float: left;
  top: 50px;
  margin-left: 20px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 28px;
  text-align: left;
  max-width: 280px;

  flex: 1;
  max-width: 250px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    max-width: 100%;
  } 
`;

export const AvatarWrapper = styled.div`
  width: 85px;
  height: 107px;
  background-color: rgb(255, 255, 255);
  position: relative;
  float: right;
  top: 10px;
  right: 10px;
  border: 1px solid rgb(191, 191, 191);
  box-shadow: 0px 0px 1px 0px rgb(153, 153, 153);
`;

const imageStyle = css`
  position: absolute;
  width: 100%;
  left: 0;
  top: 58%;
  transform: translateY(-50%);
`

export const SvgWrapper = styled.div`
  ${imageStyle}
`;

export const StyledProfileImage = styled.img`
  ${imageStyle}
`;

export const PreviewRowWrapper = styled.div`
  width: 100%;
  height: 25px;
  border-bottom: 1px solid rgb(226, 229, 231);
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const PreviewRowTitle = styled.span`
  width: 80px;
  text-align: left;
  color: rgb(67, 81, 98);
  font-weight: 500;
  text-transform: uppercase;
  padding-top: 8px;
  font-size: 11px;
`;

export const PreviewRowValue = styled.span`
  display: block;
  max-width: 250px;
  color: rgb(67, 81, 98);
  text-align: left;
  font-weight: 500;
  padding-top: 5px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    max-width: 100%;
  } 
`;

export const CombinedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  } 
`;
