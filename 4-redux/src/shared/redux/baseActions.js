// Base actions
export const request = type => ({
  type
});

export const success = (type, payload = {}) => ({
  type,
  payload
});

export const error = type => ({
  type
});
