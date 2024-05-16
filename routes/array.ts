

import express, { Request, Response } from 'express';

const router=express.Router();
router.post("/findarray",async (req: Request, res: Response)=>{
    const { array }: { array: any[] } = req.body;
  
    if (!Array.isArray(array)) {
      return res.status(400).send('Invalid payload format');
    }
       const index: number = array.lastIndexOf(3);
       console.log("LastIndexOf:", index); 
       res.json(`LastIndexOf: ${index}`);

        const newArray1: number[] = array.concat([6, 7, 8]);
        console.log("Concat:", newArray1);
        res.json(`Concat ${newArray1}`);

        array.push(6);
        console.log("Push:", array);
        res.json(`Push: ${array}`)

       const splicedArray: number[] = array.splice(1, 2);
       console.log("Splice:", splicedArray);
       res.json(`splice : ${splicedArray}`);

       const poppedItem: number | undefined = array.pop();
       console.log("Pop:", poppedItem);
       res.json(`Pop: ${poppedItem}`);

       const slicedArray: number[] = array.slice(1, 3);
       console.log("Slice:", slicedArray);
       res.json(`Slice: ${slicedArray}`);

        const mappedArray: number[] = array.map((item) => item * 2);
        console.log("Map:", mappedArray);
        res.json(`Map: ${mappedArray}`);


        const shiftedItem: number | undefined = array.shift();
        console.log("Shift:", shiftedItem);
        res.json(`Shift: ${shiftedItem}`);

        const filteredArray: number[] = array.filter((item) => item > 2);
        console.log("Filter:", filteredArray);
        res.json(`Filter: ${filteredArray}`);
         
        array.unshift(0);
        console.log("Unshift:", array);
        res.json(`Unshift: ${array}`)
      
        const nestedArray: number[][] = [[1, 2], [3, 4], [5, 6]];
        const flattenedArray: number[] = nestedArray.flat();
        console.log("Flat:", flattenedArray);
        res.json(`Flat ${flattenedArray}`)

        const foundItem: number | undefined = array.find((item) => item === 3);
        console.log("Find:", foundItem);
        res.json(`Find: ${foundItem}`);

        const joinedString: string = array.join("-");
        console.log("Join:", joinedString);
        res.json(`Join ${joinedString}`);

        const foundIndex: number = array.findIndex((item) => item === 4);
        console.log("FindIndex:", foundIndex);
        res.json(`FindIndex: ${foundIndex}`)

        const stringRepresentation: string = array.toString();
        console.log("ToString:", stringRepresentation)
        res.json(`ToString: ${stringRepresentation}`)


        const someResult: boolean = array.some((item) => item > 3);
        console.log("Some:", someResult);
        res.json(`Some: ${someResult}`);


        const stringToSplit: string = "Hello World";
        const splitArray: string[] = stringToSplit.split(" ");
        console.log("Split:", splitArray);
        res.json(`Split: ${splitArray}`);


        const everyResult: boolean = array.every((item) => item > 0);
        console.log("Every:", everyResult);
        res.json(`Every: ${everyResult}`);


        const replacedString: string = stringToSplit.replace("World", "Universe");
        console.log("Replace:", replacedString);
        res.json(`Replace: ${replacedString}`);

        const includesResult: boolean = array.includes(3);
        console.log("Includes:", includesResult);
        res.json(`Includes: ${includesResult}`);


            const indexOfItem: number = array.indexOf(2);
            console.log("IndexOf:", indexOfItem);
            res.json(`IndexOf: ${indexOfItem}`);




});

export default router;