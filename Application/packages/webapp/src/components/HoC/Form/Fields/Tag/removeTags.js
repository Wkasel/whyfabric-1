// import removeFromArr from '@util/removeFromArr';
import { SetStateAction } from 'react';
// : {
//   tags: string[];
//   setTags: (value) => void;
//   setValueFn: (fieldName, value: { set }) => void;
//   fieldValueName: string | undefined;
// }

export default function removeTag(params) {
  return (data) => async () => {
    // const tagLabelArr = [];
    // params.tags.map((tag) => {
    //   if (tag !== '') {
    //     return tagLabelArr.push(tag);
    //   }
    // });
    // // const newArr = removeFromArr(tagLabelArr, data);
    // params.setTags(newArr);
    // params.setValueFn(`${params.fieldValueName}`, { set: newArr });
  };
}
