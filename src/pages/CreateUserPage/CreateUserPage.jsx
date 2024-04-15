import CreateUserForm from "../../components/CreateUser/CreateUserForm"

import "./CreateUserPage.css";

function CreateUser() {
    return (
    <div className="user-page">
        <div className="user-container">
        <h2>Sign up to Grassroots Goals</h2>
        </div>
        <div className="user-form">
        <CreateUserForm />
        </div>
    </div>
    )
}

export default CreateUser;