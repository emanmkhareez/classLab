import React from 'react';
import HornedBeast from './HornedBeast';



class Main extends React.Component{



    // prop1Function=(data1,data2,data3)=>{
    //     this.props.stateFun(data1,data2,data3);
        
        
    // }
    
    render(){
        return(
            <>
            {
                this.props.HornData.map(item=>{
                    return(
                        
                        <HornedBeast 
                        title={item.title}
                        imgSrc={item.image_url}
                        description={item.description}
                        popUpTheCard={this.props.popUpTheCard}
                        //  prop2Function={()=>this.prop1Function(item.title,item.
                        
                        // image_url,item.description)}
                       
                     //    selectedData={this}
                        
                        />
                        // {/* <button onClick={this.prop1Function}>Voteee</button> */}
                        
                       
                        
                    )
                })
            }
        </>
              
              )
            }
        }
        

export default Main;