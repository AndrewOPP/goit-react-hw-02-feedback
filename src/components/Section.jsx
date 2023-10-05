import { Component } from 'react';
import css from './Section.module.css';
export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.divContent}>
        <h2 className={css.titleContent}>{title}</h2>
        {children}
      </div>
    );
  }
}
