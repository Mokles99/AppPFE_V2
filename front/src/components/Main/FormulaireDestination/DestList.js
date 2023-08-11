import React, { useEffect} from "react";
import {
 deleteDestAction,listerDest
} from "../../../actions/formulairedest.actions.js";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { DataGridBox } from "../FormulaireDestination/DataGrid.style"
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import "../../Admindash2/Admindash2/Admindash2.css";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar"

function FormulairedestsList() {
  const dispatch = useDispatch();
  const formulairedests = useSelector((state) => state.formulairedest.formulairedests.formulairedestList);
  useEffect(() => {
    dispatch(listerDest());
  }, []);
///
////
  const deleteDest = async (id) => {
    //console.log(id)
    await dispatch(deleteDestAction(id));
    await dispatch(listerDest());
  };
  ///

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
      width: 100,
    },
    {
        field: "number",
        headerName: "Number",
        width: 150,
      },
      {
        field: "message",
        headerName: "Message",
        width: 150,
      },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "title",
      headerName: "Voyage",
      width: 100,
    },
   
    {
      field:"actions",
      headerName:"Actions",
      width:100,
      renderCell:({row}) =>{
        return (
          <>  
          <IconButton aria-label="delete"
            onClick={() => deleteDest(row._id)}>
            <DeleteIcon/>
            </IconButton>
        </>
        )
      }

    }
  ];

  const formulairedestsWithKeys = formulairedests?.map((formulairedest, index) => ({
    ...formulairedest,
    id: index + 1,
  }));

  return (

    <div className="admindash2">
      <Sidebar/>
    <div style={{ paddingTop: "20vh" }}>
      <div className="p-4">
        {/* <Button variant="secondary" onClick={handleShow}>
          Ajouter contact
        </Button> */}
        {formulairedests ? (
       <Box sx={{ height: 400, width: "100%" }}>
       <DataGridBox>
       <DataGrid
         rows={formulairedestsWithKeys}
         columns={columns}
         slots={{toolbar:GridToolbar}}
         initialState={{
           pagination: {
             paginationModel: {
               pageSize: 5,
             },
           },
         }}
         pageSizeOptions={[5]}
         checkboxSelection
         disableRowSelectionOnClick
       />
       </DataGridBox>
     </Box>
        ) : (
          "Aucun contact trouvé..."
        )}
      </div>
    </div>
    </div>
  );
}
export default FormulairedestsList;
