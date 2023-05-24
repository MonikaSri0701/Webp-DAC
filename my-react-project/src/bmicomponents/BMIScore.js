import React from 'react';

export default function BMIScore({ Mybmi, bmiType }) {
  return (
    <div>
      BMIScore: {Mybmi} <br />
      BMIType: {bmiType}
    </div>
  );
}
