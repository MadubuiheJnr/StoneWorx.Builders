import { Button } from "./ui/button";
import our_project_img_1 from "/our_project_img_1.jpg";
import our_project_img_2 from "/our_project_img_2.jpg";
import our_project_img_3 from "/our_project_img_3.jpg";
import our_project_img_4 from "/our_project_img_4.jpg";

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

      <div className="p-3 grid grid-cols-1 gap-y-3 mt-10">
        <div
          style={{ backgroundImage: `url(${our_project_img_1})` }}
          className="h-50 w-full bg-no-repeat bg-cover rounded-3xl"
        />
        <div
          style={{ backgroundImage: `url(${our_project_img_2})` }}
          className="h-90 w-full bg-no-repeat bg-cover rounded-3xl"
        />
        <div
          style={{ backgroundImage: `url(${our_project_img_3})` }}
          className="h-90 w-full bg-no-repeat bg-cover rounded-3xl"
        />
        <div
          style={{ backgroundImage: `url(${our_project_img_4})` }}
          className="h-50 w-full bg-no-repeat bg-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default OurProjects;
