import React from 'react';


const ListTable = ({ script }) => {

    let color;
    let status = script.status;
    if (status === 'ONLINE') {
        color = "green";
    } else {
        color = "red";
    }

    return (
        <tr>
            <td>{script.name}</td>
            <td>{script.description}</td>
            <td style={{
                color: `${color}`
            }}>{status}</td>
        </tr>
    )
}

export default ListTable;

