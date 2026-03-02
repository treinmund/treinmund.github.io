import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Addressing the Sociotechnical Challenges of Machine Learning",
    abstract:
      "Creating frameworks and methods for healthcare and social welfare teams to address sociotechnical challenges in machine learning deployments.",
    tags: ["Responsible AI", "Healthcare", "Social Welfare", "HCI"],
    paper: "https://doi.org/10.1145/3772318.3790547",
    site: null,
  },
  {
    title: "The Responsible Use of Generative AI in Long-term Care",
    abstract:
      "Co-producing a care-centric approach to responsible AI for long-term care in the UK.",
    tags: ["Responsible AI", "Social Welfare", "Co-production"],
    paper: "https://doi.org/10.1016/j.lanhl.2026.100817",
    site: null,
  },
  {
    title: "Responsible Innovation for Research into Variable Autonomy Robotics",
    abstract:
      "Defining a research agenda grounded in responsible innovation for variable autonomy robotics.",
    tags: ["Responsible Innovation", "Robotics"],
    paper: "https://doi.org/10.1145/3636432",
    site: null,
  },
];

const Research = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Work
        </h1>
        <p className="animate-fade-in-up delay-100 mt-4 text-lg text-muted-foreground">
          Selected projects spanning responsible AI, human-computer interaction, and public sector technology.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className={`animate-fade-in-up group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                i === 0 ? "delay-200" : i === 1 ? "delay-300" : i === 2 ? "delay-400" : "delay-500"
              }`}
            >
              <CardHeader>
                <CardTitle className="font-display text-xl leading-snug">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">{project.abstract}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                <Button asChild variant="outline" size="sm" className="active:scale-[0.98] transition-transform">
                  <a href={project.paper}>
                    <FileText className="mr-1.5 h-3.5 w-3.5" />
                    Paper
                  </a>
                </Button>
                {project.site && (
                  <Button asChild variant="outline" size="sm" className="active:scale-[0.98] transition-transform">
                    <a href={project.site} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Project Site
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
