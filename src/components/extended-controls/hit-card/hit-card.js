import { Card } from "@mui/material";
import React from "react";

const HitCard = ({ children }) => {
    return <div className='hit-card'>
        <Card>{children}</Card>
    </div>
};

export { HitCard };
