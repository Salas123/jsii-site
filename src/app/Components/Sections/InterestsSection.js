'use client'
import styles from "@/app/page.module.css";
import {ImageList} from "@mui/material";
import ContentGallery from "@/app/Components/utils/ContentGallery";
import GetScreenSize from "@/app/Components/utils/GetScreenSize";

const InterestsSection = () => {
    const hobbyData = [
        {
            img:'/silhoutte.PNG',
            title: 'Location: California PCH',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/b-w-mountain.jpg',
            title: 'Location: California PCH',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/pink-roses.JPG',
            title: 'Location: Portland, Oregon',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/purple-roses.JPG',
            title: 'Location: Portland, Oregon',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/toledo-alley.jpg',
            title: 'Location: Spain, Toledo',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/statue.jpg',
            title: 'Location: Spain, Toledo',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/beer.JPG',
            title: 'Location: Bar in Spain',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/toledo-castle.JPG',
            title: 'Location: Spain, Toledo',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        },
        {
            img:'/triangle.jpg',
            title: 'Location: San Francisco',
            photoDescription: 'Shoot on a Sony Alpha 6000'
        }

    ]


  return(
      <div className={styles.sectionDiv}>
          <h1 className={styles.sectionHeaderText}>Interests</h1>
          <ImageList
              sx={{ width: '90%', height: 600 }}
              gap={GetScreenSize().width <= 768 ? 10: 5}
              cols={GetScreenSize().width <= 768 ? 1 : 3}
          >
              <ContentGallery data={hobbyData} style={styles.hobbyGallery}/>
          </ImageList>
      </div>
  )
}

export default InterestsSection;
