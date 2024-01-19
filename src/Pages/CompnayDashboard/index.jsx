import { Box } from "@mui/material";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import CompanyDashboard from "../../Components/CompanyDashboard";

const CompnayDetails = () => {
  const params = useParams();
  return (
    <Box m="auto 24px" display="flex" flexDirection="column">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title={`${params.name}`}
          subTiitle= "Welcome to dashboard"
        />
      </Box>
      <Box>
        <CompanyDashboard />
      </Box>
    </Box>
  );
};

export default CompnayDetails;
