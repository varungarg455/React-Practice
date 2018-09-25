import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  /* 
    This lifecycle method is used when we have
    props passed from the parent component and 
    we need to derive data from the props and make 
    changes to out state object.
    Whenever the props change, then this method
    will render again and make the changes in the state object.
    Also this is static so that it will maintain only one
    copy of this method for all the classes.
  */
  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return { photos };
  }
  /* 
    We have used handleIndexClick as an arrow function,
    as arrow functions retain the context of the 'this'
    keyword.
  */
  handleIndexClick = event => {
    this.setState({
      //'+' sign is used to coerce the dataset.index to number
      active: +event.target.dataset.index
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line */
            <img
              data-index={index}
              key={photo.value}
              src={photo.value}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
