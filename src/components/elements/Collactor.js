import React from "react";
import { Accordion } from "react-bootstrap";
import {  Link} from "react-router-dom";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const Collator = props => {
 // console.log(props.collator);
    return(
        <div>
            <Accordion.Item eventKey={props.collator.id}>
                  <Accordion.Header>
                    <ul>
                      <li className="one">{props.collator.identity}</li>
                      <li className="two"><Link  to={`/moonbeam/${props.collator.collator}`}>{props.collator.collator}</Link></li>
                      <li className="three">{props.collator.countedStake}</li>
                      <li className="four">{props.collator.delegatorsCount}</li>
                      <li className="six">
                        <button type='button'className={(props.collator.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.collator.isActive}</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>7Day APY Average</p>
                        <h4>{props.collator.sevenDayAPYRank}</h4>
                      </li>
                      <li className="two">
                        <p>7Day Blocks Count</p>
                        <h4>${props.collator.sevenDayBlocks}</h4>
                      </li>
                      <li className="three">
                        <p>Self Staked</p>
                        <h4>${props.collator.selfStake}</h4>
                      </li>
                      
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
        </div>
    )
}

export default Collator;