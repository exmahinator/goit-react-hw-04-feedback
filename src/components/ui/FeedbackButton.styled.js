import styled from 'styled-components';

const FeedbackButton = styled.button`
  min-width: 100px;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: aqua;
  cursor: pointer;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &:active {
    background-color: limegreen;
  }
`;

export default FeedbackButton;
