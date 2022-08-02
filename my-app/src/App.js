import logo from "./logo.svg";
import "./App.css";
import Comment from "./Components/Comment";

function App() {
  // function Welcome(props) {
  //   return props.name + props.lname;
  // }
  // let auther = {
  //   nam: "Arun",
  //   lname: "Kumar",
  // };
  // return <Welcome name={auther.nam} lname={auther.lname} />;

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  };
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
}

export default App;
