import Box from '@mui/material/Box';
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card"
import {Button, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
// import Link from "next/link";
const GridContentIcon = (props) => {

    let key = -1
    const GridItems = props.data.map((element) =>{
        key+=1;
        return(
            <Grid key={`Grid_Item_${key}`} xs={12} md={6} lg={4} xl={3}>
                <Card sx={{maxWidth: 400, height: 'auto', backgroundColor: element.backgroundColor}}>
                    <CardMedia
                        component={"img"}
                        sx={{height: 350, width:400}}
                        image={element.img}
                        title={element.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {element.title}
                        </Typography>
                        <Typography variant='body2' color="text.secondary">
                            {element.photoDescription}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={element.linkToProject} target={'_blank'}>
                            <Button>Github Repo</Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
        )
    });

  return(
      <Box sx={{flexGrow: 1}}>
          <Grid container spacing={3}>
              {GridItems}
          </Grid>
      </Box>
  )
}


export default GridContentIcon;
