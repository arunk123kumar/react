import Employee from "./Employee";
import "./App.css";

const empInfo = [
  {
    name: "Arun",
    Eid: "1",
    Pno: "123456789",
  },
  {
    name: "Raj",
    Eid: "2",
    Pno: "123456789",
  },
  {
    name: "Shabir",
    Eid: "3",
    Pno: "123456789",
  },
];
function App() {

  return (
    <div className="App">
      <header className="App-header">
        {console.log("re render")}
        {empInfo.map((e) => {
          console.log(e);
          return <Employee key={e.Eid} name={e.name} Eid={e.Eid} Pno={e.Pno} />;
        })}
      </header>
    </div>
  );
}

export default App;
