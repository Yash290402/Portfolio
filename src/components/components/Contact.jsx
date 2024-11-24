import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../../style'
import { EarthCanvas } from './canvas'
import { SectionWapper } from '../../hoc'
import { slideIn } from '../../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    concern: false, // Added concern state
  })

  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value, // Handle checkbox state
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if the concern checkbox is checked before submission
    if (!form.concern) {
      alert("Please check 'I have a specific concern' before submitting.")
      return
    }

    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          to_name: "Yash Patel",
          to_email: "yash56774@gmail.com",
          message: form.message,
          concern: form.concern ? "Yes" : "No",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          alert("Thank you. I will get back to you as soon as possible.")

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
            concern: false,
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert("Ahh, something went wrong. Please try again.")
        }
      )
  }

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-4 rounded-lg sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Phone Number</span>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="What's your phone number?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Concern Checkbox */}
          <label className='flex items-center gap-2'>
            <input
              type='checkbox'
              name='concern'
              checked={form.concern}
              onChange={handleChange}
              className='accent-primary'
            />
            <span className='text-white font-medium'>Agree all terms and condition</span>
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[750px] md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWapper(Contact, "contact")
