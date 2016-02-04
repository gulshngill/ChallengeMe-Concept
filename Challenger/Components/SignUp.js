var React = require('react-native')

var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} = React;

var styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: 'white'
  },

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

  handleChangeEmail(event) {
    this.setState({
      email: event.nativeEvent.text, //get content from textinput
    });
  }

  render() {
    return(
      <Image style={styles.backgroundImage}>
        <ScrollView>
          <Text textAlign='center'> Sign Up </Text>
        </ScrollView>
      </Image>
    );
  }
};

module.exports= SignUp;
