// controllers/emailController.js
const createTransporter = require('../utils/createTransporter');

const sendEmail = (req, res) => {
    const { to, subject, meetingLink, senderEmail, senderPassword } = req.body;
    // const toEmails = Array.isArray(to) ? to : to.split(',').map(email => email.trim());
    const toEmails = Array.isArray(to) ? to.join(', ') : to;
    // Create the transporter with the dynamic sender email address
    const transporter = createTransporter(senderEmail, senderPassword);

    // Define email options
    const mailOptions = {
       
        to: toEmails,
        subject,

        html: ` <!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="x-apple-disable-message-reformatting">
                <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
        
                <meta name="color-scheme" content="light">
                <meta name="supported-color-schemes" content="light">
        
                
                <!--[if !mso]><!-->
                  
                  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
        
                  <style type="text/css">
                  // TODO: fix me!
                    @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);
                </style>
                
                <!--<![endif]-->
        
                <!--[if mso]>
                  <style>
                      // TODO: fix me!
                      * {
                          font-family: sans-serif !important;
                      }
                  </style>
                <![endif]-->
            
                
                <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
                <title></title>
        
                <!--[if gte mso 9]>
                <xml>
                    <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                
            <style>
                :root {
                    color-scheme: light;
                    supported-color-schemes: light;
                }
        
                html,
                body {
                    margin: 0 auto !important;
                    padding: 0 !important;
                    height: 100% !important;
                    width: 100% !important;
        
                    overflow-wrap: break-word;
                    -ms-word-break: break-all;
                    -ms-word-break: break-word;
                    word-break: break-all;
                    word-break: break-word;
                }
        
        
                
          direction: undefined;
          center,
          #body_table {
            
          }
        
          ul, ol {
            padding: 0;
            margin-top: 0;
            margin-bottom: 0;
          }
        
          li {
            margin-bottom: 0;
          }
        
          
        
          .list-block-list-outside-left li {
            margin-left: 20px !important;
          }
        
          .list-block-list-outside-right li {
            margin-right: 20px !important;
          }
        
          
            .paragraph {
              font-size: 15px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #5f5f5f;
              
            }
          
        
            .heading1 {
              font-size: 32px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #000000;
              
            }
          
        
            .heading2 {
              font-size: 26px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #000000;
              
            }
          
        
            .heading3 {
              font-size: 19px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #000000;
              
            }
          
        
            .list {
              font-size: 15px;
              font-family: Open Sans, sans-serif;
              font-weight: normal;
              font-style: normal;
              text-align: start;
              line-height: 1;
              text-decoration: none;
              color: #5f5f5f;
              
            }
          
        
          p a, 
          li a {
            
          display: inline-block;  
            color: #5457FF;
            text-decoration: none;
            font-style: normal;
            font-weight: normal;
        
          }
        
          .button-table a {
            text-decoration: none;
            font-style: normal;
            font-weight: normal;
          }
        
          .paragraph > span {text-decoration: none;}.heading1 > span {text-decoration: none;}.heading2 > span {text-decoration: none;}.heading3 > span {text-decoration: none;}.list > span {text-decoration: none;}
        
        
                * {
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
        
                div[style*="margin: 16px 0"] {
                    margin: 0 !important;
                }
        
                #MessageViewBody,
                #MessageWebViewDiv {
                    width: 100% !important;
                }
        
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                    mso-table-lspace: 0pt !important;
                    mso-table-rspace: 0pt !important;
                }
                table:not(.button-table) {
                    border-spacing: 0 !important;
                    border-collapse: collapse !important;
                    table-layout: fixed !important;
                    margin: 0 auto !important;
                }
        
                th {
                    font-weight: normal;
                }
        
                tr td p {
                    margin: 0;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                a[x-apple-data-detectors],
        
                .unstyle-auto-detected-links a,
                .aBn {
                    border-bottom: 0 !important;
                    cursor: default !important;
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                .im {
                    color: inherit !important;
                }
        
                .a6S {
                    display: none !important;
                    opacity: 0.01 !important;
                }
        
                img.g-img+div {
                    display: none !important;
                }
        
                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                    u~div .contentMainTable {
                        min-width: 320px !important;
                    }
                }
        
                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                    u~div .contentMainTable {
                        min-width: 375px !important;
                    }
                }
        
                @media only screen and (min-device-width: 414px) {
                    u~div .contentMainTable {
                        min-width: 414px !important;
                    }
                }
            </style>
        
            <style>
                @media only screen and (max-device-width: 640px) {
                    .contentMainTable {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .single-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .multi-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .imageBlockWrapper {
                        width: 100% !important;
                        margin: auto !important;
                    }
                }
                @media only screen and (max-width: 640px) {
                    .contentMainTable {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .single-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .multi-column {
                        width: 100% !important;
                        margin: auto !important;
                    }
                    .imageBlockWrapper {
                        width: 100% !important;
                        margin: auto !important;
                    }
                }
            </style>
            <style></style>
            
        <!--[if mso | IE]>
            <style>
                .list-block-outlook-outside-left {
                    margin-left: -18px;
                }
            
                .list-block-outlook-outside-right {
                    margin-right: -18px;
                }
        
                a:link, span.MsoHyperlink {
                    mso-style-priority:99;
                    
          display: inline-block;  
            color: #5457FF;
            text-decoration: none;
            font-style: normal;
            font-weight: normal;
        
                }
            </style>
        <![endif]-->
        
        
            </head>
        
            <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F5F6F8;">
                <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F5F6F8;">
                    <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" id="body_table" style="background-color: #F5F6F8;">
                    <tbody>    
                        <tr>
                            <td>
                            <![endif]-->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="margin: auto;" class="contentMainTable">
                                    <tr class="wp-block-editor-spacerblock-v1"><td style="background-color:#F5F6F8;line-height:50px;font-size:50px;width:100%;min-width:100%">&nbsp;</td></tr><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#1f2532;padding-top:12px;padding-bottom:12px;padding-left:12px;padding-right:12px" align="center"><table align="center" width="455.84" class="imageBlockWrapper" style="width:455.84px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/c686ed62-78df-4e6a-96bf-7b706d1db82c/whiteboard-removebg-preview.png" width="455.84" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#ffffff;display:block;padding-top:64px;padding-right:32px;padding-bottom:32px;padding-left:32px;text-align:center"><p style="font-family:Open Sans, sans-serif;text-align:center;line-height:36.80px;font-size:32px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading1">You have been invited to join!</p></td></tr><tr class="wp-block-editor-paragraphblock-v1"><td valign="top" style="padding:0px 32px 32px 32px;background-color:#ffffff"><p class="paragraph" style="font-family:Open Sans, sans-serif;text-align:center;line-height:30.00px;font-size:15px;margin:0;color:#5f5f5f;word-break:normal">${meetingLink}</p></td></tr><tr class="wp-block-editor-buttonblock-v1" align="center"><td style="background-color:#ffffff;padding-top:20px;padding-right:20px;padding-bottom:60px;padding-left:20px;width:100%" valign="top"><table role="presentation" cellspacing="0" cellpadding="0" class="button-table"><tbody><tr><td valign="top" class="button-td button-td-primary" style="cursor:pointer;border:none;border-radius:4px;background-color:#5457ff;font-size:16px;font-family:Open Sans, sans-serif;width:fit-content;color:#ffffff"><a style="color:#ffffff">
            <table role="presentation">
            <tbody><tr>
              <!-- Top padding -->
              <td valign="top" colspan="3" height="16" style="height: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
            <tr>
              <!-- Left padding -->
              <td valign="top" width="16" style="width: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
              <!-- Content -->
              <td valign="top" style="
                display: inline-block;
                cursor: pointer; border: none; border-radius: 4px; background-color: #5457ff; font-size: 16; font-family: Open Sans, sans-serif; width: fit-content; font-weight: null; letter-spacing: undefined;
                  color: #ffffff;
                  padding: 0;
                ">
                Copy info
              </td>
              <!-- Right padding -->
              <td valign="top" width="16" style="width: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
            <!-- Bottom padding -->
            <tr>
              <td valign="top" colspan="3" height="16" style="height: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
          </tbody></table>
            </a></td></tr></tbody></table></td></tr><tr><td style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0;background-color:#ffffff"><table role="presentation" class="multi-column" style="width:640px;border-collapse:collapse !important" cellpadding="0" cellspacing="0"><tbody><tr style="padding-top:0;padding-left:0;padding-right:0;padding-bottom:0" class="wp-block-editor-twocolumnsfiftyfiftyblock-v1"><td style="width:320px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="left" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#ffffff;padding-top:32px;padding-bottom:32px;padding-left:32px;padding-right:32px" align="center"><table align="center" width="256" class="imageBlockWrapper" style="width:256px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/c686ed62-78df-4e6a-96bf-7b706d1db82c/w3.webp" width="256" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr></tbody></table></td><td style="width:320px;float:left" class="wp-block-editor-column single-column"><table role="presentation" align="right" border="0" class="single-column" width="320" style="width:320px;float:left;border-collapse:collapse !important" cellspacing="0" cellpadding="0"><tbody><tr class="wp-block-editor-headingblock-v1"><td valign="top" style="background-color:#ffffff;display:block;padding-top:40px;padding-right:32px;padding-bottom:8px;padding-left:32px"><p style="font-family:Georgia, serif;line-height:26.45px;letter-spacing:1px;font-size:23px;background-color:#ffffff;color:#000000;margin:0;word-break:normal" class="heading3">Sketch &amp; Sync: Your Real-time Collaborative Whiteboard Experience</p></td></tr><tr class="wp-block-editor-buttonblock-v1" align="left"><td style="background-color:#ffffff;padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px;width:100%" valign="top"><table role="presentation" cellspacing="0" cellpadding="0" class="button-table"><tbody><tr><td valign="top" class="button-td button-td-primary" style="cursor:pointer;border:none;border-radius:50px;background-color:#304146;font-size:16px;font-family:Open Sans, sans-serif;width:fit-content;letter-spacing:0;color:#ffffff"><a style="color:#ffffff">
            <table role="presentation">
            <tbody><tr>
              <!-- Top padding -->
              <td valign="top" colspan="3" height="16" style="height: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
            <tr>
              <!-- Left padding -->
              <td valign="top" width="28" style="width: 28px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
              <!-- Content -->
              <td valign="top" style="
                display: inline-block;
                cursor: pointer; border: none; border-radius: 50px; background-color: #304146; font-size: 16; font-family: Open Sans, sans-serif; width: fit-content; font-weight: null; letter-spacing: 0;
                  color: #ffffff;
                  padding: 0;
                ">
                Explore
              </td>
              <!-- Right padding -->
              <td valign="top" width="28" style="width: 28px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
            <!-- Bottom padding -->
            <tr>
              <td valign="top" colspan="3" height="16" style="height: 16px; line-height: 1px; padding: 0;">
                <span style="display: inline-block;">&nbsp;</span>
              </td>
            </tr>
          </tbody></table>
            </a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr class="wp-block-editor-spacerblock-v1"><td style="background-color:#ffffff;line-height:32px;font-size:32px;width:100%;min-width:100%">&nbsp;</td></tr><tr class="wp-block-editor-imageblock-v1"><td style="background-color:#ffffff;padding-top:0;padding-bottom:0;padding-left:0;padding-right:0" align="center"><table align="center" width="640" class="imageBlockWrapper" style="width:640px" role="presentation"><tbody><tr><td style="padding:0"><img src="https://api.smtprelay.co/userfile/c686ed62-78df-4e6a-96bf-7b706d1db82c/w4.jpeg" width="640" height="" alt="" style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0" class="g-img"></td></tr></tbody></table></td></tr><tr class="wp-block-editor-socialiconsblock-v1" role="article" aria-roledescription="social-icons" style="display:table-row;background-color:#304146"><td style="width:100%"><table style="background-color:#304146;width:100%;padding-top:42px;padding-bottom:32px;padding-left:32px;padding-right:32px;border-collapse:separate !important" cellpadding="0" cellspacing="0" role="presentation"><tbody><tr><td align="center" valign="top"><div style="max-width:576px"><table role="presentation" style="width:100%" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td valign="top"><div style="margin-left:auto;margin-right:auto;margin-top:-5px;margin-bottom:-5px;width:100%;max-width:156px"><table role="presentation" style="padding-left:210" width="100%" cellpadding="0" cellspacing="0"><tbody><tr><td><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://twitter.com/23kartike" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/x/x-square-solid-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="X (formerly Twitter)"></a></td></tr></tbody></table><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://www.linkedin.com/in/kartike-tiwari-5048701ab/" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/linkedin/linkedin-square-solid-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="LinkedIn"></a></td></tr></tbody></table><table role="presentation" align="left" style="float:left" class="single-social-icon" cellpadding="0" cellspacing="0"><tbody><tr><td valign="top" style="padding-top:5px;padding-bottom:5px;padding-left:10px;padding-right:10px;border-collapse:collapse !important;border-spacing:0;font-size:0"><a class="social-icon--link" href="https://vercel.com/23kartik/kartike-portfolio" target="_blank" rel="noreferrer"><img src="https://template-editor-assets.s3.eu-west-3.amazonaws.com/assets/social-icons/website/website-square-solid-white.png" width="32" height="32" style="max-width:32px;display:block;border:0" alt="Website"></a></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table></div></td></tr></tbody></table></td></tr>
                                </table>
                            <!--[if mso | IE]>
                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <![endif]-->
                </center>
            </body>
        </html>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
    // Send email
    // toEmails.forEach(email => {
    //     // Set the 'to' field for each recipient
    //     mailOptions.to = email;
    
    //     // Send email
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //             console.error('Error sending email to', email, ':', error);
    //             // Handle the error for this specific recipient
    //         } else {
    //             console.log('Email sent to', email, ':', info.response);
    //             // Handle success for this specific recipient
    //         }
    //     });
    // });
    
    // After the loop completes, send the response
    res.status(200).json({ message: 'Emails sent successfully' });
};

module.exports = { sendEmail };
