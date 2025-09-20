// src/data/caseStudies.js

export const caseStudies = {
  "skyline-towers": {
    title: "Skyline Towers",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    summary:
      "Skyline Towers redefines urban luxury with sustainable design, advanced engineering, and breathtaking city views.",
    timeline: [
      { date: "2019", event: "Concept & Design Phase" },
      { date: "2020", event: "Groundbreaking Ceremony" },
      { date: "2021", event: "Structural Completion" },
      { date: "2022", event: "Interior Finishing & Landscaping" },
      { date: "2023", event: "Grand Opening" },
    ],
    performance: [
      { metric: "Energy Efficiency", value: 92 },
      { metric: "Resident Satisfaction", value: 87 },
      { metric: "Safety Standards", value: 95 },
    ],
    pdf: "/pdfs/skyline-towers.pdf", // place PDF in public/pdfs folder
  },

  "harbor-bridge": {
    title: "Harbor Bridge",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    summary:
      "An engineering marvel, Harbor Bridge connects two major cities while withstanding extreme weather conditions.",
    timeline: [
      { date: "2018", event: "Feasibility Study" },
      { date: "2019", event: "Design Approval" },
      { date: "2020", event: "Foundation Work" },
      { date: "2021", event: "Main Structure Completed" },
      { date: "2022", event: "Final Safety Tests & Opening" },
    ],
    performance: [
      { metric: "Durability", value: 98 },
      { metric: "Traffic Capacity", value: 85 },
      { metric: "Environmental Impact", value: 75 },
    ],
    pdf: "/pdfs/harbor-bridge.pdf",
  },

  "green-horizon": {
    title: "Green Horizon",
    image: "https://images.unsplash.com/photo-1526401485004-2fa806b5c9ae",
    summary:
      "A revolutionary eco-community featuring solar-powered homes, green spaces, and smart water recycling systems.",
    timeline: [
      { date: "2020", event: "Initial Planning & Approvals" },
      { date: "2021", event: "Eco-material Procurement" },
      { date: "2022", event: "Construction Phase" },
      { date: "2023", event: "Smart System Installations" },
      { date: "2024", event: "Community Launch" },
    ],
    performance: [
      { metric: "Carbon Footprint Reduction", value: 88 },
      { metric: "Resident Engagement", value: 80 },
      { metric: "Sustainability Rating", value: 93 },
    ],
    pdf: "/pdfs/green-horizon.pdf",
  },
};
