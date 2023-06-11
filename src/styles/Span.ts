import styled from 'styled-components/native';


const weights = {
    normal: '400',
    bold: '700',
};

interface SpanProps {
    weight?: keyof typeof weights;
    color?: string;
}

export const Span = styled.Text<SpanProps>`
    font-weight: ${({ weight }) => (weight ? weights[weight] : weights.normal)};
    color: ${({ color }) => (color ? color : '#000')};
`;