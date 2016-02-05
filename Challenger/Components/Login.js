var React = require('react-native')
var Home = require('./Home')
var SignUp = require('./SignUp')
var bg = require('../img/cleague_bg.png')
var loginwith = require('../img/loginwith.png')
var fb = require('../img/fb.png')
var google = require('../img/G.png')

var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    resizeMode: 'cover',
    width:null,
    height: null,

  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: -220,
    marginLeft: 95,
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
    height: 42,
    width: 235,
    padding: 10,
    marginLeft: 80,
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black', /**text color**/
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    alignSelf: 'center'
  },

  button: {
    position: 'absolute',
    height: 35,
    width: 105,
    left: 55,
    right: 50,
    flexDirection: 'row',
    shadowColor: 'black',
    backgroundColor: '#009688',
    borderColor: 'transparent',
    shadowOffset: {width: 5, height: 5},
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 10,
    marginTop: 40,
    marginLeft: 75,
    marginRight: 75,
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  loginwith: {
    marginTop: 140,
    marginLeft: 40,
    position: 'absolute'
  },
  newUser: {
    marginTop: 115,
    marginLeft: 75,
    position: 'absolute'
  },
  forgotPassword: {
    marginTop: 115,
    marginLeft: 215,
    position: 'absolute'
  },
  google: {
    marginTop: 195,
    marginLeft: 195,

    position: 'absolute'
  },
  facebook: {
    marginTop: 195,
    marginLeft: 140,
    position: 'absolute'
  }
});

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
          {/*<Image source={bg} style={styles.backgroundImage}/>*/}
          <Text style={styles.header}> Challenger </Text>

          <TextInput
            style={styles.searchInput}
            value={this.state.username}
            placeholder="username"
            marginTop={-98}
            onChange={this.handleChange.bind(this)} />

          <TextInput
            secureTextEntry={true}
            style={styles.searchInput}
            value={this.state.password}
            placeholder="password"
            marginTop={-28}
            onChange={this.handleChangePwd.bind(this)} />

            <TouchableHighlight
              style={styles.button}
              onPress={this.handleSubmit.bind(this)}
              underlayColor="white">
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
              onPress={this.toSignUp.bind(this)}
              style={styles.facebook}>
                <Image source={fb}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.toSignUp.bind(this)}
              style={styles.google}>
                <Image source={google} />
            </TouchableHighlight>
        </Image>
    );
  }

};



module.exports = Login;
