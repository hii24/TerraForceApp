import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers, createUser, updateUser } from '../redux/actions/userActions';
import Input from '../styles/Input';
import UserItem from './UserItem';
import UserModal from './UserModal';
import Button from '../styles/Button';
import { Typography } from '../styles/Typography';

const UserItemList: React.FC = () => {
    const dispatch: any = useDispatch();
    const users = useSelector((state: any) => state.users.users);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);

    const handleDeleteUser = useCallback((userId: number) => {
        dispatch(deleteUser(userId));
    }, [dispatch]);

    const handleCreateUser = (name: string, lastName: string, position: string, age: string) => {
        dispatch(createUser({ name, lastName, position, age }));
        setModalVisible(false);
    };

    const handleUpdateUser = (name: string, lastName: string, position: string, age: string) => {
        dispatch(updateUser(selectedUser.id, { name, lastName, position, age }));
        setModalVisible(false);
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const filteredUsers = users.filter((user: any) => {
        const fullName = `${user.name} ${user.lastName}`.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });

    const openModalForCreate = () => {
        setSelectedUser(null);
        setModalVisible(true);
    };

    const openModalForEdit = (user: any) => {
        setSelectedUser(user);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <Input
                placeholder="Search by name"
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
            />
            <Button onPress={openModalForCreate}>
                <Typography align="center" size="large" weight="bold">Create user</Typography>
            </Button>
            <FlatList
                data={filteredUsers}
                renderItem={({ item }) => (
                    <UserItem user={item} onDelete={handleDeleteUser} onEdit={openModalForEdit} />
                )}
                keyExtractor={(_, index) => index.toString()}
            />
            <UserModal
                visible={isModalVisible}
                onClose={closeModal}
                onSave={selectedUser ? handleUpdateUser : handleCreateUser}
                initialName={selectedUser ? selectedUser.name : ''}
                initialLastName={selectedUser ? selectedUser.lastName : ''}
                initialPosition={selectedUser ? selectedUser.position : ''}
                initialAge={selectedUser ? selectedUser.age : 0}
                title={selectedUser ? 'Edit User' : 'Create User'}
            />
        </View>
    );
};

export default UserItemList;
