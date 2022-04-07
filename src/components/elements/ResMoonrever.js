import React from "react";
import { Accordion } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const ResMoonrever = props => {
    return(
        <div>
            <Accordion.Item eventKey={props.moonrever.id} className='collatorres'>
              <p className="collator-p1">colletor <button type='button'className={(props.moonrever.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.moonrever.isActive}</button></p>
              <p className="collator-p2">{props.moonrever.collatorName}</p>
              <p className="collator-p3">Collator Address</p>
              <p className="collator-p4">{props.moonrever.collatorAddress}</p>
                    <ul className="left_content">
                      {/* <li className="one">Collator</li> */}
                      <li className="one">GLMR</li>
                      <li className="two">Rank</li>
                      <li className="three">1 Day Reward</li>
                      <li className="four">APY (4 rounds)</li>
                      <li className="five">Revoke Amount</li>
                      <li className="five">Effective on</li>
                    </ul>
                    <ul className="right_content">
                    {/* <li className="one">Collator</li> */}
                      <li className="one">{props.moonrever.glmr}</li>
                      <li className="two">{props.moonrever.rank}</li>
                      <li className="three">{props.moonrever.effect}</li>
                      <li className="four">{props.moonrever.apy}</li>
                      <li className="five">$ {props.moonrever.revokeAmount}</li>
                      <li className="five">$ {props.moonrever.effectOn}</li>
                    </ul>
                    <div className="clr"></div>
                </Accordion.Item>
        </div>
    )
}

export default ResMoonrever;