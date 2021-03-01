import React from 'react';
import addRemoveScroll from '../../untils/addRemoveScroll';

const PopUpThanks = ({ setPopupThanksActive }) => (
  <div className="popupThanks-box">
    <div
      onClick={() => {
        setPopupThanksActive(false);
        addRemoveScroll();
      }}
      role="presentation"
    >
      <svg className="backSymbol" viewBox="0 0 20 20">
        <g>
          <path d="M17.89,0H2.11A2.11,2.11,0,0,0,0,2.11V17.89A2.11,2.11,0,0,0,2.11,20H17.89A2.11,2.11,0,0,0,20,17.89V2.11A2.11,2.11,0,0,0,17.89,0ZM19,17.89A1.11,1.11,0,0,1,17.89,19H2.11A1.11,1.11,0,0,1,1,17.89V2.11A1.11,1.11,0,0,1,2.11,1H17.89A1.11,1.11,0,0,1,19,2.11V17.89Z" />
          <path d="M13,7a.5.5,0,0,0-.71,0L10,9.29,7.68,7A.5.5,0,0,0,7,7.68L9.29,10,7,12.32a.5.5,0,0,0,.71.71L10,10.71,12.32,13a.5.5,0,0,0,.71-.71L10.71,10,13,7.68A.5.5,0,0,0,13,7Z" />
        </g>
      </svg>
    </div>
    <h2 className="thanksTitle">Ваш заказ принят!</h2>
    <div className="thanksContent">В ближайшее время с вами свяжется наш специалист</div>
  </div>
);

export default PopUpThanks;
