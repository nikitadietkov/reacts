import React from "react";
import AddUser from "./addUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editForm: false
        };
    }
    user = this.props.user;
    render() {
        return (
            <div className="cardOfUsers">
                <div>
                    <img src={this.user.avatar} width="50%" />
                    <h3>{this.user.first_name} {this.user.last_name}</h3>
                    <p>{this.user.bio}</p>
                    <b>{this.user.isHappy === true ? "Happy :)" : "Not happy :("}</b>

                    {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
                </div>
                <div className="fatherRedactIcons">
                    <IoCloseCircleSharp onClick={()=>this.props.onDelete(this.user.id)} className="delete redactIcons"/>
                    <IoHammerSharp onClick={() => this.setState({editForm: !this.state.editForm})} className="editIcon redactIcons"/>
                </div>
            </div>
        );
    };
};

export default User;