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
                className={props.style}
                />
        </ImageListItem>
    })

}


export default ContentGallery;
