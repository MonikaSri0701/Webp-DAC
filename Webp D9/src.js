import { writeFileSync } from "node:fs"; 
import { readFileSync } from "node:fs"; 
export function write(){     
    let filepath = "D:\WEBP\Webp D9\wpt2";     
    let writeData = writeFileSync(filepath, "Good Morning"); 
    console.log(writeData); 
    } 
    export function read(){     
        let filepath =  "D:\WEBP\Webp D9\wpt2"; 
        let fileData = readFileSync(filepath , { encoding: "utf-8"});     
        return fileData; 
    } 