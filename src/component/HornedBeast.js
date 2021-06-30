import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{

    // prop3Function=(para1,para2,para3)=>{
    //     this.props.prop2Function(para1,para2,para3);
        
    // }

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

popUpTheCard=()=>{
    this.props.popUpTheCard(this.props.title)
}


    render(){

        return(
            <div style={{display:'inline-block'}}>
            <h2 style={{textAlign:'center'}}>{this.props.title}</h2>

<div id="div1">
<Card style={{ width: '18rem' }} onClick={this.popUpTheCard}>
<Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
  <Card.Img variant="top" src={this.props.imgSrc}  alt={this.props.title} title={this.props.title}    />
  
    <p>{this.props.description}</p>  
    </Card.Text>
    

    <Button variant="primary" onClick={this.increaseVote}>VOTE </Button>
  </Card.Body>
  <h2>{this.state.vote}</h2>
</Card>















</div></div>

            
        )   

         }  
        
    }

export default HornedBeast;