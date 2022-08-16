import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const FeedbackOptionsButton = styled.button`
    font-size: 15px;
    color: #ffffff !important;
    padding: 8px 15px;
    border-radius: 5px;
    border: 2px hidden #f3c846;
    background: #525ef6;

  &:hover {
    color: #ffffff !important;
    background: #272c7b; }
`;
