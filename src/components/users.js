import React from "react";
import User from "./user";

class Users extends React.Component {
    render() {
        if(this.props.users.length > 0)
            return (
                <div className="usersList">
                    {this.props.users.map((user) => (
                        <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={user.id} user={user}/>
                    ))}
                </div>) 
        else 
            return (
            <div className="empty">
                <h3>List is empty</h3>
            </div>)
        };
};

export default Users;