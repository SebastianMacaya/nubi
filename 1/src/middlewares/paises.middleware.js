export function unauthorizedCountry(req, res, next) {
  const { country } = req.params;
  if (country != "AR") {
    return res.sendStatus(401);
  }
  next();
}
