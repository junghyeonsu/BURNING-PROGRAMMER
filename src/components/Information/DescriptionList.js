import React, {Component} from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';

import DescriptionItem from './Description/DescriptionItem';

const DescBlock = styled.div`
flex: 1;
padding: 20px 32px;
padding-bottom: 48px;
overflow-y: auto;
/*background: #ff66cc; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */*/
`;

function DescriptionList({ list }) {
  return (
    <Fragment>
      <DescBlock>
          {list}
      </DescBlock>
    </Fragment>
  );
}

export default DescriptionList;