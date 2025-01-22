const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
// const { OAuth2Client } = require("google-auth-library");
const { MongoClient } = require("mongodb");

const uri = "mongodb://0.0.0.0:27017"; // Ubah sesuai dengan URL MongoDB Anda
const databaseName = "opinionest";
const studentCollection = "student";
const adminCollection = "admin";
const aspirationCollection = "aspiration";
const port = 3001;

const client = new MongoClient(uri);
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

async function initializeData() {
  await client.connect();
  const db = client.db(databaseName);
  const student = db.collection(studentCollection);
  const admin = db.collection(adminCollection);
  const aspiration = db.collection(aspirationCollection);
  // const databasesList = await client.db().admin().listDatabases();
  // const databaseExists = databasesList.databases.some((db) => db.name === databaseName);
  const collections = await db.listCollections().toArray();
  const studentExists = collections.some(
    (collection) => collection.name === studentCollection
  );
  const adminExists = collections.some(
    (collection) => collection.name === adminCollection
  );
  const aspirationExists = collections.some(
    (collection) => collection.name === aspirationCollection
  );

  if (!studentExists) {
    await db.createCollection(studentCollection);
  }
  if (!adminExists) {
    await db.createCollection(adminCollection);
  }
  if (!aspirationExists) {
    await db.createCollection(aspirationCollection);
  }
}

async function signIn(email, password) {
  await client.connect();
  const db = client.db(databaseName);
  const student = db.collection(studentCollection);
  const admin = db.collection(adminCollection);
  const currentTime = Date.now();
  const currentDate = new Date(currentTime);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const DATE = `${day}/${month}/${year}`;

  if (email.includes("students")) {
    const studentCheck = await student.find({ _id: email }).toArray();
    if (studentCheck.length == 0) {
      var fullname = email.split("@")[0];
      if (fullname.includes(".")) {
        fullname = fullname.split(".");
        fullname = `${fullname[0]} ${fullname[1]}`;
        fullname = fullname.split(" ").map(capitalizeFirstLetter).join(" ");
      } else {
        fullname = fullname.split(" ").map(capitalizeFirstLetter).join(" ");
      }
      const dataToInsert = [
        {
          _id: email,
          fullname: fullname,
          username: email.split("@")[0],
          datejoined: DATE,
          password: password,
          active: true,
          role: "Mahasiswa",
        },
      ];
      const result = await student.insertMany(dataToInsert);
      return true;
    } else {
      const credentialCheck = await student
        .find({ _id: email, password: password })
        .toArray();

      if (credentialCheck.length != 0) {
        const filter = { _id: email };
        const updateDocument = {
          $set: { active: true },
        };
        const dataToInsert = await student.updateOne(filter, updateDocument);
        return true;
      } else {
        return false;
      }
    }
  } else {
    const adminCheck = await admin.find({ _id: email }).toArray();
    if (adminCheck.length == 0) {
      var fullname = email.split("@")[0];
      if (fullname.includes(".")) {
        fullname = fullname.split(".");
        fullname = `${fullname[0]} ${fullname[1]}`;
        fullname = fullname.split(" ").map(capitalizeFirstLetter).join(" ");
      } else {
        fullname = fullname.split(" ").map(capitalizeFirstLetter).join(" ");
      }
      const dataToInsert = [
        {
          _id: email,
          fullname: fullname,
          username: email.split("@")[0],
          datejoined: DATE,
          password: password,
          active: true,
          role: "Admin",
        },
      ];
      const result = await admin.insertMany(dataToInsert);
      return true;
    } else {
      const credentialCheck = await admin
        .find({ _id: email, password: password })
        .toArray();

      if (credentialCheck.length != 0) {
        const filter = { _id: email };
        const updateDocument = {
          $set: { active: true },
        };
        const dataToInsert = await admin.updateOne(filter, updateDocument);
        return true;
      } else {
        return false;
      }
    }
  }
}

async function getSession() {
  await client.connect();
  const db = client.db(databaseName);
  const session = db.collection(studentCollection);
  const currentUser = await session.find({ active: true }).toArray();

  if (currentUser.length != 0) {
    return currentUser[0].username;
  } else {
    return false;
  }
}

