import {
  FeedbackOptionsList,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ arreyValue, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {arreyValue.map((el, inx) => {
        return (
          <li key={inx}>
            <FeedbackOptionsButton
              type="button"
              onClick={() => onLeaveFeedback(el)}
            >
              {el}
            </FeedbackOptionsButton>
          </li>
        );
      })}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  arreyValue: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
