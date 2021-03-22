import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBlockStart: 20,
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant='h6' component='h2' gutterBottom color='textPrimary' className={classes.title}>
        Create a New Note
      </Typography>

      <Button
        className={classes.btn}
        type='submit'
        color='secondary'
        variant='contained'
        onClick={() => console.log("click button")}
        endIcon={<KeyboardArrowRightOutlinedIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
