import React, { useState } from "react";

export default function PostDesc(props) {
  return (
    <div className='postDescDiv'>
      <p className='postDesc'>{props.desc}</p>
    </div>
  );
}