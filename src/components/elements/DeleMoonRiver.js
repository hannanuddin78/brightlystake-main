import React from "react";
import { Accordion } from "react-bootstrap";
import {  Link} from "react-router-dom";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const DeleMoonRiver = props => {
    return(
        <div>
            <Accordion.Item eventKey={props.moonrever.id}>
                  <Accordion.Header>
                    <ul>
                      <li className="one">{props.moonrever.identity}</li>
                      
                      <li className="two"><Link  to={`/moonbeam/${props.moonrever.collator}`}>{props.moonrever.collator}</Link></li>
                      <li className="three">{props.moonrever.amount}</li>
                      <li className="four">{props.moonrever.rank}</li>
                      <li className="six">
                      <button type='button'className={(props.moonrever.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.moonrever.isActive}</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                     <ul>
                      <li className="one">
                      <p>Revoke Amount</p>
                        <h4>${props.moonrever.revodelegation_amountkeAmount}</h4>
                      </li>
                      <li className="two">
                        
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>${props.moonrever.applicable_round}</h4>
                      </li>
                      <li className="four">
                        <button type='button'className="action-btn">
                          Action
                          <BiDotsHorizontalRounded />
                        </button>
                      </li>
                    </ul> 
                  </Accordion.Body>
                </Accordion.Item>
        </div>
    )
}

export default DeleMoonRiver;