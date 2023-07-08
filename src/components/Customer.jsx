import React from 'react'
import { Container, Card, Row, Text, Col } from "@nextui-org/react";
import { CustomerData } from '../Data/static';

function Customer() {
  return (
    <div className='mt-16'>
        <Container>
            <h1 align='center'>Customer</h1>
            {/* css={{ $$cardColor: '$colors$primary' }} */}
        <Row justify="center" align="center">
            {CustomerData.map((data) => (
                <Col sm={12} md={4} justify="center" align="center">
                    <Text size={32}>{data.name}</Text>
                </Col>
            ))}
        </Row>
        </Container>
    </div>
  )
}

export default Customer