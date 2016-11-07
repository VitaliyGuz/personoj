/**
 * Created by Vitaliy on 07.11.2016.
 */

import PersonAttribute from './models/personAttribute';
import Person from './models/person';

export default function () {
  PersonAttribute.count().exec((err, count) => {
    if (count === 0) {
      const personAttribute1 = new PersonAttribute({
        "cuid": "ciuyarmbi0002awyju807l8sn",
        "name": "lastName",
        "type": "String",
        "localizationLabel": {
          "uk": "Прізвище",
          "ru": "Фамилия"
        },
        "allowArbitraryValues": true,
        "needApproval": true,
        "values": [
          "Иванов",
          "Петров"
        ]
      });

      const personAttribute2 = new PersonAttribute({
        "cuid": "civ0ruxf300006cyjd2gw4hgj",
        "name": "firstName",
        "type": "String",
        "localizationLabel": {
          "uk": "Ім'я",
          "ru": "Имя"
        },
        "allowArbitraryValues": true,
        "needApproval": true,
        "values": [
          "Ира",
          "Даша"
        ]
      });

      const personAttribute3 = new PersonAttribute({
        "cuid": "civ0rw5sk00016cyjntsil4ai",
        "name": "dateOfBirth",
        "type": "Date",
        "localizationLabel": {
          "uk": "Дата народження",
          "ru": "Дата рождения"
        },
        "allowArbitraryValues": true,
        "needApproval": true,
        "values": []
      });


      const personAttribute4 = new PersonAttribute({
        "cuid": "civ0w29re00036cyj8knr6gn0",
        "name": "amountOfChildren",
        "type": "Number",
        "localizationLabel": {
          "uk": "Кількість дітей",
          "ru": "Количество детей"
        },
        "allowArbitraryValues": true,
        "needApproval": true,
        "values": []
      });

      PersonAttribute.create([
          personAttribute1,
          personAttribute2,
          personAttribute3,
          personAttribute4
        ],
        (error) => {
          if (!error) {
            console.log('ready to go....');
          }
        });
    }
  });

  Person.count().exec((err, count) => {
    if (count === 0) {
      const person1 = new Person({
        "cuid": "civ87sx9o0000egyjbol9cg0c",
        "draft": {
          "firstName": "Angelina",
          "lastName": "Jolie",
          "dateOfBirth": "2016-11-07T15:20:19.124Z",
          "amountOfChildren": 4
        },
        "published": {
          "firstName": "Angelina",
          "lastName": "Jolie",
          "dateOfBirth": "2016-11-07T15:20:19.124Z",
          "amountOfChildren": 3
        },
        "history": {
          "1": {
            "dateRetired": "2016-11-07T17:14:58.466Z",
            "person": {
              "firstName": "Angelina",
              "lastName": "Jolie",
              "dateOfBirth": "2016-11-07T15:20:19.124Z",
              "amountOfChildren": 2
            }
          }
        }
      });


      Person.create([
          person1
        ],
        (error) => {
          if (!error) {
            console.log('ready to go....');
          }
        });
    }
  });

  return
}

