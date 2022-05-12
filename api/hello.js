module.exports = (req, res) => {
    let msg = "hello there, how are you!!";
    res.json({
      msg,
    });
  };