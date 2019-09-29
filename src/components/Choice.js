import React from 'react'
import {connect} from 'react-redux'

class Choice extends React.Component{
    render(){
        if(this.props.side === "heads"){
            return (
                <div>
                    <p className="header-right"> Picking: {this.props.side} </p>
                    <img className="left-image" src={require("../pictures/heads.png")} alt="tails" width="300" height="300"/>
                </div>
            )
        }else{
            return (
                <div>
                    <p className="header-left"> Picking: Tails </p>
                    <img className="right-image" src={require("../pictures/tails.png")} alt="tails" width="300" height="300"/>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) =>{
    return {
        side:state.side
    }
}

export default connect(mapStateToProps)(Choice);
