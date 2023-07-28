import {View, Text} from 'react-native';
import React from 'react';

export default function Timer() {
  const [time, setTime] = React.useState(30);
  const timerRef = React.useRef(time);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View>
      <Text style={{color: '#eeeeee', textAlign: 'center', fontSize: 18}}>Resend in {time}s</Text>
    </View>
  );
}
