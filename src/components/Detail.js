import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(!location.state) {
      history.push('/');
    }
  }

  onclickHandler = (props) => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { location } = this.props;
    if(!location.state) {
      return null;
    } 
    return (
      <div className="movie__detail">
        <img alt={location.state.title} src={location.state.poster}/>
        <button className="back_button" onClick={this.onclickHandler}>
          <span>BACK</span>
        </button>
        <div>
          <h2> {location.state.title} </h2>
        </div>
        <div>
          <span> {location.state.summary} </span>
        </div>
      </div>
    );
  }
}

export default Detail;