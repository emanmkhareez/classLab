import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component{
    render(){
        return(
            <>
            <Modal show={this.props.shown}>

<Modal.Header>
{this.props.selectedCard.title}
</Modal.Header>

<Modal.Body>
    <img src={this.props.selectedCard.image_url} alt='' style={{width:"450px", height:"400px"}}></img>
    <br></br>
  <p> {this.props.selectedCard.description}</p> 

</Modal.Body>

<Modal.Footer>
   
    <Button variant="secondary" onClick={this.props.handleClose}>
        Close
    </Button>
</Modal.Footer>

</Modal>
            </>
        )
    }
}
export default SelectedBeast;