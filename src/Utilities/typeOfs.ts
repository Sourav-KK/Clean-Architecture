import express from "express";
import userRep from "../frameworks/dataBase/mongoDB/repositories/userRepositoryMongoDB";
import userRepository from "../applications/repositories/userDbRepository";
import login from "../applications/useCase/auth/login";
import authControllers from "../adapters/contollers/authControllers";

export type expTyp = typeof express;
export type usrType = typeof userRep
export type userRepoTyp = typeof userRepository
export type loginTyp = typeof login
export type exauthControllersTyp = typeof authControllers
