import React from "react";
import {Button, TextField} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class Form extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
    if (this.props.selectedRow){
      this.state = this.props.selectedRow
    }
    else {
      this.state = {
        name: "",
        address: "",
        city: "",
        countryCode: "",
        loanAmount: 0,
      };
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
      this.props.onSubmit(this.state);
      this.setState({
        name: "",
        address: "",
        city: "",
        countryCode: "",
        loanAmount: 0,
      });
  };

  render() {
    return (
      <Card>
        <CardContent>
        <form>
        <TextField
          label="Name"
          name="name"
          value={this.state.name}
          onChange={e => this.change(e)}
          isRequired
        />
        <br />
        <TextField
          label="Address"
          name="address"
          value={this.state.address}
          onChange={e => this.change(e)}
          isRequired
        />
        <br />
        <TextField
          label="City"
          name="city"
          value={this.state.city}
          onChange={e => this.change(e)}
          isRequired
        />
        <br />
        <TextField
          label="Country Code"
          name="countryCode"
          value={this.state.countryCode}
          onChange={e => this.change(e)}
          isRequired
        />
        <br />
        <TextField
          label="Loan Amount"
          name="loanAmount"
          value={this.state.loanAmount}
          onChange={e => this.change(e)}
          isRequired
        />
        <br />
        <Button onClick={e => this.onSubmit(e)} color="primary">
          Submit
        </Button> 
        </form>
        </CardContent>
      </Card>
    );
  }
}