import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandmoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../theme";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQs" subtitle="Frequently asked questions page." />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandmoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            And Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae
            nisi similique nam, beatae minima quasi ullam adipisci error amet
            doloremque hic consequatur laboriosam corporis minus totam saepe
            temporibus fugit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandmoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            And Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae
            nisi similique nam, beatae minima quasi ullam adipisci error amet
            doloremque hic consequatur laboriosam corporis minus totam saepe
            temporibus fugit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandmoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            And Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae
            nisi similique nam, beatae minima quasi ullam adipisci error amet
            doloremque hic consequatur laboriosam corporis minus totam saepe
            temporibus fugit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandmoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            And Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae
            nisi similique nam, beatae minima quasi ullam adipisci error amet
            doloremque hic consequatur laboriosam corporis minus totam saepe
            temporibus fugit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandmoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            And Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae
            nisi similique nam, beatae minima quasi ullam adipisci error amet
            doloremque hic consequatur laboriosam corporis minus totam saepe
            temporibus fugit!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandmoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            And Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae
            nisi similique nam, beatae minima quasi ullam adipisci error amet
            doloremque hic consequatur laboriosam corporis minus totam saepe
            temporibus fugit!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
