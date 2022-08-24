import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import carsInfo from '../data/carInfo.json';

function Home() {
  return (
    <Container>
        {
            carsInfo && carsInfo.map((car, index) => (
                <Section 
                    key = { index }
                    title={ car.title }
                    description={ car.description }
                    backgroundImg={ car.image }
                    leftBtnText="Custom Order"
                    rightBtnText="Existing Inventory"
                />
            ))
        }
        <Section 
            title="Lowest Cost Solar Panels In America"
            description="Money-back Guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Learn More"
        />
        <Section 
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Learn More"
        />
        <Section 
            title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`