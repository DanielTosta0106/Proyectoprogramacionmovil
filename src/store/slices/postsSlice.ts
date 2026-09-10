import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GroupPost = {
  id: string;
  groupName: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export type NewGroupPost = Omit<GroupPost, 'id' | 'createdAt'>;

type PostsState = {
  posts: GroupPost[];
};

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<NewGroupPost>) => {
      const post = {
        id: String(Date.now()),
        createdAt: new Date().toISOString(),
        ...action.payload,
      };

      state.posts.unshift(post);
      console.log('[Redux] Publicación agregada:', post);
    },
    removePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
