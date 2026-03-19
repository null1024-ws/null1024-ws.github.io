const targetSVG =
  "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

// Add cities here. The map and list update automatically after deploy.
const cities = [
  {
    title: "Singapore",
    country: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198
  },
  {
    title: "Montreal",
    country: "Canada",
    latitude: 45.5017,
    longitude: -73.5673
  },
  {
    title: "Calgary",
    country: "Canada",
    latitude: 51.0447,
    longitude: -114.0719
  },
  {
    title: "Shanghai",
    country: "China",
    latitude: 31.2304,
    longitude: 121.4737
  },
  {
    title: "Beijing",
    country: "China",
    latitude: 39.9042,
    longitude: 116.4074
  },
  {
    title: "Nanjing",
    country: "China",
    latitude: 32.0603,
    longitude: 118.7969
  },
  {
    title: "Tokyo",
    country: "Japan",
    latitude: 35.6762,
    longitude: 139.6503
  },
  {
    title: "Lianyungang",
    country: "China",
    latitude: 34.5967,
    longitude: 119.2229
  },
  {
    title: "Xuzhou",
    country: "China",
    latitude: 34.2044,
    longitude: 117.2858
  },
  {
    title: "Zhenjiang",
    country: "China",
    latitude: 32.1878,
    longitude: 119.4250
  },
  {
    title: "Guiyang",
    country: "China",
    latitude: 26.6470,
    longitude: 106.6302
  },
  {
    title: "Zhangjiajie",
    country: "China",
    latitude: 29.1171,
    longitude: 110.4792
  },
  {
    title: "Xi'an",
    country: "China",
    latitude: 34.3416,
    longitude: 108.9398
  },
  {
    title: "Lanzhou",
    country: "China",
    latitude: 36.0611,
    longitude: 103.8343
  },
  {
    title: "Guangzhou",
    country: "China",
    latitude: 23.1291,
    longitude: 113.2644
  },
  {
    title: "Chongqing",
    country: "China",
    latitude: 29.4316,
    longitude: 106.9123
  },
  {
    title: "Hefei",
    country: "China",
    latitude: 31.8206,
    longitude: 117.2272
  }
];

// Add visited countries here using ISO country codes.
const visitedCountries = ["SG", "CA", "CN", "JP"];

if (window.AmCharts) {
  const mapCities = cities.map((city) => ({
    ...city,
    zoomLevel: 5,
    scale: 0.5,
    svgPath: targetSVG
  }));

  AmCharts.makeChart("travelmap", {
    type: "map",
    projection: "mercator",
    theme: "light",
    imagesSettings: {
      rollOverColor: "#284952",
      rollOverScale: 2.4,
      selectedScale: 2.4,
      selectedColor: "#284952",
      color: "#284952"
    },
    areasSettings: {
      autoZoom: true,
      unlistedAreasColor: "#ede5d8",
      outlineThickness: 0.8,
      color: "#d6d0c7",
      colorSolid: "#d6d0c7",
      selectedColor: "#aab7bd",
      outlineColor: "#c0b8ac",
      rollOverColor: "#e2ddd4",
      rollOverOutlineColor: "#c0b8ac"
    },
    dataProvider: {
      map: "worldHigh",
      getAreasFromMap: true,
      images: mapCities,
      areas: visitedCountries.map((id) => ({
        id,
        showAsSelected: true
      }))
    },
    export: {
      enabled: false
    }
  });
}
