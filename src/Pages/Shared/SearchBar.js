import {
  Input,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="searchbar">
        <Menu>
          <MenuButton className="input">
            <BsSearch></BsSearch>
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem className="input">
                <Input type="text" placeholder="Search" />
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default SearchBar;
