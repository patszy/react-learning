import './App.css';
import React from 'react';
import UsersList from './components/UsersList';

const allUsers = ["Michał", "Ania", "Kasia", "Tomek", "Jacek", "Marta"];

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      filteredUsers: allUsers,
      selectedUser: null
    };
  }

  filterUsers = event  => {
    const text = event.target.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({filteredUsers});
  }

  getFilteredUsersForText = text => {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
  }

  onUserSelected = selectedUser => {
    this.setState({selectedUser});
  }

  render() {
    return(
      <div className="App">
        <main>
          <div>{this.state.selectedUser}</div>
          <input onInput={this.filterUsers}/>
          <UsersList users={this.state.filteredUsers} userSelected={this.onUserSelected}/>
        </main>
    </div>
    )
  };
}

export default App;
