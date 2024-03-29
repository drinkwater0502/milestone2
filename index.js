const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});

app.post("/", (req, res) => {
  let newName = req.body.thename
  let newAboutMe = req.body.aboutme
  let HTMLlol = req.body.HTML
  console.log(newName)
  console.log(newAboutMe)
  console.log(HTMLlol)

  res.redirect("homepage")
});

app.get("/homepage", (req, res) => {
  res.render("homepage", { user: req.body })
})

app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
