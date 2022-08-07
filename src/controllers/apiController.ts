import { Request, Response } from "express";

const findAll = (req: Request, res: Response) => {
  res.send({type: 'GET'});
}

const findOne = (req: Request, res: Response) => {
  res.send({type: 'GET'});
}

const create = (req: Request, res: Response) => {
  res.send({type: 'CREATE'});
}

const update = (req: Request, res: Response) => {
  res.send({type: 'UPDATE'});
}

const remove = (req: Request, res: Response) => {
  res.send({type: 'DELETE'});
}

export default {
  findAll,
  findOne,
  create,
  update,
  remove
};