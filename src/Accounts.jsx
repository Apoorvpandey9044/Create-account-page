
export const Accounts = () =>{
    return(
        
        <div className="form-group">
            <h2>Create Your Account</h2>
        <form className="account-form">
        <lable for="username">username</lable>
        <input type="username" placeholder="Apoorv Pandey" id="username" name="username"/>
        <lable for="email">email</lable>
        <input type="email" placeholder="youremail@gmail,.com" id="email" name="email"/>
        <lable for="password">password</lable>
        <input type="password" placeholder="**********" id="password" name="password"/>
        <lable for="confirmpassword">Confirm password</lable>
        <input type="confirmpassword" placeholder="**********" id="confirmpassword" name="confirmpassword"/>
        <button type="submit">Update Password</button>
    </form>
    <button className="link-btn">Already have an account go to Dashboard!</button>
    </div>
        
    )
}