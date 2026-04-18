// Import social media icons from react-icons/fa
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

/* Social media links */

const socialLinks = [
    {
        name: 'Email',
        handle: 'olaleyevictor541@gmail.com',
        icon: FaEnvelope
    },
    {
        name: 'LinkedIn',
        handle: 'https://www.linkedin.com/in/olaleye-victor/',
        icon: FaLinkedin
    },
    {
        name: 'GitHub',
        handle: 'https://github.com/Olavictor541',
        icon: FaGithub
    },
];

/* Contact page component */
export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return(
        <div className="min-h-screen bg-black text-orange-200 pt-32 md:pt-40 pb-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Page title */}
                <div className="mb-12 md:mb-16">
                    <h1 className='text-4xl md:text-6xl font-black mb-4 md:mb-6'>LET'S TALK</h1>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl">
                        Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out! I'm always open to new opportunities and connections.
                    </p>
                </div>

                {/* Two column layout - form on left, social links on right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-20">
                  {/* Left column - Contact form */}
                  <div>
                    <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 md:mb-8">Get In Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      {/* Name input field */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      {/* Email input field */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl px-4 py-3 text-white focus:border-white focus:outline-none transition-colors"
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      {/* Message textarea */}
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl px-4 py-3 text-white focus:border-white focus:outline-none transition-colors resize-none"
                          placeholder="Tell me about your project..."
                          required
                        ></textarea>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 md:py-4 rounded-lg md:rounded-xl hover:bg-gray-200 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>

                  {/* Right column - Social media links */}
                  <div className="text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Connect With Me</h2>
                    <div className="space-y-4 md:space-y-6">
                      {/* Loop through social links */}
                      {socialLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <a
                            key={link.name}
                            href={link.name === 'Email' ? `mailto:${link.handle}` : link.handle}
                            target={link.name !== 'Email' ? '_blank' : undefined}
                            rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-4 bg-gray-900 rounded-lg md:rounded-xl p-4 md:p-6 hover:bg-gray-800 transition-all group"
                          >
                            {/* Icon component - render if it exists */}
                            {IconComponent && <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />}
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold mb-1 text-sm md:text-base">{link.name}</div>
                              <div className="text-xs md:text-sm text-gray-400 truncate">{link.handle}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
