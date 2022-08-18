import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const retrivePodcast=createAsyncThunk(
    "tutorials/retrieve",
    async () => {
      const res = await PodcastDataService.getAll();
      return res.data;
    }
  );

  export const findPocastById = createAsyncThunk(
    "tutorials/findByTitle",
    async ({ podcast }) => {
      const res = await PodcastDataService.findByTitle(podcas);
      return res.data;
    }
  );

export const podcastSlice = createSlice({       
    name: 'podcast',
    initialState: {
        podcasts: [],
        loading: false,
    },
    extraReducers:{
        [retrivePodcast.fulfilled]:(state,action)=>{
             return[...state.podcasts,action.payload]            
        },
        [findPocastById.fulfilled]:(state,action)=>{
            return[...action.payload]            
        }
    }
}
);

export const {reducer} = podcastSlice;
export default reducer;