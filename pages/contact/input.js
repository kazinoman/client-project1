import React from "react";

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CustomInput = styled(TextField)(({ props }) => ({
  width: "100%",
  fontSize: "3rem",
  borderRadius: "5px",
}));

export default CustomInput;
