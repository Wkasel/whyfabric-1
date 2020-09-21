import { bool, obj, str } from '@util/yup/yupTypes';

export const theoryCreateSchema_Step1 = (messages) => {
  // const theoryContentSchema = arr()
  //   .of(
  //     obj()
  //       .shape({
  //
  //       })
  //       .required(messages.required)
  //   )
  //   .required(messages.required);

  return obj({
    description: str().required(),
    title: str().required(),
    isPublished: bool().required(),
    slug: str()
      .min(2)
      .required(),
  });
};
