import { Grid, Typography, Avatar } from "@mui/material";
//import bnb from "../images/maxxcoin.jpg";

const TotalBNB = ({ tokenAmount, price, msg }) => {
  if (tokenAmount > 0 && tokenAmount !== "") {
    return (
      <Grid container justifyContent="center" alignItems="center">
        <Typography sx={{ color: "#FFFFFF" }}>
          {msg} {tokenAmount * price} FON
        </Typography>
        {/* <Avatar
          alt=""
          src={bnb}
          sx={{ width: 24, height: 24, marginLeft: 1 }}
        /> */}
      </Grid>
    );
  }
};
export default TotalBNB;
