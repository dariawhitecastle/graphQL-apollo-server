export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  newPost: Post;
  newUser: User;
};


export type MutationNewPostArgs = {
  input?: Maybe<NewPostInput>;
};


export type MutationNewUserArgs = {
  input?: Maybe<NewUserInput>;
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<Maybe<Post>>>;
  profile?: Maybe<Profile>;
  user?: Maybe<User>;
};


export type QueryPostsArgs = {
  input?: Maybe<PostInput>;
};


export type QueryUserArgs = {
  inout?: Maybe<UserInput>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  bio?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profile?: Maybe<Profile>;
};

export type PostInput = {
  userId: Scalars['ID'];
};

export type UserInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type NewPostInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  published: Scalars['Boolean'];
};

export type NewUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};
