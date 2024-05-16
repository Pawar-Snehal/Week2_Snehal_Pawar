

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


        
     
});

export default router;
