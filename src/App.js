import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";

const DUMMY_USERS = [
  { id: "u1", name: "Jaime" },
  { id: "u2", name: "Jesús" },
  { id: "u3", name: "Julie" },
  { id: "u4", name: "Carlos" },
  { id: "u5", name: "Moto moto"},
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  };
  return (
    <UsersContext.Provider value={usersContext} >
      <UserFinder />
    </UsersContext.Provider>
      
    
  );
}

export default App;
