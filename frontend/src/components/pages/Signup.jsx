import Button from "../Button";
import Heading from "../Heading";
import InputBox from "../InputBox";
import Footer from "../Footer";

const Signup = () => {
  return (
    <div className="h-screen bg-fuchsia-100 flex justify-center items-center bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300">
      <div className="boder border-black w-max px-16 py-4 shadow-lg text-lg rounded-md">
        <Heading label="Sign up" headerDescriptionLabel="Create your account" />
        <InputBox label="firstname" placeholder="First name" />
        <InputBox label="lastname" placeholder="Last name" />
        <InputBox label="username" placeholder="Username" />
        <InputBox label="password" placeholder="Password" />
        <Button label="Sign up" />
        <Footer label="Already have an account?" footerLink="Login" to="/signin" />
      </div>
    </div>
  );
};
export default Signup;
