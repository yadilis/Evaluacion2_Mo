import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constants";


//Gestionar los estilos
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    titleHeaderBody: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: SECUNDARY_COLOR,
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontFamily: 'Roboto',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 7,
        marginBottom: 50,
    },
    textBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput: {
        marginTop: 30,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        paddingHorizontal: 90, 
        borderRadius: 10,
        marginTop: 30,
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, 
        shadowRadius: 2, 
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1, 
        marginTop:10
    },
    textRedirection:{
        marginTop:30,
        fontSize:16,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center'
    },
    imageContainer: {
        flex: 1,                   
    justifyContent: 'center',  
    alignItems: 'center',      
    marginBottom: 50,
    marginLeft: 50,
      },
      image: {
        width: 300,
        height: 300,
        borderRadius: 30, 
        resizeMode: 'cover', 
      },
});