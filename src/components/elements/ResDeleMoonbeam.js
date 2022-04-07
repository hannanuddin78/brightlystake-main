import React from "react";
import {  Link} from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const ResDeleMoonbeam = props => {
    return(
        <div>
            <Accordion.Item eventKey={props.collator.id} className='collatorres'>
               <p className="collator-p1">colletor <button type='button'className={(props.collator.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.collator.isActive}</button></p>
              <p className="collator-p2">{props.collator.identity}</p>
              <p className="collator-p3">Collator Address</p>
              <p className="collator-p4"><Link  to={`/moonbeam/${props.collator.collator}`}>{props.collator.collator}</Link></p>
                    <ul className="left_content">
                      <li className="two">GLMR</li>
                      <li className="three">Rank</li>
                      <li className="one">1 Day Reward</li>
                      <li className="four">APY (4 rounds)</li>
                      <li className="five">Revoke Amount</li>
                      <li className="five">Effective On</li>
                    </ul>
                    <ul className="right_content">
                      <li className="one">{props.collator.delegation_amount}</li>
                      <li className="two">{props.collator.rank}</li>
                      <li className="three">{props.collator.applicable_round}</li>
                      <li className="four"> nai</li>
                      <li className="five">$ {props.collator.amount}</li>
                      <li className="five">$ {props.collator.applicable_round}</li>
                    </ul> 
                    <div className="clr"></div>
                </Accordion.Item>
        </div>
    )
}

export default ResDeleMoonbeam;