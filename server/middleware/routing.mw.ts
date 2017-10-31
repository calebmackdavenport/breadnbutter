import {join} from 'path';
import {Request, Response, NextFunction} from 'express';

export default function stateRouting(req: Request, res: Response, next: Function) {
    if (isServerAsset(req.url)) {
        next();
        }   else {
       res.sendFile(join(__dirname, '../../client/index.html'));
        }
   }

function isServerAsset(path: string) {
    var pieces = path.split('/');
    if(pieces.length == 0) {
        return false;
    }
    if(path.indexOf('/api')!== -1 || path.indexOf('/?')!== -1){
        return true;
    }
    if(pieces[pieces.length - 1].indexOf(".")!== -1){
        return true;
    }
    return false;
}

