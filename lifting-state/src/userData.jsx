function User(props) {
  const name = "Arun";
  return (
    <div>
      <p>User Name is : </p>
      <button onClick={() => props.getData(name)}>Click Me</button>
    </div>
  );
}

export default User;
