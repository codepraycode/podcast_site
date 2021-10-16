import React from 'react';
import {channels} from '../../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../../fontawesome';

const Icons = (props) =>{
    // console.log(channels);
    const prepChannels = ()=>{
        // let template = null;
        const WrapElement = (item, key)=>{
            let rntemplate = null
            switch (props.element) {
                case 'li':
                    rntemplate = <li className={props.classes} key={key}>
                        {item}
                    </li>
                    break;

                default:
                    rntemplate = item
                    break;
                    
            }
                

            return rntemplate
        }

        let template = channels.map((item,i)=>{
            
            

            return WrapElement((<a href={item.link} className={props.iconclassname}>
                        <i><FontAwesomeIcon icon={['fab', item.media]}/></i>
                        {props.showText ? item.media: null}
                    </a>), i);
            // <li className="nav-item nva-icons" key={i}>
            // </li>
        });

        

        return template;
    }
    return(
        // className="nav-link"
        <>
        {prepChannels()}
        </>
    )
}

export default Icons