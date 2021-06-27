import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import HornData from './component/Data.json';
import SelectedBeast from './component/SelectedBeast';
import Form from 'react-bootstrap/Form';
import FormFile from './component/FormFile'



class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
      HornData:HornData,
      imgurl:'',
      title:'',
      desc:'',
      show:false
    };
  };
  
  FilterFun = (horn) =>{
    this.setState({
      HornData:horn

    });
  };
  





  handleClose = () => {
    this.setState({ show: false })
  };
  



  stateFun=(data1,data2,data3)=>{
    this.setState({
      title:data2,
      imgurl:data1,
    
      desc:data3,
      show:true
    }
 
    )
 };



  render(){
    return(
      <div>
           <FormFile
           FilterFun={this.FilterFun}
           />
        <Header/>

    <Main
    HornData={this.state.HornData} 
    stateFun={this.stateFun}
    
    />
        <Footer/>
        <SelectedBeast
        data1={this.state.imgurl} data2={this.state.title} data3={this.state.desc}shown={this.state.show}handleClose={this.handleClose}
        />
     
      </div>
    )
  };
};
export default App;