import { Router } from "express";
import PostRoutes from "./PostRoutes";
import UserRoutes from "./UserRoutes";
import CustomerRoutes from "./CustomerRoutes";

const router: Router = Router();
const url_prefix = "api/v1";

router.use(`${url_prefix}/user`, new UserRoutes().getRouter);
router.use(`${url_prefix}/post`, new PostRoutes().getRouter);
router.use(`${url_prefix}/customer`, new CustomerRoutes.getRouter);

export default router;
