import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import './EmailRow.scss';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

function EmailRow({ id, title, subject, description, time }) {
    return (
        <div className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>{subject}
                    <span className="emailRow__description">
                        - {description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    );
}

export default EmailRow;