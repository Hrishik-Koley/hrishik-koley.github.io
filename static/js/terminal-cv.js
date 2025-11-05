const input = document.getElementById("input")
const output = document.getElementById("output")
const terminal = document.getElementById("terminal")

let commandData = {
  cv: {
    description: "View CV sections",
    sections: {
      education: {
        description: "Display education history",
        item: [
          {
            institution: "Indian Statistical Institute, Bangalore Centre",
            status: "Pursuing M.Math",
            timeline: "2025 - 2027",
          },
          {
            institution: "Indian Statistical Institute, Bangalore Centre",
            status: "Obtained B.Math (Hons.)",
            timeline: "2022 - 2025",
          },
          {
            institution: "Burdwan Municipal Boys High School",
            status: "Passed WBCHSE",
            timeline: "2020 - 2022",
          },
          {
            institution: "St.Xavier's School, Burdwan",
            status: "Passed ICSE",
            timeline: "2009 - 2020",
          },
        ],
      },
      research: {
        description: "Research Work",
        items: [
          {
            title: "The Median of Sierpinski Triangle Graphs",
            link: "https://arxiv.org/abs/2408.12783",
            status: "Submitted to Discrete Applied Mathematics",
          },
        ],
      },
      conferences: {
        description: "Conferences Attended",
        items: [
          {
            title:
              "ICECA 2025: International Conference on Enumerative Combinatorics and Applications",
            timeline: "25-27 August, 2025",
            organizers: "Toufik Mansour, Ron Adin, and others",
          },
          {
            title: "AlCoVE 2025: an Algebraic Combinatorics Virtual Expedition",
            timeline: "29-30 May, 2025",
            organizers:
              "Laura Colmenarejo, Maria Gillespie, Oliver Pechenik, and Liam Solus",
          },
          {
            title: "AlCoVE 2024: an Algebraic Combinatorics Virtual Expedition",
            timeline: "17-18 June, 2024",
            organizers:
              "Laura Colmenarejo, Maria Gillespie, Oliver Pechenik, and Liam Solus",
          },
          {
            title: "Workshop III: Statistical Mechanics Beyond 2D",
            timeline: "6-10 May, 2024",
            organizers: "IPAM, UCLA",
          },
        ],
      },
      projects: {
        description: "All Projects",
        items: [
          {
            title: "Geometric Packings",
            advisor: "Prof. Arindam Khan",
            timeline: "July, 2025 -- Present",
          },
          {
            title: "Extremal Graph Theory",
            advisor: "Prof. Mathew C. Francis",
            timeline: "May, 2025 -- August, 2025",
          },
          {
            title: "Fault-Free Tilings",
            advisor: "Prof. Samrith Ram",
            timeline: "March, 2025 -- Present",
          },
          {
            title: "Random Lozenge Tilings",
            advisor: "Prof. Nishant Chandgotia",
            timeline: "January, 2025 -- Present (On Halt)",
          },
          {
            title: "Zero-Sum Theory",
            advisor: "Prof. Eshita Mazumdar",
            timeline: "November, 2024 -- January, 2025",
          },
          {
            title: "Algebraic Combinatorics and Tilings",
            advisor: "Prof. Samrith Ram",
            timeline: "May, 2024 -- February, 2025",
          },
          {
            title: "Structural Graph Theory",
            advisor: "Prof. Nishad Kothari",
            timeline: "May, 2024 -- July, 2024",
          },
          {
            title:
              "Hanoi Graphs, Sierpinski Graphs, and Sierpinski Triangle Graphs",
            advisor: "Dr. Divya Sindhu Lekha",
            timeline: "June, 2023 -- August, 2023",
          },
          {
            title:
              "On the Relationship of Emotional Intelligence and Group Work Results of University Students",
            advisor: "Prof. Rituparna Sen",
            timeline: "January, 2023 -- April, 2023",
          },
        ],
      },
      conferences: {
        description: "Conferences Attended",
        items: [
          {
            title:
              "ICECA 2025: International Conference on Enumerative Combinatorics and Applications",
            timeline: "25-27 August, 2025",
            organizers: "Toufik Mansour, Ron Adin, and others",
          },
          {
            title: "AlCoVE 2025: an Algebraic Combinatorics Virtual Expedition",
            timeline: "29-30 May, 2025",
            organizers:
              "Laura Colmenarejo, Maria Gillespie, Oliver Pechenik, and Liam Solus",
          },
          {
            title: "AlCoVE 2024: an Algebraic Combinatorics Virtual Expedition",
            timeline: "17-18 June, 2024",
            organizers:
              "Laura Colmenarejo, Maria Gillespie, Oliver Pechenik, and Liam Solus",
          },
          {
            title: "Workshop III: Statistical Mechanics Beyond 2D",
            timeline: "6-10 May, 2024",
            organizers: "IPAM, UCLA",
          },
        ],
      },
    },
  },
  activities: {
    description: "View activities",
    sections: {},
  },
  help: {
    description: "Show available commands",
  },
  clear: {
    description: "Clear terminal screen",
  },
}

