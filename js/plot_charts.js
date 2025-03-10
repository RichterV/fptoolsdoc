function plotBA2ByAge(containerId, data) {
    var trace1 = {
        x: data.Age,
        y: data.BA2,
        mode: 'lines',
        name: 'Predicted basal area (m²)',
        line: { color: '#1f77b4', width: 3, dash: "dash" },
        hovertemplate: 
            'Age: %{x}<br>' + 
            'Basal Área: %{y:.2f} m²<br>' + 
            'Max Conf: %{customdata[0]:.2f} m²<br>' + 
            'Min Conf: %{customdata[1]:.2f} m²',
        customdata: data.BA2_max_error.map((max, i) => [max, data.BA2_min_error[i]])
    };
    

    var upperBound = data.BA2_max_error;
    var lowerBound = data.BA2_min_error;

    var trace2 = {
        x: data.Age.concat(data.Age.slice().reverse()),
        y: upperBound.concat(lowerBound.slice().reverse()),
        fill: 'toself',
        fillcolor: 'rgba(255, 20, 20, 0.2)',
        line: { color: 'rgba(255, 20, 20, 0.2)' },
        name: 'Confidence Interval',
        type: 'scatter',
        hoverinfo: 'skip'
    };

    // Linhas verdes indicando a faixa amostrada
    var sampledRange = {
        x: [1.76, 1.76, null, 6.13, 6.13], // Adiciona um "null" para que as linhas não se conectem
        y: [0, Math.max(...data.BA2) * 1.1, null, 0, Math.max(...data.BA2) * 1.1],
        mode: 'lines',
        name: 'Sampled train range',
        line: { color: 'green', width: 2, dash: "dot" }
    };

    var layout = {
        title: {
            text: "<b>Predicted Basal Area by Age (iterator: 'type-x')</b>",
            font: { size: 18 }
        },
        annotations: [
            {
                xref: 'paper',
                yref: 'paper',
                x: 0.6,
                y: 1.1,
                text: `R²: 0.8493, MAPE: 13.58% for a training with 232 plots with ages from 1.76 to 6.13 years.`,
                showarrow: false,
                font: { size: 12, color: 'black' }
            }
        ],
        xaxis: { 
            title: '<b>Age</b>',
            range: [0, Math.max(...data.Age) * 1.1], // Força o eixo X a iniciar em 0
            autorange: false // Garante que o Plotly não ajuste automaticamente
        },
        yaxis: { title: '<b>Basal Area (m²) </b>' },
        showlegend: true
    };

    Plotly.newPlot(containerId, [trace2, trace1, sampledRange], layout);
}

function plotVolumeByAge(containerId, data) {
    var trace1 = {
        x: data.Age,
        y: data.Volume,
        mode: 'lines',
        name: 'Predicted Volume (m³)',
        line: { color: '#4c993f', width: 3, dash: "dash" },
        hovertemplate: 
            'Age: %{x}<br>' + 
            'Volume: %{y:.2f} m³<br>' + 
            'Max Conf: %{customdata[0]:.2f} m³<br>' + 
            'Min Conf: %{customdata[1]:.2f} m³',
        customdata: data.Volume_max_error.map((max, i) => [max, data.Volume_min_error[i]])
    };
    

    var upperBound = data.Volume_max_error;
    var lowerBound = data.Volume_min_error;

    var trace2 = {
        x: data.Age.concat(data.Age.slice().reverse()),
        y: upperBound.concat(lowerBound.slice().reverse()),
        fill: 'toself',
        fillcolor: 'rgba(255, 20, 20, 0.2)',
        line: { color: 'rgba(255, 20, 20, 0.2)' },
        name: 'Confidence Interval',
        type: 'scatter',
        hoverinfo: 'skip'
    };

    // Linhas verdes indicando a faixa amostrada
    var sampledRange = {
        x: [1.76, 1.76, null, 6.13, 6.13], // Adiciona um "null" para que as linhas não se conectem
        y: [0, Math.max(...data.Volume) * 1.1, null, 0, Math.max(...data.Volume) * 1.1],
        mode: 'lines',
        name: 'Sampled train range',
        line: { color: 'green', width: 2, dash: "dot" }
    };

    var layout = {
        title: {
            text: "<b>Predicted Volume by Age (iterator: 'type-x')</b>",
            font: { size: 18 }
        },
        annotations: [
            {
                xref: 'paper',
                yref: 'paper',
                x: 0.6,
                y: 1.1,
                text: `R²: 0.8493, MAPE: 13.58% for a training with 232 plots with ages from 1.76 to 6.13 years.`,
                showarrow: false,
                font: { size: 12, color: 'black' }
            }
        ],
        xaxis: { 
            title: '<b>Age</b>',
            range: [0, Math.max(...data.Age) * 1.1], // Força o eixo X a iniciar em 0
            autorange: false // Garante que o Plotly não ajuste automaticamente
        },
        yaxis: { title: '<b>Volume (m³)</b>' },
        showlegend: true
    };

    Plotly.newPlot(containerId, [trace2, trace1, sampledRange], layout);
}
