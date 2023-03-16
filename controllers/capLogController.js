

// Load the capLog model
const CapLogs = require("../models/CapLogsModels");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = async (req, res) => {
  try {
    // Use the capLog model to interact with the database
    // find will get all documents from the capLog collection
    const capLogs = await CapLogs.find();
    console.log(capLogs);

    // Looks in the views folder for "capLogs/Index" and passes { capLogs } data to the view (kind of like a server props object)
    res.render("capLogs/Index", { capLogs });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// Those anonymous callback functions now have names: "index" and "show"
module.exports.show = async (req, res) => {
  try {
    const capLog = await CapLogs.findById(req.params.id);
    res.render("capLogs/Show", { capLog });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /capLogs/new
module.exports.new = (req, res) => {
  res.render("capLogs/New");
};

// POST /capLogs
module.exports.create = async (req, res) => {
  console.log("POST /capLogs");

  try {
    // use the model to interact with db and create a new document in the capLog collection
    const result = await CapLogs.create(req.body);
    console.log(result);
  } catch (err) {
    console.log(err);
  }

  res.redirect("/capLogs");
};

// DELETE /capLogs/:name
module.exports.delete = async(req, res) => {
  try {
    console.log("DELETE /capLogs/:id");
    await CapLogs.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.redirect("/capLogs");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// GET /capLogs/:name/edit
module.exports.edit = async (req, res) => {
  console.log("GET /capLogs/:id/edit");
  try {
    // const capLog = await capLogs.findById(req.params.id);
    const capLog = await CapLogs.findByIdAndUpdate(req.params.id, req.body);
    res.render("capLogs/Edit", { capLog });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

// PUT /capLogs/:id
module.exports.update = async (req, res) => {
  console.log("PUT /capLogs/:id");
  console.log(req.body);

  if (req.body.readyToEat) {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  try {
    // pass the id to find the document in the db and the form data (req.body) to update it
    await CapLogs.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/capLogs/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.seed = async (req, res) => {
  console.log("POST /capLogs/seed");
  try {
    await CapLogs.deleteMany({}); // Keep empty to delete everything
    capLogs.create(capLogs);
    res.redirect("/capLogs");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports.clear = async (req, res) => {
  console.log("DELETE /capLogs/clear");
  try {
    await CapLogs.deleteMany({});
    res.redirect("/capLogs");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
