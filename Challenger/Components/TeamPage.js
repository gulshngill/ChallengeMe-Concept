var React = require('react-native')
var Template = require('./Template')
var teamlogo = require('../img/teamlogo01.png')
var line = require('../img/line.png')
var Collapsible = require('react-native-collapsible');
var arrow = require('../img/teamArrow.png')
var skeletal = require('../img/mrskeletal.png')
var remi = require('../img/remi91.png')
var lucaorio = require('../img/lucaorio_.png')
var sathia = require('../img/sathia.png')
var challengerCup = require('../img/challengercup.gif')
var challengecup = require('../img/challengercup.png')
var challengerothercup = require('../img/challengerothercup.png')
import {Dimensions} from 'react-native';

var {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
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
  },
  collapsedPlayers:{
    backgroundColor:'black',
    marginTop: vh(-36),
    marginLeft: vw(112),
    width: vw(182),
    height: vh(34),
    opacity: 0.5,
    padding: 4
  },
  collapsed:{
    backgroundColor:'black',
    marginTop: vh(3),
    marginLeft: vw(78),
    width: vw(216),
    height: vh(34),
    opacity: 0.5,
  },
  description:{
    backgroundColor:'black',
    marginTop: vh(19),
    marginLeft: vw(78),
    height: vh(18),
    width: vw(216),
    opacity: 0.5,
    padding: 4
  },
  txt:{
    color: 'white',
    fontWeight: '800',
    fontSize: 12
  },
  teamArrow:{
    marginTop:vh(-12),
    marginLeft: vw(197)
  },
  imageCollapse: {
    height: vh(34),
    width: vw(34),
    marginTop: vh(4),
    marginLeft: vw(78),
    //opacity: 1
  },
  txtCollapse:{
    color: 'white',
    fontWeight: '500',
    fontSize: vw(13.38),
  },
  smalltxtCollapse:{
    color: 'white',
    fontWeight: '500',
    fontSize:vw (8.6),
  },
  upcome:{
    height: vh(34),
    width: vw(34),
    marginLeft: vw(78),
    marginTop: vh(10)
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
        <CollapsibleItem title='Description' items='1'>
          <Text style={styles.txtCollapse}>We are Immortal</Text>
        </CollapsibleItem>
        <CollapsibleItem title='Players (4/25)' items='4'
          element1={<ListItemWithImage username='remi91' rank='Captain'/>}
          element2={<ListItemWithImage username='mrskeletal' rank='Co-Captain'/>}
          element3={<ListItemWithImage username='lucaorio_' rank='Co-Captain'/>}
          element4={<ListItemWithImage username='sathiak7' rank='Hairy'/>}
        />
        <CollapsibleItem title='Achievements' items='2'
          element1={<ListItemWithImage username='Challlenger League' rank='Rank: 1'/>}
          element2={<ListItemWithImage username='Nottingham Cup' rank='Rank: 2'/>}/>
        <CollapsibleItem title='Challenge Requests (0)' items='1'>
          <Text style={styles.txt}>sathia</Text>
        </CollapsibleItem>
        <CollapsibleItem title='Upcoming Challenges (2)' items='2'
          element1={<ListItemWithImage username='Pasukan Rambut' rank='12/12/12'/>}
          element2={<ListItemWithImage username='Team Gill' rank='13/13/13'/>}/>
      </Template>
    )
  }

}
class ListItemWithImage extends React.Component{
  render(){
    return(
      <View>
        <Text style={styles.txtCollapse}>{this.props.username}</Text>
        <Text style={styles.smalltxtCollapse}>{this.props.rank}</Text>
      </View>
    )
  }
}
ListItemWithImage.PropTypes = {
  username: React.PropTypes.string.isRequired,
  rank: React.PropTypes.string.isRequired
}
module.exports = ListItemWithImage;
class CollapsibleItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      descCollapsed:true
    }
  }
  handleSubmit() {
    if(this.state.descCollapsed){
      this.setState({descCollapsed:false});
    } else {
      this.setState({descCollapsed:true});
    }
  }
  render(){
    switch (this.props.items) {
      case '1': return(
        <View>
          <TouchableHighlight
          style={styles.description}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="black">
            <View>
            <Text style={styles.txt}>{this.props.title}</Text>
            <Image style={styles.teamArrow}source={arrow}/>
            </View>
          </TouchableHighlight>
          <Collapsible collapsed={this.state.descCollapsed}>
            <View style={styles.collapsed}>{this.props.children}</View>
          </Collapsible>
        </View>)
        case '2': return(
          <View>
            <TouchableHighlight
            style={styles.description}
            onPress={this.handleSubmit.bind(this)}
            underlayColor="black">
              <View>
              <Text style={styles.txt}>{this.props.title}</Text>
              <Image style={styles.teamArrow}source={arrow}/>
              </View>
            </TouchableHighlight>
            <Collapsible collapsed={this.state.descCollapsed}>
              <Image style={styles.upcome} source={challengecup}/>
              <View style={styles.collapsedPlayers}>{this.props.element1}</View>
            </Collapsible>
            <Collapsible collapsed={this.state.descCollapsed}>
              <Image style={styles.upcome} source={challengerCup}/>
              <View style={styles.collapsedPlayers}>{this.props.element2}</View>
            </Collapsible>
          </View>)
          case '4':return(
            <View>
              <TouchableHighlight
              style={styles.description}
              onPress={this.handleSubmit.bind(this)}
              underlayColor="black">
                <View>
                <Text style={styles.txt}>{this.props.title}</Text>
                <Image style={styles.teamArrow}source={arrow}/>
                </View>
              </TouchableHighlight>
              <Collapsible collapsed={this.state.descCollapsed}>
                <Image source={remi} style={styles.imageCollapse}/>
                <View style={styles.collapsedPlayers}>{this.props.element1}</View>
              </Collapsible>
              <Collapsible collapsed={this.state.descCollapsed}>
                <Image source={skeletal} style={styles.imageCollapse}/>
                <View style={styles.collapsedPlayers}>{this.props.element2}</View>
              </Collapsible>
              <Collapsible collapsed={this.state.descCollapsed}>
                <Image source={lucaorio} style={styles.imageCollapse}/>
                <View style={styles.collapsedPlayers}>{this.props.element3}</View>
              </Collapsible>
              <Collapsible collapsed={this.state.descCollapsed}>
                <Image source={sathia} style={styles.imageCollapse}/>
                <View style={styles.collapsedPlayers}>{this.props.element4}</View>
              </Collapsible>
            </View>)
    }

  }
}

CollapsibleItem.PropTypes = {
  title: React.PropTypes.string.isRequired,
  items: React.PropTypes.string.isRequired,
  element1: React.PropTypes.component,
  element2: React.PropTypes.component,
  element3: React.PropTypes.component,
  element4: React.PropTypes.component
}

module.exports=CollapsibleItem;
module.exports = TeamPage;
