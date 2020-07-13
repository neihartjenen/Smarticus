import React from "react";
import {Col, Row} from "../Grid";

function Header(Question){
    return( 
        <Row>
            <Col size={"12"}>
                <p>
                    {Question}
                </p>
            </Col>
        </Row>
    )
}

export default Header;