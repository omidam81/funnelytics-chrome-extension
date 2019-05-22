import React from 'react'
import {
  ButtonClickIcon,
  FormSubmitIcon,
  VideoPlayIcon,
  PurchaseIcon
} from '../svgs';

function TriggerItem({type}) {
  const getClasses = type => {
    return type === 'click'
      ? 'button-click'
      : type === 'submit'
      ? 'form-submit'
      : type === 'play'
      ? 'video-play'
      : type === 'purchase'
      ? 'purchase'
      : '';
  };
  return (
    <div className={`icon ${getClasses(type)}`}>
      {type === 'click' ? (
        <ButtonClickIcon />
      ) : type === 'submit' ? (
        <FormSubmitIcon />
      ) : type === 'play' ? (
        <VideoPlayIcon />
      ) : type === 'purchase' ? (
        <PurchaseIcon />
      ) : (
        ''
      )}
    </div>
  );
}

export default TriggerItem
