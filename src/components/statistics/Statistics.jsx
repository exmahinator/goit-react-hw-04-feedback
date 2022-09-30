import React from 'react';
import { FeedbackItem } from 'components/ui';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <>
      <ul>
        <FeedbackItem>Good: {good}</FeedbackItem>
        <FeedbackItem>Neutral: {neutral}</FeedbackItem>
        <FeedbackItem>Bad: {bad}</FeedbackItem>
        <FeedbackItem>Total: {total}</FeedbackItem>
        <FeedbackItem>Positive feedback: {percentage}%</FeedbackItem>
      </ul>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

// --------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { FeedbackItem } from 'components/ui';
// import PropTypes from 'prop-types';

// function Statistics({ good, neutral, bad, total, positivePercentage }) {
//   return (
//     <>
//       <ul>
//         <FeedbackItem>Good: {good}</FeedbackItem>
//         <FeedbackItem>Neutral: {neutral}</FeedbackItem>
//         <FeedbackItem>Bad: {bad}</FeedbackItem>
//         <FeedbackItem>Total: {total()}</FeedbackItem>
//         <FeedbackItem>Positive feedback: {positivePercentage()}%</FeedbackItem>
//       </ul>
//     </>
//   );
// }

// export default Statistics;

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.func.isRequired,
//   positivePercentage: PropTypes.func.isRequired,
// };
// --------------------------------------------------------------------------------------------------------
