
export function requestPair() {
  // do we dispatch the pair request here?
  return {
    type: 'REQUEST_PAIR',
  };
};

export function receivePair(userId) {
  return {
    type: 'RECEIVE_PAIR',
    entry: userId,
  };
};
