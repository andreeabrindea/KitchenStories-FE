import { isLoggedIn } from "@/app/middleware/authentication";
import NavBar from "./NavBar";

export default async function NavBarWrapper() {
  const isUserLoggedIn = await isLoggedIn();
  return <NavBar isUserLogged={isUserLoggedIn} />;
}