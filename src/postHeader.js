import React, { useState } from "react";

export default function PostHeader(props) {
  return (
    <div className='postHeaderDiv'>
      <h3 className='postTitle'>{props.title}</h3>

      <p className='postDate'>{props.date}</p>
    </div>
  );
}