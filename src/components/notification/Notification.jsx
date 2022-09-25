import React from 'react';
import { FeedbackNotification } from 'components/ui';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <FeedbackNotification>{message}</FeedbackNotification>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
