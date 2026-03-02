import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Fairness-Aware Machine Learning in Clinical Decision Support",
    abstract:
      "Investigating bias mitigation strategies in ML models used for healthcare triage, with a focus on demographic parity and equalized odds across patient subgroups.",
    tags: ["AI Ethics", "Healthcare", "Fairness"],
    paper: "#",
    site: "#",
  },
  {
    title: "Designing Explainable AI Interfaces for Non-Expert Users",
    abstract:
      "A mixed-methods study on how visual explanations of model predictions affect trust and comprehension among end-users with no technical background.",
    tags: ["Explainability", "HCI", "User Studies"],
    paper: "#",
    site: null,
  },
  {
    title: "Participatory Design of Community Data Dashboards",
    abstract:
      "Co-designing interactive data dashboards with community stakeholders to support evidence-based decision-making in urban planning.",
    tags: ["Participatory Design", "Data Viz", "Civic Tech"],
    paper: "#",
    site: "#",
  },
  {
    title: "Large Language Models and Academic Integrity",
    abstract:
      "Examining the pedagogical implications of LLM-generated text in higher education and proposing frameworks for responsible integration.",
    tags: ["LLMs", "Education", "Policy"],
    paper: "#",
    site: null,
  },
];

const Research = () => {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="animate-fade-in-up font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Research
        </h1>
        <p className="animate-fade-in-up delay-100 mt-4 text-lg text-muted-foreground">
          Selected projects spanning AI ethics, human-computer interaction, and civic technology.
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
