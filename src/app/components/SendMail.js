import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './SendMail.scss';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';


function SendMail() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="To"
                    type="text"
                    {...register('to', { required: true })}
                />

                {errors.to && <p className="sendMail__error">To field is required.</p>}

                <input
                    placeholder="Subject"
                    type="text"
                    {...register('subject', { required: true })}
                />

                {errors.subject && <p className="sendMail__error">Subject field is required.</p>}

                <input
                    {...register('message', { required: true })}
                    className="sendMail__message"
                    placeholder="Type your message here.."
                    type="text"
                />

                {errors.message && <p className="sendMail__error">Message field is required.</p>}

                <div className="sendMail__options">
                    <Button type="submit" variant="contained" color="primary" className="sendMail__send__button">Send</Button>
                </div>

            </form>
        </div>
    );
}

export default SendMail;