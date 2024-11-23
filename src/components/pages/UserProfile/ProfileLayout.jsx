
import { Outlet } from "react-router-dom";
import { Grid, Box } from "@mui/material"
import LeftSlide from "./LeftSlide"
import ChangePassword from "../auth/ChangePassword"


export default function ProfileLayout() {



    return (

        <><Box >

            <Grid container lg={12} className="gap-1 " style={{ marginTop: "5.5rem" }}>
                <Grid item lg={2.3} md={3} sm={4.5} xs={12} style={{ backgroundColor: "#f6f6f7" }}>
                    <LeftSlide />
                </Grid>
                <Grid item lg={9.5} md={8.7} sm={7.3} xs={12} className="mx-auto" style={{ backgroundColor: "#f6f6f7" }}>
                    <Outlet />
                   
                </Grid>
            </Grid>

        </Box>
        </>
    )
}