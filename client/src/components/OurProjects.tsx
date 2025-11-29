import { Button } from "./ui/button";

const OurProjects = () => {
  return (
    <div className="p-5">
      <div>
        <p className="inline-block uppercase text-primary font-semibold text-sm p-1 border-b border-b-muted-foreground">
          Our Projects
        </p>
        <p className="text-4xl font-semibold mt-3 text-primary">
          Built to Last. Crafted to Inspire.
        </p>
        <p className="text-sm mt-2 text-primary">
          From contemporary homes to commercial spaces, every project we build
          reflects precision, durability, and modern design.
        </p>

        <Button className="mt-5">View all projects</Button>
      </div>
    </div>
  );
};

export default OurProjects;
