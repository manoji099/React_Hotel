import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPerson {

    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

const UsersReducer = createSlice({

    name: "UsersReducer",
    initialState: [] as IPerson[],
    reducers: {
        write(_state: IPerson[], action: PayloadAction<IPerson[]>) {
            return action.payload;

        }
    }

});

export const { write } = UsersReducer.actions;

export default UsersReducer.reducer;