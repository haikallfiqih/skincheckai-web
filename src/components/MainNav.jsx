import React from 'react'
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";


function MainNav() {
  const [variant, setVariant] = React.useState("static");
  const variants = ["static", "floating", "sticky"];

  return (
    <div>
        <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs" as={Link} href="#">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Costumer</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Login
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}

export default MainNav