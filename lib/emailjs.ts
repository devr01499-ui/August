import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  if (publicKey) {
    emailjs.init(publicKey)
  }
}

export const sendEmail = async (templateParams: any) => {
  try {
    initEmailJS()
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_n9ihigq'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_gkhcy08'
    
    const result = await emailjs.send(serviceId, templateId, templateParams)
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

export const sendContactForm = async (formData: {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || '',
    company: formData.company || '',
    service: formData.service || '',
    message: formData.message,
    to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'devr01499@gmail.com'
  }
  
  return await sendEmail(templateParams)
}
