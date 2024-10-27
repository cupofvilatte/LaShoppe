const countryDropdown = document.getElementById('country');

    // Fetch country data from the REST Countries API
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Populate the dropdown with country options
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common; // Set the value to the common name
                option.textContent = country.name.common; // Display the common name
                countryDropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching country data:", error));