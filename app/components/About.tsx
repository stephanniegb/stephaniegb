const About = () => {
  return (
    <div className="flex flex-col gap-6 transition-all duration-300 hover:text-[var(--secondary-foreground)]">
      <p>
        Hey there! I’m Stephanie — a frontend developer who loves building
        beautiful, creative interfaces and making sure they actually feel great
        to use. I care a lot about user experience, and I’m just as invested in
        what happens behind the scenes as what shows up on the screen.
      </p>

      <p>
        I currently work as a Frontend Developer at{" "}
        <a
          href="https://www.moniepoint.com/ng/business"
          target="_blank"
          rel="noopener noreferrer"
        >
          Moniepoint MFB
        </a>
        , where I build reliable, high-performance dashboards used in
        large-scale fintech systems. Performance, accuracy, and reliability
        matter a lot in this space, so I spend a good amount of time thinking
        about how things scale and how users experience them in the real world.
      </p>

      <p>
        When I’m not coding, you’ll probably find me traveling, dancing or
        spending time with my family. I love how traveling adds so much color to
        life.... well HMU if you want to chat about work or just life in
        general. <span className="text-2xl">😁</span>
      </p>
    </div>
  );
};

export default About;
