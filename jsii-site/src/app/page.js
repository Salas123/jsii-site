import Image from 'next/image'
import styles from './page.module.css'
import Grid from '@mui/material/Unstable_Grid2';
import SectionDivider from "@/app/Components/SectionDivider";
import ProjectSection from "@/app/Components/Sections/ProjectSection";
import ContactMeSection from "@/app/Components/Sections/ContactMeSection";
import InterestsSection from "@/app/Components/Sections/InterestsSection";
import HeaderSection from "@/app/Components/Sections/HeaderSection";

export default function Home() {

  return (
    <main className={styles.main}>
        <HeaderSection/>
        <div className={styles.sectionDiv}>
            <Grid container spacing={1}>
                <Grid lg={7}>
                    <Image
                        src="/self-portrait.jpg"
                        height={500}
                        width={750}
                        alt={"pic of Jesus Salas"}
                        className={styles.img}
                    />
                </Grid>
                <Grid lg={5}>
                    <div className={styles.introTextContainer}>
                        <p className={styles.introTextGreeting}>A little about me...</p>
                        <p className={styles.introText}>
                            I am a proud UC Riverside graduate where I gained my B.S. in Computer Science.
                            I am currently exploring opportunities in Fullstack Software Engineering and in DevOps.
                            I also like to dabble in the multimedia field as I enjoy being an avid videographer/photographer.
                            I am always open to collaborating on anything, so please don't hesistate to reach out.
                        </p>
                        <p className={styles.introText}>All the best!</p>
                    </div>
                </Grid>
            </Grid>
        </div>
        <SectionDivider/>
        <ProjectSection/>
        <SectionDivider/>
        <InterestsSection/>
        <SectionDivider/>
        <ContactMeSection/>

    </main>
  )
}
