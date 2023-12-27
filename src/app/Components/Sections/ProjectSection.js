'use client'
import * as React from 'react';
import {ImageList} from "@mui/material";
import ContentGalleryWithIcon from "@/app/Components/utils/ContentGalleryWithIcon";
import GetScreenSize from "@/app/Components/utils/GetScreenSize";
import styles from "@/app/page.module.css";

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
            linkToProject: 'https://github.com/Salas123/fantasy-helper-app',
            backgroundColor: "#e7e59e"
        },
        {
            img: '/medical-scheduler.png',
            title: 'Medical Scheduler',
            photoDescription: 'Java Full Stack App - Optimizing Scheduling for Med Students on Rotations',
            linkToProject: 'https://github.com/Salas123/Medical-Scheduler',
            backgroundColor: "#464645"
        },
        {
            img: '/camera_tripod.png',
            title: 'Smart Tripod',
            photoDescription: 'Embedded System - Smart Camera Controlled via Bluetooth on an Android Device',
            linkToProject: 'https://github.com/Salas123/CS179J-Team10/tree/Salas123-patch-1',
            backgroundColor: '#e9eff6'
        }
    ]

    /**
     *  TODO: Try same content gallery that interests has
     * */


    return (
        <div className={styles.sectionDiv}>
            <h1 className={styles.sectionHeaderText}>Projects</h1>
            <ImageList
                sx={{width: '90%', height: 600}}
                gap={GetScreenSize().width <= 768 ? 10 : 5}
                cols={GetScreenSize().width <= 1080 ? 1 : 2}
            >
                <ContentGalleryWithIcon data={sweData}/>
            </ImageList>
        </div>
    );
}

export default ProjectSection;

