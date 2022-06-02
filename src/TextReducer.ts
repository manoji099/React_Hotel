import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IData {
    name: string;
}


const TextReducer = createSlice({
    name: "TextReducer",
    initialState: { name: '' } as IData,
    reducers: {
        write(state: IData, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        hello(state: IData, action: PayloadAction<string>) {
            state.name = "hello " + action.payload;
        }
    }
});

export const { write, hello } = TextReducer.actions;

export default TextReducer.reducer;