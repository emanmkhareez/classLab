import React from 'react';
import HornedBeast from './HornedBeast';



class Main extends React.Component{

//     formFun = (event) =>{
//         let numHorns = event.target.value;
//         let hornsData = HornData;
//         let BeastNum;
//         if(numHorns){
//             BeastNum = hornsData.filter(item=>{
//             if (item.horns == numHorns){
//                 return item;
//             };
//         })

//     }else{
//         BeastNum= hornsData;
//     }
//     this.props.FilterFun(BeastNum);
// };

    // prop1Function=(data1,data2,data3)=>{
    //     this.props.stateFun(data1,data2,data3);
        
        
    // }
    
    render(){
        return(
            <>








{/* <Form>
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
 */}






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