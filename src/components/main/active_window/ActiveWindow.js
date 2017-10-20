import React from 'react';
import {Modal, Button} from "react-bootstrap";

import './ActiveWindow.css';


export default (props) => {
    if (props.active) {
        return(
             <Modal.Dialog>
                 <Modal.Header>
                      <Modal.Title>Modal title</Modal.Title>
                 </Modal.Header>

                <Modal.Body>
                     One fine body...
                </Modal.Body>

                 <Modal.Footer>
                     <Button>Close</Button>
                     <Button bsStyle="primary">Save changes</Button>
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
