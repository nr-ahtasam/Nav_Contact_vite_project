import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import {
  CallButton,
  CallButtonWrapper,
  CallIcons,
  ContactFormAndImageFullWrapper,
  ContactFullWrapper,
  ContactHeadding,
  ContactHeaddingWrapper,
  ContactLeftSideWrapper,
  ContactMainWrapper,
  ContactMessageIcons,
  ContactRightSideWrapper,
  ContactSectonDescriptionWrapper,
  ContactSectonHeaddingWrapper,
  ContactUpperButtonsWrapper,
  CusromFormControl,
  CustomButton,
  CustomTextField,
  FromDataWrapper,
  MessageIcons,
  SubmitButtonWrapper,
  SupportButton,
  SupportButtonWrapper,
} from "./Style";

const Contact = () => {
  const [myData, setMyData] = useState(
    JSON.parse(localStorage.getItem("info"))
  );

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[2].value;
    const message = event.target[4].value;

    const formData = { name, email, message };
    let emptyArray = [];
    let parseData = JSON.parse(localStorage.getItem("info"));

    if (parseData) {
      parseData.push(formData);
      localStorage.setItem("info", JSON.stringify(parseData));
      setMyData(parseData);
    } else {
      emptyArray.push(formData);
      localStorage.setItem("info", JSON.stringify(emptyArray));
      setMyData(emptyArray);
    }

    event.target.reset();
  };

  return (
    <Container>
      <ContactFullWrapper>
        <ContactSectonHeaddingWrapper>CONTACT US</ContactSectonHeaddingWrapper>
        <ContactSectonDescriptionWrapper>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </ContactSectonDescriptionWrapper>
        <ContactFormAndImageFullWrapper>
          <ContactLeftSideWrapper>
            <ContactUpperButtonsWrapper>
              <SupportButtonWrapper>
                <SupportButton>
                  <MessageIcons icon={faMessage} />
                  VIA SUPPORT CHAT
                </SupportButton>
              </SupportButtonWrapper>
              <CallButtonWrapper>
                <CallButton>
                  <CallIcons icon={faPhone} />
                  VIA CALL
                </CallButton>
              </CallButtonWrapper>
            </ContactUpperButtonsWrapper>
            <ContactMainWrapper>
              <ContactHeaddingWrapper>
                <ContactMessageIcons icon={faMessage} />
                <ContactHeadding>VIA EMAIL FORM</ContactHeadding>
              </ContactHeaddingWrapper>

              <CusromFormControl
                component="form"
                onSubmit={handleFormSubmission}
              >
                <CustomTextField name="name" label="Name" focused />
                <CustomTextField name="email" label="E-Main" focused />
                <CustomTextField
                  name="message"
                  label="Message"
                  focused
                  multiline
                  rows={3}
                />
                <SubmitButtonWrapper>
                  <CustomButton type="submit">Submit</CustomButton>
                </SubmitButtonWrapper>
              </CusromFormControl>
            </ContactMainWrapper>
          </ContactLeftSideWrapper>
          <ContactRightSideWrapper>
            <img src="/Images/Service.svg" />
          </ContactRightSideWrapper>
        </ContactFormAndImageFullWrapper>
      </ContactFullWrapper>
      <FromDataWrapper>
        <TableContainer
          component={Paper}
          sx={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableCell align="center">{myData?.name}</TableCell>
              <TableCell align="center">{myData?.email}</TableCell>
              <TableCell align="center">{myData?.message}</TableCell> */}

              {myData?.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row?.email}</TableCell>
                  <TableCell align="center">{row?.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* <h1>{myData?.name}</h1>
        <h1>{myData?.email}</h1>
        <h1>{myData?.message}</h1> */}
      </FromDataWrapper>
    </Container>
  );
};

export default Contact;
