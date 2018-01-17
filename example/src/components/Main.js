import React from 'react';
import { connect } from 'react-redux';
import Input from 'larch-input';
import styles from '../index.css'


class Main extends React.Component  {

  render (){
    const scheme = {
      bg: '#1D271D',
      fg: '#76C577'
    }
      
    return(
      <div className={styles.centering}>
        <Input scheme={scheme}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
      data: state.data,
    })
}

export default connect(mapStateToProps, null )(Main);
