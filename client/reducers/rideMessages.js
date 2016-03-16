export function handleMessages(state, action) {
  switch (action.type) {
    case 'REQUEST_MESSAGES':
      return requestMessages(state, action);
    case 'RECEIVE_MESSAGES':
      return receiveMessages(state, action);
    case 'REQUEST_MESSAGES_ERROR':
      return requestMessagesError(state, action);
    case 'ADD_MESSAGE':
      return addMessage(state, action);
  }

  return state;
}

function requestMessages(state, action) {
  let updates = {
    isFetchingMessages: true,
  };

  return state.merge(updates);
};

function receiveMessages(state, action) {
  let updates = {
    isFetchingMessage: false,
    messages: action.entry,
  };

  return state.merge(updates);
}

function requestMessagesError(state, action) {
  let updates = {
    isFetchingMessages: false,
    messagesFetchError: action.entry,
  };

  return state.merge(updates);
}

function addMessage(state, action) {
  let old = state.toJS().messages;
  old.push(action.entry);
  let updates = {
    isFetchingMessages: false,
    messages: old,
  };

  console.log('new message list:', old);

  return state.merge(updates);
}
