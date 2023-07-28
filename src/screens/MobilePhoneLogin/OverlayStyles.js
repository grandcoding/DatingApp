import { StyleSheet } from "react-native"
import { Dimensions } from "react-native"

const {height, width}=Dimensions.get('screen')

const styles = StyleSheet.create({
    // otpOverlayHeaderContainer:{
    //     flex:1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderColor: 'black',   
    //     borderWidth: 1,
    // },
    mainContainer:{
        // borderColor: 'black',   
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer:{
        // borderColor: 'black',   
        // borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        // backgroundColor: '#ea1e63',
        // width: width-24,
        // marginTop: -


    },
    headerTextStyle:{
        fontSize: 26,
        textAlign: 'center',
        color: '#ea1e63'
    },
    textContainer:{
        // borderColor: 'black',   
        // borderWidth: 1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer:{
        //  borderColor: 'black',   
        // borderWidth: 1,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textStyle:{
        color: '#000000',
        fontSize: 16,
        textAlign: 'center'
    },
    otpInputStyle:{
        // borderColor: 'black',   
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    otpIndividualInputStyle:{
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        // borderWidth: 1,
        // borderBottomColor: 'black',
        margin: 1.8,   
        // borderBottomWidth: 1,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    btnStyle:{
        // borderColor: 'purple',   
        // borderWidth: 1,
        backgroundColor: '#ea1e63',
        padding: 13,
        width: 135,
        borderRadius: 8
    }
})

export default styles