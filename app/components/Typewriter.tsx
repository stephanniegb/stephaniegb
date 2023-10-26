const phrases = ["Elevate Web Experiences", "Cook", "Love jesus", "Smell good"];
const Typewriter = async () => {
  let currentWordIndex = 0;
  let currentWord = phrases[currentWordIndex];
  console.log(currentWord);

  return (
    <p>
      Hi, my name is
      <h1 className="intro-heading">
        Stephanie Egbuonu <br /> I<span id="typewriter"></span>
        <span id="typewriter-cursor">|</span> Elevate Web Experiences and this
        is my Odyssey
      </h1>
    </p>
  );
};

export default Typewriter;
