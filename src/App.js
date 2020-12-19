import './App.css';
import React from 'react';
import UsersList from './components/UsersList';

const allUsers = ["Michał", "Ania", "Kasia", "Tomek", "Jacek", "Marta"];

class App extends React.Component {
  constructor(){
    super();

    this.state = { filteredUsers: allUsers };
  }

  filterUsers(event){
    const text = event.target.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({filteredUsers});
  }

  getFilteredUsersForText(text){
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
  }

  render() {
    return(
      <div className="App">
        <main>
          <input onInput={this.filterUsers.bind(this)}/>
          <UsersList users={this.state.filteredUsers}/>
        </main>
    </div>
    )
  };
}

export default App;
