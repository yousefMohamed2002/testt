const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',

    data: {
      labels: ['Lotus', 'DarMasr', 'New Capital', 'Zad', 'October', 'NasrCity'],
      datasets: [{
        label: 'N Of Sold Units',
        data: [100, 200, 300, 500, 220, 300],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
          
        }
      }
    }
  });