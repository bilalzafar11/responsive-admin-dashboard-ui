// 📈 Line Chart – Shows sales for each day of the week
const lineCanvas = document.getElementById("lineChart")?.getContext("2d");

if (lineCanvas) {
  new Chart(lineCanvas, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Sales",
        data: [120, 190, 300, 250, 320, 280, 350],
        fill: true,
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        borderColor: "#3498db",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#3498db"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }, // Hide chart legend
        tooltip: {
          mode: "index",
          intersect: false // Show tooltip even if cursor not exactly on point
        }
      },
      interaction: {
        mode: "nearest", // Nearest point interaction
        axis: "x",
        intersect: false
      },
      scales: {
        y: {
          beginAtZero: true, // Y-axis starts at 0
          ticks: {
            stepSize: 50 // Interval between ticks
          }
        }
      }
    }
  });
}

// 🥧 Pie Chart – Shows user device usage share
const pieCanvas = document.getElementById("pieChart")?.getContext("2d");

if (pieCanvas) {
  new Chart(pieCanvas, {
    type: "pie",
    data: {
      labels: ["Mobile", "Desktop", "Tablet"],
      datasets: [{
        label: "Users",
        data: [55, 30, 15], // Percentage share
        backgroundColor: [
          "#1abc9c",  // Mobile
          "#3498db",  // Desktop
          "#9b59b6"   // Tablet
        ],
        borderColor: "#fff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom", // Legend shown below chart
          labels: {
            boxWidth: 14,
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label}: ${context.parsed}%`
          }
        }
      }
    }
  });
}

// 🌗 Theme Toggle – Switch between light and dark mode
const themeToggleBtn = document.getElementById("themeToggle");

if (themeToggleBtn) {
  // Apply saved theme if available
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark");
  }

  // Change theme when button is clicked
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save the selected theme to local storage
    const activeTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", activeTheme);
  });
}
