import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
    );
  };

  addFeedBack = key => {
    this.setState({
      [key]: this.state[key] + 1,
    });
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.addFeedBack} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
