import { v4 } from "uuid";
import { resolve } from "path";

class FileService {
  async saveFile(file) {
    try {
      const fileName = v4() + ".png";
      const filePath = resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

export const fileService = new FileService();
