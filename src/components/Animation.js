import React from 'react'
import {connect} from 'react-redux'

class Animation extends React.Component{


    render(){
        if(!this.props.flipped){
        return (

            <div>
            {console.log(this.props.flipped)}
            </div>
        )
    }
    else{
        return (
            <div>
                <img className="tenor" src={require("../pictures/tenor.gif")} alt="tails" width="300" height="300"/>
            </div>
        )
    }
    }
}

const mapStateToProps = (state) =>{
    return {
        flipped:state.flipped
    }
}

export default connect(mapStateToProps)(Animation);
