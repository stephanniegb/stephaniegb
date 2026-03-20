const About = () => {
  return (
    <div className="about-section flex flex-col gap-6 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
      {/* <p>
        Hola, welcome to my portfolio{" "}
        <span className="animate-wave text-2xl">👋🏽</span> I'm Stephanie — a
        software engineer who's all about building reliable systems that power
        real-world applications and scale with ease.
      </p>
      <p>
        I’m a web3 girl, and a fintech girl (yes, you can trust me with your
        assets). I currently work at{" "}
        <a
          href="https://www.moniepoint.com/ng/business"
          target="_blank"
          rel="noopener noreferrer"
        >
          Moniepoint MFB
        </a>{" "}
        as a frontend engineer, where my days are spent building and maintaining
        high-performance, reliable dashboards for fintech products.
      </p>
      I care deeply about user experience, performance, and reliability, and I
      love combining that with creative, well-designed interfaces that actually
      feel good to use.
      <p>
        When I’m not coding, I love to travel, spend time with my family, and
        dance. Welcome to my portfolio — and feel free to hit me up if you want
        to talk about work, tech, or life in general.
      </p> */}

      <p>
        Hola, welcome to my portfolio{" "}
        <span className="animate-wave text-2xl">👋🏽</span> I'm Stephanie, a
        software engineer who's all about building reliable systems that power
        real-world applications and scale with ease.
      </p>

      <p>
        I’m a web3 and fintech girl (so, yes, you can trust me with your
        assets). I currently work at{" "}
        <a
          href="https://www.moniepoint.com/ng/business"
          target="_blank"
          rel="noopener noreferrer"
          className="anchor-underline"
        >
          Moniepoint MFB
        </a>{" "}
        as a frontend engineer, where my days are spent building and maintaining
        products that support high-volume financial operations.
      </p>

      <p>
        I also write and love teaching. I share what I learn through{" "}
        <a href="#resources" className="anchor-underline">
          articles and workshops
        </a>{" "}
        , which you can explore in my portfolio.
      </p>

      <p>
        When I’m not coding, I love to travel, spend time with my family, and
        dance. Welcome to my portfolio, feel free to hit me up if you want to
        talk about work, tech, or life in general.
      </p>
    </div>
  );
};

export default About;
