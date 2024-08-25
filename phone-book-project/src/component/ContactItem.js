import React from 'react';

const ContactItem = ({item}) => {
  return (
    <div className="contact-item">
      <img width="60"
           src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
           alt="연락처 사진"
      />
      <div className="item-info">
        <div className="info-name">{item.name}</div>
        <div className="info-number">{item.phoneNumber}</div>
      </div>
    </div>
  );
};

export default ContactItem;