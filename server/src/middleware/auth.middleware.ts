import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.cookies.access_token;
  if (!token) {
    return res.send(403).send({
      message: "NO_TOKEN",
    });
  }
  try {
    const decodedToken: JwtPayload = jwt.verify(
      token,
      `${process.env.JWT_SECRET_KEY}`
    ) as JwtPayload;
    req.body.id = decodedToken.id;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

export const authMiddleware = {
    verifyToken
}