import { Paper, Stack, InputBase } from "@mui/material";
import React from "react";
//icon
import { MdSearch } from "react-icons/md";

const InputBox = ({ ...others }) => {
  return (
    <Paper
      sx={{
        width: "70%",
        height: "2.5rem",
        display: "flex",
        direction: "column",
        alignItems: "center",
      }}
      {...others}
    >
      <Stack
        direction="row"
        alignItems={"flex-start"}
        justifyContent="center"
        sx={{ width: "100%" }}
      >
        <MdSearch
          style={{ width: "30px", height: "30px", paddingLeft: "1px" }}
        />
        <InputBase
          sx={{ width: "100%", ml: 1 }}
          placeholder="Search destination & experiences"
        />
      </Stack>
    </Paper>
  );
};

export default InputBox;
