import React from 'react';
import flagLogo from "../Icons/flagLogo";
import "./CMFooter.css" 


const CMFooterSection2=()=>{
    return(
        <div className='CMFooter-Section-2'>
            <h1 className='codon-presence'>Our Presence</h1>
            <div className='codon-address'>
             <flagLogo/>
              <p>codon Software private Limited 161/1,Road No:13A Jubilee Hills Hyderabad 500033 INDIA</p>  
            </div>
        </div>
    )
}

export {CMFooterSection2}
