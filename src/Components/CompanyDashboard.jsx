import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import StatBox from "./StatBox";
import { companyData } from "../Data/companyData";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import TrafficIcon from "@mui/icons-material/Traffic";
import { useParams } from "react-router-dom";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const findCompanyDetails = (companyName) => {
  const normalizedCompanyName = companyName.toLowerCase();
  const foundCompany = companyData.find((company) => {
    return (
      company.company_name.replace(" ", "").toLowerCase() ===
      normalizedCompanyName
    );
  });

  return foundCompany ? { ...foundCompany } : null;
};

const CompanyDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const params = useParams();
  const companyDetails = findCompanyDetails(params.name);

  const companyInfo = (title, value) => {
    return (
      <Box display="flex" justifyContent="space-between" marginTop="8px">
        <Typography
          variant="h5"
          fontWeight="600"
          color={colors.greenAccent[400]}
        >
          {title}
        </Typography>
        <Typography variant="h5">
          {title === "Loan Amount"
            ? `$${Number(value).toLocaleString("en-US")}`
            : title === "Loan Interest"
            ? `${value} %`
            : value}
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <StatBox
            title={`$${Number(companyDetails.net_profit).toLocaleString(
              "en-US"
            )}`}
            subtitle="Net Profit"
            progress="0.75"
            increase="+9%"
            icon={
              <MonetizationOnOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <StatBox
            title={companyDetails.account_status}
            subtitle="Account Status"
            icon={
              <CreditScoreOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <StatBox
            title={`$${Number(companyDetails.raised_capital).toLocaleString(
              "en-US"
            )}`}
            subtitle="Raised Capital"
            progress="0.30"
            increase="+5%"
            icon={
              <AccountBalanceOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        >
          <StatBox
            title={`$${Number(companyDetails.turnover).toLocaleString(
              "en-US"
            )}`}
            subtitle="Turnover"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          borderRadius="8px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
          </Box>
          <Box height="90%" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 4"
          maxHeight="95%"
          backgroundColor={colors.primary[400]}
          p="30px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          borderRadius="8px"
        >
          <Typography variant="h5" fontWeight="600">
            Revenue Distribution
          </Typography>
          <PieChart />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          maxHeight="90%"
          backgroundColor={colors.primary[400]}
          p="24px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          borderRadius="8px"
        >
          <Typography variant="h5" fontWeight="600">
            Sales Quantity
          </Typography>
          <BarChart isDashboard={true} />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          maxHeight="90%"
          backgroundColor={colors.primary[400]}
          p="24px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          borderRadius="8px"
        >
          <Typography variant="h5" fontWeight="600">
            Company Info
          </Typography>

          {companyInfo("Address", companyDetails.address)}
          {companyInfo("Contact Number", companyDetails.contact_number)}
          {companyInfo("Contact E-mail", companyDetails.contact_email)}
          {companyInfo("Website", companyDetails.company_website)}
          {companyInfo("Registration Date", companyDetails.registration_date)}
          {companyInfo("Loan Amount", companyDetails.loan_amount)}
          {companyInfo("Loan Interest", companyDetails.loan_interest)}
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyDashboard;
