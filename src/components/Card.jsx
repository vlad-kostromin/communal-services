import React from 'react'
import styled from 'styled-components'

export const Card = ({name}) => {
  const housingList = [
    { name: `Корпус 1`, id: 1 },
    { name: `Корпус 2`, id: 2 },
    { name: `Корпус 3`, id: 3 },
    { name: `Корпус 4`, id: 4 },
  ]
  return (
    <SCard>
      <SName>
        {name}
      </SName>
      {housingList.map((house) => 
        <SItem key={house.id}>
          {house.name}
        </SItem>
      )}
    </SCard>
  );
};

const SCard = styled.div`
  border: 1px solid #3D3D3D;
  padding: 24px 35px 58px;
  display: grid;
  grid-row-gap: 20px;
`
const SItem = styled.div`
  height: 45px;
  background: #3D3D3D;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  color: #FFFFFF;
  padding: 8px 19px;
  cursor: pointer;
`
const SName = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 38px;
  text-align: center;
`
