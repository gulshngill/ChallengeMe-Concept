var React = require('react-native')
var Home = require('./Home')
var SignUp = require('./SignUp')
var bg = require('../img/cleague_bg.png')
var loginwith = require('../img/loginwith.png')
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
    fontSize: vw(35),
    textAlign: 'center',
    marginTop: vh(-220),
    marginLeft: vw(95),
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
    marginTop: vh(58),
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

class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      isLoading: false,
      password: '',
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

  handleSubmit() {
    this.props.navigator.push({
        title: 'HOME',
        component: Home,
        /**passProps: {userInfo: res} **/
      });
  }

  toSignUp() {
    this.props.navigator.push({
        title: 'SIGN UP',
        component: SignUp,
        /**passProps: {userInfo: res} **/
      });
  }

  render() {
    return(
        <Image source={bg} style={styles.container}>
          <Text style={styles.header}> Challenger </Text>

          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            placeholder="username"
            marginTop={vh(-80)}
            onChange={this.handleChange.bind(this)} />

          <TextInput
            secureTextEntry={true}
            style={styles.searchInput}
            value={this.state.password}
            placeholder="password"
            marginTop={vh(-10)}
            onChange={this.handleChangePwd.bind(this)} />

            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}
              underlayColor="#00CDBA">
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableHighlight>
            <Image source={loginwith} style={styles.loginwith}/>
            <TouchableHighlight
              onPress={this.toSignUp.bind(this)}
              underlayColor="white"
              style={styles.newUser}>
                <Text style={styles.buttonText}>New user</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.toSignUp.bind(this)}
              underlayColor="white"
              style={styles.forgotPassword}>
                <Text style={styles.buttonText}>Forgot Password?</Text>
            </TouchableHighlight>
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



module.exports = Login;
