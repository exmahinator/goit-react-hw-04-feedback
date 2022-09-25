import React, { Component } from 'react';
import { FeedbackSection } from 'components/ui';
import Statistics from 'components/statistics/Statistics';
import Notification from 'components/notification/Notification';
import FeedbackOptions from 'components/feedbackOptions/FeedbackOptions';
import SectionTitle from 'components/section/SectionTitle';
import PropTypes from 'prop-types';

class Feedback extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  incrementValue = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.ceil((good * 100) / total) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    // Теж працює чудово:
    // const total = good + neutral + bad;
    // const positive = total ? Math.ceil((good * 100) / total) : 0;

    return (
      <FeedbackSection>
        <div>
          <h1>Expresso</h1>
          {/* <FeedbackList>
          <li>
            <FeedbackButton
              type="button"
              onClick={this.incrementValue}
              name="good"
            >
              Good
            </FeedbackButton>
          </li>
          <li>
            <FeedbackButton
              type="button"
              onClick={this.incrementValue}
              name="neutral"
            >
              Neutral
            </FeedbackButton>
          </li>
          <li>
            <FeedbackButton
              type="button"
              onClick={this.incrementValue}
              name="bad"
            >
              Bad
            </FeedbackButton>
          </li>
        </FeedbackList> */}

          <SectionTitle title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.incrementValue}
            />
          </SectionTitle>

          {/* <p>Statistic</p>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
        </ul> */}

          <SectionTitle title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </SectionTitle>
        </div>
      </FeedbackSection>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
