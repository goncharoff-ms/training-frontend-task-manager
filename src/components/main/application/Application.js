import React from 'react';
import ReactDOM from 'react-dom'
import './Application.css'


export default (props) => {

    const todoItems = props.dataPosts.map((post) =>
        <div key={post.id} className="application" id="application">
            <div className="application__name">{ post.name }</div>
            <p className="application__dif">{ post.dif }</p>
            <div className="application__data">
                <p className="application__order">Приоритет: { post.order }</p>
                <p className="application_date">Срок рассмотрения: { post.dateReview } </p>
            </div>
            <button onClick={props.activeFunc}  className="application__btn">
                Подписать
            </button>
        </div>
    );

    return(
        <div>{todoItems}</div>
    );
};


