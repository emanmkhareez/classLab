import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{

     constructor(props){
         super(props);
         this.state={
             vote:0
         }

     }
increaseVote =() =>{
    this.setState({
        vote:this.state.vote+1
    })
    
}

popUpTheCard=()=>{
    this.props.popUpTheCard(this.props.title)
}


    render(){

        return(

<div id="div1"  style={{display:'inline-block',width:'300px',padding:'10px'}}>
<Card>
<Card.Body >
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
  <img   style={{width:'250px'}} variant="top" src={this.props.imgUrl} alt={this.props.title} title={this.props.title}  />
  
    <p>{this.props.description}</p>
    </Card.Text>
    <Button variant="primary"  onClick={this.increaseVote} >Vote</Button>
  </Card.Body>
  <h2>😻{this.state.vote}</h2>
</Card>

















            
            {/* <h2>{this.props.title}</h2>
         <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} />
   
   <button onClick={this.increaseVote}>Vote </button>
   <h2>{this.state.vote}</h2>
         */}

            </div>
        )
    }
}
export default HornedBeast;