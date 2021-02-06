import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector((state) => state.notification.text);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  if (notification.length === 0) {
    return <div />;
  }

  return (
    <div style={style}>
      {notification}
    </div>
  );
};

export default Notification;
