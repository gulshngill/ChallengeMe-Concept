var React = require('react-native')
var Login = require('./Components/Login')

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  View,
} = React;



class Challenger extends React.Component {
  render() {
    return (

        <Navigator
          initialRoute={{name: 'Login', component: Login}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
              // count the number of func calls
              console.log(route, navigator);

              if (route.component) {
                return React.createElement(route.component, { navigator });
              }
          }}
        />
    );
  }
}

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
});

AppRegistry.registerComponent('Challenger', () => Challenger);
