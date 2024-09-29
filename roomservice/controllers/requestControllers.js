import fs from "fs";
import path from "path";
const FILE_PATH = path.resolve("./roomservice/requests.json");
const readData = () => JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));

export const getAllRequests = (req, res) => {
  try {
    const requests = readData();
    requests.sort((a, b) => a.priority - b.priority);
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving requests.", error });
  }
};
export const addRequest = (req, res) => {
  try {
    const { guestName, roomNumber, requestDetails, priority, status } =
      req.body;

    if (
      !guestName ||
      !roomNumber ||
      !requestDetails ||
      priority === undefined ||
      !status
    ) {
      return res.status(400).json({
        message: "Invalid input. Please provide all required fields.",
      });
    }

    const requests = readData();
    const newRequest = {
      id: `${Date.now()}`,
      guestName,
      roomNumber,
      requestDetails,
      priority,
      status,
    };

    requests.push(newRequest);
    writeData(requests);
    res
      .status(201)
      .json({ message: "Request added successfully", request: newRequest });
  } catch (error) {
    res.status(500).json({ message: "Error adding request.", error });
  }
};

export const getRequestById = (req, res) => {
  try {
    const requests = readData();
    const request = requests.find((r) => r.id === req.params.id);

    if (request) {
      res.status(200).json(request);
    } else {
      res
        .status(404)
        .json({ message: `Request with ID ${req.params.id} not found.` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving request by ID.", error });
  }
};

export const updateRequest = (req, res) => {
  try {
    const requests = readData();
    const index = requests.findIndex((r) => r.id === req.params.id);

    if (index !== -1) {
      const updatedRequest = { ...requests[index], ...req.body };
      requests[index] = updatedRequest;
      writeData(requests);
      res.status(200).json({
        message: "Request updated successfully",
        request: updatedRequest,
      });
    } else {
      res
        .status(404)
        .json({ message: `Request with ID ${req.params.id} not found.` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating request.", error });
  }
};

export const deleteRequest = (req, res) => {
  try {
    let requests = readData();
    const filteredRequests = requests.filter((r) => r.id !== req.params.id);

    if (requests.length !== filteredRequests.length) {
      writeData(filteredRequests);
      res.status(200).json({
        message: "Request deleted successfully",
        deletedId: req.params.id,
      });
    } else {
      res
        .status(404)
        .json({ message: `Request with ID ${req.params.id} not found.` });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting request.", error });
  }
};

export const markRequestComplete = (req, res) => {
  try {
    const requests = readData();
    const index = requests.findIndex((r) => r.id === req.params.id);

    if (index !== -1) {
      requests[index].status = "completed";
      writeData(requests);
      res.status(200).json({
        message: "Request marked as completed",
        request: requests[index],
      });
    } else {
      res
        .status(404)
        .json({ message: `Request with ID ${req.params.id} not found.` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error marking request as completed.", error });
  }
};
