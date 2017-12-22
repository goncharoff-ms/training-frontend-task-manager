import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {Button, Col, Jumbotron, Row} from "react-bootstrap";


export default class MainListApplication extends Component {

    constructor(props) {
        super(props);
    }



    outputAccept = (element) => {
        this.props.activeFunc(element);
    };


    render() {

        const styleApp = 'height : 100px;';

            const AppItem = (props) => {
               if (this.props.history) {
                   return(
                       <li key={props.id}>
                           <Jumbotron>
                               <h2>{props.post.name}</h2>
                               <p>{props.post.info}</p>
                               <p>Приоритет: {props.post.order}</p>
                               <p>Срок рассмотрения: { new Date(props.post.dateReview).toUTCString() }</p>
                           </Jumbotron>
                       </li>
                   );
               } else {
                   return(
                       <li key={props.id}>
                           <Jumbotron>
                               <h2>{props.post.name}</h2>
                               <p>{props.post.info}</p>
                               <p>Приоритет: {props.post.order}</p>
                               <p>Срок рассмотрения: { new Date(props.post.dateReview).toUTCString() }</p>
                               <Button onClick={() => {this.outputAccept(props)}} bsStyle="primary">Подписать</Button>
                           </Jumbotron>
                       </li>
                   );
               }
            };

             const listItems = this.props.posts.map((post, id) =>
                 <AppItem key={id} id={id} post={post}/>);
             return (
                 <ul>
                     {listItems}
                 </ul>
             );
         }

}
