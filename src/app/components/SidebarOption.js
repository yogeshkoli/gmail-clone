import React from 'react';
import './SidebarOption.scss';

function SidebarOption({ Icon, title, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && 'sidebarOption--active'}`} >
            {Icon && <Icon />}
            <h3>{title}</h3>
            {number && <p>{number}</p>}
        </div>
    );
}

export default SidebarOption;