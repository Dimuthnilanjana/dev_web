"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const projects = [
    {
      title: "Project 1",
      description: "A revolutionary web application that transforms user experiences.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Project 2",
      description: "An innovative mobile app that connects people worldwide.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Project 3",
      description: "A cutting-edge platform for digital transformation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            John Doe
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="#projects">View Work</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="outline" asChild>
                    <Link href={project.link}>View Project</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-card rounded-full"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-card rounded-full"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-card rounded-full"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:hello@example.com"
              whileHover={{ scale: 1.1 }}
              className="p-4 bg-card rounded-full"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}