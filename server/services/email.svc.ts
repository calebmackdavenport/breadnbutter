<<<<<<< HEAD
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export function sendEmail(to: string, from: string, subject: string, message: string, fromName: string) {

    let mail = {
        to: [{name: "Stinson Lyon", email: "stinson.lyon@gmail.com"},
            {name: "Emily Dull", email: "emilysharp32@gmail.com"},
            {name: "Caleb Davenport", email:"xcmdprompt@gmail.com"},
            {name: "Anil Joshi", email:"anil.joc1@gmail.com"}
        ],
        from: { name: fromName, email: from } ,
        subject: subject,
        text: message,
        html: message
    }


    return sgMail.send(mail);
=======
import * as sendgrid from 'sendgrid';
const helper = sendgrid.mail;
const sg = sendgrid(process.env.SENDGRID_API_KEY || '');

export function sendEmail(to: string, from: string, subject: string, message: string) {
    let toEmail = new helper.Email(to);
    let fromEmail = new helper.Email(from);
    let emailContent = new helper.Content('text/html', message);

    let mail = new helper.Mail(fromEmail, subject, toEmail, emailContent);

    let request = sg.emptyRequest({
        method:'POST',
        path:'v3/mail/send',
        body: mail.toJSON()
    });

    return sg.API(request)
>>>>>>> 7d0316b7ff06e11d1720df7ec3036b7116bd6b0d
}
