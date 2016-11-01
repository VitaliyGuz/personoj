/**
 * Created by Vitaliy on 25.10.2016.
 */

import PersonAttribute from '../models/personAttribute';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

export function getPersonAttributes(req, res) {
  PersonAttribute.find().exec((err, personAttributes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({personAttributes});
  });
}

export function getPersonAttribute(req, res) {
  PersonAttribute.findOne({cuid: req.params.cuid}).exec((err, personAttribute) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({personAttribute});
  });
}

export function addPersonAttribute(req, res) {
  if (!req.body.personAttribute) {
    res.status(403).end();
  } else {

    const newPersonAttribute = new PersonAttribute(req.body.personAttribute);

    // Let's sanitize inputs
    Object.keys(newPersonAttribute).map(attribute => {
      if (typeof newPersonAttribute[attribute] === 'string') {
        newPersonAttribute[attribute] = sanitizeHtml(newPersonAttribute[attribute]);
      }
    })

    newPersonAttribute.cuid = cuid();
    newPersonAttribute.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({personAttribute: saved});
    });
  }
}


export function updatePersonAttribute(req, res) {

  PersonAttribute.findOne({cuid: req.params.cuid})
    .then(document => {
      if (!req.body.person) {
        res.status(403).end();
      } else {

        const newPersonAttribute = new PersonAttribute(req.body.personAttribute);

        Object.keys(newPersonAttribute).map(attribute => {
          if (typeof newPersonAttribute[attribute] === 'string') {
            document[attribute] = sanitizeHtml(newPersonAttribute[attribute]);
          }
        })

        document.save((err, saved) => {
          if (err) {
            res.status(500).send(err);
          }
          res.json({personAttribute: saved});
        });
      }
    })
}

export function deletePersonAttribute(req, res) {
  PersonAttribute.findOne({cuid: req.params.cuid}).exec((err, personAttribute) => {
    if (err) {
      res.status(500).send(err);
    }
    personAttribute.remove(() => {
      res.status(200).end();
    });
  });
}


export function getLocalizationLabels(req, res) {
  let language = req.params.language;
  let languageQuery = `localizationLabel.${language}`
  PersonAttribute.find({}, {name: 1, [languageQuery]: 1}).exec((err, personAttributes) => {
    if (err) {
      res.status(500).send(err);
    }
    let labels = personAttributes.reduce(function (object, value) {
        object[value.name] = value.localizationLabel[language] || "";
      return object
    }, {})
    res.json({labels});
  });
}
