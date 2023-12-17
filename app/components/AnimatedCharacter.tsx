type Props = {
  letter: string;
};

const AnimatedCharacter = ({ letter }: Props) => {
  return <span>{letter}</span>;
};

export default AnimatedCharacter;
