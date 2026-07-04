'use client'
import {ImageList} from "@mui/material";
import styles from "@/app/page.module.css";
import ContentGallery from "@/app/Components/utils/ContentGallery";
import GetScreenSize from "@/app/Components/utils/GetScreenSize";
import {HobbyData} from "@/app/data/HobbyData";

const InterestsSection = () => {

  return(
      <div className={styles.sectionDiv}>
          <h1 className={styles.sectionHeaderText}>Interests</h1>
          <ImageList
              sx={{ width: '90%', height: 600 }}
              gap={GetScreenSize().width <= 768 ? 10: 5}
              cols={GetScreenSize().width <= 768 ? 1 : 3}
          >
              <ContentGallery data={HobbyData()}/>
          </ImageList>
      </div>
  )
}

export default InterestsSection;
