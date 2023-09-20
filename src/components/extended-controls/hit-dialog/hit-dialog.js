/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import "./hit-dialog.css";
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { HitForm } from "../hit-form/hit-form";
import DialogTitle from "@mui/material/DialogTitle";
/**
 * HIT Dialog control - Encapsulates MUI's complexity and providing dedicated flexiblity and custom reusability.
 * @param {Object} properties - Cpmponent's properties:
 * ** open -Dialog's state.
 * ** onClose -callback to execute on refresh button click.
 * @returns HIT Dialog control component.
 */

const HitDialog = (props) => {
  const { open, onClose, valueState } = props;
  const formOptions = [
    {
      key: "Date",
      type: "date",
      label: "Date",
    },
    {
      key: "category",
      type: "select",
      label: "Category",
      options: ["FOOD", "BILLS"],
    },
    {
      key: "description",
      type: "text",
      label: "Description",
    },
    {
      key: "sum",
      type: "text",
      label: "Sum",
    },
  ];
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">
        {"Add record"}
      </DialogTitle>
      <DialogContent>
        <HitForm
          submitButtonOptions={{ submitEventCallback: onClose }}
          formControls={formOptions}
          valueState={valueState}
        />
      </DialogContent>
    </Dialog>
  );
};

export default HitDialog;
