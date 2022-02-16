import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions";
import "./SongList.css";

type helper = { title: string; duration: string };

type Props = {
  songs: helper[];
  selectSong: Function;
};

type State = {};

class SongList extends Component<Props, State> {
  state = {};

  renderList() {
    return this.props.songs.map(
      ({ title, duration }: helper, index: number) => {
        return (
          <div className="list-item-container" key={title}>
            <div className="list-item-title">
              <span>{title}</span>
              <button
                className="list-item-button"
                onClick={() => this.props.selectSong(title)}
              >
                Select
              </button>
            </div>
            {index !== this.props.songs.length - 1 && <hr />}
          </div>
        );
      }
    );
  }

  render() {
    // // this.props = {songs: state.songs}
    // console.log(this.props);

    return (
      <div className="song-list">
        <h3>SongList</h3>
        <div className="list-container">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: { songs: helper[] }) => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
