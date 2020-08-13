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

class DescriptionList extends Component {

  render() {
    const list = [
      <DescriptionItem text="공식 사이트" details={<a href="http://www.naver.com" target="_blank">naver</a>} />,
      <DescriptionItem text="장점" details={'쉽다.'} />,
      <DescriptionItem text="단점" details={'실행속도가 느리다'} />,
      <DescriptionItem text="파이썬 활용 분야" details={'머신러닝 딥러닝'} />,
      <DescriptionItem text="추천 IDE" details={'파이참'} />,
      <DescriptionItem text="라이브러리" details={'Pandas'} />,
      <DescriptionItem text="파일" details={''} image={<img src="https://w.namu.la/s/40d7c3c736da95c2354af2cf42cdb86c138c1a2daa19e3102b9083ca1cdea1fa88d2a772544b5a1912185b2117f5822950774633d962d96f31109eb824125b924a5d13fe6289bfaf30efa6576ed2c4baf808cbfd838fcdb803132bc0f2f67b7354fdd88ed8422e3f67bf2c322b728f09" alt="My Image"></img>}/>
    ]

    return (
      <Fragment>
        <DescBlock>
            {list}
        </DescBlock>
      </Fragment>
    );
  }
}

export default DescriptionList;