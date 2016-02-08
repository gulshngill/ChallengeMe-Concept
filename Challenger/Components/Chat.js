var React = require('react-native')
var Template = require('./Template')
var TeamPage = require('./TeamPage')
var GiftedMessenger = require('react-native-gifted-messenger')
var mrskeletal = require('../img/mrskeletal.png')
var {Dimensions} = React;

var {
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} = React;

var styles = StyleSheet.create({
  text: {
    color: 'white',
    marginTop: 0,
  }
});

class Chat extends React.Component {
  getMessages() {
    return [
      {text: 'Guys...training tomorrow?', name: 'sathiaK7', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2016, 0, 12, 1, 0)},
      {text: "Ya boss! im in ", name: 'MrSkeletal', image: mrskeletal, position: 'left', date: new Date(2016, 0, 13, 1, 0)},
      {text: "Awesome bro, see you tomorrow...", name: 'sathiaK7', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2016, 0, 13, 1, 0)},
      {text: "How about everyone else? need to book court", name: 'sathiaK7', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2016, 0, 13, 1, 0)},
    ];
  }
  handleSend(message = {}, rowID = null) {
    // Send message.text to your server
  }
  handleReceive() {
    this._GiftedMessenger.appendMessage({
      text: 'Received message',
      name: 'Friend',
      image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
      position: 'left',
      date: new Date(),
    });
  }

  render(){
    return(
      <Template title='Chat'>
        <GiftedMessenger
        ref={(c) => this._GiftedMessenger = c}

        messages={this.getMessages()}
        handleSend={this.handleSend}
        maxHeight={Dimensions.get('window').height - 64} // 64 for the navBar

        styles={{
          bubbleLeft: {
            backgroundColor: '#e6e6eb',
            marginRight: 70,
          },
          bubbleRight: {
            backgroundColor: '#007aff',
            marginLeft: 70,
          },
        }}
      />
      </Template>
    )
  }

}

module.exports = Chat;
