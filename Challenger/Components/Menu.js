var React = require('react-native')
var profile = require('../img/profilepic.png');
var Home = require('./Home')

import {Dimensions} from 'react-native';
var {
  View,
  Text,
  Navigator,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView,
  ListView,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383838',
    alignSelf: 'stretch',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  avatar: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * (17/64),
    backgroundColor: '#616161'
  },
  listTxt: {
    color: 'white',
    fontSize: vw(16),
    marginTop: 10,
    marginLeft: 20,
    fontWeight: '500'
  },
  profile: {
    position: 'absolute',
    marginTop:vh(57),
    marginLeft: vw(16),
    height: vh(64),
    width: vw(64),
  },
  username:{
    position: 'absolute',
    marginLeft: vw(102),
    marginTop: vh(67),
    color: 'white',
    fontSize: vw(16)
  },
  team: {
    position: 'absolute',
    marginLeft: vw(101),
    marginTop: vh(94),
    color: 'white',
    fontSize: vw(20)
  },
  bro: {
    padding: 4
  }
});

function vw(width) {
  return Dimensions.get('window').width * (width / 375);
}

function vh(height) {
  return Dimensions.get('window').height * (height / 667);
}

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(['Home', 'Team', 'Chat'])
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Image style={styles.profile} source={profile}/>
          <Text style={styles.username}>remi91</Text>
          <Text style={styles.team}>Immortals FC</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>  <MenuItem itemName={rowData}/>}
        />
      </View>
    );
  }
};

class MenuItem extends React.Component {

  toHome() {
    this.props.navigator.push({
      title: 'Home',
      component: Home
    });
  }

  fakubrader() {
    {this.props.itemName === 'Home' ? this.toHome().bind(this) : console.log('like a somebody')}
  }

  render(){
    return(
      <TouchableHighlight style={styles.bro} underlayColor='#383838'>
        <Text style={styles.listTxt}>{this.props.itemName}</Text>
      </TouchableHighlight>
    )
  }

}

MenuItem.PropTypes = {
  itemName: React.PropTypes.string.isRequired
}

module.exports = MenuItem;
module.exports = Menu;
