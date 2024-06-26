import React from "react";

class AddUser extends React.Component {
    userAdd = {};
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            age: 1,
            isHappy: false 
        };
    };
    render() {
        return (
            <form ref={(element) => this.userForm = element}>
                <input  placeholder="First name:" onChange={(e) => this.setState({first_name: e.target.value})}/>
                <input  placeholder="Last name:" onChange={(e) => this.setState({last_name: e.target.value})}/>
                <textarea placeholder="Biografy" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
                <input  placeholder="Age:" onChange={(e) => this.setState({age: e.target.value})}/>
                <div style={{display: "flex", alignItems: "center"}}>
                    <label htmlFor="isHappy">Are you happy?</label>
                    <input  type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
                </div>
                <button onClick={() => { 
                    this.userForm.reset();
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user){
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd);
                }} type="button">Add</button>
            </form>
        )};
};

export default AddUser;