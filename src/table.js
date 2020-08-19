import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/TextField";



export default function CustomPaginationActionsTable() {


  function fetchData(n) {
    console.log(n, "rf");
    // var resp = await fetch("http://localhost:3000/");
    // var ans = await resp.json();
    fetch("https://string-shortner-api.herokuapp.com/encode/?input="+n)
      .then((response) => response.text())
      .then((resp) => {
        console.log(resp);
        setEncode(resp)
        // console.log(ans);
        // var ans = resp;

      });
    // return resp;
  }

  function fetchData2(n) {
    console.log(n, "rf");
    // var resp = await fetch("http://localhost:3000/");
    // var ans = await resp.json();
    fetch("https://string-shortner-api.herokuapp.com/decode/?input="+n)
      .then((response) => response.text())
      .then((resp) => {
        console.log(resp);
        setDecode(resp)
        // console.log(ans);
        // var ans = resp;

      });
    // return resp;
  }


  function submitEncodeHandler() {
    var inputStr=document.getElementsByTagName('input')[0].value;
    var flag=0;
    for(var i=0;i<inputStr.length;i++) {
      if(inputStr.charCodeAt(i)<97 || inputStr.charCodeAt(i)>122) flag=1;
    }
    if(inputStr.length>6 || flag) {
      alert("Invalid Input!! String can have a maximum size of 6, and consist of small letter alphabets.");
      return;
    }
    fetchData(inputStr);
  }

  function submitDecodeHandler() {
    fetchData2(document.getElementsByTagName('input')[1].value);
  }

  const [encode, setEncode] = React.useState("");
  const [decode, setDecode] = React.useState("");

  return (
    <div style={{ display:'flex',width:'80%',margin:'auto'}}>
    <div
      style={{
        width: "50%",
        margin: "auto",
        minWidth: "400px",
        marginTop: "50px",
        
      }}
    >
      <Input
        id="standard-basic"
        label="Encode here"
        // type="number"
        autoFocus='true'
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: "20px" }}
      />

      <Button
        onClick={submitEncodeHandler}
        variant="contained"
        color="primary"
        style={{ marginLeft: "10%" }}
      >
        Fetch
      </Button>
      <div>Encoded Value: {encode}</div>

    </div>
    <div
    style={{
      width: "50%",
      margin: "auto",
      minWidth: "500px",
      marginTop: "50px",
    }}
  >
    <Input
      id="standard-basic"
      label="Decode here"
      // type="number"
      autoFocus='true'
      InputLabelProps={{
        shrink: true,
      }}
      style={{ marginBottom: "20px" }}
    />

    <Button
      onClick={submitDecodeHandler}
      variant="contained"
      color="primary"
      style={{ marginLeft: "10%" }}
    >
      Fetch
    </Button>
    <div>Decoded Value: {decode}</div>

  </div>
  </div>
  );
}
