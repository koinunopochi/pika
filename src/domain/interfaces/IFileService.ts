export interface IFileService {
  readFile(filePath: string): Promise<string>;
  fileExists(filePath: string): Promise<boolean>;
  isMarkdownFile(filePath: string): boolean;
  isHtmlFile(filePath: string): boolean;
  isCsvFile(filePath: string): boolean;
  isImageFile(filePath: string): boolean;
}