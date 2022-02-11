import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <SHeader>
      <STitle>
        ЖК
      </STitle>
    </SHeader>
  );
};

const SHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #3D3D3D;
  padding: 50px 63px;
`
const STitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 59px;
  line-height: 75px;
  color: #FFFFFF;
  margin: 0;
`
