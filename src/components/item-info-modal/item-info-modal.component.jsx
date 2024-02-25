import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  maxHeight: "80%",
  overflowY: "auto",
  bgcolor: "#1a1a1b",
  border: "2px solid #000",
  color: "whitesmoke",
  opacity: "0.9",
  boxShadow: 24,
  p: 4,
};

const ItemInfoModal = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>More Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>Space Component: Quantum Stabilization Module (QSM-2000)</h1>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h2>Overview:</h2>
            <p>
              The Quantum Stabilization Module (QSM-2000) is a cutting-edge
              component designed to enhance the stability and reliability of
              spacecraft operating in deep space environments. Utilizing
              advanced quantum entanglement principles, the QSM-2000 offers
              unparalleled precision and performance in maintaining spacecraft
              trajectory and structural integrity.
            </p>

            <h2>Key Features:</h2>
            <ul>
              <li>
                Quantum Entanglement Stabilization: Leverages quantum
                entanglement phenomena to stabilize spacecraft orientation and
                minimize oscillation.
              </li>
              <li>
                Adaptive Feedback Control: Employs real-time feedback mechanisms
                to dynamically adjust stabilization parameters based on
                environmental conditions and spacecraft dynamics.
              </li>
              <li>
                Redundant Fail-Safe Systems: Incorporates redundant fail-safe
                systems to ensure continued operation in the event of component
                malfunction or external interference.
              </li>
              <li>
                Compact Form Factor: Compact design minimizes space requirements
                while maximizing functionality, making it ideal for integration
                into spacecraft of varying sizes.
              </li>
              <li>
                Low Power Consumption: Optimized power management system ensures
                efficient operation, minimizing energy consumption and extending
                operational lifespan.
              </li>
            </ul>

            <h2>Technical Specifications:</h2>
            <ul>
              <li>Dimensions: 20 cm x 15 cm x 10 cm</li>
              <li>Weight: 2.5 kg</li>
              <li>Operating Temperature: -50°C to 70°C</li>
              <li>Power Consumption: 100 W (nominal), 150 W (peak)</li>
              <li>Stabilization Accuracy: &lt; 0.001 degrees</li>
              <li>Input Voltage: 24 VDC</li>
              <li>Interface: RS-232, Ethernet</li>
              <li>
                Certification: ISO 9001, Space-grade component certification
              </li>
            </ul>

            <h2>Environmental Performance:</h2>
            <ul>
              <li>
                Radiation Hardened: Resistant to radiation exposure encountered
                in deep space environments, ensuring reliable operation over
                extended mission durations.
              </li>
              <li>
                Thermal Stability: Designed to withstand extreme temperature
                variations and thermal cycling, maintaining performance under
                harsh operating conditions.
              </li>
            </ul>

            <h2>Applications:</h2>
            <ul>
              <li>
                Deep Space Probes: Enhances stability and maneuverability of
                unmanned deep space probes, enabling precise trajectory control
                and data collection.
              </li>
              <li>
                Satellite Constellations: Facilitates precise positioning and
                orientation of satellite constellations for telecommunications,
                Earth observation, and navigation applications.
              </li>
              <li>
                Interstellar Missions: Critical component for interstellar
                missions requiring long-duration stability and reliability for
                spacecraft traversing vast distances.
              </li>
            </ul>

            <p>
              <strong>Note:</strong> The Quantum Stabilization Module (QSM-2000)
              is a proprietary technology developed by Quantum Dynamics
              Technologies and is protected by various patents and intellectual
              property rights.
            </p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ItemInfoModal;
