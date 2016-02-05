var React = require('react-native')

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
  backgroundImage: {
    backgroundColor: 'white'
  },

  header: {
    // color: 'red',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
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
  backBtn: {
    marginTop: 30
  }

});



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

  render() {
    return(
      <View>
        <Image style={styles.backgroundImage}>

          <TouchableHighlight
            style={styles.backBtn}
            onPress={this.handleBack.bind(this)}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableHighlight>

          <Text style={styles.header}> Sign Up </Text>

          <TextInput
            marginTop={40}
            style={styles.searchInput}
            value={this.state.email}
            onChange={this.handleEmail.bind(this)} />

          <TextInput
            marginTop={40}
            style={styles.searchInput}
            value={this.state.username}
            onChange={this.handleChange.bind(this)} />

          <TextInput
            marginTop={40}
            secureTextEntry={true}
            style={styles.searchInput}
            value={this.state.password}
            onChange={this.handleChangePwd.bind(this)} />

          <TextInput
            marginTop={40}
            secureTextEntry={true}
            style={styles.searchInput}
            value={this.state.confirmPassword}
            onChange={this.handleChangeConPwd.bind(this)} />

            <TouchableHighlight
              style={styles.button}
              //onPress={this.handleSubmit.bind(this)}
              underlayColor="white">
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableHighlight>


        </Image>
      </View>
    );
  }
};

module.exports= SignUp;
