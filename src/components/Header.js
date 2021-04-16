import React from 'react';
import './Header.css';

const Header = () => {
  const pushed = [];
  const items = {
    uno: {
      name: 'github',
      link: 'https://github.com/dogira'
    },
    dos: {
      name: 'code',
      link: 'https://github.com/dogira/ascii'
    }
  }

  Object.values(items).forEach(item => pushed.push(<em><a class="item" href={item.link} rel="noreferrer" target="_blank">{item.name}</a> -- </em>));

  let last = pushed.pop()["props"]["children"][0]; // Jerry rigged the fuck out of this

  return (
    <ul class="box">
      <li class="title">dogira.eth</li>
      <li class="items">
        {pushed.splice(0, pushed.length)}{last}
      </li>
    </ul>
  );
}

export default Header;

