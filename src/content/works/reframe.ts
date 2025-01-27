export const reframe = {
  // Metadata
  name: "Atrium",
  href: "/work/reframe",
  tags: ["AI Agents", "B2B"],
  description: "Building infrastructure that powers the new age of AI agents for enterprise customers",
  images: ["/reframe/cover.webp", "/reframe/mockup-1.webp", "/reframe/mockup-2.webp"],

  // case study content
  sections: [
    {
      id: "overview",
      header: "Overview",
      content: [
        { type: "heading", data: "Overview" },
        {
          type: "text",
          data: "Six months into my time at Reframe, we decided to pursue a new product direction. Most users were leveraging the product for market research, so we pivoted to build a solution powered by agentic search and entity recognition systems. My role involved iterating on the product to better serve customer needs and building stronger brand connections to attract partners and improve loyalty.",
        },
        {
          type: "info-grid",
          data: [
            { label: "ROLE", value: "Founding Design Engineer (Employee #5)" },
            { label: "DURATION", value: "Full time (11 tech years)" },
            { label: "What I Did", value: ["User Experience Design", "Usability Testing", "Frontend Implementation", "Branding"] },
          ],
        },
        {
          type: "image",
          data: [{ src: "/reframe/dev-page.webp", alt: "Developer Landing Page" }],
        },
        { type: "heading", data: "The Background" },
        {
          type: "text",
          data: "Reframe started as a suite of AI-powered tools helping teams like Empowerly and JLL streamline data research and enrichment workflows with agentic AI and increase productivity.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/data-frame.webp", alt: "Data Frame And Entity Recognition" }],
        },
        {
          type: "text",
          data: "We also built a product similar to Notion Forms and Atlassian forms, to sync data to a dataframe and then run automated agentic workflows to enrich that data.",
        },
        {
          type: "video",
          data: [{ src: "/reframe/data-frame.webp", alt: "Reframe AI Forms - Video" }],
        },
        { type: "divider" },
      ],
    },
    {
      id: "research",
      header: "Research",
      content: [
        { type: "heading", data: "The Problem" },
        {
          type: "text",
          data: "However, deeper research revealed that most teams used Reframe to gather intelligence on people and companies. It became clear that new users struggled to see value without assistance, and research workflows were not fully optimized.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/data-frame.webp", alt: "Data Frame Example" }],
        },
        {
          type: "heading",
          data: "Problem Statements",
        },
        {
          type: "text",
          data: "\"How can we make it easier for teams to waste less time and resources researching leads and focus their energy on selling?\"",
        },
        {
          type: "text",
          data: "\"How can we enable teams to research hundreds of data points on people and companies seamlessly?\"",
        },
        {
          type: "image",
          data: [{ src: "/reframe/audience.webp", alt: "Target Audience Segmentation" }],
        },
        { type: "divider" },
      ],
    },
    {
      id: "design-to-code",
      header: "Design to Code",
      content: [
        { type: "heading", data: "Ideation and Prototyping" },
        {
          type: "text",
          data: "Based on common use cases, I explored multiple solutions, such as streamlined workflows and better data visualization. Prototypes included prompt boxes, landing pages, and enhanced onboarding flows.",
        },
        {
          type: "heading",
          data: "Development Workflow",
        },
        {
          type: "text",
          data: "Starting from designs, I implemented components using Tailwind, React, and internal design tokens. Accessibility benchmarks were prioritized, ensuring seamless collaboration across design and engineering.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/design-dev-workflow.webp", alt: "Design to Development Workflow" }],
        },
        { type: "divider" },
      ],
    },
    {
      id: "v2-release",
      header: "Reframe V2 Release",
      content: [
        { type: "heading", data: "Expanding the Ecosystem" },
        {
          type: "text",
          data: "With insights from users, we built Reframe V2, a platform offering an AI agent ecosystem tailored to enterprise needs. This included tools for developers to create, deploy, and monetize AI agents, providing new revenue streams.",
        },
        {
          type: "heading",
          data: "Navigation Enhancements",
        },
        {
          type: "text",
          data: "The updated platform introduced seamless two-level navigation for better user experience, making it easier for users to explore and deploy agents.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/v2-nav.webp", alt: "V2 Navigation" }],
        },
        { type: "divider" },
      ],
    },
    {
      id: "learnings",
      header: "Learnings",
      content: [
        { type: "heading", data: "Key Takeaways" },
        {
          type: "text",
          data: "This project reinforced the importance of user research and iterative design. While we successfully delivered a robust solution, areas like documentation needed more attention. Balancing rapid delivery with thorough planning remains a critical lesson.",
        },
      ],
    },
  ],
};
