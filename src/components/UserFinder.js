import { Fragment, useState, useEffect, useContext } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";


const UserFinder = () => {
  const ctxUsers = useContext(UsersContext);
  const [filteredUsers, setFilteredUsers] = useState(ctxUsers.users);
  const [searchTerm, setSearchTerm] = useState('');

  

  useEffect(() => {
    setFilteredUsers(
      ctxUsers.users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;
