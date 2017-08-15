import React, { Component } from 'react';
import vendors from '../data/vendors';
import avatarPhoto from '../assets/img/teacup.jpg';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Email</MenuItem>
    <MenuItem>Website</MenuItem>
  </IconMenu>
);

class Vendors extends Component {
  render() {
    return (
      <List style={{ width: '75%', marginLeft: '10%' }}>
        <Subheader>Vendor List</Subheader>
        {vendors.map(vendor => {
          return <div>
            <ListItem
              leftAvatar={<Avatar src={avatarPhoto} />}
              rightIconButton={rightIconMenu}
              primaryText={vendor.name}
              secondaryText={
                <p>
                  <span style={{ color: darkBlack }}>{vendor.website}</span> {vendor.description} -- {vendor.category}
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
          </div>;
        })
        };
      </List>
    );
  }

}

export default Vendors;