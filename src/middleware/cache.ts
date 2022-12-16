import express from "express";
import NodeCache from "node-cache";
import path from "path";

const myCache = new NodeCache();

export const cache = (req: express.Request, res: express.Response, next: Function):void => {
    const key = req.url;
    const cachedResponse = myCache.get(key);

    if (cachedResponse) {
        console.log("Cached Response sent");
        res.status(200).sendFile(cachedResponse as string);
    } else {
        console.log("Cache not found");
        const output = path.resolve(`images/resized/${req.query.filename}`);
        myCache.set(key, output, 600);
        next();
    }
}
