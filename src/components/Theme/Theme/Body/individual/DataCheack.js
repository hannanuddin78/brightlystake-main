import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

const DataCheack = ({ id }) => {
    const [sate, setSate] = useState([])

    useEffect(() => {
        axios.get(`https://moonbeam.brightlystake.com/api/moonbeam/getDelegators/${id}`)
            .then(response => setSate(response.data.data))
    }, [id])
    console.log(sate);
    return (
        <div>
            <div id="moonbeamStage" className="moonriver">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Click on each collator address for more details</h2>
                            <p>Updated every 5 minutes.</p>
                            <p className="last-line">
                                Updated as of block : <span>446812</span>{" "}
                            </p>
                        </div>

                        <div className="col-lg-12">
                            <div className="mobile-none">
                                <div className="table-head">
                                    <ul>
                                        <li className="one">Collator</li>
                                        <li className="two">Collator Address</li>
                                        <li className="three">GLMR</li>
                                        <li className="four">Rank</li>
                                        <li className="five">Effective On</li>
                                        <li className="six">Status</li>
                                    </ul>
                                </div>
                                <Accordion defaultActiveKey="0">
                                    {sate.map((s, index) => (
                                        <Accordion.Item eventKey={index}>
                                            <Accordion.Header>
                                                <ul>
                                                    <li className="one">{s.amount}</li>
                                                    <li className="two"><Link to={`/moonbeam/${s.delegator}`}>{s.delegator }</Link></li>
                                                </ul>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>

                            </div>

                            <div className="disk-none mobile-block">
                                {/* <Accordion defaultActiveKey="0">
                                    {rescollators}
                                </Accordion> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCheack
