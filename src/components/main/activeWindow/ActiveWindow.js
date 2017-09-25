import React, { Component } from 'react';
import './ActiveWindow.css';


export default (props) => {
    if (props.active) {
        return(
            <template id="activeWindow">
                <div className="active-window">
                    <div className="active-window__content">
                        <span className="active-window__title">Вы уверенны ?</span>
                        <div onClick={props.activeFunc} className="active-window__btn active-window__btn_ok">Да</div>
                        <div onClick={props.activeFunc} className="active-window__btn active-window__btn_no">Нет</div>
                    </div>
                </div>
            </template>
        );
    } else {
        return null;
    }

};
