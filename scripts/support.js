const countryDropdown = document.getElementById('country');

    // Open Source API Implementation from remote site
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                countryDropdown.appendChild(option);
            });
        })
        .catch(error => console.error("Error fetching country data:", error));