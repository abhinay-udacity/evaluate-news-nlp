import { checkForName } from "../js/nameChecker";

describe('testing the namechecker functionality', ()=>{
    test('Check if checkForName is defined correctly',()=>{ 
    expect(checkForName).toBeDefined();
   })

   test('Check if checking length correctly',()=>{
    expect(checkForName('')).toEqual(false)
   })
})