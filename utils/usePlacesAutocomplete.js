import { useState } from "react";

const usePlacesAutocomplete = (initialValue, accessToken, countryId) => {
  const [value, setValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (inputText) => {
    setValue(inputText);

    try {
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=${accessToken}&country=${countryId}&autocomplete=true`;
      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error) {
      console.log("Error fetching data, ", error);
    }
  };

  return {
    value,
    onChangeText: handleChange,
    setValue,
    suggestions,
    setSuggestions,
  };
};

export default usePlacesAutocomplete;
