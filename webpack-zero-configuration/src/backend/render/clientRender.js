import html from './html';

import initialState from './initialState';

export default function clientRender() {
  return (req, res) => res.send(html({
    title: 'Dev Education',
    initialState: initialState(req)
  }));
}
