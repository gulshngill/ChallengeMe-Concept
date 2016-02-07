var React = require('react-native')
var NavigationBar = require('react-native-navbar');
var bg = require('../img/cleague_bg.png')
var burger = require('../img/burger.png')
const SideMenu = require('react-native-side-menu');
import {Dimensions} from 'react-native';
var Menu = require('./Menu')

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
    //justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'stretch',
    //resizeMode: 'cover',
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

class Template extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }
  handleBack() {
    if(this.state.open){
      this.setState({open:false});
    } else {
      this.setState({open:true});
    }
  }

  render() {
    const rightButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };
    const menu = <Menu />;
    const titleConfig = {
      title: this.props.title,
      tintColor: 'white'
    };

    return (
      <SideMenu menu={menu} disableGestures={true} isOpen={this.state.open}>
        <View style={styles.container}>
          <NavigationBar
            title={titleConfig}
            leftButton={<TouchableHighlight
              style={styles.burger}
              onPress={this.handleBack.bind(this)}>
              <Image source={burger}/>
            </TouchableHighlight>}
            tintColor='#212121'/>
            <Image source={bg} style={styles.container}>
              <ScrollView style={styles.container}>
                {this.props.children}
              </ScrollView>
            </Image>
        </View>
      </SideMenu>
    );
  }


};

Template.PropTypes = {
  title: React.PropTypes.string.isRequired
}

module.exports = Template;
