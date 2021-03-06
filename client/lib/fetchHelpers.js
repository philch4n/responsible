
export const headers = {
  'Content-Type': 'application/json',
};

export function json(response) {
  return response.json();
}

export function checkStatus(response) {
  if (response.status === 418 || (response.status >= 200 && response.status < 300)) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}
