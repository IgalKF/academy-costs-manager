/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/

import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import HitForm from "./HitForm"; // Import your HitForm component

const HitDialog = (props) => {
  const { open, onClose, onSubmit } = props;
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    sum: 0, // Initialize with a default value
  });

  const formOptions = [
    {
      key: "category",
      type: "select",
      label: "Category",
      options: ["FOOD", "HEALTH", "EDUCATION", "TRAVEL", "HOUSING", "OTHER"],
      required: true, // Make the "Category" field required
    },
    {
      key: "description",
      type: "text",
      label: "Description",
      required: true, // Make the "Description" field required
    },
    {
      key: "sum",
      type: "number",
      label: "Sum",
      required: true, // Make the "Sum" field required
    },
  ];

  const handleChange = (key, value) => {
    // Update the form data when a field changes
    setFormData({ ...formData, [key]: value });
  };

  const handleFormSubmit = () => {
    // Check if the required fields have valid values
    if (formData.category && formData.description && formData.sum) {
      // Submit the form
      onSubmit(formData);
    } else {
      // Display an error or message indicating that required fields are missing
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <Dialog className="hit-dialog" open={open} onClose={onClose}>
      <DialogTitle id="alert-dialog-title">{"Add record"}</DialogTitle>
      <DialogContent>
        <HitForm
          formColumns={1}
          closeButtonOptions={{ closeEventCallback: onClose }}
          submitButtonOptions={{ submitEventCallback: handleFormSubmit }}
          formControls={formOptions}
          formData={formData}
          onFieldChange={handleChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default HitDialog;
