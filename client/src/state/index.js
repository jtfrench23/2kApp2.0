import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice(
    {
        name:"auth",
        initialState,
        reducers: {
            setMode: (state) => {
                state.mode = state.mode ==="light" ? "dark" : "light";
            },
            setLogin: (state, action) =>{
                state.user = action.payload.user;
                state.token = action.payload.token;
            },
            setLogout: (state) => {
                state.user = null;
                state.token = null;
            },
            setGames: (state, action) => {
                state.games = action.payload.games;
            },
            setBuilds: (state, action) => {
                state.builds = action.payload.builds;
            },
            setBuild: (state, action) => {
                state.buildName = action.payload.buildName;
                state.buildNickname = action.payload.buildNickname;
                state.position = action.payload.position;
            }
        }
    }
)

export const {setMode, setLogin, setLogout, setGames, setBuilds, setBuild} = authSlice.actions;
export default authSlice.reducer;