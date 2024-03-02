import { serverCreate } from "./Server.js";

const PORT = process.env.PORT || 3000;
const app = serverCreate();

app.listen(PORT, () => {
  console.log(`O servidor está no ar http://localhost:${PORT}`);
});
