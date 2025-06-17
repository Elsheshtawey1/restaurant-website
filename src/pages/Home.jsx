import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import Special from "../components/home/Special";
import Welcome from "../components/home/Welcome";
import ExpertChefSection from "../components/home/ExpertChefSection";
import HappyCustomersSection from "../components/home/HappyCustomersSection";
import NewsletterSection from "../components/home/NewsletterSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Restaurant - Best Food Experience</title>
        <meta name="description" content="Welcome to our restaurant. Enjoy the best food experience with our special dishes, expert chefs, and happy customers." />
        <meta property="og:title" content="Home | Restaurant - Best Food Experience" />
        <meta property="og:description" content="Welcome to our restaurant. Enjoy the best food experience with our special dishes, expert chefs, and happy customers." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        <Hero />
        <div>
          <Special />
          <Welcome />
        </div>
        <ExpertChefSection />
        <HappyCustomersSection />
        <NewsletterSection />
      </main>
    </>
  );
};

export default Home;
