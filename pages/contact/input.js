import React from "react";

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomInput = styled(TextField)(({}) => ({
  width: "100%",
  fontSize: "1rem",
  borderRadius: "5px",
}));

export default CustomInput;
