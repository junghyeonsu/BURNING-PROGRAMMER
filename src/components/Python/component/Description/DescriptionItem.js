import React from 'react';
import styled, { css } from 'styled-components';
const DescBlock = styled.div`
flex: 1;
padding: 20px 32px;
padding-bottom: 48px;
overflow-y: auto;
// background: yellow; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
border : 1px solid black;
margin : 10px;
border-radius:7px
`;

function DescriptionItem({ text, details, image }) {
  return (
    <DescBlock>
      <h2>{text}</h2>
      <h3>{image}</h3>
      <h3>{details}</h3>
    </DescBlock>
  );
}

export default DescriptionItem;