import React from "react";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

export default class Form extends React.Component {
  state = {
    name: "",
    address: "",
    city: "",
    countryCode: "",
    loanAmount: "",
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        name: "",
        address: "",
        city: "",
        countryCode: "",
        loanAmount: "",
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="name"
          hintText="Name"
          floatingLabelText="Name"
          value={this.state.name}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="address"
          hintText="Address"
          floatingLabelText="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="city"
          hintText="City"
          floatingLabelText="City"
          value={this.state.city}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="countryCode"
          hintText="Country Code"
          floatingLabelText="Country Code"
          value={this.state.countryCode}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="loanAmount"
          hintText="Loan Amount"
          floatingLabelText="Loan Amount"
          value={this.state.loanAmount}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <Button label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}