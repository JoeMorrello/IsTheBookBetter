import cx from 'classnames';
import { Component } from 'react';

export default class Counter extends Component {
    constructor(){
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            counter : 42
        }
    }

    onClickHandler = (event) => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    
    render() {
        return (
            <>
                <div>
                    <h2 className='counter'>{this.state.counter}</h2>
                    <button onClick={this.onClickHandler} className ='counter-button'>Click</button>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}
//works, passes tests
//TODO Clean up changes, fix indentation, check for edge cases