import React,{Component} from "react";
import axios from 'axios';
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";
import { Accordion } from "react-bootstrap";
import { connect } from 'react-redux';
import {fetchMoonBeam} from '../../../../../redux/actionCreator';
import Collator from '../../../../elements/Collactor';
import ResponsiveCollator from "../../../../elements/ResponsiveCollator";


const mapStateToProps = state => {
  return {
    collators: state.collators,

  }
}

const mapDisptachToProps = dispatch => {
  return {
    fetchMoonBeam: () => dispatch(fetchMoonBeam())
  }
}

class Moonbeam extends Component {
  constructor(props){
    super(props)
    this.state = {
      topvalue:[],
      percent:[]
    }
}
  componentDidMount(){
    this.props.fetchMoonBeam();
    axios.get('https://moonbeam.brightlystake.com/api/moonbeam/getCollatorConsts')
            .then(response => response)
            .then(collators => {
              // console.log(collators.data)
              this.setState({
                topvalue:collators.data
              })
            })

    axios.get("https://moonbeam.brightlystake.com/api/moonbeam/getCollatorConsts")
      .then(response => 
        this.setState({
          percent: response.data.data
      }))
}

 render(){
   console.log(this.state.percent);
  let  collators =null;
  collators = this.props.collators.map(collator => {
    return <Collator collator={collator} key={collator.id} />;
})

  let  rescollators =null;
  rescollators = this.props.collators.map(collator => {
    return <ResponsiveCollator collator={collator} key={collator.id} />;
})

  return (
    <div>
      <div id="moonbeamBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Moonbeam Stats Page</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="moonbeamBoxes">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-6 col-md-4">
              <div className="box">
                <p>Total Supply</p>
                {/* <h6>{this.state.Stats.totalIssuance}</h6> */}
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-4">
              <div className="box">
                <p>Inflation</p>
               {this.state.percent.map(s => (
                 <h6>{s.blocksPerRound}</h6>
               ))}
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-4">
              <div className="box">
                <p>Collators</p>
                {/* <h6>{this.state.Stats.collatorsCount}</h6> */}
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-4">
              <div className="box">
                <p>Total Stakedt</p>
                <h6>5,715</h6>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-4">
              <div className="box">
                <p>Approx APY</p>
                <h6>440931%</h6>
              </div>
            </div>
            <div className="col-lg-2 col-6 col-md-4">
              <div className="box">
                <p>Round Length</p>
                <h6>1800 blocks</h6>
              </div>
            </div>
          </div>
          <div className="row second-line">
            <div className="col-lg-1"></div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="box">
                <p>Minimum Stacking</p>
                <h6>50 GLMR</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="box">
                <p>Block time</p>
                <h6>~12 sec</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="box">
                <p>UnStake Durationt</p>
                <h6>~ 7.00days</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="box second-last">
                <p>Rewards Distribution</p>
                <h6>~ 6 hrs</h6>
              </div>
            </div>
            <div className="col-lg-2 col-md-8 col-12">
              <div className="box last-box">
                <p>Rewards Eligibility</p>
                <h6>Top 300 Nominators</h6>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>

      <div id="moonbeamStage" className="moonbeam">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Click on each collator address for more details</h2>
              <p>Updated every 5 minutes.</p>
              <p className="last-line">Updated as of block : <span>446812</span> </p>
            </div>

            <div className="col-lg-12">

              <div className="mobile-none">
              <div className="table-head">
                <ul>
                  <li className="one">Identity</li>
                  <li className="two">Collator Address</li>
                  <li className="three">Counted Staked</li>
                  <li className="four">Delegators</li>
                  <li className="six">Status</li>
                </ul>
              </div>
              <Accordion defaultActiveKey="0">
              {collators}
              </Accordion>
              </div>

              <div className="disk-none mobile-block">
                <Accordion defaultActiveKey="0">
              {rescollators}
              </Accordion>
                </div>

             
            </div>
          </div>
        </div>
      </div>





    </div>
  );
 }
};

export default connect(mapStateToProps,mapDisptachToProps) (Moonbeam);
