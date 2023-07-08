import { Table } from "@nextui-org/react";
import React from 'react'


function Pricing() {
  return (
    <div className='mt-16'>
        <h1 align='center'>Price</h1>
        <Table
        aria-label="Example static collection table"
        css={{
            height: "auto",
            minWidth: "100%",
            margin: "5px",
        }}
        selectionMode="single"
        >
        <Table.Header>
            <Table.Column>Services</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Time</Table.Column>
        </Table.Header>
        <Table.Body>
            <Table.Row key="1">
            <Table.Cell>Whiting</Table.Cell>
            <Table.Cell>Rp.1.500.000,-</Table.Cell>
            <Table.Cell>1 Hour</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
            <Table.Cell>Skincare</Table.Cell>
            <Table.Cell>Rp.1.500.000,-</Table.Cell>
            <Table.Cell>1 Hour</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
            <Table.Cell>Lipting</Table.Cell>
            <Table.Cell>Rp.1.000.000,-</Table.Cell>
            <Table.Cell>30 Minutes</Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </div>
  )
}

export default Pricing