import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../Components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="24px" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Frequently Asked Questions"
          subTiitle="Click on question to view the answers"
        />
      </Box>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ background: colors.primary[400] }}
          >
            <Typography sx={{ color: colors.grey[100] }}>
              How many statements for one company ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: colors.primary[400] }}>
            <Typography sx={{ color: colors.grey[100] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={{ background: colors.primary[400] }}
          >
            <Typography sx={{ color: colors.grey[100] }}>
              Is there any customer support number ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: colors.primary[400] }}>
            <Typography sx={{ color: colors.grey[100] }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Faq;
