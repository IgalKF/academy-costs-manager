/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import { HitButton } from "../../base-controls/hit-button/hit-button";
import HitDialog from "../../extended-controls/hit-dialog/hit-dialog";
import "./hit-button-group.css";
import React, { useEffect, useState } from "react";
/**
 * HIT Button Group control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * ** onUpdateRecords -callback to execute on refresh button click.
 * @returns HIT Button Group control component.
 */
const HitButtonGroup = (props) => {
  const { onUpdateRecords } = props;
  const [isAddMode, setIsAddMode] = useState(false);
  const [recoredToAdd, setRecordToAdd] = useState({});

  useEffect(() => {
    console.log(recoredToAdd);
  }, [recoredToAdd]);

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
      ></HitDialog>
      <HitButton
        title="Filter"
        clickEvent={() => console.log("filter")}
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
