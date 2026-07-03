import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"search",
    initialState:{
        query: '',
        activeTab:'photos',
        results:[],
        bgImage:null,
        bgResults:[],
        loading:false,
        error: null,
    },
    reducers:{
        setQuery(state, action){
            state.query = action.payload    
        },
        setBgResults(state, action){
            state.bgResults = action.payload
        },
        setBgImage(state, action){
            state.bgImage = action.payload
        },
        setActiveTab(state, action){
            state.activeTab = action.payload
        },
        setLoading(state, action){
            state.loading = true
            state.error = null
        },
        setResults(state, action){
            state.results = [...state.results, ...action.payload]
            state.loading = false
        },
        setError(state, action){
            state.error = action.payload
            state.loading = false
        },
        setClearResults: (state) => {
            state.results = []
            state.bgResults = []
            state.bgImage = null
          },
        
    }
})
export const {setQuery, setActiveTab, setLoading, setResults, setError, setBgImage, setClearResults, setBgResults} = searchSlice.actions
export default searchSlice.reducer