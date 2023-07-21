import { postService } from "./post-service.js";

class PostController {
  async create(request, response) {
    try {
      const post = await postService.create(request.body, request.file.picture);
      response.status(200).json(post);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getAll(request, response) {
    try {
      const posts = await postService.getAll();
      return response.status(200).json(posts);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getOne(request, response) {
    try {
      const post = await postService.getOne(request.params.id);
      return response.status(200).json(post);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async update(request, response) {
    try {
      const updatedPost = await postService.update(request.body);
      return response.status(200).json(updatedPost);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async delete(request, response) {
    try {
      const post = await postService.delete(request.params.id);
      return response.status(200).json(post);
    } catch (error) {
      response.status(500).json(error.message);
    }
  }
}

export default new PostController();
