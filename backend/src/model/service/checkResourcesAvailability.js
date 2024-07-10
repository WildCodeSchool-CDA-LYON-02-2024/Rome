import ressourceController from "../../controller/ressourceController.js";

export default function checkResourcesAvailability(
  provinceId,
  provinceResources,
  requiredResources,
  res,
) {
  let result = false;

  ressourceController.ressourceModel
    .selectByProvince(provinceID)
    .then((provinceResources) => {
      if (provinceResources < requiredResources) {
        res.status(400).json({ message: "Ressources insuffisantes" });
        result = false;
      } else {
        res.status(200).json({
          message: `Ressources suffisantes pour procéder à la construction ou l'amélioration.`,
        });
        result = true;
      }
    })
    .catch((err) => res.status(500).json(err));

  return result;
}
