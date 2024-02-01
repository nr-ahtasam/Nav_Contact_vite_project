import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, FormControl, TextField } from "@mui/material";

export const ContactFullWrapper = styled(Box)({});
export const ContactSectonHeaddingWrapper = styled(Box)({
  color: "#000000",
  fontSize: 48,
  fontWeight: 800,
  fontFamily: "Poppins",
  marginTop: 30,
});
export const ContactSectonDescriptionWrapper = styled(Box)({
  width: 800,
  color: "#5A5959",
  fontSize: 14,
  lineHeight: "20px",
  fontWeight: 500,
  fontFamily: "Poppins",
});
export const ContactFormAndImageFullWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});
export const ContactLeftSideWrapper = styled(Box)({
  width: "40%",
});
export const ContactUpperButtonsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: 20,
  marginTop: 80,
  marginBottom: 20,
  // width: "80%",
});
export const SupportButtonWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000000",
  borderRadius: 5,
  padding: 10,
  color: "red",
  // height: "fit-content",
  width: "50%",
  boxShadow: "3px 3px 10px #000000",
  transition: "transform .4s,backgroundColor .4s",
  "&:hover": {
    backgroundColor: "red",
    boxShadow: "3px 3px 10px #000000",
    transform: "translateY(-5px)",
  },
});
export const SupportButton = styled(Button)({
  color: "#ffffff",
  fontSize: 14,
});

export const MessageIcons = styled(FontAwesomeIcon)({
  // color: "#ffffff",
  alignItems: "center",
  paddingRight: 10,
  fontSize: 14,
});

export const CallButtonWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000000",
  borderRadius: 5,
  padding: 10,
  height: "fit-content",
  width: "50%",
  boxShadow: "3px 3px 10px #000000",
  transition: "transform .4s,backgroundColor .4s",
  "&:hover": {
    backgroundColor: "red",
    boxShadow: "3px 3px 10px #000000",
    transform: "translateY(-5px)",
  },
});
export const CallIcons = styled(FontAwesomeIcon)({
  color: "#ffffff",
  alignItems: "center",
  paddingRight: 10,
  fontSize: 16,
});

export const CallButton = styled(Button)({
  color: "#ffffff",
  fontSize: 14,
});
export const ContactMainWrapper = styled(Box)({});
export const ContactHeaddingWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 10,
  paddingBottom: 10,
  border: "1px solid #000000",
  borderRadius: 5,
  marginBottom: 20,
});
export const CusromFormControl = styled(FormControl)({
  width: "100%",
  display: "flex",
  // justifyContent: "center",
  alignItems: "center",
});
export const CustomTextField = styled(TextField)({
  width: "90%",
  marginBottom: 30,

  // marginLeft: 20,

  " & .MuiOutlinedInput-root": {
    fontSize: 20,
    "&.Mui-focused fieldset": {
      border: "1px solid #000000",
    },
  },

  "& label.Mui-focused": {
    color: "#000000",
    fontSize: 20,
    fontWeight: 600,
  },
});
export const SubmitButtonWrapper = styled(Box)({
  width: "90%",
  display: "flex",
  justifyContent: "end",
});
export const CustomButton = styled(Button)({
  width: "50%",
  backgroundColor: "#000000",
  color: "#ffffff",
  boxShadow: "3px 3px 10px #000000",
  transition: "transform .4s,backgroundColor .4s",
  "&:hover": {
    color: "#000000",
    backgroundColor: "red",
    boxShadow: "3px 3px 10px #000000",
    transform: "translateY(-5px)",
  },
});
export const ContactMessageIcons = styled(FontAwesomeIcon)({
  color: "#000000",
  alignItems: "center",
  paddingRight: 10,
  fontSize: 16,
});
export const ContactHeadding = styled(Box)({
  color: "#000000",
  fontSize: 20,
});
export const ContactRightSideWrapper = styled(Box)({
  width: "50%",
});
export const FromDataWrapper = styled(Box)({});
