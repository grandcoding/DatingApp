import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const ButtonSwitch = ({
  navigation,
  selectionMode,
  roundCorner,
  option1,
  option2,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const [getRoundCorner, setRoundCorner] = useState(roundCorner);

  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };

  const {height, width} = Dimensions.get('screen');
  return (
    <View>
      <View
        style={{
          height: 44,
          width: width - 50,
          //   backgroundColor: '#ea1e63',
          borderRadius: getRoundCorner ? 25 : 0,
          borderWidth: 1,
          borderColor: '#f2f2f2',
          flexDirection: 'row',
          justifyContent: 'center',
          padding: 2,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 1 ? '#ea1e63' : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            // paddingRight: 13
            marginRight: 20
          }}>
          <Text
            style={{
              color: getSelectionMode == 1 ? '#eeeeee' : selectionColor,
              fontSize: 18,
            }}>
            {option1}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          TouchableOpacity
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}
          style={{
            flex: 1,

            backgroundColor: getSelectionMode == 2 ? '#ea1e63' : 'white',
            borderRadius: getRoundCorner ? 25 : 0,
            justifyContent: 'center',
            alignItems: 'center',
            // marginHorizontal: 40
          }}>
          <Text
            style={{
              color: getSelectionMode == 2 ? '#eeeeee' : selectionColor,
              fontSize: 18,
            }}>
            {option2}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonSwitch;
