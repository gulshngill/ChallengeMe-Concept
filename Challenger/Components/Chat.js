var React = require('react-native')
var Template = require('./Template')
var TeamPage = require('./TeamPage')
var GiftedMessenger = require('react-native-gifted-messenger')
var {Dimensions} = React;

var {
  Text,
  StyleSheet,
  TouchableHighlight
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
      {text: 'Sathia?', name: 'Osmania', image: {uri: 'https://facebook.github.io/react/img/logo_og.png'}, position: 'left', date: new Date(2015, 0, 16, 19, 0)},
      {text: "Mathia!", name: 'Cocksucker', image: null, position: 'right', date: new Date(2015, 0, 17, 19, 0)},
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
