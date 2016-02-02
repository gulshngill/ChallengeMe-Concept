var React = require('react-native')
var {Platform} = React;

var {
  View,
  Text,
  Navigator,
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

class Home extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text> Home </Text>
      </View>
    );
  }

};



module.exports = Home;
