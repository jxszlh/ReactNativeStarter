/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';

var TODOS = [
  {name: 'Terry', disc: 'coding'},
  {name: 'Terry', disc: 'eating'},
  {name: 'Terry', disc: 'playing'},
];

class ReactNativeStarter extends Component {

  constructor() {
    super()

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(TODOS),
    };
  }

  renderTodos(todo) {
    return(
      <View style={styles.row}>
        <View style={{flex: 1}}>
          <Text style={styles.textAlignCenter}>
          {todo.name}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textAlignCenter}>
            {todo.disc}
          </Text>
        </View>

      </View>
    );
  }

  onPressAdd() {
    var rows = this.state.dataSource;
    var newRow = {name: 'test', disc: 'disc'};
    var newRows = rows.concat([newRow]);
    this.setState({dataSource: newRows});
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={styles.list} dataSource={this.state.dataSource} renderRow={this.renderTodos} ></ListView>
        <View style={{}}>
          <TouchableHighlight onPress={this.onPressAdd}>
            <Text style={styles.textAlignCenter}>Add</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPressDelete}>
            <Text style={styles.textAlignCenter}>Delete</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'red',
    borderWidth: 1,
  },
  list: {
    //backgroundColor: 'blue',
    borderWidth: 1,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('ReactNativeStarter', () => ReactNativeStarter);
