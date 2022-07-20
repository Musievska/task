import React, { useState } from 'react';
//import { nanoid } from 'nanoid';
import data from '../mock-data.json';
import Table from './Table';
import EditForm from './EditForm';
import Header from './Header';

const Details = () => {
    const [buildings, setBuildings] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id: "",
        name: "",
        area: "",
        location: "",
        image: ""
    });

    const [editFormData, setEditFormData] = useState({
        id: "",
        name: "",
        area: "",
        location: ""
    });

    const [editBuildingId, setEditBuildingId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const editFormChangeHandler = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newBuilding = {
            id: addFormData.id,
            name: addFormData.name,
            area: addFormData.area,
            location: addFormData.location,
            image: addFormData.image,
        };

        const newBuildings = [...buildings, newBuilding];
        setBuildings(newBuildings);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedBuilding = {
            id: editBuildingId,
            name: editFormData.name,
            area: editFormData.area,
            location: editFormData.location,
            image: editFormData.image,
        };

        const newBuildings = [...buildings];

        const index = buildings.findIndex((building) => building.id === editBuildingId);

        newBuildings[index] = editedBuilding;

        setBuildings(newBuildings);
        setEditBuildingId(null);
    };

    const changeHandler = (event, building) => {
        event.preventDefault();
        setEditBuildingId(building.id);

        const formValues = {
            id: building.id,
            name: building.name,
            area: building.area,
            location: building.email,
            image: building.image
        };

        setEditFormData(formValues);
    };

    const cancelHandler = () => {
        setEditBuildingId(null);
    };

    const deleteHandler = (buildingId) => {
        const newBuildings = [...buildings];

        const index = buildings.findIndex((building) => building.id === buildingId);

        newBuildings.splice(index, 1);

        setBuildings(newBuildings);
    };

    return (
        <>
        <Header/>
            <div className="app-container">
                <h3>Add Buildings</h3>
                <form onSubmit={handleAddFormSubmit}>
                    <input
                        type="number"
                        name="id"
                        required="required"
                        placeholder="ID"
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="name"
                        minLength="3"
                        required="required"
                        placeholder="enter a name..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="number"
                        name="area"
                        required="required"
                        placeholder="enter an area..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="location"
                        required="required"
                        placeholder="enter location..."
                        onChange={handleAddFormChange}
                    />
                    <input
                        type="text"
                        name="image"
                        required="required"
                        placeholder="enter image..."
                        onChange={handleAddFormChange}
                    />
                    <button type="submit">Add</button>
                </form>
                <form onSubmit={handleEditFormSubmit}>
                    <h3>Buildings</h3>
                    <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Area</th>
                            <th>Location</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buildings.map((building) => (
                            <>
                                {editBuildingId === building.id ? (
                                    <EditForm
                                        editFormData={editFormData}
                                        editFormChangeHandler={editFormChangeHandler}
                                        cancelHandler={cancelHandler}
                                    />
                                ) : (
                                    <Table
                                        building={building}
                                        changeHandler={changeHandler}
                                        deleteHandler={deleteHandler}
                                    />
                                )}
                            </>
                        ))}
                    </tbody>
                        </table>
            </form>
            </div>
            </>
    );
};

export default Details;