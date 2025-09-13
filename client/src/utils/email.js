import emailjs from 'emailjs-com';

const initEmailJS = () => {
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;
  if (userId) {
    emailjs.init(userId);
  }
};

export const sendRejectionEmail = async (email, name, userType) => {
  try {
    initEmailJS();
    
    const templateParams = {
      to_email: email,
      to_name: name,
      user_type: userType,
      message: `Your ${userType} registration has been rejected. Please contact support for more information.`
    };

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.warn('EmailJS configuration missing');
      return;
    }

    await emailjs.send(serviceId, templateId, templateParams);
    console.log('Rejection email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};