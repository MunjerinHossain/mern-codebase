import express from "express";
import formCtrl from "../controllers/form.controller";

const router = express.Router();

router.route("/api/form").get(formCtrl.list)
.post(formCtrl.create);

router.route("/api/form/totalusers")
.get(formCtrl.readTotalUsers);

router.route("/api/form/singleuser")
.get(formCtrl.readLastDocument);

router.route("/api/form/:formId")
  .get(formCtrl.read)
  .put(formCtrl.update)
  .delete(formCtrl.remove);

router.param("formId", formCtrl.formByID);

export default router;
