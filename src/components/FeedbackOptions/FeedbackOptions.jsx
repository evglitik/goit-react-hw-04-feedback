import {
  FeedbackOptionsList,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ arreyValue, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {arreyValue.map((el, inx) => {
        const value = Object.keys(el)[0];
        return (
          <li key={inx}>
            <FeedbackOptionsButton
              type="button"
              onClick={() => onLeaveFeedback(value)}
            >
              {value}
            </FeedbackOptionsButton>
          </li>
        );
      })}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  arreyValue: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number,
    }).isRequired,
    PropTypes.shape({
      neutral: PropTypes.number,
    }).isRequired,
    PropTypes.shape({
      bad: PropTypes.number,
    }).isRequired,
  ).isRequired,
  onLeaveFeedback: PropTypes.func,
};
