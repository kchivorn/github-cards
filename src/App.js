import React, { Component} from 'react';
import './App.css';
import CardList from './card/cardList';
import Form from './form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  fetchUsers = async () => {
    const resp = await fetch('/users.json');
    const users = await resp.json();
    this.setState({users});
  }

  componentDidMount() {
    this.fetchUsers();
  }

  addUser = (user) => {
    this.setState(prevState => ({
      users: [...prevState.users, user]
    }))
  }

  render() {
    return ( 
      <div className="container"> 
        <div className="header mt-5">{this.props.title}</div>
          <div className="m-3">
            <Form addUser={this.addUser} />
          </div>
          <CardList users={this.state.users}/>
      </div>
    );
  }
}
 
export default App;
