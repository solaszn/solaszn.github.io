export const citisquare = {
  // Metadata
  name: "Citisquare",
  href: "/work/citisquare",
  tags: ["Real Estate", "Marketplace"],
  description: "Maximizing usability for a personalized, scalable and intuitive e-commerce experience",
  images: ["/citisquare/cover.webp", "/citisquare/mockup-1.webp", "/citisquare/mockup-2.webp"],

  // case study content
  sections: [
    {
      id: "background",
      header: "Overview",
      content: [
        {
          type: "heading",
          data: "Overview",
        },
        {
          type: "text",
          data: "As people build wealth, they often invest in real estate or spend on travel and vacation experiences. Citisquare Africa operates at this intersection, offering premium property opportunities and curated vacation packages in high-demand cities like Lagos and Abuja. I was commissioned to redesign the landing page and improve the e-commerce experience to drive stronger engagement and increase conversions.",
        },
        {
          type: "info-grid",
          data: [
            { label: "ROLE", value: "Design Contractor" },
            { label: "DURATION", value: "4 weeks" },
            { label: "WHAT I DID", value: ["User Research", "Heuristic Evaluation", "Web Design", "Component Library", "Usability Testing"] },
          ],
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-1.webp", alt: "Leading showcase", loading: "eager" }],
        },
         {
          type: "heading",
          data: "The Problem",
        },
        {
          type: "text",
          data: "Citisquare already had a customer-facing website used to promote exclusive deals on real estate and vacation packages. However, conversion rate from visitors to new signups was as low as 6% and dropoff rates were high. SEO ranking also was a huge concern as the messaging lacked clarity and content did not align well with user intent, which affected discoverability and relevance.",
        },
        {
          type: "quote",
          data: "\“What are the root causes of user friction and low conversion?\”",
        },
        { type: "divider" },
      ],
    },
    {
      id: "research",
      header: "Research",
      content: [
        {
          type: "text",
          data: "To understand why the current site performed poorly, I reviewed customer complaints and conducted interviews with a dozen uninformed users, alongside product owners. Feedback from two key stakeholders closely connected to customers were also included.",
        },
        {
          type: "stat-grid",
          data: [
            { label: "user interviews", value: "4" },
            { label: "live chat complaints", value: "6" },
            { label: "survey responses", value: "20" },
            { label: "stakeholder feedback", value: "2+" },
          ]
        },
        {
          type: "text",
          data: "Patterns quickly emerged. Users struggled with clarity, trust signals, and navigation. Many of the friction points were tied directly to experience gaps rather than the offerings themselves. These findings confirmed that a strong UX overhaul could significantly improve outcomes.",
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-2.webp", alt: "Feedback on stickies" }],
        },
        {
          type: "heading",
          data: "Heuristic Evaluation",
        },
        {
          type: "text",
          data: "Going through the site myself, I was able to identify some loose ends and multiple usability issues that could impact user satisfaction. These ranged from unclear calls-to-action and inconsistent navigation to weak error handling and visual inconsistencies.",
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-3.webp", alt: "Design Audit Findings" }],
        },
        {
          type: "text",
          data: "To strengthen the case, I mapped these findings against Jakob Nielsen’s usability heuristics. This helped connect user frustrations to recognized usability principles and demonstrated how these gaps directly impacted conversions. Presenting this structured analysis created alignment with stakeholders and clarified the path forward.",
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-4.webp", alt: "Usability Heuristics Graph" }],
        },
        {
          type: "heading",
          data: "Persona",
        },
        {
          type: "text",
          data: "To stay grounded needs of in real users, I developed a persona based on our ideal customer profile. This included their motivations, frustrations, expectations, and goals; be it searching for investment property or planning a vacation. This framework ensured that every design decision supported user intent and improved overall satisfaction.",
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-5.webp", alt: "User Persona" }],
        },
        { type: "divider" },
      ],
    },
    {
      id: "interaction-design",
      header: "Interaction Design",
      content: [
        {
          type: "text",
          data: "The existing information architecture was largely functional, so I focused on improving the shopping flow and redesigning the landing experience. Stakeholders preferred to retain the current hero section style, so I redesigned components using the existing design tokens while refining interactions to include hover, active, and error states. I built a structured component library to ensure consistency and scalable design implementation.",
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-6.webp", alt: "Component Design" }],
        },
        {
          type: "heading",
          data: "Landing Page",
        },
        {
          type: "text",
          data: "The landing page serves as the storefront and first impression. It needed to communicate value instantly and guide visitors clearly toward action. I restructured sections to ensure each block had a clear purpose. Subtle motion and refined interactions were introduced to enhance clarity without distraction. After multiple iterations, the final layout improved hierarchy, storytelling, and user flow.",
        },
        {
          type: "video",
          data: [{ src: "/citisquare/f-7.mp4", alt: "Landing Page Prototype" }],
        },
        {
          type: "heading",
          data: "Product Details Page",
        },
        {
          type: "text",
          data: "Each property or vacation package needed a focused, persuasive experience. The previous product page lacked obvious action cues and clear hierarchy. I redesigned the product page using a familiar e-commerce pattern, placing primary calls-to-action prominently on the right to align with common mental models. Within the first week of launch, this page recorded a 67% engagement rate. I also provided post-launch guidelines covering image quality, resolution standards, and content structure to maintain consistency.",
        },
        {
          type: "video",
          data: [{ src: "/citisquare/f-8.mp4", alt: "Product Details Page Prototype" }],
        },
        {
          type: "heading",
          data: "Usability Testing",
        },
        {
          type: "text",
          data: "Using Maze and Microsoft Clarity, I ran A/B tests on the account-creation splash modal. I conducted unmoderated testing with session recordings and tested three variations across different user groups. The results revealed a clear preference for discount-driven messaging. These insights informed the final implementation and strengthened conversion performance.",
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-9.webp", alt: "A/B Testing for Conversion" }],
        },
        {
          type: "heading",
          data: "Development Handoff",
        },
        {
          type: "text",
          data: "After handoff, I conducted a design audit during development and identified several inconsistencies in implementation, particularly with mobile responsiveness. Issues ranged from card layouts and image sizing to overflow handling and spacing inconsistencies. I worked closely with the engineer, adding annotations and detailed specifications within the design file to ensure accurate, pixel-precise execution.",
        },
        {
          type: "image",
          data: [{ src: "/citisquare/f-10.webp", alt: "Annotated Handoff" }],
        },
        {
          type: "heading",
          data: "Result and Impact",
        },
        {
          type: "text",
          data: "Within 2 weeks of launching the site redesign, the impact on our customers was evident with better  engagement rates and backlinks from popular social media apps due to increase usage of quick link sharing. The site ranked top in name search and first page in related search for SEO showing clear alignment between content and user intent.",
        },
        {
          type: "stat-grid",
          data: [
            { label: "engagement rate", value: "78%" },
            { label: "scroll depth", value: "90%" },
            { label: "avg. time spent", value: ">2mins" },
            { label: "organic social", value: "66.7%" },
          ]
        },
        { type: "divider" },
      ],
    },
    {
      id: "learnings",
      header: "Learnings",
      content: [
        {
          type: "heading",
          data: "Key Takeaways",
        },
        {
          type: "text",
          data: "Although this was a short engagement, it reinforced several important lessons:",
        },
        {
          type: "list",
          data: [
            { label: "Applying Usability Principles", value: "Evaluating design decisions and measuring against golden standard to visualize and better understand the impact of poor usability on site performance." },
            { label: "Stakeholder Collaboration", value: "Collaboration with in-house teams in a way that carries everyone along, considering the product history, finding common ground and ensuring product is maintained as intended." },
            { label: "Creating Lasting Impact", value: "Contributing to a company's design culture in a scalable way despite shorter engagement periods. Ensuring adoption of better practices for better designs." },
          ]
        },
      ],
    },
  ],
};
