import React, { useEffect} from "react";
import {
 deleteEventAction,listerEvent
} from "../../../actions/formulaireevent.actions";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { DataGridBox } from "../Formulaireevent/DataGrid.style"
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import "../../Admindash2/Admindash2/Admindash2.css";
import Sidebar from "../../Admindash2/SideBar Section/Sidebar"

function FormulaireeventsList() {
  const dispatch = useDispatch();
  const formulaireevents = useSelector((state) => state.formulaireevent.formulaireevents.formulaireeventList);
  useEffect(() => {
    dispatch(listerEvent());
  }, []);
///
////
  const deleteEvent = async (id) => {
    //console.log(id)
    await dispatch(deleteEventAction(id));
    await dispatch(listerEvent());
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
      width: 150,
    },
    {
        field: "number",
        headerName: "Number",
        width: 150,
      },

    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "title",
      headerName: "Event",
      width: 100,
    },
    {
        field: "price",
        headerName: "Price",
        width: 50,
      },
    {
      field:"actions",
      headerName:"Actions",
      width:200,
      renderCell:({row}) =>{
        return (
          <>  
          <IconButton aria-label="delete"
            onClick={() => deleteEvent(row._id)}>
            <DeleteIcon/>
            </IconButton>
        </>
        )
      }

    }
  ];

  const formulaireeventsWithKeys = formulaireevents?.map((formulaireevent, index) => ({
    ...formulaireevent,
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
        {formulaireevents ? (
       <Box sx={{ height: 400, width: "100%" }}>
       <DataGridBox>
       <DataGrid
         rows={formulaireeventsWithKeys}
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
export default FormulaireeventsList;
