  
import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data'

class Main extends React.Component{
    render(){
        return(
            <>


{Data.map((item,idx)=>{
    return(
        <HornedBeast
        title={item.title}
                    imgUrl={item.image_url}
                    description= {item.description}
                    />
    )

})

    }
    


</>
        )
    }
}










{/*                 
<HornedBeast
 title={"UniWhal"} 
  img={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}
 description={ "A unicorn and a narwhal nuzzling their horns"}
  
  />
<HornedBeast   title={"Rhino Family"} 
 img={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'} 
 description={"Mother (or father) rhino with two babies" }
 />
<HornedBeast   title={"Unicorn Head"}  
img={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'}  
description={" Someone wearing a creepy unicorn head mask" }
/> */}
 
export default Main;