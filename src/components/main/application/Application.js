import React from 'react';
import ReactDOM from 'react-dom'
import {Button, Col, Jumbotron, Row} from "react-bootstrap";


export default  (props) => {

    function AppItem(props) {
        return(
            <li key={props.id}>
                <Jumbotron>
                    <h2>{props.post.name}</h2>
                    <p>{props.post.info}</p>
                    <p>Приоритет: {props.post.order}</p>
                    <p>Срок рассмотрения: { new Date(props.post.dateReview).toUTCString() }</p>
                    <Button onClick={props.func} bsStyle="primary">Подписать</Button>
                </Jumbotron>
            </li>
        );
    }



    function AppList(props) {
        const listItems = props.posts.map((post, id) =>
            <AppItem key={id} id={id} post={post}/>
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }


    return (
        <AppList posts={props.posts} />
    );

}

/*
 export default (props) => {

 const todoItems = props.dataPosts.map((post) =>
 <li key={post.id}>
 <Row >
 <Col xsOffset={1} xs={10}>
 <Jumbotron>
 <h2>{post.name}</h2>
 <p>{post.info}</p>
 <p>Приоритет: {post.order}</p>
 <p>Срок рассмотрения: { new Date(post.dateReview).toUTCString() }</p>
 <Button onClick={props.clickActiveWindow} bsStyle="primary">Подписать</Button>
 </Jumbotron>
 </Col>
 </Row>
 </li>
 );

 return(
 <div>{todoItems}</div>
 );
 };
 */


