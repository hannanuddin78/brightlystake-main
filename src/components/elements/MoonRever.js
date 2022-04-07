import React from "react";
import { Accordion } from "react-bootstrap";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";

const MoonRever = props => {
  console.log(props.moonrever);
    return(
        <div>
            <Accordion.Item eventKey={props.moonrever.id}>
                  <Accordion.Header>
                    <ul>
                      <li className="one">{props.moonrever.identity}</li>
                      <li className="two">{props.moonrever.collator}</li>
                      <li className="three">{props.moonrever.glmr}</li>
                      <li className="four">{props.moonrever.sevenDayBlocksRank}</li>
                      <li className="five">{props.moonrever.effect}</li>
                      <li className="six">
                      <button type='button'className={(props.moonrever.isActive === 'Active')? 'active-btn':'inactive-btn'}>{props.moonrever.isActive}</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        <h4>{props.moonrever.sevenDayAPY}</h4>
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>${props.moonrever.revokeAmount}</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>${props.moonrever.effectOn}</h4>
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

export default MoonRever;