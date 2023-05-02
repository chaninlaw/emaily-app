const sgMail = require('@sendgrid/mail')
const keys = require('../config/keys');
sgMail.setApiKey(keys.sendGridKey);

class Mailer {
  constructor({ subject, recipients }, content) {
    this.msg = {
      to: recipients.map(recipient => recipient.email),
      from: { name: 'Emaily', email: 'chanin_god@hotmail.com' },
      subject,
      html: content,
      trackingSettings: {
        clickTracking: {
          enable: true
        }
      }
    };
  }

  async send() {
    try {
      const response = await sgMail.send(this.msg);
      return response;
    }
    catch (error) {
      console.error(error);
    }
  }
}

module.exports = Mailer;
