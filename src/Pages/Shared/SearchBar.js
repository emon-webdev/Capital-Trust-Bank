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
          <MenuButton className="btnClass">
            <BsSearch></BsSearch>
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem className="btnClass">
                <Input type="text" placeholder="Search" />
                <div className="btnClass">
                  <BsSearch></BsSearch>
                </div>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default SearchBar;
