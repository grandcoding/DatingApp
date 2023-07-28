import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {Button, Overlay} from '@rneui/themed';
import styles from './Styles';
import ButtonSwitch from '../../components/ButtonSwitch';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {AuthContext} from '../../navigator/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const Register2 = ({navigation}) => {
  const {height, width} = Dimensions.get('screen');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [currentState, setCurrentState] = useState(false);
  const [index, setIndex] = useState(null);
  // const [gender, setGender]=useState('')

  const {genderString, setGenderString, formDetails, setFormDetails} =
    useContext(AuthContext);

  const onSelectSwitch = index => {
    // console.log('Selected index: ' + index);
    setIndex(index);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setCurrentState(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  useEffect(() => {
    if (index === 1) {
      setFormDetails({...formDetails, gender: 'Male'});
    } else {
      setFormDetails({...formDetails, gender: 'Female'});
    }
  }, [index]);
  useEffect(() => {
    let date = selectedDate.getDate().toString();
    let month = (selectedDate.getMonth() + 1).toString();
    let year=(selectedDate.getFullYear())
    let fullDate=date.concat('/',month,'/',year)
    // console.log(fullDate)
    setFormDetails({...formDetails, birthdate: fullDate})
    
  },[selectedDate]);

  const addData = async () => {
    try {
      await firestore()
        .collection('users')
        .add({
          firstName: formDetails.firstName,
          lastName: formDetails.lastName,
          email: formDetails.email,
          birthdate: formDetails.birthdate,
          gender: formDetails.gender,
        })
        .then(result => {
          console.log('Data added successfully');
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer1}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerStyle}>Identify Yourself</Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={[styles.textStyle, {color: '#000000'}]}>
            Lets start by filling some details
          </Text>
        </View>
      </View>

      <View style={styles.genderContainer}>
        <View style={styles.genderTextContainer}>
          <Text style={[styles.textStyle, {color: '#ea1e63'}]}>I am a</Text>
        </View>
        <View style={styles.buttonGroup}>
          <ButtonSwitch
            selectionMode={1}
            roundCorner={true}
            option1={'Male'}
            option2={'Female'}
            onSelectSwitch={onSelectSwitch}
            selectionColor={'#000000'}
          />
        </View>
      </View>
      <View>
        <View style={styles.birthdayContainer}>
          <View style={styles.birthdayTextContainer}>
            <Text style={[styles.textStyle, {color: '#ea1e63'}]}>Birthday</Text>
          </View>
          <View style={styles.calendarContainer}>
            <TouchableOpacity
              onPress={() => {
                showDatePicker();
              }}
              style={styles.calendarInputBoxContainer}>
              {currentState ? (
                <View style={styles.dateContainer}>
                  <Text style={styles.birthdateTextStyle}>
                    {selectedDate.getDate() + '/'}
                  </Text>
                  <Text style={styles.birthdateTextStyle}>
                    {selectedDate.getMonth() + 1 + '/'}
                  </Text>
                  <Text style={styles.birthdateTextStyle}>
                    {selectedDate.getFullYear()}
                  </Text>
                </View>
              ) : (
                <Text style={styles.placeholderStyle}>
                  Enter your birth date
                </Text>
              )}
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <View style={styles.calendarIconContainer}>
                <Icon name="calendar-o" size={25} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Button
            title="Continue"
            onPress={() => {
              setCurrentState(false);
              // addData()
              // console.log(formDetails);
              navigation.navigate('AddPhoto')

            }}
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnStyle}
            titleStyle={styles.btnTextStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default Register2;
