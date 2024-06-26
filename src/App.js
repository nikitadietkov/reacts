import React from "react";
import Header from "./components/header"
import Users from "./components/users";
import AddUser from "./components/addUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

class App extends React.Component {
    constructor(props) {

        axios.get(baseUrl).then((res)=> {
            this.setState({users: res.data.data})
        });

        super(props);
        this.state = {
            users: [

            ]
        };
        this.removeUser = this.removeUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    render() {
        return (
    <div>
        <Header title="List of users:"/>
        <div className="middle">
            <main>
                <Users  users={this.state.users} onDelete={this.removeUser} onEdit={this.editUser} />
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/>
            </aside>
        </div>
    </div>);
    };

    editUser(user) {
        let allUsers = this.state.users;
        allUsers[user.id - 1] = user;

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]});
        });
    }   

    removeUser(id){
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        });
    };
    
    addUser(user) {
        const id = this.state.users.length + 1;
        this.setState({users : [...this.state.users, {id, ...user}]});
    };
};

export default App;