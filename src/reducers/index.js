import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "This is us", duration: "4:05" },
    { title: "Fall", duration: "4:22" },
    { title: "Sorry", duration: "3:55" },
    { title: "THE SCOTTS", duration: "2:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
