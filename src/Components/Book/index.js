import React from 'react';

const Book = (props) => {
  return (
    <div className="content-links">
      <button onClick={() => {
        props.setContact(true)
      }} className={props.contact ? "sub-links-highlighted" : "sub-links"}>CONTACT</button>
    </div>
  );
}

export default Book;
