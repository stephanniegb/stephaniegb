import Resources from "./Resources";

const ResourcesSection = () => {
  return (
    <div className="flex-col gap-4">
      <Resources
        url="https://stephanniegb.hashnode.dev/getting-started-with-the-claude-api-a-beginners-guide"
        title="Getting Started with the Claude API: A Beginner's Guide"
        img="./resources/0.png"
        year="2025"
      />
      <Resources
        url="https://www.youtube.com/live/69X4-SgBixA?si=zks6OVWU8Q0UhFEE"
        title="Building with Irys on Starknet"
        img="./resources/1.jpeg"
        year="2025"
      />
    </div>
  );
};

export default ResourcesSection;

