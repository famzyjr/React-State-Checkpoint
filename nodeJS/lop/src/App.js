// import Header from "./Header";


// function App() {
//   return (
//     <div className="App">
       
      
//       <Header/>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://example.com/profile.jpg",
      profession: "Software Engineer"
    },
    show: false,
    timeInterval: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeInterval: this.state.timeInterval + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time since mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
