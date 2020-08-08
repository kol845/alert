import { StyleSheet } from 'react-native';
import {GLOBAL} from '@utils'


export default buttonStyle = StyleSheet.create({
    loginButton:{
        fontWeight:'bold',
        backgroundColor:GLOBAL.COLOR.PRIMARY,
        borderRadius:100,
        padding:10,
    },
    registerButton:{
        fontWeight:'bold',
        backgroundColor:GLOBAL.COLOR.PRIMARY,
        borderRadius:100,
        padding:10,
    },
});