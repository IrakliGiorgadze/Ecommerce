import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://i.pinimg.com/736x/1a/f0/49/1af049c5a09863dfca60b628495eb56a.jpg",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl:
            "https://img2.pngio.com/jean-jacket-club-penguin-rewritten-wiki-fandom-jacket-animated-png-1859_1375.png",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "http://clipart-library.com/img1/774239.png",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl:
            "https://i.pinimg.com/564x/15/7c/aa/157caab6a7704f2e221344f4613063a5.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl:
            "https://hips.hearstapps.com/ell.h-cdn.co/assets/17/11/480x363/odnxzi9puni2vrmjly8b.jpg?resize=480:*",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
