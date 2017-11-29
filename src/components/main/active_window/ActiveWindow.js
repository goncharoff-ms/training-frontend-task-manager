import React from 'react';
import {Modal, Button, Jumbotron} from "react-bootstrap";


export default (props) => {

    if (props.active) {
        console.log(props.owner.id);
        return(
             <Modal.Dialog>
                 <Modal.Header>
                      <Modal.Title>Подтверждение подписи</Modal.Title>
                 </Modal.Header>

                <Modal.Body>
                     Вы уверенны что хотите подписать данную заявку?
                    <br/>
                    <h2>{props.owner.post.name}</h2>
                    <p>{props.owner.post.info}</p>
                    <p>Приоритет: {props.owner.post.order}</p>
                    <p>Срок рассмотрения: { new Date(props.owner.post.dateReview).toUTCString() }</p>

                </Modal.Body>

                 <Modal.Footer>
                     <Button onClick={props.activeFunc}>Отменить</Button>
                     <Button onClick={() => {props.accept(props.owner.id); props.activeFunc()}} bsStyle="primary">Подписать</Button>
                 </Modal.Footer>

             </Modal.Dialog>
        );
    } else {
        return null;
    }

};


/*
 <template id="activeWindow">
 <div className="active-window">
 <div className="active-window__content">
 <span className="active-window__title">Вы уверенны ?</span>
 <div onClick={props.activeFunc} className="active-window__btn active-window__btn_ok">Да</div>
 <div onClick={props.activeFunc} className="active-window__btn active-window__btn_no">Нет</div>
 </div>
 </div>
 </template>
 */
