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
          data: [{ src: "/reframe/f-1.webp", alt: "Developer Landing Page" }],
        },
        { type: "heading", data: "The Background" },
        {
          type: "text",
          data: "For our main product Reframe AI, we had already developed and launched a product suite that helped top teams at Empowerly and JLL streamline data research with agentic AI workflows. We integrated AI agents into dataframes within a spreadsheet-like interface, allowing customers to automate data enrichment and qualification. \"A spreadsheet that fills itself\" - a competitors tagline",
        },
        {
          type: "image",
          data: [{ src: "/reframe/f-2.webp", alt: "Data Frame And Entity Recognition" }],
        },
        {
          type: "text",
          data: "Beyond this, we also built a system that let clients sync their data realtime into a dataframe and run automated workflows to refine it. Reframe AI Forms, seamlessly integrated with customer stack and existing tools, feeding form submissions directly into dataframes to trigger advanced workflows. Collectively, we managed to take this feature from prototype to production in just three weeks; faster than teams at Notion Forms and Asana Forms.",
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
          data: "Over time, our research revealed that most teams used the product to gather intelligence on people and companies. When working with large dataframes (10k+ records) for instance, users often needed to dive deeper into a subset of high-value leads or entities. However, we did not provide a siloed environment or dedicated space for that, leaving users to export data elsewhere. Given that data has gravity, users tend to stick to the platform that meets most of their needs, so we were losing customers because we were restricting them.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/js.webp", alt: "How people used the product" }],
        },
        {
          type: "text",
          data: "Another key issue that became glaring was that, new users struggled to immediately see value in the platform, and research workflows were not fully optimized even for advanced users. We needed a better way to support customers and enhance their experience. Therefore we decided to rethink our strategy and how we meet our customers growing needs, starting with our primary problem statement.",
        },
        {
          type: "quote",
          data: "\"How can we make it easier and seamless for teams to quickly research hundreds of data points on people and companies without leaving our platform?\"",
        },
        {
          type: "heading",
          data: "Gauging Customer Interest",
        },
        {
          type: "text",
          data: "To ensure we were going in the right direction, we identified and segmented key customer factions based on how they engaged with the product. This helped us pinpoint opportunities, competitive gaps, and areas for quick wins. We prioritized users whose problems closely aligned with our solution, ensuring that the product’s value would be immediately clear - the Aha! moment; upon using it.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/audience.webp", alt: "Target Audience Segmentation" }],
        },
        {
          type: "heading",
          data: "Market Research - Competitors?",
        },
        {
          type: "text",
          data: "Analyzing the competitive landscape, we identified several companies offering similar data solutions. Instead of competing directly, we focused on differentiation by creating a suite of tools designed for data-heavy teams.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/competitors.webp", alt: "Competitors" }],
        },
        {
          type: "heading",
          data: "Integrating User Scenarios",
        },
        {
          type: "text",
          data: "To ensure we stayed true to the customers painpoints throughout the process, we used real-world scenarios and test cases as guiding anchors. This frmework helped sharpen and influence our decision making, putting users front and center by design. This also helped shape the product by catering to the evolving needs of active customers while also considering potential teams we could pitch to.",
        },
        {
          type: "image",
          data: [{ src: "/reframe/scenarios.webp", alt: "User examples" }],
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
