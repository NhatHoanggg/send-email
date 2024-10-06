//npm install resend
const { Resend } = require('resend');
const resend = new Resend('re_ViEmePnX_BS4Pb5Vkpbv7fZLkj4PHFX5r');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'ADMIN <onboarding@resend.dev>',
      to: ['nhathoanghbt3223@gmail.com'],
      subject: 'Notification',
      html: '<strong>OTP: 1234</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
