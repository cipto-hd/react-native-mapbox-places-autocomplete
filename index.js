import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import usePlacesAutocomplete from "./utils/usePlacesAutocomplete";
import { mapboxLogoUri, closeBtnUri } from "./images";

/**
 * Main Component
 */
const MapboxPlacesAutocomplete = ({
  id = "",
  inputStyle,
  containerStyle,
  inputClassName = "",
  containerClassName = "",
  placeholder = "Address",
  accessToken = "",
  onPlaceSelect,
  countryId = "de",
  onClearInput,
}) => {
  const placesAutocomplete = usePlacesAutocomplete("", accessToken, countryId);
  if (id === "" || typeof id !== "string")
    throw new Error(
      "[MapboxPlacesAutocomplete] Property `id` is required and must be a string."
    );

  return (
    <View
      style={[styles.container, containerStyle]}
      className={containerClassName}
    >
      <TextInput
        {...{ ...placesAutocomplete, placeholder }}
        style={[styles.input, inputStyle]}
        className={inputClassName}
      />
      {placesAutocomplete.value && (
        <TouchableOpacity
          style={styles.clearBtn}
          onPress={() => {
            placesAutocomplete.setValue("");
            onClearInput({ id }); // tell the consumer about which input is cleared
          }}
        >
          <Image source={closeBtnUri} style={styles.clearBtnImage} />
        </TouchableOpacity>
      )}
      {placesAutocomplete.suggestions?.length > 0 &&
        placesAutocomplete.value && (
          <PlaceSuggestionList {...{ placesAutocomplete, onPlaceSelect }} />
        )}
    </View>
  );
};

/** Place Suggestion List below text input */
const PlaceSuggestionList = ({ placesAutocomplete, onPlaceSelect }) => {
  return (
    <View style={styles.suggestionList}>
      {placesAutocomplete.suggestions.map((suggestion, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              placesAutocomplete.setValue(suggestion.place_name);
              placesAutocomplete.setSuggestions([]);
              onPlaceSelect && onPlaceSelect(suggestion);
            }}
          >
            <Text style={styles.suggestionItem}>{suggestion.place_name}</Text>
          </TouchableOpacity>
        );
      })}
      <View style={styles.creditBox}>
        <Text style={styles.creditText}>
          powered by <Text style={{ fontWeight: "bold" }}>Mapbox</Text>
        </Text>
        <Image source={mapboxLogoUri} style={styles.creditImage} />
      </View>
    </View>
  );
};

export default MapboxPlacesAutocomplete;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    position: "relative",
    height: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "#374151",
    backgroundColor: "#e5e7eb",
    paddingLeft: 5,
    paddingRight: 28,
    paddingVertical: 1,
    borderRadius: 4,
    fontSize: 14,
    width: "100%",
  },
  clearBtnImage: { width: 20, height: 20 },
  clearBtn: { position: "absolute", top: 6, right: 5 },
  suggestionList: {
    position: "absolute",
    zIndex: 100,
    paddingHorizontal: 5,
    backgroundColor: "#f9fafb",
    borderRadius: 4,
    marginHorizontal: 2,
    top: 32,
    left: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  suggestionItem: {
    color: "#374151",
    fontWeight: "300",
    fontSize: 12,
    borderBottomWidth: 0.3,
    borderBottomColor: "#9ca3af",
    marginTop: 2,
  },
  creditBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 4,
  },
  creditText: {
    color: "#6b7280",
    fontWeight: "400",
    fontSize: 12,
    padding: 2,
  },
  creditImage: { width: 16, height: 16, marginLeft: 2 },
});
