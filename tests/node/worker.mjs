import { parentPort } from "worker_threads";
import * as Comlink from "../../dist/esm/comlink.mjs";

Comlink.expose((a, b) => a + b, parentPort);
