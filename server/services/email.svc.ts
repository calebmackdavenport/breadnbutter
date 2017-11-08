const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export function sendEmail(to: string, from: string, subject: string, message: string, fromName: string) {

<<<<<<< HEAD
    let mail = {
        to: [{name: "Stinson Lyon", email: "stinson.lyon@gmail.com"},
            {name: "Emily Dull", email: "emilysharp32@gmail.com"},
            {name: "Caleb Dumbledort", email:"xcmdprompt@gmail.com"},
            {name: "Anil Joshi", email:"anil.joc1@gmail.com"}
        ],
        from: { name: fromName, email: from } ,
        subject: subject,
        text: message,
        html: message
    }


    return sgMail.send(mail);
}
=======
   let mail = {
       to: [{name: "Stinson Lyon", email: "stinson.lyon@gmail.com"},
           {name: "Emily Dull", email: "emilysharp32@gmail.com"},
           {name: "Caleb Dumbledort", email:"xcmdprompt@gmail.com"},
           {name: "Anil Joshi", email:"anil.joc1@gmail.com"}
       ],
       from: { name: fromName, email: from } ,
       subject: subject,
       text: message,
       html: message
   }


   return sgMail.send(mail);
}
>>>>>>> bcd74a947604148d425f2e40690cddea4b39624a
