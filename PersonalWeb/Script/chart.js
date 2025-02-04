const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "مهارت‌ها",
        data: [
          { x: 1, y: 100 }, // HTML
          { x: 2, y: 90 }, // CSS
          { x: 3, y: 80 }, // JavaScript
          { x: 4, y: 60 }, // Node.js
          { x: 5, y: 90 }, // Bootstrap
          { x: 6, y: 90 }, // Tailwind CSS
        ],
        backgroundColor: "rgb(118, 174, 238)",
        borderColor: "rgb(22, 57, 250)",
        borderWidth: 3,
        pointStyle: "circle",
        pointRadius: 12,
        pointHoverRadius: 15,
        showLine: true,
        lineTension: 0.4,
        fill: false,
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500,
      easing: "easeInOutCubic",
      onComplete: function () {
        this.data.datasets[0].data.forEach((dataPoint, index) => {
          const ctx = this.ctx;
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.font = "bold 12px Arial";
          ctx.fillText(dataPoint.y + "%", dataPoint.x, dataPoint.y - 10);
        });
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          color: "#333",
          font: {
            size: 16,
            weight: "bold",
            family: "Arial",
          },
        },
        ticks: {
          color: "#333",
          callback: function (value) {
            return [
              "HTML",
              "CSS",
              "JavaScript",
              "Node.js",
              "Bootstrap",
              "Tailwind CSS",
            ][value - 1];
          },
        },
      },
      y: {
        title: {
          display: true,
          color: "#333",
          font: {
            size: 16,
            weight: "bold",
            family: "Arial",
          },
        },
        ticks: {
          beginAtZero: true,
          max: 100,
          color: "#333",
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderColor: "rgba(74, 144, 226, 1)",
        borderWidth: 2,
        callbacks: {
          title: function (tooltipItem) {
            return [
              "مهارت: ",
              [
                "HTML",
                "CSS",
                "JavaScript",
                "Node.js",
                "Bootstrap",
                "Tailwind CSS",
              ][tooltipItem[0].dataIndex],
            ];
          },
          label: function (tooltipItem) {
            return `درصد: ${tooltipItem.raw.y}%`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  },
});
