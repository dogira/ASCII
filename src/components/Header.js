import React from 'react';
import './Header.css';

const Header = () => {
  const pushed = [];
  const items = {
    uno: {
      name: 'github',
      link: 'https://github.com'
    },
    dos: {
      name: 'code',
      link: 'https://github.com/dogira/ascii'
    }
  }

  Object.values(items).forEach(item => pushed.push(<em><a href="{item.link}" rel="noreferrer" target="_blank">{item.name}</a> -- </em>));

  let last = pushed.pop()["props"]["children"][0]; // Jerry rigged the fuck out of this

  return (
    <div>
      <h4>dogira.eth</h4>
      <div class="row">
        <p class="items">
          {pushed.splice(0, pushed.length)}{last}
        </p>
      </div>
    </div>
  );
}

export default Header;

