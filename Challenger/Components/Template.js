var React = require('react-native')
var NavigationBar = require('react-native-navbar');
var bg = require('../img/cleague_bg.png')
var burger = require('../img/burger.png')
var dots = require('../img/dots.png')
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
  ListView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height: null,
  },
  dots: {
    position: 'absolute',
    marginLeft: vw(-25),//15
    marginTop: vh(3)
  },
  burger: {
    position: 'absolute',
    marginLeft: vw(15),
    marginTop: vh(3)
  },
  popup: {
    width: 128,
    height: 105,
    backgroundColor: '#FAFAFA',
    position: 'absolute',
    marginLeft: vw(232),//15
    marginTop: vh(0),
    borderRadius: 2
  },
  popupView: {
    width: 128,
    height: 105,
  },
  listTxt: {
    fontSize: vw(15)
  },
  bro:{
    padding: vw(8)
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
      open: false,
      popupShow: false
    }

  }
  handlePopup() {
    if(this.state.popupShow){
      this.setState({popupShow:false});
    } else {
      this.setState({popupShow:true});
      this.setState({open: false});
    }
  }

  handleBack(){
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
    const menu = <Menu navigator={this.props.navigator}/>;
    const titleConfig = {
      title: this.props.title,
      tintColor: 'white',
      popupShow: false
    };
    var result = (this.props.right) ?
      (this.state.popupShow) ?
      <SideMenu menu={menu} disableGestures={true} isOpen={this.state.open}>
        <View style={styles.container}>
          <NavigationBar
            title={titleConfig}
            leftButton={<TouchableHighlight
              style={styles.burger}
              onPress={this.handleBack.bind(this)}>
              <Image source={burger}/>
            </TouchableHighlight>}
            rightButton={
              <TouchableHighlight
              style={styles.dots}
              onPress={this.handlePopup.bind(this)}>
              <Image source={dots}/>
            </TouchableHighlight>}
            tintColor='#212121'/>
            <Image source={bg} style={styles.container}>
            <View style={styles.popupView}>
              <Popup/>
            </View>
            <ScrollView style={styles.container}>
                {this.props.children}
              </ScrollView>
            </Image>
        </View>
      </SideMenu>
      :
      <SideMenu menu={menu} disableGestures={true} isOpen={this.state.open}>
        <View style={styles.container}>
          <NavigationBar
            title={titleConfig}
            leftButton={<TouchableHighlight
              style={styles.burger}
              onPress={this.handleBack.bind(this)}>
              <Image source={burger}/>
            </TouchableHighlight>}
            rightButton={
              <TouchableHighlight
              style={styles.dots}
              onPress={this.handlePopup.bind(this)}>
              <Image source={dots}/>
            </TouchableHighlight>}
            tintColor='#212121'/>
            <Image source={bg} style={styles.container}>
            <ScrollView style={styles.container}>
                {this.props.children}
              </ScrollView>
            </Image>
        </View>
      </SideMenu>
      :
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
    return result;
  }


};

Template.PropTypes = {
  title: React.PropTypes.string.isRequired,
  right: React.PropTypes.bool
}
class Popup extends React.Component {
  constructor(props){
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(['Broadast', 'Edit','Leave'])
    }
  }
  render(){
    return(
      <ListView
        style={styles.popup}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>  <PopupItem itemName={rowData}/>}
      />
    )
  }
}

class PopupItem extends React.Component {
  render(){
    return(
      <TouchableHighlight style={styles.bro} underlayColor='#B0B0B0' onPress={console.log('sathia')}>
        <Text style={styles.listTxt}>{this.props.itemName}</Text>
      </TouchableHighlight>
    )
  }

}

PopupItem.PropTypes = {
  itemName: React.PropTypes.string.isRequired
}


module.exports = Popup;
module.exports = PopupItem;
module.exports = Template;
