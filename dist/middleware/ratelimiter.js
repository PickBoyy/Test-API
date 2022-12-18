"use strict";
// import express,{Request,Response} from 'express'
// import Personagem from '../models/personagem';
// var id = req.personagem._id;
// var limit = new Limiter({ id: id, db: db });
// limit.get(function(err, limit){
//   if (err) return next(err);
//   res.set('X-RateLimit-Limit', limit.total);
//   res.set('X-RateLimit-Remaining', limit.remaining - 1);
//   res.set('X-RateLimit-Reset', limit.reset);
//   debug('remaining %s/%s %s', limit.remaining - 1, limit.total, id);
//   if (limit.remaining) return next();
//   var delta = (limit.reset * 1000) - Date.now() | 0;
//   var after = limit.reset - (Date.now() / 1000) | 0;
//   res.set('Retry-After', after);
//   res.send(429, 'Rate limit exceeded, retry in ' + ms(delta, { long: true }));
// });
