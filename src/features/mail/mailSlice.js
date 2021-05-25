import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sendMessageOpen: false
};


export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        openSendMessage: (state) => {
            state.openSendMessage = true;
        },
        closeSendMessage: (state) => {
            state.openSendMessage = false;
        },
    },

});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageOpen = (state) => state.mail.sendMessageOpen;


export default mailSlice.reducer;
