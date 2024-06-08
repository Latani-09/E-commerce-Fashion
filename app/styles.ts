import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
    colContainer: {
        display:'flex',
        flexDirection: "column",/** */
        width: '100%',
        height: '100%',
        alignContent:'center',
        backgroundColor:'white',
        paddingHorizontal:10  
      },
      homeContainer: {
        flex: 1,
        flexDirection: "column",/** */
        width: '100%',
        height: '100%',
        backgroundColor:'grey'

      
      },
      homeActionContainer: {
        flexBasis:'50%',
        alignSelf: "center",
        justifyContent:'flex-end',
        width: "100%",
        maxWidth:400,
        marginBottom:20
        
      },
      logoContainer: {
        flexBasis: '50%',
        flexShrink: 1,
        alignContent: 'center',
        justifyContent: 'flex-end',
      },

    blackShade: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        height:'100%',
       
    },


    loginActions: {
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 50,
        padding: 10,
        margin: 5,
        marginTop: 40,
        height:45,
        alignItems: "center",
        backgroundColor: "black",
      },

  homeLogin:{
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor:'white',
    borderRadius: 50,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  homeLoginText:{
    textAlign: 'center',
    color: 'black',
    fontSize:16,
    fontWeight:'bold'
  },
    loginPressed:{
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  loginTextPressed:{
    color: 'white',
  },
  actions: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    padding: 10,
    margin: 5,
    alignItems: 'center',
},
    actionsText: {
        textAlign: 'center',
        color: 'white',
        fontSize:16,
        fontWeight:'bold'
    },

    pressed: {
      backgroundColor: 'rgb(255, 255, 255)',
  },
  textPressed: {
    color: 'black',
},


    actionContainer: {

        alignSelf: "center",
        width: "100%",
        maxWidth:400,
        
      },
     

    logoImage:{
        alignSelf:'center', /**/
        width:150,
        height:100,
        marginVertical:20
    },
    /**/

      headerContainer:{
        marginLeft:10,
      },
    

      welcomeTextStyle:{
        fontSize:20,
        fontWeight:'bold',

      },
      normalTextStyle:{
        color:'rgb(20,20,20)',
        justifyContent:'flex-start',
         marginBottom:'10%',
         marginTop:10
      },
    /**actions  */

     
      alterLogin: {
        borderTopWidth: 2,
        borderTopColor: "rgba(200,200,200,0.3)",
        paddingTop: 10,

      },
      dividerText: {
        marginBottom: -8,
        textAlign: "center",
        backgroundColor: "white",
        zIndex: 10,
        marginHorizontal: "auto",
      },

      actionsWhite: {
        flex: 0,
        flexBasis: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        margin: 5,
        paddingLeft: 50,
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "rgba(200,200,200,0.3)",
      },
      actionfb: {
        flex: 0,
        flexBasis: "auto",
        flexDirection: "row",
        justifyContent: "flex-start",
        borderWidth: 2,
        borderRadius: 50,
        padding: 10,
        margin: 5,
        paddingLeft: 50,
        alignItems: "center",
        backgroundColor: "rgb(66, 103, 178)",
        borderColor: "rgb(66, 103, 178)",
      },

    
      loginwhiteText: {
        textAlign: "center",
        color: "gray",
        fontSize: 16,
      },
      loginfbText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
          
      },
      iconStyle: {
        width: 15,
        height: 15,
        marginRight: 5,
      },
      inputStyle: {
       width:'100%'
      },

      inputContainerStyle:{ 
        flexDirection:'row',
        borderBottomWidth: 2,
        borderBottomColor: "rgba(200,200,200,0.3)",
        height: 30,
        margin: 5,
        marginBottom: 10,
        padding: 5,
        backgroundColor:'none'},

      validationIndicatorStyle:{
        width:15,
        height:15,
        marginLeft:-20
      },

      inputLabelStyle: {
        fontWeight: "bold",
      },
    
      /**actions  */
    
      signupBtn: {
        flex: 0,
        flexBasis: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 50,
        padding: 10,
        margin: 5,
        marginTop: 40,
        alignItems: "center",
        backgroundColor: "black",
        width: "90%",
      },
     
      checkBoxAgree:{
        color:'rgba(0,0,0,0.1)',
        backgroundColor:'none',
        justifyContent:'flex-start'
      }


});
