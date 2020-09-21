export interface TheoryCreateInput {
  contents: TheoryContent[];
  name: string;

  tags: Array<{
    color: '';
    contents: {
      title: '';
    };
  }>;

  isPublished: boolean;
}

export interface TheoryContent {
  title: string;
  description: string;
}
