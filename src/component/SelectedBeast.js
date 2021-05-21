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
    {this.props.data1}
</Modal.Header>

<Modal.Body>
    <img src={this.props.data2} alt='' style={{width:"450px", height:"400px"}}></img>
</Modal.Body>

<Modal.Footer>
    {this.props.data3}

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