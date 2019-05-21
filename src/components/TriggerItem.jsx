import React from 'react';
import TriggerIcon from '../components/TriggerIcon';
import { getLabel } from '../constants';
function TriggerItem({event}) {
  if(!event) return null;
  const { label, trigger_type } = event.attributes;
  return (
    <>
      <TriggerIcon type={trigger_type} />

      <div className="item-description">
        <h3 className="item-title">{label}</h3>
        <span className={`item-type ${trigger_type}`}>
          {getLabel(trigger_type)}
        </span>
        <span className="item-id">{`ID: ${event.id.split('-')[0]}`}</span>
      </div>
    </>
  );
}

export default TriggerItem;
