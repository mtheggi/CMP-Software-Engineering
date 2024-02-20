var employee = [
  { id: '1', name: 'Mohamed Sayed' },
  { id: '2', name: 'Ahmed Ali' }
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
  next();
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  console.log("delete Employee")
  try {
    const id = req.params.id;
    employee = employee.filter(item => item.id !== id);
    res.status(200).json({ data: employee });
  } catch (error) {
    console.log(error);
    res.status(404).json("error while deleting");
  }
  next();
};

// TODO
exports.createEmployee = async (req, res, next) => {
  console.log("createEmployee");
  const { id, name } = req.body;
  console.log("id ", id);
  console.log("name", name);

  employee.push({ id: id, name: name });
  res.status(201).json("success");
  next();
};
