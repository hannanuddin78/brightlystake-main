import React from "react";
import { Accordion } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const DeleResMoonRiver = props => {
    return(
        <div>
            <Accordion.Item eventKey={props.moonrever.id} className='collatorres'>
              <p className="collator-p1">colletor  <button type='button'className={(props.moonrever.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.moonrever.isActive}</button></p>
              <p className="collator-p2">{props.moonrever.collatorName}</p>
              <p className="collator-p3">Collator Address</p>
              <p className="collator-p4">{props.moonrever.collatorAddress}</p>
                    <ul className="left_content">
                      {/* <li className="one">Collator</li> */}
                      <li className="one">GLMR</li>
                      <li className="two">Rank</li>
                      <li className="five">Revoke Amount</li>
                      <li className="five">Effective on</li>
                    </ul>
                    <ul className="right_content">
                    {/* <li className="one">Collator</li> */}
                      <li className="one">{props.moonrever.amount}</li>
                      <li className="two">{props.moonrever.rank}</li>
                      <li className="five">$ {props.moonrever.revodelegation_amountkeAmount}</li>
                      <li className="five">$ {props.moonrever.applicable_round}</li>
                    </ul>
                    <div className="clr"></div>
                </Accordion.Item>
        </div>
    )
}

export default DeleResMoonRiver;