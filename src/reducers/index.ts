import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Tum Mile", duration: "4:45" },
    { title: "Insane", duration: "2:39" },
    { title: "Achutankeshavam", duration: "10:12" },
    { title: "Excuses", duration: "3:38" },
  ];
};

const selectedSongReducer = (
  selectedSong: string = "",
  action: { type: string; payload: string }
) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
