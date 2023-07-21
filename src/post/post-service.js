import { postModel } from "./post-model.js";
import { fileService } from "../file-service.js";

class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await postModel.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await postModel.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error({ message: "не указан id" });
    }
    const post = await postModel.findById(id);
    return post;
  }

  async update(post) {
    if (post._id) {
      throw new Error({ message: "не указан id" });
    }
    const updatedPost = await postModel.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error({ message: "не указан id" });
    }
    const post = await postModel.findByIdAndDelete(id);
    return post;
  }
}

export const postService = new PostService();
