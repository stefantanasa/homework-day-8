import React from "react";

const OneCard = (props) => {
  // componentDidMount = async () => {
  //   try {
  //     let response = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwOWZmNTRjZmY1ZjAwMTU5MGJkYWUiLCJpYXQiOjE2NTA2MzkyOTAsImV4cCI6MTY1MTg0ODg5MH0.7Nkan4-wzQ92nOq0FpNIvxiCPAJYIAQpdk2j0qrDOMg",
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       response = await response.json();
  //       this.setState({
  //         ...this.state.data,
  //         data: response,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div className="one-card" onClick={() => props.selectBook(props.asin)}>
        <img className="one-card-image" alt="" src={props.image} />
        <p className="product-title">{props.title}</p>
        <p className="product-category ">{props.category}</p>
      </div>

      <div className="under-card ">
        <div className="offer">
          <div>
            <ion-icon name="cart-outline" style={{ height: "20px" }}></ion-icon>
          </div>
          <p>BUY NOW</p>
        </div>
        <div className="product-price">
          <div>${props.price}</div>
        </div>
      </div>

      {/* <CommentArea
          asin={this.props.asin}
          isSelected={this.state.isSelected}
        /> */}
    </div>
  );
};

export default OneCard;
