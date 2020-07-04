import React from 'react';

const BookSidebar = (props) => {
  return (
    <div className="content-links">
      <button onClick={() => {
        props.setSchedule(true)
        props.setContact(false)
      }} className={props.schedule ? "sub-links-highlighted" : "sub-links"}>SCHEDULE</button>
      <button onClick={() => {
        props.setSchedule(false)
        props.setContact(true)
      }} className={props.contact ? "sub-links-highlighted" : "sub-links"}>CONTACT</button>
    </div>
  );
}

export default BookSidebar;
