import { SetStateAction } from 'react';
// : {
//   tags: string[];
//   setTags: (value: SetStateAction<string[]>) => void;
//   setValueFn: (fieldName: string, value: { set: string[] }) => void;
//   fieldValueName: string | undefined;
//   setTextValue: (value: SetStateAction<string>) => void;
// }

export default function addTag(params) {
  const { tags, setTags, setValueFn, fieldValueName, setTextValue } = params;

  return (tag) => {
    const tagLabelArr = [];

    if (tag !== '') {
      tags.push(tag);
      setTags(tags);
      tags.map((str) => {
        if (str !== '') {
          return tagLabelArr.push(str);
        }

        return null;
      });
      setValueFn(`${fieldValueName}`, {
        set: tagLabelArr,
      });
      setTextValue('');
    }
  };
}
