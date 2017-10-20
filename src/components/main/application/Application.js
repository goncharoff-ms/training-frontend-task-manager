import React from 'react';
import ReactDOM from 'react-dom'
import {Button, Col, Jumbotron, Row} from "react-bootstrap";
import './Application.css'



export default (props) => {

    const todoItems = props.dataPosts.map((post) =>
    <Row id="application" key={post.id}>
        <Col xsOffset={1} xs={10}>
            <Jumbotron>
                <h2>{post.name}</h2>
                <p>{post.info}</p>
                <p>Приоритет: {post.order}</p>
                <p>Срок рассмотрения: { new Date(post.dateReview).toUTCString() }</p>
                <Button onClick={props.clickActiveWindow} className="application__btn" bsStyle="primary">Подписать</Button>
            </Jumbotron>
        </Col>
    </Row>
    );

    return(
        <div>{todoItems}</div>
    );
};


