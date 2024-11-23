import { Box, TextField, Button, styled, Link } from "@mui/material"

import { profileContext } from "./ProfileLayout";
import { getUser } from "../auth/userActions";
import {Link as routerLink} from "react-router-dom"

const FormStyle = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        width: "100%!important",
        marginInline: "auto",
        paddingInline: "10px",
        "button": {
            width: "80%!important"
        }
    }
}))
export default function MyProfile() {
    // let { setOpenChangePass } = useContext(context);

    let { name, email } = getUser();
    return (

        <>
            <Box className=" w-100 h-100 d-flex " >


                <FormStyle className="d-flex gap-4  w-50 gap-2 p-4 " style={{ flexDirection: "column" }}>

                    <TextField
                        id="outlined-textarea"
                        label="Name"
                        defaultValue={name}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email"
                        defaultValue={email}
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                        multiline
                    />



                    <Box className=" gap-3">
                        {/* <Button className="d-block w-25 mx-auto mt-2" variant="contained">Update</Button> */}
                        <Link to="/change-password" component={routerLink}><Button className="d-block w-50 text-bold mx-auto mt-2" variant="contained">Change Password</Button></Link>
                    </Box>
                </FormStyle>
            </Box>
        </>
    )
}



