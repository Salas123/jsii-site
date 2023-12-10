'use client'
import styles from "@/app/page.module.css";
import Grid from "@mui/material/Unstable_Grid2";
import SocialIcons from "@/app/Components/SocialIcons";
import GetScreenSize from "@/app/Components/utils/GetScreenSize";

const HeaderSection = () => {

    return (
        <div style={{width: '100%'}}>
            <Grid container className={GetScreenSize().width <= 900 ? styles.headerMobileView : ''}>
                <Grid xs={12} sm={6} md={6} lg={10}><h1 className={styles.initialHeaderText}>JSII</h1></Grid>
                <Grid sm={6} md={6} lg={2}><SocialIcons/></Grid>
            </Grid>
        </div>
    )
}

export default HeaderSection;
