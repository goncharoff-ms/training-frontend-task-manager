
import React from 'react';
import {Grid, Col, Row, PageHeader} from "react-bootstrap";


export default (props) => {
    return(
        <Grid>
            <Row>
                <Col xsOffset={1} xs={10}>
                    <PageHeader>Ошибка 404. Данного пути не существует</PageHeader>
                </Col>
            </Row>
        </Grid>
    )
};


