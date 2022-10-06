import { Box } from "@mui/material";

import RocketImg from "../../assets/rocket.svg";
import { To, Do } from "../../theme";

export function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "primary.700",
        height: "12.5rem",
      }}
    >
      <img src={RocketImg} alt="rocket" />
      <h1>
        <To>to</To>
        <Do>do</Do>
      </h1>
    </Box>
  );
}
