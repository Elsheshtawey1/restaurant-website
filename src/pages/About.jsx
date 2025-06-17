import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import "../styles/About.css";

const About = () => (
  <>
    <Helmet>
      <title>About Us | Restaurant</title>
      <meta name="description" content="Learn more about our restaurant, our story, and our team." />
      <meta property="og:title" content="About Us | Restaurant" />
      <meta property="og:description" content="Learn more about our restaurant, our story, and our team." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Our Story
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hero-subtitle">
            A Culinary Journey Since 2010
          </motion.p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          <motion.div className="story-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2>The Beginning</h2>
            <p>
              In 2010, our founder, Chef Michael Chen, transformed a historic building in the heart of the city into what would become one of the most beloved dining destinations. What started as a
              small family restaurant has grown into a culinary institution, while maintaining the warmth and intimacy that made it special from the start.
            </p>
          </motion.div>

          <motion.div className="philosophy-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <h2>Our Philosophy</h2>
            <p>
              We believe that dining is more than just eating – it's an experience that brings people together. Our commitment to excellence is reflected in every aspect of our restaurant, from the
              carefully curated menu to the warm, attentive service. We source the finest local ingredients and combine traditional techniques with innovative approaches to create dishes that tell a
              story.
            </p>
          </motion.div>

          <motion.div className="team-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
            <h2>Our Team</h2>
            <p>
              Our success is built on the dedication and passion of our team. Led by Executive Chef Sarah Martinez, our kitchen staff brings together decades of combined experience in creating
              memorable dining experiences. From our front-of-house team to our pastry department, every member shares our commitment to excellence and hospitality.
            </p>
          </motion.div>

          <motion.div className="community-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
            <h2>Our Community</h2>
            <p>
              Over the years, we've become more than just a restaurant – we're a gathering place for our community. We host regular events, support local farmers and producers, and participate in
              community initiatives. Our commitment to sustainability and local partnerships reflects our belief in giving back to the community that has supported us.
            </p>
          </motion.div>

          <motion.div className="future-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }}>
            <h2>Looking Forward</h2>
            <p>
              As we continue to grow and evolve, our commitment to excellence remains unchanged. We're constantly exploring new flavors, techniques, and ways to enhance the dining experience. Our goal
              is to remain a place where memories are made, where every visit feels like coming home, and where the art of dining is celebrated in all its forms.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default About;
