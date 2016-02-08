var React = require('react-native')
var Template = require('./Template')
var teamlogo = require('../img/teamlogo01.png')
var line = require('../img/line.png')
import {Dimensions} from 'react-native';

var {
  Text,
  StyleSheet,
  Image
} = React;

var styles = StyleSheet.create({
  header: {
    color: 'white',
    marginTop: vh(11),
    marginLeft: vw(125),
    fontSize: vw(20),
    fontWeight: '500',
  },
  motto: {
    color: 'white',
    marginTop: vh(12),
    marginLeft: vw(123),
    fontSize: 15,
    fontWeight: '400',
  },
  locationTxt: {
    color: 'white',
    marginTop: vh(12),
    marginLeft: vw(110),
    fontSize: 12,
    fontWeight: '400',
  },
  winsTxt: {
    color: 'white',
    marginTop: vh(12),
    marginLeft: vw(127),
    fontSize: 12,
    fontWeight: '400',
  },
  team: {
    position: 'absolute',
    marginLeft: vw(101),
    marginTop: vh(94),
    color: 'white',
    fontSize: vw(20)
  },
  image: {
    alignItems: 'center',
    marginTop: vh(22),
    marginLeft: vw(110),
  },
  line: {
    marginTop: vh(8),
    marginLeft: vw(55),
  }
});

function vw(width) {
  return Dimensions.get('window').width * (width / 375);
}

function vh(height) {
  return Dimensions.get('window').height * (height / 667);
}


class TeamPage extends React.Component {

  render(){
    return(
      <Template title='Team' right={Template}>
        <Image source={teamlogo} style={styles.image} />
        <Text style={styles.header}>Immortals FC</Text>
        <Text style={styles.motto}>"United we stand!"</Text>
        <Text style={styles.locationTxt}>Location: Gombak, Selangor</Text>
        <Text style={styles.winsTxt}>Tournament Wins: 2</Text>
        <Image source={line} style={styles.line}/>
      </Template>
    )
  }

}

module.exports = TeamPage;
