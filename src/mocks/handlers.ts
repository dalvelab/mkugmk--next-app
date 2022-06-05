import { pagesHandlers } from "./pages";
import { pathsHandlers } from "./paths";

export const handlers = [...pagesHandlers, ...pathsHandlers];
