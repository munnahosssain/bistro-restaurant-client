import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const LoggedUser = result.user;
        console.log(LoggedUser);

        const saveUser = {
          name: LoggedUser.displayName,
          email: LoggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              //   reset();
            }
            console.log(data);
          });
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(result => {
        const LoggedUser = result.user;
        console.log(LoggedUser);

        const saveUser = {
          name: LoggedUser.displayName,
          email: LoggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              //   reset();
            }
            console.log(data);
          });
        navigate(from, { replace: true });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="mx-auto container flex">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline"
        >
          <FcGoogle size={32} />
        </button>
        <button
          onClick={handleGithubSignIn}
          className="btn btn-circle btn-outline"
        >
          <BsGithub size={32} />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
