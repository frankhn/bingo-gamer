import { Iboxes } from "../interfaces/boxes.interface";

export const getCenter = (boxes: Array<Iboxes>) => {
    return Math.ceil(boxes.length / 2)
}
