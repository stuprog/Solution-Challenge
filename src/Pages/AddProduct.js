// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import { makeStyles } from "@material-ui/core/styles";
// import InfoIcon from "@material-ui/icons/Info";
// import Button from "@material-ui/core/Button";
// import { blue } from "@mui/material/colors";
// import { useNavigate } from "react-router-dom";

// const divStyle = {
//   display: "flex",
//   alignItems: "center",
// };

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
//   marginText: {
//     marginRight: 6,
//   },
//   buttons: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   button: {
//     marginTop: theme.spacing(8),
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(3),
//   },
//   title: {
//     marginTop: theme.spacing(1),
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(3),
//     color: theme.palette.secondary.dark,
//   },
// }));
// export default function CreateProduct() {
//   const classes = useStyles();
//   let history = useNavigate();
//   return (
//     <React.Fragment>
//       <Typography variant="h4" gutterBottom className={classes.title}>
//         Create Robot
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <TextField
//             required
//             variant="outlined"
//             id="Name"
//             name="name"
//             label="Name"
//             fullWidth
//             size="medium"
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             required
//             id="category"
//             name="category"
//             label="Robot ID"
//             fullWidth
//             variant="outlined"
//             size="medium"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="price"
//             name="price"
//             label="Creation Date"
//             fullWidth
//             variant="outlined"
//             size="medium"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="quantity"
//             name="quantity"
//             label="Warranty"
//             fullWidth
//             variant="outlined"
//             size="medium"
//           />
//         </Grid>
//       </Grid>
//       <div className={classes.buttons}>
//         <Button
//           className={classes.button}
//           style={{ background: "#FFFFFF", color: "#00378c" }}
//           variant="contained"
//           size="medium"
//           color="primary"
//           onClick={() => history("/")}
//         >
//           Back
//         </Button>
//         <Button
//           className={classes.button}
//           style={{ background: "#00378c" }}
//           variant="contained"
//           size="medium"
//           color="primary"
//         >
//           Create
//         </Button>
//       </div>
//     </React.Fragment>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export default function CreateProduct() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Create Product
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              variant="outlined"
              id="name"
              name="name"
              label="Name"
              fullWidth
              size="medium"
              InputLabelProps={{ shrink: true }}
              helperText="Enter the name of the product"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="productId"
              name="productId"
              label="Product ID"
              fullWidth
              variant="outlined"
              size="medium"
              InputLabelProps={{ shrink: true }}
              helperText="Enter the ID of the product"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="creation-date"
              name="creation-date"
              label="Creation Date"
              fullWidth
              variant="outlined"
              size="medium"
              InputLabelProps={{ shrink: true }}
              helperText="Enter the creation date of the product"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="warranty"
              name="warranty"
              label="Warranty"
              fullWidth
              variant="outlined"
              size="medium"
              InputLabelProps={{ shrink: true }}
              helperText="Enter the warranty of the product"
              className={classes.input}
            />
          </Grid>
        </Grid>
        <div>
        <Button
  className={classes.button}
  variant="contained"
  size="medium"
  onClick={() => navigate("/")}
>
  Back
</Button>

          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            size="medium"
            color="primary"
          >
            Create
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
}
