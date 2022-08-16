import { FeedbackOptionsList, FeedbackOptionsButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ arreyValue, onLeaveFeedback }) => {
  console.log(Object.keys(arreyValue[0])[0]);
  return (
    <FeedbackOptionsList>
      {arreyValue.map((el, inx) => {
        const value = Object.keys(el)[0];
        return (
          <li key={inx}>
            <FeedbackOptionsButton type="button" onClick={() => onLeaveFeedback(value)}>
              {value}
            </FeedbackOptionsButton>
          </li>
        );
      })}
    </FeedbackOptionsList>
  );
};
