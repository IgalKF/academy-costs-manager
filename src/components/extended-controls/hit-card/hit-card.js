/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slotzki  318875846
*/
import { Card } from "@mui/material";
import React from "react";

const HitCard = ({ children }) => {
    return <div className='hit-card'>
        <Card>{children}</Card>
    </div>
};

export { HitCard };
