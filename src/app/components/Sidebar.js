import React from 'react';
import './Sidebar.scss';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button
                startIcon={<AddIcon fontSize="large" />}
                className="sidebar__compose"
            >
                Compose
            </Button>

            <SidebarOption />
        </div>
    );
}

export default Sidebar;