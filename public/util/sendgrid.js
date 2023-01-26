import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export async function sendEmail(customerInfo) {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: process.env.SMTP_USER,
            },
          ],
          subject: `Traibo - new client: ${customerInfo.name}`,
        },
      ],
      from: {
        email: process.env.SMTP_USER,
        name: "Traibo",
      },
      content: [
        {
          type: "text/html",
          value: ` <p>  <b> Subject:  </b>     ${customerInfo.subject}  </p>
                   <p>  <b> Email:    </b>     ${customerInfo.email}    </p>
                   <p>  <b> Phone:    </b>     ${customerInfo.phone}    </p>
                `,
        },
      ],
    }),
  });
}
