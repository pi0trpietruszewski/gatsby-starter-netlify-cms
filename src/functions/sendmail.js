const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env
const sgMail = require("@sendgrid/mail")

exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body)
  const { email, phone } = payload

  sgMail.setApiKey(SENDGRID_API_KEY)

  const msg = {
    to: "patrycja@beautyagency.pl",
    from: "patrycja@beautyagency.pl",
    reply_to: email,
    subject: "Nowa wiadomośćod " + email,
    html: buildMessage(email, phone),
  }
  try {
    await sgMail.send(msg)
  } catch (e) {
    return {
      success: false,
      statusCode: e.code,
    }
  }

  return {
    statusCode: 200,
    success: true,
  }
}

// const sgMail = require("@sendgrid/mail")
//
//.
// exports.handler = async (event, context, callback) => {
//   const payload = JSON.parse(event.body)
//   const { email, phone } = payload
//
//   sgMail.setApiKey(SENDGRID_API_KEY)
//
//   // const body = Object.keys(payload)
//   //   .map(k => {
//   //     return `${k}: ${payload[k]}`
//   //   })
//   //   .join("<br><br>")
//   const msg = {
//     to: "p.pietruszewski0@gmail.com",
//     from: "test@example.com",
//     subject: "Sending with Twilio SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   }
//   // sgMail.send(msg);
//   //   const msg = {
//   //     to: SENDGRID_TO_EMAIL,
//   //     from: email,
//   //     subject: "Wiadomosc od " + email,
//   //     html: ,
//   //   }
//
//   try {
//     await sgMail.send(msg)
//
//     return {
//       statusCode: 200,
//       body: "Message sent",
//     }
//   } catch (e) {
//     return {
//       elo: "elo",
//       statusCode: e.code,
//       body: e.message,
//     }
//   }
// }

const buildMessage = (email, phone) => {
  return `<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0;">
      <meta name="format-detection" content="telephone=no"/>

      <!-- Responsive Mobile-First Email Template by Konstantin Savchenko, 2015.
      https://github.com/konsav/email-templates/  -->

      <style>
          /* Reset styles */
          body { margin: 0; padding: 0; min-width: 100%; width: 100% !important; height: 100% !important;}
          body, table, td, div, p, a { -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; border-spacing: 0; }
          img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
          #outlook a { padding: 0; }
          .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; }
          .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }

          /* Rounded corners for advanced mail clients only */
          @media all and (min-width: 560px) {
              .container { border-radius: 8px; -webkit-border-radius: 8px; -moz-border-radius: 8px; -khtml-border-radius: 8px; }
          }

          /* Set color for auto links (addresses, dates, etc.) */
          a, a:hover {
              color: #FFFFFF;
          }
          .footer a, .footer a:hover {
              color: #828999;
          }

      </style>

      <!-- MESSAGE SUBJECT -->
      <title>Responsive HTML email templates</title>

  </head>

  <!-- BODY -->
  <!-- Set message background color (twice) and text color (twice) -->
  <body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
  \tbackground-color: #2D3445;
  \tcolor: #FFFFFF;"
        bgcolor="#2D3445"
        text="#FFFFFF">

  <!-- SECTION / BACKGROUND -->
  <!-- Set message background color one again -->
  <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background"><tr><td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;"
                                                                                                                                                                                                     bgcolor="#2D3445">

      <!-- WRAPPER -->
      <!-- Set wrapper width (twice) -->
      <table border="0" cellpadding="0" cellspacing="0" align="center"
             width="500" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
  \tmax-width: 500px;" class="wrapper">




          <!-- SUPHEADER -->
          <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 14px; font-weight: 400; line-height: 150%; letter-spacing: 2px;
  \t\t\tpadding-top: 27px;
  \t\t\tpadding-bottom: 0;
  \t\t\tcolor: #FFFFFF;
  \t\t\tfont-family: sans-serif;" class="supheader">
                  Nowy kontakt przez formularz na stronie!
              </td>
          </tr>

          <!-- HEADER -->
          <!-- Set text color and font family ("sans-serif" or "Georgia, serif") -->
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;  padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 24px; font-weight: bold; line-height: 130%;
  \t\t\tpadding-top: 5px;
  \t\t\tcolor: #FFFFFF;
  \t\t\tfont-family: sans-serif;" class="header">
                  Od:${email}
                  Numer:${phone}
              </td>
          </tr>



          <!-- LINE -->
          <!-- Set line color -->
          <tr>
              <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
  \t\t\tpadding-top: 30px;" class="line"><hr
                      color="#565F73" align="center" width="100%" size="1" noshade style="margin: 0; padding: 0;" />
              </td>
          </tr>

      </table>

      <!-- End of SECTION / BACKGROUND -->
  </td></tr></table>

  </body>
  </html>`
}
