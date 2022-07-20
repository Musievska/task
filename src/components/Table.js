import React from "react";

const Table = ({ building, changeHandler, deleteHandler }) => {
    return (
        <tr>
            <td>{building.id}</td>
            <td>{building.name}</td>
            <td>{building.area}</td>
            <td>{building.location}</td>
            <td ><img src={building.image} alt="" height="100" width="100"></img></td>
            <td>
                <button
                    type="button"
                    onClick={(event) => changeHandler(event, building)}
                >
                    Edit
                </button>
                <button type="button" onClick={() => deleteHandler(building.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Table;
