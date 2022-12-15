import express from "express";

export const resizeImage = (req:express.Request, res:express.Response): void => {
    res.send("Resize end point is working").status(200);
}
