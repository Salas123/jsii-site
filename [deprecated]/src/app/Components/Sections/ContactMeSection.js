'use client'
import styles from "@/app/page.module.css";
import {alpha, Box, Button, createTheme, getContrastRatio, Stack, TextField, ThemeProvider} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SendIcon from '@mui/icons-material/Send';
import ClearIcon from '@mui/icons-material/Clear';
import SlackMessageFormat from "@/app/Components/utils/SlackMessageFormat";
import {useState} from "react";

const ContactMeSection = () => {


    const violetBase = '#0a0ef6';
    const violetMain = alpha(violetBase, 0.7);
    const theme= createTheme({
        palette:{
            primary:{
                main: violetMain,
                light: alpha(violetBase, 0.5),
                dark: alpha(violetBase, 0.9),
                contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
            }
        }
    })

    const [emailForm, setEmailForm] = useState({
        firstNameInput: '',
        lastNameInput: '',
        subjectInput: '',
        emailInput: '',
        messageInput: ''
    })

    const [formState, setFormState] = useState(true);

    const sendMessage = async () =>{

            if(!emailForm.firstNameInput || !emailForm.lastNameInput || !emailForm.subjectInput || !emailForm.emailInput || !emailForm.messageInput)
            {
                alert('All form fields must be filled...');
                return;
            }

            const slackMessage =  SlackMessageFormat.returnMessageObj({
                fullName: `${emailForm.firstNameInput} ${emailForm.lastNameInput}`,
                subject: emailForm.subjectInput,
                email: emailForm.emailInput,
                message: emailForm.messageInput
            })


            console.log(slackMessage)

            const slackResponse = await fetch(process.env.NEXT_PUBLIC_SLACK_WEBHOOK,{
                method: "POST",
                body: JSON.stringify(slackMessage)
            });

            console.log(`Response from Slack webhook: ${slackResponse.status} -- ${slackResponse.ok ? 'Ok' : slackResponse.statusText}`);

            setFormState(!formState)
    }


  return(
      <div className={styles.sectionDiv}>
          <h1 className={styles.sectionHeaderText}>Contact Me</h1>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: 20}}>
              <p>Send me a message to my Slack</p>
              <svg
                  style={{alignSelf: "center"}}
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="14"
                  viewBox="0 0 448 512">
                  {/**
                   Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
                   */}
                  <path d="M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1c0-25.9 21.2-47.1 47.1-47.1h47.1v47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1s47.1 21.2 47.1 47.1v117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1V315.1zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32s47.1 21.2 47.1 47.1v47.1H164.9zm0 23.7c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1H47.1C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1H164.9zm189 47.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1h-47.1V196.9zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1V79.1c0-25.9 21.2-47.1 47.1-47.1 25.9 0 47.1 21.2 47.1 47.1V196.9zM283.1 385.9c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1-25.9 0-47.1-21.2-47.1-47.1v-47.1h47.1zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1 0-25.9 21.2-47.1 47.1-47.1h117.8c25.9 0 47.1 21.2 47.1 47.1 0 25.9-21.2 47.1-47.1 47.1H283.1z"/>
              </svg>
          </div>
          {formState ?
              <ThemeProvider theme={theme}>
              <Box sx={{flexGrow: 1, marginBottom: 2}}>
                  <Grid
                      container spacing={3}
                      sx={{justifyContent: 'center'}}
                  >
                      <Grid lg={6}>
                          <TextField
                              id={"firstNameInput"}
                              label={"First Name"}
                              variant={"outlined"}
                              sx={{width: 280}}
                              value={emailForm.firstNameInput}
                              onChange={(event) => setEmailForm({...emailForm, firstNameInput: event.target.value})}
                          />
                      </Grid>
                      <Grid lg={6}>
                          <TextField
                              id={"lastNameInput"}
                              label={"Last Name"}
                              variant={"outlined"}
                              sx={{width: 280}}
                              value={emailForm.lastNameInput}
                              onChange={(event) => setEmailForm({...emailForm, lastNameInput: event.target.value})}
                          />
                      </Grid>
                  </Grid>
              </Box>
              <Box sx={{flexGrow: 1, marginTop: 2, marginBottom: 2}}>
                  <Grid
                      container
                      sx={{justifyContent: 'center'}}
                  >
                      <Grid lg={12}>
                          <TextField
                              id={"emailInput"}
                              label={"Email"}
                              variant={"outlined"}
                              sx={{width: 580}}
                              value={emailForm.emailInput}
                              onChange={(event) => setEmailForm({...emailForm, emailInput: event.target.value})}
                          />
                      </Grid>
                  </Grid>
              </Box>
              <Box sx={{flexGrow: 1, marginTop: 2, marginBottom: 2}}>
                  <Grid
                      container
                      sx={{justifyContent: 'center'}}
                  >
                      <Grid lg={12}>
                          <TextField
                              id={"subjectInput"}
                              label={"Subject"}
                              variant={"outlined"}
                              sx={{width: 580}}
                              value={emailForm.subjectInput}
                              onChange={(event) => setEmailForm({...emailForm, subjectInput: event.target.value})}
                          />
                      </Grid>
                  </Grid>
              </Box>
              <Box sx={{flexGrow: 1, marginTop: 2, marginBottom: 2}}>
                  <Grid
                      container>
                      <Grid lg={12}>
                          <TextField
                              id="messageInput"
                              label={"Message"}
                              variant={"outlined"}
                              multiline
                              rows={4}
                              sx={{width: 580}}
                              value={emailForm.messageInput}
                              onChange={(event) => setEmailForm({...emailForm, messageInput: event.target.value})}
                          />
                      </Grid>
                  </Grid>
              </Box>
              <Stack direction={"row"} spacing={2}>
                  <Button variant={'outlined'} color={'primary'} endIcon={<SendIcon/>} onClick={async () => await sendMessage()}>
                      Send
                  </Button>
                  <Button variant={'outlined'} color={'primary'} endIcon={<ClearIcon/>}  onClick={() => setEmailForm({
                      firstNameInput: '',
                      lastNameInput: '',
                      subjectInput: '',
                      emailInput: '',
                      messageInput: ''
                  })}>
                      Clear
                  </Button>
              </Stack>
          </ThemeProvider>
              :
              <div>
                  <p>
                      Message has been sent!
                  </p>
              </div>
          }


      </div>
  )
}

export default ContactMeSection;
