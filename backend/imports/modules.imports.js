const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const colors = require('colors')
const { ApolloServer, startStandaloneServer, } = require('apollo-server-express');
const { ForbiddenError, AuthenticationError, ApolloError } = require('apollo-server')
const { GraphQLError } = require('graphql')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const redis = require('redis');
const util = require('util');


require("dotenv").config();

module.exports = {
     express,
     mongoose,
     bcrypt,
     asyncHandler,
     cors,
     jwt,
     ApolloServer,
     startStandaloneServer,
     colors,
     redis,
     util,
     ForbiddenError, AuthenticationError,
     ApolloError,
     cookieParser,
     bodyParser,
     GraphQLError
};
