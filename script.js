// Function to perform insertion sort
function insertionSort(arr) {
    const start = performance.now(); // Measure start time
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    const end = performance.now(); // Measure end time
    return end - start; // Return execution time
}

// Function to generate data for time complexity plot
function generateData(start, end, step) {
    const data = [];
    for (let size = start; size <= end; size += step) {
        const arr = Array.from({ length: size }, () => Math.floor(Math.random() * size));
        const time = insertionSort(arr);
        data.push({ size, time });
    }
    return data;
}

// Function to plot the time complexity chart
function plotChart(data) {
    const labels = data.map(item => item.size);
    const times = data.map(item => item.time);

    const ctx = document.getElementById('timeComplexityChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Time Complexity (ms)',
                data: times,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Input Size (n)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Time (ms)'
                    }
                }
            }
        }
    });
}

function addSize() {
    
    const inputElement = document.getElementById('sizeInput');
    const elementSize = inputElement.value;
    console.log("Entered size of the element is" + elementSize)

    const data = generateData(100, elementSize, 100); // Generate data for array sizes from 100 to 1000 with step 100
    plotChart(data);
}


