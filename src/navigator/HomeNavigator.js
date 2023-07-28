import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chats from '../screens/Chats/Chats';
// import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import ProfileNavigator from './ProfileNavigator';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserFriends, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Chats':
      iconName = 'wechat';
      break;
    case 'Home':
      iconName = 'home';
      break;
    case 'Profile':
      iconName = 'user';
      break;
    default:
      break;
  }
  return <Icon name={iconName} color={color} size={29} />;
};

const HomeNavigator = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })} initialRouteName='Home'>
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{tabBarBadge: 3, tabBarActiveTintColor: '#ea1e63', headerTitleAlign: 'center', headerTintColor: '#ea1e63'}}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: 'Dating',
          headerTitleStyle:{fontWeight: '600', fontSize: 28, color: '#ea1e63'},
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('AboutUs');

              }} style={{marginRight: 8}}>
              <FontAwesomeIcon icon={ faHeartCirclePlus } color={'#ea1e63'} size={26}/>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('Friendlist');
              }} style={{marginLeft: 8}}>
              <FontAwesomeIcon icon={ faUserFriends } color={'#ea1e63'} size={26} />
              
              {/* <Text>Users</Text> */}
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          tabBarActiveTintColor: '#ea1e63',
        }}
      />
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{headerShown: false, tabBarActiveTintColor: '#ea1e63'}}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
