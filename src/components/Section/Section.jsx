import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  return <section>{title ? <h2>{title}</h2> : null}</section>;
};

Section.propTypes = {
  title: PropTypes.string,
};