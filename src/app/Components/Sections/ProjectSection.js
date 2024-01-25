'use client'
import * as React from 'react';
// import {ImageList} from "@mui/material";
// import ContentGalleryWithIcon from "@/app/Components/utils/ContentGalleryWithIcon";
// import GetScreenSize from "@/app/Components/utils/GetScreenSize";
import {SweData} from "@/app/data/SweData";
import styles from "@/app/page.module.css";
import GridContentIcon from "@/app/Components/utils/GridContentIcon";

const ProjectSection = () =>{

    return (
        <div>
            <h1 className={styles.sectionHeaderText}>Projects</h1>
            <GridContentIcon data={SweData()}/>
            {/*<ImageList*/}
            {/*    sx={{width: '90%', height: 600}}*/}
            {/*    gap={GetScreenSize().width <= 768 ? 10 : 5}*/}
            {/*    cols={GetScreenSize().width <= 768? 2 : 4}*/}
            {/*>*/}
            {/*    <ContentGalleryWithIcon data={SweData()}/>*/}
            {/*</ImageList>*/}
        </div>
    );
}

export default ProjectSection;

