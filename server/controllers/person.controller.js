/**
 * Created by Vitaliy on 24.10.2016.
 */

import Person from "../models/person";
import cuid from "cuid";
import sanitizeHtml from "sanitize-html";

export function getPeople(req, res) {
  Person.find().exec((err, people) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({people});
  });
}

export function getPerson(req, res) {
  Person.findOne({cuid: req.params.cuid}).exec((err, person) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({person});
  });
}

export function addPerson(req, res) {
  if (!req.body.person) {
    res.status(403).end();
  } else {

    const newPerson = new Person();
    newPerson.draft = req.body.person;


    // Let's sanitize inputs
    Object.keys(newPerson).map(attribute => {
      if (typeof newPerson.draft[attribute] === 'string') {
        newPerson.draft[attribute] = sanitizeHtml(newPerson.draft[attribute]);
      }
    })

    newPerson.cuid = cuid();
    newPerson.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({person: saved});
    });
  }
}

export function confirmPersonChanges(req, res) {
  Person.findOne({cuid: req.params.cuid}).exec((err, person) => {
    if (err) {
      res.status(500).send(err);
    }
    var nextIndex = Math.max(0, ...Object.keys(person.history||{}).map) + 1;
    let historyItem = {[nextIndex]: {person: person.published, dateRetired: new Date()}}
    person.history = Object.assign(person.history||{} , historyItem);
    person.published = person.draft;
    person.draft = {};

    person.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({person: saved});
    });
  });
}


export function updatePerson(req, res) {

  Person.findOne({cuid: req.params.cuid})
    .then(document => {
      if (!req.body.person) {
        res.status(403).end();
      } else {

        const newPerson = new Person();
        newPerson.draft = req.body.person;

        Object.keys(newPerson.draft).map(attribute => {
          if (typeof newPerson.draft[attribute] === 'string') {
            document.draft[attribute] = sanitizeHtml(newPerson.draft[attribute]);
          } else {
            document.draft[attribute] = newPerson.draft[attribute];
          }
        })

        document.save((err, saved) => {
          if (err) {
            res.status(500).send(err);
          }
          res.json({person: saved});
        });
      }
    })
}

export function deletePerson(req, res) {
  Person.findOne({cuid: req.params.cuid}).exec((err, person) => {
    if (err) {
      res.status(500).send(err);
    }
    person.remove(() => {
      res.status(200).end();
    });
  });
}

