import express from "express"

const router = express.Router();

import { signin, signup } from "../controller/hospital";

router.post("/signin", signin);
router.post("signup", signup);

export default router;