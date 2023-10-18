import { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const addFeedBack = key => {
    if (key === 'good') return setGood(good + 1);
    if (key === 'bad') return setBad(bad + 1);
    if (key === 'neutral') return setNeutral(neutral + 1);
  };

  // useEffect(() => {
  //   first;
  // }, [good, neutral, bad]);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) + '%';
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={addFeedBack} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

// export class App extends Component {
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// };

// countPositiveFeedbackPercentage = () => {
//   return (
//     Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
//   );
// };

// addFeedBack = key => {
//   this.setState({
//     [key]: this.state[key] + 1,
//   });
// };

// render() {
//   return (
//     <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={this.addFeedBack} />
//       </Section>

//       <Section title="Statistics">
//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         />
//       </Section>
//     </>
//   );
// }
// }
