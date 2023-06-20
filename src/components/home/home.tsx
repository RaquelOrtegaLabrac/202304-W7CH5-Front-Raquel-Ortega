import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <Link to={"/register"}>Sign up</Link>
      </div>
      <div>
        <Link to={"/login"}>Log in</Link>
      </div>
    </>
  );
}
