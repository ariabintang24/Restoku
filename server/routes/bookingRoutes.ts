import { Router } from "express";
import { protect } from "../middlewares/auth.js";
import {
  cancelBooking,
  createBooking,
  getMyBookings,
} from "../controllers/BookingController.js";

const bookingRouter = Router();

bookingRouter.post("/", protect, createBooking);
bookingRouter.get("/my", protect, getMyBookings);
bookingRouter.put("/", protect, cancelBooking);

export default bookingRouter;
