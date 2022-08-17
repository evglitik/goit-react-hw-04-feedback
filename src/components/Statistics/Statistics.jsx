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
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bag: {bad}</p>
          <p>Total: {total}</p>
          <p>
            Positive feedbeack: {positivePercentage ? positivePercentage : 0}%
          </p>
        </>
      ) : (
        <>
          <p>No feedbeack given</p>
        </>
      )}
    </>
  );
};


Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};