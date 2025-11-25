import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const LogisticCobot = () => {
  const outputs = [
    {
      title: "Output Demo 1",
      url: "https://youtu.be/wwo64Y3S3Lg?si=qqw-5LkwPccSdsHh",
    },
    {
      title: "Output Demo 2",
      url: "https://youtu.be/WDsKcqxYASk?si=l0cHRH-iGrAuRSwL",
    },
    {
      title: "Output Demo 3",
      url: "https://youtu.be/r4LGMsw5d10?si=Lshp8FdNLafCx9-B",
    },
    {
      title: "Output Demo 4",
      url: "https://youtu.be/6sjVKjVlwoo?si=1mSZnRBxsCDiq-w3",
    },
  ];

  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
          Logistic <span className="text-primary">Cobot</span>
        </h1>
        <p className="text-muted-foreground mb-8">Competition deliverable • Output demos</p>

        <div className="bg-card p-8 rounded-3xl shadow-lg">
          <p className="mb-6">Thank you for your interest in our Logistic Cobot.</p>

         
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {outputs.map((o, i) => (
              <Button
                key={i}
                asChild
                size="lg"
                className="justify-between bg-gradient-primary text-primary-foreground hover:shadow-glow-primary"
              >
                <a href={o.url} target="_blank" rel="noopener noreferrer">
                  {o.title}
                  <ExternalLink className="w-5 h-5 ml-2 inline-block" />
                </a>
              </Button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            If you have any questions or would like to learn more about the approach, I'd be happy to chat. You can
            also return to the project list anytime.
          </p>

          <Link to="/projects">
            <Button variant="outline">Back to Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogisticCobot;
