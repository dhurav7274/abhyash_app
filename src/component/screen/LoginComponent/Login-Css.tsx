/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { textColor,bgcolor, widthSize } from '../../shareComponent/ThemeComponent';
const LoginCss = StyleSheet.create({
  main_conatiner: {
    width:'100%',
    flexGrow:1,
    backgroundColor:bgcolor.bg_secondary_color
  },

  header_conatiner:{
    backgroundColor:bgcolor.bg_secondary_color,
    height:'40%',
    justifyContent:'center',
    alignItems:'center'
  },

  header_text: {
    color:textColor.text_secondary_color,
    fontWeight:'bold',
    fontSize:35,
    marginTop:-20
  },

  header_icon :{
    color:textColor.text_secondary_color,
  },

  body_conatiner:{
    height:'60%',
    alignItems:'center',
    backgroundColor:bgcolor.bg_primary_color,
    paddingVertical:50,
    paddingHorizontal:5,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
  },

  input_conatiner:{
    borderWidth:1,
    borderStyle:'solid',
    borderColor:textColor.text_primary_color,
    width:widthSize.input_box_size,
    height:50,
    borderRadius:7,
    alignItems:'center',
    flexDirection:'row',
    paddingRight:5,
    overflow:'hidden',
    marginVertical:10
  },

  text_input_box:{
    width:'95%',
    color:textColor.text_primary_color,
    marginLeft:5
  },

  input_icon:{
    margin:10
  },
  hyper_link: {
    color:textColor.text_primary_color,
    textAlign:'right',
    fontWeight:'bold',
    fontSize:16,
    width:'88%'
  },
  btn: {
    color:textColor.text_secondary_color,
    backgroundColor:bgcolor.bg_secondary_color,
    textAlign:'center',
    fontSize: 16,
    fontWeight:'bold',
    padding:10,
    borderRadius:5,
  }


  



  
});

export default LoginCss;
