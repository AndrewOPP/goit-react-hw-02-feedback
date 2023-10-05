import { Component } from 'react';
import css from './Statistics.module.css';
export class Statistics extends Component {
  render() {
    const { good } = this.props;
    const { bad } = this.props;
    const { neutral } = this.props;
    const { total } = this.props;
    const { positivePercentage } = this.props;

    if (!total) {
      return (
        <div className={css.noStatText}>
          <p>No feedback given</p>
        </div>
      );
    }

    return (
      <div className={css.divContent}>
        <p className={css.goodMark}>Good: {good}</p>
        <p className={css.neutralMark}>Neutral: {neutral}</p>
        <p className={css.badMark}>Bad: {bad}</p>
        <p className={css.total}>Total: {total} </p>
        <p className={css.positiveFeedback}>
          PositiveFeedback: {positivePercentage}
        </p>
      </div>
    );
  }
}
