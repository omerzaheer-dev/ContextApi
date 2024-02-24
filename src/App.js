import UserContextProvider from "./Context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>hi its me umar software developer</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
