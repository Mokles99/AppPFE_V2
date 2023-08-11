import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";


export const DataGridBox = styled(Box)(() => ({
  margin: "10px 0 0 0",
  height: "60vh",
  width: "100%",
  "& .MuiDataGrid-root": {
    border: "none",
  },
  colrone:"linear-gradient(to right, #10b5ca, #00a5c4, #0094bd, #0084b3, #0073a8)",
  // "& .MuiDataGrid-cellContent"{
  //   color:"white",
  // }
  "& .MuiDataGrid-cell": {
    borderBottom: "1px solid",
    width: "900px",
    // backgroundColor:"hsl(187,85%,43%)",
    backgroundColor:"#7a7f9d",
    // backgroundColor: "#0094bd",
    fontSize: "14px",
  },
  "& .MuiDataGrid-root .MuiDataGrid-cellContent ":{
    
    color: "white",
},
  "& .MuiDataGrid-columnHeaders": {
    // backgroundColor: "#0094bd",
    // backgroundColor:"#7a7f9d",
     backgroundColor:"#21295c",
     
    borderBottom: "none",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "bold",
    color: "white",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "none",
    // backgroundColor: "#0094bd"
    backgroundColor: "#21295c",
    
  },
  "& .MuiCheckbox-root": {
    color: `white !important`,
  },
  "& .MuiTablePagination-root":{
    color:"white"
  },
  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
    // color: `black !important`,
    color: `grey !important`,
    fontSize: "14px"
  },
}));