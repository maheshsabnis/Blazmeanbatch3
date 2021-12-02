import express from "express";

const instance = express();
 
instance.use(express.json());
instance.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 7022;

let persons = [
  { PersonId: 101, PersonName: "Mahesh", Occupation: "IT", Income: 11000 },
  { PersonId: 102, PersonName: "Tejas", Occupation: "HR", Income: 12000 },
  { PersonId: 103, PersonName: "Leena", Occupation: "IT", Income: 13000 },
  { PersonId: 104, PersonName: "Neeta", Occupation: "HR", Income: 14000 },
  { PersonId: 105, PersonName: "Vandana", Occupation: "IT", Income: 15000 },
];

// Lets add REST API Methods using HTTP methods of 'instance'

instance.get("/api/persons", (req, resp) => {
  resp.status(200).send({
    message: "Data reading is successful",
    records: JSON.stringify(persons),
  });
});
instance.get("/api/persons/:id", (req, resp) => {
  // read the URL parameter
  let id = parseInt(req.params.id);
  if (id === 0) {
    resp
      .status(500)
      .send({
        message:
          "Based on Parameter we cannot Process your request, please check data",
      });
  } else {
    let per = persons.find((e, i) => {
      return e.PersonId === id;
    });
    resp
      .status(200)
      .send({
        message: "Data reading is successful",
        record: JSON.stringify(per),
      });
  }
});
instance.post("/api/persons", (req, resp) => {
  // read data from body
  let per = req.body;
  console.log(`Received Data for post is = ${JSON.stringify(per)}`);
  persons.push(per);
  resp
    .status(200)
    .send({
      message: "Data reading is successful",
      record: persons,
    });
});
 
instance.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
