import { Code, Laptop, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Laptop,
      title: "Modern Tech",
      description: "Working with cutting-edge technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent communication and collaboration skills",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and what drives me
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="fade-in">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
                My journey in software development started with a curiosity about how things work on the web, 
                and it has evolved into a deep commitment to creating innovative solutions that make a difference.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Currently pursuing my education in Computer Science, I've worked on various projects ranging 
                from responsive web applications to complex backend systems. I believe in continuous learning 
                and staying updated with the latest industry trends and best practices.
              </p>
              <p className="text-lg leading-relaxed">
                My goal is to contribute to meaningful projects that solve real-world problems while growing 
                as a developer and team member. I'm actively seeking opportunities where I can apply my skills 
                and learn from experienced professionals in the field.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="fade-in hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
