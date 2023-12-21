//@ts-ignore
import { Elm } from "./Main.elm";

Elm.Main.init({ node: document.querySelector("main") });

console.log("Hello via Bun!");
