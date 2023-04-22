import { Router } from "express";
import PostRoutes from "./PostRoutes";
import UserRoutes from "./UserRoutes";

const router: Router = Router();
const url_prefix = "api/v1";

router.use(`${url_prefix}/user`, new UserRoutes().getRouter);
router.use(`${url_prefix}/post`, new PostRoutes().getRouter);

export default router;
