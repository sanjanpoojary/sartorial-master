import "./register.css";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  LockPerson as LockPersonIcon,
} from "@mui/icons-material";
import { useForm } from "react-hook-form";
import authAgent from "../../app/api/authAgent";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registerform = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onTouched" });

  function handleAuthErrors(errors: any) {
    if (errors) {
      errors.foreach((error: string) => {
        if (error.includes("Password")) {
          setError("Password", { message: error });
        } else if (error.includes("Email")) {
          setError("Email", { message: error });
        } else if (error.includes("Username")) {
          setError("Username", { message: error });
        }
      });
    }
  }

  // const onSubmit = (data: any) => {
  //     console.log(data); // register logic here
  //     alert("Registration Successfull");
  // };

  return (
    <div className="reg-container">
      <div className="reg-wrapper">
        <form
          style={{ marginTop: 1 }}
          onSubmit={handleSubmit((data) =>
            authAgent.Account.register(data)
              .then(() => {
                toast.success("Registration successful, please login");
                navigate("/login");
              })
              .catch((errors) => handleAuthErrors(errors))
          )}
          noValidate
        >
          <h1> Register </h1>
          <div className="reg-input-box">
            <input
              type="text"
              placeholder="Username"
              {...register("username", {
                required: "Username is Required",
              })}
            />
            <PersonIcon className="icon" />
            <span role="alert" className="reg-msg">
              {errors.username && <p>{!!errors.username?.message}</p>}
            </span>
          </div>
          <div className="reg-input-box">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            <EmailIcon className="icon" />
            <span role="alert" className="reg-msg">
              {errors.email && <p>{!!errors.email?.message}</p>}
            </span>
          </div>
          <div className="reg-input-box">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 to 8 characters",
                },
                maxLength: {
                  value: 8,
                  message: "Password cannot exceed 8 characters",
                },
              })}
            />
            <LockIcon className="icon" />
            <span role="alert" className="reg-msg">
              {errors.password && <p>{!!errors.password?.message}</p>}
            </span>
          </div>
          <div className="reg-input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === getValues("password") || "Password do not match",
              })}
            />
            <LockPersonIcon className="icon" />
            <span role="alert" className="reg-msg">
              {errors.confirmPassword && (
                <p>{!!errors.confirmPassword?.message}</p>
              )}
            </span>
          </div>

          <button type="submit"> Register </button>

          <div className="register-link">
            <p>
              {" "}
              Already have a account ? <a href="/login"> Login </a>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerform;
