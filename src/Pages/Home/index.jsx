import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../Components/Header";
import { tokens } from "../../theme";
import StatBox from "../../Components/StatBox";
import { companyData } from "../../Data/companyData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarChart from "../../Components/BarChart";
import LineChart from "../../Components/LineChart";
import PieChart from "../../Components/PieChart";

const totalNumberOfCompanies = companyData.length;

const calculateAverage = (companyData) => {
  const total = companyData.reduce(
    (accumulator, company) => {
      accumulator.employees += company.number_of_employees;
      accumulator.turnover += company.turnover;
      accumulator.netProfit += company.net_profit;
      return accumulator;
    },
    { employees: 0, turnover: 0, netProfit: 0 }
  );

  const averageEmployees = total.employees / totalNumberOfCompanies;
  const averageTurnover = total.turnover / totalNumberOfCompanies;
  const averageNetProfit = total.netProfit / totalNumberOfCompanies;

  return {
    averageEmployees,
    averageTurnover,
    averageNetProfit,
  };
};
const averages = calculateAverage(companyData);

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m = "auto 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTiitle="Welcome to dashboard" />
      </Box>

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
            title={totalNumberOfCompanies}
            subtitle="Total Companies"
            progress="0.75"
            increase="+14%"
            icon={
              <ApartmentOutlinedIcon
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
            title={`$${Number(averages.averageTurnover).toLocaleString(
              "en-US"
            )}`}
            subtitle="Average Turnover"
            progress="0.50"
            increase="+21%"
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
            title={`${Number(averages.averageEmployees).toLocaleString(
              "en-US"
            )}`}
            subtitle="Average Employees"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
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
            title={`$${Number(averages.averageNetProfit).toLocaleString(
              "en-US"
            )}`}
            subtitle="Average Net Profit"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
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
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          borderRadius="8px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Net Profit Of Top 3 Companies
            </Typography>
          </Box>
          {companyData.slice(0,3).map((company, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {company.company_name}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {company.address}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{company.contact_number}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${Number(company.net_profit).toLocaleString('en-US')}
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          maxHeight="90%"
          backgroundColor={colors.primary[400]}
          p="30px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          borderRadius="8px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
          >
            Revenue Distribution
          </Typography>
          <PieChart />
        </Box>
         <Box
          gridColumn="span 6"
          gridRow="span 2"
          maxHeight="90%"
          backgroundColor={colors.primary[400]}
          p="24px"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          borderRadius="8px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
          >
            Sales Quantity
          </Typography>
            <BarChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
