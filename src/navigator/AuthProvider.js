import {View, Text, ActivityIndicator, Alert} from 'react-native';
import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  // const [confirm, setConfirm] = useState(null);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  // const [genderIndex, setGenderIndex]=useState(null)
  const [dateString, setDateString] = useState('');
  const [genderString, setGenderString] = useState('');
  const [profile, setProfile] = useState([]);
  // const [uid, setUid] = useState('');
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    birthdate: '',
    imageURL: '',
    mobileNumber: '',
    uid: '',
  });
  const [confirm, setConfirm] = useState(null);

  // const [code, setCode] = useState('');
  return (
    <AuthContext.Provider
      value={{
        formDetails,
        setFormDetails,
        user,
        setUser,
        fname,
        setFname,
        lname,
        setLname,
        email,
        setEmail,
        dateString,
        setDateString,
        genderString,
        setGenderString,
        profile,
        setProfile,
        confirm,
        setConfirm,
        // signInWithPhoneNumber: async phoneNumber => {
        //   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        //   setConfirm(confirmation);
        // },
        // confirmCode: async () => {
        //   try {
        //     await confirm.confirm(code)

        //   } catch (error) {
        //     console.log('Invalid Code');
        //   }
        //   setFormDetails({...formDetails, uid: response.user.uid});
        // },
        signOut: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
