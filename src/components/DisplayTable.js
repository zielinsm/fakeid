import React from "react";
import { Card, Container, Table } from "semantic-ui-react";
import "./DisplayTable.css";

const DisplayTable = props => (
  <Container>
    <Card fluid centered className="display-table">
      <Table basic="very" textAlign="center" className="table__content">
        <Table.Body>
          {props.identity.map((person, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell className="table__title">{person.row}</Table.Cell>
                <Table.Cell>{person.value}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Card>
  </Container>
);

export default DisplayTable;
