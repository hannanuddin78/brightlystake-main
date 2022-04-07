import React,{Component} from "react";
import { BiRocket } from "@react-icons/all-files/bi/BiRocket";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";
import { Accordion } from "react-bootstrap";
import Recharts from './Recharts';
import Chartone from './Chartone';
import { fetchMoonRever} from '../../../../../redux/actionCreator';
import { connect } from 'react-redux';
import {fetchMoonBeam} from '../../../../../redux/actionCreator';
import Collator from '../../../../elements/Collactor';
import ResponsiveCollator from "../../../../elements/ResponsiveCollator";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import DataCheack from "./DataCheack";


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


class Individual extends Component {
  constructor(props){
    super(props)
    this.state = {
      individual:[],
      blocks:[],
      rankblocks:[],
    }
}


  componentDidMount(){
    this.props.fetchMoonBeam();

    axios.get(`https://moonbeam.brightlystake.com/api/moonbeam/getBlockCount/${this.props.match.params.id}`)
            .then(response => response)
            .then(collators => {
              this.setState({
                individual:collators.data,
              })
            })
    axios.get(`https://moonbeam.brightlystake.com/api/moonbeam/getDailyBlockCount/${this.props.match.params.id}`)
            .then(response => response)
            .then(collators => {
              this.setState({
                blocks:collators.data,
              })
            })
    axios.get(`https://moonbeam.brightlystake.com/api/moonbeam/getDelegators/${this.props.match.params.id}`)
            .then(response => response)
            .then(collators => {
              this.setState({
                rankblocks:collators.data,
              })
            })
}
render(){
    let  collators =null;
    collators = this.props.collators.map(collator => {
      return <Collator collator={collator} key={collator.id} />;
  })
  
    let  rescollators =null;
    rescollators = this.props.collators.map(collator => {
      return <ResponsiveCollator collator={collator} key={collator.id} />;
  });
  console.log(this.state.individual);
    return (
      <div>
        <div id="individualBanner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h4>
                  <a href="#">{this.props.match.params.id}</a>
                </h4>
  
                <div className="luckyveBtn">
                  <p>'{this.state.individual._identity}'</p>
                </div>
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
                  <h6>1,007,966,870</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Inflation</p>
                  <h6>5%</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Collators</p>
                  <h6>53</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4 ">
                <div className="box">
                  <p>Total Stakedt</p>
                  <h6>{this.state.individual._totalStake}</h6>
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
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>Minimum Stacking</p>
                  <h6>{this.state.individual_totalStake} GLMR</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>24 Hour Blocks Count</p>
                  <h6>~{this.state.individual._24hrs }</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>7 Days Blocks Count</p>
                  <h6>~ {this.state.individual._7day }</h6>
                </div>
              </div>
              <div className="col-lg-2 col-6 col-md-4">
                <div className="box">
                  <p>30 Days Block Count</p>
                  <h6>~ {this.state.individual._30day }</h6>
                </div>
              </div>
              <div className="col-lg-2 col-12 col-md-8">
                <div className="box">
                  <p>Delegator Count</p>
                  <h6>{this.state.individual._delegatorsCount }</h6>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </div>
  
        <div id="chartPart">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
              <div className="chart-number-two">
                <Chartone blocks={this.state.blocks}/>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="chart-number-two">
                <Recharts blocks={this.state.blocks}/>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <DataCheack id={this.props.match.params.id}/>
      </div>
    );
  }
};
export default connect(mapStateToProps,mapDisptachToProps) (Individual);
