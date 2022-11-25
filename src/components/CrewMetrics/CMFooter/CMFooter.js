import React from 'react'
import {CMFooterSection1} from './CMFooterSection1'
import {CMFooterSection2} from './CMFooterSection2'
import "./CMFooter.css" 

const CMFooter=()=>{
    return(
        <div className="Footer-Section-Container">
            <CMFooterSection1/>
            <CMFooterSection2/>
        </div>
    )
}

export {CMFooter};