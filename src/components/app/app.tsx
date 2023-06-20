import { AppRoutes } from "../approutes/app.routes.js";
import { Header } from "../header/header.js";

export function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
    </>
  );
}
