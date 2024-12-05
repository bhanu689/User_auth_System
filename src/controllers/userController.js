import { changePassword } from "./User/changepassword.js";
import { deleteUser } from "./User/deleteuser.js";
import { getOneuser } from "./User/getOneuser.js";
import { logoutUser } from "./User/logout.js";
import { updateUser } from "./User/updateuser.js";

const userController = {
  getOne: getOneuser,
  update : updateUser,
  delete : deleteUser,
  updatePassword : changePassword,
  logout : logoutUser
};

export { userController };
