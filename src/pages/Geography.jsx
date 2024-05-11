import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../components/Header";
import GeographyChart from "../components/GeographyChart";
import { tokens } from "../theme";

export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="25px">
      <Header title="Pie Chart" subtitle="A simple pie chart." />
      <Box
        height="75vh"
        border={`solid 1px ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}
