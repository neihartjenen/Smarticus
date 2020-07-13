import React from "react";
import {Col, Row} from "../Grid";

function Header(Question){
    return( 
        <Row>
            <Col size={"12"}>
                {Question}
            </Col>
        </Row>
    )
}

export default Header;