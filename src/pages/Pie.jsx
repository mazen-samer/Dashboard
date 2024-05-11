import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import PieChart from "../components/PieChart";

export default function Pie() {
  return (
    <Box m="25px">
      <Header title="Pie Chart" subtitle="A simple pie chart." />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
