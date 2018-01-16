import React from 'react';
const classNames = require('classnames');
import styles from './input.css';
import './fonts.css'

const Block = ({data}) => {

    return(
      <form action="" method="post" className={styles.form}>
      <div className="newsletter__message hidden border--fg"></div>
        <label className={styles.hidden}>Email</label>
        <input id="fieldEmail" name="cm-hiiyudd-hiiyudd" placeholder="Email address" className={classNames(styles.input,styles.email)} required="" type="email"/>
        <input value="Submit" className={classNames(styles.input,styles.submit)} type="submit"/>
     
    </form>
    )
  }

  export default Block



