// action creators for changing view state

export function isDriver(willDrive) {
  return {
    type: 'SET_DRIVER',
    entry: willDrive,
  };
};

export function isRider(willRide) {
  return {
    type: 'SET_RIDER',
    entry: willRide,
  };
};

export function displaySettings(bool) {
  return {
    type: 'DISPLAY_SETTINGS',
    entry: bool,
  };
};
