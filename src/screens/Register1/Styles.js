import { StyleSheet, Dimensions } from "react-native"

const {height, width}=Dimensions.get('screen')

const styles = StyleSheet.create({
    container:{
        // borderWidth: 1,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        
    },
    textInputStyle:{
        // borderColor: 'black',
        // borderWidth: 1,
        fontSize: 20,
        backgroundColor: '#ffffff',
        marginVertical: 10,
        borderRadius: 13,
        paddingHorizontal: 10
    },
    textStyle:{
        fontSize: 22,
        color: '#ea1e63',
        fontWeight: '600'
    },
    textfieldContainer:{
        width: width-40,
        // borderColor: 'green',
        // borderWidth: 2,
        // margin: 10,
        // flexDirection: 'row',
        alignSelf: 'center',
        padding: 4,
        marginTop: 20
    },
    btnOuterContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 33,
        // height: 200,
        // borderWidth: 1
    },
    btnInnerContainer:{
        width: width-50,
        // height: 80,
        borderRadius: 30
    },
    btnStyle:{
        backgroundColor: '#ea1e63',
        height: 50
    },
    btnTextStyle:{
        fontSize: 18
    }
})

export default styles