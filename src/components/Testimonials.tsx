import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Adeniyi",
    position: "Web Development Lead",
    company: "CodeAlpha",
    quote: "Working with Joshua was a pleasure. He combines performance instincts with engineering habits, creating with purpose and building with craftsmanship. His multidisciplinary approach sets him apart.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Kehinde Odunuga",
    position: "Community Manager",
    company: "TestarsQuarter",
    quote: "Joshua's attention to detail and analytical thinking made him stand out during our QA bootcamp. He approaches testing methodically and communicates findings clearly.",
    image: ""
  },
  {
    id: 3,
    name: "Abdulquadri Fasasi",
    position: "Head, Corporate Strategy & Branding",
    company: "The Students' Professional Bureau of Finance, OAU.",
    quote: "Joshua was a key player in our website development team at The Students' Professional Bureau of Finance, OAU. I supervised him and was impressed by his dedication, technical skills, and attention to detail. He consistently delivered high-quality work, met deadlines, and showed passion for frontend development. Highly recommended!",
    image: "https://i.imghippo.com/files/BMgL1909AQw.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Client <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute top-0 left-0 text-blue-200 dark:text-blue-900/30" size={30} />
                    <p className="text-gray-700 dark:text-gray-300 italic pl-9 pt-2">{testimonial.quote}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
