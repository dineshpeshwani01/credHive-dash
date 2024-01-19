import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../Components/Header";
import { companyData } from "../../Data/companyData";
import { tokens } from "../../theme";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Link } from "react-router-dom";

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton />
      <GridToolbarQuickFilter />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

const Companies = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "company_name",
      headerName: "Company Name",
      flex: 1,
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column-cell",
      renderCell: ({ row: { company_name } }) => (
        <Box>
          <Link
            to={`${company_name.replace(" ", "")}`}
            style={{ color: colors.grey[100], textDecoration: "none" }}
          >
            {company_name}
          </Link>
        </Box>
      ),
    },
    {
      field: "number_of_employees",
      headerName: "Employee Count",
      type: "number",
      headerAlign: "right",
      align: "right",
    },
    {
      field: "contact_number",
      headerName: "Phone No.",
      type: "number",
      headerAlign: "right",
      align: "right",
      flex: 1,
    },

    {
      field: "contact_email",
      headerName: "E-mail",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "account_status",
      flex: 1,
      headerName: "Account Status",
      headerAlign: "center",
      renderCell: ({ row: { account_status } }) => {
        return (
          <Box
            width="50%"
            m="0 auto"
            p="8px"
            display="flex"
            justifyContent="center"
            borderRadius="8px"
            backgroundColor={
              account_status === "active" ? "#66bb6a" : "#b71c1c"
            }
          >
            <Typography sx={{ mr: "8px" }}>{account_status}</Typography>
            {account_status === "active" ? (
              <TaskAltOutlinedIcon />
            ) : (
              <ErrorOutlineOutlinedIcon />
            )}
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="24px" display="flex" flexDirection="column">
      <Header title="COMPANIES LIST" subTiitle="List of all your customers" />
      <Box 
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.indigo[700],
            fontSize: "14px",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.indigo[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={companyData}
          columns={columns}
          slots={{
            toolbar: CustomToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Companies;
