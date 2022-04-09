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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



















export type CommentInput = {
  content?: Maybe<Scalars['String']>;
  upvotes?: Maybe<Scalars['Int']>;
  downvotes?: Maybe<Scalars['Int']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type InputId = {
  id: Scalars['ID'];
};


export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};
























export type PostInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  upvotes?: Maybe<Scalars['Int']>;
  downvotes?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  topics?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  from_reddit?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}


export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};
















export type TopicInput = {
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};



























export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  from_reddit?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  topics?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};





export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


























export type CreateCommentInput = {
  data?: Maybe<CommentInput>;
};


export type CreatePostInput = {
  data?: Maybe<PostInput>;
};


export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};


export type CreateTopicInput = {
  data?: Maybe<TopicInput>;
};


export type CreateUserInput = {
  data?: Maybe<UserInput>;
};


export type DeleteCommentInput = {
  where?: Maybe<InputId>;
};


export type DeleteFileInput = {
  where?: Maybe<InputId>;
};


export type DeletePostInput = {
  where?: Maybe<InputId>;
};


export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};


export type DeleteTopicInput = {
  where?: Maybe<InputId>;
};


export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type EditCommentInput = {
  content?: Maybe<Scalars['String']>;
  upvotes?: Maybe<Scalars['Int']>;
  downvotes?: Maybe<Scalars['Int']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPostInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  upvotes?: Maybe<Scalars['Int']>;
  downvotes?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  topics?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  from_reddit?: Maybe<Scalars['Boolean']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTopicInput = {
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  users_permissions_user?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  from_reddit?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  topics?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCommentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCommentInput>;
};


export type UpdatePostInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPostInput>;
};


export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};


export type UpdateTopicInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTopicInput>;
};


export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};


export type CreateCommentMutationVariables = Exact<{
  content?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: Maybe<{ __typename?: 'createCommentPayload', comment?: Maybe<{ __typename?: 'Comment', id: string, content?: Maybe<string> }> }> };

export type GetPostsQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Maybe<Array<Maybe<{ __typename?: 'Post', id: string, slug?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, created_at: any, upvotes?: Maybe<number>, downvotes?: Maybe<number>, users_permissions_user?: Maybe<{ __typename?: 'UsersPermissionsUser', name?: Maybe<string>, username: string, birthday?: Maybe<any>, created_at: any, avatar?: Maybe<{ __typename?: 'UploadFile', url: string }> }>, topics?: Maybe<Array<Maybe<{ __typename?: 'Topic', name?: Maybe<string> }>>>, comments?: Maybe<Array<Maybe<{ __typename?: 'Comment', id: string, content?: Maybe<string>, created_at: any, upvotes?: Maybe<number>, downvotes?: Maybe<number> }>>> }>>> };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostQuery = { __typename?: 'Query', post?: Maybe<{ __typename?: 'Post', id: string, title?: Maybe<string>, content?: Maybe<string>, created_at: any, upvotes?: Maybe<number>, downvotes?: Maybe<number>, users_permissions_user?: Maybe<{ __typename?: 'UsersPermissionsUser', name?: Maybe<string>, username: string, birthday?: Maybe<any>, created_at: any, avatar?: Maybe<{ __typename?: 'UploadFile', url: string }> }>, topics?: Maybe<Array<Maybe<{ __typename?: 'Topic', name?: Maybe<string> }>>>, comments?: Maybe<Array<Maybe<{ __typename?: 'Comment', id: string, content?: Maybe<string>, created_at: any, upvotes?: Maybe<number>, downvotes?: Maybe<number>, users_permissions_user?: Maybe<{ __typename?: 'UsersPermissionsUser', username: string, avatar?: Maybe<{ __typename?: 'UploadFile', url: string }> }> }>>> }> };

export type GetCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommentsQuery = { __typename?: 'Query', comments?: Maybe<Array<Maybe<{ __typename?: 'Comment', id: string, content?: Maybe<string>, created_at: any, upvotes?: Maybe<number>, users_permissions_user?: Maybe<{ __typename?: 'UsersPermissionsUser', username: string, avatar?: Maybe<{ __typename?: 'UploadFile', url: string }> }> }>>> };

export type GetCommentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCommentQuery = { __typename?: 'Query', comment?: Maybe<{ __typename?: 'Comment', id: string, content?: Maybe<string>, created_at: any, upvotes?: Maybe<number>, users_permissions_user?: Maybe<{ __typename?: 'UsersPermissionsUser', username: string, avatar?: Maybe<{ __typename?: 'UploadFile', url: string }> }> }> };
