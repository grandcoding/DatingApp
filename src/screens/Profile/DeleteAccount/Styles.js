import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const {height, width}=Dimensions.get('screen')
// console.log(x)

const styles=StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        
    },
    container1:{
        // borderColor: 'green',
        // borderWidth: 2,
        // marginTop: 90
        flex: 4,
        justifyContent: 'flex-end',
        paddingBottom: 40
    },
    iconContainer:{
        // borderColor: 'red',
        // borderWidth: 2,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height: 100,
        margin: 5,
        // borderRadius: 30
    },
    subTextContainer:{
        // borderColor: 'orange',
        // borderWidth: 2,
        flex: 2,
        marginBottom: 50
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    subTextIndividualContainer:{
        // borderColor: 'black',
        // borderWidth: 1,
        margin: 5
    },
    btnContainer:{
        flex: 4,
        // borderColor: 'black',
        // borderWidth: 2,
    },
    btnInnerContainer:{
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
        // marginHorizontal: width-100
    },
    surroundingIconStyle:{
        // borderColor: 'black',
        // borderWidth: 1,
        margin: 5,
        borderRadius: 50,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ea1e63'
        // flexDirection: 'row',
        // justifyContent: 'center',
    },
    headerStyle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ea1e63',
        textAlign: 'center'
    },
    subTextStyle:{
        color: '#000000',
        fontSize: 18,
        textAlign: 'center'
    },
    textContainer2:{
        marginTop: 40,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    btnIndividualStyle:{
        backgroundColor: '#ea1e63',
        width: width-80,
        borderRadius: 30
    },
    btnTextStyle:{
        fontSize: 18
    }
    
})

export default styles