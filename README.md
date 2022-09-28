<a href="https://www.npmjs.com/package/react-native-mapbox-places-autocomplete">
  <img alt="npm version" src="https://img.shields.io/npm/v/react-native-mapbox-places-autocomplete"/>
</a>

# Mapbox Search Component for React Native

**Customizable Mapbox Places autocomplete component for iOS and Android React-Native apps**

## Preview

![](https://raw.githubusercontent.com/cipto-hd/react-native-mapbox-places-autocomplete/master/images/screenshot.png)

## Support

Buy me a coffe at:

[BuyMeACoffee](https://www.buymeacoffee.com/cipto)

[Saweria](https://saweria.co/ciptohadi)

## Installation

**Step 1.**

```
npm install react-native-mapbox-places-autocomplete --save
```

or

```
yarn add react-native-mapbox-places-autocomplete
```

**Step 2.**

Get your [Mapbox Public Token](https://account.mapbox.com/auth/signup/)

## Basic Example

**Basic Address Search**

```js
import React from "react";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";

const MapboxPlacesInput = () => {
  return (
    <MapboxPlacesAutocomplete
      placeholder="Origin"
      accessToken={APIKEY}
      onPlaceSelect={(data) => {
        console.log(data);
      }}
      countryId="id"
    />
  );
};

export default MapboxPlacesInput;
```

## Changelog

Please see the [releases](https://github.com/cipto-hd/react-native-mapbox-places-autocomplete/releases) tab for the changelog information.

## License

[MIT](LICENSE)

### Authors

- [Cipto Hadi](https://www.twitter.com/cipto_hd)
