var React = require('react-native')
var Home = require('./Home')
var SignUp = require('./SignUp')
var bg = require('../img/bg.png')

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
    resizeMode: 'cover',
    //backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 50,
    marginLeft: 50,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black' /**text color**/
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'teal',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 75,
    marginRight: 75,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  backgroundImage: {
    resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -50,
    marginBottom: -20
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
      //<Image source={bg} style={styles.backgroundImage}>
      <Image style={styles.container}>
        <Text style={styles.header}> LOGIN </Text>

        <TextInput
          marginTop={40}
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)} />

        <TextInput
          margin={40}
          secureTextEntry={true}
          style={styles.searchInput}
          value={this.state.password}
          onChange={this.handleChangePwd.bind(this)} />

          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="white">
              <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.toSignUp.bind(this)}
            underlayColor="white">
              <Text fontSize={12}>New user? Press here to register.</Text>
          </TouchableHighlight>

      </Image>
    );
  }

};



module.exports = Login;
