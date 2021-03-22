import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <Container>
      <Typography variant='h6' component='h2' gutterBottom color='textPrimary'>
        Create a New Note
      </Typography>

      <Button type='submit' color='secondary' variant='contained' onClick={() => console.log("click button")}>
        Submit
      </Button>

      {/* <Button type='submit'>Submit</Button>
      <Button type='submit' color='secondary' variant='outlined'>
        Submit
      </Button>

      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  );
}
