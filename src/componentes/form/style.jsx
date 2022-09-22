import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    // view1
    formContext:{
        width:"100%",
        height:"100%",
        justifyContent:"Space-around",
        bottom:0,
        backgroundColor:"#FFF",
        alignItems:"center",
        marginTop:20,
        paddingTop:15,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    // view 2
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
    },
    // input label
    formLabel:{
        color:"Black",
        fontSize:18,
        paddingLeft:20,
    },
    // input
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    // text in the button 
    textButtonCal:{
        fontSize:15,
        color:"#ffffff",
    },
    // button 
    buttonCal:{
        borderRadius:40,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#0085d5",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    erroMensagem:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
        
    }
})


export default styles