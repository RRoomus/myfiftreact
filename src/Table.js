import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBTableEditable } from "mdbreact";

const columns = ["Name", "Address", "City", "Country Code", "Loan Amount"];

const data = [
  ["Aurelia Vega", "luise", "Tallinn", "EE", 260],
  ["Guerra Cortez", "Kaarna", "Haapsalu", "EE", 2788],
  ["Guadalupe House", "Luige", "Tartu", "EE", 0.00],
  ["Elisa Gallagher", "Järvi", "Kohtla-Järve", "EE", 2.56]
];

const Table = (props) => {
  return (
    <MDBCard>
      <MDBCardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
        Table Editable
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTableEditable data={data} columns={columns} striped bordered />
      </MDBCardBody>
    </MDBCard>
  );
};

export default Table;