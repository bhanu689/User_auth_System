
import { User } from "../../models/user.model.js";
import { ApiResponse } from "../../utils/apiresponse.js";


const logoutUser = async (req, res) => {
    try {
      const id = req.user._id;
  
      if (!id) {
        return res
          .status(400)
          .send(new ApiResponse(400, null, "Required fields missing."));
      }
  
      const exists = await User.findById(id).select("_password ___v _deleted");
  
      if (!exists) {
        return res
          .status(404)
          .send(
            new ApiResponse(
              404,
              null,
              "User with the provided ID does not exist."
            )
          );
      }
  
      exists.refreshToken = " ";
      await exists.save();
  
      res.cookie("at", " ");
      res.cookie("rt", " ");
  
      res
        .status(200)
        .send(new ApiResponse(200, null, "User logged out successfully."));
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send(new ApiResponse(500, error, "Failed to get user details."));
    }
  };

  export {logoutUser}