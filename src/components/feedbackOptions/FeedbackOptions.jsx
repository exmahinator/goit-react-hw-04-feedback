import React from 'react';
import { FeedbackList, FeedbackButton, FeedbackBtnItem } from 'components/ui';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);
  return (
    <FeedbackList>
      {keys.map(key => {
        return (
          <FeedbackBtnItem key={key}>
            <FeedbackButton type="button" onClick={() => onLeaveFeedback(key)}>
              {key}
            </FeedbackButton>
          </FeedbackBtnItem>
        );
      })}
    </FeedbackList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

// ---------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { FeedbackList, FeedbackButton, FeedbackBtnItem } from 'components/ui';
// import { Component } from 'react';
// import PropTypes from 'prop-types';

// class FeedbackOptions extends Component {
//   render() {
//     const { options } = this.props;

//     const keys = Object.keys(options);

//     return (
//       <FeedbackList>
//         {keys.map(key => {
//           return (
//             <FeedbackBtnItem key={key}>
//               <FeedbackButton
//                 type="button"
//                 onClick={() => this.props.onLeaveFeedback(key)}
//               >
//                 {key}
//               </FeedbackButton>
//             </FeedbackBtnItem>
//           );
//         })}
//       </FeedbackList>
//     );
//   }
// }

// export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   options: PropTypes.exact({
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   }),
// };
// ---------------------------------------------------------------------------------------------------------
