var React = require('react-native')

var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TextInput,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
        <Text style={styles.header}> Fuck you {this.state.username} </Text>
        <Text style={styles.header}> {this.state.password} </Text>

        <TextInput
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
            /**onPress={this.handleSubmit.bind(this)}**/
            underlayColor="white">
              <Text style={styles.buttonText}>SEARCH</Text>
          </TouchableHighlight>

      </View>
    );
  }

};



module.exports = Login;
