'use client'
import * as React from "react";
import {IconButton, ImageListItem, ImageListItemBar, Popover, Typography} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";
import styles from "@/app/page.module.css";

const ContentGalleryWithIcon = ({...props}) => {
    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log('pressed!')
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return props.data.map( (item) => {
        return <ImageListItem key={item.img}>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2 }}>
                    <Link href={item.linkToProject}>Link</Link> to Project
                </Typography>
            </Popover>
            <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{backgroundColor: item.backgroundColor}}
            />
            <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.photoDescription}</span>}
                position='below'
                className={styles.hobbyGallery}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255,255,255,0.96)'}}
                        aria-label={'info here'}
                        onClick={ (event) => handleClick(event)}
                    >
                        <LinkIcon fontSize={'large'}/>
                    </IconButton>
                }
            />
        </ImageListItem>
    })
}

export default ContentGalleryWithIcon;
