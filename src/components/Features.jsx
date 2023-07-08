import React from 'react'
import { Card, Grid, Text, Button, Row, Col} from "@nextui-org/react";
import { FeaturesData } from '../Data/static';

function Features() {
  return (
    <div className='mt-16'>
      <h1 align='center' className='justify-center'style={{ margin: "auto" }}>Features</h1>
        <Grid.Container gap={2}>
        {FeaturesData.map((feature) => (
            <Grid sm={12} md={4} justify="center" align="center" className='justify-center text-center'>
                <Card css={{ mw: "330px" }} justify="center" align="center">
                    <Card.Header justify="center" key={feature.id} className='w-full '>
                        <div className='w-full'>
                            <Text b className='text-center justify-self-center'>{feature.name}</Text>
                        </div>
                    </Card.Header>   
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                    <Text>
                        {feature.desc}
                    </Text>
                    </Card.Body>
                    <Card.Divider /> 
                    <Card.Footer>
                    <Row justify="center">
                        <Button size="sm" flat>Show More</Button>
                    </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        ))
        }
        </Grid.Container>
    </div>
);
  
}

export default Features