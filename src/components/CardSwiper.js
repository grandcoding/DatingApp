import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import Data from '../Data';
import {Button} from '@rneui/themed';

const CardSwiper = () => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
      <Swiper
        cards={Data}
        renderCard={card => {
          return (
            <View style={styles.card}>
              <View>
                <Image source={{uri: card.url}} style={styles.cardImage} />
              </View>
              <View
                style={{marginTop: 10, width: 250}}>
                <Text style={styles.text1}>{card.name}</Text>
                <Text style={styles.text2}>{card.location}</Text>
              </View>
            </View>
          );
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        stackSize={3}
        infinite
        animateCardOpacity></Swiper>
    </View>
  );
};

export default CardSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 0.8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text1: {
    // textAlign: 'center',
    // borderColor: 'black',
    // borderWidth: 1,
    // alignSelf: 'flex-start',
    fontSize: 30,
    color: '#ea1e63',
    // fontWeight: '00',
    backgroundColor: 'transparent',
  },
  text2:{
    fontSize: 20,
    color: '#ea1e63',
    // fontWeight: '500',
    backgroundColor: 'transparent',
  },
  cardImage: {
    // borderColor: 'black',
    // borderWidth: 1,
    height: 340,
    width: 250,
  },
});
