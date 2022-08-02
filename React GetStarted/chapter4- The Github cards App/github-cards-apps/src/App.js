import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import Form from "./components/Forms";
const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "@facebook",
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Humu",
  },
  {
    name: "Sebastian Markbåge",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
  },
];

class App extends React.Component {
  state = {
    profiles: testData,
  };
  addProfile = (profileData) => {
    console.log(profileData);
    this.setState((preState) => ({
      profiles: [...preState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="App">
        {console.log("nw profile", this.state.profiles)}
        <header className="App-header">
          {this.props.title}
          <Form onSubmit={this.addProfile} />
          <CardList profiles={this.state.profiles} />
        </header>
      </div>
    );
  }
}
// function App({ title }) {
//   return (
//     <div className="App">
//       <header className="App-header">{title}</header>
//     </div>
//   );
// }

export default App;
