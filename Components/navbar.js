/** @format */

import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { IoChevronBackOutline } from "react-icons/io5";

const pages = [];
for (let i = 1; i <= 12; i++) {
  let set = { name: `Set ${i}`, items: [] };
  for (let j = 1; j <= 17; j++) {
    if (j > 15 && (i === 2 || i === 5 || i === 6)) {
      continue;
    } else {
      set.items.push(
        <a
          href={`/app/?set=${i}&round=${j}`}
          className='NavItem'
          key={`Set${i}/round${j}`}>
          {`Round ${j}`}
        </a>
      );
    }
  }
  pages.push(set);
}

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navItems = pages.map((page, index) => (
    <div
      className='NavItem'
      key={page.name}
      onClick={() => {
        handleNavClick(index);
      }}>
      {page.name}
    </div>
  ));
  const [items, setItems] = useState(navItems);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleNavClick = (index) => {
    setItems(pages[index].items);
    setSelectedIndex(index + 1);
  };

  return (
    <div id='navContainer'>
      <ul>
        <RiMenu5Fill
          id='menuIcon'
          color='white'
          onClick={() => {
            setVisible(!visible);
            setItems(navItems);
            setSelectedIndex(null);
          }}
        />
        <div className='navbar' id={visible ? "visible" : ""}>
          {selectedIndex !== null ? (
            <div id='navHeader'>
              <IoChevronBackOutline
                size='1.75vw'
                id='navBack'
                onClick={() => {
                  setItems(navItems);
                  setSelectedIndex(null);
                }}
              />
              <h1 style={{ fontSize: "1.2vw", margin: 0 }}>
                Set {selectedIndex}
              </h1>
            </div>
          ) : (
            <></>
          )}
          {items}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
