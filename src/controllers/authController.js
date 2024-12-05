import { loginUser } from "./Auth/login.js";
import { registerUser } from "./Auth/register.js";

const authController = {
  login: loginUser,
  register: registerUser,
};

export { authController };
