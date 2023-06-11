import React, { useCallback } from 'react';
import { View} from 'react-native';

import Container from '../styles/Container';
import { Typography } from '../styles/Typography';
import { Span } from '../styles/Span';
import Avatar from '../styles/Avatar';
import Button from '../styles/Button';
import Row from '../styles/Row';

interface UserItemProps {
    user: {
        id: number;
        avatar: string;
        name: string;
        lastName: string;
        position: string;
        age: number;
    };
    onDelete: (userId: number) => void;
    onEdit: (user: any) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onDelete, onEdit }) => {
    const handleDelete = useCallback(() => {
        onDelete(user.id);
    }, [onDelete, user.id]);

    const handleEdit = useCallback(() => {
        onEdit(user);
    }, [onEdit, user]);

    return (
        <Container>
            <Row>
                <Avatar
                    source={{ uri: user.avatar }}
                />
                <View>
                    <Typography>
                        name: <Span weight="bold">{user.name}</Span>
                    </Typography>
                    <Typography>
                        lastName: <Span weight="bold">{user.lastName}</Span>
                    </Typography>
                    <Typography>
                        position: <Span weight="bold">{user.position}</Span>
                    </Typography>
                    <Typography>
                        age: <Span weight="bold">{user.age}</Span>
                    </Typography>
                    <Button onPress={handleEdit}>
                        <Typography align="center" weight="bold">Edit</Typography>
                    </Button>

                    <Button onPress={handleDelete}>
                        <Typography align="center" weight="bold">Delete</Typography>
                    </Button>
                </View>
            </Row>
        </Container>
    );
};

export default UserItem;
