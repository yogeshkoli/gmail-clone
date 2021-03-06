import React, { useEffect, useState } from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import './EmailList.scss';
import EmailSection from './EmailSection';
import InboxIcon from '@material-ui/icons/Inbox';
import PersonIcon from '@material-ui/icons/Person';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { db } from '../firebase';

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setEmails(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))));
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settings__left">
                    <Checkbox />

                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>

                    <IconButton>
                        <RedoIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settings__right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <EmailSection Icon={InboxIcon} title="Inbox" color="red" selected />
                <EmailSection Icon={PersonIcon} title="Social" color="#1A73EB" />
                <EmailSection Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="emailList__list">

                {emails.map(({ id, data }) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={data.to}
                        subject={data.subject}
                        description={data.message}
                        time={new Date(data.timestamp?.seconds * 1000).toUTCString()} />
                )
                )}


            </div>
        </div>
    );
}

export default EmailList;