var React = require('react-native')
var profile = require('../img/profilepic.png');

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
  profile: {

  },
  listTxt: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: '500'
  },
});

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(['row 1', 'row 2'])
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Image source={profile}/>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.listTxt}>{rowData}</Text>}
        />
      </View>
    );
  }
};

module.exports = Menu;
