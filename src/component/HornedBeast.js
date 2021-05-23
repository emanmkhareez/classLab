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

<div id="div1"  style ={{display: 'inline-block'}}>
<Card style={{ width: '18rem' }} onClick={this.prop3Function} >
<Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
  <Card.Img variant="top" src={this.props.imgSrc}  alt={this.props.title} title={this.props.title}    />
  
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    

    <Button variant="primary" onClick={this.increaseVote}>VOTE </Button>
  </Card.Body>
  <h2>{this.state.vote}</h2>
</Card>

















            
            {/* <h2>{this.props.title}</h2>
         <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} />
   
   <button onClick={this.increaseVote}>Vote </button>
   <h2>{this.state.vote}</h2>
         */};

            </div>
        )
    };
};
export default HornedBeast;