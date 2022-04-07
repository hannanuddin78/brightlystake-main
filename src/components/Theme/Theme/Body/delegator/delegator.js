import React,{Component} from "react";
import { BiRocket } from "@react-icons/all-files/bi/BiRocket";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";
import { Accordion } from "react-bootstrap";
import {fetchDelegator,fetchMoonRever} from '../../../../../redux/actionCreator';
import { connect } from 'react-redux';
import DeleMoonRiver from '../../../../elements/DeleMoonRiver';
import DeleResMoonRiver from "../../../../elements/DeleResMoonRiver";
import DeleMoonbeam from '../../../../elements/DeleMoonbeam';
import ResDeleMoonbeam from "../../../../elements/ResDeleMoonbeam";


const mapStateToProps = state => {
  return {
    delegatorAddress: state.delegatorAddress,
    loadSearchMoonRiver: state.loadSearchMoonRiver,

  }
}

const mapDisptachToProps = dispatch => {
  return {
    fetchDelegator: (delegatorAddress) => dispatch(fetchDelegator(delegatorAddress)),
    fetchMoonRever:()=>dispatch(fetchMoonRever())
    
  }
}

class Delegator extends Component {
  constructor(props){
    super(props)
    this.state = {
      delegatorAddress:'',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleInputChange = event => {
  this.setState({
      [event.target.name] : event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault();
  this.props.fetchDelegator(this.state.delegatorAddress);
}

 render(){
   // Moonbeam 
  let  collators =null;
  collators = this.props.delegatorAddress.map(collator => {
    return <DeleMoonbeam collator={collator} key={collator.id} />;
});
  let  rescollators =null;
  rescollators = this.props.delegatorAddress.map(collator => {
    return <ResDeleMoonbeam collator={collator} key={collator.id} />;
});


// MoonRiver

let  loadSearchMoonRiver =null;
loadSearchMoonRiver = this.props.loadSearchMoonRiver.map(moonrever => {
      return <DeleMoonRiver  moonrever={moonrever} key={moonrever.id} />;
  });
let  resmoonrevers =null;
resmoonrevers = this.props.loadSearchMoonRiver.map(moonrever => {
      return <DeleResMoonRiver moonrever={moonrever} key={moonrever.id} />;
  });



  return (
    <div>
      <div id="banner-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="delegatorAddress">
                <h3>Enter Delegator address</h3>
                <form onSubmit={this.handleSubmit}>
                  <span>
                    <input type="text"
                     placeholder="Delegator address"
                      value={this.state.delegatorAddress}
                        onChange={this.handleInputChange} 
                        name="delegatorAddress"
                        />
                    <BiSearchAlt />
                  </span>

                  <button type="submit">
                    Submit <BiRocket />{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="moonbeam" className="moonbeam">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>MOONBEAM</h2>
              <p>
                Updated every 5 minutes. Last Updated 2022-02-17{" "}
                <span> 18:17:35.498046</span> UTC{" "}
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

      <div id="moonriver" className="moonriver">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="moonriver-header">MOONRIVER</h2>
            </div>

            <div className="col-lg-12">
              {/* <div className="table-head">
                <ul>
                  <li className="one">Collator</li>
                  <li className="two">Collator Address</li>
                  <li className="three">GLMR</li>
                  <li className="four">Rank</li>
                  <li className="five">Effective On</li>
                  <li className="six">Status</li>
                </ul>
              </div> */}

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
              {loadSearchMoonRiver}
              </Accordion>
              </div>

              <div className="disk-none mobile-block">
              <Accordion defaultActiveKey="0">
                {resmoonrevers}
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

export default connect(mapStateToProps,mapDisptachToProps) (Delegator);
