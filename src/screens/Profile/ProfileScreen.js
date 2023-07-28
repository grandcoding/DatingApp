import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  VirtualizedList,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useContext} from 'react';
// import LogOut from '../../components/LogOut';
import {Button, ListItem, Overlay} from '@rneui/themed';
import Styles from './Styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronRight,
  faUser,
  faBell,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../../navigator/AuthProvider';

const ProfileScreen = ({navigation}) => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [visible, setVisible] = useState(false);

  const options1 = [
    {id: 1, title: 'Get Notifications', icon: 'faBell'},
    {id: 2, title: 'Location', icon: 'faLocationDot'},
  ];
  const options2 = [
    {
      id: 1,
      title: 'Account Settings',
      goToScreen: 'AccountSettings',
    },
    {
      id: 2,
      title: 'Help Center',
      goToScreen: 'HelpCenter',
    },
    {
      id: 3,
      title: 'About Us',
      goToScreen: 'AboutUs',
    },
  ];
  const options3 = [{id: 1, title: 'Logout'}];
  const options4 = [{id: 1, title: 'Delete Account'}];

  const {signOut, formDetails} = useContext(AuthContext);

  const LogOut = () => {
    Alert.alert(
      'Confirm Logout',
      'You are going to Logout. Do you want to continue?',
      [
        {
          text: 'Yes',
          onPress: () => {
            signOut()
          },
        },
        {
          text: 'No',
          onPress: () => Alert.alert('Response is Negative'),
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  return (
    <View>
      <View style={Styles.container1}>
        <View style={Styles.imageContainer}>
          {/* <FontAwesomeIcon icon={faUser} size={30}/> */}
          <Image
            source={{
              uri: formDetails.imageURL,
            }}
            style={{height: 80, width: 80, borderRadius: 49}}
          />
        </View>
        <View style={Styles.middleContainer}>
          <View style={{marginBottom: 9}}>
            <Text style={{fontSize: 24, color: '#000000'}}>{formDetails.firstName+' '+formDetails.lastName}</Text>
          </View>
          <View>
            <Button
              title="Edit Profile"
              onPress={() => {
                navigation.navigate('EditProfile');
              }}
              containerStyle={{width: 140}}
              buttonStyle={{backgroundColor: '#ea1e63', borderRadius: 30}}
            />
          </View>
        </View>
        <View style={Styles.goIconContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditProfile');
            }}>
            <FontAwesomeIcon icon={faChevronRight} size={26} color="#ea1e63" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.listMainContainer}>
        <View style={Styles.container2}>
          <FlatList
            data={options1}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <ListItem bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                  </ListItem.Content>
                  {item.id == 1 ? (
                    <Switch
                      trackColor={{false: '#767577', true: '#f7a6c1'}}
                      thumbColor={isEnabled1 ? '#ea1e63' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch1}
                      value={isEnabled1}
                    />
                  ) : (
                    <Switch
                      trackColor={{false: '#767577', true: '#f7a6c1'}}
                      thumbColor={isEnabled2 ? '#ea1e63' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch2}
                      value={isEnabled2}
                    />
                  )}
                </ListItem>
              );
            }}
          />
        </View>
        <View style={Styles.container3}>
          <FlatList
            data={options2}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(item.goToScreen);
                  }}>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={Styles.container4}>
          <FlatList
            data={options3}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate('SignOut');
                    LogOut();
                  }}>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={Styles.container5}>
          <FlatList
            data={options4}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DeleteAccount');
                  }}>
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      {console.log(`Switch1:${isEnabled1} and Switch2: ${isEnabled2}`)}
    </View>
  );
};

export default ProfileScreen;
