import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Box } from '../Box';
import { GlobalStyle } from './GlobalStyle';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => ({
      [name]: (prevState[name] += 1),
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const arrValueState = Object.keys(this.state);

    return (
      <Box p={3} as="main">
        <Section title="Please leave feedback">
          <FeedbackOptions
            arreyValue={arrValueState}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedbeack given" />
          )}
        </Section>
        <GlobalStyle />
      </Box>
    );
  }
}
