'use client'
import * as React from "react";
import {IconButton, ImageListItem, ImageListItemBar, Popover, Typography} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

const ContentGalleryWithIcon = ({...props}) => {

    let dataElMap = {};
    for(let i= 0; i < props.data.length; i++)
        dataElMap[`el_${i}`] = null;

    const [anchorEls, setAnchorEls] = React.useState(dataElMap);

    const handleClick = ({...props}) => {
        let temp = {}
        temp[props.index_str] = props.target
        setAnchorEls({...anchorEls, ...temp});
    };

    const handleClose = (index) => {
        let temp = {}
        temp[index] = null;
        setAnchorEls({...anchorEls, ...temp});
    };


    return props.data.map( (item, index) => {
        const index_str = `el_${index}`;
        const id = Boolean(anchorEls[index_str]) ? 'simple-popover' : undefined
        return(<ImageListItem
                key={item.img}
            >
            <Popover
                id={id}
                open={Boolean(anchorEls[index_str])}
                anchorEl={anchorEls[index_str]}
                onClose={() => handleClose(index_str)}
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
                sx={{color: 'white', background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(166,70,252,1) 100%)'}}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255,255,255,0.96)'}}
                        aria-label={'info here'}
                        onClick={ (event) => handleClick({index_str: index_str, target: event.currentTarget})}
                    >
                        <LinkIcon fontSize={'large'}/>
                    </IconButton>
                }
            />
        </ImageListItem>
        )
    })
}

export default ContentGalleryWithIcon;
