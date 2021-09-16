window.function = function (lat, long) {
  lat = lat.value ?? 0;
  long = long.value ?? 0;

  return lat + "," + long;
};
