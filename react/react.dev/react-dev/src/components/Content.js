import LoginForm from "./LoginForm.js";
import AdminPanel from "./AdminPanel.js";

const Content = ()=>{
    let content;
    let isLoggedIn = true;
    if(isLoggedIn){
        content = <AdminPanel />
    }else {
        content = <LoginForm />
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Content;