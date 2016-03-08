// action creators for changing view state

export function drive(willDrive) {
  return {
    type: 'SET_DRIVER',
    entry: willDrive,
  };
};

export function ride(willRide) {
  return {
    type: 'SET_RIDER',
    entry: willRide,
  };
};
