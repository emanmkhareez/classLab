import React from 'react';


class HornedBeast extends React.Component{
    render(){
        return(
            <div style={{display:'inline-block'}}>
            <h2 style={{textAlign:'center'}}>{this.props.title}</h2>

         <img style={{width:'400px',height:"200px",padding:'3px'}} src={this.props.img} alt={this.props.title}/>

         <p style={{padding:'5px'}}>{this.props.description}</p>

            </div>
        )
    }
}
export default HornedBeast;