import { Col, Row } from 'antd';
import { json } from 'body-parser';
import React from 'react'
import ProfileDetails from './ProfileDetails';
import ProfileImage from './ProfileImage';
export default function Final(props: any) {

  return (
    <div className="profile">
      <Row>
        <Col>
          <ProfileImage n={props.n} />
        </Col>
      </Row>
      {/*<Row>
        <Col>
          <h1 className="name"> {props.n.temel.name + " " + props.n.temel.surname} </h1>
        </Col>
  </Row>*/}
      <Row>
        <Col>
          <ProfileDetails page={props.page} n={props.n} />
        </Col>
      </Row>
    </div>);
}




