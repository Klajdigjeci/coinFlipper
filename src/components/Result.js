import React from 'react'
import {connect} from 'react-redux'


class Result extends React.Component{

    getRandomNumber(){
        let number = Math.floor(Math.random() * 2);
        console.log(number)
        return number;
    }


    render(){

        if(this.props.flipped){

            if(this.getRandomNumber() === 0){
                if(this.props.side === "heads"){
                    return (
                        <div>
                            <h1 className="result"> Result: Heads</h1>
                            <div class="ui green message">Congratulations You won</div>
                        </div>)
                }
                else{
                    return (
                        <div>
                            <h1 className="result"> Result: Heads</h1>
                            <div class="ui red message">Better Luck Next Time</div>
                        </div>)
                }
            } else{
                if(this.props.side === "tails"){
                    return (
                        <div>
                            <h1 className="result"> Result: Tails</h1>
                            <div class="ui green message">Congratulations You won</div>
                        </div>)
                }
                else{
                    return (
                        <div>
                            <h1 className="result"> Result: Tails</h1>
                            <div class="ui red message">Better Luck Next Time</div>
                        </div>)
                }
            }
        }
        else{
            return (<div> <button className="ui basic loading button">Waiting</button> </div>)
        }
}
}

const mapStateToProps = (state) =>{
    return {
        flipped:state.flipped,
        side: state.side
    }
}

export default connect(mapStateToProps)(Result);
