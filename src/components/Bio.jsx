import React, { Component } from 'react';

import './Bio.css';

export default class Bio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="bio-container" style={{backgroundColor: this.props.bgColor}}>
        <div id="about-me-header" style={{backgroundColor: "white"}} className="d-flex justify-content-center">
          <h3>About me</h3>
        </div>
        <div className="bio-content" >
          <div className="w3-third avi-container" >
            <img id="self-portrait-main" className="avi-circle img-thumbnail mx-auto d-block" src={require("./../images/lifePics/me.jpeg")} alt="Self portrait at band practice" />
          </div>

          <div className="w3-third avi-container" >
            <h1>Howdy, my name is Isaac Pitblado</h1>

            <p style={{fontSize: "1.25em"}}>
              I am a Staff software engineer at Integral Ad Science developing microservices using Java Spring and AWS Lambda / ECS / EKS to directly fetch and score more than 300 million social media posts daily for both realtime and batch based pipelines.
            </p>
            <p style={{fontSize: "1.25em"}}>
              I lead a high performing team of 5 engineers and directly report to 10+ product managers and stakeholders for delivering at least 8 high impact "press release" level projects every quarter.
            </p>
            <p style={{fontSize: "1.25em"}}>
              I am a Texas A&M University Aggie alum who graduated with a BS in Computer Science with minors in Game Development and Cyber Security.
            </p>
          </div>
        </div>
        
        
        

      </div>
    )
  }

  executeScroll = () => this.myRef.current.scrollIntoView()
}