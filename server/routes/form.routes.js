import express from "express";
import userCtrl from "../controllers/user.controller";
import formCtrl from "../controllers/form.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router.route("/api/form").get(formCtrl.list)
.post(formCtrl.create);

router.route("/api/form/totalusers")
.get(formCtrl.readTotalUsers);

router.route("/api/form/singleuser")
.get(formCtrl.readLastDocument);
// router.route('/api/users/photo/:userId')
//   .get(userCtrl.photo, userCtrl.defaultPhoto)
// router.route('/api/users/defaultphoto')
//   .get(userCtrl.defaultPhoto)

// router.route('/api/users/follow')
//     .put(authCtrl.requireSignin, userCtrl.addFollowing, userCtrl.addFollower)
// router.route('/api/users/unfollow')
//     .put(authCtrl.requireSignin, userCtrl.removeFollowing, userCtrl.removeFollower)

// router.route('/api/users/findpeople/:userId')
//    .get(authCtrl.requireSignin, userCtrl.findPeople)

router.route("/api/form/:formId")
  .get(formCtrl.read)
  .put(formCtrl.update)
  .delete(formCtrl.remove);

router.param("formId", formCtrl.formByID);

export default router;
