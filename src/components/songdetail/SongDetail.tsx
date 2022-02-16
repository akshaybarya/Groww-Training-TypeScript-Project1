import React from "react";
import { connect } from "react-redux";
import "./SongDetail.css";

type helper = { title: string; duration: string };

type Props = {
  song: string;
  songs: helper[];
};

const SongDetail = (props: Props) => {
  let data;
  (() => {
    data = props.song
      ? props.songs.filter((temp: helper) => temp.title === props.song)[0]
      : null;
  })();

  console.log(data);
  return (
    <div className="detail-container">
      <h3>SongDetail</h3>
      {data && (
        <div className="detail-item">
          <h5>Song Name : {data?.title}</h5>
          <h6>Duration : {data?.duration}</h6>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: { selectedSong: string; songs: helper[] }) => {
  return { song: state.selectedSong, songs: state.songs };
};

export default connect(mapStateToProps)(SongDetail);
