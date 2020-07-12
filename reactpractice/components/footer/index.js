import React from "react";
import {Col, Row} from "../Grid";

function Footer(Answer){
    return( 
        <Row>
            <Col size={"12"}>
                {Answer}
            </Col>
        </Row>
    )
}

export default Footer;