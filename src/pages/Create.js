import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightOutlinedIcon from "@material-ui/icons/KeyboardArrowRightOutlined";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();

  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  const [titleError, settitleError] = useState(false);
  const [detailsError, setdetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    settitleError(false);
    setdetailsError(false);

    if (title === "") {
      settitleError(true);
    }
    if (details === "") {
      setdetailsError(true);
    }

    // Hanya ketika diisi
    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography variant='h6' component='h2' gutterBottom color='textPrimary'>
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => settitle(e.target.value)}
          className={classes.field}
          label='Note title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setdetails(e.target.value)}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

        <Button type='submit' color='secondary' variant='contained' endIcon={<KeyboardArrowRightOutlinedIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
