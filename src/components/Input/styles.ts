import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    background: #232129;
    margin-bottom: 8px;
    border-radius: 10px;
    border-color: #232129;
    border-width: 2px;

    flex-direction: row;
    align-items: center;

    ${(props) => props.isFocused
        && css`
            border-color: #ff9900;
        `}
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 10px;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #fff;
    font-size: 16px;
    font-family: "RobotoSlab-Regular";
    margin-left: 10px;
`;
