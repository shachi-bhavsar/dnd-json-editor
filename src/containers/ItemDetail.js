import React, { Component } from 'react'
import {connect} from 'react-redux'

import styles from './List.css'

class ItemDetail extends Component {

    onDragStart = (e,v) => {
        e.dataTransfer.dropEffect = "move";  
        e.dataTransfer.setData("text/plain",JSON.stringify(v)); 
        console.log("dragging")
    }

    render(){
        return(
            <div>
                <span>Drag Item :</span>
                <ul draggable="true" onDragStart={(e) => {this.onDragStart (e,this.props.product)}} style={{backgroundColor:'yellow'}}>{this.props.product.name}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(JSON.stringify(state.activeItem));
    return {
        product : state.activeItem
    };
}

export default connect(mapStateToProps)(ItemDetail)