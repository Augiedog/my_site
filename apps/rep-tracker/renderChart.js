let colors = [
    'rgba(255, 99, 132, 1)',
    'rgb(98,255,125,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]

function renderChart(reps, name = "Reps") {
    let chartContainer = document.createElement('div')
    let chart = document.createElement('canvas')
    chartContainer.append(chart)
    chartContainer.style.width = '50vw'
    let color = colors.shift()
    colors.push(color)
    document.body.append(chartContainer)
    new Chart(chart.getContext('2d'), {
        type: 'line',
        data: {
            labels: reps.map((_, i) => i + 1),
            datasets: [{
                fill: true,
                tension: 0.5,
                label: name,
                data: reps,
                backgroundColor: [
                   color
                ],
                borderColor: [
                   color
                ],
                borderWidth: 1
            }]
        }
    })
}