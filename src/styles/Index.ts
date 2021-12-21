import { StyleSheet } from 'react-native';
import {Colors} from './Colors';

const containers = StyleSheet.create({
    bgWhite: {
        flex:1, backgroundColor:"#fff"
    },
    fullContainer: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        alignItems: 'center',
        paddingTop:"25%"
    },
    midContainer:{
        flex:1, 
        marginHorizontal:"6%",
        marginTop:-100
    },
    checkBoxContainer:{
        flexDirection:"row", marginTop:5, marginHorizontal:5
    },
    bottomWrapper:{
        position:"absolute",
        bottom:60,
        left:0,
        right:0,
        alignItems:"center",
        justifyContent:"center"
    }
})

const buttons = StyleSheet.create({
    btnActive: {
        width:300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:17,
        marginHorizontal: 10,
        marginTop:20,
        borderRadius:5,
        backgroundColor: Colors.PALE_TEAL
    },
    btnInactive: {
        width:300,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:17,
        marginHorizontal: 10,
        marginTop:20,
        borderRadius:5,
        backgroundColor: Colors.WARM_GREY
    },
    btnTxtWhite:{
        textAlign:"center",
        color:Colors.WHITE,
        fontSize:15,
        fontWeight:"bold",
    },
    btnTxtBlack:{ 
        flex: 1,
        width:300,
        textAlign:"center",
        color:"#000", 
        paddingHorizontal:10, 
        fontSize:15,
        marginTop:15
    }
})

const textStyles = StyleSheet.create({
    textHeader: {
        textAlign:"center",
        marginTop:20,
        fontSize:17,
        color: Colors.GREYISH_BROWN
    },
    textHeaderTop: {
        textAlign:"center",
        alignSelf:"center",
        marginTop:20,
        fontSize:17,
        position:"absolute",
        top:60,
        paddingHorizontal:20,
        color:Colors.GREYISH_BROWN
    },
    termsTxt: {
        fontSize:12,
        marginTop:10,
        lineHeight:24,
        marginLeft:10,
        flex:1,
        color: Colors.GREYISH_BROWN
    },
    txtBold: {
        fontWeight:"bold"
    },
    dueDate: {
        color:"blue",
        padding:5,
        borderRadius:10,
        width:120,
        textAlign:"center",
        backgroundColor:"#f1f1f1",
        alignSelf:"center",
        marginTop:20
    }
})

const otherStyles = StyleSheet.create({
    logo:{
        width:120,
        height:120
    },
    input: {
        width:"94%",
        height: 40,
        marginTop: 12,
        borderBottomWidth: 1,
        borderBottomColor:Colors.GREYISH_BROWN,
        padding: 10,
        alignSelf:"center",
        paddingHorizontal:"8%"
    },
    header:{
        position:"absolute", 
        top:50, 
        left:20, 
        zIndex: 1000
    }

})

const dots = StyleSheet.create({
    dotStyle:{
        backgroundColor:Colors.LIGHT_TEAL
     },
     activeDotStyle:{
         backgroundColor:Colors.PALE_TEAL
     }
})

export { containers, buttons, textStyles, dots, otherStyles}