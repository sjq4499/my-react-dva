import Home from "@/containers/Home";
import My from "@/containers/My";

export default [{
    path: "/home",
    component: Home
}, {
    path: "/my",
    component: My
}, {
    path: "/",
    redirect: "/my"
}]