var React = require('react-native')
var Template = require('./Template')
var TeamPage = require('./TeamPage')
var Chat = require('./Chat')
import {Dimensions} from 'react-native';

var {
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  text: {
    color: 'white',
    marginTop: 0,
  },
  buttonTeam: {
    position: 'absolute',
    height: vh(35),
    width: vw(105),
    flexDirection: 'row',
    shadowColor: 'black',
    backgroundColor: '#009688',
    borderColor: 'transparent',
    shadowOffset: {width: 5, height: 5},
    borderWidth: 1,
    borderRadius: 0,
    marginTop: vh(208),
    marginLeft: vw(140),
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
  buttonChat: {
    position: 'absolute',
    height: vh(35),
    width: vw(105),
    flexDirection: 'row',
    shadowColor: 'black',
    backgroundColor: '#009688',
    borderColor: 'transparent',
    shadowOffset: {width: 5, height: 5},
    borderWidth: 1,
    borderRadius: 0,
    marginTop: vh(300),
    marginLeft: vw(140),
    alignSelf: 'stretch',
    justifyContent: 'center',

  },
});

function vw(width) {
  return Dimensions.get('window').width * (width / 375);
}

function vh(height) {
  return Dimensions.get('window').height * (height / 667);
}


class Home extends React.Component {
  toTeam(){
    this.props.navigator.push({
      title: 'TeamPage',
      component: TeamPage
    });
  }

  toChat(){
    this.props.navigator.push({
      title: 'Chat',
      component: Chat
    });
  }

  render(){
    return(
      <Template title='Home' navigator={this.props.navigator}>
        <TouchableHighlight onPress={this.toTeam.bind(this)} style={styles.buttonTeam}><Text style={styles.text}>Team</Text></TouchableHighlight>
        <TouchableHighlight onPress={this.toChat.bind(this)} style={styles.buttonChat}><Text style={styles.text}>Chat</Text></TouchableHighlight>
      </Template>
    )
  }

}

module.exports = Home;
