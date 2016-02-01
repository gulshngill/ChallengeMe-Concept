var React = require('react-native')

var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TextInput
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
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

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}> Fuck you {this.state.username} </Text>
        <Text style={styles.welcome}> {this.state.password} </Text>

        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)} />

        <TextInput
          secureTextEntry={true}
          style={styles.searchInput}
          margin={50}
          value={this.state.password}
          onChange={this.handleChangePwd.bind(this)} />

      </View>
    );
  }

};



module.exports = Login;
