import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvidert";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data.name, data.photo, data.email, data.password);
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        userProfile(data.name, data.photo)
          .then(() => {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User SignUp successfully!",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:flex-row flex-col">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp here!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                {errors.name && <span>Name field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo && <span>Photo URL field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/i,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span>Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Password must 6 characters or grater</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span>
                    Use uppercase,lowercase,number & special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary bg-[#D1A054] border-none hover:bg-[#e9aa4b]"
                />
                <span className="text-[#D1A054] mt-1">
                  Already registered?
                  <Link to="/login" className="font-semibold">
                    Go to log in
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