output.textContent = ""
const logo = document.createElement("div")
logo.className = "minecraft-logo"
logo.textContent = "TERMINAL CV"
output.appendChild(logo)
output.appendChild(
  document.createTextNode("\nType 'help' to see available commands.\n")
)

function formatResearch(data) {
  return data.item
    .map(
      item => `Title: ${item.title}\nLink: ${item.Link}\nStatus: ${item.Status}`
    )
    .join("\n\n")
}

function handleSection(type, section) {
  const data = commandData[type]?.sections[section]
  if (!data)
    return `Section '${section}' not found. Available sections: ${Object.keys(
      commandData[type].sections
    ).join(", ")}`
  if (section === "education")
    return "Type 'education' to view education details"
  if (section === "projects") return "Type 'projects' to view project list"
  if (section === "research") return formatResearch(data)

  return typeof data === "string" ? data : JSON.stringify(data, null, 2)
}

const commands = {
  help: () => {
    if (!commandData) return "Loading commands..."
    let help = "Available commands:\n\n"
    Object.entries(commandData).forEach(([cmd, data]) => {
      help += `${cmd} - ${data.description}\n`
    })
    return help
  },

  cv: () => {
    if (!commandData?.cv) return "CV data not loaded."
    return (
      "Available sections:\n" +
      Object.keys(commandData.cv.sections).join(", ") +
      "\n\nType any of these commands: 'education', 'research', 'projects', 'conferences'"
    )
  },

  research: num => {
    if (!commandData?.cv?.sections?.research) return "Research data not loaded."
    const research = commandData.cv.sections.research.items

    if (!num) {
      return (
        research.map((r, i) => `${i + 1}. ${r.title}`).join("\n") +
        "\n\nType 'research <number>' for details"
      )
    }

    const item = research[parseInt(num) - 1]
    if (!item) return "Invalid number"

    return `Title: ${item.title}\nStatus: ${item.status}\nLink: ${item.link}`
  },

  conferences: num => {
    if (!commandData?.cv?.sections?.conferences)
      return "Conferences data not loaded."
    const conferences = commandData.cv.sections.conferences.items

    if (!num) {
      return (
        conferences.map((c, i) => `${i + 1}. ${c.title}`).join("\n") +
        "\n\nType 'conferences <number>' for details"
      )
    }

    const conference = conferences[parseInt(num) - 1]
    if (!conference) return "Invalid number"

    return `Title: ${conference.title}\nTimeline: ${conference.timeline}\nOrganizers: ${conference.organizers}`
  },

  projects: num => {
    if (!commandData?.cv?.sections?.projects) return "Projects data not loaded."
    const projects = commandData.cv.sections.projects.items

    if (!num) {
      return (
        projects.map((p, i) => `${i + 1}. ${p.title}`).join("\n") +
        "\n\nType 'projects <number>' for details"
      )
    }

    const project = projects[parseInt(num) - 1]
    if (!project) return "Invalid project number"

    return `Title: ${project.title}\nAdvisor: ${project.advisor}\nTimeline: ${project.timeline}`
  },

  education: num => {
    if (!commandData?.cv?.sections?.education)
      return "Education data not loaded."
    const educationList = commandData.cv.sections.education.item

    if (!num) {
      return (
        educationList.map((p, i) => `${i + 1}. ${p.institution}`).join("\n") +
        "\n\nType 'education <number>' for details"
      )
    }

    const education = educationList[parseInt(num) - 1]
    if (!education) return "Invalid number"

    return `Institution: ${education.institution}\nStatus: ${education.status}\nTimeline: ${education.timeline}`
  },

  clear: () => {
    output.textContent = ""
    return ""
  },
}

input.addEventListener("keydown", e => {
  console.log("Keydown event triggered")
  try {
    if (e.key === "Enter") {
      const command = input.value.trim()
      const parts = command.split(" ")
      const baseCommand = parts[0].toLowerCase()
      const sectionArg = parts.slice(1).join(" ").toLowerCase()
      input.value = ""
      output.textContent += `> ${command}\n`

      if (commands[baseCommand]) {
        const response = commands[baseCommand](sectionArg)
        output.textContent += response + "\n"
      } else {
        output.textContent +=
          'Invalid command. Type "help" for a list of commands.\n'
      }
      terminal.scrollTop = terminal.scrollHeight
    }
  } catch (error) {
    output.textContent += `\n[ERROR] ${error.stack}\n`
  }
})
