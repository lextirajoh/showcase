export type Post = {
  sys: {
    id: string;
  };
  title: string;
  slug: string;
  description: string;
  body: {
    json: any;
  };
};
