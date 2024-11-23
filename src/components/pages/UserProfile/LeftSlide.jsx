
import { Link, List, ListItem, styled, Box } from "@mui/material";

import { Link as routerLink } from "react-router-dom";
import logOut from "../auth/logout";
import { deleteAccount } from "../auth/userApi";
import { getUser } from "../auth/userActions";

const ListStyle = styled(List)(({ theme }) => ({
    "li": { backgroundColor: "blue" },
    "a": {
        fontWeight: "bold",

        padding: "6px 30px",

        color: "white",
        width: "100%",
        textDecoration: "none",
    }
}))

const ImageComponent = styled(Box)(({ theme }) => ({
    borderRadius: "100%",
    marginInline: "auto",
    height: "30%",
    width: "80%",
    backgroundColor: "red",
    "img": {
        borderRadius: "100%",
    }

}))
const Wrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {

        width: "80%!important",
        paddingInline: "10px",

    }
}))
export default function LeftSlide() {

    let email = getUser().email;
    return (
        <>
            <Wrapper className="px-2  pt-4 mx-auto" style={{ height: "100vh", }} >
                <ImageComponent className="">
                    <img src={`https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`} className="d-block w-100 h-100" alt="" />
                </ImageComponent>
                <Box className="mt-3">
                    <ListStyle className="d-flex gap-2" style={{ flexDirection: "column" }}>
                        <ListItem><i className="fa-regular text-white  fa-user"></i><Link to="/profile" component={routerLink} > My Profile </Link></ListItem>
                        <ListItem><i className="fa-solid fa-book text-white"></i><Link to="/myorders" component={routerLink} > My Orders </Link></ListItem>
                        <ListItem><i className="fa-solid text-white fa-right-from-bracket"></i><Link to="/mycards" component={routerLink} >My Cards</Link></ListItem>
                        <ListItem onClick={() => deleteAccount(email)}><i className="fa-solid text-white fa-right-from-bracket"></i><Link to="#" component={routerLink} onClick={() => deleteAccount(email)} >Delete Account</Link></ListItem>
                        <ListItem><i className="fa-solid text-white fa-comment"></i><Link to="#" onClick={() => logOut()} >Logout</Link></ListItem>
                    </ListStyle>
                </Box>
            </Wrapper>
        </>
    )
}