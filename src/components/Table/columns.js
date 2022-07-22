import moment from "moment";

export const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 250,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
    },
    {
        field: 'species',
        headerName: 'Species',
        width: 150,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 90,
    },
    {
        field: 'image',
        headerName: "Image",
        width: 100,        
        sortable: false,
        renderCell: (params) => {
            return (
                <div>
                    <img src={params.row.image} alt='' className="dataTableImage"  />
                </div>
            )
        }
    },
    {
        field: 'created',
        headerName: "Created Date",
        width: 250,
        renderCell: (params) => {
            return (
                <div>
                    {params.row.created ? moment(params.row.created).format('DD/MM/YYYY hh:mm a') : "N/A"}
                </div>
            )
        }
    }
];