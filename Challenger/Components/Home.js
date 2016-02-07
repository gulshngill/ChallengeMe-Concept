var React = require('react-native')
var Template = require('./Template')

var {
  Text,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  text: {
    color: 'white',
    marginTop: 0,
  }
});

class Home extends React.Component {

  render(){
    return(
      <Template title='Home' right={Template}>
        
      </Template>
    )
  }

}

module.exports = Home;
