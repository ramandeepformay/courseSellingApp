import InputBox from "../InputBox"
import Heading from "../Heading"
import Button from "../Button"
import Footer from "../Footer"
const Signin =() =>{
    return <div className="h-screen bg-fuchsia-100 flex justify-center items-center bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
    <div className="boder border-black w-max px-16 py-4 shadow-lg text-lg rounded-md">
        <Heading label="Welcome Back" headerDescriptionLabel="Use your credentials to login!"/>
        <InputBox label="username" placeholder="Username"/>
        <InputBox label="password" placeholder="Password"/>
        <Button label="Sign in"/>
        <Footer label="Dont have an account?" footerLink="Sign up" to="/"/>
    </div>
    </div>
}

export default Signin