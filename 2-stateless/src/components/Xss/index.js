import React, { Component } from 'react';
import serialize from 'serialize-javascript';

const response = [
  {
    id: 1,
    title: 'Post 1',
    body: '<p>This is the <strong>post 1</strong></p>'
  },
  {
    id: 2,
    title: 'Post 2',
    body: '<p>Alert: <script>alert(1);</script></p>'
  },
  {
    id: 3,
    title: 'Post 3',
    body: `
      <p>
        <img onmouseover="alert('This site is not secure')" src="attack.jpg" />
      </p>
    `
  }
];

const initialState = serialize(response);

const removeXSSAttacks = html => {
  const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }

  // Removing all events from tags...
  html = html.replace(/ on\w+="[^"]*"/g, '');

  return {
    __html: html
  }
};

class Xss extends Component {
  render() {
    const posts = JSON.parse(initialState);

    return (
      <div className="Xss">
        {posts.map((post, key) => (
          <div key={`post-${key}`}>
            <h2>{post.title}</h2>
            <p dangerouslySetInnerHTML={removeXSSAttacks(post.body)} />
          </div>
        ))}
      </div>
    );
  }
}

export default Xss;
