import { PrismaClient } from ".prisma/client";

import {
    Request,
    Response
} from "express";
import { errorMessage } from "../../../util/validations";


const prisma = new PrismaClient();

const update = (req: Request, res: Response) => {

    const { id,
        country,
        city,
        street,
        building }:
        {
            id: number,
            country: string,
            city: string,
            street: string,
            building: string
        } = req.body;

    if (!country || !city || !street || !building)
        return res.status(400).send(errorMessage("Missing required fields"));

    if (isNaN(id))
        res.status(400).send(errorMessage("Id is invalid"));

    prisma.place.update({
        where: {
            id: Number(id)
        },
        data: {
            id: id,
            country: country,
            city: city,
            street: street,
            building: building

        }
    }).then((place) => {
        res.status(200).send(place);
    }).catch((error) => {
        if (error.code === "P2025")
            return res.status(404).send(errorMessage("place not found"));
        else
            console.error(error)
        return res.status(500).send(errorMessage("Oops! Something went wrong!"));
    })
}
export default update;