import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornData from './Data.json';
import Form from 'react-bootstrap/Form';

class FormFile extends React.Component {

    formFun = (event) =>{
        let numHorns = event.target.value;
        let hornsData = HornData;
        let BeastNum;
        if(numHorns){
            BeastNum = hornsData.filter(item=>{
            if (item.horns == numHorns){
                return item;
            };
        })

    }else{
        BeastNum= hornsData;
    }
    this.props.FilterFun(BeastNum);
};

    render() {

        return (
            <>



<Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Choose the number of horne</Form.Label>
                        <Form.Control as="select" onChange ={this.formFun}> 
                        <option value=''>All</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>Wow</option>
                        </Form.Control>
            
                    </Form.Group>
                </Form>




            </>
        )
    }
}
export default FormFile