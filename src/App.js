import React from "react";

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading : false, movies: [1,2,3,4,5,6] })
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? 'Loading....' : this.state.movies.map(item => <div>Movie{item}</div>)}
      </div>
    );
  }
}

export default App;
