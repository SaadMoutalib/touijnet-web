import React, { useState } from 'react';
import MaterialTable from 'material-table';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteUserStart, updateUserStart } from '../../redux/User/user.actions';
import { Chip } from '@material-ui/core';

const ManageUsers = ({ users }) => {
    const dispatch = useDispatch();

    const [columns] = useState([
        { title: 'Name', field: 'displayName' },
        { title: 'Creation Date', field: 'createdDate', editable: 'never', render: rowData => moment(rowData.createdDate.seconds * 1000).format('DD/MM/YYYY hh:mm:ss').toString() },
        { title: 'Email', field: 'email' },
        {
            title: 'Roles', field: 'userRoles', render: rowData => <div>{
                rowData.userRoles.map((role, index) => {
                    return (
                        <Chip
                            key={index}
                            label={role}
                            style={{ marginRight: 10 }}
                        />)
                })
            }
            </div>
        },
    ]);

    const handleDeleteUser = (oldData) => {
        return new Promise((resolve, reject) => {
            dispatch(deleteUserStart(oldData.documentID));
            resolve();
        });
    }

    const handleUpdateUser = (newData, oldData) => {
        return new Promise((resolve, reject) => {
            console.log(oldData);
            dispatch(updateUserStart({ documentID: oldData.documentID, ...newData }));
            resolve();
        });
    }

    return (
        <MaterialTable
            title={`${Array.isArray(users) ? users.length : "0"} Users`}
            columns={columns}
            data={users}
            editable={{
                onRowDelete: oldData => handleDeleteUser(oldData),
                onRowUpdate: (newData, oldData) => handleUpdateUser(newData, oldData)
            }}
        />
    )
}

export default ManageUsers;