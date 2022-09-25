import React from 'react';
import { FeedbackList, FeedbackButton, FeedbackBtnItem } from 'components/ui';
import { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  onBtnClick = event => {
    const { name } = event.target;
    this.props.onLeaveFeedback(name);
  };

  render() {
    const { options } = this.props;
    const keys = Object.keys(options);

    return (
      <FeedbackList>
        {/* <li>
          <FeedbackButton type="button" onClick={this.onBtnClick} name="good">
            Good
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton
            type="button"
            onClick={this.onBtnClick}
            name="neutral"
          >
            Neutral
          </FeedbackButton>
        </li>
        <li>
          <FeedbackButton type="button" onClick={this.onBtnClick} name="bad">
            Bad
          </FeedbackButton>
        </li> */}

        {keys.map(key => {
          //   console.log(key);
          return (
            <FeedbackBtnItem key={key}>
              <FeedbackButton
                type="button"
                onClick={this.onBtnClick}
                name={key}
              >
                {key}
              </FeedbackButton>
            </FeedbackBtnItem>
          );
        })}
      </FeedbackList>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
};
