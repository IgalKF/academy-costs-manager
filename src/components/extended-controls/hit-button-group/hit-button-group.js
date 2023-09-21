/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import { HitButton } from "../../base-controls/hit-button/hit-button";
import HitDialog from "../../extended-controls/hit-dialog/hit-dialog";
import "./hit-button-group.css";
import React, { useState } from "react";

/**
 * HIT Button Group control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * * onAddRecord -callback to execute on add button click.
 * * onUpdateRecords -callback to execute on refresh button click.
 * * onShowFilter - Callback to execute on onShowFilter button click.
 * @returns HIT Button Group control component.
 */
const HitButtonGroup = ({ onAddRecord, onUpdateRecords, onShowFilter }) => {
  const [isAddMode, setIsAddMode] = useState(false);
  const [recoredToAdd, setRecordToAdd] = useState({});

  const onDialogSubmit = () => {
    onAddRecord(recoredToAdd)
    setIsAddMode(false);

  }
  return (
    <div className="hit-button-group">
      <HitButton
        title="Add"
        clickEvent={() => setIsAddMode(true)}
        icon="add"
      ></HitButton>
      <HitDialog
        valueState={[recoredToAdd, setRecordToAdd]}
        open={isAddMode}
        onClose={() => setIsAddMode(false)}
        onSubmit={onDialogSubmit}
      ></HitDialog>
      <HitButton
        title="Filter"
        clickEvent={onShowFilter}
        icon="filter"
      ></HitButton>
      <HitButton
        title="refresh"
        clickEvent={onUpdateRecords}
        icon="refresh"
      ></HitButton>
    </div>
  );
};

export default HitButtonGroup;
