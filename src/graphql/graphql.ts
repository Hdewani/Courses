/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
  /** Email custom scalar type */
  Email: { input: any; output: any; }
  /** Performs input checking in limit field */
  FilterLimit: { input: any; output: any; }
  /** Performs input checking in skip field */
  FilterSkip: { input: any; output: any; }
};

export type BadUserInputError = ErrorType & {
  __typename?: 'BadUserInputError';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type Course = {
  __typename?: 'Course';
  author: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  modules?: Maybe<Array<Maybe<Module>>>;
  title: Scalars['String']['output'];
  totalModules?: Maybe<Scalars['Int']['output']>;
};

export type CourseResult = BadUserInputError | Course | InternalServerError | NotFoundError;

export type CreateCourseInput = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['Email']['input'];
  gender?: InputMaybe<Gender>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserRes = {
  __typename?: 'CreateUserRes';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  payload?: Maybe<User>;
  success: Scalars['Boolean']['output'];
};

export type DeleteCourseResult = InternalServerError | NotFoundError | Success;

export type ErrorType = {
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export enum Gender {
  Female = 'female',
  Male = 'male',
  Others = 'others'
}

export type InternalServerError = ErrorType & {
  __typename?: 'InternalServerError';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type Lesson = {
  __typename?: 'Lesson';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  length: Scalars['Int']['output'];
  topic: Scalars['String']['output'];
  video: Scalars['String']['output'];
};

export type LoginDoc = {
  __typename?: 'LoginDoc';
  token: Scalars['String']['output'];
  user: User;
};

export type Module = {
  __typename?: 'Module';
  id: Scalars['ID']['output'];
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  title: Scalars['String']['output'];
  totalLessons?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addModule: CourseResult;
  createCourse: CourseResult;
  createUser: CreateUserRes;
  deleteCourse: DeleteCourseResult;
  deleteModule: DeleteCourseResult;
  updateCourse: CourseResult;
};


export type MutationAddModuleArgs = {
  courseId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateCourseArgs = {
  form: CreateCourseInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModuleArgs = {
  courseId: Scalars['ID']['input'];
  moduleId: Scalars['ID']['input'];
};


export type MutationUpdateCourseArgs = {
  form: UpdateCourseInput;
  id: Scalars['ID']['input'];
};

export type NotFoundError = ErrorType & {
  __typename?: 'NotFoundError';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllCourses?: Maybe<Array<Course>>;
  hello?: Maybe<Scalars['String']['output']>;
  login: LoginResults;
};


export type QueryLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Success = {
  __typename?: 'Success';
  message: Scalars['String']['output'];
};

export type UpdateCourseInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserAlreadyExistsError = ErrorType & {
  __typename?: 'UserAlreadyExistsError';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type LoginResults = BadUserInputError | InternalServerError | LoginDoc | NotFoundError;

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello?: string | null };


export const HelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Hello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hello"}}]}}]} as unknown as DocumentNode<HelloQuery, HelloQueryVariables>;

export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;