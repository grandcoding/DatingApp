import {StyleSheet, Dimensions} from 'react-native';

const {height, width}=Dimensions.get('screen')

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // borderWidth: 2
  },

  innerContainer1: {
    justifyContent: 'center',
    // borderWidth: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 120
  },
  headerContainer:{
    // borderWidth: 1,
  },
  subHeaderContainer:{
    marginTop: 20
  },
  genderContainer:{
    // borderWidth: 1
  },
  genderTextContainer:{
    // borderWidth: 1,
    paddingLeft: 12,
    marginBottom: 10
  },
  birthdayTextContainer:{
    paddingLeft: 12,
    marginVertical: 10
  },
  birthdayContainer:{
    // borderWidth: 1,
    marginVertical: 15
  },
  headerStyle:{
    color: '#ea1e63',
    fontSize: 30,
    fontWeight: '700'
  },
  textStyle:{
    fontSize: 18
  },
  buttonGroup: {
    flexDirection: 'row',
    // borderWidth: 1,
    justifyContent: 'center'
  },
  calendarContainer: {
    borderColor: 'black',
    // borderWidth: 1,
    flexDirection: 'row',
    margin: 2,
  },
  calendarInputBoxContainer: {
    // borderColor: 'red',
    // borderWidth: 3,
    flex: 1,
    margin: 3,
    flexDirection: 'row',
    // justifyContent: 'flex-start'
    backgroundColor: '#ffffff',
    borderRadius: 13,
    height: 45,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calendarIconContainer: {
    borderColor: 'black',
    // borderWidth: 1,
    // margin: 10
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: ''
  },
  dateContainer: {
    flexDirection: 'row',
    // borderColor: 'green',
    // borderWidth: 1,
    flex: 9,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  
  },
  btnContainer:{
    // borderWidth: 1,
    width: width-40,
    alignSelf: 'center',
    marginTop: 20
  },
  btnStyle:{
    backgroundColor: '#ea1e63',
    borderRadius: 30,
    height: 50
  },
  btnTextStyle:{
    fontSize: 18
  },
  birthdateTextStyle:{
    fontSize: 18,
    color: '#000000'
    
  },
  placeholderStyle: {
    // borderWidth: 1,
    flex: 9,
    fontSize: 18,
    color: '#999',
  
  },
});

export default styles;
