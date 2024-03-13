const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const colors = require('colors')
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
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
     util
};
