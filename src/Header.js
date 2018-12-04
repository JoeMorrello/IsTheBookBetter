import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
          visible:!this.state.visible
        })
    }
    componentDidMount() {
      ReactModal.setAppElement('body');
   }

    render() {
      return  (
        <div className="Header">
        <div className="left">
          <h1 className="HeaderText"> Is the Book Better, or the Movie?</h1>
        </div>
        <div className="right">
            <button onClick={this.toggleModal}>about</button>
        </div>
      <ReactModal a isOpen={this.state.visible} shouldCloseOnOverlayClick={true}onRequestClose={this.toggleModal}>
      
      <button onClick={this.toggleModal}>Close Modal</button>
      </ReactModal>
       
    </div> 
      );
     
    }
  }
  
  export default Header;