import { IPost, IComment, IUser } from "./PlaceholderTypes";

const placeholderApiBaseUrl = "https://jsonplaceholder.typicode.com";

class Api {
  public fetchPosts = async (postId?: number) => {
    try {
      let postsEndpoint = `${placeholderApiBaseUrl}/posts`;

      if (postId) {
        postsEndpoint += `/${postId}`;
      }

      const rawResponse = await fetch(postsEndpoint);

      const response = await rawResponse.json();

      const promise = new Promise<IPost[] | IPost>((resolve, reject) => {
        if (postId) {
          resolve(response as IPost);
        } else {
          resolve(response as IPost[]);
        }
      });

      return promise;
    } catch (error) {
      console.log(
        `Error encountered in fetchPosts() of PlaceholderApi.ts\n${error}`
      );
    }
  };
  public fetchPostsForUserId = async (userId?: number) => {
    try {
      let postsEndpoint = `${placeholderApiBaseUrl}/posts`;

      if (userId) {
        postsEndpoint += `?userId=${userId}`;
      }

      const rawResponse = await fetch(postsEndpoint);

      const response = await rawResponse.json();

      const promise = new Promise<IPost[]>((resolve, reject) => {
        resolve(response as IPost[]);
      });

      return promise;
    } catch (error) {
      console.log(
        `Error encountered in fetchPosts() of PlaceholderApi.ts\n${error}`
      );
    }
  };

  public fetchCommentsForPost = async (postId?: number) => {
    try {
      let commentsEndpoint = `${placeholderApiBaseUrl}/comments`;

      if (postId) {
        commentsEndpoint += `?postId=${postId}`;
      }

      const rawResponse = await fetch(commentsEndpoint);

      const response = await rawResponse.json();

      const promise = new Promise<IComment[]>((resolve, reject) => {
        resolve(response as IComment[]);
      });

      return promise;
    } catch (error) {
      console.log(
        `Error encountered in fetchCommentsForPost() of PlaceholderApi.ts\n${error}`
      );
    }
  };

  public fetchUser = async (userId: number) => {
    try {
      const usersEndpoint = `${placeholderApiBaseUrl}/users/${userId}`;

      const rawResponse = await fetch(usersEndpoint);

      const response = await rawResponse.json();

      const promise = new Promise<IUser>((resolve, reject) => {
        resolve(response as IUser);
      });

      return promise;
    } catch (error) {
      console.log(
        `Error encountered in fetchUser() of PlaceholderApi.ts\n${error}`
      );
    }
  };
}

export const api = new Api();
