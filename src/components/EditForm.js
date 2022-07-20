import React from "react";

const EditForm = ({
    editFormData,
    editFormChangeHandler,
    cancelHandler,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="id"
                    required="required"
                    placeholder="enter id"
                    name="id"
                    value={editFormData.id}
                    onChange={editFormChangeHandler}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="enter name"
                    name="name"
                    minLength="3"
                    value={editFormData.name}
                    onChange={editFormChangeHandler}
                ></input>
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="enter area"
                    name="area"
                    value={editFormData.area}
                    onChange={editFormChangeHandler}
                ></input>
            </td>
            <td>
                <input
                    type="location"
                    placeholder="enter location"
                    name="location"
                    value={editFormData.location}
                    onChange={editFormChangeHandler}
                ></input>
            </td>
            <td>
                <input
                    type="image alt=''"
                    placeholder="enter image"
                    name="image"
                    value={editFormData.image}
                    onChange={editFormChangeHandler}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditForm;
