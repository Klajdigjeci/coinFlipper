import React from 'react'
import Choice from './Choice'
import Animation from './Animation'
import Result from './Result'
import '../styling/App.css'
import {setSide, setFlip} from '../actions'
import {connect} from 'react-redux'

class App extends React.Component{

    changeButtonName(flipped){
        if(!flipped){
            document.getElementById("mybtn").innerHTML ="Reset"
        }else{
            document.getElementById("mybtn").innerHTML ="Flip"
        }
    }


    render(){
        return (
            <div>
                <h1 className="mainPageTitle"> Coin Flipper </h1>

                <p className="header-middle"> Pick your side: </p>
                <div className="ui form">
                  <div className="inline fields">

                    <div className="field">
                      <div className="ui radio checkbox">
                        <input type="radio" name="side" value="heads" onClick={()=>this.props.setSide("heads")} defaultChecked/>
                        <label>Heads</label>
                      </div>
                    </div>
                    <div className="field">
                      <div className="ui radio checkbox">
                        <input type="radio" name="side" value="tails" onClick={()=>this.props.setSide("tails")} />
                        <label>Tails</label>
                      </div>
                    </div>
                </div>
                </div>
                <button id="mybtn" onClick={() => {this.props.setFlip(!(this.props.flipped)); this.changeButtonName(this.props.flipped);  }}>
                    Flip
                </button>

                <Animation />

                <Choice  />

                <Result />
            </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        flipped:state.flipped,
    }
}


export default connect(mapStateToProps,{setSide: setSide, setFlip:setFlip})(App);
