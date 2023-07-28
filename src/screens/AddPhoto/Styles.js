import { StyleSheet, Dimensions } from "react-native"

const {height, width}=Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        // borderWidth: 2,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    iconInnerContainer:{
        // borderWidth: 1,
        // borderColor: 'red',
        // margin: 4,
    
        borderRadius: 70,
        height: 130,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ea1e63'
    },
    iconOuterContainer:{
        // borderColor: 'green',
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 70
    },
    textContainer:{
        // borderWidth: 1,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer:{
        marginVertical: 18
    },  
    subHeaderContainer:{
        // borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 20,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    textStyle:{
        fontSize: 18,
        color: '#000'
    },
    btnGroupContainer:{
        // borderWidth: 2,
        width: width-100,
        alignSelf: 'center',
        // paddingVertical: 10
    },
    btnContainer:{
        marginVertical: 10
    },
    btnStyle:{
        backgroundColor: '#ea1e63',
        borderRadius: 30,
        height: 50
    },
    btnTextStyle:{
        fontSize: 18
    }
})

export default styles