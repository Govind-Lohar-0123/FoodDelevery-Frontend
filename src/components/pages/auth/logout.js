import { clientUrl } from "../../partials/data";
import { removeCookies } from "./cookieAction";
import { removeToken } from "./tokenAction";
import { removeUser } from "./userActions";

export default function logOut() {
    removeUser();
    removeToken();
    window.localStorage.removeItem("email")
    
    window.location.href =clientUrl
}
