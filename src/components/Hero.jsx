import React from 'react'
import { Container, Card, Row, Text, Col, Spacer, Button, Image, Link } from "@nextui-org/react";

function Hero() {
  return (
    <div className='mt-4'>
         <Container gap={0}>
      <Row gap={1} justify="center" align="center">
        <Col>
          <div >
              <Text
                    h1
                    size={56}
                    css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    }}
                    weight="bold"
                >
                    Discover Your Skin's True Story
                    with Advanced AI Technology
                </Text>
                <Text h6 size={16} color="white" css={{ m: 0 }}>Effortless Skin Analysis in the Palm of Your Hand✨</Text>
                 <Spacer y={2} />
                <Row>
                    <Button flat color="primary" as={Link} href="#">Try Now</Button>
                    <Button light color="error" className='ml-2' as={Link} href="#">Learn More</Button>
                </Row>
          </div>
        </Col>
        <Col className=''>
        <Image   
            showSkeleton
            objectFit="cover"
            width={400}
            height={500}  
            maxDelay={10000}
            src="assets/img/hm.png"
            alt="Default Image"
        />
        </Col>
      </Row>
      <Spacer y={1} />
    </Container>
    </div>
  )
}

export default Hero