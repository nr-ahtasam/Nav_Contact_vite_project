import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mui/material";
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
  MessageIcons,
  SubmitButtonWrapper,
  SupportButton,
  SupportButtonWrapper,
} from "./Style";

const Contact = () => {
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
              <CusromFormControl>
                <CustomTextField label="Name" focused />
                <CustomTextField label="E-Main" focused />
                <CustomTextField label="Message" focused multiline rows={3} />
                <SubmitButtonWrapper>
                  <CustomButton>Submit</CustomButton>
                </SubmitButtonWrapper>
              </CusromFormControl>
            </ContactMainWrapper>
          </ContactLeftSideWrapper>
          <ContactRightSideWrapper>
            <img src="/Images/Service.svg" />
          </ContactRightSideWrapper>
        </ContactFormAndImageFullWrapper>
      </ContactFullWrapper>
    </Container>
  );
};

export default Contact;
