import { Component } from 'react';
import css from './FeedbackOptions.module.css';
export class FeedbackOptions extends Component {
  render() {
    const { options } = this.props;
    return (
      <>
        <div className={css.buttonsDiv}>
          <button className={css.buttons} onClick={() => options('good')}>
            Good
          </button>
          <button className={css.buttons} onClick={() => options('neutral')}>
            Neutral
          </button>
          <button className={css.buttons} onClick={() => options('bad')}>
            Bad
          </button>
        </div>
      </>
    );
  }
}
