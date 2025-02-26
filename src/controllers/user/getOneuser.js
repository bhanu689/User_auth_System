
import { User } from "../../models/user.model.js";
import { ApiResponse } from "../../utils/apiresponse.js";

const getOneuser = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res
          .status(400)
          .send(new ApiResponse(400, null, "Required fields missing."));
      }
  
      const exists = await User.findById(id);
  
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
  
      if (exists.deleted) {
        return res
          .status(400)
          .send(
            new ApiResponse(
              400,
              null,
              "Account with the provided details seems to be deleted."
            )
          );
      }
  
      const filteredUser = {
        _id: exists._id,
      name: exists.name,
        email: exists.email,
      
      };
  
      res
        .status(200)
        .send(
          new ApiResponse(200, filteredUser, "User details fetched successfully.")
        );
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send(new ApiResponse(500, error, "Failed to fetch user details."));
    }
  };

  export {getOneuser}