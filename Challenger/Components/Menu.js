var React = require('react-native')
import {Dimensions} from 'react-native';
var {
  View,
  Text,
  Navigator,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
    //justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'stretch',
    //resizeMode: 'cover',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

class Menu extends React.Component {

  render() {

    return (
      <View style={styles.container}>

      </View>
    );
  }
};

module.exports = Menu;
