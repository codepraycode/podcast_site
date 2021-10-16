import React from 'react';
import {channels} from '../../config';
import {Col} from 'react-bootstrap';

const Channels = (props) =>{
    // console.log(channels);
    const prepChannels = ()=>{
        // let template = null;

        let template = channels.map((item,i)=>{
            return (
                <>
                    <Col>
                        <div className={props.itemclass} style={{background: `url('${process.env.PUBLIC_URL}/assets/channels/${item.media}.svg') center center no-repeat`}}></div>
                    </Col>
            </>
            )
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

export default Channels