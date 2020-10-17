import React, { useState, useEffect } from 'react';


const StatBlock = (props) => {
const { name, value } = props;

return (
<div className='stat-block flex column align-center space-start'>
<div className="stat-name">{name}</div>
<div className="stat-value">{value}</div>
</div>
);
};

export default StatBlock;