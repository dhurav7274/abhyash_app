/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {bgcolor, textColor} from '../../shareComponent/ThemeComponent';
const SingupCss = StyleSheet.create({
  mainConatiner: {
    backgroundColor: bgcolor.bg_secondary_color,
    flexGrow: 1
  },

  header:{
    width:"100%",
    height:"30%",
    backgroundColor:bgcolor.bg_primary_color,
    borderBottomLeftRadius:45,
    borderBottomRightRadius:45,
    justifyContent:'center',
    alignItems:'center'
  },

  header_text:{
    color:textColor.text_primary_color,
    marginTop:-20,
    fontSize:25,
    fontWeight:'bold',
    paddingBottom:25
  },

  body:{
    width:"100%",
    height:"90%",
    backgroundColor:bgcolor.bg_secondary_color,
    alignItems:'center',
    paddingVertical:20
  },

  input_box:{
    borderWidth:1,
    borderStyle:'solid',
    borderColor:textColor.text_secondary_color,
    width:'95%',
    height:50,
    borderRadius:7,
    alignItems:'center',
    flexDirection:'row',
    paddingRight:5,
    overflow:'hidden',
    marginVertical:10,
    paddingHorizontal:5
  },

  input_icon: {
    fontSize:25
  },

  input_group:{
    width:'95%',
    marginVertical:10,
    flexDirection:'row',
    gap:5
  },

  input_group_input_box:{
    borderWidth:1,
    borderStyle:'solid',
    borderColor:textColor.text_secondary_color,
    flex:1/2,
    height:50,
    borderRadius:7,
    alignItems:'center',
    flexDirection:'row',
    paddingRight:5,
    overflow:'hidden',
  },

  btn: {
    color:textColor.text_primary_color,
    backgroundColor:bgcolor.bg_primary_color,
    textAlign:'center',
    fontSize: 16,
    fontWeight:'bold',
    padding:10,
    borderRadius:5,
  }
});

export {SingupCss};
