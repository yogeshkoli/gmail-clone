import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './SendMail.scss';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';


function SendMail() {

    const { register, handleSubmit, watch, errors } = useForm();

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>
            <form>

                <input
                    name="to"
                    placeholder="To"
                    type="text" />

                <input
                    name="subject"
                    placeholder="Subject"
                    type="text" />

                <input
                    name="message"
                    className="sendMail__message"
                    placeholder="Type your message here.."
                    type="text" />

                <div className="sendMail__options">
                    <Button type="submit" variant="contained" color="primary" className="sendMail__send__button">Send</Button>
                </div>

            </form>
        </div>
    );
}

export default SendMail;