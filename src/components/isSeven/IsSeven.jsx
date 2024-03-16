import { useMemo } from 'react';

const IsSeven = ({ value }) => {
  console.log('isSeven is rendering');

  const chekcNumber = () => {
    console.log("chekcNumber");
    for (let i = 0; i < 600000000; i++) {
      i++;
    }
    return value === 7 ? 'Жетиге барабар' : 'Жетиге барабар эмес';
  };

  const result = useMemo(chekcNumber, [value]);

  return <div>{result}</div>;
};

export default IsSeven;
