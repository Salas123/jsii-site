'use client'
import * as React from 'react';
import styles from "@/app/page.module.css";
import {ImageList} from "@mui/material";
import ContentGalleryWithIcon from "@/app/Components/utils/ContentGalleryWithIcon";
import GetScreenSize from "@/app/Components/utils/GetScreenSize";

const ProjectSection = () =>{

    const sweData = [
        {
            img: '/ai-auto-release.png',
            title: 'AI Automated Release',
            photoDescription: 'DevOps Tool - OpenAI Powered Software Release Automation',
            linkToProject: 'https://github.com/Salas123/ai_automated_release',
            backgroundColor: "#ade3b1"
        },
        {
            img:'/fantasy-app-img.png',
            title: 'Fantasy Helper App',
            photoDescription: 'React Native App - Football Fantasy Helper',
            linkToProject: 'https://github.com/Salas123/ai_automated_release',
            backgroundColor: "#e7e59e"
        },
        {
            img: '/scheduler-display-1@0.5x.png',
            title: 'Medical Scheduler',
            photoDescription: 'Java Full Stack App - Optimizing Scheduling for Med Students on Rotations',
            linkToProject: 'https://github.com/Salas123/Medical-Scheduler',
            backgroundColor: "#2a2727"
        }
    ]


    return (
        <div className={styles.sectionDiv}>
            <h1 className={styles.sectionHeaderText}>Projects</h1>
            <ImageList
                sx={{width: '85%', height: 600, padding: 5}}
                gap={GetScreenSize().width <= 768 ? 10 : 5}
                cols={GetScreenSize().width <= 1080 ? 1 : 2}
            >
                <ContentGalleryWithIcon data={sweData} style={styles.hobbyGallery}/>
            </ImageList>
        </div>
    );
}

export default ProjectSection;

/**
 * TODO: Sections styles have to remove width:100% and header text remove alignment
 * */
