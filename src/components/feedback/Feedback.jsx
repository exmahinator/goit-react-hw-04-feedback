import React, { useState, useMemo } from 'react';
import { FeedbackSection } from 'components/ui';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import SectionTitle from 'components/section/SectionTitle';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = useMemo(() => good + neutral + bad, [good, neutral, bad]);
  const percentage = useMemo(
    () => (total ? Math.ceil((good * 100) / total) : 0),
    [good, total]
  );

  const incrementValue = key => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        alert('Something went wrong...');
        break;
    }
  };

  return (
    <FeedbackSection>
      <div>
        <h1>Expresso</h1>

        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={incrementValue}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </div>
    </FeedbackSection>
  );
};

export default Feedback;

// ----------------------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import { FeedbackSection } from 'components/ui';
// import Statistics from 'components/statistics/Statistics';
// import Notification from 'components/notification/Notification';
// import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
// import SectionTitle from 'components/section/SectionTitle';
// import PropTypes from 'prop-types';

// class Feedback extends Component {
//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   incrementValue = name => {
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     let total = 0;
//     const values = Object.values(this.state);
//     for (const value of values) {
//       total += value;
//     }
//     return total;

//     // const { good, neutral, bad } = this.state;
//     // return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.ceil((good * 100) / total) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     // Теж працює чудово:
//     // const total = good + neutral + bad;
//     // const positive = total ? Math.ceil((good * 100) / total) : 0;

//     return (
//       <FeedbackSection>
//         <div>
//           <h1>Expresso</h1>

//           <SectionTitle title="Please leave feedback">
//             <FeedbackOptions
//               options={this.state}
//               onLeaveFeedback={this.incrementValue}
//             />
//           </SectionTitle>

//           <SectionTitle title="Statistics">
//             {this.countTotalFeedback() ? (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback}
//                 positivePercentage={this.countPositiveFeedbackPercentage}
//               />
//             ) : (
//               <Notification message="There is no feedback" />
//             )}
//           </SectionTitle>
//         </div>
//       </FeedbackSection>
//     );
//   }
// }

// export default Feedback;

// Feedback.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };
// ----------------------------------------------------------------------------------------------------
