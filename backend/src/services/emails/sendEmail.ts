import { newAccountHTML } from "./html/newAccountHTML";

require('dotenv').config();

const sendGridMail = require('@sendgrid/mail');

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (link:string, email:string, temporaryPassword:string):Promise<any> => {
    const result = await sendGridMail.send(getMessage(link,email,temporaryPassword))
    console.log("email sent" , result )
    return result;
}

const getMessage = (link:string, email:string, temporaryPassword:string ) => {
    return {
      to: email,
      from: process.env.SENDGRID_SENDER,
      subject: "THE GUEST APP - invitation",
      html: newAccountHTML(link, email, temporaryPassword),
    };
  }

export default sendEmail;