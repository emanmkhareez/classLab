import React from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import HornData from './component/Data.json';
import SelectedBeast from './component/SelectedBeast';




class App extends React.Component{
 
  constructor(props){
    super(props);
    this.state={
      HornData:HornData,
      imgurl:'',
      title:'',
      desc:'',
      show:false
    }
  }
  





  handleClose = () => {
    this.setState({ show: false })
  }
  



  stateFun=(data1,data2,data3)=>{
    this.setState({
      imgurl:data1,
      title:data2,
      desc:data3,
      show:true
    }
 
    )
 }



  render(){
    return(
      <div>
        <Header/>

    <Main
    HornData={this.state.HornData} stateFun={this.stateFun}
    />
        <Footer/>
        <SelectedBeast
        data1={this.state.imgurl} data2={this.state.title} data3={this.state.desc}shown={this.state.show}handleClose={this.handleClose}
        />
      </div>
    )
  }
}
export default App;