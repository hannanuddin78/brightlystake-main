import React from "react";
import { Accordion } from "react-bootstrap";
import {  Link} from "react-router-dom";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const ResponsiveCollator = props => {
    return(
        <div>
            <Accordion.Item eventKey={props.collator.id} className='collatorres'>
              <p className="collator-p1">colletor <button type='button'className={(props.collator.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.collator.isActive}</button></p>
              <p className="collator-p2">{props.collator.identity}</p>
              <p className="collator-p3">Collator Address</p>
              <p className="collator-p4"><Link  to={`/moonbeam/${props.collator.collator}`}>{props.collator.collator}</Link></p>
                    <ul className="left_content">
                      {/* <li className="one">Collator</li> */}
                      <li className="one">Counted Staked</li>
                      <li className="two">Delegators</li>
                      <li className="three">Self Staked</li>
                      <li className="four">7Day APY Average</li>
                      <li className="five">7Day Blocks Count</li>
                      <li className="five">Self Staked</li>
                    </ul>
                    <ul className="right_content">
                    {/* <li className="one">Collator</li> */}
                      <li className="one">{props.collator.countedStake}</li>
                      <li className="two">{props.collator.delegatorsCount}</li>
                      <li className="three">{props.collator.selfStake}</li>
                      <li className="four">{props.collator.sevenDayAPYRank}</li>
                      <li className="five">$ {props.collator.sevenDayBlocks}</li>
                      <li className="five">$ {props.collator.selfStake}</li>
                    </ul>
                    <div className="clr"></div>
                </Accordion.Item>
        </div>
    )
}

export default ResponsiveCollator;