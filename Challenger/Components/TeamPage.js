var React = require('react-native')
var NavigationBar = require('react-native-navbar');
var bg = require('../img/cleague_bg.png')
var burger = require('../img/burger.png')
import {Dimensions} from 'react-native';

var {
  View,
  Text,
  Navigator,
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width:null,
    height: null,
  },
  burger: {
    position: 'absolute',
    marginLeft: vw(15),
    marginTop: vh(3)
  }
});

function vw(width) {
  return Dimensions.get('window').width * (width / 375);
}

function vh(height) {
  return Dimensions.get('window').height * (height / 667);
}

class Home extends React.Component {
  handleBack() {
    this.props.navigator.pop();
  }

  render() {
    const rightButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };

    const titleConfig = {
      title: 'Team',
      tintColor: 'white'
    };

    return (
      <Image source={bg} style={styles.container}>
        <NavigationBar
          title={titleConfig}
          leftButton={<TouchableHighlight
            style={styles.burger}
            onPress={this.handleBack.bind(this)}>
            <Image source={burger}/>
          </TouchableHighlight>}
          tintColor='#212121'/>
      </Image>
    );
  }


};
module.exports = TeamPage;
