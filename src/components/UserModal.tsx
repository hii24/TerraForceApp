import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import Input from '../styles/Input';
import Button from '../styles/Button';
import Wrapper from '../styles/Wrapper';
import { Typography } from '../styles/Typography';
import Row from '../styles/Row';

interface UserModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (name: string, lastName: string, position: string, age: string) => void;
    initialName?: string;
    initialLastName?: string;
    initialPosition?: string;
    initialAge?: string;
    title: string;
}

const UserModal: React.FC<UserModalProps> = ({
    visible,
    onClose,
    onSave,
    initialName = '',
    initialLastName = '',
    initialPosition = '',
    initialAge = "",
}) => {
    const [name, setName] = useState(initialName);
    const [lastName, setLastName] = useState(initialLastName);
    const [position, setPosition] = useState(initialPosition);
    const [age, setAge] = useState(initialAge);

    useEffect(() => {
        setName(initialName);
        setLastName(initialLastName);
        setPosition(initialPosition);
        setAge(initialAge);
    }, [initialName, initialLastName, initialPosition, initialAge]);

    const handleSave = () => {
        onSave(name, lastName, position, age);
        setName('');
        setLastName('');
        setPosition('');
        setAge('');
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <Wrapper>
                <Input
                    placeholder="First Name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
                <Input
                    placeholder="Position"
                    value={position}
                    onChangeText={text => setPosition(text)}
                />
                <Input
                    placeholder="Age"
                    value={age.toString()}
                    onChangeText={text => setAge(text)}
                />
                <Row>
                    <Button onPress={handleSave}>
                        <Typography align="center" size="large" weight="bold">{initialName ? "Save" : "Create"}</Typography>
                    </Button>
                    <Button onPress={onClose}>
                        <Typography align="center" size="large" weight="bold">Cancel</Typography>
                    </Button>
                </Row>
            </Wrapper>
        </Modal>
    );
};

export default UserModal;
