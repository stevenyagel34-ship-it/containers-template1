import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  route("/", "./home.tsx"),
  route("teams/:teamId", "./team.tsx"),
  //           route module ^^^^^^^^

  ...(await flatRoutes()),
] satisfies RouteConfig;
