import { extname } from "path";

// filter excel and csv files
export const fileFilter = (req: any, file: any, callback: any) => {
    if (!file.originalname.match(/\.(xlsx|csv)$/)) {
        return callback(new Error('Only excel and csv files are allowed!'), false);
    }
    callback(null, true);
};

// edit file name
export const editFileName = (req: any, file: any, callback: any) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};