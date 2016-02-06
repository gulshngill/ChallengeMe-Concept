var React = require('react-native')
var Home = require('./Home')
var bg = require('../img/cleague_bg.png')
var signupwith = require('../img/signupwith.png')
var back = require('../img/back.png')
var fb = require('../img/fb.png')
var google = require('../img/G.png')
import {Dimensions} from 'react-native';

var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
} = React;

var styles = StyleSheet.create({
  backBtn:{
    position: 'absolute',
    marginTop: vh(-278),
    marginLeft: vw(27),
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    //resizeMode: 'cover',
    width:null,
    height: null,

  },
  header: {
    fontSize: vw(30),
    textAlign: 'center',
    marginTop: vh(-290),
    marginLeft: vw(127),
    position: 'absolute',
    color: '#FFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchInput: {
    position: 'absolute',
    height: vh(42),
    width: vw(235),
    padding: 10,
    marginLeft: vw(80),
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black', /**text color**/
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: vw(14),
    color: '#FFF',
    alignSelf: 'center'
  },

  button: {
    position: 'absolute',
    height: vh(35),
    width: vw(105),
    flexDirection: 'row',
    shadowColor: 'black',
    backgroundColor: '#009688',
    borderColor: 'transparent',
    shadowOffset: {width: 5, height: 5},
    borderWidth: 1,
    borderRadius: 0,
    marginTop: vh(108),
    marginLeft: vw(140),
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  loginwith: {
    height: vh(45),
    width: vw(290),
    marginTop: vh(185),
    marginLeft: vw(50),//40
    position: 'absolute'
  },
  newUser: {
    marginTop: vh(160),
    marginLeft: vw(75),
    position: 'absolute'
  },
  forgotPassword: {
    marginTop: vh(160),
    marginLeft: vw(215),
    position: 'absolute'
  },
  google: {
    marginTop: vh(240),
    marginLeft: vw(205),//195

    position: 'absolute'
  },
  facebook: {
    marginTop: vh(240),
    marginLeft: vw(150),//140
    position: 'absolute'
  }
});

function vw(width) {
  return Dimensions.get('window').width * (width / 375);
}

function vh(height) {
  return Dimensions.get('window').height * (height / 667);
}



class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text, //get content from textinput
    });
  }

  handleChangePwd(event) {
    this.setState({
      password: event.nativeEvent.text, //get content from textinput
    });
  }

  handleChangeConPwd(event) {
    this.setState({
      confirmPassword: event.nativeEvent.text, //get content from textinput
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.nativeEvent.text, //get content from textinput
    });
  }

  handleBack() {
    this.props.navigator.pop();
  }

  handleSubmit() {
    this.props.navigator.push({
        title: 'HOME',
        component: Home,
        /**passProps: {userInfo: res} **/
      });
  }

  render() {
    return(
        <Image source={bg} style={styles.container}>

          <TouchableHighlight
            style={styles.backBtn}
            onPress={this.handleBack.bind(this)}>
            <Image source={back}/>
          </TouchableHighlight>

          <Text style={styles.header}> Sign Up </Text>

          <TextInput
            marginTop={vh(27)}
            style={styles.searchInput}
            value={this.state.email}
            placeholder="email"
            onChange={this.handleEmail.bind(this)} />

          <TextInput
            marginTop={vh(-180)}
            style={styles.searchInput}
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange.bind(this)} />

          <TextInput
            marginTop={vh(-111)}
            secureTextEntry={true}
            style={styles.searchInput}
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChangePwd.bind(this)} />

          <TextInput
            marginTop={vh(-42)}
            secureTextEntry={true}
            style={styles.searchInput}
            value={this.state.confirmPassword}
            placeholder="confirm password"
            onChange={this.handleChangeConPwd.bind(this)} />

            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}
              underlayColor="white">
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableHighlight>

            <Image source={signupwith} style={styles.loginwith}/>
            <TouchableHighlight
              style={styles.facebook}>
                <Image source={fb}/>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.google}>
                <Image source={google} />
            </TouchableHighlight>
        </Image>
    );
  }
};

module.exports= SignUp;
