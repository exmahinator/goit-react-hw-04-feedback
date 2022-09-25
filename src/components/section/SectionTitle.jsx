import React from 'react';
import { FeedbackTitle } from 'components/ui';
import PropTypes from 'prop-types';

function SectionTitle(props) {
  return (
    <section>
      <FeedbackTitle>{props.title}:</FeedbackTitle>
      {props.children}
    </section>
  );
}

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