async function getForm() {
  await client.connect();
  const db = client.db(databaseName);
  const aspiration = db.collection(aspirationCollection);
  const listForm = await aspiration.find({}).toArray();

  if (listForm.length != 0) {
    return listForm;
  } else {
    return false;
  }
}

async function setLike(formId) {
  await client.connect();
  const db = client.db(databaseName);
  const aspiration = db.collection(aspirationCollection);
  const listForm = await aspiration.find({ _id: formId.trim() }).toArray();

  if (listForm.length != 0) {
    const filter = { _id: formId.trim() };
    const updateDocument = {
      $set: { like: listForm[0].like + 1 },
    };
    const dataToInsert = await aspiration.updateOne(filter, updateDocument);
    return true;
  } else {
    return false;
  }
}

async function setDislike(formId) {
  await client.connect();
  const db = client.db(databaseName);
  const aspiration = db.collection(aspirationCollection);
  const listForm = await aspiration.find({ _id: formId.trim() }).toArray();

  if (listForm.length != 0) {
    const filter = { _id: formId.trim() };
    const updateDocument = {
      $set: { like: listForm[0].dislike + 1 },
    };
    const dataToInsert = await aspiration.updateOne(filter, updateDocument);
    return true;
  } else {
    return false;
  }
}

async function saveForm(title, tipe, to, message, tags, anonym) {
  await client.connect();
  const db = client.db(databaseName);
  const aspiration = db.collection(aspirationCollection);
  const student = db.collection(studentCollection);
  const currentUser = await student.find({ active: true }).toArray();
  const currentTime = Date.now();
  const currentDate = new Date(currentTime);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const DATE = `${day}${month}${year}`;
  const formLength = await aspiration.find({}).toArray();
  const rand = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  var currentName = currentUser[0].fullname;
  var formId;
  var status;

  if (anonym) {
    currentName = `Anonymous#${rand}`;
  }

  if (tipe.trim() == "Critique") {
    formId = `01${DATE}0${formLength + 1}`;
    status = null;
  } else {
    formId = `02${DATE}0${formLength + 1}`;
    status = "Waiting to be resolved";
  }

  const dataToInsert = [
    {
      _id: formId,
      fullname: currentName,
      type: tipe,
      title: title,
      datecreated: currentTime,
      to: to,
      message: message,
      tags: tags,
      status: status,
      reply: 0,
      like: 0,
      dislike: 0,
    },
  ];
  const result = await aspiration.insertMany(dataToInsert);
  return true;
}

async function logOut() {
  try {
    await client.connect();
    const db = client.db(databaseName);
    const student = db.collection(studentCollection);

    const result = await student.updateOne(
      { active: true },
      { $set: { active: false } }
    );

    if (result.modifiedCount > 0) {
      console.log("User successfully logged out.");
    } else {
      console.log("No active user found.");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Ganti dengan URL aplikasi klien Anda
    methods: "GET,POST", // Atur metode yang diizinkan
    allowedHeaders: ["Content-Type"],
    mode: "cors",
  })
);

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const setSignIn = await signIn(email, password);
  res.send(setSignIn);
});

app.post("/session", async (req, res) => {
  const { request } = req.body;
  const setSession = await getSession();
  res.json(setSession);
});

app.post("/sendform", async (req, res) => {
  const { title, tipe, to, message, tags, anonym } = req.body;
  const sendForm = await saveForm(title, tipe, to, message, tags, anonym);
  res.json(sendForm);
});

app.post("/getform", async (req, res) => {
  const { request } = req.body;
  const sendForm = await getForm();
  res.json(sendForm);
});

app.post("/postlike", async (req, res) => {
  const { formId } = req.body;
  const postLike = await setLike(formId);
  res.send(postLike);
});

app.post("/postdislike", async (req, res) => {
  const { formId } = req.body;
  const postDislike = await setDislike(formId);
  res.send(postDislike);
});

app.post("/logout", async (req, res) => {
  const logout = await logOut();
  res.json(logout);
});

app.listen(port, () => {
  initializeData();
  console.log(`App running on port http://localhost:${port}`);
});
