#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const getFileExtension = (filePath) => path.extname(filePath);

/**
 * @param {string} dirPath of the file
 * @param {string} keyword to find (case-sensitive). Default; TODO
 * @returns {Promise<boolean>} A promise boolean
 * @description
 * To find if the keyword exist in the file
 */
const findKeyword = async (dirPath, keyword = 'TODO') => new Promise((resolve, reject) => {
  const fileStream = fs.createReadStream(dirPath, { encoding: 'utf8' });
  let isMatch = false;
  let data = '';

  fileStream.on('data', (dataChunk) => {
    data += dataChunk;
  });

  fileStream.on('end', () => {
    if (data.includes(keyword)) {
      isMatch = true;
    }
    return resolve(isMatch);
  });

  fileStream.on('error', (err) => reject(err));
});

/**
 * @param {string} dirPath of the file
 * @param {string} extension of the file. Default .js
 * @param {string} filter file or folder to filter from the path
 * @param {string} keyword to find (case-sensitive). Default; TODO
 * @param {string[]} fileArray array to story all the files contains the keyword
 * @returns all the files contains the keyword
 * @description
 * To iterate all the files in the directory path
 */
const getAllFiles = async ({
  dirPath = '../', extension = '.js', filter, keyword, fileArray,
}) => {
  const files = fs.readdirSync(dirPath);
  // eslint-disable-next-line no-param-reassign
  fileArray = fileArray || [];

  await Promise.all(
    files.map(async (file) => {
      if (fs.statSync(`${dirPath}/${file}`).isDirectory()) {
        // eslint-disable-next-line no-param-reassign
        fileArray = await getAllFiles({
          dirPath: `${dirPath}/${file}`, extension, filter, keyword, fileArray,
        });
      } else {
        const filePath = path.join(__dirname, dirPath, '/', file);
        const fileExtension = getFileExtension(filePath);
        if (
          filePath
            && !filePath.includes(filter)
            && fileExtension === extension
        ) {
          const isKeyExist = await findKeyword(filePath, keyword).catch((err) => {
            console.error(
              `An error has occured while finding keyword in file path ${filePath} => ErrorStack: ${err}`,
            );
            return false;
          });

          if (isKeyExist) {
            (fileArray || []).push(filePath);
          }
        }
      }
    }),
  );

  return fileArray;
};

/**
 * @returns an object of arguments from the scipt provide by user
 * @description
 * To get the list of arguments
 */
const getArgurments = () => {
  const args = {};
  const argList = process.argv.slice(2);

  argList.forEach((arg) => {
    if (arg.slice(0, 2) === '--') {
      const longArg = arg.split('=');
      const longArgFlag = longArg[0].slice(2, longArg[0].length);
      const longArgValue = longArg.length > 1 ? longArg[1] : true;
      args[longArgFlag] = longArgValue;
    }
  });
  return args;
};

/**
 * @description
 * To find all the files contains the keyword. By default: TODO
 */
const findAllTodo = async () => {
  const argument = getArgurments();
  const {
    filter, ext: extension, keyword, customPath,
  } = argument;

  try {
    const result = await getAllFiles({
      dirPath: customPath, extension, filter, keyword,
    });

    const resultLength = result.length;
    const headerMessage = `Found keyword in ${resultLength} files`;
    console.info(headerMessage);
    result.forEach((filepath, index) => {
      console.info(`${index + 1} => ${filepath}`);
    });
  } catch (error) {
    console.error(`An error has occured with the scipt. See error log: ${error}`);
  }
};

module.exports = {
  getFileExtension,
  findKeyword,
  getAllFiles,
  getArgurments,
  findAllTodo,
};
