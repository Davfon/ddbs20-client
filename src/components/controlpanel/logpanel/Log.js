import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import { api, handleError } from "../../../helpers/api";

class Log extends Component {
  state = {
    logitems: this.props.logitems,
  };

  async componentDidMount() {
    console.log(this.props.logitems);
    // try {
    //   const response = await api.get("/info");
    //   this.setState({ logitems: response.logs });
    // } catch (error) {
    //   alert(`Something went wrong: \n${handleError(error)}`);
    // }
  }

  render() {
    return (
      <div className="logsection">
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Message</Table.HeaderCell>
              <Table.HeaderCell>ProcId</Table.HeaderCell>
              <Table.HeaderCell>TransId</Table.HeaderCell>
              <Table.HeaderCell>CoordId</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.logitems
              ? this.state.logitems.map((item) => {
                  return (
                    <Table.Row active={!item.isStatus}>
                      <Table.Cell>{item.message}</Table.Cell>
                      <Table.Cell>{item.procId}</Table.Cell>
                      <Table.Cell>{item.transId}</Table.Cell>
                      <Table.Cell>{item.coordId}</Table.Cell>
                    </Table.Row>
                  );
                })
              : ""}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Log;