import React from 'react';
const classNames = require('classnames');
import styles from './input.css';
import './fonts.css'

const Input = ({scheme}) => {

    const email = {
      color: scheme.bg,
      backgroundColor: scheme.fg
    }

    const submit = {
      color: scheme.fg,
      backgroundColor: scheme.bg
    }

    return(
      <form action="" method="post" className={styles.form}>
        <label className={styles.hidden}>Email</label>
        <input style={email} placeholder="Email address" className={classNames(styles.input,styles.email)} required="" type="email"/>
        <input style={submit} value="Submit" className={classNames(styles.input,styles.submit)} type="submit"/>    
    </form>
    )
  }

  export default Input



