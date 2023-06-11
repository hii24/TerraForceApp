import styled from 'styled-components/native';

const sizes = {
    small: '14px',
    large: '18px',
    big: '32px',
};


const weights = {
    normal: '400',
    bold: '700',
};

const aligns = {
    center: 'center',
    normal: 'left',
};

interface TypographyProps {
    size?: keyof typeof sizes;
    weight?: keyof typeof weights;
    align?: keyof typeof aligns;
}

export const Typography = styled.Text<TypographyProps>`
  font-size: ${({ size }) => (size ? sizes[size] : sizes.small)};
  font-weight: ${({ weight }) => (weight ? weights[weight] : weights.normal)};
  text-align: ${({ align }) => (align ? aligns[align] : aligns.normal)};
`;