import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{

    prop3Function=(para1,para2,para3)=>{
        this.props.prop2Function(para1,para2,para3);
        
    };

     constructor(props){
         super(props);
         this.state={
             vote:0
         };

     };
increaseVote =() =>{
    this.setState({
        vote:this.state.vote+1
    })
    
};

    render(){

        return(
            <div style={{display:'inline-block'}}>
            <h2 style={{textAlign:'center'}}>{this.props.title}</h2>

         <img style={{width:'400px',height:"200px",padding:'3px'}} src={this.props.img} alt={this.props.title}/>

         <p style={{padding:'5px'}}>{this.props.description}</p>

            </div>
        )
    };
};
export default HornedBeast;