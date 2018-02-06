import React, { Component } from 'react';
import List from '../containers/List';
import ItemDetail from '../containers/ItemDetail'
import {JsonTree} from 'react-editable-json-tree'
//import data from '../reducers/data.js';
import {connect} from 'react-redux'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
    }
    this.onFullyUpdate = this.onFullyUpdate.bind(this);
  }

  onFullyUpdate(data) {

    let updatedData = JSON.stringify(data);
    this.setState({
          data : updatedData,
    });
    console.log("updated Data"+this.state.data);
  }

  render() {
    return (
      <div>
        <div style={{float:'left',width:"55%"}}>
            <div style={{float:'left',width:"60%",backgroundColor:"#CEF7E4"}}>
              <List/>
            </div>
            <div style={{float:'right',width:"35%",backgroundColor:"#CEF7E4"}}>
                <ItemDetail/>
            </div>
        </div>
        <div style={{float:'right',width:"40%",backgroundColor:'#CEF7E4'}}>
            <JsonTree data={this.props.data}  
                  onFullyUpdate={this.onFullyUpdate} 
                  readOnly={(name, value, keyPath) => (keyPath[keyPath.length - 1] === 'id')}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(JSON.stringify(state.data));
  return {
      data : state.data
  };
}

export default connect(mapStateToProps)(App)
//export default App;
