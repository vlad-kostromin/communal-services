import React from 'react'
import styled from 'styled-components'
import { Card } from '../components/Card'
import { useHistory } from 'react-router-dom'

export const AdminPage = () => {
  const history = useHistory()

  const cardList = [
    { name: `ЖК 1`, id: 1 },
    { name: `ЖК 2`, id: 2 },
    { name: `ЖК 3`, id: 3 },
  ]
  return (
    <SContainer>
      <STitle>
        Фактические работы
      </STitle>
      <SCards>
        {cardList.map((card) => 
          <Card key={card.id} name={card.name} />
        )}
      </SCards>
    </SContainer>
  );
};

const SContainer = styled.div`
  background: #2D2B2E;
  padding: 48px 63px;
`
const SCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 120px;
  background: #2D2B2E;
`
const STitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 60px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 48px;
  text-align: center;
`