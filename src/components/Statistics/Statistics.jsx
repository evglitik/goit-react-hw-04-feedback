import { StatisticTitle } from "./Statistic.styled";
import PropTypes from 'prop-types';


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
          <StatisticTitle>Statistics </StatisticTitle>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bag: {bad}</p>
          <p>Total: {total}</p>
          <p>
            Positive feedbeack: {positivePercentage ? positivePercentage : 0}%
          </p>
        </>
    
  );
};


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};