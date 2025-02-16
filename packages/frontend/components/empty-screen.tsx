import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const exampleMessages = [
  {
    heading:
      "What are the key reporting requirements under [E1/S1/G1], and why do they matter?",
    message:
      "What are the key reporting requirements under [E1/S1/G1], and why do they matter?",
  },
  {
    heading:
      "How do the disclosure requirements for [E1] (Climate Change) compare to [E4] (Biodiversity)?",
    message:
      "How do the disclosure requirements for [E1] (Climate Change) compare to [E4] (Biodiversity)?",
  },
  {
    heading: "What are the key general disclosure requirements under ESRS 2?",
    message: "What are the key general disclosure requirements under ESRS 2?",
  },
];
export function EmptyScreen({
  submitMessage,
  className,
}: {
  submitMessage: (message: string) => void;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-2 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message);
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
