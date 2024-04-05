import React from 'react';
import styled from 'styled-components';

const TextRed = styled.span`
  color: red;
`;

export default function FavoriteFoodProps({ food }) {
  return (
    <>
      가장 좋아하는 음식은 <TextRed>{food}</TextRed>입니다.
    </>
  );
}

FavoriteFoodProps.defaultProps = {
  food: '초밥',
};
