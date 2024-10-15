import { Fragment } from "react";
import myimage from './photo/img3.jpg';
const cdnimg= "https://img.freepik.com/premium-photo/angry-ravan-golden-throne_822609-1742.jpg";


const b = <h1>this is js file</h1>
function Abc()
{
    // return "this is webppppppppppppppppppppp";
    // return <h1>this is webppppppppppppppppppppp</h1>;
    // return b;
    return(
            <Fragment>
                 <p>this  is <h2>sdfh</h2>heading</p>
                <h2>this is second heading</h2>
                <img src={myimage} alt="image54545" width="300"/>
                <img src="photo/img5.jpg" alt="jksdhfjkhsdf" width="300"/>
                <img src={cdnimg} alt="sdfhjsdf" width="300"/>

            </Fragment>
      
    )
    
    
}

export default Abc;


export function Service()
{
    return <h4>this is heading four</h4>
}
