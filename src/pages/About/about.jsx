import "./style-about.css";

const About = () => {
  return (
    <>
      <div className="bar"></div>
      <div className="heading-cont">
        <h1 className="headingTitle">Our Story</h1>
        <div className="headsubText">Our first breads and customers</div>
      </div>

      <div className="body">
        <p className="firstP">
          At Sotanghon, we believe that bread is more than just a simple staple;
          it is a comforting reminder of home, a vessel for cherished memories,
          and an embodiment of love shared between families and friends. Our
          journey began with humble roots, much like the tender sprouts of a
          growing wheat field, back in 1995.The story of Sotanghon started with
          our founder, Maria, a passionate home baker who had a deep-rooted love
          for baking since she was a child. Every afternoon, Maria would fill
          her cozy kitchen with the irresistible aroma of freshly baked bread,
          drawing neighbors and strangers alike with the promise of warmth and
          nourishment.
        </p>
        <img
          className="firstPic"
          src="/assets/about/ddp-CceG6jpl19M-unsplash.jpg"
          alt="sotanghon worker"
        />
        <p className="secondP">
          What started as a modest home bakery quickly captured the hearts of
          the local community. Maria's artisanal approach, her dedication to
          quality, and the secret ingredient she poured into every recipe - her
          love - soon earned her a loyal following. Customers would come not
          only for the delectable bread but also for the warmth of Maria's smile
          and the genuine care she extended to each person who walked through
          the door. As word of mouth spread, demand for Maria's bread surpassed
          her kitchen's capacity. And so, with trepidation and hope in her
          heart, Maria took a leap of faith and expanded Sotanghon into a small
          bakery nestled in the heart of the town. The aroma that once wafted
          from her kitchen now filled the streets, luring people from all
          corners to experience the magic of Sotanghon bread.
        </p>
        <div className="two-cont">
          <img
            src="/assets/about/austin-ban-IS6RwpuEJpY-unsplash.jpg"
            alt="hands"
            className="secondPic"
          />
          <img
            src="\assets\about\nadya-spetnitskaya-tOYiQxF9-Ys-unsplash.jpg"
            alt=""
            className="thirdPic"
          />
        </div>
        <p className="thirdP">
          To this day, Sotanghon continues to be a family-run business, with
          Maria's children and grandchildren pouring their hearts into
          preserving the tradition of baking with love. Each loaf of bread is
          still handcrafted with care, using time-honored recipes passed down
          through generations. And while Sotanghon's presence may have grown,
          the spirit of its beginnings remains intact, like the thread that
          weaves together all the people touched by the taste of Sotanghon. So,
          as you savor our bread, we invite you to take a moment to pause, to
          feel the warmth in your heart, and to reflect on the moments of joy
          shared around a table with loved ones. Because at Sotanghon, we don't
          just sell bread; we share stories, we celebrate life's simple
          pleasures, and we honor the tradition of baking with love - a love
          that began in a humble home kitchen and now spans the globe, bringing
          people together one loaf at a time.
        </p>
      </div>
    </>
  );
};

export default About;
