import React from "react";
import { Accordion } from "react-bootstrap";
import {  Link} from "react-router-dom";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const DeleMoonbeam = props => {
    return(
        <div>
            <Accordion.Item eventKey={props.collator.id}>
                  <Accordion.Header>
                    <ul>
                      <li className="one">{props.collator.identity}</li>
                      <li className="two"><Link to={`/moonbeam/${props.collator.collator}`}>{props.collator.collator}</Link></li>
                      <li className="three">{props.collator.delegation_amount}</li>
                       <li className="four">{props.collator.rank}</li>
                     <li className="five"></li>
                      <li className="six">
                      <button type='button'className={(props.collator.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.collator.isActive}</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        {/* <h4>{props.collator.sevenDayAPYRank}</h4> */}
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>${props.collator.amount}</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>${props.collator.applicable_round}</h4>
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

export default DeleMoonbeam;