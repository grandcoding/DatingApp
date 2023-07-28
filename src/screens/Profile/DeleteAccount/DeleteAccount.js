import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import styles from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon  from 'react-native-vector-icons/FontAwesome5';


const DeleteAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.iconContainer}>
          <View style={styles.surroundingIconStyle}>
            <Icon name='trash' size={48} color='#ffffff'/>
          </View>
        </View>
        <View>
          <Text style={styles.headerStyle}>Are you sure?</Text>
        </View>
      </View>
      <View style={styles.subTextContainer}>
        <View style={[styles.subTextIndividualContainer, ]}>
          <Text style={styles.subTextStyle}>
            If you delete your account, you will loose your profile, chat
            history, photos and matches
          </Text>
        </View>
        <View style={[styles.subTextIndividualContainer, styles.textContainer2]}>
          <Text style={styles.subTextStyle}>Do you wish to continue?</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <View>
          <Button title={'Confirm'} containerStyle={styles.btnInnerContainer} buttonStyle={styles.btnIndividualStyle} titleStyle={styles.btnTextStyle}/>
        </View>
        <View>
          <Button title={'Cancel'}  containerStyle={styles.btnInnerContainer} buttonStyle={styles.btnIndividualStyle} titleStyle={styles.btnTextStyle}/>
        </View>
      </View>
    </View>
  );
};

export default DeleteAccount;
