import React from "react";

export const Li = (props) => {
  const { index, children } = props;

  return (
    <>
      <tr
        key={index}
        id={index}
      >
        <td >
          {children}
        </td>
      </tr>
    </>
  );
};
