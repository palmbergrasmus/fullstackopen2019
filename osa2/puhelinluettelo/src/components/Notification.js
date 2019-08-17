import React from 'react';
import styles from '../styles';

const Notification = ({ message, color }) => {
  
  return (
    !!message &&
      <div style={{ ...styles.notification, color }}>
        <h2>{message}</h2>
      </div>
  )
}

export default Notification
