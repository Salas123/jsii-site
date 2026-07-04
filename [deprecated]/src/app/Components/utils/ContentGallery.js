import { ImageListItem, ImageListItemBar} from "@mui/material";

const ContentGallery = ({...props}) => {

    return props.data.map( (item) => {
        return <ImageListItem key={item.img}>
            <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
            />
            <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.photoDescription}</span>}
                position='below'
                sx={{color: 'white', background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(166,70,252,1) 100%)'}}
                />
        </ImageListItem>
    })

}


export default ContentGallery;
