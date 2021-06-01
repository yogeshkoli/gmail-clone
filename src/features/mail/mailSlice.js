import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sendMessageOpen: false
};


export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        selectMail: (state, action) => {
            state.selectedMail = action.payload;
        },
        openSendMessage: (state) => {
            state.sendMessageOpen = true;
        },
        closeSendMessage: (state) => {
            state.sendMessageOpen = false;
        },
    },

});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageOpen = (state) => state.mail.sendMessageOpen;


export default mailSlice.reducer;
