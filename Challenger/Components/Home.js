var React = require('react-native')
var Template = require('./Template')
var TeamPage = require('./TeamPage')

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

class Home extends React.Component {
  toTeam(){
    this.props.navigator.push({
      title: 'TeamPage',
      component: TeamPage
    });
  }
  render(){
    return(
      <Template title='Home'>
        <TouchableHighlight onPress={this.toTeam.bind(this)}><Text style={styles.text}>Team</Text></TouchableHighlight>
      </Template>
    )
  }

}

module.exports = Home;
